import request from "@/utils/request";
import baseUrl from "@/api/baseUrl"
const BASE_URL = baseUrl + "/user"
export default {

    login(data) {
        return request({
            url: BASE_URL + "/login",
            method: "post",
            data
        })
    }

}
