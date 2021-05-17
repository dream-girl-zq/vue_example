<template>
<div class="zq-layout-container">
    <div class="zq-layout-aside">
        <layoutAside />
    </div>
    <div class="zq-layout-mains">
        <div class="zq-layout-head">
            <layoutTitle />
        </div>
        <div class="zq-layout-body">
            <layoutAppMain />
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Layout',
    components: {
        layoutAside: (resolve) => require(['./layoutAside/index'],resolve),
        layoutTitle: (resolve) => require(['./layoutTitle/index'],resolve),
        layoutAppMain: (resolve) => require(['./layoutAppMain/index'],resolve)
    }
}
</script>
<style scoped>
.zq-layout-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(../assets/images/bg-index.png);
    background-size: 101% 101%;
    background-position: center center;
    position: relative;
    padding-left: 22rem;
}
.zq-layout-aside{
    width: 22rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(../assets/images/bg-aside.png);
    background-size: 100% 100%;
    background-position: center center;
    padding: 0 0.1rem;
}
.zq-layout-mains{
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 6rem;
}
.zq-layout-head{
    width: 100%;
    height: 6rem;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 1rem;
}
.zq-layout-body{
    width: 100%;
    height: 100%;
    padding: 1rem 0 0 1rem;
}
</style>
