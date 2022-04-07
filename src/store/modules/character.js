export default {
    namespaced: true,
    state: {
      character: {},
    },
    mutations: {
      SET_CHARACTER(state, payload) {
        state.character = payload;
      },
    },
    actions: {
      set({ commit }, data) {
        commit("SET_CHARACTER", data);
      },
    },
    getters: {
      get({ character }) {
        return character;
      },
    },
  };
  