<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="bg-white dark:bg-slate-800 rounded-md boxShadow w-full 1024px:min-w-[70%] 1024px:max-w-[80%]"
    >
      <img
          src="https://img.freepik.com/free-photo/hip-hop-dancer-dance_144627-7472.jpg"
          alt="image"
          class="w-full h-[250px] object-cover rounded-t-md"
      />

      <div class="p-5 relative">
        <div
            class="rounded-xl w-[70px] dark:bg-slate-900 dark:text-[#abc2d3] py-3 bg-white absolute -top-9 right-6 boxShadow flex items-center flex-col justify-center"
        >
          <b class="text-[1.4rem] leading-[1.4rem]">18</b>
          <span class="text-[1rem]">JAN</span>
        </div>

        <p class="text-[1rem] dark:text-[#abc2d3]/90 text-gray-300">
          Performance
        </p>
        <h1
            class="text-[22px] font-bold dark:text-[#abc2d3] text-black leading-[28px] mt-1.5"
        >
          Hip hop dancer in dance
        </h1>

        <div class="mt-8 flex items-center gap-[10px]">
          <span
              class="w-[40px] dark:border-slate-500 cursor-pointer h-[40px] hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full border border-gray-200 flex items-center justify-center"
          >
            <Icon
                icon="material-symbols:bookmark-outline"
                class="text-[#959393] dark:text-[#abc2d3] text-[1.3rem]"
            />
          </span>
          <span
              class="w-[40px] dark:border-slate-500 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 h-[40px] rounded-full border border-gray-200 flex items-center justify-center"
          >
            <Icon
                icon="material-symbols:share-outline"
                class="text-[#959393] dark:text-[#abc2d3] text-[1.2rem]"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
