import Vue from 'vue'
import App from './App.vue'
import { http } from '@/http/'

Vue.config.productionTip = false

global.$http = http

new Vue({
  render: h => h(App)
}).$mount('#app')
