<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="bg-blue-50 dark:bg-slate-800 w-full justify-between rounded-xl flex"
    >
      <div class="flex flex-col p-[15px] 1024px:p-[20px] gap-[18px]">
        <h1
          class="text-[1rem] 1024px:text-[1.3rem] font-bold dark:text-blue-600 text-blue-800"
        >
          Ticket Title
        </h1>

        <div class="flex items-center gap-[10px]">
          <Icon
            icon="bi:send"
            class="p-[8px] 1024px:p-[10px] dark:text-[#abc2d3] dark:bg-slate-700 rounded-xl bg-blue-100 text-blue-800 text-[2rem] 1024px:text-[3rem]"
          />
          <div>
            <h4
              class="text-[0.8rem] 1024px:text-[1.1rem] font-[600] dark:text-[#abc2d3] text-gray-800"
            >
              Place Name
            </h4>
            <p
              class="text-[0.6rem] 1024px:text-[0.9rem] font-[400] dark:text-[#abc2d3]/70 text-gray-500"
            >
              15-Dec-2020
            </p>
          </div>
        </div>

        <div class="flex items-center gap-[10px]">
          <Icon
            icon="ion:location-outline"
            class="p-[8px] 1024px:p-[10px] dark:bg-slate-700 dark:text-[#abc2d3] rounded-xl bg-blue-100 text-blue-800 text-[2rem] 1024px:text-[3rem]"
          />
          <div>
            <h4
              class="text-[0.8rem] 1024px:text-[1.1rem] font-[600] dark:text-[#abc2d3] text-gray-800"
            >
              Location
            </h4>
            <p
              class="text-[0.6rem] 1024px:text-[0.9rem] font-[400] dark:text-[#abc2d3]/70 text-gray-500"
            >
              15-Dec-2020
            </p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col justify-between relative w-[45%] 1024px:w-[40%] items-center border-l-[2px] p-[15px] 1024px:p-[20px] dark:border-slate-600 border-dashed border-gray-200"
      >
        <div
          class="w-[45px] h-[45px] dark:bg-[#020617] rounded-full bg-white absolute top-[-15%] 1024px:top-[-13%] 425px:left-[-13.5%] left-[-19%] 1024px:left-[-11.5%]"
        ></div>

        <h4
          class="text-[0.9rem] 1024px:text-[1.3rem] font-bold dark:text-blue-600 text-blue-800"
        >
          9:00 AM
        </h4>

        <button
          class="px-2 1024px:px-4 py-1 text-[0.8rem] 1024px:text-[1.1rem] 1024px:py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600"
        >
          Buy Ticket
        </button>

        <p
          class="text-[0.9rem] 1024px:text-[1.1rem] dark:text-[#abc2d3] text-gray-500"
        >
          Price: <span class="text-red-600 font-semibold">$70</span>
        </p>

        <div
          class="w-[45px] h-[45px] dark:bg-[#020617] rounded-full bg-white absolute bottom-[-15%] 1024px:bottom-[-13%] left-[-18.5%] 425px:left-[-13.5%] 1024px:left-[-11.5%]"
        ></div>
      </div>
    </div>
  </div>
</template>
