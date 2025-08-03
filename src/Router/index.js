import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/installation',
        name: 'Installation',
        component: () => import('@/Pages/InstallationPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
