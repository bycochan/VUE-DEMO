<template>
    <div>
        <el-link 
            href="https://router.vuejs.org/zh/" 
            :underline = false
            target="_blank">Vue-Router
        </el-link>   
        <div class="main">
                <h3>使用router</h3> 
                <li>导入Vue和VueRouter，调用 Vue.use(VueRouter)</li>
                <li>导入 (路由) 组件，一定要用@ 否则报错</li>
                <li>设置路由 path: , component: </li>
                <li>创建实例并导出：export default new Router</li>
                <li>在根实例中挂载，通过 router 配置参数注入路由</li>
        </div>
    </div>
</template>
<style scoped>
.main{
    text-align: left;
}
</style>
