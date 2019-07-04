import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import {routes} from './router.js'
import VueRouter from 'vue-router';
Vue.config.productionTip = false
Vue.use(Router);
const router =new VueRouter({
routes

});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
