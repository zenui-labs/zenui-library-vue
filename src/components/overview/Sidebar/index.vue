<script setup>
import Content from "./Content.vue";
import {onMounted, onUnmounted, ref, watch} from "vue";
import {useRoute} from "vue-router";

const sidebarRef = ref(null);
const route = useRoute();

const scrollHandler = () => {
  if (sidebarRef.value) {
    sessionStorage.setItem('zuivuesidebarScrollPosition', sidebarRef.value.scrollTop.toString());
  }
};

onMounted(() => {
  if (sidebarRef.value) {
    const ele = sidebarRef.value;
    ele.addEventListener("scroll", scrollHandler);

    const savedScrollPosition = sessionStorage.getItem('zuivuesidebarScrollPosition');

    if (savedScrollPosition) {
      ele.style.scrollBehavior = "auto";
      ele.scrollTop = parseInt(savedScrollPosition);

      setTimeout(() => {
        ele.scrollTop = parseInt(savedScrollPosition);
        ele.style.scrollBehavior = "smooth";
      }, 50);
    }

    onUnmounted(() => {
      ele.removeEventListener("scroll", scrollHandler);
    });
  }
});

watch(() => route.path, () => {
  if (sidebarRef.value) {
    setTimeout(() => {
      const activeLink = sidebarRef.value.querySelector('a[class*="!text-"]');
      if (activeLink) {
        activeLink.scrollIntoView({behavior: 'smooth', block: 'nearest'});
      }
    }, 100);
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