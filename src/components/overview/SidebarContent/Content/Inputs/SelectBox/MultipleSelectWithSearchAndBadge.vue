<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

const searchValue = ref("");
const isOpenDropdown = ref(false);
const selectedOptions = ref([]);

const options = ref([
  {id: 1, name: "Option 1"},
  {id: 2, name: "Option 2"},
  {id: 3, name: "Option 3"},
  {id: 4, name: "Option 4"},
  {id: 5, name: "Option 5"},
]);

const filteredItems = computed(() =>
    options.value.filter((item) =>
        item.name.toLowerCase().includes(searchValue.value.toLowerCase())
    )
);

const isSelected = (item) =>
    selectedOptions.value.some((selected) => selected.id === item.id);

const toggleSelectItem = (item) => {
  if (isSelected(item)) {
    selectedOptions.value = selectedOptions.value.filter(
        (selected) => selected.id !== item.id
    );
  } else {
    selectedOptions.value.push(item);
  }
};

const removeItem = (option) => {
  selectedOptions.value = selectedOptions.value.filter(
      (selected) => selected.id !== option.id
  );
};

const handleClickOutside = (event) => {
  if (!event.target.closest(".custom-select")) {
    isOpenDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative custom-select w-full 1024px:w-[60%]">
    <input
        type="text"
        placeholder="Search.."
        v-model="searchValue"
        @focus="isOpenDropdown = true"
        class="w-full dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
    />

    <Icon
        icon="proicons:chevron-down"
        :class="[
            'transition-all duration-300 text-[1.3rem] absolute top-[10px] right-3 text-gray-500',
            isOpenDropdown ? 'rotate-[180deg]' : 'rotate-0'
            ]"
    />

    <div
        v-if="isOpenDropdown"
        class="absolute dark:border-slate-700 dark:bg-slate-800 left-0 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20 p-1"
    >
      <div class="w-full overflow-auto">
        <p
            v-for="item in filteredItems"
            :key="item.id"
            @click="toggleSelectItem(item)"
            class="cursor-pointer dark:text-[#abc2d3] rounded-lg dark:hover:bg-slate-900/40 px-3 py-2 flex items-center hover:bg-gray-200"
        >
          <Icon
              icon="ion:checkmark"
              :class="[
                    'mr-2 transition-all text-[1.3rem] duration-300',
                    isSelected(item)
                    ? 'scale-[1] opacity-100'
                    : 'scale-[0.5] opacity-0'
                    ]"
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

    <div
        v-if="selectedOptions.length > 0"
        class="flex items-center gap-x-[5px] mt-2 flex-wrap"
    >
      <div
          v-for="item in selectedOptions"
          :key="item.id"
          class="bg-brandColor dark:bg-slate-800 dark:border-slate-700 dark:border dark:text-[#abc2d3]/80 min-w-fit text-white px-2 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
      >
        {{ item.name }}
        <button
            @click="removeItem(item)"
            class="ml-2 text-[0.8rem] hover:text-red-600"
        >
          <Icon icon="icon-park-outline:close"/>
        </button>
      </div>
    </div>
  </div>
</template>
