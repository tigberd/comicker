import Vue from 'vue';

import template from './app.html';
import './app.scss';

import Navbar from './components/navbar.js';

export default Vue.extend({
  template,

  components: {
    'navbar': Navbar,
  },
});

