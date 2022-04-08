<template>
  <div :class="{ dark: darkMode == true }">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup() {
    const store = useStore();
    const darkMode = computed(() => store.getters["darkMode/get"]);
    return {
      darkMode,
    };
  },
};
</script>
<style lang="scss">
body,
html,
h3 {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.dark {
  background-color: #2c3e50;
  color: #ddd;
  height: max-content;
  min-height: 100vh;
}

button {
  background-color: #2c3e50;
  color: #fff;
  border: 0;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease all;
}

button:disabled {
  background-color: #d4d4d4;
  color: rgb(162, 162, 162);
  cursor: default;
  box-shadow: none;
  transition: none;
}

button:hover {
  box-shadow: none;
}

.dark button {
  background-color: #8c9baa;
  color: #fff;
  border: 0;
  padding: 0.5rem;
  border-radius: 10px;
}

.dark button:disabled {
  background-color: #d4d4d4;
  color: rgb(162, 162, 162);
}

.dark .character-modal-box {
  background-color: #2c3e50 !important;
  color: #fff;
}

.dark .character-modal-box > .col-info {
  background-color: #2c3e50;
  color: #fff;
}

.load-more-button {
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.toggle-container.toggle-button:focus{
  box-shadow:none;
}

.toggle.toggle-on{
  background:none;
  border-color:#fff;
}
</style>
