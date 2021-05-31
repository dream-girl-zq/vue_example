<template>
<div class="zq-layout-mobile-container">
    <div class="zq-layout-mobile-body">
        <layoutMobileAppMain />
    </div>
    <div class="zq-layout-mobile-foot">
        <layoutMobileNav />
    </div>
</div>
</template>
<script>
export default {
    name: 'layoutMobile',
    components: {
        layoutMobileAppMain: (resolve) => require(['./layoutMobileAppMain/index'],resolve),
        layoutMobileNav: (resolve) => require(['./layoutMobileNav/index'],resolve)
    }
}
</script>
<style scoped>
.zq-layout-mobile-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(../assets/images/bg-index.png);
    background-size: 101% 101%;
    background-position: center center;
    position: relative;
    padding-bottom: 6rem;
}
.zq-layout-mobile-foot{
    width: 100%;
    height: 6rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.zq-layout-mobile-body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
