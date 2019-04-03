import http_axios from '../utils/http/axios'
import http_wx from '../utils/http/wxhttp'
const http = mpvue_Mode === 'WX' ? http_wx : http_axios;

let BaseHost = process.env.NODE_ENV == 'development'?"http://192.168.0.108/": "http://jc_api.ujianchina.net/";
// let BaseHost = "http://192.168.0.108/";


export default {
    //只获取新闻标题与时间
    NewsApi_GetSomeNewsInfo:()=>{
       return http.get(BaseHost+"api/NewsApi/GetSomeNewsInfo")
    },
    //获取全部新闻动态
    NewsApi_GetAllNewsInfo:(bId)=>{
        return http.get(BaseHost+`api/NewsApi/GetAllNewsInfo?bId=${bId}`)
     },
     //获取一条新闻动态内容
     NewsApi_GetNewsInfo:(Id)=>{
        return http.get(BaseHost+`api/NewsApi/GetNewsInfo/${Id}`)
     },
    //获取指定的商圈类型
    ShopTypeApi_GeyBusinesScircleeTypeInfo:(bId)=>{
        return http.get(BaseHost+`api/ShopTypeApi/GeyBusinesScircleeTypeInfo?bId=${bId}`)
    },
    //	获取市场介绍信息
    MarketApi_GetInvestmentInfo:(bId)=>{
        return http.get(BaseHost+`api/MarketApi/GetInvestmentInfo?guid=${bId}`)
    },
    //获取招商入住动态信息
    InvestmentApi_GetInvestmentInfo:(bId)=>{
        return http.get(BaseHost+`api/InvestmentApi/GetInvestmentInfo?guid=${bId}`)
    },
    //上传建议信息
    SuggestionApi_FirstPictureInfo:(params)=>{
        return http.post(BaseHost+`api/SuggestionApi/FirstPictureInfo`,params)
    },
    //查询一个商圈类型的店铺信息
    ShopTypeApi_GetScircleeInfo:(TypeId)=>{
        return http.get(BaseHost+`api/ShopTypeApi/GetScircleeInfo?TypeId=${TypeId}`)
    },
    //查询指定商圈的店铺信息
    YZShopType_GetScircleeInfo:(bId)=>{
        return http.get(BaseHost+`api/YZShopType/GetScircleeInfo?bId=${bId}`)
    },
    
}