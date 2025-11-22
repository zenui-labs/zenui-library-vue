<script setup>
import {Icon} from "@iconify/vue";
import galleryImages from "./Data.js";
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    <div
        v-for="(img, index) in galleryImages"
        :key="index"
        class="relative"
    >
      <img :src="img.src" :alt="img.author" class="w-full h-full object-cover"/>

      <div
          class="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between"
      >
        <div>
          <h3 class="text-[1rem] font-[600]">{{ img.title }}</h3>
          <p class="text-[0.9rem]">{{ img.author }}</p>
        </div>
        <Icon
            icon="rx:cross-1"
            class="text-[1.4rem] cursor-pointer text-[#00000093]"
        />
      </div>
    </div>
  </div>
</template>
