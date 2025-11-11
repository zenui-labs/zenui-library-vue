<script setup>
import {computed, nextTick, onBeforeUnmount, ref, watch} from "vue";
import {useRouter} from "vue-router";
import {Icon} from "@iconify/vue";
import Fuse from "fuse.js";
import KeyboardHint from "@/Shared/KeyboardHint.vue";
import {componentsSearchData, docsSearchData} from "@/Utils/SearchData.js";

const props = defineProps({
  isSearchOpen: {type: Boolean, required: true}
});
const emit = defineEmits(["update:isSearchOpen"]);

const router = useRouter();

const inputText = ref("");
const focusedIndex = ref(-1);
const isKeyboardActive = ref(false);
const searchInput = ref(null);

const combinedSearchData = computed(() => [
  ...docsSearchData.map((i) => ({...i, type: "documentation"})),
  ...componentsSearchData.map((i) => ({...i, type: "component"})),
]);

const fuse = computed(
    () =>
        new Fuse(combinedSearchData.value, {
          keys: [
            {name: "title", weight: 2},
            {name: "description", weight: 1},
            {name: "tags", weight: 1}
          ],
          threshold: 0.3,
          includeScore: true,
          useExtendedSearch: true
        })
);

const searchResults = computed(() =>
    inputText.value
        ? fuse.value.search(inputText.value).map((r) => r.item)
        : combinedSearchData.value
);

const allItems = computed(() => searchResults.value);

const sectionsWithIndex = computed(() => {
  const icons = {
    layout: "lucide:layout-template",
    section: "radix-icons:section"
  };

  const order = [
    {type: "documentation", title: "Documentation", icon: icons.layout, className: ""},
    {type: "component", title: "Components", icon: icons.layout, className: ""},
    {type: "animation", title: "Animations", icon: icons.layout, className: ""},
    {type: "block", title: "Blocks", icon: icons.section, className: "mt-5"}
  ];

  let index = 0;
  return order.map((section) => {
    const data = searchResults.value.filter((i) => i.type === section.type);
    const startIndex = index;
    index += data.length;
    return {...section, data, startIndex};
  });
});

let timeout = null;
watch(
    () => props.isSearchOpen,
    async (open) => {
      if (open) {
        inputText.value = "";
        focusedIndex.value = -1;
        timeout = setTimeout(async () => {
          await nextTick();
          searchInput.value?.focus();
        }, 50);
      } else {
        clearTimeout(timeout);
      }
    },
    {immediate: true}
);

onBeforeUnmount(() => clearTimeout(timeout));

const handleKeyDown = (e) => {
  const total = allItems.value.length;
  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      isKeyboardActive.value = true;
      focusedIndex.value = focusedIndex.value >= total - 1 ? 0 : focusedIndex.value + 1;
      break;
    case "ArrowUp":
      e.preventDefault();
      isKeyboardActive.value = true;
      focusedIndex.value = focusedIndex.value <= 0 ? total - 1 : focusedIndex.value - 1;
      break;
    case "Enter":
      e.preventDefault();
      if (focusedIndex.value >= 0 && focusedIndex.value < total)
        handleItemClick(allItems.value[focusedIndex.value]);
      break;
    case "Escape":
      e.preventDefault();
      emit("update:isSearchOpen", false);
      inputText.value = "";
      focusedIndex.value = -1;
      break;
  }
};

const handleMouseMove = () => (isKeyboardActive.value = false);

const handleItemClick = (item) => {
  if (!item) return;
  router.push(item.url);
  emit("update:isSearchOpen", false);
  inputText.value = "";
  focusedIndex.value = -1;
};

watch(focusedIndex, (i) => {
  if (i >= 0) {
    nextTick(() => {
      const el = document.getElementById(`search-item-${i}`);
      el?.scrollIntoView({block: "center", behavior: "smooth"});
    });
  }
});

const highlightText = (text, query) => {
  if (!query || !text) return Array.isArray(text) ? text.join(", ") : text;
  const safe = escapeHtml(Array.isArray(text) ? text.join(", ") : text);
  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
  return safe.replace(regex, "<mark class='bg-yellow-200 text-gray-900'>$1</mark>");
};

const escapeHtml = (str) =>
    str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const keyboardClass = (index) =>
    isKeyboardActive.value
        ? focusedIndex.value === index
            ? "bg-gray-50 dark:bg-slate-900"
            : "text-gray-500"
        : "hover:bg-gray-50 dark:hover:bg-slate-900";

const tagClass = (index) =>
    focusedIndex.value === index
        ? "bg-gray-200 dark:bg-slate-800 dark:text-darkSubTextColor"
        : "bg-gray-100 text-gray-600 dark:bg-slate-900/40 dark:text-darkSubTextColor";
</script>

<template>
  <div
      v-if="isSearchOpen"
      class="w-full h-screen fixed top-0 left-0 bg-black/70 z-[1000000000] flex items-center justify-center"
  >
    <transition
        name="search-popup"
        appear
    >
      <div
          :class="[
        isSearchOpen ? 'scale-[1] opacity-100 z-[100]' : 'scale-[0.7] opacity-0 z-[-1]',
        'transition-all duration-500 zenuiSearchComponent dark:bg-slate-800 bg-secondary w-[90%] 425px:w-[70%] 1260px:w-[40%] h-[80vh] p-6 rounded-high'
      ]"
      >
        <div class="relative bg-white dark:bg-slate-800 pb-[10px]">
          <Icon
              icon="ci:search"
              class="absolute top-[25px] transform -translate-y-1/2 left-4 text-[1.5rem] text-[#9da4b0]"
          />
          <input
              id="zenui_search_input"
              ref="searchInput"
              maxlength="30"
              v-model="inputText"
              @keydown="handleKeyDown"
              class="px-4 pl-12 dark:bg-slate-900 dark:border-slate-700 dark:placeholder:text-slate-500 dark:text-darkTextColor py-3 w-full border rounded-normal border-gray-200 focus:border-brandColor text-text focus:outline-none"
              placeholder="Search Component"
              type="text"
          />
        </div>

        <div class="h-[65vh] overflow-y-auto" style="scrollbar-width: none" @mousemove="handleMouseMove">
          <template v-for="section in sectionsWithIndex" :key="section.type">
            <div v-if="section.data.length > 0">
              <div :class="['sticky top-0 dark:bg-slate-800 bg-white z-10', section.className]">
                <h3 class="font-bold dark:text-darkTextColor pb-[10px]">{{ section.title }}</h3>
              </div>

              <div class="flex flex-col pr-2 pb-7">
                <router-link
                    v-for="(item, index) in section.data"
                    :key="section.startIndex + index"
                    :id="`search-item-${section.startIndex + index}`"
                    :to="item.url"
                    @click.native.prevent="handleItemClick(item)"
                    @mousemove.native="handleMouseMove"
                    class="flex group items-start gap-[10px] py-3 px-3 text-gray-500 rounded-md transition-colors"
                    :class="keyboardClass(section.startIndex + index)"
                >
                  <Icon
                      :icon="section.icon"
                      class="text-[1.4rem] dark:text-darkSubTextColor flex-shrink-0 mt-1"
                  />
                  <div class="flex-1 min-w-0">
                    <p
                        class="text-[1rem] font-[500] dark:text-darkSubTextColor text-gray-600 capitalize"
                        v-html="highlightText(item.title, inputText)"
                    />
                    <p
                        v-if="item.description"
                        class="text-sm font-[300] dark:text-darkSubTextColor/60 mt-0.5 truncate text-gray-500"
                        v-html="highlightText(item.description, inputText)"
                    />
                    <div v-if="item.tags" class="flex flex-wrap gap-1 mt-2">
                    <span
                        v-for="(tag, tagIndex) in item.tags"
                        :key="tagIndex"
                        class="text-xs group-hover:bg-gray-200 dark:group-hover:bg-slate-800 dark:group-hover:text-darkSubTextColor px-2 py-0.5 rounded-full"
                        :class="tagClass(section.startIndex + index)"
                    >
                      {{ tag }}
                    </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </template>

          <div v-if="allItems.length === 0" class="mt-5 flex items-center h-[90%] flex-col justify-center">
            <img alt="Search not found image" src="/zenui_search_not_found.png" class="w-[70px]"/>
            <p class="text-[0.9rem] text-text dark:text-darkSubTextColor mt-5">No Search found!</p>
          </div>
        </div>

        <div
            class="w-full hidden 1024px:block fixed bottom-0 left-0 dark:bg-slate-800 dark:border-slate-700 bg-white border-t border-gray-200 rounded-b-high"
        >
          <div class="flex flex-wrap gap-[15px] p-3">
            <KeyboardHint key-symbol="↑" label="up navigate"/>
            <KeyboardHint key-symbol="↓" label="down navigate"/>
            <KeyboardHint key-symbol="↵" label="select"/>
            <KeyboardHint key-symbol="Esc" label="close"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.search-popup-enter-from,
.search-popup-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.search-popup-enter-active,
.search-popup-leave-active {
  transition: all 0.3s ease;
}

.search-popup-enter-to,
.search-popup-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
