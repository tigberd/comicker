import Vue from 'vue';
import VueRouter from 'vue-router';

import Entried from './pages/entried';
import East1 from './pages/east1';
import East2 from './pages/east2';
import East3 from './pages/east3';
import East4 from './pages/east4';
import East5 from './pages/east5';
import East6 from './pages/east6';
import West34_1 from './pages/west34-1';
import West34_2 from './pages/west34-2';
import West34_3 from './pages/west34-3';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Entried },
  { path: '/east1', component: East1 },
  { path: '/east2', component: East2 },
  { path: '/east3', component: East3 },
  { path: '/east4', component: East4 },
  { path: '/east5', component: East5 },
  { path: '/east6', component: East6 },
  { path: '/west34-1', component: West34_1 },
  { path: '/west34-2', component: West34_2 },
  { path: '/west34-3', component: West34_3 }
];

export default new VueRouter({
  routes,
});
