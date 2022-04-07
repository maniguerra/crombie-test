<template>
  <div class="card-character">
    <div class="col-info">
      <ul>
        <li class="list-item">
          <strong>{{ character.name }} </strong>
        </li>

        <li class="list-item">Species: {{ character.species }}</li>
        <li class="list-item">Origin: {{ character.origin.name }}</li>
      </ul>
      <button @click="openModal">See more</button>
    </div>
    <div class="col-image">
      <img
        :src="character.image"
        class="card-character-image"
        :alt="character.name"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const openModal = () => {
      store.dispatch("character/set", props.character);
      store.dispatch("modal/set", true);
    };
    return {
      openModal,
    };
  },
};
</script>

<style></style>
<style scoped>
.card-character-image {
  width: 150px;
}

.card-character {
  display: inline-flex;
  border: 2px solid rgba(0, 0, 0, 0.7);
  margin: 8px;
  box-shadow: 1px 1px 6px 1px rgb(0 0 0 / 50%);
}

.list-item {
  list-style: none;
  font-size: 13px;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.col-image {
  display: flex;
}

.col-info {
  width: 150px;
}
.col-info > ul {
  padding-inline-start: 0;
  padding: 0 4px;
}
</style>
