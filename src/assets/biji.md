```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```
# [vue 组件通信](https://segmentfault.com/a/1190000012808179)
### 父组件向子组件传递
  父组件通过 Prop 向子组件传递数据(可以使用 v-bind 来动态传递)

  子组件通过属性props：[]来接受数据
### 子组件向父组件传递
1.使用v-on指令

子组件使用$emit("子组件方法名","传递的数据")触发事件

父组件用 @方法名="父组件的方法名" 监听 ，接收处理传递过来的数据


2.使用v-model

组件$emit （）的事件名是特殊的input，父组件直接用了v-model 绑定的一个数据
### 非父子组件之间
1. bus
   
原理:
```
首先创建一个名为bus 的空Vue 实例；
在组件A中导入bus,使用bus.$emit()触发事件，发送数据
在组件B中导入bus,使用bus.$on()监听事件
必须先监听再触发
```
代码：
```
var bus= new Vue ();
bus.emit('事件名','子组件的数据')
mounted : function () {
    var that = this;
    bus.$on ('事件名',function (msg) 
    {that.message = msg;}
```
**可以把bus 挂载到vue的根实例下面，全局使用**
**app.$ options.bus this.$ root.$options.bus**

2.特殊的Bus

利用bus实例里的data数据。同时在created生命钩子里监听数据。
```
// 绑定监听
    this.$on('updateData1', (val)=>{
      this.val1 = val
    })
```
数据发出组件
```
// 触发在bus中已经绑定好的事件
bus.$emit('update1', '123')
```
数据接收组件
```
// 使用computed接收数据
computed {
  val1 () {
    // 依赖并返回bus中的val1
    return bus.val1
  }
}
```
>这种Bus就是简化版的vuex。只有state的vuex 

3.父链 

this.$parent

this.$children 

直接操作数据

# vue router

1.定义 (路由) 组件。
>可以从其他文件 import 进来
 ```
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
```
2.定义路由
>每个路由应该映射一个组件。
```
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
```
3.创建 router 实例，然后传 `routes` 配置
>你还可以传别的配置参数, 
```
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
```


4.创建和挂载根实例。
>记得要通过 router 配置参数注入路由
```
const app = new Vue({
  router
}).$mount('#app')
```