<template>
<div class="zq-app-main-container">
    <div class="zq-app-main-body" style="padding:1rem 2rem;">
        <div class="zq-app-main-top50">
            <div class="zq-app-main-left50">
                <LayoutCard title="3D柱状堆积图">
                    <Bar3dStack slot="content" :valueObj="dataObjTopLeft" />
                </LayoutCard>
            </div>
            <div class="zq-app-main-right50">
                <LayoutCard title="带背景的3D柱状图">
                    <Bar3dBg slot="content" :valueObj="dataObjTopRight" />
                </LayoutCard>
            </div>
        </div>
        <div class="zq-app-main-bottom50">
            <LayoutCard title="3D柱状图系列图">
                <Bar3dMore slot="content" :valueObj="dataObjBottomAll" />
            </LayoutCard>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'TabPanelBar3d',
    components: {
        Bar3dStack: (resolve) => require(['./components/Bar3dStack'],resolve),
        Bar3dBg: (resolve) => require(['./components/Bar3dBg'],resolve),
        Bar3dMore: (resolve) => require(['./components/Bar3dMore'],resolve),
    },
    data(){
        return {
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
                data: [125,89,98,102,132,136,125,98,158,146,139]
            },
            dataObjBottomAll: {
                data: [{
                    name: '数量一',count: [100,120,123,125,168,124,120,111,145,99,85]
                },{
                    name: '数量二',count: [150,126,145,112,102,145,111,125,156,120,146]
                },{
                    name: '数量三',count: [125,89,98,102,132,136,125,98,158,146,139]
                },{
                    name: '数量四',count: [144,135,168,99,102,89,133,126,129,149,146]
                }]
            }
        }
    }
}
</script>
