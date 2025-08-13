<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {numberInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const miniInputValue = ref(0);
const roundedInputValue = ref(0);

const sectionIds = numberInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const primaryInputPreview = ref(true);
const primaryInputCode = ref(false);

const handleMiniIncrement = () => {
  miniInputValue.value = miniInputValue.value + 1;
};

const handleMiniDecrement = () => {
  miniInputValue.value = miniInputValue.value - 1;
};

const handleMiniInputValueChange = (e) => {
  miniInputValue.value = e.target.value;
};

const handleRoundedIncrement = () => {
  roundedInputValue.value = roundedInputValue.value + 1;
}

const handleRoundedDecrement = () => {
  roundedInputValue.value = roundedInputValue.value - 1;
}

const handleRoundedInputValueChange = (e) => {
  roundedInputValue.value = e.target.value;
}

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader text='Mini Number Input' id='mini_number_input'/>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div
              class='flex items-center mx-auto border dark:border-slate-700 border-gray-200 rounded-md'>
            <button
                class='bg-gray-100 p-[15px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-l-md text-gray-700 text-[1.1rem]'
                @click="handleMiniDecrement"
            >
              <Icon icon="line-md:minus"/>
            </button>
            <input
                type='number'
                :value="miniInputValue"
                class='w-[70px] py-2.5 dark:bg-transparent dark:text-[#abc2d3] outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                @input="handleMiniInputValueChange"
            />
            <button
                class='bg-gray-100 p-[15px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-r-md text-gray-700 text-[1.1rem]'
                @click="handleMiniIncrement"
            >
              <Icon icon="majesticons:plus-line"/>
            </button>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Rounded Button' id='rounded_button'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div
              class='flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md'>
            <button
                class='bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                @click="handleRoundedDecrement"
            >
              <Icon icon="line-md:minus"/>
            </button>
            <input
                type='number'
                :value="roundedInputValue"
                class='w-[70px] py-2.5 outline-none dark:bg-transparent dark:text-[#abc2d3] focus:ring-0 border-none text-center text-[1.1rem]'
                @input="handleRoundedInputValueChange"
            />
            <button
                class='bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full text-gray-700 text-[1.1rem]'
                @click="handleRoundedIncrement"
            >
              <Icon icon="majesticons:plus-line"/>
            </button>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Rounded Button Position' id='rounded_button_position'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div
              class='flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md'>
            <button
                class='bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] mr-2 rounded-full text-gray-700 text-[1.1rem]'
                @click="handleRoundedDecrement"
            >
              <Icon icon="line-md:minus"/>
            </button>
            <button
                class='bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                @click="handleRoundedIncrement"
            >
              <Icon icon="majesticons:plus-line"/>
            </button>

            <input
                type='number'
                :value="roundedInputValue"
                class='w-[70px] px-2 py-2.5 outline-none dark:bg-transparent dark:text-[#abc2d3] focus:ring-0 border-none text-center text-[1.1rem]'
                @input="handleRoundedInputValueChange"
            />
          </div>

          <div
              class='flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md'>
            <input
                type='number'
                :value="roundedInputValue"
                class='w-[70px] px-2 py-2.5 dark:bg-transparent dark:text-[#abc2d3] outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                @input="handleRoundedInputValueChange"
            />
            <button
                class='bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full text-gray-700 text-[1.1rem]'
                @click="handleRoundedDecrement"
            >
              <Icon icon="line-md:minus"/>
            </button>
            <button
                class='bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full ml-2 text-gray-700 text-[1.1rem]'
                @click="handleRoundedIncrement"
            >
              <Icon icon="majesticons:plus-line"/>
            </button>
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

    <ContentNavbar :contents="numberInputContents" :activeSection="activeSection"/>

  </aside>
</template>
