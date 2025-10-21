import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "",
        name: "Home",
        component: () => import("@/Pages/HomePage.vue"),
    },
    {
        path: "/docs/installation",
        name: "Installation",
        component: () => import("@/Pages/InstallationPage.vue"),
    },
    {
        path: "/docs/overview",
        name: "Overview",
        component: () => import("@/Pages/OverviewPage.vue"),
    },

    // ***********************  Component Routes  *********************** //

    {
        path: "/components/all-components",
        name: "All Components",
        component: () => import("@/Pages/Components/AllComponentsPage.vue"),
    },

    // ***********************  Inputs Routes  *********************** //

    {
        path: "/components/input-text",
        name: "Input Text",
        component: () => import("@/Pages/Components/Inputs/InputTextPage.vue"),
    },
    {
        path: "/components/input-textarea",
        name: "Input Textarea",
        component: () => import("@/Pages/Components/Inputs/InputTextareaPage.vue"),
    },
    {
        path: "/components/input-number",
        name: "Input Number",
        component: () => import("@/Pages/Components/Inputs/NumberInputPage.vue"),
    },
    {
        path: "/components/input-checkbox",
        name: "Input Checkbox",
        component: () => import("@/Pages/Components/Inputs/CheckboxInputPage.vue"),
    },
    {
        path: "/components/input-switch",
        name: "Input Switch",
        component: () => import("@/Pages/Components/Inputs/InputSwitchPage.vue"),
    },
    {
        path: "/components/strong-password",
        name: "Strong Password",
        component: () => import("@/Pages/Components/Inputs/StrongPasswordPage.vue"),
    },
    {
        path: "/components/select-box",
        name: "Select Box",
        component: () => import("@/Pages/Components/Inputs/SelectBoxPage.vue"),
    },
    {
        path: "/components/input-radio",
        name: "Radio",
        component: () => import("@/Pages/Components/Inputs/InputRadioPage.vue"),
    },
    {
        path: "/components/input-range",
        name: "Range",
        component: () => import("@/Pages/Components/Inputs/InputSliderPage.vue"),
    },
    {
        path: "/components/input-file",
        name: "File-Input",
        component: () => import("@/Pages/Components/Inputs/InputFilePage.vue"),
    },
    {
        path: "/components/otp-input",
        name: "OTP-Input",
        component: () => import("@/Pages/Components/Inputs/OtpInputPage.vue"),
    },

    // ***********************  Button Routes  *********************** //

    {
        path: "/components/button",
        name: "Button",
        component: () => import("@/Pages/Components/Buttons/ButtonPage.vue"),
    },
    {
        path: "/components/login-buttons",
        name: "Login Button",
        component: () => import("@/Pages/Components/Buttons/AuthButtonPage.vue"),
    },
    {
        path: "/components/dropdown-button",
        name: "Dropdown Button",
        component: () => import("@/Pages/Components/Buttons/DropdownButtonPage.vue"),
    },

    // ***********************  Navigation Routes  *********************** //

    {
        path: "/components/pagination",
        name: "Pagination",
        component: () => import("@/Pages/Components/Navigation/PaginationPage.vue"),
    },
    {
        path: "/components/progress-bar",
        name: "Progress Bar",
        component: () => import("@/Pages/Components/Navigation/ProgressBarPage.vue"),
    },
    {
        path: "/components/chip",
        name: "Chip",
        component: () => import("@/Pages/Components/Navigation/ChipPage.vue"),
    },
    {
        path: "/components/marquee",
        name: "Marquee",
        component: () => import("@/Pages/Components/Navigation/MarqueePage.vue"),
    },
    {
        path: "/components/timer",
        name: "Timer",
        component: () => import("@/Pages/Components/Navigation/TimerPage.vue"),
    },
    {
        path: "/components/breadcrumb",
        name: "Breadcrumb",
        component: () => import("@/Pages/Components/Navigation/BreadcrumbPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})

export default router
