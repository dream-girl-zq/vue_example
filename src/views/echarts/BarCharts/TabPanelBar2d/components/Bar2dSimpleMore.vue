<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import { BaseConf,GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'Bar2dMoreSeries',
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
            chartConf.color = BaseConf._color;
            chartConf.barGap = BaseConf._barGap;
            chartConf.barWidth = BaseConf._barWidth;
            chartConf.lengedHas = rawData.length>1;
            chartConf.legend = [];
            chartConf.series = [];
            rawData.map((item,index)=>{
                chartConf.legend.push(item.name);
                chartConf.series.push({
                    name: item.name,
                    type: 'bar',
                    barGap: chartConf.barGap,
                    barWidth: chartConf.barWidth,
                    data: item.count,
                    itemStyle: {
                        color: chartConf.color[index].val
                    }
                })
            })
            this.chartOptions = {
                color: BaseConf._color,
                grid: {
                    ...GridConf(chartConf.lengedHas)
                },
                legend: {
                    ...LengedConf(),
                    data: chartConf.legend
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
