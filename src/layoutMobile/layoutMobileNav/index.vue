<template>
<div class="zq-layout-mobile-nav">
    <div :class="{'zq-layout-mobile-nav-box':true,'active':navActive==index}" v-for="(item,index) in mobileCanShowRoutes" :key="index">
        <div class="zq-layout-mobile-nav-item" @click="(navActive=index)">
            <router-link :to="item.path">
                <div :class="['zq-layout-mobile-nav-icon','icon-'+index]"></div>
                <div class="zq-layout-mobile-nav-name">{{item.meta.title}}</div>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'layoutMobileNav',
    data(){
        return {
            navActive: 0
        }
    },
    computed: {
        ...mapGetters(["mobileCanShowRoutes"])
    },
}
</script>
<style scoped>
.zq-layout-mobile-nav{
    height: 6rem;
    width: 100%;
    background-color: rgba(1,11,37,.6);
    padding: 0.5rem 1rem;
}
.zq-layout-mobile-nav-box{
    float: left;
    width: 20%;
    height: 100%;
    padding: 0 1rem;
}
.zq-layout-mobile-nav-item{
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
}
.zq-layout-mobile-nav-icon{
    height: 3.2rem;
    width: 100%;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
.zq-layout-mobile-nav-icon.icon-0{
    background-image: url(../../assets/images_mobile/layout_nav_home.png);
}
.zq-layout-mobile-nav-box.active .zq-layout-mobile-nav-icon.icon-0{
    background-image: url(../../assets/images_mobile/layout_nav_home_active.png);
}
.zq-layout-mobile-nav-icon.icon-1{
    background-image: url(../../assets/images_mobile/layout_nav_list.png);
}
.zq-layout-mobile-nav-box.active .zq-layout-mobile-nav-icon.icon-1{
    background-image: url(../../assets/images_mobile/layout_nav_list_active.png);
}
.zq-layout-mobile-nav-icon.icon-2{
    background-image: url(../../assets/images_mobile/layout_nav_apply.png);
}
.zq-layout-mobile-nav-box.active .zq-layout-mobile-nav-icon.icon-2{
    background-image: url(../../assets/images_mobile/layout_nav_apply_active.png);
}
.zq-layout-mobile-nav-icon.icon-3{
    background-image: url(../../assets/images_mobile/layout_nav_cart.png);
}
.zq-layout-mobile-nav-box.active .zq-layout-mobile-nav-icon.icon-3{
    background-image: url(../../assets/images_mobile/layout_nav_cart_active.png);
}
.zq-layout-mobile-nav-icon.icon-4{
    background-image: url(../../assets/images_mobile/layout_nav_mine.png);
}
.zq-layout-mobile-nav-box.active .zq-layout-mobile-nav-icon.icon-4{
    background-image: url(../../assets/images_mobile/layout_nav_mine_active.png);
}
.zq-layout-mobile-nav-name{
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.8rem;
    color: #fff;
}
.zq-layout-mobile-nav-box.active .zq-layout-mobile-nav-name{
    color: #0573E8;
}
</style>
