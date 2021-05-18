<template>
<div style="width:100%;height:100%;padding:2rem;">
    <div class="MapBox" style="width:100%;height:100%;transform-origin:left top;">
        <img class="MapImg" :src="xc_img" usemap="#MapXC_">
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
import xc_png from '@/assets/html5_MapArea/images/xc_hsz_.png'
import xc_json from '@/assets/html5_MapArea/jsons/xc_hsz_.json'
import maphilight from '@/assets/html5_MapArea/js/jquery.maphilight'
export default {
    name: 'MapXC_hsz_',
    props: {
        colorObj: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    data(){
        return {
            xc_img: xc_png,
            xc_list: xc_json
        }
    },
    methods: {
        setMapColor(){
            let colorObj = this.colorObj;
            $(".MapImg").maphilight();
            setTimeout(()=>{
                let mapConf = {};
                mapConf.boxW = $('.MapBox').width();
                mapConf.boxH = $('.MapBox').height();
                mapConf.imgW = $('.MapImg').width();
                mapConf.imgH = $('.MapImg').height();
                let scaleW = mapConf.boxW/mapConf.imgW;
                let scaleH = mapConf.boxH/mapConf.imgH;
                let scale,marginCalc;
                if(scaleW>scaleH){
                    scale = scaleH;
                    marginCalc = (mapConf.boxW-mapConf.imgW*scale)/2;
                    $('.MapBox').css({
                        'transform':'scale('+scale+')',
                        'margin-left': marginCalc+'px'
                    })

                }else{
                    scale = scaleW;
                    marginCalc = (mapConf.boxH-mapConf.imgH*scale)/2;
                    $('.MapBox').css({
                        'transform':'scale('+scale+')',
                        'margin-top': marginCalc+'px'
                    })
                }
                let _area = $('area')
                for(let i=0;i<_area.length;i++){
                    let fillColor = 'B7EC0A';
                    if(i%3==0){
                        fillColor = colorObj.orange;
                    }else if(i%3==1){
                        fillColor = colorObj.yellow;
                    }else if(i%3==2){
                        fillColor = colorObj.green;
                    }
                    $(_area[i]).data('maphilight',{
                        alwaysOn: true,
                        strokeColor: fillColor,
                        strokeWidth: 1,
                        fillColor: fillColor,
                        fillOpacity: .3,
                        fade: false,
                        shadow: true
                    }).trigger('alwaysOn.maphilight');
                }
            },100)
        },
        areaHandle(code){

        },
        mouseoverHandle(code){
            $('#'+code).data('maphilight',{
                fillOpacity: .5
            });
        },
        mouseoutHandle(code){
            $('#'+code).data('maphilight',{
                fillOpacity: .3
            });
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.setMapColor();
        })
    }
}
</script>
