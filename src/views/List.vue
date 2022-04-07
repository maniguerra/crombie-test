<template>
  <div class="home">
    <Filter />
    <hr />
    <h3>Characters list</h3>
    <span>
      Showing {{ list.length }} characters of a total of {{ info.count }}
    </span>
    <div class="character-card-container">
      <Card v-for="(item, index) in list" :key="index" :character="item" />
    </div>
    <button class="load-more-button" @click="loadMore">Load more</button>
    <CharacterModal v-if="modal" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";
import axios from "axios";
import Card from "../components/Card.vue";
import Filter from "../components/Filter.vue";
import CharacterModal from "../components/CharacterModal.vue";

export default {
  name: "Home",
  components: { Card, Filter, CharacterModal },
  setup() {
    const store = useStore();
    const list = ref([]);
    const info = ref({});
    const modal = computed(() => store.getters["modal/get"]);

    const getList = () => {
      let url = "https://rickandmortyapi.com/api/character";
      axios.get(url).then((response) => {
        list.value = response.data.results;
        info.value = response.data.info;
      });
    };

    const loadMore = () => {
      let url = info.value.next;
      axios.get(url).then((response) => {
        list.value = list.value.concat(response.data.results);
        info.value = response.data.info;
      });
    };

    onMounted(() => {
      getList();
    });

    return {
      list,
      info,
      modal,
      loadMore,
    };
  },
};
</script>
