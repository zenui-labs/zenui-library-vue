<script setup>
import {ref} from "vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";

import {comparisonContents} from "@/Utils/ContentsConfig/SurfacesContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";

import VerticalComparisonExample from "./VerticalComparisonExample.vue";
import HorizontalComparisonExample from "./HorizontalComparisonExample.vue";

const sectionIds = comparisonContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const verticalComparisonPreview = ref(true);
const verticalComparisonCode = ref(false);

const horizontalComparisonPreview = ref(true);
const horizontalComparisonCode = ref(false);
</script>

<template>
  <aside
      class="flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full 425px:w-[80%]">
      <ContentHeader id="vertical_comparison" text="Vertical comparison"/>

      <ComponentDescription
          text="Compare items side-by-side in a vertical layout for clear and easy analysis."
      />

      <ToggleTab
          :code="verticalComparisonCode"
          :preview="verticalComparisonPreview"
          @update:preview="(val) => (verticalComparisonPreview = val)"
          @update:code="(val) => (verticalComparisonCode = val)"
      />

      <ComponentWrapper>
        <div
            v-if="verticalComparisonPreview"
            class="p-8 mb-4 flex flex-col items-center gap-5 h-[400px] justify-center"
        >
          <VerticalComparisonExample/>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="horizontal_comparison" text="Horizontal comparison"/>
      </div>

      <ComponentDescription
          text="Compare items side-by-side in a horizontal layout for clear and easy analysis."
      />

      <ToggleTab
          :code="horizontalComparisonCode"
          @update:code="(val) => (horizontalComparisonCode = val)"
          @update:preview="(val) => (horizontalComparisonPreview = val)"
          :preview="horizontalComparisonPreview"
      />

      <ComponentWrapper>
        <div
            v-if="horizontalComparisonPreview"
            class="p-8 mb-4 flex flex-col items-center gap-5 h-[400px] justify-center"
        >
          <HorizontalComparisonExample/>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/drag-and-drop"
          backName="Drag & Drop"
          forwardName="Cards"
          forwardUrl="/components/cards"
      />
    </div>

    <ContentNavbar :contents="comparisonContents" :activeSection="activeSection"/>
  </aside>
</template>