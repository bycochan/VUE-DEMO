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
       <div id="box-9" class="box"></div>
       <div id="box-10" class="box"></div>
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
        this.wordCloud();
        this.tree();
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
                        type: 'bar',
                        itemStyle:{
                            color:'#3298DB',
                        },
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
                    data: ['2019-01', '2019-03', '2019-05', '2019-07', '2019-09', '2019-11']
                },
                yAxis:{

                },
                tooltip:{
                    formatter:'{b} : {c}'
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
                tooltip:{
                    show:false
                },
                series:[{
                    type:'pie',
                    hoverAnimation:false,
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:'{b} {d}%'
                    },
                    lableLine: {
                        show: false
                    },
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
                    label:{
                        normal:{
                            show:false,
                            formatter:'{b} {d}%',
                            position:'center'
                        },
                        emphasis:{
                            show:true,
                            textStyle:{
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
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
                tooltip:{
                    formatter:'({c})'
                },
                legend:{},
                xAxis:{},
                yAxis:{},
                series:[{
                    type:'effectScatter',
                    name:'effectScatter',
                    // symbol:'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
                    // symbol:'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
                    symbolSize:(data) => data[0]>data[1]?data[0]*2:data[1]*2,
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
                   /*  data: [
                        [  34,    43],
                        [  42,    91],
                        [  10.8,   18],
                        [  72,    57]
                        ] */
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
                    startAngle:220,
                    endAngle:-45,
                    min:0,
                    max:200,
                    splitNumber:10,
                    detail:{
                        formatter:'{value} km/h',
                        backgroundColor:'gray',
                        color:'#fff',
                        fontSize:40,
                        borderColor:'#AAAAAA',
                        borderWidth:2,
                        padding:5
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
        },
        wordCloud(){
            let wordCloud = this.$echarts.init(document.getElementById('box-9'));
            let option = {
                    title: {
                        text: 'wordCloud'
                    },
                    legend:{},
                    tooltip: {},
                    backgroundColor:'#000',
                    series: [{
                        type: 'wordCloud',
                        gridSize: 2,
                        sizeRange: [12, 50],
                        rotationRange: [-90, 90],
                        shape: 'pentagon',
                        textStyle: {
                            normal: {
                                color: function () {
                                    return 'rgb(' + [
                                            Math.round(Math.random() * 255),
                                            Math.round(Math.random() * 255),
                                            Math.round(Math.random() * 255)
                                        ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                            data: [
                                {
                                            "name": "汽车",
                                            "value": 928
                                        },
                                        {
                                            "name": "视频",
                                            "value": 906
                                        },
                                        {
                                            "name": "电视",
                                            "value": 825
                                        },
                                        {
                                            "name": "Lover Boy 88",
                                            "value": 514
                                        },
                                        {
                                            "name": "动漫",
                                            "value": 486
                                        },
                                        {
                                            "name": "音乐",
                                            "value": 53
                                        },
                                        {
                                            "name": "直播",
                                            "value": 163
                                        },
                                        {
                                            "name": "广播电台",
                                            "value": 86
                                        },
                                        {
                                            "name": "戏曲曲艺",
                                            "value": 17
                                        },
                                        {
                                            "name": "演出票务",
                                            "value": 6
                                        },
                                        {
                                            "name": "给陌生的你听",
                                            "value": 1
                                        },
                                        {
                                            "name": "资讯",
                                            "value": 1437
                                        },
                                        {
                                            "name": "商业财经",
                                            "value": 422
                                        },
                                        {
                                            "name": "娱乐八卦",
                                            "value": 353
                                        },
                                        {
                                            "name": "军事",
                                            "value": 331
                                        },
                                        {
                                            "name": "科技资讯",
                                            "value": 313
                                        },
                                        {
                                            "name": "社会时政",
                                            "value": 307
                                        },
                                        {
                                            "name": "时尚",
                                            "value": 43
                                        },
                                        {
                                            "name": "网络奇闻",
                                            "value": 15
                                        },
                                        {
                                            "name": "旅游出行",
                                            "value": 438
                                        },
                                        {
                                            "name": "景点类型",
                                            "value": 957
                                        },
                                        {
                                            "name": "国内游",
                                            "value": 927
                                        },
                                        {
                                            "name": "远途出行方式",
                                            "value": 908
                                        },
                                        {
                                            "name": "酒店",
                                            "value": 693
                                        },
                                        {
                                            "name": "关注景点",
                                            "value": 611
                                        },
                                        {
                                            "name": "旅游网站偏好",
                                            "value": 512
                                        },
                                        {
                                            "name": "出国游",
                                            "value": 382
                                        },
                                        {
                                            "name": "交通票务",
                                            "value": 312
                                        },
                                        {
                                            "name": "旅游方式",
                                            "value": 187
                                        },
                                        {
                                            "name": "旅游主题",
                                            "value": 163
                                        },
                                        {
                                            "name": "港澳台",
                                            "value": 104
                                        },
                                        {
                                            "name": "本地周边游",
                                            "value": 3
                                        },
                                        {
                                            "name": "小卖家",
                                            "value": 1331
                                        },
                                        {
                                            "name": "全日制学校",
                                            "value": 941
                                        },
                                        {
                                            "name": "基础教育科目",
                                            "value": 585
                                        },
                                        {
                                            "name": "考试培训",
                                            "value": 473
                                        },
                                        {
                                            "name": "语言学习",
                                            "value": 358
                                        },
                                        {
                                            "name": "留学",
                                            "value": 246
                                        },
                                        {
                                            "name": "K12课程培训",
                                            "value": 207
                                        },
                                        {
                                            "name": "艺术培训",
                                            "value": 194
                                        },
                                        {
                                            "name": "技能培训",
                                            "value": 104
                                        },
                                        {
                                            "name": "IT培训",
                                            "value": 87
                                        },
                                        {
                                            "name": "高等教育专业",
                                            "value": 63
                                        },
                                        {
                                            "name": "家教",
                                            "value": 48
                                        },
                                        {
                                            "name": "体育培训",
                                            "value": 23
                                        },
                                        {
                                            "name": "职场培训",
                                            "value": 5
                                        },
                                        {
                                            "name": "金融财经",
                                            "value": 1328
                                        },
                                        {
                                            "name": "银行",
                                            "value": 765
                                        },
                                        {
                                            "name": "股票",
                                            "value": 452
                                        },
                                        {
                                            "name": "保险",
                                            "value": 415
                                        },
                                        {
                                            "name": "贷款",
                                            "value": 253
                                        },
                                        {
                                            "name": "基金",
                                            "value": 211
                                        },
                                        {
                                            "name": "信用卡",
                                            "value": 180
                                        },
                                        {
                                            "name": "外汇",
                                            "value": 138
                                        },
                                        {
                                            "name": "P2P",
                                            "value": 116
                                        },
                                        {
                                            "name": "贵金属",
                                            "value": 98
                                        },
                                        {
                                            "name": "债券",
                                            "value": 93
                                        },
                                        {
                                            "name": "网络理财",
                                            "value": 92
                                        },
                                        {
                                            "name": "信托",
                                            "value": 90
                                        },
                                        {
                                            "name": "征信",
                                            "value": 76
                                        },
                                        {
                                            "name": "期货",
                                            "value": 76
                                        },
                                        {
                                            "name": "公积金",
                                            "value": 40
                                        },
                                        {
                                            "name": "银行理财",
                                            "value": 36
                                        },
                                        {
                                            "name": "银行业务",
                                            "value": 30
                                        },
                                        {
                                            "name": "典当",
                                            "value": 7
                                        },
                                        {
                                            "name": "海外置业",
                                            "value": 1
                                        },
                                        {
                                            "name": "汽车",
                                            "value": 1309
                                        },
                                        {
                                            "name": "汽车档次",
                                            "value": 965
                                        },
                                        {
                                            "name": "汽车品牌",
                                            "value": 900
                                        },
                                        {
                                            "name": "汽车车型",
                                            "value": 727
                                        },
                                        {
                                            "name": "购车阶段",
                                            "value": 461
                                        },
                                        {
                                            "name": "二手车",
                                            "value": 309
                                        },
                                        {
                                            "name": "汽车美容",
                                            "value": 260
                                        },
                                        {
                                            "name": "新能源汽车",
                                            "value": 173
                                        },
                                        {
                                            "name": "汽车维修",
                                            "value": 155
                                        },
                                        {
                                            "name": "租车服务",
                                            "value": 136
                                        },
                                        {
                                            "name": "车展",
                                            "value": 121
                                        },
                                        {
                                            "name": "违章查询",
                                            "value": 76
                                        },
                                        {
                                            "name": "汽车改装",
                                            "value": 62
                                        },
                                        {
                                            "name": "汽车用品",
                                            "value": 37
                                        },
                                        {
                                            "name": "路况查询",
                                            "value": 32
                                        },
                                        {
                                            "name": "汽车保险",
                                            "value": 28
                                        },
                                        {
                                            "name": "陪驾代驾",
                                            "value": 4
                                        },
                                        {
                                            "name": "网络购物",
                                            "value": 1275
                                        },
                                        {
                                            "name": "做我的猫",
                                            "value": 1088
                                        },
                                        {
                                            "name": "只想要你知道",
                                            "value": 907
                                        }
                            ]
                        }]
                }
            wordCloud.setOption(option);
        },
        tree () {
            var data1 = {
                "name": "flare",
                "children": [
                    {
                        "name": "data",
                        "children": [
                            {
                                "name": "converters",
                                "children": [
                                {"name": "Converters", "value": 721},
                                {"name": "DelimitedTextConverter", "value": 4294}
                                ]
                            },
                            {
                                "name": "DataUtil",
                                "value": 3322,
                                "id": 111
                            }
                        ]
                    },
                    {
                        "name": "display",
                        "children": [
                            {"name": "DirtySprite", "value": 8833},
                            {"name": "LineSprite", "value": 1732},
                            {"name": "RectSprite", "value": 3623}
                    ]
                    },
                    {
                        "name": "flex",
                        "children": [
                            {"name": "FlareVis", "value": 4116}
                        ]
                    },
                    {
                    "name": "query",
                    "children": [
                        {"name": "AggregateExpression", "value": 1616},
                        {"name": "And", "value": 1027},
                        {"name": "Arithmetic", "value": 3891},
                        {"name": "Average", "value": 891},
                        {"name": "BinaryExpression", "value": 2893},
                        {"name": "Comparison", "value": 5103},
                        {"name": "CompositeExpression", "value": 3677},
                        {"name": "Count", "value": 781},
                        {"name": "DateUtil", "value": 4141},
                        {"name": "Distinct", "value": 933},
                        {"name": "Expression", "value": 5130},
                        {"name": "ExpressionIterator", "value": 3617},
                        {"name": "Fn", "value": 3240},
                        {"name": "If", "value": 2732},
                        {"name": "IsA", "value": 2039},
                        {"name": "Literal", "value": 1214},
                        {"name": "Match", "value": 3748},
                        {"name": "Maximum", "value": 843},
                        {
                        "name": "methods",
                        "children": [
                        {"name": "add", "value": 593},
                        {"name": "and", "value": 330},
                        {"name": "average", "value": 287},
                        {"name": "count", "value": 277},
                        {"name": "distinct", "value": 292},
                        {"name": "div", "value": 595},
                        {"name": "eq", "value": 594},
                        {"name": "fn", "value": 460},
                        {"name": "gt", "value": 603},
                        {"name": "gte", "value": 625},
                        {"name": "iff", "value": 748},
                        {"name": "isa", "value": 461},
                        {"name": "lt", "value": 597},
                        {"name": "lte", "value": 619},
                        {"name": "max", "value": 283},
                        {"name": "min", "value": 283},
                        {"name": "mod", "value": 591},
                        {"name": "mul", "value": 603},
                        {"name": "neq", "value": 599},
                        {"name": "not", "value": 386},
                        {"name": "or", "value": 323},
                        {"name": "orderby", "value": 307},
                        {"name": "range", "value": 772},
                        {"name": "select", "value": 296},
                        {"name": "stddev", "value": 363},
                        {"name": "sub", "value": 600},
                        {"name": "sum", "value": 280},
                        {"name": "update", "value": 307},
                        {"name": "variance", "value": 335},
                        {"name": "where", "value": 299},
                        {"name": "xor", "value": 354},
                        {"name": "_", "value": 264}
                        ]
                        },
                        {"name": "Minimum", "value": 843},
                        {"name": "Not", "value": 1554},
                        {"name": "Or", "value": 970},
                        {"name": "Query", "value": 13896},
                        {"name": "Range", "value": 1594},
                        {"name": "StringUtil", "value": 4130},
                        {"name": "Sum", "value": 791},
                        {"name": "Variable", "value": 1124},
                        {"name": "Variance", "value": 1876},
                        {"name": "Xor", "value": 1101}
                    ]
                    },
                    {
                    "name": "scale",
                    "children": [
                        {"name": "IScaleMap", "value": 2105},
                        {"name": "LinearScale", "value": 1316},
                        {"name": "LogScale", "value": 3151},
                        {"name": "OrdinalScale", "value": 3770},
                        {"name": "QuantileScale", "value": 2435},
                        {"name": "QuantitativeScale", "value": 4839},
                        {"name": "RootScale", "value": 1756},
                        {"name": "Scale", "value": 4268},
                        {"name": "ScaleType", "value": 1821},
                        {"name": "TimeScale", "value": 5833}
                    ]
                    }
                ]
            };
            let data2 = {
                "name": "flare",
                "children": [
                    {
                        "name": "flex",
                        "children": [
                            {"name": "FlareVis", 
                            "children": [
                            {"name": "DirtySprite", "value": 8833}
                            ]
                            }
                        ]
                    },
                    {
                        "name": "scale",
                        "children": [
                            {"name": "IScaleMap", "value": 2105},
                            {"name": "LinearScale", "value": 1316},
                            {"name": "LogScale", "value": 3151},
                            {"name": "OrdinalScale", "value": 3770},
                            {"name": "QuantileScale", "value": 2435},
                            {"name": "QuantitativeScale", "value": 4839},
                            {"name": "RootScale", "value": 1756},
                            {"name": "Scale", "value": 4268},
                            {"name": "ScaleType", "value": 1821},
                            {"name": "TimeScale", "value": 5833}
                    ]
                    },
                    {
                        "name": "display",
                        "children": [
                            {"name": "DirtySprite", "value": 8833}
                    ]
                    }
                ]
            }
            let tree = this.$echarts.init(document.getElementById('box-10'));
            let option = {
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove'
                    },
                    legend: {
                        top: '2%',
                        left: '3%',
                        orient: 'vertical',
                        data: [{
                            name: 'tree1',
                            icon: 'rectangle'
                            } ,
                            {
                            name: 'tree2',
                            icon: 'rectangle'
                            }],
                        borderColor: '#c23531'
                    },
                    series: [ {
                        type: 'tree',
                        name: 'tree1',
                        data: [data1],
                        top: '5%',
                        left: '7%',
                        bottom: '2%',
                        right: '60%',
                        label: {
                            normal: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right'
                            }
                        },
                        leaves: {
                            label: {
                                normal: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left'
                                }
                            }
                        },
                    },
                    {
                    type: 'tree',
                    name: 'tree2',
                    data: [data2],
                    top: '20%',
                    left: '60%',
                    bottom: '22%',
                    right: '18%',
                    symbolSize: 7,
                    label: {
                        normal: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                    }]
                    }
            tree.setOption(option)
        }
    }
}
</script>
<style  scoped lang='scss'>
.main{
    width: 100%;
    max-height: 610px;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    background-color: F3F3F3;
        .box{
            width: 600px;
            height: 600px;
        }
}
#box-10{
    width: 100%;
    height: 800px;
}
</style>

