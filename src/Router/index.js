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
    {
        path: '/components/all-components',
        name: 'All Components',
        component: () => import('@/Pages/Components/AllComponentsPage.vue'),
    },
    {
        path: '/components/input-text',
        name: 'Overview',
        component: () => import('@/Pages/Components/Inputs/InputTextPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
