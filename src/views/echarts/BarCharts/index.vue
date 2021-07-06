<template>
<div class="zq-app-main-container" style="padding:1rem;">
    <el-tabs v-model="activeTabName" @tab-click="tabClickHandle">
        <el-tab-pane label="平面柱图" name="TabPanelBar2d">
            <TabPanelBar2d />
        </el-tab-pane>
        <el-tab-pane label="立体柱图" name="TabPanelBar3d">
            <TabPanelBar3d />
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
export default {
    name: "BarCharts",
    components: {
        TabPanelBar2d: (resolve) => require(['./TabPanelBar2d/index'],resolve),
        TabPanelBar3d: (resolve) => require(['./TabPanelBar3d/index'],resolve),
    },
    data(){
        return {
            activeTabName: 'TabPanelBar2d',
            activeTabNumb: {
                TabPanelBar2d: 0,
                TabPanelBar3d: 0
            }
        }
    },
    methods: {
        tabClickHandle(comp){
            this.activeTabNumb[comp.paneName]++;
        }
    }
}
</script>
