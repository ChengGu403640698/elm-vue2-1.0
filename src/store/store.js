import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        seller:{},
        clickItem:'',
    },
    mutations:{
        setInfo(state,Info){
            state.seller = Info;
            state.clickItem = Info.productsList[0].key;
        },
        setClickItem(state,order){
            state.clickItem = order;
        }
    },
    actions:{
        getInfo(contex){
            axios({
                method:'get',
                url: "http://localhost:1021/getInfo",
            }).then(res=>{
                let data = eval(res.data);
                contex.commit('setInfo',data);
            }).catch(err=>{
                alert('error!');
            })
        }
    },
    getters:{}
})