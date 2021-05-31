import * as echarts from 'echarts'

let _fontSize = 14;

//color配置
export const ColorConf = [
    //new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#9825e0'},{offset:1,color:'#b170da'}],false),//紫色
    new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#165eec'},{offset:1,color:'#5454d0'}],false),//蓝色
    new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#21f3f3'},{offset:1,color:'#61dcdc'}],false),//青色
    new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#00EC28'},{offset:1,color:'#5DF076'}],false),//绿色
    new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#E5CE10'},{offset:1,color:'#e6db7c'}],false),//黄色
    new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#FF9A22'},{offset:1,color:'#FFD56E'}],false),//橙色
    new echarts.graphic.LinearGradient(0,0,0,1,[{offset: 0,color:'#e41c1c'},{offset:1,color:'#ef5757'}],false),//红色
];

//ecahrts的Grid配置
export function GridConf(hasLenged){
    return {
        top: hasLenged ? 40 : 20,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true
    }
}
//ecahrts的Lenged配置
export function LengedConf(){
    return {
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 30,
        textStyle: {
            color: '#FFFFFF',
            fontSize: _fontSize,
            padding: [3,0,0,0]
        },
        selectedMode: false
    }
}

export function XAxisConf(){
    return {
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [10,25],
            lineStyle: {color: '#42A4FF'}
        },
        axisTick: {show: false},
        axisLabel: {
            color: '#FFFFFF',
            fontSize: _fontSize
        },
        data: ['杭州','宁波','温州','嘉兴','湖州','绍兴','金华','衢州','舟山','台州','丽水']
    }
}

export function YAxisConf(){
    return {
        type: 'value',
        min: 0,
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 20],
            symbolSize: [10,25],
            lineStyle: {color: '#42A4FF'}
        },
        axisTick: {show: false},
        axisLabel: {
            color: '#FFFFFF',
            fontSize: _fontSize
        },
        splitLine: {
            lineStyle: {
                color: '#42A4FF',
                type: 'dashed'
            }
        }
    }
}
