<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { BaseConf,GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'Bar2dCircleBg',
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
            chartConf.color = BaseConf._color[0];
            chartConf.bgColor = BaseConf._bgColor;
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
                    name: 'top',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,(-chartConf.barWidth/4)],
                    symbolPosition: 'end',
                    z: 12,
                    color: chartConf.color.top,
                    data: rawData
                },{
                    name: 'bottom',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,chartConf.barWidth/4],
                    z: 12,
                    color: chartConf.color.top,
                    data: rawData
                },{
                    name: 'value',
                    type: 'bar',
                    barWidth: chartConf.barWidth,
                    z: 11,
                    data: rawData,
                    itemStyle: {
                        color: chartConf.color.val
                    }
                },{
                    name: 'BGtop',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,(-chartConf.barWidth/4)],
                    symbolPosition: 'end',
                    z: 11,
                    color: chartConf.bgColor.top,
                    data: rawTotal
                },{
                    name: 'BGval',
                    type: 'bar',
                    barWidth: chartConf.barWidth,
                    barGap: '-100%',
                    z: 10,
                    data: rawTotal,
                    itemStyle: {
                        color: chartConf.bgColor.val,
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
