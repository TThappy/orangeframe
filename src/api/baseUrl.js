import {ApiServer} from '../../public/static/config/api_ip_config.js'
let burl='';
if (process.env.NODE_ENV=='development'){
    burl=ApiServer.DEV_SERVER
}
if (process.env.NODE_ENV=='production'){
    burl=ApiServer.PRO_SERVER
}
export default burl
