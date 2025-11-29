<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import { normalButtonContents } from "@/Utils/ContentsConfig/ButtonsContents";
import { useScrollSpy } from "@/CustomHooks/useScrollSpy";

import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import AnimatedButtonPage from "../../../../../Pages/Components/Buttons/AnimatedButtonPage.vue";
import {
  AddToCartButtonPreviewCode,
  AppStoreButtonPreviewCode,
  ButtonsShapePreviewCode,
  DownloadButtonPreviewCode,
  NormalButtonPreviewCode,
  PlayStoreButtonPreviewCode,
  VariantsButtonPreviewCode,
} from "./PreviewCodes/ButtonPreviewCodes";

// Remove computed wrapper - extract directly
const sectionIds = normalButtonContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const normalButtonPreview = ref(true);
const normalButtonCode = ref(false);

const appStoreButtonPreview = ref(true);
const appStoreButtonCode = ref(false);

const playStoreButtonPreview = ref(true);
const playStoreButtonCode = ref(false);

const downloadButtonPreview = ref(true);
const downloadButtonCode = ref(false);

const addCartButtonPreview = ref(true);
const addCartButtonCode = ref(false);

const variantButtonPreview = ref(true);
const variantButtonCode = ref(false);

const shapeButtonPreview = ref(true);
const shapeButtonCode = ref(false);
</script>

<template>
  <aside
    class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="normal button" id="normal_button" />

      <ComponentDescription
        text="Buttons like this are used a lot on our websites and are very easy to create but you can copy the codes from here to save your time."
      />

      <ToggleTab
        :code="normalButtonCode"
        @update:code="(val) => (normalButtonCode = val)"
        :preview="normalButtonPreview"
        @update:preview="(val) => (normalButtonPreview = val)"
      />

      <ComponentWrapper>
        <div
          v-if="normalButtonPreview"
          class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <button
            class="px-6 py-2 border border-brandColor bg-brandColor text-secondary hover:bg-secondary hover:text-brandColor dark:hover:bg-transparent transition duration-300 rounded"
          >
            Button 1
          </button>

          <button
            class="px-6 py-2 border border-brandColor hover:bg-brandColor text-brandColor hover:text-secondary transition duration-300 rounded"
          >
            Button 2
          </button>

          <button
            class="px-6 py-2 dark:border-slate-800 dark:text-[#abc2d3] dark:bg-slate-800 dark:hover:bg-transparent dark:hover:text-[#abc2d3] border border-[#3e3939] bg-[#000000] text-secondary hover:bg-secondary hover:text-[#000] transition duration-300 rounded"
          >
            Button 3
          </button>

          <button
            class="px-6 py-2 border dark:border-slate-800 dark:text-[#abc2d3] dark:hover:bg-slate-800 border-[#3e3939] hover:bg-[#000000] text-[#000] hover:text-secondary transition duration-300 rounded"
          >
            Button 4
          </button>

          <button
            class="px-6 py-2 border border-[#9d3533] bg-[#DE3B37] text-secondary hover:bg-secondary hover:text-[#000] dark:hover:bg-transparent dark:hover:text-[#abc2d3] transition duration-300 rounded"
          >
            Button 5
          </button>

          <button
            class="px-6 py-2 border dark:text-[#abc2d3] border-[#9d3533] hover:bg-[#DE3B37] text-[#000] hover:text-secondary transition duration-300 rounded"
          >
            Button 6
          </button>
        </div>

        <ShowCode v-if="normalButtonCode" :code="NormalButtonPreviewCode" />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="Appstore button" id="appstore_button" />
      </div>

      <ComponentDescription
        text="Button designed for downloading or accessing apps on the App Store, linking directly to the app's store page."
      />

      <ToggleTab
        :code="appStoreButtonCode"
        @update:code="(val) => (appStoreButtonCode = val)"
        :preview="appStoreButtonPreview"
        @update:preview="(val) => (appStoreButtonPreview = val)"
      />

      <ComponentWrapper>
        <div
          v-if="appStoreButtonPreview"
          class="p-8 mb-4 flex flex-col items-center flex-wrap gap-5 justify-center"
        >
          <button
            class="px-6 py-2 bg-black dark:bg-slate-800 rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png"
              alt="apple logo"
              class="w-[35px]"
            />
            <div>
              <span class="text-[0.8rem] font-[500] text-secondary"
                >Download on the</span
              >
              <h3
                class="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary"
              >
                AppStore
              </h3>
            </div>
          </button>

          <button
            class="px-6 py-2 border border-text dark:border-slate-600 rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/6NFjc6z/download-removebg-preview.png"
              alt="apple logo"
              class="w-[32px]"
            />
            <div>
              <span
                class="text-text text-[0.8rem] dark:text-[#abc2d3] font-[500]"
                >Download on the</span
              >
              <h3
                class="text-[1.5rem] font-[500] dark:text-[#abc2d3] leading-[20px] mb-2"
              >
                AppStore
              </h3>
            </div>
          </button>

          <button
            class="px-6 py-2 bg-gradient-to-t from-pink-600 to-pink-300 rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png"
              alt="apple logo"
              class="w-[35px]"
            />
            <div>
              <span class="text-secondary text-[0.8rem] font-[500]"
                >Download on the</span
              >
              <h3
                class="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary"
              >
                AppStore
              </h3>
            </div>
          </button>
        </div>

        <ShowCode v-if="appStoreButtonCode" :code="AppStoreButtonPreviewCode" />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="playstore button" id="playstore_button" />
      </div>

      <ComponentDescription
        text="Button for downloading or accessing apps on the Play Store, linking directly to the app's store page."
      />

      <ToggleTab
        :code="playStoreButtonCode"
        @update:code="(val) => (playStoreButtonCode = val)"
        :preview="playStoreButtonPreview"
        @update:preview="(val) => (playStoreButtonPreview = val)"
      />

      <ComponentWrapper>
        <div
          v-if="playStoreButtonPreview"
          class="p-8 mb-4 flex flex-col items-center flex-wrap gap-5 justify-center"
        >
          <button
            class="px-6 py-2 bg-black dark:bg-slate-800 rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png"
              alt="playstore logo"
              class="w-[35px]"
            />
            <div class="flex items-start flex-col">
              <span class="text-[0.850rem] font-[500] text-secondary"
                >Get it on</span
              >
              <h3
                class="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary"
              >
                Google Play
              </h3>
            </div>
          </button>

          <button
            class="px-6 py-2 border dark:border-slate-600 border-text rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png"
              alt="playstore logo"
              class="w-[35px]"
            />
            <div class="flex items-start flex-col">
              <span
                class="text-[0.850rem] font-[500] dark:text-[#abc2d3] text-text"
                >Get it on</span
              >
              <h3
                class="text-[1.5rem] font-[500] dark:text-[#abc2d3] leading-[20px] mb-2"
              >
                Google Play
              </h3>
            </div>
          </button>

          <button
            class="px-6 py-2 bg-black dark:bg-slate-900 rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/0f4qnNX/images-removebg-preview.png"
              alt="playstore logo"
              class="w-[40px]"
            />
            <div class="flex items-start flex-col">
              <span class="text-[0.850rem] font-[500] text-secondary"
                >Get it on</span
              >
              <h3
                class="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary"
              >
                Google Play
              </h3>
            </div>
          </button>

          <button
            class="px-6 py-2 border dark:border-slate-600 border-text rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/p1c3nqd/download-3-removebg-preview.png"
              alt="playstore logo"
              class="w-[35px]"
            />
            <div class="flex items-start flex-col">
              <span
                class="text-[0.850rem] font-[500] dark:text-[#abc2d3] text-text"
                >Get it on</span
              >
              <h3
                class="text-[1.5rem] font-[500] dark:text-[#abc2d3] leading-[20px] mb-2"
              >
                Google Play
              </h3>
            </div>
          </button>

          <button
            class="px-6 py-2 bg-gradient-to-t from-pink-600 to-pink-300 rounded-md flex items-center gap-[17px]"
          >
            <img
              src="https://i.ibb.co/0f4qnNX/images-removebg-preview.png"
              alt="playstore logo"
              class="w-[40px]"
            />
            <div class="flex items-start flex-col">
              <span class="text-[0.850rem] font-[500] text-secondary"
                >Get it on</span
              >
              <h3
                class="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary"
              >
                Google Play
              </h3>
            </div>
          </button>
        </div>

        <ShowCode
          v-if="playStoreButtonCode"
          :code="PlayStoreButtonPreviewCode"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="download button" id="download_button" />
      </div>

      <ComponentDescription
        text="Button for initiating file or content downloads, providing a direct link to download resources."
      />

      <ToggleTab
        :code="downloadButtonCode"
        @update:code="(val) => (downloadButtonCode = val)"
        :preview="downloadButtonPreview"
        @update:preview="(val) => (downloadButtonPreview = val)"
      />

      <ComponentWrapper>
        <div
          v-if="downloadButtonPreview"
          class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <button
            class="px-4 py-2 bg-brandColor text-white text-[1.1rem] rounded-md flex items-center gap-[7px]"
          >
            <Icon icon="mdi:file-download-outline" class="text-[1.4rem]" />
            Download
          </button>

          <button
            class="px-4 py-2 border border-brandColor text-brandColor text-[1.1rem] rounded-md flex items-center gap-[7px]"
          >
            Download
            <Icon icon="mdi:file-download-outline" class="text-[1.4rem]" />
          </button>

          <button
            class="bg-brandColor text-white text-[1.1rem] rounded-md flex items-center"
          >
            <span class="px-4 py-2">Download</span>
            <div
              class="w-[40px] h-[43px] rounded-r-md bg-brandColor hover:bg-brandColor flex items-center justify-center"
            >
              <Icon icon="mdi:file-download-outline" class="text-[1.4rem]" />
            </div>
          </button>

          <button
            class="border border-brandColor text-brandColor text-[1.1rem] rounded-full flex items-center"
          >
            <div
              class="w-[36px] h-[36px] rounded-full bg-brandColor hover:bg-brandColor flex items-center justify-center ml-1"
            >
              <Icon
                icon="mdi:file-download-outline"
                class="text-[1.4rem] text-white"
              />
            </div>
            <span class="pr-4 pl-2 py-2">Download</span>
          </button>
        </div>

        <ShowCode v-if="downloadButtonCode" :code="DownloadButtonPreviewCode" />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="add to cart button" id="add_to_cart_button" />
      </div>

      <ComponentDescription
        text="Button that adds selected items to the shopping cart, streamlining the purchasing process."
      />

      <ToggleTab
        :code="addCartButtonCode"
        @update:code="(val) => (addCartButtonCode = val)"
        :preview="addCartButtonPreview"
        @update:preview="(val) => (addCartButtonPreview = val)"
      />

      <ComponentWrapper>
        <div
          v-if="addCartButtonPreview"
          class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <button
            class="px-4 py-2 bg-brandColor text-white text-[1.1rem] rounded-md flex items-center gap-[7px]"
          >
            <Icon icon="mdi:cart-outline" class="text-[1.4rem]" />
            Add to cart
          </button>

          <button
            class="border border-brandColor text-brandColor text-[1.1rem] rounded-full flex items-center"
          >
            <div
              class="w-[36px] h-[36px] rounded-full bg-brandColor hover:bg-brandColor flex items-center justify-center ml-1"
            >
              <Icon icon="mdi:cart-outline" class="text-[1.4rem] text-white" />
            </div>
            <span class="pr-4 pl-2 py-2">Add to cart</span>
          </button>
        </div>

        <ShowCode v-if="addCartButtonCode" :code="AddToCartButtonPreviewCode" />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="variants button" id="variants_button" />
      </div>

      <ComponentDescription
        text="Button with multiple design variants, allowing customization in style, color, and size to fit different use cases."
      />

      <ToggleTab
        :code="variantButtonCode"
        @update:code="(val) => (variantButtonCode = val)"
        :preview="variantButtonPreview"
        @update:preview="(val) => (variantButtonPreview = val)"
      />

      <ComponentWrapper>
        <div
          v-if="variantButtonPreview"
          class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <button
            class="px-4 py-2 bg-brandColor text-white text-[1.1rem] rounded-full flex items-center gap-[10px]"
          >
            <Icon icon="mdi:plus" class="text-[1.1rem]" />
            Create
          </button>

          <button
            class="bg-brandColor w-[40px] h-[40px] rounded-full flex items-center justify-center text-white"
          >
            <Icon icon="mdi:plus" />
          </button>

          <button
            class="bg-brandColor w-[40px] h-[40px] rounded-full flex items-center justify-center text-white"
          >
            <Icon icon="mdi:close" />
          </button>

          <button
            class="border border-brandColor text-brandColor w-[40px] h-[40px] rounded-full flex items-center justify-center"
          >
            <Icon icon="mdi:close" />
          </button>

          <button
            class="border border-brandColor text-brandColor w-[40px] h-[40px] rounded-md flex items-center justify-center"
          >
            <Icon icon="mdi:message-text-outline" class="text-[1.3rem]" />
          </button>

          <button
            class="border border-brandColor text-brandColor w-[40px] h-[40px] rounded-md flex items-center justify-center"
          >
            <Icon icon="mdi:delete-outline" class="text-[1.3rem]" />
          </button>

          <button
            class="bg-brandColor py-2 px-4 rounded-md flex items-center gap-[12px] text-[1rem] text-white"
          >
            View page
            <Icon icon="mdi:arrow-right" class="text-[1.1rem]" />
          </button>

          <button
            class="bg-brandColor py-2 px-4 rounded-md flex items-center gap-[8px] text-[1rem] text-white"
          >
            <Icon icon="mdi:pencil-outline" class="text-[1.1rem]" />
            Edit
          </button>

          <button
            class="border border-brandColor text-brandColor py-2 px-4 rounded-md flex items-center gap-[8px] text-[1rem]"
          >
            <Icon icon="mdi:code-tags" class="text-[1.2rem]" />
            Developer
          </button>
        </div>

        <ShowCode v-if="variantButtonCode" :code="VariantsButtonPreviewCode" />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="buttons shape" id="buttons_shape" />
      </div>

      <ComponentDescription
        text="Buttons with various shapes, offering options like rounded, square, or pill-shaped designs to match different UI styles."
      />

      <ToggleTab
        :code="shapeButtonCode"
        @update:code="(val) => (shapeButtonCode = val)"
        :preview="shapeButtonPreview"
        @update:preview="(val) => (shapeButtonPreview = val)"
      />

      <ComponentWrapper>
        <div
          v-if="shapeButtonPreview"
          class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <button
            class="py-2.5 px-6 border border-brandColor text-brandColor rounded-tr-[30px] rounded-bl-[30px] hover:bg-brandColor hover:text-white transition-all duration-200"
          >
            ZenUI Library
          </button>

          <button
            class="py-2.5 px-6 border border-brandColor text-brandColor rounded-tl-[30px] rounded-br-[30px] hover:bg-brandColor hover:text-white transition-all duration-200"
          >
            ZenUI Library
          </button>
        </div>

        <ShowCode v-if="shapeButtonCode" :code="ButtonsShapePreviewCode" />
      </ComponentWrapper>

      <div class="mt-8">
        <AnimatedButtonPage />
      </div>

      <OverviewFooter
        backUrl="/components/otp-input"
        backName="OTP input"
        forwardName="auth button"
        forwardUrl="/components/auth-buttons"
      />
    </div>

    <ContentNavbar
      :contents="normalButtonContents"
      :activeSection="activeSection"
    />
  </aside>
</template>
