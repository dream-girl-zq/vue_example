<template>
<div class="zq-app-main-container">
    <div class="zq-app-main-body" style="padding:0 1rem;">
        <div class="zq-app-main-switch-btn left" v-if="zqAppMainSwitchItem!=0" @click="zqAppMainSwitchItem=0"></div>
        <div class="zq-app-main-switch-btn right" v-if="zqAppMainSwitchItem==0" @click="zqAppMainSwitchItem=-100"></div>
        <div class="zq-app-main-switch-box">
            <div class="zq-app-main-switch-item left" :style="{left:zqAppMainSwitchItem+'%'}">
                <div class="zq-app-main-top50">
                    <div class="zq-app-main-left50">
                        <LayoutCard title="2D平面柱图堆积图">
                            <Bar2dSimpleStack slot="content" :valueObj="dataObjTopLeft" />
                        </LayoutCard>
                    </div>
                    <div class="zq-app-main-right50">
                        <LayoutCard title="2D圆柱图堆积图">
                            <Bar2dCircleStack slot="content" :valueObj="dataObjTopRight" />
                        </LayoutCard>
                    </div>
                </div>
                <div class="zq-app-main-bottom50">
                    <div class="zq-app-main-left50">
                        <LayoutCard title="带背景的2D平面柱图">
                            <Bar2dSimpleBg slot="content" :valueObj="dataObjBottomLeft" />
                        </LayoutCard>
                    </div>
                    <div class="zq-app-main-right50">
                        <LayoutCard title="带背景的2D圆柱图">
                            <Bar2dCircleBg slot="content" :valueObj="dataObjBottomRight" />
                        </LayoutCard>
                    </div>
                </div>
            </div>
            <div class="zq-app-main-switch-item right" :style="{left:(zqAppMainSwitchItem+100)+'%'}">
                <div class="zq-app-main-top50">
                    <LayoutCard title="2D平面柱图系列图">
                        <Bar2dSimpleMore slot="content" :valueObj="dataObjTopAll" />
                    </LayoutCard>
                </div>
                <div class="zq-app-main-bottom50">
                    <LayoutCard title="2D圆柱图系列图">
                        <Bar2dCircleMore slot="content" :valueObj="dataObjBottomAll" />
                    </LayoutCard>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'TabPanelBar2d',
    components: {
        Bar2dSimpleStack: (resolve) => require(['./components/Bar2dSimpleStack'],resolve),
        Bar2dSimpleBg: (resolve) => require(['./components/Bar2dSimpleBg'],resolve),
        Bar2dCircleStack: (resolve) => require(['./components/Bar2dCircleStack'],resolve),
        Bar2dCircleBg: (resolve) => require(['./components/Bar2dCircleBg'],resolve),
        Bar2dSimpleMore: (resolve) => require(['./components/Bar2dSimpleMore'],resolve),
        Bar2dCircleMore: (resolve) => require(['./components/Bar2dCircleMore'],resolve),
    },
    data(){
        return {
            zqAppMainSwitchItem: 0,
            dataObjTopLeft: {
                data: [{
                    name: '数量一',count: [100,120,123,125,168,124,120,111,145,99,85]
                },{
                    name: '数量二',count: [150,126,145,112,102,145,111,125,156,120,146]
                },{
                    name: '数量三',count: [125,89,98,102,132,136,125,98,158,146,139]
                },{
                    name: '数量四',count: [144,135,168,99,102,89,133,126,129,149,146]
                }]
            },
            dataObjTopRight: {
                data: [{
                    name: '第一类',count: [38,25,25,15,28,30,15,25,36,30,16]
                },{
                    name: '第二类',count: [25,20,21,25,32,28,20,14,30,25,23]
                },{
                    name: '第三类',count: [14,21,28,15,28,14,12,25,15,14,26]
                },{
                    name: '第四类',count: [28,24,15,9,22,26,18,19,12,11,26]
                }]
            },
            dataObjBottomLeft: {
                data: [38,25,25,15,28,30,15,25,36,30,16]
            },
            dataObjBottomRight: {
                data: [38,25,25,15,28,30,15,25,36,30,16]
            },
            dataObjTopAll: {
                data: [{
                    name: '第一类',count: [38,25,25,15,28,30,15,25,36,30,16]
                },{
                    name: '第二类',count: [25,20,21,25,32,28,20,14,30,25,23]
                },{
                    name: '第三类',count: [14,21,28,15,28,14,12,25,15,14,26]
                },{
                    name: '第四类',count: [28,24,15,9,22,26,18,19,12,11,26]
                }]
            },
            dataObjBottomAll: {
                data: [{
                    name: '第一类',count: [38,25,25,15,28,30,15,25,36,30,16]
                },{
                    name: '第二类',count: [25,20,21,25,32,28,20,14,30,25,23]
                },{
                    name: '第三类',count: [14,21,28,15,28,14,12,25,15,14,26]
                },{
                    name: '第四类',count: [28,24,15,9,22,26,18,19,12,11,26]
                }]
            }
        }
    }
}
</script>
