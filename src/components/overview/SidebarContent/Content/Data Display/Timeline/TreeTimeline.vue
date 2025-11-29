<script setup>
import { ref } from "vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import { Icon } from "@iconify/vue";
import { TreeTimelinePreviewCode } from "../PreviewCodes/TimeLinePreviewCodes";

// tree timeline
const treeTimelinePreview = ref(true);
const treeTimelineCode = ref(false);

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
    <ContentHeader className="mt-8" text="tree timeline" id="tree_timeline" />

    <ComponentDescription
      text="A milestone timeline highlights key events or achievements in a project, visually tracking important deadlines and accomplishments along a chronological path."
    />

    <ToggleTab
      :code="treeTimelineCode"
      @update:code="(val) => (treeTimelineCode = val)"
      @update:preview="(val) => (treeTimelinePreview = val)"
      :preview="treeTimelinePreview"
    />

    <ComponentWrapper>
      <div
        v-if="treeTimelinePreview"
        class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
      >
        <div class="w-full mx-auto p-6">
          <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
            Tree Timeline
          </h1>

          <div>
            <ul
              class="relative h-fit before:content-[''] before:absolute before:w-1 before:h-full before:bg-gray-200 dark:before:bg-slate-800 before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-md before:z-10"
            >
              <li
                v-for="(milestone, index) in milestones"
                :key="index"
                :class="[
                  'relative w-1/2 mb-4',
                  index % 2 === 0 ? 'text-right' : 'left-1/2 text-left',
                ]"
              >
                <div
                  id="icon"
                  :class="[
                    'absolute top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-slate-800 rounded-full p-2 z-10',
                    index % 2 === 0
                      ? 'translate-x-1/2 right-0'
                      : '-translate-x-1/2',
                  ]"
                >
                  <Icon
                    :icon="milestone.icon"
                    class="text-gray-500 dark:text-[#abc2d3] w-5 h-5"
                  />
                </div>

                <div
                  :class="[
                    'relative border rounded-md dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900 shadow-gray-50 border-gray-200/60 shadow-md',
                    index % 2 === 0 ? '-left-8' : '-right-8',
                  ]"
                >
                  <div class="py-3 px-4">
                    <div>
                      <div
                        class="text-text dark:text-[#abc2d3] text-lg font-semibold"
                      >
                        {{ milestone.title }}
                      </div>
                      <div class="text-[#36af7b] text-sm">
                        {{ milestone.date }}
                      </div>
                    </div>
                    <p class="mt-1 text-sm dark:text-slate-400 text-gray-600">
                      {{ milestone.description }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ShowCode v-else :code="TreeTimelinePreviewCode" />
    </ComponentWrapper>
  </div>
</template>
