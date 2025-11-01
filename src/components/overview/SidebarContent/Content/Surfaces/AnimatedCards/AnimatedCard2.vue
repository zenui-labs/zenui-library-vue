<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="w-full dark:bg-slate-800 640px:w-[90%] 1024px:w-[70%] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]"
  >
    <!-- arrow icon -->
    <Icon
      icon="fa6-solid:arrow-right-long"
      class="absolute top-2 z-20 right-2 text-[1rem] text-white"
    />

    <!-- text -->
    <h3
      class="text-[1.5rem] dark:text-[#abc2d3] font-bold transition-all duration-500 group-hover:text-white ease-out"
    >
      ZenUI Library
    </h3>
    <p
      class="text-[0.9rem] dark:text-[#abc2d3] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white"
    >
      ZenUI Library is a Tailwind CSS components library for any needs. Comes
      with UI examples & blocks, templates, icons, color palette and more.
    </p>
  </div>
</template>
