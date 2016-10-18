import Vue from 'vue';
import { modal } from 'vue-strap';

import store from '../vuex/store';
import template from './dojin-circle.html';
import './dojin-circle.scss';

import Repository from '../circle-data-repository';

export default Vue.extend({
  mounted: function mounted() {
    const entry = store.state.entries.find(_entry => (
      _entry.circleId === this.circleId && _entry.shimaId === this.shimaId
    ));

    if (entry) {
      this.clazz = entry.clazz;
    } else {
      this.clazz = '';
    }
  },

  template,

  components: {
    modal,
  },

  data: function data() {
    return {
      name: '',
      place: '',
      remark: '',
      clazz: '',
      showModal: false,
    };
  },
  props: ['shima-id', 'circle-id'],

  methods: {
    onClick: function onClick() {
      if (this.clazz === '' && !store.state.editable) {
        return;
      }

      const oldEntry = Repository.findCircleEntry(this.shimaId, this.circleId);

      if (store.state.editable) {
        // 編集モードの場合
        this.showModal = true;
        this.name = oldEntry ? oldEntry.name : '';
        this.place = oldEntry ? oldEntry.place : '';
        this.remark = oldEntry ? oldEntry.remark : '';
        this.shimaId = this.shimaId;
        this.circleId = this.circleId;
      } else {
        // 通常モードの場合
        this.changeClazz();
        store.dispatch('pushCircleEntry', {
          name: oldEntry ? oldEntry.name : '',
          place: oldEntry ? oldEntry.place : '',
          remark: oldEntry ? oldEntry.remark : '',
          shimaId: this.shimaId,
          circleId: this.circleId,
          clazz: this.clazz,
        });
      }
    },

    onOkClick: function onOkClick() {
      this.changeClazz();
      store.dispatch('pushCircleEntry', {
        name: this.name,
        place: this.place,
        remark: this.remark,
        shimaId: this.shimaId,
        circleId: this.circleId,
        clazz: this.clazz,
      });

      this.showModal = false;
    },

    changeClazz() {
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
    },
  },
});
