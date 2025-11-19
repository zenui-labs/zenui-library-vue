<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const isFavorite = ref(false);
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full 1024px:w-[70%] shadow-lg dark:bg-slate-800 bg-secondary rounded-lg"
    >
      <img
          src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60"
          alt=""
          class="w-full h-64 object-cover rounded-t-lg"
      />

      <div class="p-4">
        <h2 class="font-semibold dark:text-[#abc2d3] text-3xl mb-4">Shoes</h2>

        <div class="flex flex-row dark:text-[#abc2d3] gap-3 mb-1">
          <button class="flex items-center gap-1.5">
            <Icon icon="bi:eye" class="text-[1rem]"/>
            50
          </button>
          <button class="flex items-center gap-1.5">
            <Icon icon="bi:hand-thumbs-up" class="text-[1rem]"/>
            10
          </button>
        </div>

        <p class="text-text dark:text-[#abc2d3]">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </p>

        <div class="flex items-center justify-between w-full mt-5">
          <p class="text-text dark:text-[#abc2d3] text-[1rem]">
            Price: <span class='text-[#36af7b] font-bold'>$25</span>
          </p>
          <div class='flex items-center gap-3'>
            <button
                @click="isFavorite = !isFavorite"
                :class="[
                'btn px-2.5 py-[0.65rem] rounded-lg',
                isFavorite ? 'bg-red-100 dark:bg-red-800/20' : 'bg-gray-100 dark:bg-slate-700',
              ]"
            >
              <Icon
                  icon="fa:heart"
                  :class="[
                'text-[1.3rem]',
                isFavorite ? 'text-[#ff3d3d]' : 'text-text dark:text-[#abc2d3]',
              ]"
              />
            </button>
            <button
                class="btn px-2.5 py-2 text-[0.9rem] rounded-lg bg-[#36af7b] text-white hover:bg-[#36af7b]/90"
            >
              <Icon
                  icon="mynaui:cart-solid"
                  class="text-white text-[1.6rem] cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
