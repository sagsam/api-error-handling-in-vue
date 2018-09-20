import Vue from 'vue'
import App from './App.vue'
import { http } from '@/http/'
import error from '@/directives/error'

Vue.config.productionTip = false

global.$http = http

Vue.directive('error', error)

new Vue({
  render: h => h(App)
}).$mount('#app')
