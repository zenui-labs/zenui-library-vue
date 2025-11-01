<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div class="w-full 1024px:min-w-[60%] 1024px:max-w-[75%] relative">
      <img
        src="https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg"
        alt="image"
        class="w-full h-[400px] object-cover rounded-xl"
      />

      <div class="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
        <Icon
          icon="ion:notifications-outline"
          class="text-white text-[1.4rem]"
        />
      </div>

      <div
        class="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl"
      >
        <span
          class="text-[0.8rem] py-1 px-3 bg-blue-500 rounded-full text-white"
        >
          Featured
        </span>
        <h1 class="text-[1.8rem] text-white font-bold leading-[34px] mt-4">
          Wet Vietnam Mountain Flow Stream Rural
        </h1>
      </div>
    </div>
  </div>
</template>
