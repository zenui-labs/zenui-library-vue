<script setup>
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {timelineContents} from "@/Utils/ContentsConfig/DataDisplayContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";

import MilestoneTimeline from "./MilestoneTimeline.vue";
import WorkProgressTimeline from "./WorkProgressTimeline.vue";
import TreeTimeline from "./TreeTimeline.vue";
import MilestoneIconTimeline from "./MilestoneIconTimeline.vue";

const sectionIds = timelineContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <MilestoneTimeline/>
      <WorkProgressTimeline/>
      <TreeTimeline/>
      <MilestoneIconTimeline/>

      <OverviewFooter
          backUrl="/components/tooltip"
          backName="tooltip"
          :is-forward-button="false"
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="timelineContents"/>
  </aside>
</template>