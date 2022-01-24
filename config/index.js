/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 14:54:40
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\config\index.js
 * @Description: 根据不同环境开发
 * 
 */
const config = {
  // 生产环境
  'production': {
    type:'PRO',
    baseURL: 'http://172.20.101.179:9000',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    type:'DEV',
    baseURL: 'http://tianxu.website:5000',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    type:'TEST',
    baseURL: 'http://172.20.101.179:9001',
    authBaseURL: ''
  }
}
module.exports = config[process.env.NODE_ENV]