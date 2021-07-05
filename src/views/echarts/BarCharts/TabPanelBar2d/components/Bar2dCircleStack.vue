<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { BaseConf,GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'Bar2dCircleStack',
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
            let rawData = JSON.parse(JSON.stringify(this.valueObj.data));
            console.log(rawData)
            //处理数据
            rawData.map((item,index)=>{
                //上一项存在的情况下，当前项的count都要加上上一项的值
                if(index-1>-1){
                    let preItemCount = rawData[index-1].count;
                    item.count.map((subItem,subIndex)=>{
                        item.count[subIndex]+=preItemCount[subIndex];
                    })
                }
            })
            let chartConf = {};
            chartConf.colors = BaseConf._color;
            chartConf.barWidth = BaseConf._barWidth;
            chartConf.lengedHas = rawData.length>1;
            chartConf.lenged = [];
            chartConf.series = [];
            rawData.map((item,index)=>{
                chartConf.lenged.push(item.name);
                chartConf.series.push({
                    name: 'top',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,(-chartConf.barWidth/4)],
                    symbolPosition: 'end',
                    z: 12-index,
                    color: chartConf.colors[index].top,
                    data: item.count
                },{
                    name: 'bottom',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,chartConf.barWidth/4],
                    z: 12-index,
                    color: chartConf.colors[index].top,
                    data: item.count,
                },{
                    name: item.name,
                    type: 'bar',
                    barGap: index==0 ? '' : '-100%',
                    barWidth: chartConf.barWidth,
                    z: 11-index,
                    data: item.count,
                    itemStyle: {
                        color: chartConf.colors[index].val
                    }
                })
            })
            this.chartOptions = {
                grid: {
                    ...GridConf(chartConf.lengedHas)
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
