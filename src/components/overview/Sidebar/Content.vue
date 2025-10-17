<script setup>
import OverviewIcon from "@/SvgIcons/OverviewIcon.vue";
import InstallationIcon from "@/SvgIcons/InstallationIcon.vue";
import DefaultMenu from "@/components/overview/Sidebar/children/Menu/DefaultMenu.vue";
import MainMenu from "@/components/overview/Sidebar/children/Menu/MainMenu.vue";

const defaultMenuItems = [
  {
    bgColor: "bg-blue-600",
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    title: "Overview",
    icon: OverviewIcon,
    url: "/docs/overview",
  },
  {
    bgColor: "bg-[#DB06F9]",
    borderColor: "bg-[#DB06F9]",
    textColor: "text-[#DB06F9]",
    title: "Installation",
    icon: InstallationIcon,
    url: "/docs/installation",
  },
];

const componentsItems = [
  {title: "All Components", url: "/components/all-components"},
  {label: "FORM"},
  {title: "Input", url: "/components/input-text", parent: "FORM"},
  {title: "Textarea", url: "/components/input-textarea", parent: "FORM"},
  {title: "Number", url: "/components/input-number", parent: "FORM"},
  {title: "Checkbox", url: "/components/input-checkbox", parent: "FORM"},
  {title: "Switch", url: "/components/input-switch", parent: "FORM"},
  {title: "Strong Password", url: "/components/strong-password", parent: "FORM"},
  {title: "Select", url: "/components/select-box", parent: "FORM"},
  {title: "Radio", url: "/components/input-radio", parent: "FORM"},
  {title: "Range", url: "/components/input-range", parent: "FORM"},
  {title: "File", url: "/components/input-file", parent: "FORM"},
  {title: "OTP Input", url: "/components/otp-input", parent: "FORM"},
  {label: "BUTTONS"},
  {title: "Button", url: "/components/button", parent: "BUTTONS"},
  {title: "Login Button", url: "/components/login-buttons", parent: "BUTTONS"},
  {title: "Dropdown Button", url: "/components/dropdown-button", parent: "BUTTONS"},
  // {title: "Animated Button", url: "/components/animated-button", parent: "BUTTONS", isUpdated: true},
  {label: "SURFACES"},
  {title: "Drag & Drop", url: "/components/drag-and-drop", parent: "SURFACES"},
  {title: "Comparison Card", url: "/components/comparison-card", parent: "SURFACES"},
  {title: "Cards", url: "/components/cards", parent: "SURFACES"},
  {title: "Drawer", url: "/components/drawer", parent: "SURFACES", isNewComponent: true},
  {title: "Animated Cards", url: "/components/animated-cards", parent: "SURFACES"},
  // {title: "Image Cropper", url: "/components/image-cropper", parent: "SURFACES"},
  {title: "Accordion", url: "/components/according", parent: "SURFACES"},
  // {title: "App bar", url: "/components/appbar", parent: "SURFACES"},
  {title: "Image Gallery", url: "/components/image-gallery", parent: "SURFACES"},
  // {title: "Carousel", url: "/components/carousel", parent: "SURFACES"},
  {label: "NAVIGATION"},
  {title: "Pagination", url: "/components/pagination", parent: "NAVIGATION"},
  {title: "Progress Bar", url: "/components/progress-bar", parent: "NAVIGATION"},
  {title: "Chip", url: "/components/chip", parent: "NAVIGATION"},
  {title: "Marquee", url: "/components/marquee", parent: "NAVIGATION"},
  {title: "Timer", url: "/components/timer", parent: "NAVIGATION"},
  {title: "Breadcrumb", url: "/components/breadcrumb", parent: "NAVIGATION"},
  {title: "Rating", url: "/components/rating", parent: "NAVIGATION"},
  {title: "Stepper", url: "/components/stepper", parent: "NAVIGATION"},
  {title: "Modal", url: "/components/modal", parent: "NAVIGATION", isUpdated: true},
  {title: "Tabs", url: "/components/tabs", parent: "NAVIGATION"},
  {label: "FEEDBACK"},
  {title: "Context Menu", url: "/components/context-menu", parent: "FEEDBACK"},
  {title: "Skeleton", url: "/components/skeleton", parent: "FEEDBACK"},
  // {title: "Tree Dropdown", url: "/components/tree-dropdown", parent: "FEEDBACK"},
  {title: "Alert Message", url: "/components/alert-message", parent: "FEEDBACK"},
  {title: "Dialog", url: "/components/dialog-message", parent: "FEEDBACK"},
  {title: "Testimonial", url: "/components/testimonials", parent: "FEEDBACK"},
  {title: "Loader", url: "/components/loader", parent: "FEEDBACK"},
  // {title: "Notification", url: "/components/notification", parent: "FEEDBACK"},
  {label: "DATA DISPLAY"},
  {title: "Badge", url: "/components/badge", parent: "DATA DISPLAY"},
  // {title: "Table", url: "/components/table", parent: "DATA DISPLAY"},
  // {title: "Redo & Undo", url: "/components/redo-undo", parent: "DATA DISPLAY"},
  // {title: "Github Activity Graph", url: "/components/github-activity-graph", parent: "DATA DISPLAY"},
  {title: "Tooltip", url: "/components/tooltip", parent: "DATA DISPLAY"},
  // {title: "Pie Chart", url: "/components/pie-chart", parent: "DATA DISPLAY"},
  {title: "Timeline", url: "/components/timeline", parent: "DATA DISPLAY"},
  // {label: "E-COMMERCE"},
  // {title: "Product Card", url: "/components/product-card", parent: "E-COMMERCE"},
  // {title: "Ads Card", url: "/components/ads-card", parent: "E-COMMERCE"},
  // {label: "RANDOMS"},
  // {title: "Code", url: "/components/code", parent: "RANDOMS"},
  // {title: "Snippet", url: "/components/snippet", parent: "RANDOMS"},
];
</script>

<template>
  <DefaultMenu :items="defaultMenuItems"/>
  <MainMenu title="Components" :items="componentsItems"/>
</template>
