import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});
