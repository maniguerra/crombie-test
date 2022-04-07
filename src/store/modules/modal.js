export default {
  namespaced: true,
  state: {
    show: false,
  },
  mutations: {
    SET_SHOW(state, payload) {
      state.show = payload;
    }
  },
  actions: {
    set({ commit }, data) {
      commit("SET_SHOW", data);
    }
  },
  getters: {
    get({ show }) {
      return show;
    }
  },
};
