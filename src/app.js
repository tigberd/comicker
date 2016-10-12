import Vue from 'vue';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import store from './vuex/store';
import router from './router';

import template from './app.html';
import './app.scss';
import './pages/east.scss';

Vue.use(VueRouter);

const Comicket = Vue.extend({
  store,
  router,
  template,

  data: function data() {
    return {
      editable: store.state.editable,
      editableClass: '',
    };
  },

  methods: {
    editMode() {
      store.commit('editMode');
      this.editable = store.state.editable;
      this.editableClass = 'editable';
    },

    normalMode() {
      store.commit('normalMode');
      this.editable = store.state.editable;
      this.editableClass = '';
    },
  },
});


window.onload = () => {
  new Comicket().$mount('#app');
};
