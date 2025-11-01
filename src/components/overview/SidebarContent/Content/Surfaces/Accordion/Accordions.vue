<script setup>
// Components
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import DefaultAccordion from "./DefaultAccordion.vue";
import BorderAccordion from "./BorderedAccordion.vue";
import BackgroundAccordion from "./BackgroundAccordion.vue";
import { useScrollSpy } from "@/CustomHooks/useScrollSpy";

// Contents for scrollspy
import { accordionContents } from "@/Utils/ContentsConfig/SurfacesContents";

// ScrollSpy logic

const sectionIds = accordionContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);
</script>

<template>
  <aside
    class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full 425px:w-[80%]">
      <DefaultAccordion />
      <BorderAccordion />
      <BackgroundAccordion />

      <OverviewFooter
        back-url="/components/image-cropper"
        back-name="image cropper"
        forward-name="app bar"
        forward-url="/components/appbar"
      />
    </div>

    <ContentNavbar
      :active-section="activeSection"
      :contents="accordionContents"
      width="35%"
    />
  </aside>

  <Head>
    <title>Surfaces - Accordion</title>
  </Head>
</template>
