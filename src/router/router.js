import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import order from '../components/order.vue'
import comments from '../components/comments.vue'
import sellerInfo from '../components/sellerInfo.vue'

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
export default new VueRouter({
    mode:'history',
    routes,
})