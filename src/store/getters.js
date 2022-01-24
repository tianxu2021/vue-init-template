/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 15:18:44
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\store\getters.js
 * @Description: 计算更新state
 * 
 */
const getters = {
  requestLoading: state => state.app.requestLoading,
  size: state => state.app.size,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters