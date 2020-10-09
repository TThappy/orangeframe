import mixin from './mixin'
import '~p/css/global.css'
import 'nprogress/nprogress.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import CenterContainer from "@/components/CenterContainer";
import filter from "@/plugin/filter";

export default {
    install(Vue,options = {}){
        Vue.use(Antd)
        Vue.mixin(mixin(options))
        Vue.component(CenterContainer.name,CenterContainer)
        Object.keys(filter).forEach(filterName => {
            Vue.filter(filterName,filter[filterName])
        })
    }
}


