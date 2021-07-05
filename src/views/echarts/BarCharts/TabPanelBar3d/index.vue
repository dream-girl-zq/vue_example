<template>
<div class="zq-app-main-container">
    <div class="zq-app-main-body" style="padding:0 1rem;">
        <div class="zq-app-main-switch-btn left" v-if="zqAppMainSwitchItem!=0" @click="zqAppMainSwitchItem=0"></div>
        <div class="zq-app-main-switch-btn right" v-if="zqAppMainSwitchItem==0" @click="zqAppMainSwitchItem=-100"></div>
        <div class="zq-app-main-switch-box">
            <div class="zq-app-main-switch-item left" :style="{left:zqAppMainSwitchItem+'%'}">
                <div class="zq-app-main-top50">
                    <div class="zq-app-main-left50">
                        <LayoutCard title="2D圆柱柱状图">
                        </LayoutCard>
                    </div>
                    <div class="zq-app-main-right50">
                        <LayoutCard title="2D圆柱柱状图">
                        </LayoutCard>
                    </div>
                </div>
                <div class="zq-app-main-bottom50">
                    <LayoutCard title="2D圆柱柱状图">
                    </LayoutCard>
                </div>
            </div>
            <div class="zq-app-main-switch-item right" :style="{left:(zqAppMainSwitchItem+100)+'%'}">
                <div class="zq-app-main-top50">
                    <LayoutCard title="3D堆积柱状图">
                    </LayoutCard>
                </div>
                <div class="zq-app-main-bottom50">
                    <LayoutCard title="2D圆柱柱状图">
                    </LayoutCard>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'TabPanelBar3d',
    components: {},
    data(){
        return {
            zqAppMainSwitchItem: 0,
        }
    }
}
</script>
