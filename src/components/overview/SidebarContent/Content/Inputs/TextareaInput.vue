<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {textareaInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";

const animatedInputValue = ref('');

const sectionIds = textareaInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const requiredTextareaPreview = ref(true);
const requiredTextareaCode = ref(false);

const backgroundTextareaPreview = ref(true);
const backgroundTextareaCode = ref(false);

const animateLabelTextareaPreview = ref(true);
const animateLabelTextareaCode = ref(false);

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader text='Required Textarea' id='required_textarea'/>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="requiredTextareaPreview"
                 @update:preview="val => requiredTextareaPreview = val"
                 @update:code="val => requiredTextareaCode = val"
                 :code="requiredTextareaCode"/>

      <ComponentWrapper>
        <div v-if="requiredTextareaPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class="w-full 1024px:w-[90%]">
            <label
                for="description"
                class="font-[400] dark:text-[#abc2d3] text-[15px] text-text"
            >
              Description <span class="text-red-500">*</span>
            </label>
            <textarea
                id="description"
                required
                placeholder="Write something about zenUI"
                class="border-border dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-primary transition-colors duration-300"
            />
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Background Textarea' id='background_textarea'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="backgroundTextareaPreview"
                 @update:preview="val => backgroundTextareaPreview = val"
                 @update:code="val => backgroundTextareaCode = val"
                 :code="backgroundTextareaCode"/>

      <ComponentWrapper>
        <div v-if="backgroundTextareaPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class="w-full 1024px:w-[90%]">
            <label
                for="description"
                class="font-[400] dark:text-[#abc2d3] text-[15px] text-text"
            >
              Description
            </label>
            <textarea
                id="name"
                placeholder="Write something about zenUI"
                class="border-border dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border outline-none px-4 w-full mt-1 min-h-[100px] bg-gray-200 rounded-md py-3 focus:border-gray-400 transition-colors duration-300"
            />
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Animate Label Textarea' id='animate_label_textarea'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="animateLabelTextareaPreview"
                 @update:preview="val => animateLabelTextareaPreview = val"
                 @update:code="val => animateLabelTextareaCode = val"
                 :code="animateLabelTextareaCode"/>

      <ComponentWrapper>
        <div v-if="animateLabelTextareaPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <label class="relative w-full 1024px:w-[90%]">
               <textarea
                   name="name"
                   id="name"
                   :value="animatedInputValue"
                   @change="(e) => animatedInputValue = e.target.value"
                   class="peer dark:border-slate-700 dark:bg-transparent border-[#e5eaf2] border rounded-md outline-none px-4 min-h-[200px] dark:text-darkTextColor py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
               />
            <span
                :class="`${animatedInputValue ? '-top-3 left-2 scale-[0.9] dark:bg-darkBgColor bg-white px-[4px]' : 'left-5 top-3.5'} absolute dark:text-slate-500 dark:peer-focus:bg-[#020617] peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300`">
              Write something about zenUI
              </span>
          </label>
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

    <ContentNavbar :contents="textareaInputContents" :activeSection="activeSection"/>

  </aside>
</template>
