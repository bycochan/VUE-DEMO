<template>
  <div class="home">
      <!-- <el-header class="header">header</el-header> -->
       <el-container>
          <el-header class="head">
            <Topbar></Topbar>
          </el-header>
       <el-container>
          <el-aside class="aside">
            <Navbar ></Navbar>
          </el-aside>
          <el-main class="main">
             <router-view></router-view>
         </el-main>  
       </el-container>
       </el-container>
     
     
      <!-- <el-footer class="footer">footer</el-footer> -->
    <!-- 使用组件 -->
    <!-- <HelloWorld msg = "welcome to"></HelloWorld> -->
  </div>
</template>
<script>
// 引入组件。！！！先引入，后声明，再使用
// import HelloWorld from '@/components/HelloWorld.vue'
// 
import Navbar from '@/components/layout/Navbar.vue'
import Topbar from '@/components/layout/Topbar.vue'
export default {
  // 声明组件
  components:{
    Navbar,Topbar
  }
}
</script>
<style scoped>
/* .header{
    background-color:#67C23A;
} */
.home{
  position: fixed;
  top: 0;
}

.head{
  width: 1366px;
  height: 20px;
  border-bottom:2px solid #dcdfe6;
  background-color:#ffffff;
}
.aside{
  display: block;
  overflow-y: auto;
  height: 560px;
  text-align: left;
  padding-left: 20px;
}
.main{
  display: block;
  background-color: #fff;
  height: 570px;
  overflow-y: scroll;
  width: 600px;
}
/* .footer{
    background-color: #E6A23C;
} */ 
::-webkit-scrollbar{
  width: 5px;
} 
 ::-webkit-scrollbar-button{
  display: none;
}
</style>
<style>
#app /deep/ .el-alert__title{
  font-size:18px;
}
#app /deep/ .el-alert__description{
  font-size:14px;
}
#app /deep/ .el-link{
  font-size: 1.2rem;
}
#app /deep/ .el-collapse-item__header{
  font-size: 1.1rem;
  background-color: #F2F6FC;
}
#app /deep/ .el-collapse-item__content{
  font-size: 16px;
  text-align: left;
}
</style>


