<template>
<div style="width:100%;height:100%;">
    <v-chart :options="chartOptions" style="width:100%;height:100%;"/>
</div>
</template>
<script>
import * as echarts from 'echarts'
import { GridConf,LengedConf,XAxisConf,YAxisConf } from '@/utils/echarts_conf'
export default {
    name: 'BarCircle2D',
    data(){
        return {
            chartOptions: {}
        }
    },
    methods: {
        initChart(){

        }
    },
    mounted(){
        this.initChart();
    }
}
</script>
