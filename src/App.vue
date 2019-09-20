<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  overflow: hidden;
}
html{
  box-sizing: border-box;
}
a{
    text-decoration: none;
    color: #409EFF;
}

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
  font-size: 1.2rem;
  text-align: left;
}
::-webkit-scrollbar{
  width: 8px;
} 
::-webkit-scrollbar-thumb {
        height: 10px;
        border-radius: 20px;
        background: #909399;
    }
::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #ccc;
    }
</style>
