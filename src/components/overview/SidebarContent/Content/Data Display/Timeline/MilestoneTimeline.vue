<script setup>
import {ref} from "vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";

// milestone timeline
const milestoneTimelinePreview = ref(true);
const milestoneTimelineCode = ref(false);

const milestones = [
  {
    date: "January 2024",
    title: "Project Kickoff",
    description: "Initial planning and kickoff meeting.",
  },
  {
    date: "February 2024",
    title: "Design Phase",
    description: "Finalizing designs and mockups.",
  },
  {
    date: "March 2024",
    title: "Development Phase",
    description: "Starting the development of the project.",
  },
  {
    date: "April 2024",
    title: "Testing Phase",
    description: "Testing and quality assurance.",
  },
  {
    date: "May 2024",
    title: "Launch",
    description: "Official project launch.",
  },
];
</script>

<template>
  <div>
    <ContentHeader text="milestone timeline" id="milestone_timeline"/>

    <ComponentDescription
        text="A milestone timeline highlights key events or achievements in a project, visually tracking important deadlines and accomplishments along a chronological path."
    />

    <ToggleTab
        :code="milestoneTimelineCode"
        @update:preview="(val) => (milestoneTimelinePreview = val)"
        @update:code="(val) => (milestoneTimelineCode = val)"
        :preview="milestoneTimelinePreview"
    />

    <ComponentWrapper>
      <div
          v-if="milestoneTimelinePreview"
          class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
      >
        <div class="max-w-4xl mx-auto p-6">
          <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
            Milestone Timeline
          </h1>
          <div class="relative border-l dark:border-slate-700 border-gray-300">
            <div
                v-for="(milestone, index) in milestones"
                :key="index"
                class="mb-8"
            >
              <div
                  class="absolute w-5 h-5 bg-[#36af7b] dark:border-slate-700 z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"
              />
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
                <p class="text-gray-600 dark:text-slate-400 mt-1">
                  {{ milestone.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShowCode v-else code=""/>
    </ComponentWrapper>
  </div>
</template>