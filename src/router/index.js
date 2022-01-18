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