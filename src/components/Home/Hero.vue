<script setup>
import {useRouter} from "vue-router";
import {Icon} from '@iconify/vue';

const router = useRouter();
</script>

<template>
  <main
      :class="['py-16 640px:py-0 w-full min-h-[85dvh] 1024px:min-h-[calc(100dvh-50px)] flex items-center justify-center bg-[size:30px_30px] relative'
    ]"
  >
    <div
        class="absolute rotate-[-45deg] 640px:rotate-[-60deg] -top-16 640px:-top-[220px] left-0 blur-[43px] 640px:blur-[45px] w-[60px] h-[200px] 640px:h-[500px] rounded-full bg-gradient-to-b from-brandColor/60 to-brandColor/20 dark:from-white/90 dark:to-white/10"
    ></div>
    <div
        class="absolute rotate-[45deg] 640px:rotate-[60deg] -top-16 640px:-top-[220px] right-0 blur-[43px] 640px:blur-[45px] w-[60px] h-[200px] 640px:h-[500px] rounded-full bg-gradient-to-b from-brandColor/60 to-brandColor/20 dark:from-white/90 dark:to-white/10"
    ></div>

    <div class="px-8 max-w-[1700px] mx-auto">
      <div class="1024px:w-[80%] 1360px:w-[70%] text-center mx-auto w-full">
        <button
            class="py-1.5 pl-5 cursor-text dark:border-slate-500 dark:text-darkTextColor backdrop-blur-md pr-6 text-[0.8rem] 640px:text-[0.9rem] border mb-4 border-border rounded-full"
        >
          ✨ Introducing ZenUI Vue Library
        </button>

        <h1
            class="text-[2.5rem] font-bold 640px:text-[3.2rem] 1024px:text-[4rem] leading-[3.2rem] 640px:leading-[4rem] 1024px:leading-[5rem] transition-all duration-700 dark:text-darkTextColor"
        >
          An Open-Source UI Components Library for <span class="text-brandColor">Vue Developers</span>
        </h1>

        <p
            class="dark:text-darkSubTextColor text-gray-500 w-full 640px:w-[90%] mt-4 640px:mt-3 1024px:w-[85%] mx-auto font-[400] text-[1rem] 1024pxtext-[1.1rem]"
        >
          ZenUI is your all-in-one Vue3 + Tailwind CSS component library. Ready to use UI components for faster your
          development workflow.
        </p>

        <div
            class="flex items-center flex-col 640px:flex-row gap-3 justify-center 425px:gap-6 mt-10 640px:mt-12"
        >
          <button
              type="button"
              @click="router.push('/components/all-components')"
              class="py-3.5 px-6 640px:px-8 text-white rounded-high bg-brandColor/90 hover:bg-brandColor transition-all flex items-center justify-center gap-2 duration-300 group"
          >
            <Icon icon="fluent-mdl2:web-components" class="text-[1.4rem]"/>
            Browse Components
          </button>
          <a href="https://github.com/zenui-labs/zenui-library-vue"
             target="_blank"
             @click="router.push('/components/all-components')"
             class="py-3.5 px-6 640px:px-8 bg-gray-800 text-white rounded-high hover:bg-gray-700 transition-all flex items-center justify-center gap-2 duration-300 group"
          >
            <Icon icon="mynaui:star" class="text-[1.5rem]"/>
            Star Us On Github
          </a>
        </div>

        <div class="flex items-center gap-5 justify-center mt-6">
        </div>
      </div>
    </div>
  </main>
</template>
