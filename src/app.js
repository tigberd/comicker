import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './app.scss';
import './pages/east.scss'
import Entry from './pages/entry';
import East1 from './pages/east1';
import East2 from './pages/east2';
import East3 from './pages/east3';
import East4 from './pages/east4';
import East5 from './pages/east5';
import East6 from './pages/east6';

Vue.use(VueRouter);

export default Vue.extend({});

const routes = [
  { path: '/', component: Entry },
  { path: '/east1', component: East1 },
  { path: '/east2', component: East2 },
  { path: '/east3', component: East3 },
  { path: '/east4', component: East4 },
  { path: '/east5', component: East5 },
  { path: '/east6', component: East6 },
];

const router = new VueRouter({
  routes,
});

window.onload = () => {
  const app = new Vue({
    router,
  }).$mount('#app');
};
