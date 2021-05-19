<template>
<div style="width:100%;height:100%;padding:2rem;">
    <div class="MapBox" style="width:100%;height:100%;transform-origin:left top;">
        <img class="MapImg" :style="{visibility: Imgvisibility}" :src="xc_img" usemap="#MapXC_" @load="imgLoadHandle">
        <map id="MapXC_" name="MapXC_">
            <area v-for="(item,index) in xc_list"
                style="cursor:pointer;"
                :key="index"
                :coords="item.coords"
                shape="poly"
                :id="item.code"
                href="javascript:;"
                @click="areaHandle(item.code)"
                @mouseover="mouseoverHandle(item.code)"
                @mouseout="mouseoutHandle(item.code)"/>
        </map>
    </div>
</div>
</template>
<script>
import RenderMap from '../minxin/RenderMap'
import xc_png from '@/assets/html5_MapArea/images/xc_yljd_.png'
import xc_json from '@/assets/html5_MapArea/jsons/xc_yljd_.json'
import maphilight from '@/assets/html5_MapArea/js/jquery.maphilight'
export default {
    name: 'MapXC_yljd_',
    mixins: [RenderMap],
    data(){
        return {
            xc_img: xc_png,
            xc_list: xc_json
        }
    },
    methods: {
        areaHandle(code){

        }
    }
}
</script>
