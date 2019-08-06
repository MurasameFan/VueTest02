// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import QS from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(ElementUI)
Vue.component('icon', Icon)

// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
// axios.defaults.baseURL = 'https://localhost:8085/worker'
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.prototype.$QS = QS
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
