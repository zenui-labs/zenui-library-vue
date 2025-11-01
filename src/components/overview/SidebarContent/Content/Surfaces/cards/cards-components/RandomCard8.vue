<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="1024px:min-w-[60%] dark:bg-slate-800 w-full 1024px:max-w-[75%] relative bg-white boxShadow rounded-xl"
    >
      <img
        src="https://i.ibb.co.com/Mn0DzdL/asfak-ahmed-ceo-of-zenui.jpg"
        alt="image"
        class="w-full h-[260px] object-cover rounded-t-xl"
      />

      <div class="p-5">
        <h1 class="text-[1.3rem] font-bold dark:text-[#abc2d3] leading-[24px]">
          Asfak Ahmed
        </h1>
        <span class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-400">
          Founder & CEO of ZenUI Library
        </span>

        <p class="text-gray-600 dark:text-[#abc2d3] mt-3">
          Asfak Ahmed is a professional Front-End Web Developer. He was born on
          (12 Oct 2004). His full name is Asfak Ahmed...
        </p>

        <button
          class="py-2.5 px-4 bg-gray-300 dark:bg-slate-700 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] dark:text-[#abc2d3] group"
        >
          Learn more
          <Icon
            icon="bi:arrow-right"
            class="text-[1.3rem] text-gray-600 dark:text-[#abc2d3] group-hover:ml-2 transition-all duration-200"
          />
        </button>
      </div>
    </div>
  </div>
</template>
