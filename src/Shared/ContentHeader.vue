<template>
  <div :class="`flex items-center gap-[20px] ${className}`">
    <h1 :id="id" class="font-[600] text-brandColor capitalize text-[1.5rem]">
      {{ text }}
    </h1>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  id: String,
  className: {
    type: String,
    default: ''
  }
})
</script>
