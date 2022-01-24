/*
 * @Author: 田旭
 * @Date: 2022-01-14 11:14:16
 * @LastEditTime: 2022-01-24 15:10:52
 * @LastEditors: 田旭
 * @FilePath: \vue-cli3-init\src\router\index.js
 * @Description: 路由配置
 * 
 */
import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'index',
        component:  () => import('@/views/index')
    },{
        path:'/start',
        name:'start',
        component: () =>import('@/views/start')
    },{
        path:'/test',
        name:'test',
        component: () =>import('@/views/test')
    },{
        path:'/404',
        name:'404',
        component: () =>import('@/views/error/404')
    },{
        path:'/505',
        name:'505',
        component: () =>import('@/views/error/505')
    }
]


const router = new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if(to.matched.length === 0) {
        next('/404')
    }
    next()
})


export default router