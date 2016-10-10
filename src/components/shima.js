import Vue from 'vue';

import dojinCircle from './dojin-circle';

import template from './shima.html';
import './shima.scss';

export default Vue.extend({
  template,

  components: {
    'dojin-circle': dojinCircle,
  },
});
