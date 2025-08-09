<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {textInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";

const sectionIds = textInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const primaryInputPreview = ref(true);
const primaryInputCode = ref(false);

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader text='required input' id='primary_input'/>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%]'>
            <label
                htmlFor='name'
                class='text-[15px] dark:text-slate-300 text-text font-[400]'
            >
              Name <span class='text-red-500'>*</span>
            </label>
            <input
                type='text'
                name='name'
                id='name'
                placeholder='Your name'
                class='border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300'
            />
          </div>
        </div>
        <ShowCode
            v-else
            code='
import React from "react";

const TextInput = () => {

    return (
        <div class="w-full md:w-[80%]">
            <label
                htmlFor="name"
                class="text-[15px] dark:text-slate-300 text-text font-[400]"
            >
                Name <span class="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                class="border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            />
        </div>
    );
};

export default TextInput;
                    '
        />
      </ComponentWrapper>

      <OverviewFooter
          backName='all components'
          backUrl='/components/all-components'
          forwardName='Textarea'
          forwardUrl='/components/input-textarea'
      />
    </div>

    <ContentNavbar :contents="textInputContents" :activeSection="activeSection"/>

  </aside>
</template>
