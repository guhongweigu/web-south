import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'template-one',
      component: () => import('@/pages/index/views/index.vue'),
    },
    {
      path: '/login',
      name: 'template-one',
      component: () => import('@/pages/index/views/login.vue'),
    },
    {
      path: '/register',
      name: 'template-one',
      component: () => import('@/pages/index/views/register.vue'),
    },
  ],
});
