/**
 * 一些全局的config配置
 */
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'http://172.20.101.179:9000',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://tianxu.website:5000',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://172.20.101.179:9001',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]
