<script setup>
import { ref } from "vue";

const hovered = ref(null);
const cards = [1, 2, 3, 4];
</script>

<template>
  <div class="grid grid-cols-2 gap-6 w-full 1024px:w-[70%]">
    <div
      v-for="(item, index) in cards"
      :key="index"
      @mouseenter="hovered = index"
      @mouseleave="hovered = null"
      :class="[
        'relative transition-all w-full h-[200px] cursor-pointer duration-300 ease-in-out transform',
        hovered !== null && hovered !== index
          ? 'blur-sm scale-95'
          : 'scale-100',
        'hover:scale-105 hover:z-10 hover:blur-none',
      ]"
    >
      <img
        src="https://img.freepik.com/free-photo/adorable-portrait-pet-surrounded-by-flowers_23-2151850055.jpg?t=st=1728230076~exp=1728233676~hmac=0d7901eef3fdf37539e5917e58b01344816e629ab705497179741fbf82f0038e&w=360"
        alt="animated_card"
        class="w-full h-full rounded-md object-cover"
      />
    </div>
  </div>
</template>
