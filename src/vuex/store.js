import Vue from 'vue';
import Vuex from 'vuex';

import Repository from '../circle-data-repository';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editable: false,
    entries: Repository.allCircleEntries(),
  },
  mutations: {
    editMode(state) {
      state.editable  = true;
    },
    normalMode(state) {
      state.editable = false;
    },

    pushCircleEntry(state, entry) {
      Repository.pushCircleEntry(
        entry.name,
        entry.place,
        entry.remark,
        entry.shimaId,
        entry.circleId,
        entry.clazz,
      );
      state.entries = Repository.allCircleEntries();
    },

    deleteCircleEntry(state, entry) {
      Repository.deleteCircleEntry(entry.shimaId, entry.circleId);
      state.entries = Repository.allCircleEntries();
    },
  },

  actions: {
    editMode({ commit }) {
      commit('editMode');
    },

    normalMode({ commit }) {
      commit('normalMode');
    },

    pushCircleEntry({ commit }, entry) {
      commit('pushCircleEntry', entry);
    },

    deleteCircleEntry({ commit }, entry) {
      commit('deleteCircleEntry', entry);
    },
  },
});
