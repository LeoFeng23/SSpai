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
            component: () => import(/* webpackChunkName: "cart" */ '../views/Cart/index'),
            redirect: '/cart/private/message',
            children: [
                {
                    path: 'private/message',
                    name: 'PrivateMessage',
                    component: () => import(/* webpackChunkName: "privateMessage" */ '../views/Cart/children/privateMessage'),
                },
                {
                    path: 'notification',
                    name: 'Notification',
                    component: () => import(/* webpackChunkName: "notification" */ '../views/Cart/children/notification'),
                },
            ]
        }, {
            path: '/userinfo',
            name: 'UserInfo',
            component: () => import(/* webpackChunkName: "userinfo" */ '../views/UserInfo/index')
        },]
    },
    {
        path: "/post/:id",
        name: 'Post',
        component: () => import(/* webpackChunkName: "post" */ '../views/InformationDetail/index')
    },
    {
        path: "/author/:slug",
        name: 'Author',
        component: () => import(/* webpackChunkName: "author" */ '../views/author/index'),
        redirect: '/author/:slug/author/updates',
        children: [
            {
                path: 'author/posts',
                name: 'AuthorPosts',
                component: () => import(/* webpackChunkName: "userPost" */ '../views/author/children/authorPosts'),
            },
            {
                path: 'author/updates',
                name: 'AuthorUpdates',
                component: () => import(/* webpackChunkName: "userUpdates" */ '../views/author/children/authorUpdates'),
            },
        ]
    },
    {
        path: '/charge/program',
        name: 'ChargeProgram',
        component: () => import(/* webpackChunkName: "chargeProgram" */ '../views/chargeProgram/index'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '../views/searchPage/index'),
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
