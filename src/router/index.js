import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
        redirect: "/homepage",
        children: [{
            path: '/homepage',
            name: 'HomePage',
            component: () => import(/* webpackChunkName: "homePageIndex" */ '../views/HomePage/index')
        }, {
            path: '/discover',
            name: 'Discover',
            component: () => import(/* webpackChunkName: "discover" */ '../views/Discover/index')
        }, {
            path: '/cart',
            name: 'Cart',
            component: () => import(/* webpackChunkName: "cart" */ '../views/Cart/index')
        }, {
            path: '/userinfo',
            name: 'UserInfo',
            component: () => import(/* webpackChunkName: "userinfo" */ '../views/UserInfo/index')
        },]
    },
    // {
    //   path: '/about',
    //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
