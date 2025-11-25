<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import {
  BorderAccordionCodes
} from "@/components/overview/SidebarContent/Content/Surfaces/PreviewCodes/AccordionsPreviewCodes.js";

const borderAccordionPreview = ref(true);
const borderAccordionCode = ref(false);

const isPlusAccordion = ref(null);

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

const handleBorderClick = (index) => {
  isPlusAccordion.value = isPlusAccordion.value === index ? null : index;
};
</script>

<template>
  <div class="mt-8">
    <ContentHeader id="border_accordion" text="Border Accordion"/>
    <ComponentDescription
        text="This is a border accordion with toggle component. Expand and collapse sections with distinct border styling for clarity."
    />

    <ToggleTab
        :preview="borderAccordionPreview"
        :code="borderAccordionCode"
        @update:preview="(val) => (borderAccordionPreview = val)"
        @update:code="(val) => (borderAccordionCode = val)"
    />

    <ComponentWrapper>
      <div
          v-if="borderAccordionPreview"
          class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
      >
        <div class="flex gap-4 flex-col w-full">
          <article
              v-for="(accordion, index) in accordionData"
              :key="index"
              class="border dark:border-slate-700 border-border rounded p-3"
          >
            <div
                class="flex gap-2 cursor-pointer items-center justify-between w-full"
                @click="handleBorderClick(index)"
            >
              <h2 :class="['font-[600] text-[1.2rem]', isPlusAccordion === index ? 'text-[#36af7b]' : 'dark:text-darkSubTextColor']">
                {{ accordion.title }}
              </h2>
              <Icon
                  icon="mdi:plus"
                  class="text-[1.6rem] dark:text-darkSubTextColor text-text transition-all duration-300"
                  :class="{
                  'rotate-45 !text-[#36af7b]': isPlusAccordion === index,
                }"
              />
            </div>
            <div
                class="grid transition-all duration-300 overflow-hidden ease-in-out"
                :class="
                isPlusAccordion === index
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
          v-if="borderAccordionCode"
          :code="BorderAccordionCodes"
      />
    </ComponentWrapper>
  </div>
</template>
