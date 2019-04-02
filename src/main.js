import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
//全局样式
import './assets/base.scss'
//饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false
import router from './router.js'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
