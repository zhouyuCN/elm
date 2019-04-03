import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import login from './components/login.vue';
import index from './components/index.vue';
//首页
import manage from './components/manage/manage.vue';
//数据管理
import userList from './components/dataManagement/userList.vue';
import shopList from './components/dataManagement/shopList.vue';
import adminList from './components/dataManagement/adminList.vue';
import foodList from './components/dataManagement/foodList.vue';
import orderList from './components/dataManagement/orderList.vue';
//添加数据
import addStop from './components/addData/addShop.vue';



//规则

let routes = [{
        path: '/login',
        component: login
    },
    {
        path: '/',
        component: index,
        children: [
            //首页
            {
                path: 'manage',
                component: manage
            },
            //数据管理
            {
                path: 'userList',
                component: userList
            },
            {
                path: 'shopList',
                component: shopList
            },
            {
                path: 'adminList',
                component: adminList
            },
            {
                path: 'foodList',
                component: foodList
            },
            {
                path: 'orderList',
                component: orderList
            },
            //添加数据
            {
                path: 'addStop',
                component: addStop
            },

        ]
    }
]

//使用
let router = new VueRouter({
    routes
})

//暴露
export default router