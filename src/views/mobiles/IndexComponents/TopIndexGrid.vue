<template>
<div class="zq-app-mobile-index-grid">
    <div class="zq-app-mobile-index-grid-box" v-for="(item,index) in gridIcon" :key="index">
        <div class="zq-app-mobile-index-grid-item">
            <div :class="['zq-app-mobile-index-grid-img','img'+index]">
                <div class="zq-app-mobile-index-grid-text">{{item | gridIconCapitalize}}</div>
            </div>
            <div class="zq-app-mobile-index-grid-name">{{item}}</div>
        </div>
    </div>
</div>
</template>
<script>
import GridIcon1 from '@/assets/images_mobile/index_grid_1.png';
import GridIcon2 from '@/assets/images_mobile/index_grid_2.png';
import GridIcon3 from '@/assets/images_mobile/index_grid_3.png';
import GridIcon4 from '@/assets/images_mobile/index_grid_4.png';
import GridIcon5 from '@/assets/images_mobile/index_grid_5.png';
export default {
    name: 'MobileTopIndexGrid',
    data(){
        return {
            gridIcon: ['少安毋躁','壮志凌云','不卑不亢','努筋拔力','力挽狂澜','老骥伏枥','大显身手','徒增颜汗','伤心蒿目','悲歌慷慨']
        }
    },
    filters: {
        gridIconCapitalize(name){
            return name.substr(0,1);
        }
    }
}
</script>
<style scoped>
.zq-app-mobile-index-grid{
    height: 100%;
    width: 100%;
    padding: 1rem;
}
.zq-app-mobile-index-grid-box{
    float: left;
    height: 8rem;
    width: 20%;
    padding: 0 1rem 1rem;
}
.zq-app-mobile-index-grid-item{
    width: 100%;
    height: 100%;
}
.zq-app-mobile-index-grid-img{
    width: 100%;
    height: 4.8rem;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.zq-app-mobile-index-grid-img.img0,
.zq-app-mobile-index-grid-img.img9{
    background-image: url(../../../assets/images_mobile/index_grid_1.png);
}
.zq-app-mobile-index-grid-img.img1,
.zq-app-mobile-index-grid-img.img8{
    background-image: url(../../../assets/images_mobile/index_grid_2.png);
}
.zq-app-mobile-index-grid-img.img2,
.zq-app-mobile-index-grid-img.img7{
    background-image: url(../../../assets/images_mobile/index_grid_3.png);
}
.zq-app-mobile-index-grid-img.img3,
.zq-app-mobile-index-grid-img.img6{
    background-image: url(../../../assets/images_mobile/index_grid_4.png);
}
.zq-app-mobile-index-grid-img.img4,
.zq-app-mobile-index-grid-img.img5{
    background-image: url(../../../assets/images_mobile/index_grid_5.png);
}
.zq-app-mobile-index-grid-text{
    line-height: 4.8rem;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    background: linear-gradient(180deg, #0E2F4F 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.zq-app-mobile-index-grid-name{
    width: 100%;
    line-height: 2.2rem;
    font-size: 1.2rem;
    color: rgba(255,255,255,.8);
}
</style>
