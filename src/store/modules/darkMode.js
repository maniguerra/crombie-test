export default {
  namespaced: true,
  state: {
    mode: false,
  },
  mutations: {
    SET_MODE(state, payload) {
      state.mode = payload;
    },
  },
  actions: {
    set({ commit }, data) {
      commit("SET_MODE", data);
    },
  },
  getters: {
    get({ mode }) {
      return mode;
    },
  }
}