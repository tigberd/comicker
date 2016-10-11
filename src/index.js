import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import App from './app'
import template from './app.html';
import './app.scss';
import Navbar from './components/navbar';
import East6 from './pages/east6';

Vue.use(VueRouter);

export const router = new VueRouter();
router.start(App, '#app');

router.map(
  '/east6': {
    component: East6
  }
);

