<template>
  <div>
    <div class="back-button-container">
      <button class="back-button" @click="goBack">&leftarrow; Go back</button>
    </div>
    <hr />
    <div v-if="filteredInfo.count > 0">
      <h3>Search results</h3>
      <span>
        Showing {{ filteredList.length }} characters that have "{{
          route.query.name
        }}" in their name, of a total of {{ filteredInfo.count }}
      </span>
      <div class="character-card-container">
        <Card
          v-for="(item, index) in filteredList"
          :key="index"
          :character="item"
        />
      </div>
      <button
        class="load-more-button"
        v-if="filteredInfo.next"
        @click="loadMore"
      >
        Load more
      </button>
      <CharacterModal v-if="modal" />
    </div>
    <div v-else>
      <h3>No results found for your search "{{ route.query.name }}"</h3>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Card from "../components/Card.vue";
import CharacterModal from "../components/CharacterModal.vue";
import { useStore } from "vuex";

export default {
  components: { Card, CharacterModal },
  name: "Results",
  props: ["name"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const filteredList = ref([]);
    const filteredInfo = ref({});
    const modal = computed(() => store.getters["modal/get"]);

    const getFilteredList = () => {
      let url = `https://rickandmortyapi.com/api/character/?name=${route.query.name}`;
      axios
        .get(url)
        .then((response) => {
          filteredList.value = response.data.results;
          filteredInfo.value = response.data.info;
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    };

    const loadMore = () => {
      let url = filteredInfo.value.next;
      axios
        .get(url)
        .then((response) => {
          filteredList.value = filteredList.value.concat(response.data.results);
          filteredInfo.value = response.data.info;
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    };

    const goBack = () => {
      router.go(-1);
    };

    onMounted(() => {
      getFilteredList();
    });

    return {
      route,
      filteredList,
      filteredInfo,
      modal,
      loadMore,
      goBack,
    };
  },
};
</script>

<style scoped>
.back-button-container {
  height: 40px;
}

.back-button {
  position: absolute;
  left: 10px;
  top: 10px;
}

@media screen and (max-width: 640px) {
  .back-button-container {
    height: 60px;
  }

  .back-button {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    width: 80px;
    margin: auto;
  }
}
</style>
