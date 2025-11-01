<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="w-full 1024px:min-w-[60%] 1024px:max-w-[75%] relative dark:bg-slate-800 bg-white boxShadow rounded-xl"
    >
      <img
        src="https://img.freepik.com/free-psd/3d-render-illustration-chair-isolated-icon_439185-11403.jpg"
        alt="image"
        class="w-full h-[260px] object-cover rounded-t-xl"
      />

      <div class="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
        <Icon
          icon="ion:notifications-outline"
          class="text-white text-[1.4rem]"
        />
      </div>

      <div class="p-4">
        <h1 class="text-[1.3rem] font-bold dark:text-[#abc2d3] leading-[34px]">
          Minimal Chair
        </h1>
        <p class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-400">
          Elegant Simplicity: The Essence of Minimalist Design in Chairs
        </p>
      </div>

      <div
        class="float-right p-2 dark:hover:bg-slate-900/70 hover:bg-gray-100 cursor-pointer mr-2 mb-2 rounded-full group"
      >
        <Icon icon="bi:arrow-right" class="text-[1.5rem] text-gray-400" />
      </div>
    </div>
  </div>
</template>
