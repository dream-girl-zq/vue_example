<template>
<div class="zq-app-main-container">
    <div class="zq-app-main-goBackBtn" v-show="goBackShow" @click="goBackHandle"></div>
    <div class="zq-app-main-body">
        <keep-alive>
            <component :is="currComp"
                :colorObj="colorObj"
                @areaEmitHandle="areaEmitHandle"></component>
        </keep-alive>
    </div>
</div>
</template>
<script>
export default {
    name: 'MapArea',
    components: {
        MapXC_: (resolve) => require(['./components/MapXC_'],resolve),
        MapXC_cnx_: (resolve) => require(['./components/MapXC_cnx_'],resolve),
        MapXC_ctjd_: (resolve) => require(['./components/MapXC_ctjd_'],resolve),
        MapXC_dmx_: (resolve) => require(['./components/MapXC_dmx_'],resolve),
        MapXC_hsz_: (resolve) => require(['./components/MapXC_hsz_'],resolve),
        MapXC_jlz_: (resolve) => require(['./components/MapXC_jlz_'],resolve),
        MapXC_nmjd_: (resolve) => require(['./components/MapXC_nmjd_'],resolve),
        MapXC_qxjd_: (resolve) => require(['./components/MapXC_qxjd_'],resolve),
        MapXC_raz_: (resolve) => require(['./components/MapXC_raz_'],resolve),
        MapXC_sx_: (resolve) => require(['./components/MapXC_sx_'],resolve),
        MapXC_wzz_: (resolve) => require(['./components/MapXC_wzz_'],resolve),
        MapXC_xjz_: (resolve) => require(['./components/MapXC_xjz_'],resolve),
        MapXC_yljd_: (resolve) => require(['./components/MapXC_yljd_'],resolve)
    },
    data(){
        return {
            goBackShow: false,
            currComp: 'MapXC_',
            colorObj: {
                orange: 'ef790f',
                yellow: 'b7eb09',
                green: '07d98d'
            },
            codeCompoentMapping: {
                "330624010": "MapXC_cnx_",
                "330624003": "MapXC_ctjd_",
                "330624009": "MapXC_dmx_",
                "330624005": "MapXC_hsz_",
                "330624007": "MapXC_jlz_",
                "330624002": "MapXC_nmjd_",
                "330624011": "MapXC_qxjd_",
                "330624004": "MapXC_raz_",
                "330624012": "MapXC_sx_",
                "330624008": "MapXC_wzz_",
                "330624006": "MapXC_xjz_",
                "330624001": "MapXC_yljd_"
            }
        }
    },
    methods: {
        areaEmitHandle(code){
            this.currComp = this.codeCompoentMapping[code];
            this.goBackShow = true;
        },
        goBackHandle(){
            this.currComp = 'MapXC_';
            this.goBackShow = false;
        }
    }
}
</script>
