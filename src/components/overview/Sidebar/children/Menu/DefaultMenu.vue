<script setup>
import {RouterLink, useRoute} from "vue-router";
import {Icon} from '@iconify/vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const route = useRoute();

const isActiveLink = (url) => route.path === url || route.path.startsWith(url);
</script>

<template>
  <ul class="getStarted flex flex-col gap-[12px] mb-4">
    <li v-for="(item, index) in items" :key="index">
      <RouterLink
          :to="item.url"
          :class="[
          'flex items-center dark:text-darkSubTextColor group gap-[8px] text-[0.950rem] font-[500] cursor-pointer capitalize text-gray-600',
          isActiveLink(item.url) ? `!${item.textColor}` : '',
          `hover:${item.textColor}`
        ]"
      >
        <span
            :class="[
            'transition-all duration-200 border p-[6px] rounded-normal',
            `${item.borderColor}/40 dark:border-darkBorderColor`,
            `group-hover:${item.bgColor} group-hover:${item.borderColor}`,
            isActiveLink(item.url) ? `${item.bgColor} ${item.borderColor}` : ''
          ]"
        >
          <Icon
              :icon="item.icon"
              :class="[
              'shrink-0 size-4 transition-all duration-200',
              `${item.textColor} group-hover:text-white`,
              isActiveLink(item.url) ? 'text-white' : ''
            ]"
          />
        </span>
        {{ item.title }}
      </RouterLink>
    </li>
  </ul>
</template>
