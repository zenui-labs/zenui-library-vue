<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full 1024px:w-[80%] border bg-white dark:bg-slate-800 rounded-lg overflow-hidden dark:border-slate-700 border-[#e5eaf2] shadow-lg"
    >
      <div class="w-full flex items-center justify-center flex-col p-6">
        <h2 class="text-[1.5rem] text-[#36af7b] font-[600]">Standard</h2>
        <p class="text-[#424242] dark:text-[#abc2d3] text-[1rem]">
          Ideal for growing businesses
        </p>

        <div class="flex mt-6 gap-1">
          <h2 class="font-[800] dark:text-[#abc2d3] text-[4rem] leading-[4rem]">
            49.50
          </h2>
          <span class="text-[1.2rem] dark:text-[#abc2d3] font-[500]">$</span>
        </div>
        <p class="text-[#424242] dark:text-[#abc2d3]/70 text-[0.9rem]">per month</p>

        <button
            class="px-12 py-2 bg-[#36af7b] rounded-3xl text-secondary text-[1rem] my-6"
        >
          Buy Now
        </button>
      </div>

      <h3
          class="text-[1.2rem] dark:text-[#abc2d3] font-[600] text-[#424242] mt-3 px-6"
      >
        What you will get?
      </h3>

      <div class="flex gap-3 flex-col py-4 px-6">
        <p
            class="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]"
        >
          <Icon icon="material-symbols:done-rounded" class="text-[#36af7b] text-[1.5rem]"/>
          5 Users
        </p>
        <p
            class="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]"
        >
          <Icon icon="material-symbols:done-rounded" class="text-[#36af7b] text-[1.5rem]"/>
          50GB Storage
        </p>
        <p
            class="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]"
        >
          <Icon icon="material-symbols:done-rounded" class="text-[#36af7b] text-[1.5rem]"/>
          Priority
          Email Support
        </p>
        <p
            class="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]"
        >
          <Icon
              icon="radix-icons:cross-2"
              class="text-[#e73939] text-[1.2rem]"
          />
          Unlimited Users
        </p>
        <p
            class="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]"
        >
          <Icon icon="radix-icons:cross-2" class="text-[#e73939] text-[1.2rem]"/>
          100GB
          Storage
        </p>
        <p
            class="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]"
        >
          <Icon icon="radix-icons:cross-2" class="text-[#e73939] text-[1.2rem]"/>
          24/7
          Live Chat Support
        </p>
      </div>

      <div class="w-full h-[10px] bg-[#36af7b]"></div>
    </div>
  </div>
</template>
