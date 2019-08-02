<template >
    <div class="box">
        <el-tabs v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="技术贴" name="techList"><blogView :techList = "techList" ></blogView></el-tab-pane>
            <el-tab-pane label="踩坑" name="holeList"><blogView :holeList = "holeList"></blogView></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
// import techpost from './techPost.vue'
// import hole from './hole.vue'
import blogView from './blogView.vue'
export default {
    components: {
     blogView
    },
    data() {
        return {
            activeName:'techList',
            techList:[
                {title:'Vue.js 中文社区',url:'https://aermin.github.io/vue-home/dist/'},
                {title:'不使用vue-cli，一步一步构建Vue项目（小白入门）',url:'https://blog.csdn.net/Bs__Q/article/details/79769541'},
                {title:'为什么我不推荐你使用vue-cli创建脚手架？',url:'https://blog.csdn.net/running_runtu/article/details/79876973'},
                {title:'浅谈vue-cli 3 和 vue-cli 2的区别！！！',url:'https://blog.csdn.net/weixin_42080056/article/details/81631661'},
                {title:'vue(vue-cli+vue-router)+babel+webpack项目搭建入门<一>',url:'https://blog.csdn.net/yuhk231/article/details/88613363'},
                {title:'如何将本地vue项目上传到github',url:'https://www.cnblogs.com/whitepine/articles/9282260.html'},
                {title:'利用vue-cli配合vue-router搭建一个完整的spa流程（一）',url:'https://segmentfault.com/a/1190000009160934'},
                {title:'使用vue开发的你是不是 真正需要Vuex',url:'https://blog.csdn.net/chjj0904/article/details/78753153'},               
                {title:'使用vue开发的你是不是 真正需要Vuex',url:'https://blog.csdn.net/chjj0904/article/details/78753153'},
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
            ]
        }
    },
    methods:{
        handleClick() {
        // console.log(this.techList);
        // console.log(this.holeList);
      }
    }
}
</script>
<style scoped>
.box{
    position: fixed;
    width: 1000px;
    height: 500px;
}
::-webkit-scrollbar{
  width: 12px;
} 
::-webkit-scrollbar-thumb {
        height: 30px;
        border-radius: 20px;
        background: #909399;
    }
::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #ccc;
    }
</style>
