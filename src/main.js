import Vue from 'vue'

//导入element-ui插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/element-ui-reset-default.scss'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

//导航守卫
import './NavGuard'

//导入echarts
import VCharts from 'vue-echarts'
//自定义组件导入
import LayoutCard from './components/LayoutCard'
import LayoutTableAndPage from './components/LayoutTableAndPage'

//注册echarts组件
Vue.component('v-chart',VCharts)
//自定义组件注册
Vue.component('LayoutCard',LayoutCard)
Vue.component('LayoutTableAndPage',LayoutTableAndPage)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
