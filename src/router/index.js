import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */ '@/views/Home')
    },
    {
        path: '/fee-type',
        name: 'fee-type',
        component: () => import(/* webpackChunkName: 'fee-type' */ '@/views/FeeType')
    },
    {
        path: '/regular',
        name: 'regular',
        component: () => import(/* webpackChunkName: 'regular' */ '@/views/Regular')
    },
    {
        path: '/target',
        name: 'target',
        component: () => import(/* webpackChunkName: 'target' */ '@/views/Target')
    },
    {
        path: '/target-additionally',
        name: 'target-additionally',
        component: () => import(/* webpackChunkName: 'target-additionally' */ '@/views/TargetAdditionally')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
