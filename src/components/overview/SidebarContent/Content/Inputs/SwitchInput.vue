<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {switchInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";

const roundedInputValue = ref(0);
const squareToggle = ref(false);
const toggle = ref(false);
const animatedSwitch = ref(false);
const widthIncrease = ref(false);

const sectionIds = switchInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const primaryInputPreview = ref(true);
const primaryInputCode = ref(false);

const handleSquareToggle = () => {
  squareToggle.value = !squareToggle.value;
}

const handleToggle = () => {
  toggle.value = !toggle.value;
}

const handleAnimatedSwitch = () => {
  widthIncrease.value = true
  setTimeout(() => {
    widthIncrease.value = false
    animatedSwitch.value = !animatedSwitch.value;
  }, 200)
}

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader text='Circle Switch' id='circle_switch'/>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div
              :class="`${
              squareToggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
          } w-[70px] h-[40px] p-[0.160rem] border dark:border-slate-700 dark:bg-slate-800 transition-colors cursor-pointer duration-500 border-border  rounded-full relative`"
              @click="handleSquareToggle"
          >
            <div
                :class="`${
              squareToggle ? 'translate-x-[30px] !bg-white' : 'translate-x-[2px]'
          } w-[32px] h-[32px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>

          <div
              :class="`${
        squareToggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
    } w-[65px] h-[36px] p-[0.180rem] cursor-pointer dark:border-slate-700 dark:bg-slate-800 border transition-colors duration-500 border-border  rounded-full relative`"
              @click="handleSquareToggle"
          >
            <div
                :class="`${
        squareToggle ? 'translate-x-[28px] !bg-white' : 'translate-x-[2px]'
    } w-[28px] h-[28px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>

          <div
              :class="`${
        squareToggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
    } w-[60px] h-[33px] p-[0.180rem] border dark:border-slate-700 dark:bg-slate-800 transition-colors cursor-pointer duration-500 border-border  rounded-full relative`"
              @click="handleSquareToggle"
          >
            <div
                :class="`${
        squareToggle ? 'translate-x-[26px] !bg-white' : 'translate-x-[2px]'
    } w-[25px] h-[25px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>

          <div
              :class="`${
        squareToggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
    } w-[57px] h-[30px] px-[0.150rem] dark:border-slate-700 dark:bg-slate-800 cursor-pointer py-[0.160rem] border transition-colors duration-500 border-border  rounded-full relative`"
              @click="handleSquareToggle"
          >
            <div
                :class="`${
        squareToggle ? 'translate-x-[27px] !bg-white' : 'translate-x-[1px]'
    } w-[23px] h-[23px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Square Switch' id='square_switch'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div
              :class="`${
              toggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
          } w-[70px] h-[40px] py-[0.210rem] dark:border-slate-700 dark:bg-slate-800 px-[0.209rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`"
              @click="handleToggle"
          >
            <div
                :class="`${
              toggle
              ? 'translate-x-[29px] rotate-[90deg] !bg-white'
          : 'translate-x-[0px] rotate-[0deg]'
          } w-[31px] h-[31px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>

          <div
              :class="`${
        toggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
    } w-[65px] h-[38px] py-[0.210rem] dark:border-slate-700 dark:bg-slate-800 px-[0.230rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`"
              @click="handleToggle"
          >
            <div
                :class="`${
        toggle
        ? ' translate-x-[26px] rotate-[90deg] !bg-white'
    : 'translate-x-[0px] rotate-[0deg]'
    } w-[29px] h-[29px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>

          <div
              :class="`${
        toggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
    } w-[65px] h-[34px] py-[0.138rem] dark:border-slate-700 dark:bg-slate-800 px-[0.200rem] cursor-pointer border transition-colors duration-500 border-border rounded-lg relative`"
              @click="handleToggle"
          >
            <div
                :class="`${ toggle
        ? 'translate-x-[30px] rotate-[90deg] !bg-white'
    : 'translate-x-[0px] rotate-[0deg]'
    } w-[26px] h-[27px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>

          <div
              :class="`${
        toggle ? '!bg-brandColor' : 'bg-[#f0f0f0]'
    } w-[55px] h-[30px] py-[0.100rem] dark:border-slate-700 dark:bg-slate-800 px-[0.200rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`"
              @click="handleToggle"
          >
            <div
                :class="`${
        toggle
        ? 'translate-x-[24px] rotate-[90deg] !bg-white'
    : 'translate-x-[0px] rotate-[0deg]'
    } w-[23px] h-[24px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"
                style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
            ></div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Animated Switch' id='animated_switch'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center gap-5 justify-center'>
          <div
              :class="`${
              animatedSwitch
              ? '!bg-brandColor !border-brandColor'
          : 'bg-[#f0f0f0] border-gray-200'
          } border relative p-1 rounded-full dark:border-slate-700 dark:bg-slate-800 w-[70px] cursor-pointer transition-all h-[40px] duration-200`"
              @click="handleAnimatedSwitch"
          >
            <div class='absolute inset-0 flex items-center justify-center'>
              <div
                  :class="`${
                animatedSwitch
                ? 'translate-x-[15px] !bg-white'
            : 'translate-x-[-15px]'
            } ${
            widthIncrease ? '!w-[37px]' : '!w-[30px]'
            } w-[30px] h-[30px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"
              ></div>
            </div>
          </div>
          <div
              :class="`${
        animatedSwitch
        ? '!bg-brandColor !border-brandColor'
    : 'bg-[#f0f0f0] border-gray-200'
    } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[65px] cursor-pointer transition-all h-[37px] duration-200`"
              @click="handleAnimatedSwitch"
          >
            <div class='absolute inset-0 flex items-center justify-center'>
              <div
                  :class="`${
          animatedSwitch
          ? 'translate-x-[13px] !bg-white'
      : 'translate-x-[-13px]'
      } ${
      widthIncrease ? '!w-[35px]' : '!w-[28px]'
      } w-[28px] h-[28px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"
              ></div>
            </div>
          </div>
          <div
              :class="`${
        animatedSwitch
        ? '!bg-brandColor !border-brandColor'
    : 'bg-[#f0f0f0] border-gray-200'
    } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[60px] cursor-pointer transition-all h-[33px] duration-200`"
              @click="handleAnimatedSwitch"
          >
            <div class='absolute inset-0 flex items-center justify-center'>
              <div
                  :class="`${
          animatedSwitch
          ? 'translate-x-[13px] !bg-white'
      : 'translate-x-[-13px]'
      } ${
      widthIncrease ? '!w-[29px]' : '!w-[25px]'
      } w-[25px] h-[25px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"
              ></div>
            </div>
          </div>
          <div
              :class="`${
        animatedSwitch
        ? '!bg-brandColor !border-brandColor'
    : 'bg-[#f0f0f0] border-gray-200'
    } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[55px] cursor-pointer transition-all h-[30px] duration-200`"
              @click="handleAnimatedSwitch"
          >
            <div class='absolute inset-0 flex items-center justify-center'>
              <div
                  :class="`${
          animatedSwitch
          ? 'translate-x-[13px] !bg-white'
      : 'translate-x-[-13px]'
      } ${
      widthIncrease ? '!w-[25px]' : '!w-[22px]'
      } w-[22px] h-[22px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"
              ></div>
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <OverviewFooter
          backName='all components'
          backUrl='/components/all-components'
          forwardName='Textarea'
          forwardUrl='/components/input-textarea'
      />
    </div>

    <ContentNavbar :contents="switchInputContents" :activeSection="activeSection"/>

  </aside>
</template>
