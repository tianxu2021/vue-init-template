/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 15:04:39
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\main.js
 * @Description: 全局配置
 * 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import "@/plugins/ant-design"; //按需引入ant-design-vue

import "@/plugins/vxe-model"; //按需引入vxe

import axios from "./utils/request"; //引入axios

Vue.config.productionTip = false; //设置为false以阻止vue在启动时生成生产提示

Vue.prototype.$http = axios; //axios挂载vue原型

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
