<template>
<div class="zq-app-mobile-index-swipe">
    <van-swipe :autoplay="1500" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipeImgs" :key="index" class="zq-app-mobile-index-swipe-item">
            <van-image width="100%" height="11.8rem" fit="fill" :src="item" />
            <div class="zq-app-mobile-index-swipe-name">
                <p class="zq-app-mobile-index-swipe-text">少壮不努力</p>
                <p class="zq-app-mobile-index-swipe-text">老大徒伤悲</p>
            </div>
        </van-swipe-item>
    </van-swipe>
</div>
</template>
<script>
import swipe0 from '@/assets/images_mobile/index_swipe_img_0.png';
import swipe1 from '@/assets/images_mobile/index_swipe_img_1.png';
import swipe2 from '@/assets/images_mobile/index_swipe_img_2.png';
import swipe3 from '@/assets/images_mobile/index_swipe_img_3.png';
export default {
    name: 'MobileTopIndexSwipe',
    data(){
        return {
            swipeImgs: [swipe0,swipe1,swipe2,swipe3]
        }
    }
}
</script>
<style scoped>
.zq-app-mobile-index-swipe{
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.zq-app-mobile-index-swipe-item{
    position: relative;
}
.zq-app-mobile-index-swipe-name{
    position: absolute;
    top: 0;
    left: 0;
    padding: 2.5rem 12rem;
}
.zq-app-mobile-index-swipe-text{
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
    line-height: 3.4rem;
}
</style>
