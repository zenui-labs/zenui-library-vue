<script setup>
import { ref } from "vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import { Icon } from "@iconify/vue";
import { MilestoneIconTimelinePreviewCode } from "../PreviewCodes/TimeLinePreviewCodes";

// milestone timeline
const milestoneTimelinePreview = ref(true);
const milestoneTimelineCode = ref(false);

const milestones = [
  {
    date: "January 2024",
    title: "B.Tech",
    description: "B.Tech graduate with specialization in CSE",
    icon: "fa6-solid:graduation-cap",
  },
  {
    date: "February 2024",
    title: "Design Phase",
    description: "Finalizing designs and mockups.",
    icon: "fa6-solid:briefcase",
  },
  {
    date: "March 2024",
    title: "Development Phase",
    description: "Starting the development of the project.",
    icon: "fa6-solid:briefcase",
  },
  {
    date: "April 2024",
    title: "Testing Phase",
    description: "Testing and quality assurance.",
    icon: "fa6-solid:briefcase",
  },
  {
    date: "May 2024",
    title: "Launch",
    description: "Official project launch.",
    icon: "fa6-solid:briefcase",
  },
];
</script>

<template>
  <div>
    <ContentHeader
      className="mt-8"
      text="milestone icon timeline"
      id="milestone_icon_timeline"
    />

    <ComponentDescription
      text="A milestone timeline highlights key events or achievements in a project, visually tracking important deadlines and accomplishments along a chronological path."
    />

    <ToggleTab
      :code="milestoneTimelineCode"
      @update:code="(val) => (milestoneTimelineCode = val)"
      :preview="milestoneTimelinePreview"
      @update:preview="(val) => (milestoneTimelinePreview = val)"
    />

    <ComponentWrapper>
      <div
        v-if="milestoneTimelinePreview"
        class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
      >
        <div class="max-w-4xl mx-auto p-6">
          <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
            Milestone Icon Timeline
          </h1>
          <div
            class="relative border-l-[5px] dark:border-slate-700 border-gray-300"
          >
            <div
              v-for="(milestone, index) in milestones"
              :key="index"
              class="mb-8 relative"
            >
              <div
                id="icon"
                class="absolute border-2 border-white top-5 -left-[2.5px] transform -translate-x-1/2 -translate-y-1/2 bg-[#36af7b] dark:border-slate-600 rounded-full p-2 z-10"
              >
                <Icon :icon="milestone.icon" class="text-white w-5 h-5" />
              </div>
              <div class="pl-6">
                <div class="flex 640px:items-center 640px:flex-row flex-col">
                  <div class="text-[#36af7b] font-semibold">
                    {{ milestone.date }}
                  </div>
                  <div
                    class="640px:ml-4 dark:text-[#abc2d3] text-text text-lg font-semibold"
                  >
                    {{ milestone.title }}
                  </div>
                </div>
                <p class="text-gray-500 dark:text-slate-400 text-[0.9rem] mt-1">
                  {{ milestone.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShowCode v-else :code="MilestoneIconTimelinePreviewCode" />
    </ComponentWrapper>
  </div>
</template>
