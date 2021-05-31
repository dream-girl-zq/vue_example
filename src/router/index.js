import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * 路由配置项
 * hidden: true //当设置true的时候该路由不会在侧边栏出现，如401，login等页面
 * name:'router-name' //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta: {
 *   title: 'title' //设置该路由在侧边栏中展示的名字
 *   icon: 'icon-name' //设置该路由的图标
 * }
 * */

import Layout from '@/layout'
import LayoutEmpty from '@/layout/indexEmpty'
import layoutMobile from '@/layoutMobile'


//公共前端写死的路由
export const constantRoutes = [
    {
        path: '/',
        //别名：意味着当用户访问/login时，url会保持为/login但是路由匹配为/，就像用户访问/一样
        alias: '/login',
        name: 'Login',
        hidden: true,
        component: (resolve) => require(['@/views/Login'],resolve)
    },
    {
        path: '/404',
        name: '404',
        hidden: true,
        component: (resolve) => require(['@/views/404'],resolve)
    },
    {
        path: '/CANSHOW',
        name: 'Layout',
        hidden: false,
        component: Layout,
        children: [
            {
                path: '/Index',
                name: 'Index',
                component: (resolve) => require(['@/views/index'],resolve),
                meta: { title: '首页' }
            },
            {
                path: '/docs',
                name: 'Docs',
                component: (resolve) => require(['@/views/docs/index'],resolve),
                meta: { title: 'Docs文档' }
            },
            {
                path: '/html5',
                name: 'Html5',
                component: LayoutEmpty,
                meta: { title: 'Html5标签' },
                children: [
                    {
                        path: 'MapArea',
                        name: 'MapArea',
                        component: (resolve) => require(['@/views/html5/MapArea/index'],resolve),
                        meta: { title: 'MapArea' }
                    }
                ]
            },
            {
                path: '/echarts',
                name: 'Echarts',
                component: LayoutEmpty,
                meta: { title: 'Echarts图表' },
                children: [
                    {
                        path: 'Bar2D',
                        name: 'Bar2D',
                        component: (resolve) => require(['@/views/echarts/Bar2D/index'],resolve),
                        meta: { title: '平面柱图' }
                    },{
                        path: 'Bar3D',
                        name: 'Bar3D',
                        component: (resolve) => require(['@/views/echarts/Bar3D/index'],resolve),
                        meta: { title: '立体柱图' }
                    },{
                        path: 'BarCircle',
                        name: 'BarCircle',
                        component: (resolve) => require(['@/views/echarts/BarCircle/index'],resolve),
                        meta: { title: '立体圆柱图' }
                    }
                ]
            }
        ]
    },
    {
        path: '/CANSHOWMOBILE',
        name: 'layoutMobile',
        hidden: false,
        component: layoutMobile,
        children: [
            {
                path: '/IndexMobile',
                name: 'IndexMobile',
                component: (resolve) => require(['@/views/indexMobile'],resolve),
                meta: { title: '首页' }
            },
            {
                path: '/ListMobile',
                name: 'ListMobile',
                component: (resolve) => require(['@/views/mobiles/List/index'],resolve),
                meta: { title: '列表' }
            },
            {
                path: '/ApplyMobile',
                name: 'ApplyMobile',
                component: (resolve) => require(['@/views/mobiles/Apply/index'],resolve),
                meta: { title: '申请' }
            },
            {
                path: '/MineMobile',
                name: 'MineMobile',
                component: (resolve) => require(['@/views/mobiles/Mine/index'],resolve),
                meta: { title: '我的' }
            }
        ]
    }

]


export default new Router({
    routes: constantRoutes
})
