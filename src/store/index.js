import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios' 

Vue.use(Vuex);

import menu from './modules/menu'
import image from './modules/image'
import blog from './modules/blog'

const store = new Vuex.Store ({
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
        isLogin:(state, n)=>{
          state.isLogin = n ;
        }
    },
    actions: {
        
    },
    modules: {
        menu,
        image,
        blog
    }
})

export default store