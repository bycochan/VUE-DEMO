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
<style lang="scss" scoped>
.home{
    width: 100%;
    height: auto;
      .head{
          width: auto;
          height: 20px;
          border-bottom:2px solid #dcdfe6;
          background-color:#ffffff;
      }
      .aside{
          overflow-y: auto;
          text-align: justify;
          max-height: 550px;
          // padding-left: 20px;
          width: 20% !important;
      }
      .main{
          background-color: #fff;
          width: 75%;
          max-height: 570px;
      }

}
</style>



