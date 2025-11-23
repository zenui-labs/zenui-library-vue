<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {marqueeContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import HorizontalMarquee from "@/components/overview/SidebarContent/Content/Navigation/Marquees/HorizontalMarquee.vue";
import VerticalMarquee from "@/components/overview/SidebarContent/Content/Navigation/Marquees/VerticalMarquee.vue";
import {
  HorizontalMarqueeCodes,
  VerticalMarqueeCodes
} from "@/components/overview/SidebarContent/Content/Navigation/PreviewCodes/MarqueePreviewCodes.js";

const sectionIds = marqueeContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const horizontalMarqueePreview = ref(true);
const horizontalMarqueeCode = ref(false);

const verticalMarqueePreview = ref(true);
const verticalMarqueeCode = ref(false);

</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="Horizontal Marquee" id="horizontal_marquee"/>

      <ComponentDescription
          text="A horizontal marquee scrolls text or content from one side to another, usually left to right or right to left."
      />

      <ToggleTab
          :preview="horizontalMarqueePreview"
          @update:preview="(val) => (horizontalMarqueePreview = val)"
          @update:code="(val) => (horizontalMarqueeCode = val)"
          :code="horizontalMarqueeCode"
      />

      <ComponentWrapper>
        <div
            v-if="horizontalMarqueePreview"
            class='p-8 flex w-[320px] 640px:w-[700px] mx-auto 1024px:w-[500px] 1360px:w-[600px] overflow-hidden flex-wrap items-center gap-5 justify-center'>
          <HorizontalMarquee/>
        </div>
        <ShowCode v-else :code="HorizontalMarqueeCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="Vertical Marquee"
            id="vertical_marquee"
        />
      </div>

      <ComponentDescription
          text="A vertical marquee scrolls text or content up or down within a container continuously or on hover."
      />

      <ToggleTab
          :preview="verticalMarqueePreview"
          @update:preview="(val) => (verticalMarqueePreview = val)"
          @update:code="(val) => (verticalMarqueeCode = val)"
          :code="verticalMarqueeCode"
      />

      <ComponentWrapper>
        <div
            v-if="verticalMarqueePreview"
            class='p-8 flex w-[320px] 640px:w-[700px] 1024px:w-[500px] 1360px:w-[600px] overflow-hidden flex-wrap items-center mx-auto gap-5 justify-center'>
          <VerticalMarquee/>
        </div>
        <ShowCode
            v-else
            :code="VerticalMarqueeCodes"
        />
      </ComponentWrapper>

      <OverviewFooter
          backName="chip"
          backUrl="/components/chip"
          forwardName="Timer"
          forwardUrl="/components/timer"
      />
    </div>

    <ContentNavbar
        :contents="marqueeContents"
        :activeSection="activeSection"
    />
  </aside>
</template>