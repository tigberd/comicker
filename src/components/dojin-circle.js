import Vue from 'vue';
import template from './dojin-circle.html';
import './dojin-circle.scss';

export default Vue.extend({
  template,

  props: ['name'],

  data: function data() {
    return {
      clazz: '',
    };
  },

  methods: {
    onClick: function onClick() {
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
    },
  },
});
