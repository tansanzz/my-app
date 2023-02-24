import { createRouter, createWebHistory } from 'vue-router';
/* eslint-disable */
const routes = [
    {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: '/home',
                component: () => import('@/views/HomeView.vue'),
            },
            {
                path: '/biography',
                component: () => import('@/views/BiographyView.vue'),
            },
            {
                path: '/send-message',
                component: () => import('@/views/SendMessageView.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/404.vue'),
        meta: {
            anonymous: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
