<script setup>
defineProps({
  keySymbol: String,
  label: String
});
</script>

<template>
  <div class="flex items-center gap-[5px]">
    <span
        class="bg-gray-100 dark:bg-slate-900 dark:text-darkSubTextColor text-gray-500 px-2 py-1 flex items-center justify-center rounded font-semibold text-[0.7rem] min-w-5 h-5 text-center"
    >
      {{ keySymbol }}
    </span>
    <span class="text-[0.7rem] dark:text-darkSubTextColor text-gray-500 capitalize">
      {{ label }}
    </span>
  </div>
</template>