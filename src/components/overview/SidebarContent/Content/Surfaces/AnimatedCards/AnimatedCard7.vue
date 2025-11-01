<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="w-full 640px:w-[80%] 1024px:w-[60%] shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group"
  >
    <!-- icons -->
    <div
      class="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]"
    >
      <Icon
        icon="fa-regular:heart"
        class="text-[1.1rem] dark:text-[#abc2d3] text-gray-600"
      />
      <div class="flex items-center gap-[5px]">
        <Icon
          icon="mdi:timer-outline"
          class="dark:text-orange-600 text-orange-700 text-[1.1rem]"
        />
        <p class="text-[1rem] dark:text-orange-600 text-orange-700">5 min</p>
      </div>
    </div>

    <!-- image -->
    <img
      src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="animated_card"
      class="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
    />

    <!-- texts -->
    <div class="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
      <p class="text-[1rem] dark:text-[#abc2d3]/80 uppercase text-gray-600">
        Travel
      </p>
      <h3 class="text-[1.4rem] dark:text-[#abc2d3] font-bold text-gray-900">
        Discover the sea
      </h3>
      <p class="text-[0.9rem] dark:text-[#abc2d3]/90 text-gray-600 mt-2">
        by Jhon Doe
      </p>
    </div>
  </div>
</template>
