<script setup>
import {ref} from "vue";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy";

import Showcode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import WarningMessageCard from "@/Shared/Component/WarningMessageCard.vue";

import DrawerTop from "./DrawerTop.vue";
import DrawerBottom from "./DrawerBottom.vue";
import DrawerLeft from "./DrawerLeft.vue";
import DrawerRight from "./DrawerRight.vue";
import DrawerFullScreen from "./DrawerFullScreen.vue";
import {drawerContents} from "@/Utils/ContentsConfig/SurfacesContents.js";
import {
  DrawerBottomCodes,
  DrawerLeftCodes,
  DrawerRightCodes,
  DrawerTopCodes,
  FullScreenDrawerCodes
} from "@/components/overview/SidebarContent/Content/Surfaces/PreviewCodes/DrawerPreviewCodes.js";

const sectionIds = drawerContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const topDrawerPreview = ref(true);
const topDrawerCode = ref(false);

const bottomDrawerPreview = ref(true);
const bottomDrawerCode = ref(false);

const leftDrawerPreview = ref(true);
const leftDrawerCode = ref(false);

const rightDrawerPreview = ref(true);
const rightDrawerCode = ref(false);

const fullScreenDrawerPreview = ref(true);
const fullScreenDrawerCode = ref(false);
</script>

<template>
  <aside
      class="flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <WarningMessageCard
          text="Note, when you use the drawer you will first connect it to the
        button in your project. And it's handled by the state here using
        'ref', so you'll get a good look at it. Only the structure of the drawer
        is given with animation; you can design it as per your requirement."
      />

      <ContentHeader id="drawer_top" text="Drawer Top"/>
      <ComponentDescription
          text="This is a top drawer modal that slides down from the top to reveal content or actions."
      />
      <ToggleTab
          :code="topDrawerCode"
          :preview="topDrawerPreview"
          @update:code="(val) => (topDrawerCode = val)"
          @update:preview="(val) => (topDrawerPreview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="topDrawerPreview"
            class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center"
        >
          <DrawerTop/>
        </div>
        <Showcode v-if="topDrawerCode" :code="DrawerTopCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="drawer_bottom" text="Drawer Bottom"/>
      </div>
      <ComponentDescription
          text="This is a bottom drawer modal that slides up from the bottom to reveal content or actions."
      />
      <ToggleTab
          :code="bottomDrawerCode"
          :preview="bottomDrawerPreview"
          @update:code="(val) => (bottomDrawerCode = val)"
          @update:preview="(val) => (bottomDrawerPreview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="bottomDrawerPreview"
            class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center"
        >
          <DrawerBottom/>
        </div>
        <Showcode v-if="bottomDrawerCode" :code="DrawerBottomCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="drawer_left" text="Drawer Left"/>
      </div>
      <ComponentDescription
          text="This is a left drawer modal that slides in from the left side to reveal content or actions."
      />
      <ToggleTab
          :code="leftDrawerCode"
          :preview="leftDrawerPreview"
          @update:code="(val) => (leftDrawerCode = val)"
          @update:preview="(val) => (leftDrawerPreview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="leftDrawerPreview"
            class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center"
        >
          <DrawerLeft/>
        </div>
        <Showcode v-if="leftDrawerCode" :code="DrawerLeftCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="drawer_right" text="Drawer Right"/>
      </div>
      <ComponentDescription
          text="This is a right drawer modal that slides in from the right side to reveal content or actions."
      />
      <ToggleTab
          :code="rightDrawerCode"
          :preview="rightDrawerPreview"
          @update:code="(val) => (rightDrawerCode = val)"
          @update:preview="(val) => (rightDrawerPreview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="rightDrawerPreview"
            class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center"
        >
          <DrawerRight/>
        </div>
        <Showcode v-if="rightDrawerCode" :code="DrawerRightCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="full_screen_drawer" text="Full Screen Drawer"/>
      </div>
      <ComponentDescription
          text="This is a full screen drawer modal that covers the entire viewport to display content or actions."
      />
      <ToggleTab
          :code="fullScreenDrawerCode"
          :preview="fullScreenDrawerPreview"
          @update:code="(val) => (fullScreenDrawerCode = val)"
          @update:preview="(val) => (fullScreenDrawerPreview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="fullScreenDrawerPreview"
            class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center"
        >
          <DrawerFullScreen/>
        </div>
        <Showcode v-if="fullScreenDrawerCode" :code="FullScreenDrawerCodes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/cards"
          backName="cards"
          forwardName="animated cards"
          forwardUrl="/components/animated-cards"
      />
    </div>

    <ContentNavbar
        :contents="drawerContents"
        :activeSection="activeSection"
        classs="w-[70%]"
    />
  </aside>
</template>
