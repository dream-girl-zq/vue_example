<template>
<div class="zq-layout-mobile-app-main">
    <transition name="fade-transform" mode="out-in">
        <keep-alive>
            <router-view :key="key" />
        </keep-alive>
    </transition>
</div>
</template>
<script>
export default {
    name: 'layoutMobileAppMain',
    computed: {
        key(){
            return this.$route.path;
        }
    }
}
</script>
<style scoped>
.zq-layout-mobile-app-main{
    width: 100%;
    height: 100%;
    background-image: url(../../assets/images/bg-main.png);
    background-size: 100% 100%;
}
</style>
