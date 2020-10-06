import axios from 'axios'
import Qs from 'qs'


const service = axios.create({
    //baseURL: process.env.BASE_API, // api的base_url 如果前端跟后端不在同一个服务器上，可以使用
    // timeout: 15000 // 请求超时时间
})

//这是post请求，可以直接发送对象
service.defaults.transformRequest = [(data) => {
    return Qs.stringify(data)
}]

// 可以在请求头添加对应信息
service.interceptors.request.use(config => {
    // if (store.getters.token) {
    //   config.headers['JG-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})


/**
 * respone拦截器
 * 对请求返回的错误进统一处理
 */
// service.interceptors.response.use(
//     response => {
//         /**
//          * 对接口请求成功返回的错误进统一处理
//          */
//         const res = response.data
//         if (!res.success) {
//             Message({
//                 message: res.error,
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//             return Promise.reject(res.error)
//         }
//         return response.data
//     },
//     error => {
//         /*
//         * 对接口请求失败进行统一处理
//         */
//         console.log('err:' + error)// for debug
//         Message({
//             message: error.message,
//             type: 'error',
//             duration: 5 * 1000
//         })
//         return Promise.reject(error)
//     }
// )


export default service
