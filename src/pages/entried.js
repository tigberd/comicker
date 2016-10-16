import Vue from 'vue';

import template from './entried.html';

import Repository from '../circle-data-repository';

export default Vue.extend({
  mounted: function mounted() {
    this.entries = Repository.allCircleEntries();
  },

  template,

  data: function data() {
    return {
      entries: [],
    };
  },
});
