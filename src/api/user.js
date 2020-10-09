import {get, post} from "@/plugin/utils/request";

const user = "/user"
const UserApi = {
    findAll: user + '/findAll',
    login: user + '/login',
    delete: user + '/delete',
    save: user + '/save'
}
//获取用户数据
export let getList = () => get(UserApi.findAll)
//用户登录
export let login = userInfo => post(UserApi.login, userInfo)
//删除用户
export let del = id => post(UserApi.delete, id)
//新增用户
export let add = userInfo => post(UserApi.save, userInfo)
