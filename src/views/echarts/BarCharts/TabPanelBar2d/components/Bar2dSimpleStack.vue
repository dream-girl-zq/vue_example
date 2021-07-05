<template>
<div style="width:100%;height:100%;">
    <v-chart autoresize :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import { BaseConf,GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'Bar2dSimpleStack',
    props: {
        valueObj: {
            type: Object,
            default: function(){
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
            let chartConf = {};
            chartConf.colors = BaseConf._color;
            chartConf.barWidth = BaseConf._barWidth;
            chartConf.lengedHas = rawData.length>1;
            chartConf.lenged = [];
            chartConf.series = [];
            rawData.map((item,index)=>{
                chartConf.lenged.push(item.name);
                chartConf.series.push({
                    name: item.name,
                    type: 'bar',
                    barWidth: chartConf.barWidth,
                    stack: 'total',
                    data: item.count,
                    itemStyle: {
                        color: chartConf.colors[index].val
                    }
                })
            })
            this.chartOptions = {
                color: chartConf.colors,
                grid: {
                    ...GridConf(chartConf.lengedHas)
                },
                legend: {
                    ...LengedConf(),
                    data: chartConf.lenged
                },
                xAxis: {
                    ...XAxisConf()
                },
                yAxis: {
                    ...YAxisConf()
                },
                series: chartConf.series
            };
        }
    },
    created(){
        this.initChart();
    }
}
</script>
