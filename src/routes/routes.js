import Home from '../view/Home.vue';
import Search from '../view/Search.vue';
import Detail from '../view/Detail.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/movies/:slug',
    component: Detail,
  },
  {
    path: '/search',
    component: Search,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
