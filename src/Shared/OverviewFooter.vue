<script setup>
import {Icon} from '@iconify/vue';
import {RouterLink} from 'vue-router';

defineProps({
  backUrl: String,
  forwardUrl: String,
  backName: String,
  forwardName: String,
  isBackButton: {
    type: Boolean,
    default: true,
  },
  isForwardButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <footer class="w-full 1024px:w-[90%] mt-8">
    <div
        v-if="isBackButton || isForwardButton"
        :class="isBackButton ? 'justify-between' : 'justify-end'"
        class="flex items-center w-full py-4"
    >
      <RouterLink
          v-if="isBackButton"
          :to="backUrl"
          class="flex items-center gap-[5px] text-[0.9rem] py-1.5 px-3 border border-gray-200 hover:bg-gray-200 dark:bg-slate-900 dark:text-darkSubTextColor dark:border-darkBorderColor dark:hover:bg-slate-800 capitalize transition-all duration-200 text-gray-500 rounded-md bg-gray-100"
      >
        <Icon icon="material-symbols-light:chevron-left" width="24" height="24" class="text-[1rem] text-gray-500"/>
        {{ backName }}
      </RouterLink>

      <RouterLink
          v-if="isForwardButton"
          :to="forwardUrl"
          class="flex items-center gap-[5px] text-[0.9rem] py-1.5 px-3 border border-gray-200 hover:bg-gray-200 dark:bg-slate-900 dark:text-darkSubTextColor dark:border-darkBorderColor dark:hover:bg-slate-800 capitalize transition-all duration-200 text-gray-500 rounded-md bg-gray-100"
      >
        {{ forwardName }}
        <Icon icon="material-symbols-light:chevron-left" width="24" height="24"
              class="text-[1rem] text-gray-500 rotate-[180deg]"/>
      </RouterLink>
    </div>

    <div
        class="flex items-center flex-col 640px:flex-row gap-5 justify-between w-full dark:border-darkBorderColor border-t border-border pt-5"
    >
      <img src="/footer_logo.png" alt="logo-image" class="w-[100px] 640px:w-[120px]"/>

      <div class="flex items-center gap-3">
        <p class="font-[600] text-[1rem] dark:text-darkSubTextColor/90 text-text">Support:</p>
        <a
            href="https://ko-fi.com/zenuilibrary"
            target="_blank"
            rel="noreferrer"
            class="bg-[#FFDD00] flex items-center gap-2 py-1.5 px-3 rounded-normal text-[0.9rem] font-medium"
        >
          <img
              src="https://i.ibb.co/SXWbR1v5/670f5a01229bf8a18f97a3c1-favion.png"
              alt="sponser-image"
              class="w-[25px]"
          />
          Donate
        </a>
      </div>
    </div>
  </footer>
</template>
