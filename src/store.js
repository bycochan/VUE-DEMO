import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:1111,
    isLogin:0,
    imglist:[],
    menuList:[
              {
                navPath:'/vuejs',navName:'VueJs'
            },
            {
                navPath:'/vux',navName:'VUX'
            },
            {
                navPath:'/vuex',navName:'Vuex'
            },
            {
                navPath:'/vuecli',navName:'Vue Cli'
            },
            {
                navPath:'/vuerouter',navName:'Vue Router'
            },
            {
                navPath:'/elementui',navName:'Element-UI'
            },
            {
                navPath:'/echart',navName:'ECharts'
            },
            {
                navPath:'/node',navName:'Node'
            },
            {
                navPath:'/axios',navName:'Axios'
            },
            {
                navPath:'/blogList',navName:'blogList'
            },
            // {
            //     navPath:'/echart',navName:'echart'
            // },
            // {
            //     navPath:'/echart',navName:'echart'
            // },
            // {
            //     navPath:'/echart',navName:'echart'
            // },
            ]

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
