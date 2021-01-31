import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        seller:{},
    },
    mutations:{
        setInfo(state,Info){
            state.seller = Info;
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