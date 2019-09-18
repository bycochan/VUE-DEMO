<template >
    <div class="navbar">
                <el-menu
                default-active="this.$route.path"
                router     > 
                <el-menu-item v-for="(item,i) in list" :key="i"
                :index="item.navPath">{{item.navName}}
                </el-menu-item>   
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
