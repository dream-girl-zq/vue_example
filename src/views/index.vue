<template>
<div class="zq-app-main-container">
    <div class="zq-app-main-body">
        <v-chart :options="chartData" style="width:100%;height:100%;"/>
    </div>
</div>
</template>
<script>
import * as echarts from 'echarts'
export default {
    name: 'Index',
    data(){
        return {
            chartData: {}
        }
    },
    methods: {
        initCharts(){
            this.chartData = {
                legend: {
                    data: ['类型一','类型二'],
                    itemWidth: 16,
                    itemHeight: 16,
                    itemGap: 20,
                    textStyle: {
                        color: 'rgba(255,255,255,.8)'
                    }
                },
                radar: {
                    indicator: [
                        {name: '供电可靠率',max: 100,color: '#000'},
                        {name: '户均年用电量',max: 100,color: '#000'},
                        {name: '人均年用电量',max: 100,color: '#000'},
                        {name: '电压合格率',max: 100,color: '#000'},
                        {name: '容载比',max: 100,color: '#000'},
                        {name: '户均容量',max: 100,color: '#000'}
                    ],
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                },
                series: [{
                    name: 'name',
                    type: 'radar',
                    symbolSize: 0,
                    data: [
                        {
                            name: '类型一',value: [99,95,26,36,88,56]
                        },{
                            name: '类型二',value: [58,56,89,99,44,25]
                        }
                    ],
                    areaStyle: {},
                    lineStyle: {
                        width: 2
                    }
                }]
            }
        }
    },
    mounted(){
        this.initCharts();
    }
}
</script>
