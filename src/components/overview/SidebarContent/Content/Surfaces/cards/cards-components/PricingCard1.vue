<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full 1024px:w-[80%] border bg-white dark:bg-slate-800 dark:border-slate-700 border-border p-2 rounded-2xl"
    >
      <div
          class="w-full bg-[#36af7b] rounded-2xl p-4 mb-5"
      >
        <div class="flex items-center justify-between mb-5">
          <Icon icon="lucide:rocket" class="text-secondary text-[3.5rem]"/>
          <button
              class="px-2 py-1 border border-secondary rounded-md text-[0.8rem] bg-secondary"
          >
            ENTERPRISE
          </button>
        </div>

        <h2 class="text-[2.3rem] font-[800] text-white">
          $79.58 <span class="text-[1rem] font-[400]">/ month</span>
        </h2>
        <p class="text-[1rem] text-white">True power of marketing</p>
      </div>

      <div class="flex flex-col px-8 text-text mt-6">
        <p
            v-for="(_, index) in Array.from({length: 6})"
            :class="index === 5 ? 'border-transparent' : 'border-[#e5eaf2] dark:border-[#334155]'"
            class="flex items-center gap-2 py-3 border-b dark:text-[#abc2d3] text-[1rem]"
        >
          <Icon
              icon="fa7-regular:dot-circle"
              class="text-[1rem] dark:text-[#abc2d3] text-[#000]"
          />
          Lorem ipsum dolor sit.
        </p>
      </div>

      <div class="px-8 my-5">
        <button
            class="px-4 py-2.5 bg-[#36af7b] rounded-lg text-secondary text-[0.95rem] flex items-center gap-2 group"
        >
          GET STARTED
          <Icon
              icon="bi:arrow-right"
              class="text-[1.4rem] group-hover:ml-2 transition-all duration-300"
          />
        </button>
      </div>
    </div>
  </div>
</template>
