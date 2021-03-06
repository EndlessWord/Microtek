import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from '../../store'
import '../../components/elementUI.js'

Vue.config.productionTip = false
// 统一设置服务器地址
axios.defaults.baseURL = 'http://127.0.0.1:8080'
Vue.prototype.axios = axios

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
