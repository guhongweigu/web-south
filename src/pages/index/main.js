import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import '@/plugins/element.js';
import '@/plugins/axios';
import '@/plugins/check-res';
import '@/plugins/meta';
import '@/plugins/filters';
import '@/plugins/loading';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
