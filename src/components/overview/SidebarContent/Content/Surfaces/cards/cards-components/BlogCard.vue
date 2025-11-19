<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const isOpen = ref(false);
const isFavorite = ref(false);
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full 1024px:w-[70%] shadow-lg dark:bg-slate-800 bg-secondary rounded"
    >
      <div class="flex w-full justify-between items-center p-4">
        <div class="flex items-center gap-4">
          <div
              class="w-[50px] h-[50px] flex items-center justify-center text-secondary text-[1.3rem] rounded-full bg-[#f36f23]"
          >
            R
          </div>
          <div>
            <h2 class="font-[500] dark:text-[#abc2d3] text-[1.2rem]">
              Author Name
            </h2>
            <p class="text-text dark:text-[#abc2d3]/70 text-[0.9rem]">
              September 14, 2016
            </p>
          </div>
        </div>
        <Icon
            icon="bi:three-dots-vertical"
            class="text-text dark:hover:bg-slate-900/60 dark:text-[#abc2d3] rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer"
        />
      </div>

      <img
          src="https://img.freepik.com/premium-photo/tasty-tofu-stir-fry-with-veggies-crispy-tofu-fresh-cilantro-perfect-vegan-meal-healthy_763042-1514.jpg"
          alt=""
          class="w-full h-[250px] object-cover"
      />

      <p class="text-text dark:text-[#abc2d3] p-4">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </p>

      <div class="flex items-center justify-between w-full p-4">
        <div class="flex items-center gap-3">
          <Icon
              icon="fa:heart"
              :class="[
              'text-[1.2rem] cursor-pointer',
              isFavorite ? 'text-[#ff3d3d]' : 'text-text dark:text-[#abc2d3]',
            ]"
              @click="isFavorite = !isFavorite"
          />
          <Icon
              icon="ri:share-fill"
              class="text-text dark:text-[#abc2d3] text-[1.5rem] cursor-pointer"
          />
        </div>

        <div @click="isOpen = !isOpen" class="cursor-pointer">
          <Icon
              :icon="isOpen ? 'ion:chevron-up' : 'ion:chevron-down'"
              class="text-text text-[1.4rem] dark:text-[#abc2d3]"
          />
        </div>
      </div>

      <div
          class="grid overflow-hidden px-4 transition-all duration-300 text-[0.9rem] dark:text-[#abc2d3]"
          :class="isOpen ? 'grid-rows-[1fr] py-4' : 'grid-rows-[0fr]'"
      >
        <div class="overflow-hidden">
          <b>Method:</b>
          <p class="mt-3">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </p>
          <p class="mt-5">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
