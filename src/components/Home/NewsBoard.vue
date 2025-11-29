<script setup>
import {Icon} from '@iconify/vue'
import {ZENUI_REACT_DOMAIN} from "@/Constant/Index.js";
</script>

<template>
  <section class="bg-brandColor flex items-center justify-center gap-1 py-3 px-5 w-full md:h-[50px]">
    <p class="text-base text-white text-center font-medium">🔥 React developer? Don’t miss our <a
        :href="ZENUI_REACT_DOMAIN"
        target="_blank" rel="noreferrer"
        class="hover:underline">ZenUI
      Library React</a>
      <Icon icon="iconamoon:arrow-up-1" class="text-[1.3rem] rotate-[45deg] text-white inline ml-1"/>
    </p>
  </section>
</template>