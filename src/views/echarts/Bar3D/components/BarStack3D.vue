<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'BarStack3D',
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
            //对原始数据进行处理
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
            chartConf.colors = ['#0573E8','#E5CE10','#01C1AA','#F9A708','#E94F0B'];
            chartConf.lenged = [];
            chartConf.series = [];
            chartConf.long = 13;
            chartConf.width = 4;
            const CubeLeft = echarts.graphic.extendShape({
                shape: {x: 0,y: 0},
                buildPath: function(ctx, shape) {
                    const xAxisPoint = shape.xAxisPoint
                    const c0 = [shape.x+chartConf.width, shape.y];//CubeLeft右上角
                    const c1 = [shape.x-chartConf.long, shape.y];//CubeLeft左上角
                    const c2 = [shape.x-chartConf.long, xAxisPoint[1]];//CubeLeft左下角
                    const c3 = [shape.x+chartConf.width, xAxisPoint[1]];//CubeLeft右下角
                    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
                }
            })
            const CubeRight = echarts.graphic.extendShape({
                shape: {x: 0,y: 0},
                buildPath: function(ctx, shape) {
                    const xAxisPoint = shape.xAxisPoint
                    const c1 = [shape.x+chartConf.width, shape.y];//CubeRight左上角
                    const c2 = [shape.x+chartConf.width, xAxisPoint[1]];//CubeRight左下角
                    const c3 = [shape.x+chartConf.long, xAxisPoint[1]-chartConf.width];//CubeRight右下角
                    const c4 = [shape.x+chartConf.long, shape.y-chartConf.width];////CubeRight右上角
                    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                }
            })
            const CubeTop = echarts.graphic.extendShape({
                shape: {x: 0,y: 0},
                buildPath: function(ctx, shape) {
                    const c1 = [shape.x+chartConf.width, shape.y];//CubeTop右下角
                    const c2 = [shape.x+chartConf.long, shape.y-chartConf.width];//CubeTop右上角
                    const c3 = [shape.x-chartConf.width, shape.y-chartConf.width];//CubeTop左上角
                    const c4 = [shape.x-chartConf.long, shape.y];//CubeTop左下角
                    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                }
            })
            echarts.graphic.registerShape('CubeLeft', CubeLeft);
            echarts.graphic.registerShape('CubeRight', CubeRight);
            echarts.graphic.registerShape('CubeTop', CubeTop);
            rawData.map((item,index)=>{
                chartConf.lenged.push(item.name);
                chartConf.series.push({
                    name: item.name,
                    type: 'custom',
                    data: item.count,
                    z: 10-index,
                    renderItem: function(params,api){
                        const location = api.coord([api.value(0), api.value(1)]);
                        return {
                            type: 'group',
                            children: [{
                                type: 'CubeLeft',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0])
                                },
                                style: {
                                    fill: chartConf.colors[index]
                                }
                            },{
                                type: 'CubeRight',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0])
                                },
                                style: {
                                    fill: chartConf.colors[index]
                                }
                            },{
                                type: 'CubeTop',
                                shape: {
                                    api,
                                    xValue: api.value(0),
                                    yValue: api.value(1),
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0])
                                },
                                style: {
                                    fill: index==rawData.length-1 ? chartConf.colors[index] : 'transparent'
                                }
                            }]
                        }
                    }
                })
            })
            this.chartOptions = {
                color: chartConf.colors,
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
