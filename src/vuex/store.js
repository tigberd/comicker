import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editable: false,
  },
  mutations: {
    editMode(state) {
      state.editable  = true;
    },
    normalMode(state) {
      state.editable = false;
    },
  },

  actions: {
    editMode({ commit }) {
      commit('editMode');
    },

    normalMode({ commit }) {
      commit('normalMode');
    },
  },
});
