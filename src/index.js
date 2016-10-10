import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import template from './app.html';
import './app.scss';
// import Navbar from './components/navbar';
import Shima from './components/shima';

window.onload = () => {
  const app = new Vue({
    template,
    el: '#app',
    data: {
    },
    components: {
      // 'navbar': Navbar,
      'shima': Shima,
    },
  });
};
