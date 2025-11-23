<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";

// components
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";

// contents for scrollspy
import { dropdownButtonContents } from "@/Utils/ContentsConfig/ButtonsContents";
import { useScrollSpy } from "@/CustomHooks/useScrollSpy";
import { sendButtonWithArrowPreviewCode } from "./PreviewCodes/SendButtonDropdownPreviewCode";
import { actionButtonPreviewCode } from "./PreviewCodes/ActionDropdownButtonPreviewCode";
import { publishButtonPreviewCode } from "./PreviewCodes/PublishDropdownButtonPreviewCode";

const sectionIds = dropdownButtonContents.map(item => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// Publish Button
const publishPreview = ref(true);
const publishCode = ref(false);
const publishButtonActive = ref(false);
const publishButtonText = ref("Publish");
const publishButtonContent = ["Publish", "Set as draft"];

// Action Button
const actionButtonPreview = ref(true);
const actionButtonCode = ref(false);
const actionButtonActive = ref(false);
const actionButtonText = ref("Mark as read");
const actionContents = [
  { label: "Mark as read", icon: "mdi:check" },
  { label: "Copy", icon: "mdi:content-copy" },
  { label: "Edit", icon: "mdi:pencil-outline" },
];

// Send Button
const arrowSendButtonPreview = ref(true);
const arrowSendButtonCode = ref(false);
const actionButtonActive2 = ref(false);
const sendButtonText = ref("Send");
const sendButtonContent = [
  { label: "Schedule for later", icon: "mdi:calendar-clock" },
  { label: "Save draft", icon: "mdi:content-save-all-outline" },
  { label: "Delete", icon: "mdi:delete-outline" },
];

// Handlers
const handlePublishButtonClick = (item) => {
  publishButtonText.value = item;
  publishButtonActive.value = false;
};
const handleActionButtonClick = (item) => {
  actionButtonText.value = item;
  actionButtonActive.value = false;
};
const handleSendButtonClick = (item) => {
  sendButtonText.value = item;
  actionButtonActive2.value = false;
};

// Close dropdowns on outside click
const handleClick = (event) => {
  if (!event.target.closest(".publishButtonOptions") && !event.target.closest(".publishButton")) {
    publishButtonActive.value = false;
    actionButtonActive.value = false;
    actionButtonActive2.value = false;
  }
};

onMounted(() => document.addEventListener("click", handleClick));
onBeforeUnmount(() => document.removeEventListener("click", handleClick));
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div>
      <!-- Publish Button -->
      <ContentHeader text="Publish Button" id="publish_button" />
      <ComponentDescription text="Dropdown menu with a publish button, offering various publishing options for content management." />
      <ToggleTab :code="publishCode" @update:code="(val)=>(publishCode = val)" :preview="publishPreview" @update:preview="(val)=> publishPreview = val"  />
      <ComponentWrapper>
        <div v-if="publishPreview" :class="['p-8', publishButtonActive ? 'mb-20' : 'mb-4', 'flex flex-wrap items-center gap-5 justify-center transition-all duration-300']">
          <div class="flex items-center rounded bg-brandColor/80 border-none outline-none text-secondary justify-between relative">
            <button class="text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">{{ publishButtonText }}</button>
            <div @click="publishButtonActive = !publishButtonActive" class="bg-brandColor w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
              <Icon icon="mdi:menu-down" class="text-[2rem]" />
            </div>
            <ul :class="publishButtonActive ? 'opacity-100 z-20 translate-y-0' : 'opacity-0 z-[-1] translate-y-[-5px]'"
                class="dark:bg-slate-800 dark:text-[#abc2d3] publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white absolute top-[46px] rounded right-0 text-text text-[0.9rem]">
              <li v-for="(item, index) in publishButtonContent" :key="index" class="py-2 px-6 hover:bg-gray-50 dark:hover:bg-slate-900/40 rounded cursor-pointer" @click="handlePublishButtonClick(item)">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <ShowCode v-if="publishCode" :code="publishButtonPreviewCode" />
      </ComponentWrapper>

      <!-- Action Button -->
      <ContentHeader text="Action Button" id="action_button" class="mt-8" />
      <ComponentDescription text="Dropdown menu with an action button, providing a range of selectable actions for quick task execution." />
      <ToggleTab :code="actionButtonCode" @update:code="(val)=>actionButtonCode=val" :preview="actionButtonPreview" @update:preview="(val)=>actionButtonPreview = val" />
      <ComponentWrapper>
        <div v-if="actionButtonPreview" :class="['p-8', actionButtonActive ? 'mb-28' : 'mb-4', 'flex flex-wrap items-center gap-5 justify-center transition-all duration-300']">
          <div class="flex items-center rounded bg-brandColor/80 border-none outline-none text-secondary justify-between relative">
            <button class="text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">{{ actionButtonText }}</button>
            <div @click="actionButtonActive = !actionButtonActive" class="bg-brandColor w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
              <Icon icon="mdi:menu-down" class="text-[2rem]" />
            </div>
            <ul :class="actionButtonActive ? 'opacity-100 z-20 translate-y-0' : 'opacity-0 z-[-1] translate-y-[-5px]'"
                class="dark:bg-slate-800 dark:text-[#abc2d3] publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-full absolute top-[46px] rounded right-0 text-text text-[0.9rem]">
              <li v-for="(item, index) in actionContents" :key="index" class="py-2 px-3 flex items-center dark:hover:bg-slate-900/40 gap-[5px] hover:bg-gray-50 rounded cursor-pointer" @click="handleActionButtonClick(item.label)">
                <Icon :icon="item.icon" class="text-brandColor" /> {{ item.label }}
              </li>
            </ul>
          </div>
        </div>
        <ShowCode v-if="actionButtonCode" :code="actionButtonPreviewCode" />
      </ComponentWrapper>

      <!-- Send Button -->
      <ContentHeader text="Send Button with arrow" id="send_button_with_arrow" class="mt-8" />
      <ComponentDescription text="Dropdown menu with a send button and arrow, allowing users to choose from multiple sending options." />
      <ToggleTab :code="arrowSendButtonCode" @update:code="(val)=>(arrowSendButtonCode = val)" :preview="arrowSendButtonPreview" @update:preview="(val)=>(arrowSendButtonPreview=val)" />
      <ComponentWrapper>
        <div v-if="arrowSendButtonPreview" :class="['p-8', actionButtonActive2 ? 'mb-32' : 'mb-4', 'flex flex-wrap items-center gap-5 justify-center transition-all duration-300']">
          <div class="flex items-center rounded bg-brandColor/80 border-none outline-none text-secondary justify-between relative">
            <button class="text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">{{ sendButtonText }}</button>
            <div @click="actionButtonActive2 = !actionButtonActive2" class="bg-brandColor w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
              <Icon icon="mdi:menu-down" class="text-[2rem]" />
            </div>
            <ul :class="actionButtonActive2 ? 'opacity-100 z-20 translate-y-4' : 'opacity-0 z-[-1] translate-y-[-20px]'"
                class="publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-max dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] absolute top-[46px] rounded border border-[#e6e6e6] right-0 text-text text-[0.9rem]">
              <div class="absolute -top-[8px] dark:bg-slate-800 dark:border-slate-700 right-3 border-l border-b border-[#e6e6e6] bg-white w-[15px] h-[15px] rotate-[135deg]"></div>
              <li v-for="(item, index) in sendButtonContent" :key="index" class="z-20 py-2 px-3 dark:hover:bg-slate-900/40 flex items-center gap-[8px] hover:bg-gray-50 rounded cursor-pointer" @click="handleSendButtonClick(item.label)">
                <Icon :icon="item.icon" class="text-brandColor" /> {{ item.label }}
              </li>
            </ul>
          </div>
        </div>
        <ShowCode v-if="arrowSendButtonCode" :code="sendButtonWithArrowPreviewCode" />
      </ComponentWrapper>

      <OverviewFooter backUrl="/components/login-buttons" backName="login button" forwardUrl="/components/animated-button" forwardName="animated button" />
    </div>

    <ContentNavbar :contents="dropdownButtonContents" :activeSection="activeSection" />
  </aside>
</template>
