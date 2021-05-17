let _fontSize = 14;

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
