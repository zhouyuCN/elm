import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//全局样式
import './assets/base.scss'
//饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//导入 Axios
import axios from 'axios';
//抽取 Axios
Vue.prototype.$axios = axios;
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


Vue.config.productionTip = false
import router from './router.js'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
