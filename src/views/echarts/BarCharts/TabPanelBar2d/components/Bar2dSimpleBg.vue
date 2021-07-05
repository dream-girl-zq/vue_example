<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { BaseConf,GridConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'Bar2dSimpleBg',
    props: {
        valueObj: {
            type: Object,
            default(){
                return {
                    data: []
                }
            }
        }
    },
    data(){
        return {
            chartOptions: {}
        }
    },
    methods: {
        initChart(){
            let rawData = JSON.parse(JSON.stringify(this.valueObj)).data;
            //先计算数组count的总和再创建一个长度和数组count一样，值均为总和的数组
            let sumTotal = 0;
            rawData.map(item => sumTotal+=item);
            let rawTotal = [];
            rawData.map(item => rawTotal.push(sumTotal));
            let chartConf = {};
            chartConf.color = BaseConf._color[0].val;
            chartConf.bgColor = BaseConf._bgColor.val;
            chartConf.barWidth = BaseConf._barWidth;
            this.chartOptions = {
                grid: {
                    ...GridConf(false)
                },
                xAxis: {
                    ...XAxisConf()
                },
                yAxis: {
                    ...YAxisConf()
                },
                series: [{
                    name: '值',
                    type: 'bar',
                    barWidth: chartConf.barWidth,
                    z: 11,
                    data: rawData,
                    itemStyle: {
                        color: chartConf.color
                    }
                },{
                    name: '背景',
                    type: 'bar',
                    barWidth: chartConf.barWidth,
                    barGap: '-100%',
                    z: 10,
                    data: rawTotal,
                    itemStyle: {
                        color: chartConf.bgColor
                    }
                }]
            }
        }
    },
    mounted(){
        this.initChart();
    }
}
</script>
