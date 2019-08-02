import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:1111,
    isLogin:0
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
    }
  },
  actions: {

  },
});
