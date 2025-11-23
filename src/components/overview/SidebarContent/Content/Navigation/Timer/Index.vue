<script setup>
import {onMounted, onUnmounted, ref} from 'vue';

import {useScrollSpy} from '@/CustomHooks/useScrollSpy.js';
import {timerContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import CircleTimer from "@/components/overview/SidebarContent/Content/Navigation/Timer/CircleTimer.vue";
import {
  TimerStyle1Codes,
  TimerStyle2Codes,
  TimerStyle3Codes,
  TimerStyle4Codes,
  TimerStyle5Codes,
  TimerStyle6Codes
} from "@/components/overview/SidebarContent/Content/Navigation/PreviewCodes/TimerPreviewCodes.js";

const timerStyle1Preview = ref(true);
const timerStyle1Code = ref(false);

const timerStyle2Preview = ref(true);
const timerStyle2Code = ref(false);

const timerStyle3Preview = ref(true);
const timerStyle3Code = ref(false);

const timerStyle4Preview = ref(true);
const timerStyle4Code = ref(false);

const timerStyle5Preview = ref(true);
const timerStyle5Code = ref(false);

const timerStyle6Preview = ref(true);
const timerStyle6Code = ref(false);

const sectionIds = timerContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);


const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

const targetDate = '2025-12-31T23:59:59';
let timer = null;

const calculateTimeLeft = () => {
  const difference = new Date(targetDate) - new Date();

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    clearInterval(timer);
  }
};

const formatNumber = (number) => number.toString().padStart(2, '0');

const timeLeft2 = ref({
  hours: 0,
  minutes: 0,
  seconds: 0,
  durations: {
    hours: 24,
    minutes: 60,
    seconds: 60
  }
});

let timer2 = null;

onMounted(() => {
  calculateTimeLeft();
  timer = setInterval(calculateTimeLeft, 1000);

  timer2 = setInterval(() => {
    const now = new Date();
    timeLeft2.value.hours = now.getHours();
    timeLeft2.value.minutes = now.getMinutes();
    timeLeft2.value.seconds = now.getSeconds();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
  clearInterval(timer2);
});

</script>

<template>
  <aside class='flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader
          id='timer-style-1'
          text='timer style 1'
      />

      <ComponentDescription
          text='A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.'
      />

      <ToggleTab
          :code="timerStyle1Code"
          :preview="timerStyle1Preview"
          @update:code="timerStyle1Code = $event"
          @update:preview="timerStyle1Preview = $event"
      />

      <ComponentWrapper>
        <div v-if="timerStyle1Preview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div class='grid grid-cols-4 gap-[10px] mt-2'>
            <div class='flex items-center justify-center flex-col gap-[0.2rem]'>
              <h5 class='py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold'>
                {{ formatNumber(timeLeft.days) }}</h5>
              <span class='text-[0.7rem]'>Days</span>
            </div>
            <div class='flex items-center justify-center flex-col gap-[0.2rem]'>
              <h5 class='py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold'>
                {{ formatNumber(timeLeft.hours) }}</h5>
              <span class='text-[0.7rem]'>Hours</span>
            </div>
            <div class='flex items-center justify-center flex-col gap-[0.2rem]'>
              <h5 class='py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold'>
                {{ formatNumber(timeLeft.minutes) }}</h5>
              <span class='text-[0.7rem]'>Minutes</span>
            </div>
            <div class='flex items-center justify-center flex-col gap-[0.2rem]'>
              <h5 class='py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold'>
                {{ formatNumber(timeLeft.seconds) }}</h5>
              <span class='text-[0.7rem]'>Seconds</span>
            </div>
          </div>
        </div>

        <ShowCode v-if="timerStyle1Code" :code="TimerStyle1Codes"/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            id='timer-style-2'
            text='timer style 2'
        />
      </div>

      <ComponentDescription
          text='A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.'
      />

      <ToggleTab
          :code="timerStyle2Code"
          :preview="timerStyle2Preview"
          @update:code="timerStyle2Code = $event"
          @update:preview="timerStyle2Preview = $event"
      />

      <ComponentWrapper>
        <div v-if="timerStyle2Preview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div class="grid grid-cols-4 gap-8 p-4">
            <div class="text-center">
              <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{ formatNumber(timeLeft.days) }}</div>
              <div class="text-[0.7rem] text-gray-500">Days</div>
            </div>
            <div class="text-center">
              <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{
                  formatNumber(timeLeft.hours)
                }}
              </div>
              <div class="text-[0.7rem] text-gray-500">Hours</div>
            </div>
            <div class="text-center">
              <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{
                  formatNumber(timeLeft.minutes)
                }}
              </div>
              <div class="text-[0.7rem] text-gray-500">Minutes</div>
            </div>
            <div class="text-center">
              <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{
                  formatNumber(timeLeft.seconds)
                }}
              </div>
              <div class="text-[0.7rem] text-gray-500">Seconds</div>
            </div>
          </div>
        </div>

        <ShowCode v-if="timerStyle2Code" :code="TimerStyle2Codes"/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            id='timer-style-3'
            text='timer style 3'
        />
      </div>

      <ComponentDescription
          text='A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.'
      />

      <ToggleTab
          :code="timerStyle3Code"
          :preview="timerStyle3Preview"
          @update:code="timerStyle3Code = $event"
          @update:preview="timerStyle3Preview = $event"
      />

      <ComponentWrapper>
        <div v-if="timerStyle3Preview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div class='w-full bg-blue-50 dark:bg-slate-900 flex items-center justify-center py-12 rounded-md'>
            <div class='grid grid-cols-4 gap-[15px] mt-2'>
              <div
                  class='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col'>
                <h5 class='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>
                  {{ formatNumber(timeLeft.days) }}</h5>
                <span
                    class='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md'>Days</span>
              </div>
              <div
                  class='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative  flex items-center justify-center flex-col'>
                <h5 class='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>
                  {{ formatNumber(timeLeft.hours) }}</h5>
                <span
                    class='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md'>Hours</span>
              </div>
              <div
                  class='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col'>
                <h5 class='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>
                  {{ formatNumber(timeLeft.minutes) }}</h5>
                <span
                    class='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md'>Minutes</span>
              </div>
              <div
                  class='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col'>
                <h5 class='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>
                  {{ formatNumber(timeLeft.seconds) }}</h5>
                <span
                    class='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md'>Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-if="timerStyle3Code" :code="TimerStyle3Codes"/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            id='timer-style-4'
            text='timer style 4'
        />
      </div>

      <ComponentDescription
          text='A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.'
      />

      <ToggleTab
          :code="timerStyle4Code"
          :preview="timerStyle4Preview"
          @update:code="timerStyle4Code = $event"
          @update:preview="timerStyle4Preview = $event"
      />

      <ComponentWrapper>
        <div v-if="timerStyle4Preview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div class='bg-gradient-to-b from-[#4c468f] to-[#c65f72] w-full py-12 rounded-md'>
            <div class='flex items-start gap-[5px] 640px:gap-[15px] justify-center'>
              <div class='flex items-center justify-center flex-col gap-[0.5rem]'>
                <div class='flex items-center gap-[8px]'>
                  <p class='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>
                    {{ formatNumber(timeLeft.hours).slice(0, 1) }}</p>
                  <p class='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>
                    {{ formatNumber(timeLeft.hours).slice(1) }}</p>
                </div>
                <span class='text-white font-normal text-[0.8rem] 640px:text-[0.9rem]'>Hours</span>
              </div>

              <span class='text-[2.3rem] text-white 640px:mt-1'>:</span>

              <div class='flex items-center justify-center flex-col gap-[0.5rem]'>
                <div class='flex items-center gap-[8px]'>
                  <p class='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>
                    {{ formatNumber(timeLeft.minutes).slice(0, 1) }}</p>
                  <p class='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>
                    {{ formatNumber(timeLeft.minutes).slice(1) }}</p>
                </div>
                <span class='text-white font-normal text-[0.8rem] 640px:text-[0.9rem]'>Minutes</span>
              </div>

              <span class='text-[2.3rem] text-white 640px:mt-1'>:</span>

              <div class='flex items-center justify-center flex-col gap-[0.5rem]'>
                <div class='flex items-center gap-[8px]'>
                  <p class='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>
                    {{ formatNumber(timeLeft.seconds).slice(0, 1) }}</p>
                  <p class='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>
                    {{ formatNumber(timeLeft.seconds).slice(1) }}</p>
                </div>
                <span class='text-white font-normal text-[0.8rem] 640px:text-[0.9rem]'>Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-if="timerStyle4Code" :code="TimerStyle4Codes"/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            id='timer-style-5'
            text='timer style 5'
        />
      </div>

      <ComponentDescription
          text=' A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.'
      />

      <ToggleTab
          :code="timerStyle5Code"
          :preview="timerStyle5Preview"
          @update:code="timerStyle5Code = $event"
          @update:preview="timerStyle5Preview = $event"
      />

      <ComponentWrapper>
        <div v-if="timerStyle5Preview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div class="flex items-end gap-[5px] p-4">
            <div class='flex items-end gap-[1px]'>
              <h4 class='text-[2.5rem] dark:text-[#abc2d3] 640px:text-[3rem] leading-[45px] 640px:leading-[50px] font-semibold text-gray-900'>
                {{ formatNumber(timeLeft.days) }}</h4>
              <span class='text-[1.3rem] font-semibold text-orange-500'>d</span>
            </div>
            <div class='flex items-end gap-[1px]'>
              <h4 class='text-[2.5rem] dark:text-[#abc2d3] 640px:text-[3rem] leading-[45px] 640px:leading-[50px] font-semibold text-gray-900'>
                {{ formatNumber(timeLeft.hours) }}</h4>
              <span class='text-[1.3rem] font-semibold text-orange-500'>h</span>
            </div>
            <div class='flex items-end gap-[1px]'>
              <h4 class='text-[2.5rem] dark:text-[#abc2d3] 640px:text-[3rem] leading-[45px] 640px:leading-[50px] font-semibold text-gray-900'>
                {{ formatNumber(timeLeft.minutes) }}</h4>
              <span class='text-[1.3rem] font-semibold text-orange-500'>m</span>
            </div>
            <p class='text-[1.3rem] dark:text-[#abc2d3] font-semibold text-gray-900'>{{
                formatNumber(timeLeft.seconds)
              }}</p>
          </div>
        </div>

        <ShowCode v-if="timerStyle5Code" :code="TimerStyle5Codes"/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            id='timer-style-6'
            text='timer style 6'
        />
      </div>

      <ComponentDescription
          text='A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.'
      />

      <ToggleTab
          :code="timerStyle6Code"
          :preview="timerStyle6Preview"
          @update:code="timerStyle6Code = $event"
          @update:preview="timerStyle6Preview = $event"
      />

      <ComponentWrapper>
        <div v-if="timerStyle6Preview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div class="flex flex-wrap justify-center items-center space-x-6 p-4">
            <CircleTimer :value="timeLeft2.hours" type="hours"/>
            <CircleTimer :value="timeLeft2.minutes" type="minutes"/>
            <CircleTimer :value="timeLeft2.seconds" type="seconds"/>
          </div>
        </div>

        <ShowCode v-if="timerStyle6Code" :code="TimerStyle6Codes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl='/components/marquee'
          backName='marquee'
          forwardName='breadcrumb'
          forwardUrl='/components/breadcrumb'
      />
    </div>

    <ContentNavbar :contents="timerContents" :activeSection="activeSection"/>
  </aside>
</template>