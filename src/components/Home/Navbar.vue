<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {RouterLink, useRoute, useRouter} from 'vue-router'
import CommandIcon from '@/SvgIcons/CommandIcon.vue'
import {Icon} from "@iconify/vue"
import UpdateBadge from "@/Shared/UpdateBadge.vue";
import {useZenuiStore} from "@/Store/Index.js";
import Search from "@/Shared/Search.vue";
import {ZENUI_REACT_DOMAIN} from "@/Constant/Index.js";

const props = defineProps({
  className: {type: String, default: ''}
})

const router = useRouter()
const route = useRoute()

const isSearchOpen = ref(false)
const isToolsHover = ref(false)

const store = useZenuiStore()

watch(() => store.theme, (newTheme) => {
  document.documentElement.classList.toggle('dark', newTheme === 'dark')
}, {immediate: true})


const handleSearchClick = () => {
  isSearchOpen.value = true
}

onMounted(() => {
  const handleClickedOutside = (event) => {
    if (!event.target.closest('.zenuiSearchComponent') && !event.target.closest('.zenuiSearchInput')) {
      isSearchOpen.value = false
    }
  }
  document.addEventListener('click', handleClickedOutside)

  const handleShortCut = (event) => {
    event.stopPropagation()
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
      event.preventDefault()
      isSearchOpen.value = true
    } else if (event.key === 'Escape') {
      isSearchOpen.value = false
    }
  }
  document.addEventListener('keydown', handleShortCut)

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickedOutside)
    document.removeEventListener('keydown', handleShortCut)
  })
})

const handleToolsMouseHover = () => {
  isToolsHover.value = true;
};

const onBeforeEnter = (el) => {
  el.style.opacity = '0';
  el.style.transform = 'scale(0.8)';
};

const onEnter = (el, done) => {
  el.offsetHeight;
  el.style.transition = 'opacity 0.2s, transform 0.2s';
  el.style.opacity = '1';
  el.style.transform = 'scale(1)';
  done();
};

const onLeave = (el, done) => {
  el.style.transition = 'opacity 0.2s, transform 0.2s';
  el.style.opacity = '0';
  el.style.transform = 'scale(0.8)';
  setTimeout(done, 300);
};

</script>

<template>
  <nav
      :class="[
        'border-b 1024px:flex w-full px-10 backdrop-blur-2xl border-gray-100 dark:border-darkBorderColor/50 sticky top-0 left-0 z-[999] hidden transition-all duration-500',
        className
      ]"
  >
    <div class="max-w-[1615px] mx-auto w-full flex items-center justify-between">
      <div class="flex items-center gap-8">

        <div class="relative mr-10 h-[52px]">
          <img
              src="/logo.png"
              alt="logo"
              class="w-[70px] cursor-pointer z-10"
              @click="router.push('/')"
          />
          <span
              class='absolute top-1 right-[-38px] border border-gray-200 dark:bg-slate-900 dark:border-darkBorderColor dark:text-darkSubTextColor rounded-full text-[0.7rem] text-text bg-gray-50 pb-[0.5px] px-2'>Beta</span>
        </div>

        <ul class="text-gray-600 flex items-center gap-8 font-[500] capitalize text-[1rem]">
          <RouterLink
              to="/docs/overview"
              class="dark:text-darkTextColor cursor-pointer py-[23px] hover:text-[#3fb682] transition-all duration-200"
          >
            Documentation
          </RouterLink>

          <RouterLink
              to="/components/all-components"
              class="dark:text-darkTextColor cursor-pointer hover:text-[#3fb682] transition-all duration-200"
          >
            Components
          </RouterLink>

          <li
              @mouseenter="handleToolsMouseHover"
              @mouseleave="isToolsHover = false"
              :class="[
      isToolsHover && 'text-[#3fb682]',
      'cursor-pointer relative py-[23px] hover:text-[#3fb682] dark:text-darkTextColor transition-all duration-200 flex items-center gap-[8px]'
    ]"
          >
            Tools
            <Icon icon="fluent:chevron-down-16-filled"
                  :class="[
        isToolsHover ? 'rotate-[180deg]' : 'rotate-0',
        'transition-all duration-300 text-[1.3rem]'
      ]"
            />

            <Transition
                name="dropdown"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave"
            >
              <div
                  v-if="isToolsHover"
                  class="absolute dark:bg-slate-900 border border-gray-50 dark:border-darkBorderColor/30 top-[60px] left-[-250px] gap-x-[30px] w-[700px] grid grid-cols-2 gap-y-3 bg-white rounded-high p-5 mt-2 shadow-[0px_40px_40px_-8px_rgba(145,158,171,0.24)] dark:shadow-[0px_40px_40px_-8px_rgba(0,0,0,0.2)]"
                  @mouseenter="isToolsHover = true"
                  @mouseleave="isToolsHover = false"
              >
                <div class="flex flex-col gap-3">
                  <a
                      :href="`${ZENUI_REACT_DOMAIN}/shortcut-generator`"
                      target="_blank"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-[14px] rounded-normal text-[1.6rem]">
                      <Icon icon="solar:keyboard-outline"/>
                    </div>

                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        ShotKey
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                generate keyboard shortcuts easily.
              </span>
                    </div>
                  </a>

                  <a
                      :href="`${ZENUI_REACT_DOMAIN}/color-palette`"
                      target="_blank"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-3 rounded-normal text-[1.7rem]">
                      <Icon icon="proicons:color-palette"/>
                    </div>

                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        Color Palettes
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                Harmonized color sets.
              </span>
                    </div>
                  </a>
                </div>

                <div class="flex flex-col gap-3">
                  <a
                      :href="`${ZENUI_REACT_DOMAIN}/icons`"
                      target="_blank"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-3.5 rounded-normal text-[1.5rem]">
                      <Icon icon="uil:icons"/>
                    </div>

                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        Icons
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                Scalable icons for clear visuals.
              </span>
                    </div>
                  </a>

                  <a
                      :href="`${ZENUI_REACT_DOMAIN}/config-generator`"
                      target="_blank"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-[14px] text-[1.6rem] rounded-normal">
                      <Icon icon="hugeicons:configuration-01"/>
                    </div>

                    <div>
                      <div class="flex items-center gap-2">
                        <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                          Config AI
                        </p>
                        <UpdateBadge/>
                      </div>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                Generate tailwind config file by AI.
              </span>
                    </div>
                  </a>
                </div>

                <div class="flex flex-col">
                  <a
                      :href="`${ZENUI_REACT_DOMAIN}/semantic-tag-master`"
                      target="_blank"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-3.5 rounded-normal text-[1.5rem]">
                      <Icon icon="proicons:html"/>
                    </div>

                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        Semantic TagMaster
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                HTML semantic tags use cases
              </span>
                    </div>
                  </a>
                </div>
              </div>
            </Transition>
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-2">
        <div class="zenuiSearchInput relative w-full" @click="handleSearchClick">
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

        <div class="flex items-center gap-2">
          <a href="https://discord.gg/qbwytm4WUG" target="_blank" rel="noreferrer">
            <Icon icon="iconoir:discord"
                  class="text-[2.8rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-500 dark:text-slate-400 text-gray-400 rounded-normal p-[7px] border border-gray-200 cursor-pointer"
            />
          </a>

          <a
              href="https://github.com/Asfak00/zenui-library-vue"
              target="_blank"
              rel="noreferrer"
          >
            <Icon icon="meteor-icons:github"
                  class="text-[2.8rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-500 dark:text-slate-400 text-gray-400 rounded-normal p-[9px] border border-gray-200 cursor-pointer"
            />
          </a>

          <div
              @click="store.toggleTheme"
              class="text-[1.5rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor dark:text-slate-400 text-gray-400 overflow-hidden h-[44px] border border-border rounded-normal px-[9px] p-1 cursor-pointer"
          >
            <Icon icon="bi:sun"
                  :class="[
                              store.theme === 'dark' ? 'translate-y-[4px] translate-x-0.5 rotate-0' : 'translate-y-[-80px] rotate-[160deg]',
                              'transition-all duration-500 text-[1.6rem]'
                            ]"
            />
            <Icon icon="ri:moon-clear-line"
                  :class="[
                              store.theme === 'light' ? 'translate-y-[-22px] rotate-0' : 'translate-y-[80px] rotate-[-260deg]',
                              'transition-all duration-500 text-[1.8rem]'
                            ]"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <Search v-if="isSearchOpen" :isSearchOpen="isSearchOpen"/>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
