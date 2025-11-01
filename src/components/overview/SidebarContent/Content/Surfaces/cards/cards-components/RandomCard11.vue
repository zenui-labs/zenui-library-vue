<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="bg-white dark:bg-slate-800 boxShadow rounded-md w-full 1024px:max-w-[80%]"
    >
      <div class="p-5">
        <h1
          class="text-[1.5rem] dark:text-[#abc2d3] font-semibold leading-[28px]"
        >
          Constructive and destructive waves
        </h1>
        <p class="text-[1rem] dark:text-[#abc2d3]/80 text-gray-600 mt-2 mb-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <span
          class="text-[0.9rem] text-gray-400 dark:text-[#abc2d3] font-[300]"
        >
          2 hours 40 minutes
        </span>
      </div>

      <div
        class="border-t dark:border-slate-600 border-gray-200 p-5 flex items-center justify-between w-full"
      >
        <button class="font-semibold dark:text-[#abc2d3] text-gray-700">
          View More
        </button>
        <Icon
          icon="ri:arrow-right-s-line"
          class="text-[1.4rem] dark:text-[#abc2d3] cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
