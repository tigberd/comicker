import Vue from 'vue';
import salert from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';

import store from '../vuex/store';
import template from './entried.html';

export default Vue.extend({
  template,

  computed: {
    entries() {
      return store.state.entries;
    },

    editable() {
      return store.state.editable;
    },
  },

  methods: {
    deleteMemo(e, memo) {
      salert({
        title: 'メモの削除',
        text: '本当に削除してよろしいですか？',
        type: 'warning',
        showCancelButton: true,
      }, () => store.dispatch('deleteCircleEntry', memo)
      );
    },
  },
});
