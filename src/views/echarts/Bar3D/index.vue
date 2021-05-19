<template>
<div class="zq-app-main-container">
    <div class="zq-app-main-body" style="padding:1rem;">
        <div class="zq-app-main-left50">
            <div class="zq-app-main-top50">
                <LayoutCard title="3D堆积柱状图">
                    <BarStack3D slot="content" :dataObj="dataObjStackBar" />
                </LayoutCard>
            </div>
            <div class="zq-app-main-bottom50">
                <LayoutCard title="3D堆积柱状图">
                    <BarStack3D slot="content" :dataObj="dataObjStackBarTwo" />
                </LayoutCard>
            </div>
        </div>
        <div class="zq-app-main-right50">
            <div class="zq-app-main-top50">
                <LayoutCard title="3D堆积柱状图">
                    <BarStack3D slot="content" :dataObj="dataObjStackBarOne" />
                </LayoutCard>
            </div>
            <div class="zq-app-main-bottom50">
                <LayoutCard title="带背景的3D柱状图">
                    <BgBar3D slot="content" :dataObj="dataObjBgBar" />
                </LayoutCard>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Bar3D',
    components: {
        BarStack3D: (resolve) => require(['./components/BarStack3D'],resolve),
        BgBar3D: (resolve) => require(['./components/BgBar3D'],resolve)
    },
    data(){
        return {
            dataObjStackBar: {
                data: [{
                    name: '第一类',count: [38,25,25,15,28,30,15,25,36,30,16]
                },{
                    name: '第二类',count: [25,20,21,25,32,28,20,14,30,25,23]
                }]
            },
            dataObjStackBarOne: {
                data: [{
                    name: '第一类',count: [38,25,25,15,28,30,15,25,36,30,16]
                },{
                    name: '第二类',count: [25,20,21,25,32,28,20,14,30,25,23]
                },{
                    name: '第三类',count: [14,21,28,15,28,14,12,25,15,14,26]
                }]
            },
            dataObjStackBarTwo: {
                data: [{
                    name: '第一类',count: [38,25,25,15,28,30,15,25,36,30,16]
                }]
            },
            dataObjBgBar: {
                data: [{
                    name: '数量',count: [38,25,25,15,28,30,15,25,36,30,16]
                }]
            }
        }
    }
}
</script>
