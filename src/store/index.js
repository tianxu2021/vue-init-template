/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 15:17:00
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\store\index.js
 * @Description: vxe配置
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
    getters
})
export default store
