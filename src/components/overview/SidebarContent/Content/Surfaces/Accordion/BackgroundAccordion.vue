<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";

// Toggle states
const bgAccordionPreview = ref(true);
const bgAccordionCode = ref(false);

// Active accordion index
const bgAccordion = ref(null);

// Accordion data
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

// Handle accordion click
const handleBgAccordion = (index) => {
  bgAccordion.value = bgAccordion.value === index ? null : index;
};
</script>

<template>
  <div class="mt-8">
    <!-- Header & Description -->
    <ContentHeader id="background_accordion" text="Background Accordion" />
    <ComponentDescription
      text="This is a background color accordion with toggle component. Expand and collapse sections with distinct background colors for visual differentiation."
    />

    <!-- ToggleTab -->
    <ToggleTab
      :preview="bgAccordionPreview"
      :code="bgAccordionCode"
      @update:preview="(val) => (bgAccordionPreview = val)"
      @update:code="(val) => (bgAccordionCode = val)"
    />

    <ComponentWrapper>
      <!-- Accordion Preview -->
      <div
        v-if="bgAccordionPreview"
        class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
      >
        <div class="flex gap-3 flex-col w-full">
          <article
            v-for="(accordion, index) in accordionData"
            :key="index"
            class="bg-border dark:bg-transparent rounded"
          >
            <div
              :class="[
                bgAccordion === index ? 'rounded-t-sm' : 'rounded',
                'flex gap-2 cursor-pointer items-center justify-between dark:bg-slate-800 w-full bg-gray-700 p-3',
              ]"
              @click="handleBgAccordion(index)"
            >
              <h2
                class="dark:text-[#abc2d3] text-secondary font-[600] text-[1.2rem]"
              >
                {{ accordion.title }}
              </h2>

              <Icon
                icon="mdi:plus"
                class="shrink-0 ml-8 transition-transform duration-200"
                :class="{ 'rotate-45': bgAccordion === index }"
              />
            </div>

            <div
              class="grid transition-all duration-300 dark:bg-slate-900 overflow-hidden ease-in-out bg-gray-100"
              :class="
                bgAccordion === index
                  ? 'grid-rows-[1fr] opacity-100 px-3 py-3'
                  : 'grid-rows-[0fr] opacity-0 px-3'
              "
            >
              <div
                class="text-text dark:text-[#abc2d3] text-[0.9rem] overflow-hidden"
              >
                {{ accordion.description }}
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Accordion Code -->
      <Showcode
        v-if="bgAccordionCode"
        code="`...Your React code string here...`"
      />
    </ComponentWrapper>
  </div>
</template>
