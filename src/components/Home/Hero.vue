<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {ArrowRight} from 'lucide-vue-next'

// If you have a store (like Pinia)

const router = useRouter();
// const { theme } = useZenuiStore();

const darkModeWithDelay = ref(false);
// let timer, notDarkMode;
//
// watch(
//     () => theme.value,
//     (newTheme) => {
//       clearTimeout(timer);
//       clearTimeout(notDarkMode);
//
//       timer = setTimeout(() => {
//         if (newTheme === "dark") darkModeWithDelay.value = true;
//       }, 500);
//
//       notDarkMode = setTimeout(() => {
//         if (newTheme !== "dark") darkModeWithDelay.value = false;
//       }, 200);
//     },
//     { immediate: true }
// );
//
// onBeforeUnmount(() => {
//   clearTimeout(timer);
//   clearTimeout(notDarkMode);
// });
//
// const goTo = (path) => {
//   router.push(path);
// };
</script>

<template>
  <main
      :class="[
      darkModeWithDelay
        ? 'bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#212121_1px,transparent_1px)]'
        : 'bg-[linear-gradient(to_right,#e3e3e32e_1px,transparent_1px),linear-gradient(to_bottom,#e3e3e32e_1px,transparent_1px)]',
      'py-16 640px:py-0 w-full min-h-screen 1024px:min-h-[calc(100vh-50px)] flex items-center justify-center bg-[size:30px_30px] relative'
    ]"
  >
    <!-- Decorative gradient blobs -->
    <div
        class="absolute rotate-[-45deg] 640px:rotate-[-60deg] -top-16 640px:-top-[220px] left-0 blur-[43px] 640px:blur-[45px] w-[60px] h-[200px] 640px:h-[500px] rounded-full bg-gradient-to-b from-brandColor/60 to-brandColor/20 dark:from-white/90 dark:to-white/10"
    ></div>
    <div
        class="absolute rotate-[45deg] 640px:rotate-[60deg] -top-16 640px:-top-[220px] right-0 blur-[43px] 640px:blur-[45px] w-[60px] h-[200px] 640px:h-[500px] rounded-full bg-gradient-to-b from-brandColor/60 to-brandColor/20 dark:from-white/90 dark:to-white/10"
    ></div>

    <div class="px-8 max-w-[1700px] mx-auto">
      <div class="1024px:w-[80%] 1360px:w-[65%] text-center mx-auto w-full">
        <button
            class="py-1.5 pl-5 cursor-text dark:border-slate-500 dark:text-darkTextColor backdrop-blur-md pr-6 text-[0.8rem] 640px:text-[0.9rem] border mb-4 border-border rounded-full"
        >
          ✨ Introducing ZenUI VueJS Library
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
              class="py-3.5 px-6 640px:px-8 bg-gray-800 text-white rounded-high hover:bg-brandColor/90 transition-all flex items-center justify-center gap-3 duration-300 group"
          >
            Browse Components
            <ArrowRight/>
          </button>
          <!--          <button-->
          <!--              @click="goTo('/templates')"-->
          <!--              class="py-[11px] px-8 z-10 border-2 border-[#0FABCA] text-[#0FABCA] rounded-high transition-all flex items-center justify-center gap-3 duration-300 group"-->
          <!--          >-->
          <!--            Browse Templates-->
          <!--            <ArrowRight />-->
          <!--          </button>-->
        </div>

        <div class="flex items-center gap-5 justify-center mt-6">
          <!--          <a href="https://react.dev/learn" target="_blank" rel="noreferrer">-->
          <!--            <FaReact-->
          <!--                class="text-[1.8rem] hover:scale-[1.2] transition-all duration-300 dark:text-darkSubTextColor text-gray-500"-->
          <!--            />-->
          <!--          </a>-->
          <!--          <a href="https://v3.tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">-->
          <!--            <BiLogoTailwindCss-->
          <!--                class="text-[2.2rem] hover:scale-[1.2] transition-all duration-300 dark:text-darkSubTextColor text-gray-500"-->
          <!--            />-->
          <!--          </a>-->
          <!--          <a href="https://motion.dev/docs" target="_blank" rel="noreferrer">-->
          <!--            <TbBrandFramerMotion-->
          <!--                class="text-[1.8rem] hover:scale-[1.2] transition-all duration-300 dark:text-darkSubTextColor text-gray-500"-->
          <!--            />-->
          <!--          </a>-->
          <!--          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">-->
          <!--            <TbBrandNextjs-->
          <!--                class="text-[1.8rem] hover:scale-[1.2] transition-all duration-300 dark:text-darkSubTextColor text-gray-500"-->
          <!--            />-->
          <!--          </a>-->
        </div>
      </div>
    </div>
  </main>
</template>
