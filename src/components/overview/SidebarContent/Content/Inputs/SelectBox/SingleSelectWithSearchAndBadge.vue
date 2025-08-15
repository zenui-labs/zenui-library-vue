<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import {Icon} from '@iconify/vue';

const searchValue = ref('');
const isDropdownOpen = ref(false);
const selectedItem = ref(null);

const options = [
  {id: 1, name: 'Option 1'},
  {id: 2, name: 'Option 2'},
  {id: 3, name: 'Option 3'},
  {id: 4, name: 'Option 4'},
  {id: 5, name: 'Option 5'},
];

const filteredItems = computed(() =>
    options.filter((item) =>
        item.name.toLowerCase().includes(searchValue.value.toLowerCase())
    )
);

const isSelected = (item) => selectedItem.value?.id === item.id;

const toggleItem = (item) => {
  selectedItem.value = item;
  isDropdownOpen.value = false;
};

const removeItem = () => {
  selectedItem.value = null;
};

// Outside click
const handleClickOutside = (event) => {
  if (!event.target.closest('.custom-select')) {
    setTimeout(() => {
      isDropdownOpen.value = false;
    }, 200);
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <div class="relative custom-select w-full 1024px:w-[60%]">
    <!-- Input -->
    <input
        type="text"
        placeholder="Search.."
        v-model="searchValue"
        @focus="isDropdownOpen = true"
        class="w-full dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
    />

    <Icon
        icon="proicons:chevron-down"
        class="absolute top-[10px] right-3 text-gray-500 text-[1.3rem] transition-all duration-300"
        :class="{ 'rotate-180': isDropdownOpen, 'rotate-0': !isDropdownOpen }"
    />

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
          class="absolute left-0 p-1 dark:border-slate-700 dark:bg-slate-800 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20"
      >
        <div class="w-full overflow-auto">
          <p
              v-for="item in filteredItems"
              :key="item.id"
              @click="toggleItem(item)"
              class="cursor-pointer dark:text-[#abc2d3] rounded-lg dark:hover:bg-slate-900/40 px-3 py-2 flex items-center hover:bg-gray-200"
          >
            <Icon
                icon="ion:checkmark"
                class="mr-2 text-[1.3rem] transition-all duration-300"
                :class="{
                  'scale-100 opacity-100': isSelected(item),
                  'scale-50 opacity-0': !isSelected(item)
                }"
            />
            {{ item.name }}
          </p>

          <p
              v-if="filteredItems.length === 0"
              class="text-center dark:text-[#abc2d3] text-[0.9rem] text-text py-8"
          >
            No search found!
          </p>
        </div>
      </div>
    </transition>

    <div
        v-if="selectedItem"
        class="bg-brandColor dark:bg-slate-800 dark:border dark:border-slate-700 dark:text-[#abc2d3]/80 w-max text-white px-2 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
    >
      {{ selectedItem.name }}
      <button
          @click="removeItem"
          class="ml-2 hover:text-red-600 text-[0.8rem]"
      >
        <Icon icon="icon-park-outline:close"/>
      </button>
    </div>
  </div>
</template>
