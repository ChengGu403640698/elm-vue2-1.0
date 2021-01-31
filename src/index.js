import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import order from './components/order.vue'
import comments from './components/comments.vue'
import sellerInfo from './components/sellerInfo.vue'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(VueRouter)

let routes = [{
    path:'/order',
    component:order,
},{
    path:'/comments',
    component:comments,
},{
    path:'/sellerInfo',
    component:sellerInfo,
}
];
let router = new VueRouter({
    mode:'history',
    routes,
})
new Vue({
    el:'#app',
    router,
    render:h=>h(App),
})