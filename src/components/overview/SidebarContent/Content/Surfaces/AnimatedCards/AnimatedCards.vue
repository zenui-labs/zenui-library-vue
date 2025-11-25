<script setup>
import {ref} from "vue";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";

import AnimatedCard1 from "./AnimatedCard1.vue";
import AnimatedCard2 from "./AnimatedCard2.vue";
import AnimatedCard3 from "./AnimatedCard3.vue";
import AnimatedCard4 from "./AnimatedCard4.vue";
import AnimatedCard5 from "./AnimatedCard5.vue";
import AnimatedCard6 from "./AnimatedCard6.vue";
import AnimatedCard7 from "./AnimatedCard7.vue";
import AnimatedCard8 from "./AnimatedCard8.vue";
import AnimatedCard9 from "./AnimatedCard9.vue";
import AnimatedCard10 from "./AnimatedCard10.vue";
import AnimatedCard11 from "./AnimatedCard11.vue";

import {animatedCardsContents} from "@/Utils/ContentsConfig/SurfacesContents.js";
import {
  AnimatedCard10Codes,
  AnimatedCard11Codes,
  AnimatedCard1Codes,
  AnimatedCard2Codes,
  AnimatedCard3Codes,
  AnimatedCard4Codes,
  AnimatedCard5Codes,
  AnimatedCard6Codes,
  AnimatedCard7Codes,
  AnimatedCard8Codes,
  AnimatedCard9Codes
} from "@/components/overview/SidebarContent/Content/Surfaces/PreviewCodes/AnimatedCardPreviewCodes.js";

const sectionIds = animatedCardsContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const animatedCard1Preview = ref(true);
const animatedCard1Code = ref(false);

const animatedCard2Preview = ref(true);
const animatedCard2Code = ref(false);

const animatedCard3Preview = ref(true);
const animatedCard3Code = ref(false);

const animatedCard4Preview = ref(true);
const animatedCard4Code = ref(false);

const animatedCard5Preview = ref(true);
const animatedCard5Code = ref(false);

const animatedCard6Preview = ref(true);
const animatedCard6Code = ref(false);

const animatedCard7Preview = ref(true);
const animatedCard7Code = ref(false);

const animatedCard8Preview = ref(true);
const animatedCard8Code = ref(false);

const animatedCard9Preview = ref(true);
const animatedCard9Code = ref(false);

const animatedCard10Preview = ref(true);
const animatedCard10Code = ref(false);

const animatedCard11Preview = ref(true);
const animatedCard11Code = ref(false);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full 425px:w-[80%]">
      <ContentHeader id="hover-animated-card-1" text="hover animated card 1"/>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard1Code"
          :preview="animatedCard1Preview"
          @update:code="(val) => (animatedCard1Code = val)"
          @update:preview="(val) => (animatedCard1Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard1Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard1/>
        </div>
        <ShowCode
            v-if="animatedCard1Code"
            :code="AnimatedCard1Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-2"
            text="hover animated card 2"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard2Code"
          :preview="animatedCard2Preview"
          @update:code="(val) => (animatedCard2Code = val)"
          @update:preview="(val) => (animatedCard2Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard2Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard2/>
        </div>
        <ShowCode
            v-if="animatedCard2Code"
            :code="AnimatedCard2Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-3"
            text="hover animated card 3"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard3Code"
          :preview="animatedCard3Preview"
          @update:code="(val) => (animatedCard3Code = val)"
          @update:preview="(val) => (animatedCard3Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard3Preview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard3/>
        </div>
        <ShowCode
            v-if="animatedCard3Code"
            :code="AnimatedCard3Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-4"
            text="hover animated card 4"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard4Code"
          :preview="animatedCard4Preview"
          @update:code="(val) => (animatedCard4Code = val)"
          @update:preview="(val) => (animatedCard4Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard4Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard4/>
        </div>
        <ShowCode
            v-if="animatedCard4Code"
            :code="AnimatedCard4Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-5"
            text="hover animated card 5"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard5Code"
          :preview="animatedCard5Preview"
          @update:code="(val) => (animatedCard5Code = val)"
          @update:preview="(val) => (animatedCard5Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard5Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard5/>
        </div>
        <ShowCode
            v-if="animatedCard5Code"
            :code="AnimatedCard5Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-6"
            text="hover animated card 6"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard6Code"
          :preview="animatedCard6Preview"
          @update:code="(val) => (animatedCard6Code = val)"
          @update:preview="(val) => (animatedCard6Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard6Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard6/>
        </div>
        <ShowCode
            v-if="animatedCard6Code"
            :code="AnimatedCard6Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-7"
            text="hover animated card 7"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard7Code"
          :preview="animatedCard7Preview"
          @update:code="(val) => (animatedCard7Code = val)"
          @update:preview="(val) => (animatedCard7Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard7Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard7/>
        </div>
        <ShowCode
            v-if="animatedCard7Code"
            :code="AnimatedCard7Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-8"
            text="hover animated card 8"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard8Code"
          :preview="animatedCard8Preview"
          @update:code="(val) => (animatedCard8Code = val)"
          @update:preview="(val) => (animatedCard8Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard8Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard8/>
        </div>
        <ShowCode
            v-if="animatedCard8Code"
            :code="AnimatedCard8Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-9"
            text="hover animated card 9"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard9Code"
          :preview="animatedCard9Preview"
          @update:code="(val) => (animatedCard9Code = val)"
          @update:preview="(val) => (animatedCard9Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard9Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard9/>
        </div>
        <ShowCode
            v-if="animatedCard9Code"
            :code="AnimatedCard9Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-10"
            text="hover animated card 10"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard10Code"
          :preview="animatedCard10Preview"
          @update:code="(val) => (animatedCard10Code = val)"
          @update:preview="(val) => (animatedCard10Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard10Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard10/>
        </div>
        <ShowCode
            v-if="animatedCard10Code"
            :code="AnimatedCard10Codes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="hover-animated-card-11"
            text="hover animated card 11"
        />
      </div>
      <ComponentDescription
          text="This is a hover-animated card. Hover to reveal dynamic effects and animations."
      />
      <ToggleTab
          :code="animatedCard11Code"
          :preview="animatedCard11Preview"
          @update:code="(val) => (animatedCard11Code = val)"
          @update:preview="(val) => (animatedCard11Preview = val)"
      />
      <ComponentWrapper>
        <div
            v-if="animatedCard11Preview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <AnimatedCard11/>
        </div>
        <ShowCode
            v-if="animatedCard11Code"
            :code="AnimatedCard11Codes"
        />
      </ComponentWrapper>

      <OverviewFooter
          back-url="/components/drawer"
          back-name="drawer"
          forward-name="accordion"
          forward-url="/components/accordion"
      />
    </div>

    <ContentNavbar
        :contents="animatedCardsContents"
        :active-section="activeSection"
        width="35%"
    />
  </aside>
</template>
