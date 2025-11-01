<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="w-full bg-white dark:bg-slate-800 1024px:max-w-[80%] boxShadow rounded-md"
    >
      <!-- Header -->
      <div class="flex items-center justify-between w-full p-4">
        <h2 class="text-[1.4rem] dark:text-[#abc2d3] font-semibold">
          Strawberry Cake
        </h2>
        <div class="flex items-center gap-[5px]">
          <Icon
            icon="bi:leaf-fill"
            class="py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer"
          />
          <Icon
            icon="fa:fire"
            class="py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer"
          />
        </div>
      </div>

      <!-- Image -->
      <img
        src="https://img.freepik.com/free-photo/strawberry-dessert-gourmet-sweet-food-chocolate-indulgence-generative-ai_188544-8522.jpg"
        alt="icecream"
        class="w-full"
      />

      <!-- Content -->
      <div class="p-4">
        <p class="text-[1rem] dark:text-[#abc2d3]/90 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <div
          class="mt-5 flex 640px:flex-row flex-col gap-[15px] 640px:gap-[5px] 640px:items-center justify-between w-full"
        >
          <h3
            class="text-[1.4rem] dark:text-[#abc2d3] font-semibold flex items-center gap-[4px]"
          >
            $13.90
            <del
              class="text-[1rem] dark:text-[#abc2d3] text-red-500 font-[300]"
            >
              $18.90
            </del>
          </h3>

          <button
            class="py-2 px-6 border dark:border-slate-600 dark:text-[#abc2d3] border-gray-600 text-gray-700 rounded-md"
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
