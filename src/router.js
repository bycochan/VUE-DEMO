import Vue from 'vue';
import Router from 'vue-router';
import index from './views/index.vue';
// import home from './views/Home.vue'


import vuejs from '@/components/vuejs/vuejs.vue';
import vux from '@/components/vuejs/vux.vue';
import vuex from '@/components/vuejs/vuex.vue';
import vuecli from '@/components/vuejs/vuecli.vue';
import vuerouter from '@/components/vuejs/vuerouter.vue';
import elementui from '@/components/element/elementui.vue';
import echart from '@/components/echart/echart.vue';
import node from '@/components/node/node.vue';
import axios from '@/components/axios/axios.vue';
import blogList from '@/components/blog/blogList.vue';
import daping from "@/components/echart/daping.vue";
import imgbox from "@/components/imgbox/imgbox.vue";

// import blogList from '/src/components/blog/blogList';
// Module not found: Error: Can't resolve '/src/components/blog/blogList'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/404",
      meta: { title:"ERROR 404" },
      component:()=>import('@/views/404.vue')
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      meta: { title:"Home" },
      name: 'home',
      component: () => import('./views/Home.vue'),
      children:[
        {
          path:"/vuejs",
          meta: { title:"VueJs" },
          component: vuejs   
        },
        {
          path:"/vux",
          meta: { title:"VUX" },
          component:vux   
        },    
        {
          path:"/vuex",
          meta: { title:"Vuex" },
          component: vuex   
        },
        {
          path:"/vuecli",
          meta: { title:"VueCli" },
          component: vuecli   
        },
        {
          path:"/vuerouter",
          meta: { title:"VueRouter" },
          component: vuerouter   
        },
        {
          path:"/elementui",
          meta: { title:"Element-UI" },
          component: elementui   
        },
        {
          path:"/echart",
          meta: { title:"ECharts" },
          component: echart   
        },
        { 
          path:'/node',
          meta: { title:"Node" },
          component: node 
        },
        { 
          path:'/axios',
          meta: { title:"Axios" },
          component: axios 
        },
        { 
          path:'/blogList',
          meta: { title:"blogList" },
          component: blogList 
        },
        { path: '/imgbox', component: imgbox }
      ]
    },
    {
      path: '*',  
      redirect: '/404'
    },
    { 
      path: '/daping', 
      component: daping 
    }

  ]
});
