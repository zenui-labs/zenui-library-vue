<script setup>
import {ref} from 'vue'
import {useHead} from '@vueuse/head';

import {sliderInputContents} from '@/Utils/ContentsConfig/InputContents.js'
import {useScrollSpy} from '@/CustomHooks/useScrollSpy.js'

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import {
  breakpointsSliderCodes,
  sliderCodes
} from "@/components/overview/SidebarContent/Content/Inputs/PreviewCodes/RangeInputPreviewCodes.js";

const sectionIds = sliderInputContents.map((item) => item.href.slice(1))
const activeSection = useScrollSpy(sectionIds)

const sliderPreview = ref(true)
const sliderCode = ref(false)

const breakPointSliderPreview = ref(true)
const breakPointSliderCode = ref(false)

const value = ref(0)

const handleChange = (event) => {
  const target = event.target
  value.value = Number(target.value)
}

const handleClick = (event) => {
  const slider = (event.currentTarget).getBoundingClientRect()
  const newValue = ((event.clientX - slider.left) / slider.width) * 100
  value.value = Math.min(Math.max(newValue, 0), 100)
}

const breakpoints = [0, 25, 50, 75, 100]
const value1 = ref(50)

const findNearestBreakpoint = (val) => {
  return breakpoints.reduce((prev, curr) =>
      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
  )
}

const handleChange1 = (event) => {
  const target = event.target
  const newValue = Number(target.value)
  value1.value = findNearestBreakpoint(newValue)
}

const handleClick1 = (event) => {
  const slider = (event.currentTarget).getBoundingClientRect()
  const clickPosition = ((event.clientX - slider.left) / slider.width) * 100
  value1.value = findNearestBreakpoint(clickPosition)
}

useHead({
  title: "Form - Input Range"
});
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div>
      <ContentHeader text="slider" id="slider"/>

      <ComponentDescription
          text="Adjustable slider for selecting a value or range, offering smooth control with a draggable handle."
      />

      <ToggleTab
          :code="sliderCode"
          @update:code="val => sliderCode = val"
          @update:preview="val => sliderPreview = val"
          :preview="sliderPreview"
      />

      <ComponentWrapper>
        <div v-if="sliderPreview">
          <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div class="flex items-center justify-center">
              <div
                  class="relative w-64 h-3 bg-gray-300 dark:bg-slate-700 rounded-full cursor-pointer"
                  @click="handleClick"
              >
                <input
                    type="range"
                    min="0"
                    max="100"
                    :value="value"
                    @input="handleChange"
                    class="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"
                />
                <div
                    class="absolute top-0 h-3 bg-[#108476] rounded-full"
                    :style="{ width: value + '%' }"
                />
                <div
                    class="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] dark:border-slate-300 cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"
                    :style="{ left: value + '%' }"
                />
              </div>
            </div>
          </div>
        </div>

        <div v-if="sliderCode">
          <ShowCode :code="sliderCodes"/>
        </div>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="breakpoint range slider" id="breakpoint_range_slider"/>
      </div>

      <ComponentDescription
          text="A range slider with breakpoints, allowing users to select values within defined intervals for more precise control."
      />

      <ToggleTab
          :code="breakPointSliderCode"
          @update:code="val => breakPointSliderCode = val"
          @update:preview="val => breakPointSliderPreview = val"
          :preview="breakPointSliderPreview"
      />

      <ComponentWrapper>
        <div v-if="breakPointSliderPreview">
          <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div class="flex flex-col items-center justify-center">
              <div
                  class="relative w-64 h-3 dark:bg-slate-700 bg-gray-300 rounded-full cursor-pointer"
                  @click="handleClick1"
              >
                <input
                    type="range"
                    min="0"
                    max="100"
                    :value="value1"
                    @input="handleChange1"
                    class="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"
                />
                <div
                    class="absolute top-0 h-3 bg-[#108476] rounded-full"
                    :style="{ width: value1 + '%' }"
                />
                <div
                    class="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] dark:border-slate-300 cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"
                    :style="{ left: value1 + '%' }"
                />
                <div
                    v-for="(point, index) in breakpoints"
                    :key="index"
                    class="absolute top-[50%] w-[10px] h-[10px] transform -translate-x-1/2 translate-y-[-50%] bg-white dark:bg-slate-300 rounded-full border border-gray-500"
                    :style="{ left: point + '%' }"
                />
              </div>

              <div class="flex justify-between w-64 mt-2">
                <span
                    v-for="(point, index) in breakpoints"
                    :key="index"
                    class="text-sm dark:text-[#abc2d3] text-gray-700"
                >
                  {{ point }}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="breakPointSliderCode">
          <ShowCode :code="breakpointsSliderCodes"/>
        </div>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/input-radio"
          backName="radio"
          forwardUrl="/components/input-file"
          forwardName="file"
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="sliderInputContents"/>
  </aside>

</template>
