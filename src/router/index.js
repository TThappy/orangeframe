import Vue from 'vue'
import Router from 'vue-router'
import { basicRouterMap } from '@/config/router.config'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: basicRouterMap
})
