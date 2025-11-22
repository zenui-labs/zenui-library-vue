<script setup>
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import DefaultAccordion from "./DefaultAccordion.vue";
import BorderAccordion from "./BorderedAccordion.vue";
import BackgroundAccordion from "./BackgroundAccordion.vue";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy";

import {accordionContents} from "@/Utils/ContentsConfig/SurfacesContents";

const sectionIds = accordionContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full">
      <DefaultAccordion/>
      <BorderAccordion/>
      <BackgroundAccordion/>

      <OverviewFooter
          back-url="/components/animated-cards"
          back-name="animated cards"
          forward-name="image gallery"
          forward-url="/components/image-gallery"
      />
    </div>

    <ContentNavbar
        :active-section="activeSection"
        :contents="accordionContents"
    />
  </aside>
</template>
