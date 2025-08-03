<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {Menu} from "lucide-vue-next"; // closest to CiMenuFries
import Content from "./Content.vue";

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
</script>

<template>
  <div
      class="w-full 1024px:hidden bg-border mt-[4.9rem] 425px:mt-[4.3rem] py-3 fixed 425px:top-0 top-[-10px] px-6 640px:px-10 dark:bg-slate-800 640px:pr-7 z-30"
  >
    <Menu
        class="text-[1.7rem] dark:text-darkTextColor rotate-[180deg] text-text mobilesidebarIcon cursor-pointer"
        @click="toggleSidebarOpen"
    />
  </div>

  <aside
      :class="[
      sidebarOpen
        ? 'translate-x-0 opacity-100 z-40'
        : 'translate-x-[-200px] opacity-0 z-[-1]',
      'py-6 pt-[6rem] px-6 640px:px-10 dark:bg-slate-900 border-r h-[100vh] border-border flex-col gap-4 overflow-y-scroll fixed top-0 left-0 w-[80%] 640px:w-[340px] bg-secondary z-20 flex mobileSidebar transition-all duration-500'
    ]"
  >
    <Content/>
  </aside>
</template>
