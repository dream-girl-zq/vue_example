import { constantRoutes } from '@/router'

const routesManage = {
    state: {
        canShowRoutes: [],
        mobileCanShowRoutes: []
    },
    mutations: {
        SET_CANSHOWROUTES: (state,routes) => {
            state.canShowRoutes = routes;
        },
        SET_MOBILECANSHOWROUTES: (state,routes) => {
            state.mobileCanShowRoutes = routes;
        }
    },
    actions: {
        //生成可显示的路由
        GenerateCanShowRoutes({ commit }){
            let accessedRoutes = [];
            constantRoutes.map(item=>{
                if(!item.hidden && item.path=="/CANSHOW"){
                    accessedRoutes = item.children;
                }
            })
            commit('SET_CANSHOWROUTES',accessedRoutes);
        },
        //生成移动端可显示的路由
        GenerateMobileCanShowRoutes({ commit }){
            let accessedRoutes = [];
            constantRoutes.map(item=>{
                if(!item.hidden && item.path=="/CANSHOWMOBILE"){
                    accessedRoutes = item.children;
                }
            })
            commit('SET_MOBILECANSHOWROUTES',accessedRoutes);
        }
    }
}

export default routesManage
