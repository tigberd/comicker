import Vue from 'vue';

import dojinCircle from './dojin-circle';

import template from './shima-e7.html';
import './shima-e.scss';

export default Vue.extend({
  template,

  props: ['shima-id', 'tl', 'tr', 'bl', 'br'],

  components: {
    'dojin-circle': dojinCircle,
  },
});
