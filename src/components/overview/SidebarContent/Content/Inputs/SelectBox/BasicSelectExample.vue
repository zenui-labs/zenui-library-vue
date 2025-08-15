<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

const isActive = ref(false);
const content = ref("Select Option");

const options = ["Football", "Cricket", "Tennis", "Badminton"];

const toggleDropdown = () => {
  isActive.value = !isActive.value;
};

const selectOption = (option) => {
  content.value = option;
  isActive.value = false;
};

const handleClickOutside = (event) => {
  if (!event.target.closest(".dropdown")) {
    isActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<template>
  <div class="relative w-full 1024px:w-[60%]">
    <button
        class="bg-[#fff] dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border border-gray-200 rounded-md justify-between px-3 w-full py-2 flex items-center gap-8 cursor-pointer dropdown"
        @click="toggleDropdown"
    >
      {{ content }}
      <Icon icon="proicons:chevron-down"
            :class="[
          isActive ? 'rotate-[180deg]' : 'rotate-0',
          'transition-all duration-300 text-[1.2rem]'
        ]"
      />
    </button>

    <transition
        name="fade-up"
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-if="isActive"
          class="absolute top-[105%] left-0 dark:border-slate-700 p-1 dark:bg-slate-800 w-full mt-1 border border-gray-200 rounded-md bg-white z-20"
          style="box-shadow: 0 15px 60px -15px rgba(0, 0, 0, 0.3)"
      >
        <p
            v-for="(option, index) in options"
            :key="index"
            class="py-2 px-4 dark:hover:bg-slate-900/40 rounded-lg hover:bg-[#ececec] transition-all duration-200"
            @click="selectOption(option)"
        >
          {{ option }}
        </p>
      </div>
    </transition>
  </div>
</template>
