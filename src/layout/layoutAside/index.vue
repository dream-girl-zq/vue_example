<template>
<div class="zq-layout-aside">
    <div class="zq-layout-aside-tile">导航菜单</div>
    <div class="zq-layout-aside-scroll">
        <el-menu
            mode="vertical"
            :default-active="activeMenu"
            :router="true">
            <SidebarItem
                v-for="(route,index) in canShowRoutes"
                :key="route.path+index"
                :item="route"
                :basePath="route.path"/>
        </el-menu>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'layoutAside',
    components: {
        SidebarItem: (resolve) => require(['./components/SidebarItem'],resolve)
    },
    data(){
        return {}
    },
    computed: {
        ...mapGetters(["canShowRoutes"]),
        activeMenu(){
            const route = this.$route;
            return this.$route.path;
        }
    }
}
</script>
<style scoped>
.zq-layout-aside{
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 6.5rem;
}
.zq-layout-aside-tile{
    width: 100%;
    height: 5rem;
    line-height: 4.5rem;
    position: absolute;
    top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 2.4rem;
    font-weight: bold;
    color: #E19A2D;
    background: linear-gradient(0deg, #B9CFFF 0%, #E19A2D 99.0478515625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-left: 2rem;
    border-bottom: 0.1rem solid #2677AC;
}
.zq-layout-aside-scroll{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.zq-layout-aside-scroll >>> .el-menu{
    background-color: transparent;
    border-right: none;
}
/*字体颜色和大小*/
.zq-layout-aside-scroll >>> .el-submenu__title,
.zq-layout-aside-scroll >>> .el-menu-item{
    color: rgba(255,255,255,.8);
    font-size: 1.6rem;
    padding: 0 2rem!important;
    height: 5.6rem;
    line-height: 5.6rem;
}
.zq-layout-aside-scroll >>> .el-submenu .el-menu-item{
    padding-left: 4rem!important;
}
/*鼠标悬停和获得焦点的背景颜色*/
.zq-layout-aside-scroll >>> .el-menu-item:focus,
.zq-layout-aside-scroll >>> .el-submenu__title:focus,
.zq-layout-aside-scroll >>> .el-menu-item:hover,
.zq-layout-aside-scroll >>> .el-submenu__title:hover{
    background-color: #043063;
}
/*导航选中样式*/
.zq-layout-aside-scroll >>> .el-menu-item.is-active{
    background-color: #043063;
    color: #e19a2d;
}
</style>
