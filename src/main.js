import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
// Vue.prototype.HOST = '/api';

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

import 'echarts-wordcloud';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts ;

import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }else{
    document.title = "Demo"
  }
  next();
});