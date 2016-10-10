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
        this.clazz = 'btn-primary';
      } else if (this.clazz === 'btn-primary') {
        this.clazz = 'btn-success';
      } else if (this.clazz === 'btn-success') {
        this.clazz = 'btn-info';
      } else if (this.clazz === 'btn-info') {
        this.clazz = 'btn-warning';
      } else if (this.clazz === 'btn-warning') {
        this.clazz = 'btn-danger';
      } else if (this.clazz === 'btn-danger') {
        this.clazz = '';
      }
    },
  },
});
