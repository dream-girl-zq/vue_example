
<template>
<div style="width:100%;height:100%;">
    <v-chart autoresize :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { BaseConf,GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'Bar3dBg',
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
            let rawDataMax = 0;
            rawData.map(item => rawDataMax = rawDataMax>item ? rawDataMax : item);
            let rawMax = [];
            rawData.map(item => rawMax.push(rawDataMax));
            let chartConf = {};
            chartConf.colors = BaseConf._color[0].val;
            chartConf.bgcolors = BaseConf._bgColor.val;
            chartConf.width = BaseConf._width;
            chartConf.long = BaseConf._long;
            chartConf.lengedHas = false;
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
            this.chartOptions = {
                grid: {
                    ...GridConf(chartConf.lengedHas)
                },
                xAxis: {
                    ...XAxisConf()
                },
                yAxis: {
                    ...YAxisConf()
                },
                series: [{
                    name: 'val',
                    type: 'custom',
                    data: rawData,
                    z: 3,
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
                                    fill: chartConf.colors
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
                                    fill: chartConf.colors
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
                                    fill: chartConf.colors
                                }
                            }]
                        }
                    }
                },{
                    name: "bg",
                    type: 'custom',
                    data: rawMax,
                    z: 2,
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
                                    fill: chartConf.bgcolors
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
                                    fill: chartConf.bgcolors
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
                                    fill: chartConf.bgcolors
                                }
                            }]
                        }
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
