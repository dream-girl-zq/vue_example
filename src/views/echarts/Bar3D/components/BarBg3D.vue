<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'BarBg3D',
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
            rawData.map(item=>{
                //先计算数组count的总和再创建一个长度和数组count一样，值均为总和的数组
                let sumTotal = 0;
                item.count.map(subItem=>{
                    sumTotal+=subItem
                });
                item.total = [];
                item.count.map(subItem=>{
                    item.total.push(sumTotal);
                })
            })

            let chartConf = {};
            chartConf.bgcolors = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,color: 'rgba(32, 95, 159, .7)'
            },{
                offset: 1,color: 'rgba(32, 95, 159, 1)'
            }]);
            chartConf.colors = ['#E5CE10','#0573E8'];
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
                chartConf.series.push({
                    name: item.name,
                    type: 'custom',
                    data: item.count,
                    z: 3+index,
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
                                    fill: chartConf.colors[index]
                                }
                            }]
                        }
                    }
                })
                chartConf.series.push({
                    name: item.name,
                    type: 'custom',
                    data: item.total,
                    z: 2+index,
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
                })
            })
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
                series: chartConf.series
            }
        }
    },
    mounted(){
        this.initChart();
    }

}
</script>
