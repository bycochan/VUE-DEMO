<template>
    <div>
       <el-link 
       href="https://vuex.vuejs.org/zh/" 
       :underline = false
       target="_blank">Vuex 是什么
       </el-link> 
       <el-alert
           title="Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式"
           description="集中式存储管理应用的所有组件的状态"
           center
           :closable="false"
           effect = "dark"
           type="info">
       </el-alert>
       <el-alert
           title="每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。"
           description="Vuex 的状态存储是响应式的。你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。"
           type="info"
           center
           :closable="false">
       </el-alert>
       <el-collapse  >
            <el-collapse-item title="State" name="1">
                <div>Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）</div>
                <div>在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中</div>
                <div>子组件通过 this.$store.state访问</div>
            </el-collapse-item>
            <el-collapse-item title="Getter" name="2">
                <div>getter（可以认为是 store 的计算属性）接受 state 作为其第一个参数</div>
                <div>通过属性访问：store.getters 对象，以属性的形式访问</div>
                <div>通过方法访问：让 getter 返回一个函数，来实现给 getter 传参</div>
            </el-collapse-item>
            <el-collapse-item title="Mutation" name="3">
               <div>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
                   <p>每个mutation 都有字符串的事件类型 (type)和回调函数(handler)。回调函数实际进行状态更改，接受 state 作为第一个参数：</p>
               </div>
               <div>不能直接调用一个 mutation handler。需要以相应的 type 调用 store.commit 方法：</div>
               <div>this.$store.commit('handlerName')</div>
            </el-collapse-item>
            <el-collapse-item title="Action" name="4">
                <div>Action 提交的是 mutation，而不是直接变更状态。</div>
                <div>Action 可以包含任意异步操作</div>
                <div> <el-link href = "https://vuex.vuejs.org/zh/guide/actions.html">Action</el-link></div>
            </el-collapse-item>
            <el-collapse-item title="Modules" name="5">
                <ul>
                    <li> <div>由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：</div></li>
                    <li>
                <div>声明模块 
                    <p>const moduleA = {
                    state: { ... },
                    mutations: { ... },
                    actions: { ... },
                    getters: { ... }
                    }</p></div>
                    </li>
                    <li>
                    <div>注册模块<p>const store = new Vuex.Store({
                        modules: {
                            a: moduleA,
                            b: moduleB
                        }
                        })
                        </p></div>
                    </li>
                    <li>
                        <div>使用模块<p>store.state.a // -> moduleA 的状态 store.state.b // -> moduleB 的状态</p></div>
                    </li>
                    <li>
                        <div>命名空间<p>默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
                        如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。</p>
                        <strong>在组件内使用使用commit dispatch 时，需要加上模块名前缀路径</strong>
                        </div>
                    </li>
                    <li>
                        <div>rootState 和 rootGetter 访问全局内容</div>
                    </li>
                    <li>
                        <div>模块动态注册<p>可以使用 store.registerModule 方法注册模块：可以通过 store.state.myModule 和 store.state.nested.myModule 访问模块的状态。</p></div>
                    </li>
                </ul>
            </el-collapse-item>
       </el-collapse>
       <div>
           <ul>
               <li>通过 this.$store.state访问:{{this.$store.state.count}}</li>
               <li>通过 this.$store.getters访问:{{this.$store.getters.gettersCount}}</li>
               <li @click="add">add2222</li>
               <li @click="back">back</li>
           </ul>
       </div>
       <el-link
       href="https://baijiahao.baidu.com/s?id=1618794879569468435&wfr=spider&for=pc" 
       :underline = false
       target="_blank"
       >5分钟带你入门vuex（vue状态管理）</el-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    mounted () {
        
    },
    methods: {

        add(){
            this.$store.commit('add',2222)
        },
        // 对象风格的提交
        back(){
            this.$store.commit({
                type:'clear',
                count:1111
            })
        }
    }
}
</script>

