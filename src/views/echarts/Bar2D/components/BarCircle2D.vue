<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'BarCircle2D',
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
            chartConf.colors = [{
                //紫色
                top: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#9825e0'},{offset:1,color:'#b170da'}],false),
                bottom: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#9825e0'},{offset:1,color:'#b170da'}],false),
                value: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#9825e0'},{offset:1,color:'#b170da'}],false)
            },{
                //蓝色
                top: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#12B9DB'},{offset:1,color:'#6F8EF2'}],false),
                bottom: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#12B9DB'},{offset:1,color:'#6F8EF2'}],false),
                value: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#12B9DB'},{offset:1,color:'#6F8EF2'}],false)
            },{
                //绿色
                top: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#00EC28'},{offset:1,color:'#5DF076'}],false),
                bottom: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#00EC28'},{offset:1,color:'#5DF076'}],false),
                value: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#00EC28'},{offset:1,color:'#5DF076'}],false)
            },{
                //黄色
                top: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#E5CE10'},{offset:1,color:'#e6db7c'}],false),
                bottom: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#E5CE10'},{offset:1,color:'#e6db7c'}],false),
                value: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#E5CE10'},{offset:1,color:'#e6db7c'}],false)
            },{
                //橙色
                top: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#FF9A22'},{offset:1,color:'#FFD56E'}],false),
                bottom: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#FF9A22'},{offset:1,color:'#FFD56E'}],false),
                value: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#FF9A22'},{offset:1,color:'#FFD56E'}],false)
            },{
                //红色
                top: new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#e41c1c'},{offset:1,color:'#ef5757'}],false),
                bottom: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#e41c1c'},{offset:1,color:'#ef5757'}],false),
                value: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#e41c1c'},{offset:1,color:'#ef5757'}],false)
            }];
            chartConf.barGap = 0.2;
            chartConf.barWidth = 24;
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
                    color: chartConf.colors[index].top,
                    data: item.count
                },{
                    name: 'bottom',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [symbolOffsetLeft,chartConf.barWidth/4],
                    z: 12,
                    color: chartConf.colors[index].top,
                    data: item.count,
                },{
                    name: item.name,
                    type: 'bar',
                    barGap: chartConf.barGap,
                    barWidth: chartConf.barWidth,
                    data: item.count,
                    itemStyle: {
                        color: chartConf.colors[index].value
                    },
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 14,
                        color: '#FFFFFF'
                    }
                })
            })
            console.log(chartConf.lenged)
            this.chartOptions = {
                grid: {
                    ...GridConf(true)
                },
                legend: {
                    ...LengedConf(),
                    data: chartConf.lenged
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
