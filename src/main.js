import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from "axios";
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
