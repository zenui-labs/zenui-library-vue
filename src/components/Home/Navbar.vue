<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {RouterLink, useRoute, useRouter} from 'vue-router'
import CommandIcon from '@/SvgIcons/CommandIcon.vue'
import {useGitHubStars} from '@/CustomHooks/useGithubStars.js'
import {Icon} from "@iconify/vue"

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
          <img
              src="/logo.png"
              alt="logo"
              class="w-[70px] cursor-pointer z-10"
              @click="router.push('/')"
          />
          <span
              class='absolute top-1 right-[-38px] border border-gray-200 rounded-full text-[0.7rem] text-text bg-gray-50 pb-[0.5px] px-2'>Beta</span>
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
              class="dark:text-darkTextColor cursor-pointer py-[23px] hover:text-[#0FABCA] transition-all duration-200"
          >
            Documentation
          </RouterLink>

          <RouterLink
              to="/components/all-components"
              class="dark:text-darkTextColor cursor-pointer hover:text-[#0FABCA] transition-all duration-200"
          >
            Components
          </RouterLink>

        </ul>
      </div>

      <div class="flex items-center gap-2">
        <div class="zenuiSearchInput relative w-full" @click="handleSearchClick">
          <Icon icon="circum:search" width="24" height="24"
                class="text-gray-400 absolute dark:text-slate-400 left-3 top-[0.65rem]"/>
          <transition-group name="fade-slide" tag="div">
            <p
                key="search-placeholder"
                class="text-[0.9rem] dark:text-slate-400 text-gray-400 absolute top-[11px] left-[42px]"
            >
              {{ searchPlaceholderText }}
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
            <Icon icon="iconoir:github"
                  class="text-[2.8rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor transition-all duration-500 dark:text-slate-400 text-gray-400 rounded-normal p-[9px] border border-gray-200 cursor-pointer"
            />
          </a>

          <div
              @click="toggleTheme"
              class="text-[1.5rem] hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-darkBorderColor dark:text-slate-400 text-gray-400 overflow-hidden h-[43px] border border-border rounded-normal px-[9px] p-1 cursor-pointer"
          >
            <Icon icon="bitcoin-icons:sun-outline" class="translate-y-0.5 text-[1.9rem]"
            />
            <!--            <Icon icon="bitcoin-icons:sun-outline" width="24" height="24"-->
            <!--                  :class="[-->
            <!--                  theme === 'dark' ? 'translate-y-[4px] rotate-0' : 'translate-y-[-80px] rotate-[160deg]',-->
            <!--                  'transition-all duration-500'-->
            <!--                ]"-->
            <!--            />-->
            <!--            <Icon icon="tabler:moon-filled" width="24" height="24"-->
            <!--                  :class="[-->
            <!--                  theme === 'light' ? 'translate-y-[-19px] rotate-0' : 'translate-y-[80px] rotate-[-260deg]',-->
            <!--                  'transition-all duration-500'-->
            <!--                ]"-->
            <!--            />-->
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
