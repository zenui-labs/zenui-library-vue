<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import {
  DefaultOpenAccordionCodes
} from "@/components/overview/SidebarContent/Content/Surfaces/PreviewCodes/AccordionsPreviewCodes.js";

const defaultAccordionPreview = ref(true);
const defaultAccordionCode = ref(false);

const isAccordionOpen = ref(0);

const accordionData = [
  {
    title: "What is the purpose of wireframing in design?",
    description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
  },
  {
    title: "Why is user-centered design important?",
    description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
  },
  {
    title: "What role does contrast play in graphic design?",
    description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
  },
  {
    title: "Define the term 'responsive design' in web development.",
    description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
  },
  {
    title: "What is the significance of color theory in design?",
    description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
  },
];

const handleClick = (index) => {
  isAccordionOpen.value = isAccordionOpen.value === index ? null : index;
};
</script>

<template>
  <div>
    <ContentHeader id="default_open" text="default open"/>

    <ComponentDescription
        text="This is a default opened accordion component. Explore content with immediate visibility upon access."
    />

    <ToggleTab
        :preview="defaultAccordionPreview"
        :code="defaultAccordionCode"
        @update:preview="(val) => (defaultAccordionPreview = val)"
        @update:code="(val) => (defaultAccordionCode = val)"
    />

    <ComponentWrapper>
      <div
          v-if="defaultAccordionPreview"
          class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
      >
        <div class="flex gap-3 flex-col w-full 1024px:w-[90%]">
          <article
              v-for="(accordion, index) in accordionData"
              :key="index"
              class="border-b dark:border-slate-700 border-border rounded py-3"
          >
            <div
                class="flex gap-2 cursor-pointer items-center justify-between w-full"
                @click="handleClick(index)"
            >
              <h2 :class="['font-[600] transition-colors duration-200 text-[1.2rem]', isAccordionOpen === index && 'text-[#36af7b]']">
                {{ accordion.title }}
              </h2>
              <Icon
                  icon="mdi:chevron-down"
                  class="text-[1.8rem] dark:text-slate-600 text-text transition-all duration-300"
                  :class="{
                  'rotate-180 !text-[#36af7b]': isAccordionOpen === index,
                }"
              />
            </div>
            <div
                class="grid transition-all duration-300 overflow-hidden ease-in-out"
                :class="
                isAccordionOpen === index
                  ? 'grid-rows-[1fr] opacity-100 mt-4'
                  : 'grid-rows-[0fr] opacity-0'
              "
            >
              <p
                  class="text-text dark:text-[#abc2d3] text-[0.9rem] overflow-hidden"
              >
                {{ accordion.description }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <Showcode
          v-if="defaultAccordionCode"
          :code="DefaultOpenAccordionCodes"
      />
    </ComponentWrapper>
  </div>
</template>
