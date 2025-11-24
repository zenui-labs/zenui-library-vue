<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {alertMessageContents} from "@/Utils/ContentsConfig/FeedbackContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import {Icon} from "@iconify/vue";
import {
  AlertWithActionCodes,
  AlertWithTitleCodes,
  BackgroundAlertMessageCodes,
  BorderedAlertMessageCodes
} from "@/components/overview/SidebarContent/Content/Feedback/PreviewCodes/AlertMessagePreviewCodes.js";

const sectionIds = alertMessageContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const backgroundPreview = ref(true);
const backgroundCode = ref(false);

const alertWithTitlePreview = ref(true);
const alertWithTitleCode = ref(false);

const borderPreview = ref(true);
const borderCode = ref(false);

const alertActionPreview = ref(true);
const alertActionCode = ref(false);
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div class="w-full 425px:w-[80%]">
      <ContentHeader
          text="alert message with background"
          id="alert_message_with_background"
      />

      <ComponentDescription
          text="This is an alert message with background colors matched to different error types for clear visibility."
      />

      <ToggleTab
          :code="backgroundCode"
          @update:preview="(val) => (backgroundPreview = val)"
          @update:code="(val) => (backgroundCode = val)"
          :preview="backgroundPreview"
      />

      <ComponentWrapper>
        <div v-if="backgroundPreview" class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
          <div class="w-full h-full flex flex-col gap-4">
            <div class="p-3 flex items-center gap-3 dark:bg-green-800/40 bg-[#edf7ed] rounded-lg">
              <Icon
                  icon="icon-park-outline:done-all"
                  class="text-[#418944] dark:text-green-500 text-[1.5rem]"
              />
              <p class="text-[#418944] text-[1rem] dark:text-green-500">
                This is a success Alert.
              </p>
            </div>

            <div class="p-3 flex items-center gap-3 dark:bg-blue-800/40 bg-[#e5f6fd] rounded-lg">
              <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem] dark:text-blue-500"/>
              <p class="text-[#2d9dda] text-[1rem] dark:text-blue-500">
                This is a info Alert.
              </p>
            </div>

            <div class="p-3 flex items-center gap-3 dark:bg-red-800/40 bg-[#fdeded] rounded-lg">
              <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem] dark:text-red-500"/>
              <p class="text-[#d74242] text-[1rem] dark:text-red-500">
                This is a error Alert.
              </p>
            </div>

            <div class="p-3 flex items-center gap-3 dark:bg-orange-800/40 bg-[#fff4e5] rounded-lg">
              <Icon
                  icon="bx:error"
                  class="text-[#f18831] text-[1.5rem] dark:text-orange-500"
              />
              <p class="text-[#f18831] text-[1rem] dark:text-orange-500">
                This is a warning Alert.
              </p>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="BackgroundAlertMessageCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="alert message with title"
            id="alert_message_with_title"
        />
      </div>

      <ComponentDescription
          text="This is an alert message with a title and background colors matched to different error types for clear identification."
      />

      <ToggleTab
          :code="alertWithTitleCode"
          :preview="alertWithTitlePreview"
          @update:code="(val) => (alertWithTitleCode = val)"
          @update:preview="(val) => (alertWithTitlePreview = val)"
      />

      <ComponentWrapper>
        <div v-if="alertWithTitlePreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full h-full flex flex-col gap-4">
            <div class="p-3 flex gap-3 dark:bg-green-800/40 bg-[#edf7ed] rounded-lg">
              <Icon
                  icon="icon-park-outline:done-all"
                  class="text-[#418944] text-[1.5rem] dark:text-green-600"
              />
              <div class="flex flex-col gap-1">
                <h2 class="text-[#418944] text-[1.2rem] font-[500] dark:text-green-600">
                  Message Title
                </h2>
                <p class="text-[#418944] text-[1rem] dark:text-green-600">
                  This is a success Alert.
                </p>
              </div>
            </div>

            <div class="p-3 flex gap-3 dark:bg-blue-800/40 bg-[#e5f6fd] rounded-lg">
              <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem] dark:text-blue-500"/>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#2d9dda] text-[1.2rem] font-[500] dark:text-blue-500">
                  Message Title
                </h2>
                <p class="text-[#2d9dda] text-[1rem] dark:text-blue-500">
                  This is a info Alert.
                </p>
              </div>
            </div>

            <div class="p-3 flex gap-3 dark:bg-red-800/40 bg-[#fdeded] rounded-lg">
              <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem] dark:text-red-500"/>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#d74242] text-[1.2rem] font-[500] dark:text-red-500">
                  Message Title
                </h2>
                <p class="text-[#d74242] text-[1rem] dark:text-red-500">
                  This is a error Alert.
                </p>
              </div>
            </div>

            <div class="p-3 flex gap-3 dark:bg-orange-800/40 bg-[#fff4e5] rounded-lg">
              <Icon
                  icon="bx:error"
                  class="text-[#f18831] text-[1.5rem] dark:text-orange-500"
              />
              <div class="flex flex-col gap-1">
                <h2 class="text-[#f18831] text-[1.2rem] font-[500] dark:text-orange-500">
                  Message Title
                </h2>
                <p class="text-[#f18831] text-[1rem] dark:text-orange-500">
                  This is a warning Alert.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="AlertWithTitleCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="alert message with border"
            id="alert_message_with_border"
        />
      </div>

      <ComponentDescription
          text="This is an alert message with a title and border colors matched to different error types for clear identification."
      />

      <ToggleTab
          :code="borderCode"
          @update:preview="(val) => (borderPreview = val)"
          @update:code="(val) => (borderCode = val)"
          :preview="borderPreview"
      />

      <ComponentWrapper>
        <div v-if="borderPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full h-full flex flex-col gap-4">
            <div class="p-3 flex items-center gap-3 border-[2px] border-[#418944] rounded-lg">
              <Icon icon="icon-park-outline:done-all" class="text-[#418944] text-[1.5rem]"/>
              <p class="text-[#418944] text-[1rem]">
                This is a success Alert.
              </p>
            </div>

            <div class="p-3 flex items-center gap-3 border-[2px] border-[#2d9dda] rounded-lg">
              <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem]"/>
              <p class="text-[#2d9dda] text-[1rem]">
                This is a info Alert.
              </p>
            </div>

            <div class="p-3 flex items-center gap-3 border-[2px] border-[#d74242] rounded-lg">
              <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem]"/>
              <p class="text-[#d74242] text-[1rem]">
                This is a error Alert.
              </p>
            </div>

            <div class="p-3 flex items-center gap-3 border-[2px] border-[#f18831] rounded-lg">
              <Icon icon="bx:error" class="text-[#f18831] text-[1.5rem]"/>
              <p class="text-[#f18831] text-[1rem]">
                This is a warning Alert.
              </p>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="BorderedAlertMessageCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="message take action"
            id="message_take_action"
        />
      </div>

      <ComponentDescription
          text="This is an alert message with a title, border colors for error types, and a cross icon for dismissal."
      />

      <ToggleTab
          :code="alertActionCode"
          :preview="alertActionPreview"
          @update:preview="(val) => (alertActionPreview = val)"
          @update:code="(val) => (alertActionCode = val)"
      />

      <ComponentWrapper>
        <div v-if="alertActionPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full h-full flex flex-col gap-4">
            <div class="p-3 flex items-center justify-between dark:bg-green-800/40 bg-[#edf7ed] rounded-lg">
              <div class="flex items-center gap-3">
                <Icon
                    icon="icon-park-outline:done-all"
                    class="text-[#418944] text-[1.5rem] dark:text-green-500"
                />
                <p class="text-[#418944] text-[1rem] dark:text-green-500">
                  This is a success Alert.
                </p>
              </div>
              <Icon
                  icon="heroicons:x-mark"
                  class="text-[#418944] dark:text-green-500 text-[1.8rem] p-1 rounded-full hover:bg-[#41894317] cursor-pointer active:scale-[0.9]"
              />
            </div>

            <div class="p-3 flex items-center justify-between dark:bg-blue-800/40 bg-[#e5f6fd] rounded-lg">
              <div class="flex items-center gap-3">
                <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem] dark:text-blue-500"/>
                <p class="text-[#2d9dda] text-[1rem] dark:text-blue-500">
                  This is a info Alert.
                </p>
              </div>
              <Icon
                  icon="heroicons:x-mark"
                  class="text-[#2d9dda] dark:text-blue-500 text-[1.8rem] p-1 rounded-full hover:bg-[#2d9dda15] cursor-pointer active:scale-[0.9]"
              />
            </div>

            <div class="p-3 flex items-center justify-between dark:bg-red-800/40 bg-[#fdeded] rounded-lg">
              <div class="flex items-center gap-3">
                <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem] dark:text-red-500"/>
                <p class="text-[#d74242] text-[1rem] dark:text-red-500">
                  This is a error Alert.
                </p>
              </div>
              <Icon
                  icon="heroicons:x-mark"
                  class="text-[#d74242] dark:text-red-500 text-[1.8rem] p-1 rounded-full hover:bg-[#d7424215] cursor-pointer active:scale-[0.9]"
              />
            </div>

            <div class="p-3 flex items-center justify-between dark:bg-orange-800/40 bg-[#fff4e5] rounded-lg">
              <div class="flex items-center gap-3">
                <Icon
                    icon="bx:error"
                    class="text-[#f18831] text-[1.5rem] dark:text-orange-500"
                />
                <p class="text-[#f18831] text-[1rem] dark:text-orange-500">
                  This is a warning Alert.
                </p>
              </div>
              <Icon
                  icon="heroicons:x-mark"
                  class="text-[#f18831] dark:text-orange-500 text-[1.8rem] p-1 rounded-full hover:bg-[#f1873118] cursor-pointer active:scale-[0.9]"
              />
            </div>
          </div>
        </div>

        <ShowCode v-else :code="AlertWithActionCodes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/skeleton"
          backName="skeleton"
          forwardName="testimonials"
          forwardUrl="/components/testimonials"
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="alertMessageContents"/>

  </aside>
</template>