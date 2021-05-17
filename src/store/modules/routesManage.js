import { constantRoutes } from '@/router'

const routesManage = {
    state: {
        canShowRoutes: []
    },
    mutations: {
        SET_CANSHOWROUTES: (state,routes) => {
            state.canShowRoutes = routes;
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
        }
    }
}

export default routesManage
