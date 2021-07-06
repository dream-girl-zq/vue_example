import * as echarts from 'echarts'

let _fontSize = 14;
let _axisFontColor = '#ffffff';
let _barWidth = 24;
let _barGap = 0.2;
let _width = 4;
let _long = 13;

//color配置
export const BaseConf = {
    _color: [{
        top: '#0b64e8',
        val: '#0573E8'
    },{
        top: '#08abc1',
        val: '#01C1AA'
    },{
        top: '#e5b107',
        val: '#E5CE10'
    },{
        top: '#e94206',
        val: '#E94F0B'
    }],
    _bgColor: {
        top: 'rgba(32, 95, 159, 1)',
        val: 'rgba(32, 95, 159, .6)'
    },
    _barWidth: _barWidth,
    _barGap: _barGap,
    _width: _width,
    _long: _long
};

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
            color: _axisFontColor,
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
            color: _axisFontColor,
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
            color: _axisFontColor,
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
