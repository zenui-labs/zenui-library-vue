<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="w-full 425px:w-[80%] dark:text-darkSubTextColor text-text text-[1rem]">
    {{ text }}
  </p>
</template>
