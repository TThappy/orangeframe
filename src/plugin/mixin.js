import axios from './utils/request'
import md5 from 'md5'
export default options => {
    return {
        methods: {
            $encrypt(str){
              return md5(md5(str).split().reverse().join()).split().reverse().join()
            },
            $get(url, params) {
                options.log && console.log(`GET请求了${url}`)
                let pro = axios.get(url, {params})
                pro.catch(() => {
                    this.$me("系统出现预期外的错误！")
                })
                return pro
            },
            $post(url, params) {
                options.log && console.log(`POST请求了${url}`)

                let pro = axios.post(url, params)
                pro.catch(() => {
                    this.$me("系统出现预期外的错误！")
                })
                return pro
            },
            $mc(content, onOk) {
                return this.$confirm({
                    title: '系统提示',
                    content,
                    okText: '确定',
                    cancelText: '取消',
                    onOk
                });
            },
            $ms(content, onClose, duration = 2) {
                return this.$message.success(content, duration, onClose)
            },
            $me(content, onClose, duration = 2) {
                return this.$message.error(content, duration, onClose)
            },
            $mw(content, onClose, duration = 2) {
                return this.$message.warning(content, duration, onClose)
            }
        }
    }

}

