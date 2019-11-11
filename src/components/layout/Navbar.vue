<template >
    <div class="navbar">
                <el-menu
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
        }
    },
    computed: {
     list(){
         return this.$store.state.menu.menuList
     }   
    }
}
</script>
<style scoped>
.el-menu /deep/ .el-menu-item{
    font-size: 1.2rem;
}
</style>
