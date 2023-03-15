import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import VeeValidate from 'vee-validate';
import mitt from 'mitt';

Vue.config.productionTip = false

const emitter = mitt();

const cookiesOpt = {
  expireTimes: '365d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None'
}
Vue.use(VueCookies, cookiesOpt);
Vue.use(VeeValidate);
window.app  = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
