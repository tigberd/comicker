import Vue from 'vue';
import VueRouter from 'vue-router';

import Entried from './pages/entried';
import East1 from './pages/east1';
import East2 from './pages/east2';
import East3 from './pages/east3';
import East4 from './pages/east4';
import East5 from './pages/east5';
import East6 from './pages/east6';
import West1 from './pages/west1';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Entried },
  { path: '/east1', component: East1 },
  { path: '/east2', component: East2 },
  { path: '/east3', component: East3 },
  { path: '/east4', component: East4 },
  { path: '/east5', component: East5 },
  { path: '/east6', component: East6 },
  { path: '/west1', component: West1 },
];

export default new VueRouter({
  routes,
});
