<script setup>
import Content from "./Content.vue";
import {onMounted, onUnmounted, ref, watch} from "vue";

const sidebarRef = ref(null);

const scrollHandler = () => {
  if (sidebarRef.value) {
    setScrollY(sidebarRef.value.scrollTop);
  }
};

onMounted(() => {
  if (sidebarRef.value) {
    const ele = sidebarRef.value;
    ele.addEventListener("scroll", scrollHandler);

    ele.style.scrollBehavior = "auto";
    ele.scrollTop = scrollY.value || 0;
    ele.style.scrollBehavior = "smooth";

    onUnmounted(() => {
      ele.removeEventListener("scroll", scrollHandler);
    });
  }
});

// Optional: watch scrollY and update scrollTop if scrollY changes externally
watch(scrollY, (newVal) => {
  if (sidebarRef.value && sidebarRef.value.scrollTop !== newVal) {
    sidebarRef.value.scrollTop = newVal;
  }
});
</script>

<template>
  <aside
      ref="sidebarRef"
      style="scrollbar-width: none"
      class="py-6 px-10 dark:bg-transparent transition-all duration-500 pr-7 dark:border-darkBorderColor h-[calc(100vh-76px)] border-border flex-col gap-4 overflow-y-scroll sticky top-18 left-0 w-[320px] bg-secondary z-20 1024px:flex hidden"
  >
    <Content/>
  </aside>
</template>
