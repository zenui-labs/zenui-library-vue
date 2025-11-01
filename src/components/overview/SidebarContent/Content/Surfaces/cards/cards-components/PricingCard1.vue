<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="w-full 1024px:w-[80%] border bg-white dark:bg-slate-800 dark:border-slate-700 border-border p-2 rounded-2xl"
    >
      <!-- Header -->
      <div
        class="w-full bg-primary rounded-2xl p-4 flex items-center justify-between mb-5"
      >
        <Icon icon="io:ios-rocket" class="text-secondary text-[3.5rem]" />
        <button
          class="px-2 py-1 border border-secondary rounded-md text-[0.8rem] bg-secondary"
        >
          ENTERPRISE
        </button>
      </div>

      <h2 class="text-[2.3rem] font-[800] text-secondary">
        $79.58 <span class="text-[1rem] font-[400]">/ month</span>
      </h2>
      <p class="text-[1rem] text-secondary">True power of marketing</p>

      <!-- Features list -->
      <div class="flex flex-col px-8 text-text mt-6">
        <p
          class="flex items-center gap-2 py-3 border-b border-border dark:text-[#abc2d3] text-[1rem]"
        >
          <Icon
            icon="fa:regular-dot-circle"
            class="text-[1rem] dark:text-[#abc2d3] text-[#000]"
          />
          Lorem ipsum dolor sit.
        </p>
        <p
          class="flex items-center gap-2 py-3 border-b border-border dark:text-[#abc2d3] text-[1rem]"
        >
          <Icon
            icon="fa:regular-dot-circle"
            class="text-[1rem] dark:text-[#abc2d3] text-[#000]"
          />
          Lorem ipsum dolor sit.
        </p>
        <p
          class="flex items-center gap-2 py-3 border-b border-border dark:text-[#abc2d3] text-[1rem]"
        >
          <Icon
            icon="fa:regular-dot-circle"
            class="text-[1rem] dark:text-[#abc2d3] text-[#000]"
          />
          Lorem ipsum dolor sit.
        </p>
        <p
          class="flex items-center gap-2 py-3 border-b border-border dark:text-[#abc2d3] text-[1rem]"
        >
          <Icon
            icon="fa:regular-dot-circle"
            class="text-[1rem] dark:text-[#abc2d3] text-[#000]"
          />
          Lorem ipsum dolor sit.
        </p>
        <p class="flex items-center gap-2 py-3 dark:text-[#abc2d3] text-[1rem]">
          <Icon
            icon="fa:regular-dot-circle"
            class="text-[1rem] dark:text-[#abc2d3] text-[#000]"
          />
          Lorem ipsum dolor sit.
        </p>
      </div>

      <!-- Button -->
      <div class="px-8 my-5">
        <button
          class="px-4 py-2 border border-primary bg-primary rounded-2xl text-secondary flex items-center gap-1 group"
        >
          GET STARTED
          <Icon
            icon="bi:arrow-right"
            class="text-[1.4rem] group-hover:ml-3 transition-all duration-300"
          />
        </button>
      </div>
    </div>
  </div>
</template>
