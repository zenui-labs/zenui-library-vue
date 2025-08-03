<script setup>
import {computed} from "vue";
import {RouterLink, useRoute} from "vue-router";
import NewBadge from "@/Shared/NewBadge.vue";
import UpdateBadge from "@/Shared/UpdateBadge.vue";

const props = defineProps({
  title: String,
  url: String,
  label: String,
  isNewComponent: Boolean,
  isUpdated: Boolean,
  parent: String,
});

const route = useRoute();

const isActive = computed(() => {
  return props.url ? route.path === props.url || route.path.startsWith(props.url) : false;
});

const prefix = "sidebar";
</script>

<template>
  <div :class="[props.label ? 'py-[0.5rem]' : '', 'border-l dark:border-slate-700 border-gray-200']">
    <template v-if="props.label">
      <RouterLink
          to=""
          :id="prefix + props.label"
          class="sectionHeader !cursor-default tracking-widest font-[500] relative mt-4 uppercase dark:border-darkBorderColor dark:hover:border-darkBorderColor !text-[0.750rem]"
      >
        {{ props.label }}
      </RouterLink>
    </template>
    <template v-else>
      <RouterLink
          :to="props.url"
          :id="prefix + props.url"
          :class="[
          isActive
            ? 'hover:!bg-brandColor bg-brandColor dark:hover:!bg-brandColor hover:!rounded-normal !text-secondary font-[500]'
            : 'dark:hover:!bg-slate-800',
          'dark:hover:!border-darkBorderColor dark:border-darkBorderColor flex items-center dark:text-darkSubTextColor !border-none hover:!rounded-normal rounded-normal gap-[10px] ml-2'
        ]"
      >
        {{ props.title }}
        <NewBadge v-if="props.isNewComponent"/>
        <UpdateBadge v-if="props.isUpdated"/>
      </RouterLink>
    </template>
  </div>
</template>
