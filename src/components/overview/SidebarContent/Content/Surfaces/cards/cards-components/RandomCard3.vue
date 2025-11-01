<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="bg-white dark:bg-slate-800 rounded-md boxShadow w-full 1024px:max-w-[60%]"
    >
      <img
        src="https://img.freepik.com/free-psd/office-desktop-icon-isolated-3d-render-illustration_47987-8371.jpg"
        alt="image"
        class="w-full h-[200px] object-cover rounded-t-md"
      />

      <div class="py-6 px-4 relative">
        <span
          class="w-[40px] dark:bg-slate-900 h-[40px] rounded-full bg-white absolute -top-5 right-5 boxShadow flex items-center justify-center"
        >
          <Icon
            icon="material-symbols:bookmark-outline"
            class="text-gray-500"
          />
        </span>

        <h1
          class="text-[20px] font-bold text-black dark:text-[#abc2d3] leading-[24px]"
        >
          ZenUI Library
        </h1>
      </div>
    </div>
  </div>
</template>
