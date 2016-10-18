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
      editableClass: '',
    };
  },

  computed: {
    editable() {
      return store.state.editable;
    },

    editableClass() {
      return this.editable ? 'editable' : '';
    },
  },

  methods: {
    editMode() {
      store.dispatch('editMode');
    },

    normalMode() {
      store.dispatch('normalMode');
    },
  },
});

window.onload = () => {
  new Comicket().$mount('#app');
};
