import $ from 'jquery';
import Vue from 'vue';

import store from '../vuex/store';
import template from './dojin-circle.html';
import './dojin-circle.scss';

import Repository from '../circle-data-repository';

export default Vue.extend({
  mounted: function mounted() {
    const entry = Repository.allCircleEntries().find(_entry => (
      _entry.circleId == this.circleId && _entry.shimaId == this.shimaId
    ));

    entry ? this.clazz = entry.clazz : this.clazz = '';
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
      if (this.clazz === '' && !store.state.editable) {
        return;
      }

      const oldEntry = Repository.findCircleEntry(this.shimaId, this.circleId);
      console.log(oldEntry);

      if (this.clazz === '' || this.clazz === 'btn-0') {
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
        this.clazz = 'btn-0';
      }

      if (store.state.editable) {
        $('#circle-modal').modal('show');

        $('#name-text').val(oldEntry ? oldEntry.name : '');
        $('#place-text').val(oldEntry ? oldEntry.place : '');
        $('#remark-text').val(oldEntry ? oldEntry.remark : '');
        $('#shima-id').val(this.shimaId);
        $('#circle-id').val(this.circleId);
        $('#clazz').val(this.clazz);
      } else {
        const newEntry = {
          name: '',
          place: '',
          remark: '',
          shimaId: this.shimaId,
          circleId: this.circleId,
          clazz: this.clazz,
        };

        Repository.pushCircleEntry(
          oldEntry ? oldEntry.name : '',
          oldEntry ? oldEntry.place : '',
          oldEntry ? oldEntry.remark : '',
          this.shimaId,
          this.circleId,
          this.clazz
        );
      }
    },
  },
});
