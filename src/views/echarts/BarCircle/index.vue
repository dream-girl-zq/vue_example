<template>
  <div class="zq-app-main-container" style="padding:1rem;">
    <el-tabs v-model="activeTabName" @tab-click="tabClickHandle">
      <el-tab-pane label="基础立体圆柱图" name="TabPanelBarCircleBase">
        <TabPanelBarCircleBase :key="activeTabNumb.TabPanelBarCircleBase" />
      </el-tab-pane>
      <el-tab-pane label="底部带环的立体圆柱图" name="TabPanelBarCircleBottomCircle">
        <TabPanelBarCircleBottomCircle :key="activeTabNumb.TabPanelBarCircleBottomCircle" />
      </el-tab-pane>
      <el-tab-pane label="堆积立体远处图" name="TabPanelBarCircleStack">
        <TabPanelBarCircleStack :key="activeTabNumb.TabPanelBarCircleStack" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "BarCircle",
  components: {
    TabPanelBarCircleBase: (resolve) => require(['./components/TabPanelBarCircleBase'], resolve),
    TabPanelBarCircleBottomCircle: (resolve) => require(['./components/TabPanelBarCircleBottomCircle'], resolve),
    TabPanelBarCircleStack: (resolve) => require(['./components/TabPanelBarCircleStack'], resolve),
  },
  data(){
    return {
      activeTabName: 'TabPanelBarCircleBase',
      activeTabNumb: {
        "TabPanelBarCircleBase": 0,
        "TabPanelBarCircleBottomCircle": 0,
        "TabPanelBarCircleImage": 0,
        "TabPanelBarCircleStack": 0,
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
