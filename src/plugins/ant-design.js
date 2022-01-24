/*
 * @Author: 田旭
 * @Date: 2022-01-14 14:12:34
 * @LastEditTime: 2022-01-24 14:05:39
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\plugins\ant-design.js
 * @Description: 
 * 
 * 1、使用babel-plugin-import按需引入antd，具体配置在babel.config.js中。
 * 另外因为是定制主题的方式，还需要在vue.config.js中配置less的相关参数，
 * 其中javascriptEnabled的值必须为true，否则主题定制的样式无法生效
 * 
 * 
 * 2、这里是全局按需引入
 * 如果想要进一步提升性能
 * 可以只在此注册频繁用到的组件
 * 一些特定场景下才会用到的大型组件可以在具体业务组件中单独引入注册。
 * 例如List组件在运行时接近2M大小，并且只有xx页面中使用的话可以不在这里全局注册List组件，而是在xx中去单独按需引入List组件
 * */

import Vue from "vue";
import {
  Button,
  Empty,
  notification,
  message,
  Avatar,
  Icon,
  Tooltip,
  Menu,
  Dropdown,
  List,
  Spin,
  Result,
} from "ant-design-vue";
//
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;

/*需要注册的组件名字, 注册之前需要确保已经import这个组件*/
const components = [
  Button,
  Empty,
  notification,
  message,
  Avatar,
  Icon,
  Tooltip,
  Menu,
  Dropdown,
  List,
  Spin,
  Result,
];
register(components);
function register(components) {
  components.forEach((comp) => {
    Vue.use(comp);
  })
}
