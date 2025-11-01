<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const isFavorite = ref(false);
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="w-full 1024px:w-[70%] shadow-lg dark:bg-slate-800 bg-secondary rounded"
    >
      <!-- Image -->
      <img
        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60"
        alt=""
        class="w-full h-64 object-cover"
      />

      <!-- Header -->
      <div class="flex w-full justify-between items-center p-4">
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center">
            <h2 class="font-semibold dark:text-[#abc2d3] text-3xl">Shoes</h2>
          </div>
        </div>
        <Icon
          icon="bi:three-dots-vertical"
          class="text-text dark:text-[#abc2d3] dark:hover:bg-slate-900/60 rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer"
        />
      </div>

      <!-- Stats -->
      <div class="flex flex-row gap-4 p-4">
        <button class="flex items-center gap-1">
          <Icon icon="bi:eye" class="text-2xl" /> 50
        </button>
        <button class="flex items-center gap-1">
          <Icon icon="bi:hand-thumbs-up" class="text-2xl" /> 10
        </button>
      </div>

      <!-- Description -->
      <p class="text-text dark:text-[#abc2d3] p-4">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </p>

      <!-- Actions -->
      <div class="flex items-center justify-between w-full p-4">
        <div class="flex flex-col items-center gap-4">
          <div>
            <p class="text-text dark:text-[#abc2d3] text-[0.9rem]">
              Price : $25
            </p>
          </div>
          <div class="flex flex-row gap-5">
            <Icon
              icon="fa:heart"
              @click="isFavorite = !isFavorite"
              :class="[
                'text-[1.4rem] cursor-pointer',
                isFavorite ? 'text-[#ff3d3d]' : 'text-text dark:text-[#abc2d3]',
              ]"
            />
            <Icon
              icon="hi:share"
              class="text-text dark:text-[#abc2d3] text-[1.4rem] cursor-pointer"
            />
          </div>
        </div>
        <button
          class="btn p-3 rounded dark:bg-slate-900 dark:border-slate-700 border bg-black text-white hover:bg-blue-700 hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
