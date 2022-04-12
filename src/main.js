import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import directives from './directives';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  directives,
  render: (h) => h(App)
}).$mount('#app');
