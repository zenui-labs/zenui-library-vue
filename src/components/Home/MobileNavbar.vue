<script setup>
import {onMounted, ref} from 'vue';
import {RouterLink, useRoute, useRouter} from 'vue-router';
import UpdateBadge from "@/Shared/UpdateBadge.vue";
import {Icon} from "@iconify/vue";
import {useZenuiStore} from "@/Store/Index.js";
import Search from "@/Shared/Search.vue";
import CommandIcon from "@/SvgIcons/CommandIcon.vue";
import {ZENUI_REACT_DOMAIN} from "@/Constant/Index.js";


const isSearchOpen = ref(false);
const sidebarOpen = ref(false);
const toolsDropdownOpen = ref(false);

const router = useRouter();
const route = useRoute();

const store = useZenuiStore();


const handleSearchClick = () => {
  isSearchOpen.value = true;
};

onMounted(() => {
  const handleClickOutside = (event) => {
    const target = event.target;
    if (!target.closest('.zenuiSearchComponent') && !target.closest('.zenuiSearchInput')) {
      isSearchOpen.value = false;
    }
    if (!target.closest('.mobileSidebar') && !target.closest('.mobileSidebarButton')) {
      sidebarOpen.value = false;
    }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
});

</script>

<template>
  <nav
      :class="[
      'border-b border-gray-100 dark:border-darkBorderColor flex 1024px:hidden items-center justify-between w-full px-5 backdrop-blur-md 640px:px-10 py-3 sticky top-0 left-0 z-50',
    ]"
  >
    <div class="flex items-center gap-8 relative">
      <img
          src="/logo.png"
          alt="logo"
          class="w-[60px] cursor-pointer z-10"
          @click="router.push('/')"
      />
      <span
          class='absolute top-1 right-[-38px] border border-gray-200 dark:bg-slate-900 dark:border-darkBorderColor dark:text-darkSubTextColor rounded-full text-[0.7rem] text-text bg-gray-50 pb-[0.5px] px-2'>Beta</span>
    </div>

    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2">
        <a href="https://discord.gg/qbwytm4WUG" target="_blank" rel="noreferrer">
          <Icon icon="iconoir:discord"
                class="text-[2.5rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-500 dark:text-slate-400 text-gray-400 rounded-normal p-[6px] border border-gray-200 cursor-pointer"
          />
        </a>

        <a
            href="https://github.com/Asfak00/zenui-library-vue"
            target="_blank"
            rel="noreferrer"
        >
          <Icon icon="meteor-icons:github"
                class="text-[2.5rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-500 dark:text-slate-400 text-gray-400 rounded-normal p-[7px] border border-gray-200 cursor-pointer"
          />
        </a>

        <div
            @click="store.toggleTheme"
            class="hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor dark:text-slate-400 text-gray-400 overflow-hidden h-[41px] border border-border rounded-normal p-1 cursor-pointer px-[7px] transition-all duration-200"
        >
          <Icon icon="bi:sun"
                :class="[
                              store.theme === 'dark' ? 'translate-y-[3px] translate-x-0 rotate-0' : 'translate-y-[-80px] rotate-[160deg]',
                              'transition-all duration-500 text-[1.5rem]'
                            ]"
          />
          <Icon icon="ri:moon-clear-line"
                :class="[
                              store.theme === 'light' ? 'translate-y-[-20px] rotate-0' : 'translate-y-[80px] rotate-[-260deg]',
                              'transition-all duration-500 text-[1.5rem]'
                            ]"
          />
        </div>
      </div>

      <Icon icon="heroicons-outline:menu-alt-1"
            class="text-[2.6rem] dark:border-darkBorderColor rotate-[180deg] dark:text-slate-300 mobileSidebarButton text-gray-500 rounded-md p-[6px] border border-gray-200 cursor-pointer"
            @click="() => (sidebarOpen = !sidebarOpen)"
      />
    </div>
  </nav>

  <!-- sidebar -->
  <aside
      :class="[
      sidebarOpen ? 'translate-x-0 opacity-100 z-[999]' : 'translate-x-[200px] opacity-0 z-[-1]',
      'fixed top-0 mobileSidebar dark:bg-slate-900 right-0 py-5 px-[1.3rem] w-[90%] block 1024px:hidden 640px:w-[50%] h-screen transition-all duration-500 bg-white toastshadow overflow-y-auto',
    ]"
  >
    <Icon icon="akar-icons:cross"
          @click="() => (sidebarOpen = false)"
          class="text-[2rem] dark:text-darkSubTextColor bg-gray-100 rounded-full dark:bg-darkBgColor p-2 text-gray-700 mb-[20px] absolute top-2.5 left-[10px]"
    />

    <div class="zenuiSearchInput relative mt-[2.8rem] w-full" @click="handleSearchClick">
      <Icon icon="uil:search" width="20" height="20"
            class="text-gray-400 absolute dark:text-slate-400 left-3 top-[0.75rem]"/>
      <transition-group name="fade-slide" tag="div">
        <p
            key="search-placeholder"
            class="text-[0.9rem] dark:text-slate-400 text-gray-400 absolute top-[11px] left-[42px]"
        >
          Search Component
        </p>
      </transition-group>
      <input
          type="search"
          readonly
          class="py-[0.59rem] pl-12 dark:border-darkBorderColor border w-full bg-transparent border-gray-200 rounded-normal focus:ring-0 outline-none"
      />
      <span
          class="text-gray-400 dark:text-slate-400 transition-all duration-500 px-2 py-1 text-[1rem] font-[400] rounded-md h-[75%] absolute right-1.5 top-[0.35rem] flex items-center justify-center gap-[1px]"
      >
              <CommandIcon/>
              S
            </span>
    </div>

    <ul class="text-gray-600 flex flex-col mt-5 items-start gap-4 font-[500] capitalize text-[1rem]">
      <RouterLink
          to="/docs/overview"
          class="!text-[1rem] dark:text-darkSubTextColor hover:!border-none hover:!bg-transparent !pl-0 !font-[500]"
      >
        Documentation
      </RouterLink>
      <RouterLink
          to="/components/all-components"
          class="!text-[1rem] dark:text-darkSubTextColor hover:!border-none hover:!bg-transparent !pl-0 !font-[500]"
      >
        Components
      </RouterLink>

      <li
          @click="() => (toolsDropdownOpen = !toolsDropdownOpen)"
          class="cursor-pointer relative dark:text-darkSubTextColor flex items-center gap-[8px]"
      >
        Tools
        <Icon icon="fluent:chevron-down-16-filled"
              :class="[
        toolsDropdownOpen ? 'rotate-[180deg]' : 'rotate-0',
        'transition-all duration-300 text-[1.2rem]'
      ]"/>
      </li>

      <transition name="fade" mode="out-in">
        <div
            v-if="toolsDropdownOpen"
            class="grid grid-cols-1 gap-[20px] ml-4"
            key="tools-dropdown"
        >
          <div class="flex flex-col gap-[20px] text-[1rem]">
            <a
                :href="`${ZENUI_REACT_DOMAIN}/shortcut-generator`"
                target="_blank"
                class="!p-0 hover:!border-none hover:!bg-transparent">
              <div class="flex items-center gap-[10px]">
                <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                  ShotKey
                </p>
              </div>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500"
              >generate keyboard shortcuts easily.</span
              >
            </a>
            <a :href="`${ZENUI_REACT_DOMAIN}/icons`"
               target="_blank"
               class="!p-0 hover:!border-none hover:!bg-transparent">
              <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                Icons
              </p>
              <span
                  class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">Scalable icons for clear visuals.</span>
            </a>
          </div>

          <div class="flex flex-col gap-[20px] text-[1rem]">
            <a :href="`${ZENUI_REACT_DOMAIN}/color-palette`"
               target="_blank" class="!p-0 hover:!border-none hover:!bg-transparent">
              <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                Color Palettes
              </p>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">Harmonized color sets.</span>
            </a>

            <a :href="`${ZENUI_REACT_DOMAIN}/config-generator`"
               target="_blank" class="!p-0 hover:!border-none hover:!bg-transparent">
              <div class="flex items-center gap-[10px]">
                <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                  Config AI
                </p>
                <UpdateBadge/>
              </div>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">Generate tailwind config file by AI.</span>
            </a>

            <a :href="`${ZENUI_REACT_DOMAIN}/semantic-tag-master`"
               target="_blank" class="!p-0 hover:!border-none hover:!bg-transparent">
              <div class="flex items-center gap-[10px]">
                <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                  Semantic TagMaster
                </p>
              </div>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">A comprehensive guide about HTML semantic tags</span>
            </a>
          </div>
        </div>
      </transition>
    </ul>
  </aside>

  <Search v-if="isSearchOpen" :isSearchOpen="isSearchOpen"/>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
