<script setup>
import {ref, watch} from "vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {progressBarContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {
  BasicProgressBarCodes,
  CircleProgressBarCodes,
  ProgressBarWithLabelCodes,
  ProgressBarWithTooltipCodes
} from "@/components/overview/SidebarContent/Content/Navigation/PreviewCodes/ProgressBarPreviewCodes.js";

const sectionIds = progressBarContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const basicProgressBarPreview = ref(true);
const basicProgressBarCode = ref(false);

const progressBarWithTooltipPreview = ref(true);
const progressBarWithTooltipCode = ref(false);

const countingPreview = ref(true);
const countingCode = ref(false);

const circlePreview = ref(true);
const circleCode = ref(false);

const progress = ref(0);
const isLoading = ref(false);
let interval = null;

watch(isLoading, (newValue) => {
  if (newValue) {
    interval = setInterval(() => {
      progress.value = progress.value + 1;
      if (progress.value >= 90) {
        clearInterval(interval);
        isLoading.value = false;
        progress.value = 90;
      }
    }, 30);
  } else {
    if (interval) {
      clearInterval(interval);
    }
  }
});

const handleStartLoading = () => {
  if (isLoading.value) {
    progress.value = 0;
    isLoading.value = false;
  }

  progress.value = 0;
  isLoading.value = true;
};
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="basic progress bar" id="basic_progress_bar"/>

      <ComponentDescription
          text="A simple progress bar that visually represents the completion percentage of a task or process."
      />

      <ToggleTab
          :preview="basicProgressBarPreview"
          @update:preview="(val) => (basicProgressBarPreview = val)"
          @update:code="(val) => (basicProgressBarCode = val)"
          :code="basicProgressBarCode"
      />

      <ComponentWrapper>
        <div
            v-if="basicProgressBarPreview"
            class="p-8 mb-4 flex flex-col pt-12 flex-wrap items-center gap-5 justify-center"
        >
          <div class="relative dark:bg-slate-700 bg-gray-200 w-[80%] h-[15px] rounded-full">
            <div
                class="absolute top-0 left-0 bg-[#3fb682] h-full rounded-full"
                :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <button
              @click="handleStartLoading"
              class="bg-gray-600 hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"
          >
            Start Loading
          </button>
        </div>
        <ShowCode
            v-else
            :code="BasicProgressBarCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="progress bar with tooltip"
            id="progress_bar_with_tooltip"
        />
      </div>

      <ComponentDescription
          text="A progress bar that displays the completion percentage within a tooltip when hovered over, providing precise progress information."
      />

      <ToggleTab
          :preview="progressBarWithTooltipPreview"
          @update:preview="(val) => (progressBarWithTooltipPreview = val)"
          @update:code="(val) => (progressBarWithTooltipCode = val)"
          :code="progressBarWithTooltipCode"
      />

      <ComponentWrapper>
        <div
            v-if="progressBarWithTooltipPreview"
            class="p-8 mb-4 mt-8 flex flex-col flex-wrap items-center gap-5 justify-center"
        >
          <div class="relative dark:bg-slate-700 bg-gray-200 w-[80%] h-[15px] rounded-full">
            <div
                v-if="progress !== 0"
                :style="{ left: `calc(${progress}% - 40px)` }"
                class="bg-[#3fb682] rounded-[5px] absolute top-[-40px] text-white px-2 py-0.5 before:w-[8px] before:h-[8px] before:bg-[#3fb682] before:absolute before:bottom-[-4px] before:left-[35%] before:transform before:translate-x-1/2 before:rotate-[45deg]"
            >
              {{ progress }}%
            </div>
            <div
                class="absolute top-0 left-0 bg-[#3fb682] h-full rounded-full"
                :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <button
              @click="handleStartLoading"
              class="bg-gray-600 hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"
          >
            Start Loading
          </button>
        </div>
        <ShowCode
            v-else
            :code="ProgressBarWithTooltipCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="progress bar with showing percentage"
            id="progress_bar_with_showing_percentage"
        />
      </div>

      <ComponentDescription
          text="A progress bar that visibly shows the completion percentage directly on the bar, giving a clear indication of progress."
      />

      <ToggleTab
          :preview="countingPreview"
          @update:preview="(val) => (countingPreview = val)"
          @update:code="(val) => (countingCode = val)"
          :code="countingCode"
      />

      <ComponentWrapper>
        <div
            v-if="countingPreview"
            class="p-8 mb-4 mt-8 flex flex-wrap items-start gap-5 justify-center"
        >
          <div class="flex flex-col items-center justify-center w-full gap-[10px]">
            <div class="relative dark:bg-slate-700 bg-gray-200 w-[80%] h-[15px] rounded-full">
              <div
                  class="absolute top-0 left-0 bg-[#3fb682] h-full rounded-full"
                  :style="{ width: `${progress}%` }"
              ></div>
            </div>

            <p class="dark:text-darkSubTextColor">
              Loading: <b>{{ progress }}%</b>
            </p>
          </div>

          <button
              @click="handleStartLoading"
              class="bg-gray-600 hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"
          >
            Start Loading
          </button>
        </div>
        <ShowCode
            v-else
            :code='ProgressBarWithLabelCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="circle progress bar" id="circle_progress_bar"/>
      </div>

      <ComponentDescription
          text="A circular progress bar that displays the completion percentage in the center of the circle, offering a visually appealing way to track progress."
      />

      <ToggleTab
          :preview="circlePreview"
          @update:preview="(val) => (circlePreview = val)"
          @update:code="(val) => (circleCode = val)"
          :code="circleCode"
      />

      <ComponentWrapper>
        <div
            v-if="circlePreview"
            class="p-8 mb-4 mt-8 flex flex-col items-start gap-5 justify-center"
        >
          <div class="relative w-[150px] h-[150px] mx-auto">
            <svg class="w-full h-full" viewBox="0 0 100 100">
              <circle
                  cx="50"
                  cy="50"
                  r="45"
                  class="text-gray-200"
                  stroke-width="10"
                  fill="none"
              />

              <circle
                  cx="50"
                  cy="50"
                  r="45"
                  class="dark:stroke-[#334155]"
                  stroke="#e2e2e2"
                  stroke-width="10"
                  fill="none"
                  stroke-dasharray="282.6"
                  :stroke-dashoffset="0"
                  stroke-linecap="round"
                  transform="rotate(-90 50 50)"
              />

              <circle
                  cx="50"
                  cy="50"
                  r="45"
                  class="text-gray-200"
                  stroke-width="10"
                  fill="none"
              />

              <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#3fb682"
                  stroke-width="10"
                  fill="none"
                  stroke-dasharray="282.6"
                  :stroke-dashoffset="(1 - progress / 100) * 282.6"
                  stroke-linecap="round"
                  transform="rotate(-90 50 50)"
              />
            </svg>

            <p class="absolute top-[35%] dark:text-darkSubTextColor left-[30%] translate-x-1/2 transform translate-y-1/2">
              {{ progress }}%
            </p>
          </div>

          <button
              @click="handleStartLoading"
              class="bg-gray-600 mx-auto hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"
          >
            Start Loading
          </button>
        </div>
        <ShowCode
            v-else
            :code="CircleProgressBarCodes"
        />
      </ComponentWrapper>

      <OverviewFooter
          backName="pagination"
          backUrl="/components/pagination"
          forwardName="chip"
          forwardUrl="/components/chip"
      />
    </div>

    <ContentNavbar
        :contents="progressBarContents"
        :activeSection="activeSection"
    />
  </aside>
</template>