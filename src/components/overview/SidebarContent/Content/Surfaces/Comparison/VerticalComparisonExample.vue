<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const sliderPosition = ref(50);
const containerRef = ref(null);
const isDragging = ref(false);

const handleMove = (clientY) => {
  if (!isDragging.value) return;

  const container = containerRef.value;
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const y = Math.min(Math.max(0, clientY - rect.top), rect.height);
  const position = (y / rect.height) * 100;

  sliderPosition.value = position;
};

const handleMouseMove = (e) => handleMove(e.clientY);
const handleTouchMove = (e) => handleMove(e.touches[0].clientY);

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
      class="relative w-full h-full select-none bg-gray-100"
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
        clipPath: `polygon(0 0, 100% 0, 100% ${sliderPosition}%, 0 ${sliderPosition}%)`,
      }"
    />

    <!-- Slider Handle -->
    <div
        class="absolute left-0 right-0 h-0.5 bg-white cursor-ns-resize"
        :style="{ top: `${sliderPosition}%` }"
        @mousedown="startDragging"
        @touchstart="startDragging"
    >
      <div class="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">
        <div
            class="w-full h-full rounded-full bg-[#36af7b] border-[3px] border-white shadow-lg flex items-center justify-center"
        >
          <div class="flex gap-[5px] justify-evenly rotate-90">
            <div class="w-0.5 h-4 bg-white"></div>
            <div class="w-0.5 h-4 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>