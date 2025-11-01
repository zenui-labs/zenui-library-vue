import { createRouter, createWebHistory } from "vue-router";

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
    component: () =>
      import("@/Pages/Components/Buttons/DropdownButtonPage.vue"),
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
    component: () =>
      import("@/Pages/Components/Navigation/ProgressBarPage.vue"),
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
  {
    path: "/components/rating",
    name: "Rating",
    component: () => import("@/Pages/Components/Navigation/RatingPage.vue"),
  },
  {
    path: "/components/stepper",
    name: "Stepper",
    component: () => import("@/Pages/Components/Navigation/StepsPage.vue"),
  },
  {
    path: "/components/modal",
    name: "Modal",
    component: () => import("@/Pages/Components/Navigation/ModalPage.vue"),
  },
  {
    path: "/components/tabs",
    name: "Tabs",
    component: () => import("@/Pages/Components/Navigation/TabsPage.vue"),
  },

  // ***********************  Feedback Routes  *********************** //

  {
    path: "/components/context-menu",
    name: "Context Menu",
    component: () => import("@/Pages/Components/Feedback/ContextMenuPage.vue"),
  },
  {
    path: "/components/skeleton",
    name: "Skeleton",
    component: () => import("@/Pages/Components/Feedback/SkeletonPage.vue"),
  },
  {
    path: "/components/alert-message",
    name: "Alert Message",
    component: () => import("@/Pages/Components/Feedback/AlertMessagePage.vue"),
  },
  {
    path: "/components/dialog-message",
    name: "Dialog Message",
    component: () => import("@/Pages/Components/Feedback/DialogPage.vue"),
  },
  {
    path: "/components/testimonials",
    name: "Testimonials",
    component: () => import("@/Pages/Components/Feedback/TestimonialPage.vue"),
  },
  {
    path: "/components/loader",
    name: "Loader",
    component: () => import("@/Pages/Components/Feedback/LoaderPage.vue"),
  },

  // ***********************  Data Display Routes  *********************** //

  {
    path: "/components/badge",
    name: "Badge",
    component: () => import("@/Pages/Components/DataDisplay/BadgePage.vue"),
  },
  {
    path: "/components/tooltip",
    name: "Tooltip",
    component: () => import("@/Pages/Components/DataDisplay/TooltipPage.vue"),
  },
  {
    path: "/components/timeline",
    name: "Timeline",
    component: () => import("@/Pages/Components/DataDisplay/TimelinePage.vue"),
  },

  // ***********************  Surfaces Routes  *********************** //

  {
    path: "/components/drag-and-drop",
    name: "Drag & Drop",
    component: () => import("@/Pages/Components/Surfaces/DragAndDropPage.vue"),
  },
  {
    path: "/components/comparison-card",
    name: "Comparison Card",
    component: () =>
      import("@/Pages/Components/Surfaces/ComparisonCardPage.vue"),
  },
  {
    path: "/components/cards",
    name: "Cards",
    component: () => import("@/Pages/Components/Surfaces/CardPage.vue"),
  },
  {
    path: "/components/drawer",
    name: "Drawer",
    component: () => import("@/Pages/Components/Surfaces/DrawerPage.vue"),
  },
  {
    path: "/components/animated-cards",
    name: "Animated Cards",
    component: () =>
      import("@/Pages/Components/Surfaces/AnimatedCardsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
