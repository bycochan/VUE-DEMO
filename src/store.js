import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:1111,
    isLogin:0,
    imglist:[]

  },
  getters: {
    gettersCount:(state)=>{
      return 'getters='+state.count;
    }
  },
  mutations: {
    add:(state,n)=>{
      state.count += n;
    },
    clear:(state,n)=>{
      state.count = n.count;
    },
    isLogin:(state)=>{
      state.isLogin = 1 ;
    },
    updateGetImg:(state,obj)=>{
      state.imglist = state.imglist.concat(obj)
    }
  },
  actions: {
    getImg ({commit}){
        return axios.post('https://api.apiopen.top/getImages',{
        page:"",
        count:'50'
        }).then((res) => {
          if (res.status === 200) {
            commit('updateGetImg',res.data.result)   
          } 
          else{
            alert('获取列表失败!')
          }
          return res
    });
    }
  },
});
