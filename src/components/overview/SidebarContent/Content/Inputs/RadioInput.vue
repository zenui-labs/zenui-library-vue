<script setup>
import { ref } from "vue";

// components
import OverviewFooter from '../../../../../Shared/OverviewFooter.vue';
import ContentHeader from '../../../../../Shared/ContentHeader.vue';
import Showcode from '../../../../../Shared/Component/ShowCode.vue';
import ComponentDescription from '../../../../../Shared/Component/ComponentDescription.vue';
import ComponentWrapper from '../../../../../Shared/Component/ComponentWrapper.vue';
import ToggleTab from '../../../../../Shared/Component/ToggleTab.vue';
import ContentNavbar from '../../../../../Shared/Component/ContentNavbar.vue';

// contents for scrollspy
import { radioInputContents } from '../../../../../Utils/ContentsConfig/InputContents';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

// vue-meta (instead of react-helmet)
import { useHead } from '@vueuse/head';

// scrollspy
const sectionIds = radioInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// circle radio state
const circlePreview = ref(true);
const circleCode = ref(false);
const circleToggle = ref(false);

// square radio state
const squarePreview = ref(true);
const squareCode = ref(false);
const squareToggle = ref(false);

// page title
useHead({
  title: "Form - Radio"
});
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full pl-[2.5rem] px-6 md:px-10">
    <div>
      <!-- Circle Radio -->
      <ContentHeader text="circle radio" id="circle_radio" />

      <ComponentDescription
        text="This is a circle radio button component. Select options with a click on the elegant circular design."
      />

      <ToggleTab
        :code="circleCode"
        :setCode="(val) => (circleCode.value = val)"
        :setPreview="(val) => (circlePreview.value = val)"
        :preview="circlePreview"
      />

      <ComponentWrapper>
        <template v-if="circlePreview">
          <div class="p-8 flex items-center flex-col gap-5 justify-center">
            <div class="flex items-center gap-[10px]">
              <div
                class="w-[35px] h-[35px] border border-brandColor rounded-full flex items-center justify-center cursor-pointer"
                @click="circleToggle = !circleToggle"
              >
                <div
                  :class="[
                    circleToggle ? 'bg-brandColor scale-[1]' : 'bg-transparent scale-[0.7]',
                    'w-[25px] h-[25px] transition-all duration-200 rounded-full'
                  ]"
                ></div>
              </div>
              <p
                class="text-[1.2rem] font-bold dark:text-[#abc2d3] text-text cursor-pointer"
                @click="circleToggle = !circleToggle"
              >
                Toggle
              </p>
            </div>
          </div>
        </template>

        <template v-if="circleCode">
          <Showcode :code="``" />
        </template>
      </ComponentWrapper>

      <!-- Square Radio -->
      <div class="mt-8">
        <ContentHeader text="Square Radio" id="square_radio" />
      </div>

      <ComponentDescription
        text="This is a square radio button component. Choose options by clicking on the modern, square design."
      />

      <ToggleTab
        :code="squareCode"
        :setCode="(val) => (squareCode.value = val)"
        :setPreview="(val) => (squarePreview.value = val)"
        :preview="squarePreview"
      />

      <ComponentWrapper>
        <template v-if="squarePreview">
          <div class="p-8 flex items-center flex-col gap-5 justify-center">
            <div class="flex items-center gap-[10px]">
              <div
                class="w-[32px] h-[32px] border border-brandColor rounded-md flex items-center justify-center cursor-pointer"
                @click="squareToggle = !squareToggle"
              >
                <div
                  :class="[
                    squareToggle ? 'bg-brandColor scale-[1]' : 'bg-transparent scale-[0.7]',
                    'w-[25px] h-[25px] transition-all duration-200 rounded-md'
                  ]"
                ></div>
              </div>

              <p
                class="text-[1.2rem] font-bold dark:text-[#abc2d3] text-text cursor-pointer"
                @click="squareToggle = !squareToggle"
              >
                Toggle
              </p>
            </div>
          </div>
        </template>

        <template v-if="squareCode">
          <Showcode :code="``" />
        </template>
      </ComponentWrapper>

      <OverviewFooter
        backUrl="/components/input-select"
        backName="select"
        forwardName="range"
        forwardUrl="/components/input-range"
      />
    </div>

    <ContentNavbar :contents="radioInputContents" :activeSection="activeSection" />
  </aside>
</template>
