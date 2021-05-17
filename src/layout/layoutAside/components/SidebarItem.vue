<template>
<div v-if="(!item.hidden)">
    <el-submenu v-if="(item.children && item.children.length)" :index="item.path">
        <div slot="title">{{item.meta.title}}</div>
        <SidebarItem
            v-for="child in item.children"
            :key="child.path"
            :item="child"
            :basePath="item.path"
            :isNest="true"/>
    </el-submenu>
    <template v-else>
        <el-menu-item :index="getPath">{{item.meta.title}}</el-menu-item>
    </template>
</div>
</template>
<script>
export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        },
        isNest: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getPath(){
            let calcPath;
            if(this.item.path==this.basePath){
                calcPath = this.item.path;
            }else{
                calcPath = this.basePath+'/'+this.item.path;
            }
            return calcPath;
        }
    }
}
</script>
