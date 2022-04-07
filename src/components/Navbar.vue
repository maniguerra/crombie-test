<template>
  <div class="toggle-mode">
    <span class="text-toggle">Dark mode: {{ darkMode ? "on" : "off" }}</span>
    <Toggle class="toggle-button" v-model="darkMode" @change="toggleDarkMode" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Toggle from "@vueform/toggle";
export default {
  name: "Navbar",
  components: {
    Toggle,
  },
  setup() {
    const store = useStore();
    const darkMode = computed(() => store.getters["darkMode/get"]);

    const toggleDarkMode = () => {
      store.dispatch("darkMode/set", !darkMode.value);
    };

    return {
      toggleDarkMode,
      darkMode,
    };
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style scoped>


.toggle-mode {
  position: absolute;
  right: 10px;
  top: 10px;
}

.text-toggle {
  margin-right: 8px;
}

.toggle {
  border: 0;
}
@media screen and (max-width: 640px) {
  .toggle-mode {
    position:absolute;
    top: 40px;
    right:0;
    left:0;
    width:100vw;
  }
}
</style>
