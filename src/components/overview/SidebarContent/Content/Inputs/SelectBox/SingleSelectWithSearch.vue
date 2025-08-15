<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import {Icon} from '@iconify/vue';

const searchValue = ref('');
const isOpenDropdown = ref(false);
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
  isOpenDropdown.value = false;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.custom-select')) {
    setTimeout(() => {
      isOpenDropdown.value = false;
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
    <input
        type="text"
        placeholder="Search.."
        v-model="searchValue"
        @focus="isOpenDropdown = true"
        class="w-full dark:border-slate-600 dark:bg-transparent dark:text-[#abc2d3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
    />

    <Icon
        icon="proicons:chevron-down"
        class="transition-all duration-300 text-[1.3rem] absolute top-[50%] transform -translate-y-1/2 right-3 text-gray-500"
        :class="{ 'rotate-180': isOpenDropdown, 'rotate-0': !isOpenDropdown }"
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
          v-if="isOpenDropdown"
          class="absolute left-0 w-full mt-1 border p-1 dark:border-slate-700 dark:bg-slate-800 border-gray-200 rounded-md bg-white shadow-lg z-20"
      >
        <div class="w-full overflow-auto">
          <p
              v-for="item in filteredItems"
              :key="item.id"
              @click="toggleItem(item)"
              class="cursor-pointer px-3 py-2 rounded-lg dark:hover:bg-slate-900/40 flex items-center hover:bg-gray-200 dark:text-[#abc2d3]"
          >
            <Icon
                icon="ion:checkmark"
                class="mr-2 transition-all duration-300 text-[1.3rem]"
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
  </div>
</template>
