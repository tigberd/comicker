import $ from 'jquery';
import Vue from 'vue';

import store from '../vuex/store';
import template from './dojin-circle.html';
import './dojin-circle.scss';

import Repository from '../circle-data-repository';

export default Vue.extend({
  mounted: function mounted() {
    if (localStorage[(`${this.shimaId},${this.circleId}`)]) {
      this.clazz = localStorage[(`${this.shimaId},${this.circleId}`)];
    }
  },

  template,

  data: function data() {
    return {
      clazz: '',
    };
  },
  props: ['shima-id', 'circle-id'],

  methods: {
    onClick: function onClick() {
      if (store.state.editable) {
        $('#circle-modal').modal('show');
        $('#name-text').val('');
        $('#place-text').val('');
        $('#remark-text').val('');
      }

      if (this.clazz === '') {
        this.clazz = 'btn-1';
      } else if (this.clazz === 'btn-1') {
        this.clazz = 'btn-2';
      } else if (this.clazz === 'btn-2') {
        this.clazz = 'btn-3';
      } else if (this.clazz === 'btn-3') {
        this.clazz = 'btn-4';
      } else if (this.clazz === 'btn-4') {
        this.clazz = 'btn-5';
      } else if (this.clazz === 'btn-5') {
        this.clazz = 'btn-6';
      } else if (this.clazz === 'btn-6') {
        this.clazz = 'btn-7';
      } else if (this.clazz === 'btn-7') {
        this.clazz = 'btn-8';
      } else if (this.clazz === 'btn-8') {
        this.clazz = '';
      }

      Repository.saveCircleState(this.shimaId, this.circleId, this.clazz);
    },
  },
});
