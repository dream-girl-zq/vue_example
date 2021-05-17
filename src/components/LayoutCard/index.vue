<template>
<div class="zq-layout-card-div">
    <div class="zq-layout-card-head">
        <div class="zq-layout-card-title">{{title}}</div>
    </div>
    <div class="zq-layout-card-body">
        <slot name="content"></slot>
    </div>
</div>
</template>
<script>
export default {
    name: 'LayoutCard',
    props: {
        title: {
            default: '标题',
            type: String
        }
    },
    data(){
        return {}
    }
}
</script>
<style scoped>
.zq-layout-card-div{
    width: 100%;
    height: 100%;
    border-image: url(../../assets/images/layout_card_body_1_3.png) fill 0 0 0 0 stretch;
    position: relative;
    padding-top: 3.8rem;
}
.zq-layout-card-head{
    height: 3.8rem;
    width: 100%;
    background-image: url(../../assets/images/layout_card_title_1_3.png);
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.zq-layout-card-title{
    line-height: 3.8rem;
    color: rgba(255,255,255,.8);
    font-size: 1.6rem;
    padding-left: 1.2rem;
}
.zq-layout-card-body{
    width: 100%;
    height: 100%;
    padding: 1rem;
}
</style>
