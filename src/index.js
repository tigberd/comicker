import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'sweetalert/dist/sweetalert.css';

import router from './router';

import template from './app.html';
import './app.scss';
import './pages/east.scss';

const Comicker = Vue.extend({
  template,

  components: {
    'shima': shima
  },
});

window.onload = () => {
  new Comicker({ router }).$mount('#app');
};
