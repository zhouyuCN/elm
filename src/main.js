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
//导入面包屑
import myBread from './components/my-bread.vue';
Vue.component('my-bread', myBread);

//导入myaxios

import myaxios from './myaxios.js';
Vue.use(myaxios);

Vue.config.productionTip = false
import router from './router.js'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
