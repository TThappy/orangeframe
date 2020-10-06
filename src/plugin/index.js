import './orange.mixin'
import Vue from 'vue'
import '~p/css/global.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import CenterContainer from "@/components/CenterContainer";
Vue.use(Antd)

export default {
    install(Vue){
        Vue.component(CenterContainer.name,CenterContainer)
    }
}
