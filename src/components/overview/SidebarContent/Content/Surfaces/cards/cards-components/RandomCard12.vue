<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="bg-white dark:bg-slate-800 boxShadow rounded-md w-full 1024px:max-w-[80%] px-2"
    >
      <!-- Header -->
      <div class="py-5 px-3">
        <span
          class="text-[0.9rem] dark:text-[#abc2d3] text-gray-400 font-[300]"
        >
          Reading Task
        </span>
        <h1
          class="text-[1.5rem] dark:text-[#abc2d3] font-semibold leading-[28px] mt-2"
        >
          Constructive and destructive waves
        </h1>
      </div>

      <!-- List -->
      <div class="flex flex-col">
        <div
          class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer"
        >
          <Icon
            icon="mdi:email-outline"
            class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"
          />
          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">
            Meeting Reminder: Project Kickoff
          </p>
        </div>

        <div
          class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer"
        >
          <Icon
            icon="mdi:email-outline"
            class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"
          />
          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">
            Invitation: Web Development Webinar
          </p>
        </div>

        <div
          class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer"
        >
          <Icon
            icon="mdi:email-outline"
            class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"
          />
          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">
            Invoice #12345 Due Tomorrow
          </p>
        </div>

        <div
          class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer"
        >
          <Icon
            icon="mdi:email-outline"
            class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"
          />
          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">
            Your Order Has Shipped
          </p>
        </div>

        <div
          class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer"
        >
          <Icon
            icon="mdi:email-outline"
            class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"
          />
          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">
            Update: New Policy Changes
          </p>
        </div>
      </div>

      <!-- Button -->
      <div class="mx-3">
        <button
          class="w-full mx-auto dark:bg-slate-700 dark:text-[#abc2d3] py-2.5 px-6 text-center bg-[#e9e1ff] text-[#7949ff] my-5 rounded-md"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>
