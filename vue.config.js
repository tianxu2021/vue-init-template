/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 14:55:38
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\vue.config.js
 * @Description: vue打包配置
 * 
 */
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
const env = require('./config/index')
console.log('路径配置',env)
module.exports = {
  assetsDir: 'assets',
  publicPath: './',
  lintOnSave: true, // 是否开启编译时是否不符合eslint提示
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true
    //   }
    // }
  },
  // 配置别名
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('router',resolve('src/router'))
        .set('utils',resolve('src/utils'))
        .set('static',resolve('src/static'))
        .set('store',resolve('src/store'))
        .set('views',resolve('src/views'))
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
               @import "@/assets/css/variable.scss"; 
               @import "@/assets/css/common.scss";
               @import "@/assets/css/mixin.scss";
              `
      },
      less: {
        //自定义ant-design颜色
        // modifyVars: {
        //   "primary-color": "#1DA57A",
        //   "link-color": "#1DA57A",
        //   "border-radius-base": "2px"
        // },
        javascriptEnabled: true
      }
    }
  },
}
