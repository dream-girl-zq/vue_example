<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { ColorConf,GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'BarCircleStack',
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
            chartConf.colors = ColorConf;
            chartConf.barGap = 0.2;
            chartConf.barWidth = 24;
            chartConf.lenged = [];
            chartConf.series = [];
            rawData.map((item,index)=>{
                chartConf.lenged.push(item.name);
                //头部顶部椭圆的x轴偏移量(根据index、chartConf.barGap和chartConf.barWidth来计算)
                chartConf.series.push({
                    name: 'top',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,(-chartConf.barWidth/4)],
                    symbolPosition: 'end',
                    z: 12-index,
                    color: chartConf.colors[index],
                    data: item.count
                },{
                    name: 'bottom',
                    type: 'pictorialBar',
                    symbolSize: [chartConf.barWidth,chartConf.barWidth/2],
                    symbolOffset: [0,chartConf.barWidth/4],
                    z: 12-index,
                    color: chartConf.colors[index],
                    data: item.count,
                },{
                    name: item.name,
                    type: 'bar',
                    barGap: index==0 ? '' : '-100%',
                    barWidth: chartConf.barWidth,
                    z: 11-index,
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
