/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 14:04:15
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\api\user.js
 * @Description: 
 * 
 */
import request from '@/utils/request'

export default {
  login (data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  // 获取用户信息
  getUserInfo () {
    return request({
      url: '/userinfo',
      method: 'get'
    })
  },
}
