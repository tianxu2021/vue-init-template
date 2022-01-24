/*
 * @Author: 田旭
 * @Date: 2022-01-14 14:57:59
 * @LastEditTime: 2022-01-24 15:23:28
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\utils\filter.js
 * @Description: 全局过滤器
 * 
 */
import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", (val, formatStr) => {
  return val ? moment(val).format(formatStr) : "--";
})