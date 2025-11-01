<script setup>
import { ref, reactive } from "vue";

const isHovering = ref(false);
const mousePosition = reactive({ x: 0, y: 0 });
const cardRef = ref(null);

function handleMouseMove(e) {
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    mousePosition.x = e.clientX - rect.left;
    mousePosition.y = e.clientY - rect.top;
  }
}
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    class="w-full border dark:border-slate-700 relative overflow-hidden border-gray-200 rounded-lg p-[25px] cursor-pointer"
  >
    <h2 class="text-[1.5rem] font-bold text-[#DB06F9]">Web Developer</h2>
    <p class="text-gray-600 dark:text-[#abc2d3] text-[1rem] mt-2">
      A web developer builds and maintains websites, ensuring they are
      functional, user-friendly, and visually appealing. They use coding
      languages like HTML, CSS, and JavaScript to bring designs to life and
      create seamless online experiences.
    </p>

    <img
      src="https://i.ibb.co.com/Gx5pzCs/Programmer-working-remotely-with-cat-by-his-side.png"
      alt="animated_card"
      class="w-[140px] mt-3 float-right"
    />

    <div
      v-if="isHovering"
      class="absolute inset-0 pointer-events-none blur-[50px]"
      :style="{
        background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
      }"
    ></div>
  </div>
</template>
