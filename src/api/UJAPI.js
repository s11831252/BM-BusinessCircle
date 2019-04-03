import http_axios from '../utils/http/axios'
import http_wx from '../utils/http/wxhttp'
const http = mpvue_Mode === 'WX' ? http_wx : http_axios;

let BaseHost = process.env.NODE_ENV == 'development'?"http://192.168.0.86:818/": "https://live.ujianchina.net/";

//  let BaseHost = "http://192.168.0.86:818/";

export default {
    Account_Login: param => {
        return http.post(BaseHost + "api/Account/Login", param)
    },
    Account_wxLogin: (code,extAppid,param) => {
        return http.post(BaseHost + `Weixin/wxLogin?code=${code}&extAppid=${extAppid}`, param)
    },
    User_Get: param => {
        return http.get(BaseHost + "api/User/Get", param)
    },
}