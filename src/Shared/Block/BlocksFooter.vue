<script setup>
import {defineProps} from 'vue'
import {Icon} from "@iconify/vue"

const props = defineProps({
  width: {
    type: String,
    default: '820px'
  },
  backUrl: String,
  forwardUrl: String,
  backName: String,
  forwardName: String,
  isBackButton: {
    type: Boolean,
    default: true
  },
  isForwardButton: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <footer :class="`w-full max-w-[${props.width}] mt-8`">
    <div
        v-if="isBackButton || isForwardButton"
        :class="`${isBackButton ? 'justify-between' : 'justify-end'} flex-col 640px:flex-row gap-2 flex items-center w-full py-4`"
    >
      <RouterLink
          v-if="isBackButton"
          :to="backUrl"
          class="flex w-full 640px:w-auto py-4 items-center gap-[5px] text-[0.9rem] 640px:py-2 pr-3 pl-1 border border-gray-200 hover:bg-gray-200 dark:bg-slate-900 dark:text-darkSubTextColor dark:border-darkBorderColor dark:hover:bg-slate-800 capitalize transition-all duration-200 text-gray-500 rounded-md bg-gray-100"
      >
        <Icon icon="material-symbols-light:chevron-left" width="24" height="24" class="text-[1rem] text-gray-500"/>
        {{ backName }}
      </RouterLink>

      <RouterLink
          v-if="isForwardButton"
          :to="forwardUrl"
          class="flex w-full 640px:w-auto py-4 justify-end 640px:justify-start items-center gap-[5px] text-[0.9rem] 640px:py-2 pr-3 pl-1 border border-gray-200 hover:bg-gray-200 dark:bg-slate-900 dark:text-darkSubTextColor dark:border-darkBorderColor dark:hover:bg-slate-800 capitalize transition-all duration-200 text-gray-500 rounded-md bg-gray-100"
      >
        {{ forwardName }}
        <Icon icon="material-symbols-light:chevron-left" width="24" height="24"
              class="text-[1rem] text-gray-500 rotate-[180deg]"/>
      </RouterLink>
    </div>
  </footer>
</template>
