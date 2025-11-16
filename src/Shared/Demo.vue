<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const sliderPosition = ref(50);
const containerRef = ref(null);
const isDragging = ref(false);

const handleMove = (clientX) => {
  if (!isDragging.value) return;

  const container = containerRef.value;
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
  sliderPosition.value = (x / rect.width) * 100;
};

const handleMouseMove = (e) => handleMove(e.clientX);
const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

const startDragging = () => {
  isDragging.value = true;
};

const stopDragging = () => {
  isDragging.value = false;
};

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("touchmove", handleTouchMove, {passive: true});
  document.addEventListener("touchend", stopDragging);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", stopDragging);
  document.removeEventListener("touchmove", handleTouchMove);
  document.removeEventListener("touchend", stopDragging);
});
</script>

<template>
  <div
      ref="containerRef"
      class="relative w-full aspect-video select-none bg-gray-100"
  >
    <!-- Before Image -->
    <img
        src="https://i.ibb.co.com/YXzxRBv/before.png"
        alt="Before"
        class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- After Image -->
    <img
        src="https://i.ibb.co.com/1ZKL4wK/after.png"
        alt="After"
        class="absolute inset-0 w-full h-full object-cover"
        :style="{
        clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
      }"
    />

    <!-- Slider Handle -->
    <div
        class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        :style="{ left: `${sliderPosition}%` }"
        @mousedown="startDragging"
        @touchstart="startDragging"
    >
      <div class="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">
        <div
            class="w-full h-full rounded-full border-[3px] border-white bg-[#36af7b] shadow-lg flex items-center justify-center"
        >
          <div class="flex gap-[5px] justify-evenly">
            <div class="w-0.5 h-4 bg-white"></div>
            <div class="w-0.5 h-4 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>