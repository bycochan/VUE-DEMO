<template>
    <div>
        <el-link 
        href="http://www.axios-js.com/" 
        :underline = false
        target="_blank">Axios
       </el-link>  
        <h3>Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。</h3>
        <div class="cardbox">
            <el-card v-for="item in list" v-bind:key="item.index" class="card" shadow = "hover">
                <div slot="header"><b>{{item.title}}</b></div>
                <div>{{item.cont}}</div>
            </el-card>
        </div>
        <div class="contbox">
            <el-card>
                <div slot="header"><h4><b>vue-axios</b>            基于vuejs 的轻度封装</h4></div>
                <div>
                    <blockquote>
                        <p>Vue.axios.get(api).then((response) => {
                        console.log(response.data)
                        })</p>
                        <p>
                        this.axios.get(api).then((response) => {
                        console.log(response.data)
                        })</p>
                        <p>  this.$http.get(api).then((response) => {
                        console.log(response.data)
                        })</p>
                    </blockquote>                    
                </div>
            </el-card>
        </div>
        <div class="contbox">
            <el-card>
                <div slot="header"><h4>Vue-cli3 解决跨域问题</h4></div>
                <div>
                    <ol>
                        <li>
                            <b>在main.js中定义全局变量，使用this.HOST 访问代理地址</b>
                            <p>Vue.prototype.HOST = '/api'</p>
                        </li>
                        <li>
                            <b>在vue.config.js里devServer配置</b>
                            <blockquote>
                                proxy: { <br>
                                    '/api': {target: 'https://api.apiopen.top',//目标接口域名<br>
                                    ws: true,<br>
                                    changeOrigin: true,   //是否跨域<br>
                                    pathRewrite: {'^/api': ' '  //通过pathRewrite重写地址，将前缀/api转为/}
                                        }}
                                </blockquote>
                        </li>
                    </ol>
                </div>
            </el-card>
        </div>
        <el-button 
        type="primary" 
        round 
        @click="getImages"
        :loading="false">
            查看图片<i class="el-icon-video-camera"> </i>
        </el-button>
        <el-table
            :data="imglist"
            style="width: 100%">
            <el-table-column
                prop="time"
                label="time">
            </el-table-column>
            <el-table-column
                prop="img"
                label="label" >
            </el-table-column>
        </el-table>
        <div class="imgBox">
            <div class="imglist" v-for="item in imglist" :key="item.index">
                <el-image :src="item.img" fit = 'fill'></el-image>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           list:[
               {title:"支持node端和浏览器端",cont:"同样的API，node和浏览器全支持，平台切换无压力"},
               {title:"支持 Promise",cont:"使用Promise管理异步，告别传统callback方式"},
               {title:"丰富的配置项",cont:"支持拦截器等高级配置"},
               {title:"社区支持",cont:"axios相关的npm包数量一直在增长"}
           ],
           apilist:[]
        }
    },
    computed: {
         imglist(){
             return this.$store.state.imglist    
         }
    },
    methods: {
        getImages(){
                this.loading="true";
                this.$store.dispatch('getImg')
        }
    },
    mounted(){
        // let api = 'https://api.apiopen.top'
        // this.axios.get(api+'/getAllUrl').then((res) => {
        // this.apilist = res.data
        // // console.log(res.data)
        // console.log(this.apilist)
        // });
        // this.axios.get(api+'/videoDetails').then((res)=>{
        // console.log(res.data.result)
        // })

    }
}
</script>
<style scoped lang='scss'>
.cardbox{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
        .card{
        width: 49%;
        margin-top: 10px;
        }
}

.imgBox{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
        .imglist{
            margin: 5px;
            width: 250px;
            height: 250px;
        }
}
.contbox{
    margin: 10px 0;
}
</style>
