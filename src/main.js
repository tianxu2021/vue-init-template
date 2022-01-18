import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import "amfe-flexible" // 引入flexible
import "@/plugins/ant-design"
import axios from './utils/request'
Vue.config.productionTip = false //设置为 false 以阻止 vue 在启动时生成生产提示
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
