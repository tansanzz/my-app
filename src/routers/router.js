import { createRouter, createWebHistory } from "vue-router";
    /* eslint-disable */ 
const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        name: 'home',
        path: '/home',
        component: () => import("@/pages/HomeComponent.vue") 
    }, {
        name: 'another-route',
        path: '/another',
        component: () => import("@/pages/AnotherComponent.vue") 
    }];

    const router = createRouter({
        history: createWebHistory(),
        routes
    });

    router.beforeEach((to, from, next) => {
        next();
    })

export default router