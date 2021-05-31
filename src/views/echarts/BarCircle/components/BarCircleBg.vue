<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { ColorConf,GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'BarCircleMore',
    props: {
        dataObj: {
            type: Object,
            default(){
                return {
                    data: {}
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
            let rawData = JSON.parse(JSON.stringify(this.dataObj.data));
            //先计算数组count的总和再创建一个长度和数组count一样，值均为总和的数组
            let sumTotal = 0;
            rawData.count.map(item => sumTotal+=item);
            rawData.total = [];
            rawData.count.map(item => rawData.total.push(sumTotal));
            let chartConf = {};
            chartConf.color = ColorConf[5];
            chartConf.bgColor = '#163F7A';
            chartConf.barWidth = 24;
            this.chartOptions = {
                grid: {
                    ...GridConf(false)
                },
                tooltip: {
                    show: true,
                    trigger: 'axis'
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
                    color: chartConf.color,
                    data: rawData.count
                },{
                    name: 'bottom',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,chartConf.barWidth/4],
                    z: 12,
                    color: chartConf.color,
                    data: rawData.count
                },{
                    name: rawData.name,
                    type: 'bar',
                    barWidth: chartConf.barWidth,
                    z: 11,
                    data: rawData.count,
                    itemStyle: {
                        color: chartConf.color
                    },
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 14,
                        color: '#FFFFFF'
                    }
                },{
                    name: 'BGtop',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,(-chartConf.barWidth/4)],
                    symbolPosition: 'end',
                    z: 11,
                    color: chartConf.bgColor,
                    data: rawData.total
                },{
                    name: rawData.name,
                    type: 'bar',
                    barWidth: chartConf.barWidth,
                    barGap: '-100%',
                    z: 10,
                    data: rawData.total,
                    itemStyle: {
                        color: chartConf.bgColor,
                        opacity: .6
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
