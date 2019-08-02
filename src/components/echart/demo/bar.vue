<template>
    <div>
        <div id="id" class="bar">

        </div>
    </div>
</template>
<script>
export default {
    name:"bar",
    props:['id'],
    data() {
        return {
        }
    },
    mounted () {
        this.loadEcharts();
    },
    methods: {
        loadEcharts(){
            let bar = this.$echarts.init(document.getElementById('id'));
        
         // 柱形图bar
        bar.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend:{},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    },
}
</script>
<style scoped>
.bar{
    width: 400px;
    height: 300px;
}
</style>
