<template>
<div class="zq-app-mobile-index-filter">
    <div class="zq-app-mobile-index-filter-scan"></div>
    <div class="zq-app-mobile-index-filter-info"></div>
    <div class="zq-app-mobile-index-filter-middle">
        <div class="zq-app-mobile-index-filter-search"></div>
        <input class="zq-app-mobile-index-filter-input" readonly v-model="filterInput"/>
    </div>
</div>
</template>
<script>
export default {
    name: 'MobileTopIndexFilter',
    data(){
        return {
            filterInput: '哈哈哈'
        }
    }
}
</script>
<style scoped>
.zq-app-mobile-index-filter{
    height: 4.8rem;
    width: 100%;
    position: relative;
    padding: 0 4.8rem;
}
.zq-app-mobile-index-filter-scan,
.zq-app-mobile-index-filter-info{
    width: 4.8rem;
    height: 100%;
    background-size: 3.2rem auto;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 0;
}
.zq-app-mobile-index-filter-scan{
    left: 0;
    background-image: url(../../../assets/images_mobile/index_filter_scan.png);
}
.zq-app-mobile-index-filter-info{
    right: 0;
    background-image: url(../../../assets/images_mobile/index_filter_info.png);
}
.zq-app-mobile-index-filter-middle{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0.6rem 0;
}
.zq-app-mobile-index-filter-search{
    width: 4.4rem;
    height: 100%;
    background-image: url(../../../assets/images_mobile/index_filter_search.png);
    background-size: 2.4rem auto;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
}
.zq-app-mobile-index-filter-input{
    width: 100%;
    height: 100%;
    border: 1px solid #3277bf;
    border-radius: 2.2rem;
    background-color: #0E2F4F;
    padding-left: 4.4rem;
    font-size: 1.4rem;
    color: #fff;
}
</style>
