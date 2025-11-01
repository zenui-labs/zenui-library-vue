<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const openDrawer = ref(false);

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    openDrawer.value = false;
  }
};

const handleClickOutside = (event) => {
  const drawerBtn = event.target.closest(".zenui_drawer_btn");
  const drawer = event.target.closest(".zenui_drawer");

  if (!drawerBtn && !drawer) {
    openDrawer.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <button
      class="px-4 py-2 bg-primary zenui_drawer_btn text-secondary rounded-md"
      @click="openDrawer = true"
    >
      Open Drawer
    </button>
  </div>

  <div
    :class="[
      openDrawer ? 'visible' : 'invisible',
      'w-full h-screen fixed flex items-end justify-end top-0 left-0 z-[200000000] dark:bg-black/40 transition-all duration-300'
    ]"
  >
    <div
      :class="[
        openDrawer
          ? 'translate-y-[0px] opacity-100'
          : 'translate-y-[200px] opacity-0',
        'w-full dark:bg-slate-800 bg-secondary zenui_drawer transition-all shadow-[0px_0px_20px_0px_rgb(0,0,0,0.2)] duration-300 mx-auto mt-8'
      ]"
    >
      <div class="flex 640px::flex-row flex-col justify-between w-full gap-5 px-8 py-12">
        <p class="text-[1.2rem] dark:text-[#abc2d3] text-text w-full 640px:w-[70%]">
          This site uses cookies and related technologies, as
          described in our privacy policy, for purposes that may
          include site operation, analytics, enhanced user
          experience, or advertising. You may choose to consent to
          our use of these technologies, or manage your own
          preferences.
        </p>

        <div class="flex items-end justify-end gap-4 flex-col 1024px:flex-row w-full 640px:w-[20%]">
          <button
            class="py-2 w-full px-4 dark:border-slate-800 border border-[#d1d1d1] rounded-md outline-none bg-primary text-[#fff]"
            @click="openDrawer = false"
          >
            Accept
          </button>
          <button
            class="py-2 w-full dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900/50 hover:bg-gray-100 px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"
            @click="openDrawer = false"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
