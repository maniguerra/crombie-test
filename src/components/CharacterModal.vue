<template>
  <div class="character-modal" tabindex="0">
    <div class="character-modal-box">
      <button class="close-button" @click="closeModal">X</button>
      <div class="col-info">
        <ul>
          <li><strong>ID:</strong> #{{ character.id }}</li>
          <li><strong>Name: </strong>{{ character.name }}</li>
          <li><strong>Satus: </strong>{{ character.status }}</li>
          <li><strong>Species: </strong>{{ character.species }}</li>
          <li><strong>Gender: </strong>{{ character.gender }}</li>
          <li><strong>Origin: </strong>{{ character.origin.name }}</li>
          <li><strong>Location: </strong>{{ character.location.name }}</li>
        </ul>
      </div>
      <div class="col-img">
        <img :src="character.image" :alt="character.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const character = computed(() => store.getters["character/get"]);

    const checkEscKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const closeModal = () => {
      document.removeEventListener("keyup", checkEscKey);
      store.dispatch("modal/set", false);
    };

    onMounted(() => {
      document.addEventListener("keyup", checkEscKey);
    });

    return {
      closeModal,
      character,
    };
  },
};
</script>

<style scoped>
.character-modal {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  height: max-content;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.character-modal-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 1rem;
  background: rgb(218, 218, 218);
  border: 1px solid rgb(109, 109, 109);
  box-shadow: 1px 1px 6px 1px rgb(0 0 0 / 50%);
  position: relative;
}

.character-modal-box > .col-info > ul > li {
  list-style: none;
  text-align: left;
}

.character-modal-box > .col-info {
  padding: 1rem;
}

.character-modal-box > .col-img {
  display: flex;
}

@media screen and (max-width: 640px) {
  .character-modal-box {
    flex-direction: column;
  }
}
</style>
