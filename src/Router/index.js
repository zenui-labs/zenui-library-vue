import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/docs/installation',
        name: 'Installation',
        component: () => import('@/Pages/InstallationPage.vue'),
    },
    {
        path: '/docs/overview',
        name: 'Overview',
        component: () => import('@/Pages/OverviewPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
