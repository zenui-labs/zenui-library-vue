<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import Content from "./Content.vue";
import {Icon} from "@iconify/vue";

const sidebarOpen = ref(false);

const toggleSidebarOpen = () => {
  sidebarOpen.value = true;
};

const handleClickOutside = (event) => {
  // Check if click target is inside sidebar or the icon
  const sidebar = document.querySelector(".mobileSidebar");
  const icon = document.querySelector(".mobilesidebarIcon");
  if (
      !sidebar?.contains(event.target) &&
      !icon?.contains(event.target)
  ) {
    sidebarOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

watch(sidebarOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, {immediate: true});


</script>

<template>
  <div
      class="w-full 1024px:hidden bg-border py-3 sticky top-0 px-6 640px:px-10 transition-colors duration-500 dark:bg-slate-800 640px:pr-7 z-30"
  >
    <Icon icon="heroicons-outline:menu-alt-1"
          class="text-[1.8rem] dark:text-darkTextColor text-text mobilesidebarIcon cursor-pointer"
          @click="toggleSidebarOpen"
    />
  </div>

  <aside
      :class="[
      sidebarOpen
        ? 'translate-x-0 opacity-100 z-50'
        : 'translate-x-[-200px] opacity-0 z-[-1]',
      'py-6 px-6 640px:px-10 dark:bg-slate-900 border-r h-[100vh] border-border flex-col gap-4 overflow-y-scroll fixed top-0 left-0 w-[80%] 640px:w-[340px] bg-secondary z-20 flex mobileSidebar transition-all duration-500'
    ]"
  >
    <Content/>
  </aside>
</template>
