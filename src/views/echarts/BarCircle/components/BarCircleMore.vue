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
            let rawData = JSON.parse(JSON.stringify(this.dataObj.data));
            let chartConf = {};
            chartConf.colors = ColorConf;
            chartConf.barGap = 0.2;
            chartConf.barWidth = 24;
            chartConf.lengedHas = rawData.length>1;
            chartConf.lenged = [];
            chartConf.series = [];
            rawData.map((item,index)=>{
                chartConf.lenged.push(item.name);
                //头部顶部椭圆的x轴偏移量(根据index、chartConf.barGap和chartConf.barWidth来计算)
                let symbolOffsetLeft = (index+0.5-rawData.length/2)*chartConf.barWidth*(1+chartConf.barGap)
                chartConf.series.push({
                    name: 'top',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [symbolOffsetLeft,(-chartConf.barWidth/4)],
                    symbolPosition: 'end',
                    z: 12,
                    color: chartConf.colors[index],
                    data: item.count
                },{
                    name: 'bottom',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [symbolOffsetLeft,chartConf.barWidth/4],
                    z: 12,
                    color: chartConf.colors[index],
                    data: item.count,
                },{
                    name: item.name,
                    type: 'bar',
                    barGap: chartConf.barGap,
                    barWidth: chartConf.barWidth,
                    z: 11,
                    data: item.count,
                    itemStyle: {
                        color: chartConf.colors[index]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 14,
                        color: '#FFFFFF'
                    }
                })
            })
            this.chartOptions = {
                grid: {
                    ...GridConf(chartConf.lengedHas)
                },
                legend: {
                    ...LengedConf(),
                    data: chartConf.lenged,
                    show: chartConf.lengedHas
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
                series: chartConf.series
            }
        }
    },
    mounted(){
        this.initChart();
    }
}
</script>
