import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from '@/plugin'
Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(mixin, {log: true})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
