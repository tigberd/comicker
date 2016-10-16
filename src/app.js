import $ from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import store from './vuex/store';
import router from './router';

import template from './app.html';
import './app.scss';
import './pages/east.scss';

import Repository from './circle-data-repository';

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

  // イベントの多重登録を防ぐためbootstrapのモーダル処理を仕方なく外に出した
  $('#circle-save').click(() => {
    const name = $('#name-text').val();
    const place = $('#place-text').val();
    const remark = $('#remark-text').val();
    const shimaId = $('#shima-id').val();
    const circleId = $('#circle-id').val();
    const clazz = $('#clazz').val();
    store.dispatch('pushCircleEntry', {
      name,
      place,
      remark,
      shimaId,
      circleId,
      clazz
    });

    $('#circle-modal').modal('hide');
  });
};
