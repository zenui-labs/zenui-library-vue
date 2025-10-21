<script setup>
import {computed} from 'vue'

const props = defineProps({
  value: Number,
  type: String
})

const size = 100
const strokeWidth = 7
const radius = (size - strokeWidth) / 2
const circumference = radius * 2 * Math.PI

const durations = {
  days: 365,
  hours: 24,
  minutes: 60,
  seconds: 60
}

const progress = computed(() => (props.value / durations[props.type]) * 100)
const strokeDashoffset = computed(() => circumference - (progress.value / 100) * circumference)
</script>

<template>
  <div class="relative" :style="{ width: size + 'px', height: size + 'px' }">
    <svg class="absolute top-0 left-0" :width="size" :height="size">
      <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="transparent"
          stroke="#e5e5e5"
          class="dark:stroke-[#1e293b]"
          :stroke-width="strokeWidth"
      />
    </svg>

    <svg class="absolute top-0 left-0" :width="size" :height="size">
      <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="transparent"
          stroke="#36af7b"
          :stroke-width="strokeWidth"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="strokeDashoffset"
          stroke-linecap="round"
          style="transition: stroke-dashoffset 1s linear; transform: rotate(-90deg); transform-origin: 50% 50%;"
      />
    </svg>

    <!-- Time Display -->
    <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
      <div class="text-[1.2rem] font-semibold text-[#36af7b]">{{ value }}</div>
      <div class="text-[0.6rem] text-gray-500">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </div>
    </div>
  </div>
</template>
