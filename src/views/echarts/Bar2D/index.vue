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
                        <BarCircle2D :dataObj="dataObjCircle" slot="content" />
                    </LayoutCard>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Bar2D',
    components: {
        BarCircle2D: (resolve) => require(['./components/BarCircle2D'],resolve),
    },
    data(){
        return {
            zqAppMainSwitchItem: 0,
            dataObjCircle: {
                data: [{
                    name: '第一类',count: [38,25,25,15,28,30,15,25,36,30,16]
                },{
                    name: '第二类',count: [25,20,21,25,32,28,20,14,30,25,23]
                },{
                    name: '第三类',count: [14,21,28,15,28,14,12,25,15,14,26]
                },{
                    name: '第四类',count: [25,19,14,30,12,25,32,35,28,28,32]
                }]
            }
        }
    }
}
</script>
