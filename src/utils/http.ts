import { rejects } from "assert";
import axios from "axios";
import { resolve } from "path";
import router from "../route";

/**实例化 */
const instance = axios.create({
    baseURL: "http://www.baidu.com/",
    timeout: 2000
})

/**添加请求拦截器 */
instance.interceptors.request.use(function(config) {
    // 发送前
    // 可以对herader请求修改
    return config;
}, function(error){
    // 错误处理
    // console.log(error);
    return Promise.reject(error);
});

/**响应拦截器 */
instance.interceptors.response.use(function(response){
    // 对相应数据处理
    let {data} = response;
    return data;
}, function(error){
    // console.log(error);
    switch (error.response.status){
        case 401:
            router.push({path:'/login'});
            break;
        case 403:
            router.push({path:'/login'});
            break;
        case 404:
            router.push({path:'/404'});
            break;
        default:
            return Promise.reject(error);
    }
    return Promise.reject(error);
});





/** get */
const get = (url, data) => {
    return new Promise((resolve,reject) => {
        instance
        .get(url,{params:data})
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    });
}

/** deleter */
const deleter = (url, data) => {
    return new Promise((resolve,reject) => {
        instance
        .delete(url,{params:data})
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    });
}

export {get,deleter};