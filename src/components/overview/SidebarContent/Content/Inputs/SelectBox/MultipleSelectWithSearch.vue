<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

const searchValue = ref("");
const isDropdownOpen = ref(false);
const selectedItems = ref([]);

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
    selectedItems.value.some((selected) => selected.id === item.id);

const toggleSelect = (item) => {
  if (isSelected(item)) {
    selectedItems.value = selectedItems.value.filter(
        (selected) => selected.id !== item.id
    );
  } else {
    selectedItems.value.push(item);
  }
};

const handleClickOutside = (event) => {
  if (event.target.closest(".custom-select")) return;
  setTimeout(() => {
    isDropdownOpen.value = false;
  }, 200);
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<template>
  <div class="relative custom-select w-full 1024px:w-[60%]">
    <input
        type="text"
        placeholder="Search.."
        v-model="searchValue"
        @focus="isDropdownOpen = true"
        class="w-full border dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border-gray-300 rounded-md px-3 py-2 focus:outline-none"
    />

    <Icon icon="proicons:chevron-down"
          :class="[
            'transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500',
            isDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'
            ]"
    />

    <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-if="isDropdownOpen"
          class="absolute left-0 dark:border-slate-700 p-1 dark:bg-slate-800 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20"
      >
        <div class="w-full overflow-auto">
          <p
              v-for="item in filteredItems"
              :key="item.id"
              @click="toggleSelect(item)"
              class="cursor-pointer px-3 rounded-lg dark:text-[#abc2d3] dark:hover:bg-slate-900/40 py-2 flex items-center hover:bg-gray-200"
          >
            <Icon icon="weui:done-outlined"
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
    </Transition>
  </div>
</template>
