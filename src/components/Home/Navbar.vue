<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {RouterLink, useRoute, useRouter} from 'vue-router'

import {ChevronDown, CodeXml, Github, Keyboard, Moon, Palette, Search, Sun} from 'lucide-vue-next';


import CommandIcon from '@/SvgIcons/CommandIcon.vue'
import ConfigAiIcon from '@/SvgIcons/ConfigAiIcon.vue'
import UpdateBadge from '@/Shared/UpdateBadge.vue'
import {useGitHubStars} from '@/CustomHooks/useGithubStars.js'

// import {} from 'vue-countup-v2'

const props = defineProps({
  className: {type: String, default: ''}
})

const router = useRouter()
const route = useRoute()

const isSearchOpen = ref(false)
const isToolsHover = ref(false)
const showStars = ref(false)
const textWidth = ref(0)
const textRef = ref(null)

const {stars, loading} = useGitHubStars('Asfak00', 'zenui-library')

const searchPlaceholderText = ref('search component')

// const {theme, toggleTheme} = useZenuiStore()

// Toggle dark class on html
watch('light', (newTheme) => {
  document.documentElement.classList.toggle('dark', newTheme === 'dark')
}, {immediate: true})

const handleSearchClick = () => {
  isSearchOpen.value = true
}

const placeholderTexts = ["Components", "Blocks", "Templates", "E-commerce Kits", "Animated Components"]
let placeholderIndex = 0

// Cycle placeholders every 3 seconds
let placeholderInterval = null

onMounted(() => {
  placeholderInterval = setInterval(() => {
    searchPlaceholderText.value = placeholderTexts[placeholderIndex]
    placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length
  }, 3000)

  // Show stars animation toggle
  showStars.value = true
  const timer = setTimeout(() => {
    showStars.value = false
  }, 5000)

  // Close search when clicking outside
  const handleClickedOutside = (event) => {
    if (!event.target.closest('.zenuiSearchComponent') && !event.target.closest('.zenuiSearchInput')) {
      isSearchOpen.value = false
    }
  }
  document.addEventListener('click', handleClickedOutside)

  // Keyboard shortcuts: Ctrl+S or Cmd+S to open search, Escape to close
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

  // Calculate width of stars text for animation
  if (textRef.value) {
    textWidth.value = textRef.value.offsetWidth
  }

  onBeforeUnmount(() => {
    clearInterval(placeholderInterval)
    clearTimeout(timer)
    document.removeEventListener('click', handleClickedOutside)
    document.removeEventListener('keydown', handleShortCut)
  })
})

watch([showStars, stars], () => {
  if (showStars.value && textRef.value) {
    textWidth.value = textRef.value.offsetWidth
  }
})
</script>

<template>
  <nav
      :class="[
        route.path === '/' ? 'border-transparent' : 'border-gray-100 dark:border-darkBorderColor',
        'border-b 1024px:flex w-full px-10 backdrop-blur-2xl sticky top-0 left-0 z-[999] hidden transition-all duration-500',
        className
      ]"
  >
    <div class="max-w-[1615px] mx-auto w-full flex items-center justify-between">
      <div class="flex items-center gap-8">

        <div class="relative mr-10 h-[52px]">
          <!--          <VersionSelectBox/>-->
          <img
              src="/logo.png"
              alt="logo"
              class="w-[70px] cursor-pointer z-10"
              @click="router.push('/')"
          />
        </div>

        <ul class="text-gray-600 flex items-center gap-8 font-[500] capitalize text-[1rem]">
          <RouterLink
              to="/about-us"
              class="dark:text-darkTextColor cursor-pointer hover:text-[#0FABCA] transition-all duration-200"
          >
            About Us
          </RouterLink>

          <RouterLink
              to="/docs/overview"
              class="dark:text-darkTextColor cursor-pointer hover:text-[#0FABCA] transition-all duration-200"
          >
            Documentation
          </RouterLink>

          <RouterLink
              to="/components/all-components"
              class="dark:text-darkTextColor cursor-pointer hover:text-[#0FABCA] transition-all duration-200"
          >
            Components
          </RouterLink>

          <li
              class="cursor-pointer relative py-[23px] flex items-center gap-[8px]"
              :class="{ 'text-[#0FABCA]': isToolsHover }"
              @mouseenter="isToolsHover = true"
              @mouseleave="isToolsHover = false"
          >
            Tools
            <ChevronDown
                :size="20"
                :class="[
                  'transition-all duration-300',
                  isToolsHover ? 'rotate-[180deg]' : 'rotate-0'
                ]"
            />

            <transition
                name="fade-scale"
                appear
                v-if="isToolsHover"
            >
              <div
                  class="absolute dark:bg-slate-800 dark:border-darkBorderColor top-[64px] left-[-250px] gap-x-[30px] w-[700px] grid grid-cols-2 gap-y-3 bg-white shadow-[0px_40px_80px_-8px_rgba(145,158,171,0.24)] rounded-high p-5 mt-2"
                  @mouseenter="isToolsHover = true"
                  @mouseleave="isToolsHover = false"
              >
                <div class="flex flex-col gap-3">

                  <RouterLink
                      to="/shortcut-generator"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-[14px] rounded-normal text-[1.6rem]">
                      <Keyboard/>
                    </div>
                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        ShotKey
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                          generate keyboard shortcuts easily.
                        </span>
                    </div>
                  </RouterLink>

                  <RouterLink
                      to="/color-palette"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-3 rounded-normal text-[1.8rem]">
                      <Palette/>
                    </div>
                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        Color Palettes
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                          Harmonized color sets.
                        </span>
                    </div>
                  </RouterLink>

                </div>

                <div class="flex flex-col gap-3">

                  <RouterLink
                      to="/icons"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-3.5 rounded-normal text-[1.5rem]">
                      <!--                      <TbIcons/>-->
                    </div>
                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        Icons
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                          Scalable icons for clear visuals.
                        </span>
                    </div>
                  </RouterLink>

                  <RouterLink
                      to="/config-generator"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-[14px] rounded-normal">
                      <ConfigAiIcon/>
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
                  </RouterLink>

                </div>

                <div class="flex flex-col">
                  <RouterLink
                      to="/semantic-tag-master"
                      class="p-[8px] transition-all duration-200 dark:hover:bg-brandColor/10 hover:bg-brandColor/5 dark:hover:bg-slate-800 rounded-normal flex items-center gap-[10px]"
                  >
                    <div class="bg-brandColor/5 p-3.5 rounded-normal text-[1.5rem]">
                      <CodeXml/>
                    </div>
                    <div>
                      <p class="cursor-pointer dark:text-darkTextColor leading-[20px] text-gray-800 transition-all text-[1.1rem] duration-200">
                        Semantic TagMaster
                      </p>
                      <span class="text-[0.8rem] dark:text-darkSubTextColor font-[300] text-gray-500">
                          HTML semantic tags use cases
                        </span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-2">
        <div class="zenuiSearchInput relative w-full" @click="handleSearchClick">
          <Search :size="20" class="text-gray-400 absolute dark:text-slate-400 left-3 top-[0.8rem]"/>
          <transition-group name="fade-slide" tag="div">
            <p
                key="search-placeholder"
                class="text-[0.9rem] dark:text-slate-400 text-gray-400 absolute top-[11px] left-[40px]"
            >
              {{ searchPlaceholderText }}
            </p>
          </transition-group>
          <input
              type="search"
              readonly
              class="py-[0.59rem] pl-10 dark:border-darkBorderColor border w-full bg-transparent border-gray-200 rounded-normal focus:ring-0 outline-none"
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
            <!--            <RxDiscordLogo-->
            <!--                class="text-[2.7rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-500 dark:text-slate-400 text-gray-400 rounded-normal p-[9px] border border-gray-200 cursor-pointer"-->
            <!--            />-->
          </a>

          <a
              href="https://github.com/Asfak00/zenui-library"
              target="_blank"
              rel="noreferrer"
              class="hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-300 dark:text-slate-400 flex items-center text-gray-400 rounded-normal border border-gray-200 cursor-pointer overflow-hidden"
          >
            <Github class="text-[2.6rem] px-[9px] py-[7px]"/>
            <!--            <motion-div-->
            <!--                :style="{ overflow: 'hidden', width: showStars ? textWidth + 16 + 'px' : '0' }"-->
            <!--                class="transition-[width] duration-300"-->
            <!--            >-->
            <!--              <p-->
            <!--                  ref="textRef"-->
            <!--                  class="text-black dark:text-darkTextColor text-[0.9rem] font-medium pr-4 whitespace-nowrap"-->
            <!--              >-->
            <!--                <CountUp :endVal="stars" :duration="3.2"/>-->
            <!--                +-->
            <!--              </p>-->
            <!--            </motion-div>-->
          </a>

          <div
              @click="toggleTheme"
              class="text-[1.5rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor dark:text-slate-400 text-gray-400 overflow-hidden h-[43px] border border-border rounded-normal px-[9px] p-1 cursor-pointer"
          >
            <Sun
                :class="[
                  theme === 'dark' ? 'translate-y-[4px] rotate-0' : 'translate-y-[-80px] rotate-[160deg]',
                  'transition-all duration-500'
                ]"
            />
            <Moon
                :class="[
                  theme === 'light' ? 'translate-y-[-19px] rotate-0' : 'translate-y-[80px] rotate-[-260deg]',
                  'transition-all duration-500'
                ]"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!--  <div :class="[isSearchOpen ? 'visible z-[100]' : 'invisible z-[-1]', 'transition-all duration-500']">-->
  <!--    <Search :isSearchOpen="isSearchOpen" @update:isSearchOpen="val => isSearchOpen = val"/>-->
  <!--  </div>-->
</template>

<style scoped>
/* Optional fade and scale transitions */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Placeholder fade-slide transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
