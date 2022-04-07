import { createStore } from "vuex";
import darkMode from "./modules/darkMode";
import modal from "./modules/modal";
import character from "./modules/character";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    darkMode,
    modal,
    character
  },
});
