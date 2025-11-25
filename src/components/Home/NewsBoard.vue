<script setup>
import {Icon} from '@iconify/vue'
import {ZENUI_REACT_DOMAIN} from "@/Constant/Index.js";
</script>

<template>
  <section class="bg-brandColor flex items-center justify-center gap-1 w-full h-[50px]">
    <p class="text-base text-white font-medium">Try our <a :href="ZENUI_REACT_DOMAIN" target="_blank" rel="noreferrer"
                                                           class="hover:underline">ZenUI
      Library React</a></p>
    <Icon icon="iconamoon:arrow-up-1" class="text-[1.3rem] rotate-[45deg] text-white"/>
  </section>
</template>