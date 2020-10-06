import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                title: "登录"
            },
            component: () => import('~v/login/Login'),
        },
        {
            path: '/',
            name: 'layout',
            component: () => import('~v/layouts/Layout'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    meta: {
                        title: "首页"
                    },

                    component: () => import('~v/home/Home')
                },
                {
                    path: 'userlist',
                    name: 'userlist',
                    meta: {
                        module: "用户管理",
                        title: "用户列表"
                    },
                    component: () => import('~v/user/UserList')
                },
                {
                    path: 'orderlist',
                    name: 'orderlist',
                    meta: {
                        module: "业务管理",
                        title: "工单列表"
                    },
                    component: () => import('~v/order/OrderList')
                },
            ]
        },

    ]
})

router.beforeEach((to, from, next) => {
    document.title = 'orangeframe-' + to.meta.title
    next()
})
export default router
