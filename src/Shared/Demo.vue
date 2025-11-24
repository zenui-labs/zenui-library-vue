<script setup>
const items = Array.from({length: 9});
</script>

<template>
  <div class="my-10">
    <div class="grid grid-cols-3 grid-rows-3 w-[67.2px] h-[67.2px]">
      <div
          v-for="(_, index) in items"
          :key="index"
          class="bg-[#36af7b]"
          :style="{
                    animation: `flipping-18i5bq 1.5s ${index * 0.1}s infinite backwards`
                  }"
      ></div>
    </div>
  </div>
</template>

<style>

@keyframes spinner-b4c8mmmd {
  from {
    box-shadow: 0 0 0 -5.6px #36af7b;
  }
}
</style>