<template>
    <div>
        <div id="header">
            <el-link href= "https://echarts.baidu.com/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts"
            :underline = false
            target = '_blank'>
                ECharts
            </el-link>
            <router-link to="/daping">daping</router-link>
        
        <div>
            <h5>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</h5>
            <el-collapse >
                <el-collapse-item title="丰富的可视化类型" name="1">
                    <div> <p>ECharts 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。
                除了已经内置的包含了丰富功能的图表，ECharts 还提供了自定义系列，只需要传入一个renderItem函数，就可以从数据映射到任何你想要的图形，更棒的是这些都还能和已有的交互组件结合使用而不需要操心其它事情。
                你可以在下载界面下载包含所有图表的构建文件，如果只是需要其中一两个图表，又嫌包含所有图表的构建文件太大，也可以在在线构建中选择需要的图表类型后自定义构建。</p></div>
                </el-collapse-item>
            </el-collapse>
            <el-card >
                <div slot="header">
                    <h3>ECharts使用方式</h3>
                </div>
                <ol>
                    <li>引入 ECharts</li>
                    <li>准备一个具备高宽的 DOM 容器</li>
                    <li>基于准备好的dom，初始化echarts实例</li>
                    <li>指定图表的配置项和数据 //var option = {...}</li>
                    <li>使用制定的配置项和数据显示图表 //实例名.setOption(option);</li>
                    <li> 4,5可以放一起 //实例名.setOption({...});</li>
                </ol>
                <h5>两种引用、初始化实例的方式</h5>
                <ol>
                    <li>
                        <el-card>
                            <p>在main.js中引入  //import echarts from 'echarts' // Vue.prototype.$echarts = echarts </p>
                            <p>在组件中的mounted 初始化实例 //this.$echarts.init()</p>               
                        </el-card>
                    </li>
                    <li>
                        <el-card>
                            <p>在组件中引入 //var echarts = require('echarts');</p>
                            <p>在组件中的mounted 初始化实例 //echarts.init()</p>
                            <p>多用于按需引入的场景</p>
                        </el-card>
                    </li>
                </ol>
            </el-card>
        </div>
        </div>
        <div id="async"></div>
        <div >
            <bar id= 'bar' ></bar>
        </div>  
        <div id="line">
        </div>
        <div id="pie">
        </div>
    </div>  
    
</template>
<script>
import { setTimeout } from 'timers';
// import $ from 'jquery';
// var echarts = require('echarts');
import bar from './demo/bar.vue'
export default {
    components:{
        bar
    },
    mounted () {
           this.loadEcharts();
        },
    methods:{
            loadEcharts(){
                 // 基于准备好的dom，初始化echarts实例
            let asyncChart = this.$echarts.init(document.getElementById('async'))
            let lineChart = this.$echarts.init(document.getElementById('line'),'light');
            let pieChart = this.$echarts.init(document.getElementById('pie'),'dark');
            // let pieChart = echarts.init(document.getElementById('pie')) 另一种初始化方式
            // 绘制图表

            //async loading
            asyncChart.setOption({
                title: {
                    text: '异步数据加载示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: []
                }]
            });
            function fetchData(cb) {
                // 通过 setTimeout 模拟异步加载
                setTimeout(function () {
                    cb({
                        categories: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                        data: [5, 20, 36, 10, 10, 20]
                    });
                }, 3000);
            }
            asyncChart.showLoading();
            fetchData(function (data) {
                asyncChart.hideLoading();
                asyncChart.setOption({
                    xAxis: {
                        data: data.categories
                    },
                    series: [{
                        // 根据名字对应到相应的系列
                        name: '销量',
                        data: data.data
                    }]
                });
            });

            // this.axios.get('./../../assets/data.json').then((response) => {
            //     console.log(response.data)
            // });

           
            
            // 线型图line
            let lineOpt = {
                title: {
                    text: 'ECharts 入门示例',
                    link:"#",
                    textStyle:{
                        color:"red",
                        fontStyle:"italic",
                        fontWeight:"normal",
                        fontFamily:"Microsoft YaHei",
                        fontSize:20,
                        lineHeight:40,
                        // textBorderColor:"#333",
                        textBorderWidth:"1",
                        textShadowColor:"green",
                    },
                subtext:"副标题文本",
                suntextStyle:{
                    color:"blue"
                },
                // textAlign:"center",
                // backgroundColor:"#000"

                },
                tooltip: {},
                legend:{},
                xAxis: {
                    //  data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {
                   
                },
                series: [{
                    name: '销量',
                    type: 'pie',
                    data: [
                        [  3.4,    4.5,   15,   43],
                        [  4.2,    2.3,   20,   91],
                        [  10.8,   9.5,   30,   18],
                        [  7.2,    8.8,   18,   57]
                        ]
                }]
            }
            lineChart.setOption(lineOpt);            
            // 饼状图pie
            var option = {
                    title:{
                        text:'ECharts 数据统计'
                    },            
                    series:[{
                        name:'访问量',
                        type:'pie',    
                        radius:'60%',
                        roseType:'angle', 
                        data:[
                            {value:400,name:'Android'},
                            {value:300,name:'IOS'},
                            {value:360,name:'PC'},
                            {value:200,name:'Ohter'}
                        ]
                    }]
                };
                pieChart.showLoading();
                setTimeout(() => {
                    pieChart.hideLoading()
                }, 1000);
                pieChart.setOption(option);
            //
            // this.$echarts.getInstanceByDom('pie') //获取 dom 容器上的实例。
            // asyncChart.group = "group1" // 分别设置每个实例的 group id
            // lineChart.group = "group1";
            // this.$echarts.connect('group1');//多个图表实例实现联动。
            // let wid = lineChart.getWidth();//获取 ECharts 实例容器的宽度。
            // let dom = lineChart.getDom() ; //获取 ECharts 实例容器的 dom 节点。
            // let getOption = lineChart.getOption();  //获取当前实例中维护的 option 对象
            // lineChart.resize({
            //     width:"400px",
            //     height:"400px"
            // });  // 改变图表尺寸 ,手动调用。
            // let isDisposed = lineChart.isDisposed();
            // lineChart.clear();
            // console.log(getOption);
            // console.log(isDisposed);
         
            
            }
        }
    }
 
</script>
<style scoped>
#bar,#line,#pie,#async{
    width: 500px;
    height: 500px;
}
</style>
