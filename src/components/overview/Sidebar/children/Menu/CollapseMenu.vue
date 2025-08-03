<script setup>
import {ref} from "vue";
import {ChevronRight} from "lucide-vue-next";
import Item from "./Item.vue"; // Import the Item component

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

const isOpen = ref(true);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
    <h3
        @click="toggleOpen"
        :class="[
        isOpen ? 'text-[#049ab7]' : 'text-gray-500 dark:text-darkSubTextColor',
        'flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer'
      ]"
    >
      <template v-if="isNewComponent">
        <div class="flex items-center gap-2">
          {{ title }}
          <NewBadge/>
        </div>
      </template>
      <template v-else>{{ title }}</template>
      <ChevronRight
          :class="[
          isOpen ? 'rotate-[90deg] !text-[#049ab7]' : '',
          'text-[1.5rem] text-gray-500 transition-all duration-300'
        ]"
      />
    </h3>
    <div
        :class="[
        'grid overflow-hidden transition-all duration-500',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      ]"
    >
      <ul class="flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4">
        <Item v-for="(item, index) in items" :key="index" v-bind="item"/>
      </ul>
    </div>
  </div>
</template>
