<script setup>
import {defineProps} from "vue";
import {Icon} from "@iconify/vue";

const props = defineProps({
  text: {type: String, default: ""},
  width: {type: Number, default: 90}
});
</script>

<template>
  <div
      :class="[
      'p-4 flex gap-3 w-full bg-yellow-50/50 dark:border-yellow-700/50 border border-yellow-300 rounded-normal mb-8 dark:bg-yellow-700/30',
      `1024px:w-[${width}%]`
    ]"
  >
    <p>
      <Icon icon="proicons:info" class="text-yellow-600 text-[1.2rem]"/>
    </p>
    <p class="text-yellow-600 text-[0.9rem]">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>
