/**
 * 导航守卫
 * */
import router from './router'
import store from './store'

router.beforeEach((to,from,next) => {
    store.dispatch('GenerateCanShowRoutes');
    next();
})
