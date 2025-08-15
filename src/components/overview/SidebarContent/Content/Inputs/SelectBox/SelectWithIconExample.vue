<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {Icon} from '@iconify/vue';

const isDropdownOpen = ref(false);
const selectedItem = ref('Select Option');

const options = [
  {icon: 'solar:football-linear', title: 'Football'},
  {icon: 'hugeicons:cricket-bat', title: 'Cricket'},
  {icon: 'cil:tennis', title: 'Tennis'},
  {icon: 'material-symbols-light:badminton-outline-rounded', title: 'Badminton'},
];

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.dropdown')) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

const selectOption = (title) => {
  selectedItem.value = title;
  isDropdownOpen.value = false;
};
</script>

<template>
  <div class="relative w-full 1024px:w-[60%]">
    <button
        class="bg-white dark:border-slate-600 dark:bg-transparent dark:text-[#abc2d3] border border-[#d1d1d1] rounded-md w-full justify-between px-3 py-2 flex items-center gap-8 cursor-pointer dropdown"
        @click="toggleDropdown"
    >
      {{ selectedItem }}
      <Icon
          icon="proicons:chevron-down"
          class="transition-all duration-300 text-[1.2rem]"
          :class="{ 'rotate-180': isDropdownOpen, 'rotate-0': !isDropdownOpen }"
      />
    </button>

    <transition
        name="fade-scale"
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-if="isDropdownOpen"
          class="w-full absolute top-12 p-1 dark:bg-slate-800 left-0 right-0 bg-white rounded-xl flex flex-col overflow-hidden"
          style="box-shadow: 0 15px 60px -15px rgba(0, 0, 0, 0.3);"
      >
        <p
            v-for="(option, index) in options"
            :key="index"
            class="py-2 px-4 dark:hover:bg-slate-900/40 rounded-lg hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
            @click="selectOption(option.title)"
        >
          <Icon :icon="option.icon"/>
          {{ option.title }}
        </p>
      </div>
    </transition>
  </div>
</template>
