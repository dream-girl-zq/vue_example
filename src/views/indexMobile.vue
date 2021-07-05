<template>
<div class="zq-app-main-container" style="padding-top:4.8rem;">
    <div class="zq-app-index-filter">
        <MobileTopIndexFilter />
    </div>
    <div style="width:100%;height:11.8rem;">
        <MobileTopIndexSwipe />
    </div>
    <div style="width:100%;height:17rem;background:rgba(1,11,37,.2);margin-top:1rem;">
        <MobileTopIndexGrid />
    </div>
</div>
</template>
<script>
export default {
    name: 'indexMobile',
    components: {
        MobileTopIndexFilter: (resolve) => require(['./mobiles/IndexComponents/TopIndexFilter'],resolve),
        MobileTopIndexSwipe: (resolve) => require(['./mobiles/IndexComponents/TopIndexSwipe'],resolve),
        MobileTopIndexGrid: (resolve) => require(['./mobiles/IndexComponents/TopIndexGrid'],resolve),
    },
    data(){
        return {}
    }
}
</script>
<style scoped>
.zq-app-index-filter{
    width: 100%;
    height: 4.8rem;
    background-color: rgba(1,11,37,.6);
    position: absolute;
    top: 0;
    left: 0;
}
</style>
