<script setup>
import Item from "./Item.vue";
import NewBadge from "@/Shared/NewBadge.vue";

const props = defineProps({
  title: String,
  isNewComponent: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <h3
        class="text-brandColor flex items-center gap-2 text-[1rem] font-[500] capitalize cursor-pointer"
    >
      <template v-if="isNewComponent">
        <div class="flex items-center gap-2">
          {{ title }}
          <NewBadge/>
        </div>
      </template>
      <template v-else>
        {{ title }}
      </template>
    </h3>
    <div
        class="grid overflow-hidden transition-all duration-500 grid-rows-[1fr]"
    >
      <ul class="flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4">
        <Item v-for="(item, index) in items" :key="index" v-bind="item"/>
      </ul>
    </div>
  </div>
</template>
