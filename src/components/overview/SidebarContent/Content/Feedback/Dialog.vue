<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {dialogContents} from "@/Utils/ContentsConfig/FeedbackContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const sectionIds = dialogContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// backgroundPreview
const basicDialogPreview = ref(true);
const basicDialogCode = ref(false);

// alert dialog
const alertDialogPreview = ref(true);
const alertDialogCode = ref(false);

// handle dialog message
const isDialogOpen = ref(false);
const dialogValue = ref("please select");
// handel alert dialog message
const isAlertDialogOpen = ref(false);

const handleDialogAction = (e) => {
  let element = e.target;
  dialogValue.value = element.innerText;
  isDialogOpen.value = false;
};
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div>
      <ContentHeader text="basic dialog" id="basic_dialog"/>

      <ComponentDescription
          text="This is a dialog component. Display important messages, prompts, or actions in a focused modal window."
      />

      <ToggleTab
          :code="basicDialogCode"
          @update:code="(val) => (basicDialogCode = val)"
          @update:preview="(val) => (basicDialogPreview = val)"
          :preview="basicDialogPreview"
      />

      <ComponentWrapper>
        <div v-if="basicDialogPreview" class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
          <div class="flex items-center flex-col gap-5">
            <p>Selected: {{ dialogValue }}</p>

            <button
                class="px-6 py-2 border border-[#36af7b] outline-none rounded text-[#36af7b]"
                @click="isDialogOpen = true"
            >
              Open Simple Dialog
            </button>

            <div
                v-if="isDialogOpen"
                class="bg-[#00000027] z-[200000000000] fixed flex items-center justify-center top-0 left-0 w-full h-screen"
            >
              <div
                  class="absolute top-0 left-0 h-full w-full cursor-pointer backdrop-blur-[3px]"
                  @click="isDialogOpen = false"
              ></div>
              <div
                  class="w-[300px] h-auto py-3 dark:bg-slate-800 rounded-lg bg-secondary relative z-10"
                  @click="handleDialogAction"
              >
                <div class="w-full flex items-end justify-end px-3">
                  <Icon
                      icon="radix-icons:cross-1"
                      class="text-[2rem] dark:text-slate-200 dark:bg-slate-900/40 p-2 bg-[#3d3d3d18] text-[#222222] rounded-full cursor-pointer"
                      @click="isDialogOpen = false"
                  />
                </div>
                <h1 class="text-[1.2rem] text-text dark:text-[#abc2d3] font-[500] px-6 py-3">
                  Set backup account
                </h1>
                <h2
                    class="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300 dark:text-[#abc2d3] dark:hover:bg-slate-900/40"
                >
                  <span
                      class="text-[#1b703f] py-[9px] px-2.5 dark:bg-green-800/30 dark:text-green-500 rounded-full bg-[#15a7522d]">
                    <Icon
                        icon="fa:user"
                        class="text-[1.3rem]"
                    />
                  </span>
                  user@gmail.com
                </h2>
                <h2
                    class="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300 dark:text-[#abc2d3] dark:hover:bg-slate-900/40"
                >
                  <span
                      class="text-[#1b703f] py-[9px] px-2.5 dark:bg-green-800/30 dark:text-green-500 rounded-full bg-[#15a7522d]">
                    <Icon
                        icon="fa:user"
                        class="text-[1.3rem]"
                    />
                  </span>
                  user02@gmail.com
                </h2>
                <h2
                    class="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300 dark:text-[#abc2d3] dark:hover:bg-slate-900/40"
                >
                  <span
                      class="py-[9px] px-2.5 text-[#303030] p-2 dark:text-gray-300 dark:bg-gray-700 rounded-full bg-[#3d3d3d2c]">
                    <Icon
                        icon="fa6-solid:plus"
                        class="text-[1.3rem]"
                    />
                  </span>
                  Add Account
                </h2>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="alert dialog" id="alert_dialog"/>
      </div>

      <ComponentDescription
          text="An alert dialog component displays critical information or requests user confirmation."
      />

      <ToggleTab
          :code="alertDialogCode"
          @update:code="(val) => (alertDialogCode = val)"
          :preview="alertDialogPreview"
          @update:preview="(val) => (alertDialogPreview = val)"
      />

      <ComponentWrapper>
        <div v-if="alertDialogPreview" class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
          <div class="flex items-center flex-col gap-5">
            <button
                class="px-6 py-2 border border-[#36af7b] outline-none rounded text-[#36af7b]"
                @click="isAlertDialogOpen = true"
            >
              Open Simple Dialog
            </button>

            <div
                v-if="isAlertDialogOpen"
                class="bg-[#00000027] z-[2000000000] fixed flex items-center justify-center top-0 left-0 w-full h-screen"
            >
              <div
                  class="absolute top-0 left-0 h-full w-full cursor-pointer backdrop-blur-[3px]"
                  @click="isAlertDialogOpen = false"
              ></div>
              <div
                  class="max-w-md w-[90vw] dark:bg-slate-800 h-auto bg-white rounded-lg relative z-10 p-6">
                <h1 class="font-semibold dark:text-[#abc2d3] text-xl mb-2">
                  Delete Item
                </h1>
                <p class="text-gray-600 dark:text-slate-400 mb-2">
                  Are you sure you want to delete this? This action
                  cannot be undone.
                </p>
                <div class="w-full flex mt-8 items-center justify-end gap-2">
                  <button
                      class="font-semibold px-3 dark:hover:bg-red-800/20 py-2.5 hover:bg-red-50 rounded text-sm uppercase text-red-500"
                      @click="isAlertDialogOpen = false"
                  >
                    Cancel
                  </button>
                  <button
                      class="font-semibold px-3 py-2.5 bg-[#36af7b] rounded text-sm uppercase text-white"
                      @click="isAlertDialogOpen = false"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/alert-message"
          backName="alert message"
          forwardName="testimonial"
          forwardUrl="/components/testimonials"
      />
    </div>

    <ContentNavbar :contents="dialogContents" :activeSection="activeSection"/>

  </aside>
</template>