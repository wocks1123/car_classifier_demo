import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Intro from '../views/Intro.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/dataset',
    name: 'Dataset',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dataset.vue')
  },
  {
    path: '/ref',
    name: 'Reference',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reference.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
