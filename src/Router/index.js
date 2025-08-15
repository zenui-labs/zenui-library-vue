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

    // ***********************  Component Routes  *********************** //

    {
        path: '/components/all-components',
        name: 'All Components',
        component: () => import('@/Pages/Components/AllComponentsPage.vue'),
    },
    {
        path: '/components/input-text',
        name: 'Input Text',
        component: () => import('@/Pages/Components/Inputs/InputTextPage.vue'),
    },
    {
        path: '/components/input-textarea',
        name: 'Input Textarea',
        component: () => import('@/Pages/Components/Inputs/InputTextareaPage.vue'),
    },
    {
        path: '/components/input-number',
        name: 'Input Number',
        component: () => import('@/Pages/Components/Inputs/NumberInputPage.vue'),
    },
    {
        path: '/components/input-checkbox',
        name: 'Input Checkbox',
        component: () => import('@/Pages/Components/Inputs/CheckboxInputPage.vue'),
    },
    {
        path: '/components/input-switch',
        name: 'Input Switch',
        component: () => import('@/Pages/Components/Inputs/InputSwitchPage.vue'),
    },
    {
        path: '/components/strong-password',
        name: 'Strong Password',
        component: () => import('@/Pages/Components/Inputs/StrongPasswordPage.vue'),
    },
    {
        path: '/components/select-box',
        name: 'Select Box',
        component: () => import('@/Pages/Components/Inputs/SelectBoxPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
