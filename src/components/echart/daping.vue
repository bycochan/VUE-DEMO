<template>
    <div class="main" >
        <div class="header">
            <el-link href = 'https://blog.csdn.net/xrk_ffgg/article/details/89524226#commentBox'>
           <h2> vue全家桶+Echarts+百度地图，搭建数据可视化系统</h2>
            </el-link><br>
            <el-link href = "https://blog.csdn.net/xrk_ffgg/article/details/90607100">
            <h2>vue全家桶+Echarts+百度地图，搭建数据可视化系统（【续】接口篇）</h2>
            </el-link>
        </div>
       <div id="box-1" class="box"></div>
       <div id="box-2" class="box"></div>
       <div id="box-3" class="box"></div>
       <div id="box-4" class="box"></div>
       <div id="box-5" class="box"></div>
       <div id="box-6" class="box"></div>
       <div id="box-7" class="box"></div>
       <div id="box-8" class="box"></div>
    </div>
</template>
<script>
// import { type } from 'os';
export default {
    data() {
        return {
            
        }
    },
    mounted() {  
        this.barCharts();
        this.lineCharts();
        this.pieCharts();
        this.Doughnut();
        this.scatter();
        this.radar();
        this.gauge();
        this.funnel();
    },
    methods: {
        barCharts(){
            let Doughnut = this.$echarts.init(document.getElementById('box-1'));
            let option = {
                    title: {
                        text: '柱形图'
                    },
                    legend:{},
                    tooltip: {},
                    xAxis: {
                        data: ['包子', '肠粉', '炒粉', '炒面', '豆浆', '鸡蛋']
                    },
                    yAxis: {},
                    series: [{
                        name: '好吃',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            Doughnut.setOption(option);
        },
        lineCharts(){
            let line = this.$echarts.init(document.getElementById("box-2"));
            let option ={
                title:{
                    text:"线型图"
                },
                legend:{},
                xAxis:{
                    data: ['包子', '肠粉', '炒粉', '炒面', '豆浆', '鸡蛋']
                },
                yAxis:{

                },
                tooltip:{

                },
                series:[{
                    type:"line",
                    name:"line",
                    data:[11,55,33,88,66]
                }]
            }
            line.setOption(option);
        },
        pieCharts(){
            let pie = this.$echarts.init(document.getElementById('box-3'));
            let option ={
                title:{
                    text:"饼图"
                },
                legend:{
                    left:100
                },
                tooltip:{},
                series:[{
                    type:'pie',
                    data:[
                        {value:235, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}]
                }]
            }
            pie.setOption(option);
        },
        Doughnut(){
            let Doughnut = this.$echarts.init(document.getElementById("box-4"));
            let option ={
                title:{
                    text:'环形图',
                    z:2
                },
                legend:{
                    left:100
                },
                tooltip:{},
                series:[{
                    type:'pie',
                    radius:["50%","70%"],
                    data:[
                        {value:235, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}]
                }]
            }
            Doughnut.setOption(option);
        },
        scatter(){
            let scatter = this.$echarts.init(document.getElementById("box-5"));
            let option = {
                title:{
                    text:'散点图'
                },
                tooltip:{},
                legend:{},
                xAxis:{},
                yAxis:{},
                series:[{
                    type:'effectScatter',
                    name:'effectScatter',
                    symbolSize:20,
                    showEffectOn:'emphasis',
                    data:[
                        [10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
                    ]
                }]
            };
            scatter.setOption(option);
        },
        radar(){
            let radar = this.$echarts.init(document.getElementById('box-6'));
            let option = {
                title:{
                    text:'雷达图'
                },
                legend:{
                    data:['预算', '实际开销'],
                    right:10
                },
                tooltip:{},
                radar:{
                    indicator:[
                        { name: '销售（sales）', max: 6500},
                        { name: '管理（Administration）', max: 16000},
                        { name: '信息技术（Information Techology）', max: 30000},
                        { name: '客服（Customer Support）', max: 38000},
                        { name: '研发（Development）', max: 52000},
                        { name: '市场（Marketing）', max: 25000}
                    ]
                },
                series:[{
                    type:'radar',
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : '预算'
                        },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : '实际开销'
                        }
                    ]
                }]
            };
            radar.setOption(option);
        },
        gauge(){
            let gauge = this.$echarts.init(document.getElementById('box-7'));
            let option = {
                title:{
                    text:'仪表盘'
                },
                tooltip:{},
                series:[{
                    type:'gauge',
                    startAngle:180,
                    endAngle:0,
                    detail:{
                        formatter:'{value}%'
                    },
                    data:[{
                        value:50,
                        name:'Rate'
                    }]
                }]
            };
            setInterval(function () {
                option.series[0].data[0].value = (Math.round(Math.random()*100));
                 gauge.setOption(option);
            },3000);
        },
        funnel(){
            let funnel = this.$echarts.init(document.getElementById('box-8'));
            let option = {
                title:{
                    text:'funnel'
                },
                tooltip:{},
                toolbox:{
                    top:300,
                    feature:{
                        restore:{},
                        dataView:{}
                    }
                },
                legend:{
                      data: ['展现','点击','访问','咨询','订单'],
                      left:80
                },
                series:[{
                    type:"funnel",
                    name:'',
                    data: [
                            {value: 60, name: '访问'},
                            {value: 40, name: '咨询'},
                            {value: 20, name: '订单'},
                            {value: 80, name: '点击'},
                            {value: 100, name: '展现'}
                        ]
                }]
            };
            funnel.setOption(option);
        }


    },
    }
</script>
<style  scoped>
.header{
    width: 100%
}
.main{
    display: flex;
    flex-wrap: wrap;
    background-color: #0B1221;
}
.box{
    width: 400px;
    height: 400px;
}
</style>

