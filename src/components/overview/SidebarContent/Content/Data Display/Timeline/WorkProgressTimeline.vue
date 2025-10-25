<script setup>
import {ref} from "vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import {Icon} from "@iconify/vue";

// work history timeline
const workHistoryPreview = ref(true);
const workHistoryCode = ref(false);

const workHistorys = [
  {
    date: "Jan 22",
    title: "Posted assignments of work",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
    commentBtn: true,
    fileBtn: true,
  },
  {
    date: "Dec 12",
    title: "Uploaded Assignments File",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
    commentBtn: false,
    fileBtn: false,
  },
  {
    date: "Nov 18",
    title: "Asked to bring good stuff college",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
    commentBtn: true,
    fileBtn: true,
  },
  {
    date: "Nov 04",
    title: "Presentation Requirement",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
    commentBtn: true,
    fileBtn: false,
  },
  {
    date: "Oct 15",
    title: "File handouts",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
    commentBtn: false,
    fileBtn: false,
  },
];
</script>

<template>
  <div>
    <ContentHeader
        className="mt-8"
        text="work progress timeline"
        id="work_progress_timeline"
    />

    <ComponentDescription
        text="A work progress timeline visually represents the stages of a project or task over time, showing milestones, completed steps, and upcoming phases in a sequential order."
    />

    <ToggleTab
        :code="workHistoryCode"
        @update:code="(val) => (workHistoryCode = val)"
        :preview="workHistoryPreview"
        @update:preview="(val) => (workHistoryPreview = val)"
    />

    <ComponentWrapper>
      <div
          v-if="workHistoryPreview"
          class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
      >
        <div class="w-[55%] 640px:w-[70%] mx-auto">
          <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
            Work Progress
          </h1>
          <div
              class="relative border-l dark:border-slate-700 border-gray-300 w-full"
          >
            <div
                v-for="(milestone, index) in workHistorys"
                :key="index"
                class="mb-8"
            >
              <div class="pl-6 w-full">
                <div class="flex items-center">
                  <div
                      class="text-gray-600 text-[1rem] dark:text-[#abc2d3] absolute left-[-75px]"
                  >
                    {{ milestone.date }}
                  </div>
                  <div class="text-text dark:text-[#abc2d3] text-lg">
                    {{ milestone.title }}
                  </div>
                </div>
                <p class="text-gray-500 dark:text-slate-400 mt-1 text-[0.9rem]">
                  {{ milestone.description }}
                </p>

                <div class="flex flex-wrap items-center gap-[20px] mt-[10px]">
                  <button
                      v-if="milestone.commentBtn"
                      class="flex items-center gap-[9px] text-gray-400 rounded-md px-4 py-1 text-[0.9rem]"
                  >
                    <Icon icon="fa-regular:comment"/>
                    5 comments
                  </button>

                  <button
                      v-if="milestone.fileBtn"
                      class="flex items-center gap-[9px] border-[#36af7b] border text-[#36af7b] rounded-md px-4 py-1 text-[0.9rem]"
                  >
                    <Icon icon="fa-regular:file-alt"/>
                    FantechProp..
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShowCode v-else code=""/>
    </ComponentWrapper>
  </div>
</template>