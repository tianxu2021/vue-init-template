/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 14:56:06
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\utils\request.js
 * @Description: 配置axios实例
 * 
 */
import axios from "axios";
import config from "../../config/index"; // 路径配置

// 创建axios 实例
const service = axios.create({
  baseURL: config.baseURL,
  timeout: 10000, // 请求超时时间
  withCredentials: true, //允许跨域带session
});
// request 拦截器
service.interceptors.request.use(
  (config) => {
    // 自定义config 配置
    return config;
  },
  (error) => {
    //  处理请求出错的情况
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 处理response 正常返回时的逻辑

    return res;
  },
  (error) => {
    // 处理response 出错时的逻辑

    return Promise.reject(error);
  }
);

export default service;
