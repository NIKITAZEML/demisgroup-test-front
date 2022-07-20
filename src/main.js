import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from "axios";


import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  store,
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
