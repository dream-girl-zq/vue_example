import Vue from 'vue'
import Vuex from 'vuex'
import routesManage from './modules/routesManage'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        routesManage
    },
    getters
})

export default store

