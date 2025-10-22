<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {stepsContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";

const sectionIds = stepsContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// states start
const numberStepPreview = ref(true);
const numberStepCode = ref(false);

const noTextStepPreview = ref(true);
const noTextStepCode = ref(false);

const varticalStepPreview = ref(true);
const varticalStepCode = ref(false);
// states end
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="number stepper" id="number_stepper"/>

      <ComponentDescription
          text="A UI component that guides users through a multi-step process, visually indicating progress and allowing navigation between steps."
      />

      <ToggleTab
          :preview="numberStepPreview"
          @update:preview="(val) => (numberStepPreview = val)"
          @update:code="(val) => (numberStepCode = val)"
          :code="numberStepCode"
      />

      <ComponentWrapper>
        <div
            v-if="numberStepPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="flex flex-wrap items-center gap-[15px] justify-center w-full"
          >
            <p
                class="w-[35px] h-[35px] flex items-center justify-center bg-[#36af7b] rounded-full text-white text-[1rem]"
            >
              1
            </p>
            <div class="flex items-center gap-[3px]">
              <span class="text-[0.9rem] text-[#36af7b]">Cart items</span>
            </div>
            <p
                class="w-[35px] h-[35px] flex items-center justify-center border border-gray-500 rounded-full text-[1rem]"
            >
              2
            </p>
            <div class="flex items-center gap-[3px]">
              <span class="text-[0.9rem] dark:text-[#abc2d3]">Payment process</span>
            </div>
            <p
                class="w-[35px] h-[35px] flex items-center justify-center border border-gray-500 rounded-full text-[1rem]"
            >
              3
            </p>
            <div class="flex items-center gap-[3px]">
              <span class="text-[0.9rem] dark:text-[#abc2d3]">Success</span>
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="no text stepper" id="no_text_stepper"/>
      </div>

      <ComponentDescription
          text="A stepper that displays only numbers to indicate each step, without showing step names."
      />

      <ToggleTab
          :preview="noTextStepPreview"
          @update:preview="(val) => (noTextStepPreview = val)"
          @update:code="(val) => (noTextStepCode = val)"
          :code="noTextStepCode"
      />

      <ComponentWrapper>
        <div
            v-if="noTextStepPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div class="flex items-center gap-[15px] justify-center w-full">
            <div class="flex items-center w-[35%]">
              <p
                  class="w-[35px] h-[35px] flex items-center justify-center bg-[#36af7b] rounded-full text-white text-[1rem]"
              >
                1
              </p>
              <hr class="w-[80%] border-[#36af7b]"/>
            </div>
            <div class="flex items-center w-[35%]">
              <p
                  class="w-[35px] h-[35px] flex items-center justify-center border border-[#36af7b] rounded-full text-[#36af7b] text-[1rem]"
              >
                2
              </p>
              <hr class="w-[80%] dark:border-slate-600"/>
            </div>
            <p
                class="w-[35px] h-[35px] flex items-center justify-center border border-gray-300 rounded-full text-[1rem]"
            >
              3
            </p>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="vertical stepper" id="vertical_stepper"/>
      </div>

      <ComponentDescription
          text="A vertical stepper that displays steps in a top-to-bottom progression, guiding users through a multi-step process vertically."
      />

      <ToggleTab
          :preview="varticalStepPreview"
          @update:preview="(val) => (varticalStepPreview = val)"
          @update:code="(val) => (varticalStepCode = val)"
          :code="varticalStepCode"
      />

      <ComponentWrapper>
        <div
            v-if="varticalStepPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="flex flex-col items-center gap-[10px] justify-center w-full"
          >
            <div class="flex items-start gap-[20px]">
              <div class="flex flex-col items-center">
                <p
                    class="w-[35px] h-[35px] flex items-center justify-center bg-[#36af7b] rounded-full text-white text-[1rem]"
                >
                  1
                </p>
                <div class="w-[2px] h-[50px] bg-[#36af7b] mt-[10px]"></div>
              </div>

              <div>
                <h1 class="text-[1.1rem] dark:text-[#abc2d3] text-gray-700">
                  Step Title
                </h1>
                <p class="text-[0.9rem] dark:text-[#abc2d3]/70 text-gray-500">
                  Step Descriptions
                </p>
              </div>
            </div>
            <div class="flex items-start gap-[20px]">
              <div class="flex flex-col items-center">
                <p
                    class="w-[35px] h-[35px] flex items-center justify-center bg-[#36af7b] outline-2 outline outline-offset-[3px] outline-[#36af7b] rounded-full text-white text-[1rem]"
                >
                  2
                </p>
                <div class="w-[2px] h-[50px] bg-[#36af7b] mt-[10px]"></div>
              </div>

              <div>
                <h1 class="text-[1.1rem] dark:text-[#abc2d3] text-gray-700">
                  Step Title
                </h1>
                <p class="text-[0.9rem] dark:text-[#abc2d3]/70 text-gray-500">
                  Step Descriptions
                </p>
              </div>
            </div>
            <div class="flex items-start gap-[20px]">
              <div class="flex flex-col items-center">
                <p
                    class="w-[35px] h-[35px] dark:bg-slate-700 dark:text-[#abc2d3] flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-[1rem]"
                >
                  3
                </p>
                <div
                    class="w-[2px] h-[50px] dark:bg-slate-700 bg-gray-300 mt-[10px]"
                ></div>
              </div>

              <div>
                <h1 class="text-[1.1rem] dark:text-[#abc2d3] text-gray-700">
                  Step Title
                </h1>
                <p class="text-[0.9rem] dark:text-[#abc2d3]/70 text-gray-500">
                  Step Descriptions
                </p>
              </div>
            </div>
            <div class="flex items-start gap-[20px]">
              <div class="flex flex-col items-center">
                <p
                    class="w-[35px] h-[35px] dark:bg-slate-700 dark:text-[#abc2d3] flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-[1rem]"
                >
                  4
                </p>
              </div>

              <div>
                <h1 class="text-[1.1rem] dark:text-[#abc2d3] text-gray-700">
                  Step Title
                </h1>
                <p class="text-[0.9rem] dark:text-[#abc2d3]/70 text-gray-500">
                  Step Descriptions
                </p>
              </div>
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <OverviewFooter
          backName="rating"
          backUrl="/components/rating"
          forwardName="modal"
          forwardUrl="/components/modal"
      />
    </div>

    <ContentNavbar
        :contents="stepsContents"
        :activeSection="activeSection"
    />
  </aside>
</template>