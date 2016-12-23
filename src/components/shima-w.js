import Vue from 'vue';

import dojinCircle from './dojin-circle';

import template from './shima-w.html';

export default Vue.extend({
  template,

  props: ['shima-id', 'top', 'bottom', 'tl', 'tr', 'bl', 'br'],

  components: {
    'dojin-circle': dojinCircle,
  },
});

