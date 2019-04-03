import axios from 'axios';

export default {

    install(Vue) {



        // 设置基地址
        axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";
        //设置拦截器
        //添加一个获信息拦截器
        axios.interceptors.request.use(function (config) {

            config.headers.Authorization = window.sessionStorage.getItem('token');

            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        //响应信息拦截器
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
        //抽取 Axios
        Vue.prototype.$axios = axios;
    }
}