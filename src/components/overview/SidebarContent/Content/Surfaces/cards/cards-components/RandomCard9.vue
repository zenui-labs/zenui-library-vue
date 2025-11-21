<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const openthreeDotMenu = ref(false);

const toggleMenu = () => {
  openthreeDotMenu.value = !openthreeDotMenu.value;
};
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full dark:bg-slate-800 1024px:min-w-[60%] 1024px:max-w-[80%] relative bg-white boxShadow rounded-xl flex-col 640px:flex gap-[20px] p-4"
    >
      <div class="w-full 640px:w-[23.5%]">
        <img
            src="https://img.freepik.com/free-photo/portrait-young-bearded-man-looking-camera_23-2148187159.jpg"
            alt="image"
            class="size-[100px] object-cover 640px:rounded-full"
        />
      </div>

      <div class="w-full mt-5 640px:mt-0">
        <div class="flex 640px:items-center justify-between w-full">
          <div
              class="flex 640px:flex-row flex-col 640px:items-center 640px:gap-[0.5rem]"
          >
            <h1 class="text-[1.2rem] dark:text-[#abc2d3] font-bold">
              Jerome Bell
            </h1>
            <span class="text-gray-400 text-xs dark:text-[#abc2d3]/90">
              • 2 weeks ago
            </span>
          </div>

          <div class="relative">
            <Icon
                icon="bi:three-dots-vertical"
                class="text-gray-700 dark:text-[#abc2d3] dark:hover:bg-gray-900 hover:bg-gray-100 rounded-full p-1.5 text-[2rem] cursor-pointer"
                @click="toggleMenu"
            />

            <ul
                :class="[
                'transition-all duration-200 bg-white w-max boxShadow py-1 rounded-md dark:bg-slate-900 absolute top-8 right-0',
                openthreeDotMenu
                  ? 'translate-y-0 opacity-100 z-20 h-auto'
                  : 'translate-y-[-10px] opacity-0 z-[-1] h-0',
              ]"
            >
              <li
                  class="py-2 px-4 dark:hover:bg-slate-800/60 dark:text-[#abc2d3] hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-gray-600"
              >
                <Icon icon="fa-regular:bookmark"/>
                Make favorite
              </li>
              <li
                  class="py-2 px-4 dark:hover:bg-slate-800/60 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-red-500"
              >
                <Icon icon="ant-design:delete-outlined"/>
                Delete
              </li>
            </ul>
          </div>
        </div>

        <p class="text-gray-600 mt-5 dark:text-[#abc2d3]/90 text-[0.9rem]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <div class="flex items-center gap-[20px] mt-6">
          <div
              class="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-[#36af7b]"
          >
            <Icon icon="fa-regular:heart"/>
            22
          </div>
          <div
              class="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-[#36af7b]"
          >
            <Icon icon="fa-regular:bookmark"/>
            234
          </div>
          <div
              class="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-[#36af7b]"
          >
            <Icon icon="bx:comment"/>
            185
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
