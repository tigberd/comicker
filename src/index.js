import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'sweetalert/dist/sweetalert.css';

import store from './vuex/store';
import router from './router';

import template from './app.html';
import './app.scss';
import './pages/east.scss';

const Comicket = Vue.extend({
  template,
});

window.onload = () => {
  new Comicket({ router }).$mount('#app');
};
