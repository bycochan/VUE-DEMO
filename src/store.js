import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const menuModule = {
  namespaced: true,
  state:{
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
    {
        navPath:'/imgbox',navName:'111'
    },
    {
        navPath:'/daping',navName:'daping'
    },
    {
        navPath:'/333',navName:'333'
    },
    ]
  }
}
const imgModule = {
  namespaced: true,
  state:{
    imglist:[]
  },
  mutations:{
    updateGetImg:(state,obj)=>{
      state.imglist = obj.concat(state.imglist)
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
  }
}
const blogModule = {
    namespaced: true,
    state:{
      techList:[
        {title:'Vue.js 中文社区',url:'https://aermin.github.io/vue-home/dist/'},
        {title:'不使用vue-cli，一步一步构建Vue项目（小白入门）',url:'https://blog.csdn.net/Bs__Q/article/details/79769541'},
        {title:'为什么我不推荐你使用vue-cli创建脚手架？',url:'https://blog.csdn.net/running_runtu/article/details/79876973'},
        {title:'浅谈vue-cli 3 和 vue-cli 2的区别！！！',url:'https://blog.csdn.net/weixin_42080056/article/details/81631661'},
        {title:'vue(vue-cli+vue-router)+babel+webpack项目搭建入门<一>',url:'https://blog.csdn.net/yuhk231/article/details/88613363'},
        {title:'如何将本地vue项目上传到github',url:'https://www.cnblogs.com/whitepine/articles/9282260.html'},
        {title:'利用vue-cli配合vue-router搭建一个完整的spa流程（一）',url:'https://segmentfault.com/a/1190000009160934'},
        {title:'使用vue开发的你是不是 真正需要Vuex',url:'https://blog.csdn.net/chjj0904/article/details/78753153'},               
        {title:'为什么你要写博客？',url:'https://zhuanlan.zhihu.com/p/19743861?columnSlug=cnfeat'},
      ],
      holeList:[                
        {title:'vue单文件组件父子（子父）组件之间通信',url:'https://www.cnblogs.com/qqfontofweb/p/8649672.html'},
        {title:'利用vue-cli配合vue-router搭建一个完整的spa流程（一）',url:'https://segmentfault.com/a/1190000009160934'},
        {title:'使用vue开发的你是不是 真正需要Vuex',url:'https://blog.csdn.net/chjj0904/article/details/78753153'},
        {title:'不使用vue-cli，一步一步构建Vue项目（小白入门）',url:'https://blog.csdn.net/Bs__Q/article/details/79769541'},
        {title:'为什么我不推荐你使用vue-cli创建脚手架？',url:'https://blog.csdn.net/running_runtu/article/details/79876973'},
        {title:'浅谈vue-cli 3 和 vue-cli 2的区别！！！',url:'https://blog.csdn.net/weixin_42080056/article/details/81631661'},
        {title:'vue(vue-cli+vue-router)+babel+webpack项目搭建入门<一>',url:'https://blog.csdn.net/yuhk231/article/details/88613363'},
        {title:'如何将本地vue项目上传到github',url:'https://www.cnblogs.com/whitepine/articles/9282260.html'},
        {title:'利用vue-cli配合vue-router搭建一个完整的spa流程（一）',url:'https://segmentfault.com/a/1190000009160934'},
        {title:'使用vue开发的你是不是 真正需要Vuex',url:'https://blog.csdn.net/chjj0904/article/details/78753153'},
      ],
      mocsList:[                
        {title:'echarts实现词云自定义形状',url:'https://segmentfault.com/a/1190000018207423#articleHeader2'},
        {title:'基于ecahrts的词云',url:'https://blog.csdn.net/u013808809/article/details/78924725'},
        {title:'echarts字符云（词云    ',url:'https://blog.csdn.net/shelbyandfxj/article/details/83243284'},
        {title:'不使用vue-cli，一步一步构建Vue项目（小白入门）',url:'https://blog.csdn.net/Bs__Q/article/details/79769541'},
        {title:'为什么我不推荐你使用vue-cli创建脚手架？',url:'https://blog.csdn.net/running_runtu/article/details/79876973'},
        {title:'浅谈vue-cli 3 和 vue-cli 2的区别！！！',url:'https://blog.csdn.net/weixin_42080056/article/details/81631661'},
        {title:'vue(vue-cli+vue-router)+babel+webpack项目搭建入门<一>',url:'https://blog.csdn.net/yuhk231/article/details/88613363'},
        {title:'如何将本地vue项目上传到github',url:'https://www.cnblogs.com/whitepine/articles/9282260.html'},
        {title:'利用vue-cli配合vue-router搭建一个完整的spa流程（一）',url:'https://segmentfault.com/a/1190000009160934'},
        {title:'使用vue开发的你是不是 真正需要Vuex',url:'https://blog.csdn.net/chjj0904/article/details/78753153'},
      ]
    }
}
export default new Vuex.Store({
  modules: {
    menuModule,imgModule,blogModule
  },
  state: {
    count:1111,
    isLogin:0,
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
    
  },
  actions: {

  },
});
