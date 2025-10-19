<script setup>
import {computed, nextTick, onMounted, ref, watch} from 'vue';
import {RouterLink, useRoute, useRouter} from 'vue-router';
import {ChevronDown, Command, Github, Menu, Moon, Search, Sun, X} from 'lucide-vue-next';
import UpdateBadge from "@/Shared/UpdateBadge.vue";


// State refs
const isSearchOpen = ref(false);
const sidebarOpen = ref(false);
const toolsDropdownOpen = ref(false);
const showStars = ref(false);
const textWidth = ref(0);
const searchPlaceholderText = ref('search component');
const textRef = ref(null);

const router = useRouter();
const route = useRoute();

// const {stars, loading} = useGitHubStars('Asfak00', 'zenui-library');
// const {theme, toggleTheme} = useZenuiStore();

const placeholderTexts = ['Components', 'Blocks', 'Templates', 'E-commerce Kits', 'Animated Components'];
let placeholderIndex = 0;

const handleSearchClick = () => {
  isSearchOpen.value = true;
};

const updateTextWidth = () => {
  if (textRef.value) {
    textWidth.value = textRef.value.offsetWidth;
  }
};

// Lifecycle and watchers

onMounted(() => {
  // Theme class toggle
  document.documentElement.classList.toggle('dark', theme.value === 'dark');

  // Click outside handler
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

  // Placeholder interval
  const interval = setInterval(() => {
    searchPlaceholderText.value = placeholderTexts[placeholderIndex];
    placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
  }, 3000);

  // Show stars briefly
  showStars.value = true;
  const timer = setTimeout(() => {
    showStars.value = false;
  }, 5000);

  return () => {
    document.removeEventListener('click', handleClickOutside);
    clearInterval(interval);
    clearTimeout(timer);
  };
});

// watch(theme, (newTheme) => {
//   document.documentElement.classList.toggle('dark', newTheme === 'dark');
// });

// watch([showStars, stars], () => {
//   nextTick(() => {
//     updateTextWidth();
//   });
// });

// Computed class for nav border
const navBorderClass = computed(() =>
    route.path === '/' ? 'border-transparent' : 'border-gray-100 dark:border-darkBorderColor'
);

// Animation helpers (replace with your own or Vue transitions)
</script>

<template>
  <nav
      :class="[
      navBorderClass,
      'border-b flex 1024px:hidden items-center justify-between w-full px-5 640px:px-10 backdrop-blur-md py-3 sticky top-0 left-0 z-50',
    ]"
  >
    <div class="flex items-center gap-8 relative">
      <div class="relative">
<!--        <VersionSelectBox/>-->
        <img
            src="/darklogo.png"
            alt="logo"
            class="w-[65px] 1024px:w-[70px] z-20 cursor-pointer"
            @click="() => router.push('/')"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2">
<!--        <a href="https://discord.gg/qbwytm4WUG" target="_blank" rel="noreferrer">-->
<!--          <Discord-->
<!--              class="text-[2.5rem] dark:border-darkBorderColor dark:text-slate-400 text-gray-400 rounded-normal p-[8px] border border-gray-200 cursor-pointer"/>-->
<!--        </a>-->

        <a
            href="https://github.com/Asfak00/zenui-library"
            target="_blank"
            rel="noreferrer"
            class="hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-300 dark:text-slate-400 flex items-center text-gray-400 rounded-normal border border-gray-200 cursor-pointer overflow-hidden"
        >
          <Github class="text-[2.45rem] px-[9px] py-[7px]"/>
          <div
              :style="{ width: showStars ? textWidth + 16 + 'px' : '0px', overflow: 'hidden' }"
              class="transition-all duration-300"
          >
            <p ref="textRef" class="text-black text-[0.9rem] font-medium pr-4 whitespace-nowrap">
             20+
            </p>
          </div>
        </a>

        <div
            class="text-[1.5rem] dark:border-darkBorderColor dark:text-slate-400 text-gray-500 overflow-hidden h-[40px] border border-border rounded-normal px-[8px] p-1 cursor-pointer"
        >
<!--          <Sun-->
<!--              :class="[-->
<!--              theme === 'dark'-->
<!--                ? 'translate-y-[3px] rotate-0'-->
<!--                : 'translate-y-[-80px] rotate-[160deg]',-->
<!--              'transition-all duration-500',-->
<!--            ]"-->
<!--          />-->
<!--          <Moon-->
<!--              :class="[-->
<!--              theme === 'light'-->
<!--                ? 'translate-y-[-21px] rotate-0'-->
<!--                : 'translate-y-[80px] rotate-[-260deg]',-->
<!--              'transition-all duration-500 text-gray-400',-->
<!--            ]"-->
<!--          />-->
        </div>
      </div>

      <Menu
          @click="() => (sidebarOpen = !sidebarOpen)"
          class="text-[2.5rem] dark:border-darkBorderColor dark:text-slate-300 mobileSidebarButton text-gray-500 rounded-md p-[8px] border border-gray-200 cursor-pointer"
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
    <X
        @click="() => (sidebarOpen = false)"
        class="text-[1.3rem] dark:text-darkSubTextColor text-gray-700 mb-[20px] absolute left-[15px]"
    />

    <div class="zenuiSearchInput mt-[45px] relative w-full" @click="handleSearchClick">
      <Search class="text-gray-400 absolute dark:text-slate-500 left-3 top-[0.7rem] text-[1.5rem]"/>

      <transition-group name="fade" tag="p"
                        class="text-[1rem] dark:text-slate-500 text-gray-400 absolute top-[10px] left-[45px]">
        <p :key="searchPlaceholderText" class="text-[1rem] dark:text-slate-500 text-gray-400">
          {{ searchPlaceholderText }}
        </p>
      </transition-group>

      <input
          type="search"
          readonly
          class="py-[0.59rem] pl-10 dark:border-slate-700 dark:text-darkSubTextColor dark:placeholder:text-slate-500 border w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none"
      />
      <span
          class="text-gray-400 dark:text-slate-400 transition-all duration-500 px-2 py-1 text-[1rem] font-[400] rounded-md h-[75%] absolute right-1.5 top-[0.35rem] flex items-center justify-center gap-[1px]"
      >
        <Command class="inline-block"/>
        S
      </span>
    </div>

    <ul class="text-gray-600 flex flex-col mt-5 items-start gap-4 font-[500] capitalize text-[1rem]">
      <RouterLink
          to="/about-us"
          class="!text-[1rem] hover:!border-none hover:!bg-transparent dark:text-darkSubTextColor !pl-0 !font-[500]"
      >
        About Us
      </RouterLink>
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
        <ChevronDown :class="toolsDropdownOpen ? 'rotate-180' : 'rotate-0'" class="transition-all duration-300"/>
      </li>

      <transition name="fade" mode="out-in">
        <div
            v-if="toolsDropdownOpen"
            class="grid grid-cols-1 gap-[20px] ml-4"
            key="tools-dropdown"
        >
          <div class="flex flex-col gap-[20px] text-[1rem]">
            <RouterLink to="/shortcut-generator" class="!p-0 hover:!border-none hover:!bg-transparent">
              <div class="flex items-center gap-[10px]">
                <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                  ShotKey
                </p>
              </div>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500"
              >generate keyboard shortcuts easily.</span
              >
            </RouterLink>
            <RouterLink to="/icons" class="!p-0 hover:!border-none hover:!bg-transparent">
              <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                Icons
              </p>
              <span
                  class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">Scalable icons for clear visuals.</span>
            </RouterLink>
          </div>

          <div class="flex flex-col gap-[20px] text-[1rem]">
            <RouterLink to="/color-palette" class="!p-0 hover:!border-none hover:!bg-transparent">
              <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                Color Palettes
              </p>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">Harmonized color sets.</span>
            </RouterLink>

            <RouterLink to="/config-generator" class="!p-0 hover:!border-none hover:!bg-transparent">
              <div class="flex items-center gap-[10px]">
                <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                  Config AI
                </p>
                <UpdateBadge/>
              </div>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">Generate tailwind config file by AI.</span>
            </RouterLink>

            <RouterLink to="/semantic-tag-master" class="!p-0 hover:!border-none hover:!bg-transparent">
              <div class="flex items-center gap-[10px]">
                <p class="cursor-pointer dark:text-darkSubTextColor leading-[20px] text-gray-600 transition-all duration-200">
                  Semantic TagMaster
                </p>
              </div>
              <span class="text-[0.8rem] dark:text-slate-400 font-[300] text-gray-500">A comprehensive guide about HTML semantic tags</span>
            </RouterLink>
          </div>
        </div>
      </transition>
    </ul>
  </aside>

<!--  <div :class="[isSearchOpen ? 'visible z-[100]' : 'invisible z-[-1]', 'transition-all duration-500']">-->
<!--    <SearchComponent :isSearchOpen="isSearchOpen"/>-->
<!--  </div>-->
</template>

<style scoped>
/* Add any scoped styles if needed */
/* You can add transitions if you want */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
