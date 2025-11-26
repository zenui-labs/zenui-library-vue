<script setup>
import {computed, ref} from 'vue';
import {useZenuiStore} from '@/Store/Index.js';
import SectionWrapper from "@/components/Home/SectionWrapper.vue";
import {Icon} from '@iconify/vue';
import {ZENUI_REACT_DOMAIN} from "@/Constant/Index.js";

const props = defineProps({
  needMuchMargin: {
    type: Boolean,
    default: true
  }
});

const store = useZenuiStore();
const theme = computed(() => store.theme);

const result = ref('');
const inputValue = ref('');

const onSubmitSubscribe = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append('access_key', 'a60501d5-436f-454c-9d4f-a716f4d286c7');

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    result.value = 'Subscription successful! Thank you for joining us.';
    event.target.reset();
    inputValue.value = '';
    setTimeout(() => {
      result.value = '';
    }, 4000);
  } else {
    console.log('Error', data);
  }
};
</script>


<template>
  <footer
      :class="[
      needMuchMargin ? 'mt-16' : 'mt-8',
      '1404px:px-12 w-full border-t border-gray-100 pb-8 transition-all duration-500 dark:border-darkBorderColor/70'
    ]"
  >
    <SectionWrapper class="mt-8 max-w-[1600px]">
      <div class="w-full flex 640px:flex-row flex-col flex-wrap 1024px:gap-0 gap-8 justify-between items-start">
        <div class="w-full 640px:w-[40%] 1024px:w-[28%]">
          <img src="/footer_logo.png" alt="logo" class="w-[150px] 640px:w-[180px] my-3"/>

          <p class="dark:text-darkSubTextColor text-black/70 text-[1rem]">
            Elevate your project with free UI components, customizable icons, and a color palette. No
            dependencies required.
          </p>

          <div class="flex items-center gap-3.5 mt-8">
            <a href="https://web.facebook.com/zenuilabs" target="_blank" rel="noreferrer">
              <Icon icon="ic:baseline-facebook"
                    class="text-black/50 dark:text-darkSubTextColor text-[1.8rem] hover:text-[#3fb682] transition-colors duration-300"
              />
            </a>

            <a href="https://www.linkedin.com/company/zenui-labs/" target="_blank" rel="noreferrer">
              <Icon icon="mdi:linkedin"
                    class="text-black/50 dark:text-darkSubTextColor text-[1.8rem] hover:text-[#3fb682] transition-colors duration-300"
              />
            </a>

            <a href="https://x.com/zenuilabs" target="_blank" rel="noreferrer">
              <Icon icon="ri:twitter-x-line"
                    class="text-black/50 dark:text-darkSubTextColor text-[1.8rem] hover:text-[#3fb682] transition-colors duration-300"
              />
            </a>

            <a href="mailto:zenuilibrary@gmail.com">
              <Icon icon="simple-icons:gmail"
                    class="text-black/50 dark:text-darkSubTextColor text-[1.8rem] hover:text-[#3fb682] transition-colors duration-300"
              />
            </a>
          </div>
        </div>

        <div class="flex gap-2 flex-col mt-4">
          <h3 class="font-[600] dark:text-darkTextColor text-[20px] capitalize">tools</h3>
          <ul class="footer font-[400] text-black/70 dark:text-darkSubTextColor mt-2 text-[1rem] flex flex-col gap-2">
            <li>
              <p><a :href="`${ZENUI_REACT_DOMAIN}/shortcut-generator`"
                    target="_blank">ShortKey</a>
              </p>
              <span><a :href="`${ZENUI_REACT_DOMAIN}/shortcut-generator`"
                       target="_blank">ShortKey</a>
              </span>
            </li>
            <li>
              <p><a :href="`${ZENUI_REACT_DOMAIN}/color-palette`"
                    target="_blank">Colors Palette</a></p>
              <span><a :href="`${ZENUI_REACT_DOMAIN}/color-palette`"
                       target="_blank">Colors Palette</a></span>
            </li>
            <li>
              <p><a :href="`${ZENUI_REACT_DOMAIN}/icons`"
                    target="_blank">Icons</a></p>
              <span><a :href="`${ZENUI_REACT_DOMAIN}/icons`"
                       target="_blank">Icons</a></span>
            </li>
            <li>
              <p><a :href="`${ZENUI_REACT_DOMAIN}/config-generator`"
                    target="_blank">Config AI</a></p>
              <span><a :href="`${ZENUI_REACT_DOMAIN}/config-generator`"
                       target="_blank">Config AI</a></span>
            </li>
          </ul>
        </div>

        <div class="flex gap-2 flex-col mt-4">
          <h3 class="font-[600] dark:text-darkTextColor text-[20px] capitalize">Products</h3>
          <ul class="footer font-[400] text-black/70 dark:text-darkSubTextColor mt-2 text-[1rem] flex flex-col gap-2">
            <li>
              <p><a href='https://react-ui.zenui.net/' target='_blank' rel='noreferrer'>ZenUI Library
                React</a></p>
              <span><a href='https://react-ui.zenui.net/' target='_blank'
                       rel='noreferrer'>ZenUI Library React</a></span>
            </li>
            <li>
              <p><a href='https://react-hooks.zenui.net/' target='_blank' rel='noreferrer'>React
                Hooks</a></p>
              <span><a href='https://react-hooks.zenui.net/' target='_blank' rel='noreferrer'>React Hooks</a></span>
            </li>
            <li>
              <p><a href='https://color-picker.zenui.net/' target='_blank' rel='noreferrer'>ZenUI
                Color Picker</a></p>
              <span><a href='https://color-picker.zenui.net/' target='_blank'
                       rel='noreferrer'>ZenUI Color Picker</a></span>
            </li>
            <li>
              <p><a href='https://readmestudio.zenui.net/' target='_blank' rel='noreferrer'>Readme
                Studio</a></p>
              <span><a href='https://readmestudio.zenui.net/' target='_blank' rel='noreferrer'>Readme Studio</a></span>
            </li>
            <li>
              <p><a href='https://www.npmjs.com/package/zenui-image-react' target='_blank'
                    rel='noreferrer'>ZenUI Image React</a></p>
              <span><a href='https://www.npmjs.com/package/zenui-image-react' target='_blank'
                       rel='noreferrer'>ZenUI Image React</a></span>
            </li>
          </ul>
        </div>

        <div class="flex gap-2 flex-col mt-4">
          <h3 class="font-[600] dark:text-darkTextColor text-[20px] capitalize">Company</h3>
          <ul class="footer font-[400] text-[1rem] dark:text-darkSubTextColor mt-2 text-black/70 flex flex-col gap-2">
            <li>
              <p><a href="/privacy-policy">Privacy policy</a></p>
              <span><a href="/privacy-policy">Privacy policy</a></span>
            </li>
            <li>
              <p>
                <a
                    href="https://github.com/zenui-labs/zenui-library-vue/releases"
                    target="_blank"
                    class="flex items-center gap-1"
                    rel="noreferrer"
                >
                  Changelog
                  <GoArrowUpRight class="text-[1.1rem] mt-0.5"/>
                </a>
              </p>
              <span>
                <a
                    href="https://github.com/zenui-labs/zenui-library-vue/releases"
                    target="_blank"
                    class="flex items-center gap-1"
                    rel="noreferrer"
                >
                  Changelog
                  <GoArrowUpRight class="text-[1.1rem] mt-0.5"/>
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div class="flex gap-2 flex-col mt-4">
          <h3 class="font-[600] dark:text-darkTextColor text-[20px] capitalize">Join our newsletter</h3>

          <form @submit="onSubmitSubscribe" class="mt-2">
            <label
                for="email"
                class="text-black/70 text-[0.9rem] dark:text-darkSubTextColor font-[400] mb-2"
            >
              Your Email
            </label>
            <div class="relative mt-1">
              <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  v-model="inputValue"
                  placeholder="example@gmail.com"
                  class="py-3 pl-4 pr-[120px] border dark:text-darkTextColor dark:placeholder:text-darkSubTextColor/50 focus:border-[#3fb682] dark:border-darkBorderColor w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none"
              />
              <button
                  type="submit"
                  class="absolute top-0 h-full right-0 px-4 text-white bg-[#3fb682] rounded-r-md transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p class="text-[14px] text-[#3fb682]">{{ result }}</p>
        </div>
      </div>

      <div
          class="mt-14 1024px:mx-auto flex w-[250px] flex-wrap 1024px:flex-nowrap 1024px:items-center 1024px:justify-center 1024px:w-[500px] gap-4 1024px:gap-5"
      >
        <a
            href="https://web.facebook.com/share/g/D8DbMaprfWPksSGF/"
            target="_blank"
            class="border border-blue-600 rounded-high flex w-full py-[5px] px-2.5 gap-3 items-center"
            rel="noreferrer"
        >
          <img
              src="https://i.ibb.co.com/vJynhGR/Facebook-Logo-2023.png"
              alt="facebook"
              class="w-[28px]"
          />

          <div>
            <h4 class="text-[0.9rem] leading-[22px] font-[600] dark:text-darkTextColor text-blue-600">
              Facebook Community
            </h4>
            <p class="text-[0.7rem] font-[300] dark:text-darkSubTextColor text-gray-700">180+ Members</p>
          </div>
        </a>

        <!--        <a-->
        <!--            v-if="theme === 'dark'"-->
        <!--            href="https://www.producthunt.com/posts/zenui-library-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-zenui&#0045;library&#0045;2"-->
        <!--            class="cursor-pointer w-full rounded-md flex items-center gap-[14px]"-->
        <!--            target="_blank"-->
        <!--            rel="noreferrer"-->
        <!--        >-->
        <!--          <img-->
        <!--              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=490875&theme=dark&t=1746465887663"-->
        <!--              alt="ZENUI&#0032;LIBRARY - Free&#0032;Templates&#0044;&#0032;Components&#0032;&#0038;&#0032;Icons&#0032;for&#0032;Developers | Product Hunt"-->
        <!--          />-->
        <!--        </a>-->
        <!--        <a-->
        <!--            v-else-->
        <!--            href="https://www.producthunt.com/posts/zenui-library-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-zenui&#0045;library&#0045;2"-->
        <!--            class="cursor-pointer w-full rounded-md flex items-center gap-[14px]"-->
        <!--            target="_blank"-->
        <!--            rel="noreferrer"-->
        <!--        >-->
        <!--          <img-->
        <!--              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=490875&theme=light&t=1746458743385"-->
        <!--              alt="ZENUI&#0032;LIBRARY - Free&#0032;Templates&#0044;&#0032;Components&#0032;&#0038;&#0032;Icons&#0032;for&#0032;Developers | Product Hunt"-->
        <!--          />-->
        <!--        </a>-->

        <a
            href="https://discord.gg/ysqmqNapZW"
            target="_blank"
            class="border border-blue-400 rounded-high flex w-full py-[5px] px-2.5 gap-2 items-center"
            rel="noreferrer"
        >
          <img
              src="https://i.ibb.co.com/V07rXpTJ/download.png"
              alt="facebook"
              class="w-[30px] rounded-full"
          />

          <div>
            <h4 class="text-[0.9rem] leading-[22px] font-[600] dark:text-darkTextColor text-blue-500">
              Discord Community
            </h4>
            <p class="text-[0.7rem] font-[300] dark:text-darkSubTextColor text-gray-700">120+ Members</p>
          </div>
        </a>
      </div>

      <div
          class="w-full border-t dark:border-darkBorderColor/30 border-gray-100 flex items-center 425px:flex-row flex-col 425px:gap-0 gap-5 justify-center mt-12 pt-6"
      >
        <p class="text-gray-400 dark:text-darkSubTextColor/70 font-normal text-center text-[0.8rem]">
          A product of
          <a href="https://zenui.net" target="_blank" class="text-brandColor">@zenui-labs</a>
        </p>
      </div>
    </SectionWrapper>
  </footer>
</template>