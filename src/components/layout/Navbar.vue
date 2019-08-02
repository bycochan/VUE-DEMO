<template >
    <div class="navbar">
                <el-menu
                default-active="this.$route.path"
                router     > 
                <el-menu-item v-for="(item,i) in list" :key="i"
                :index="item.navPath">{{item.navName}}
                </el-menu-item>   
                    <!-- <el-submenu v-for="(item,i) in list" :key='i'  
                    :index = "item.navPath" >
                        <template slot="title">
                            {{item.navName}}                           
                        </template>
                        <el-menu-item v-for="(vue,j) in item.vueChildren" 
                        :key="j" :index="vue.navPath">{{vue.navName}}</el-menu-item>
                    </el-submenu> -->
                    <!-- <el-submenu index="1">                                   
                    <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>Vue</span>
                    </template>
                    <el-menu-item index="1-1">Vue</el-menu-item>
                    <el-menu-item index="1-2">VUX</el-menu-item>
                    <el-menu-item index="1-3">Vuex</el-menu-item>                            
                    <el-menu-item index="1-4">Vue CLI</el-menu-item>
                    <el-menu-item index="1-5">Vue Router</el-menu-item>
                    
                    </el-submenu>
                    <el-menu-item index="2" >
                        <i class="el-icon-document"></i>
                        <span slot="title">Echarts</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">Element-UI</span>
                    </el-menu-item> -->
                </el-menu>    
    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[
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
        }
    }
}
</script>
<style scoped>
.navbar{
    width: 250px;
}
.el-menu /deep/ .el-menu-item{
    font-size: 1.2rem;
}
</style>
