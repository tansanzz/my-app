import { createRouter, createWebHistory } from "vue-router";
    /* eslint-disable */ 
const routes = [
    {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import("@/pages/HomeComponent.vue") 
            }, 
            {
                name: 'another-route',
                path: '/another',
                component: () => import("@/pages/AnotherComponent.vue") 
            },
        ],
    }, 
    {
        path: '/:pathMatch(.*)*',
        component: () => import("@/pages/404.vue"),
        meta: {
            anonymous: true,
        }
    }];

    const router = createRouter({
        history: createWebHistory(),
        routes
    });

    router.beforeEach((to, from, next) => {
        next();
    })

export default router