<script setup>
import {useZenuiStore} from "@/Store/Index.js";

const store = useZenuiStore()
</script>

<template>
  <div
      class="fixed bottom-0 right-0 z-[-1] w-[300vmax] h-[300vmax] translate-x-1/2 translate-y-1/2 rounded-full bg-darkBgColor transition-transform duration-[1100ms] ease-in-out"
      :class="store.theme === 'dark' ? 'scale-100' : 'scale-0'"
  />
</template>