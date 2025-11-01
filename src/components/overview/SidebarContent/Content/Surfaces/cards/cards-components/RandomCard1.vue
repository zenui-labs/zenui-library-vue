<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="bg-white dark:bg-slate-800 rounded-md boxShadow relative min-w-[60%]"
    >
      <!-- Image -->
      <img
        src="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg"
        alt="image"
        class="w-full h-[250px] object-cover rounded-t-md"
      />

      <!-- New Badge -->
      <span
        class="text-[0.9rem] py-0.5 px-3 bg-blue-500 text-white rounded-full absolute top-4 right-4"
        >New</span
      >

      <!-- Card Content -->
      <div class="p-3">
        <div class="flex items-center gap-[5px]">
          <Icon icon="mdi:star" class="text-yellow-400 cursor-pointer" />
          <Icon icon="mdi:star" class="text-yellow-400 cursor-pointer" />
          <Icon icon="mdi:star" class="text-yellow-400 cursor-pointer" />
          <Icon icon="mdi:star" class="text-yellow-400 cursor-pointer" />
          <Icon icon="mdi:star" class="text-yellow-400 cursor-pointer" />
        </div>

        <h1
          class="text-[20px] dark:text-[#abc2d3] font-bold text-black leading-[24px] mt-1.5"
        >
          Minimal Pattern
        </h1>
      </div>
    </div>
  </div>
</template>
