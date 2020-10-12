import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import NProgress from 'nprogress'

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
            hidden: true,
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
    NProgress.start()
    document.title = 'orangeframe-' + to.meta.title
    let cookie = Cookies.get("authToken")
    if (to.name === 'login') {  //如果是登录页，则跳过验证
        next()  //必不可少
        return  //以下的代码不执行
    }
    if (!cookie) {   //判断登陆状态
        next({name: 'login'})   //如果未登录，则跳转到登录页
    } else {
        next()  //如果已经登陆，那就可以跳转
    }

})
router.afterEach((to, from) => {
    NProgress.done()
})
export default router
