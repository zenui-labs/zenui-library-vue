<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {chipContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {
  AvatarChipCodes,
  IconChipCodes,
  PrimaryChipCodes,
  VariantsChipCodes,
  VariantsChipWithIconCodes
} from "@/components/overview/SidebarContent/Content/Navigation/PreviewCodes/ChipPreviewCodes.js";

const sectionIds = chipContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const primaryChipPreview = ref(true);
const primaryChipCode = ref(false);

const chipVariantPreview = ref(true);
const chipVariantCode = ref(false);

const iconChipPreview = ref(true);
const iconChipCode = ref(false);

const avatarChipPreview = ref(true);
const avatarChipCode = ref(false);

const variantChipPreview = ref(true);
const variantChipCode = ref(false);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="Primary Chip" id="primary_chip"/>

      <ComponentDescription
          text="This is a basic chip component. Use it to display concise information or tags in a compact form."
      />

      <ToggleTab
          :preview="primaryChipPreview"
          @update:preview="(val) => (primaryChipPreview = val)"
          @update:code="(val) => (primaryChipCode = val)"
          :code="primaryChipCode"
      />

      <ComponentWrapper>
        <div
            v-if="primaryChipPreview"
            class="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center"
        >
          <div
              class="px-4 py-1 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#d1d1d180] rounded-full text-[0.9rem] font-[500]"
          >
            ZenUI
          </div>

          <div
              class="px-4 py-1 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#d1d1d180] rounded-full text-[1.3rem] font-[500]"
          >
            ZenUI
          </div>

          <div
              class="px-4 py-1 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#d1d1d180] rounded-full text-[1.6rem] font-[500]"
          >
            ZenUI
          </div>
        </div>
        <ShowCode
            v-else
            :code="PrimaryChipCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="Chip variants" id="chip_variant"/>
      </div>

      <ComponentDescription
          text="This is a chip component with multiple variants like bordered and background color options for versatile styling."
      />

      <ToggleTab
          :preview="chipVariantPreview"
          @update:preview="(val) => (chipVariantPreview = val)"
          @update:code="(val) => (chipVariantCode = val)"
          :code="chipVariantCode"
      />

      <ComponentWrapper>
        <div
            v-if="chipVariantPreview"
            class="p-8 mb-4 flex flex-wrap items-start gap-5 justify-center"
        >
          <div
              class="px-6 py-1 bg-[#3B9DF8] text-[#fff] rounded-full text-[0.9rem] font-[500]"
          >
            ZenUI
          </div>
          <div
              class="px-6 py-1 border border-[#3B9DF8] text-[#3B9DF8] rounded-full text-[0.9rem] font-[500]"
          >
            ZenUI
          </div>
          <div
              class="px-6 py-1 bg-[#e9e9e9] dark:bg-slate-700 dark:text-[#abc2d3] text-[#9c9c9c] rounded-full text-[0.9rem] font-[500]"
          >
            ZenUI
          </div>
        </div>
        <ShowCode
            v-else
            :code="VariantsChipCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="Icon Chip" id="icon_chip"/>
      </div>

      <ComponentDescription
          text="This is a chip with icon component. Display concise information or tags enhanced with an icon for clarity."
      />

      <ToggleTab
          :preview="iconChipPreview"
          @update:preview="(val) => (iconChipPreview = val)"
          @update:code="(val) => (iconChipCode = val)"
          :code="iconChipCode"
      />

      <ComponentWrapper>
        <div
            v-if="iconChipPreview"
            class="p-8 mb-4 flex flex-wrap items-start gap-5 justify-center"
        >
          <div
              class="px-4 py-1.5 dark:bg-slate-800 dark:border-slate-600 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2"
          >
            <Icon
                icon="material-symbols:check"
                class="p-0.5 text-[1.1rem] rounded-full bg-[#18c964] text-[#fff]"
            />
            ZenUI
          </div>

          <div
              class="px-4 py-1.5 bg-[#e4d4f4] dark:bg-purple-700/30 text-[#7828c8] rounded-full text-[0.9rem] font-[500] flex items-center gap-2"
          >
            <Icon icon="ion:notifications" class="text-[1.3rem] text-[#7828c8]"/>
            ZenUI
          </div>

          <div
              class="px-4 py-1.5 border dark:border-slate-600 dark:text-[#abc2d3] border-border text-text rounded-full text-[0.9rem] font-[500] flex items-center gap-2"
          >
            <Icon
                icon="tabler:point-filled"
                class="text-[1.3rem] dark:text-[#abc2d3] text-text"
            />
            ZenUI
          </div>

          <div
              class="px-4 py-1.5 border dark:border-slate-600 dark:text-[#abc2d3] border-border text-text rounded-full text-[0.9rem] font-[500] flex items-center gap-2"
          >
            ZenUI
            <Icon
                icon="radix-icons:cross-2"
                class="text-[1.1rem] text-[#fff] rounded-full p-0.5 dark:bg-slate-700 bg-text"
            />
          </div>
        </div>
        <ShowCode
            v-else
            :code="IconChipCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="avatar Chip" id="avatar_chip"/>
      </div>

      <ComponentDescription
          text="This is an avatar chip component. Display user information with a compact avatar for a visual touch."
      />

      <ToggleTab
          :preview="avatarChipPreview"
          @update:preview="(val) => (avatarChipPreview = val)"
          @update:code="(val) => (avatarChipCode = val)"
          :code="avatarChipCode"
      />

      <ComponentWrapper>
        <div
            v-if="avatarChipPreview"
            class="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center"
        >
          <div
              class="pl-1 pr-4 py-1 dark:bg-slate-800 dark:border-slate-600 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2"
          >
            <img
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
                class="w-[25px] h-[25px] rounded-full"
                alt=""
            />
            ZenUI
          </div>

          <div
              class="pl-1 pr-4 py-1 dark:bg-slate-800 dark:border-slate-600 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2"
          >
            <img
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
                class="w-[35px] h-[35px] rounded-full"
                alt=""
            />
            ZenUI
          </div>

          <div
              class="pl-1 pr-4 py-1 dark:bg-slate-800 dark:border-slate-600 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2"
          >
            <img
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
                class="w-[45px] h-[45px] rounded-full"
                alt=""
            />
            ZenUI
          </div>
        </div>
        <ShowCode
            v-else
            :code="AvatarChipCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="variant Chip" id="variant_chip"/>
      </div>

      <ComponentDescription
          text="This is an avatar chip component. Display user information with a compact avatar for a visual touch."
      />

      <ToggleTab
          :preview="variantChipPreview"
          @update:preview="(val) => (variantChipPreview = val)"
          @update:code="(val) => (variantChipCode = val)"
          :code="variantChipCode"
      />

      <ComponentWrapper>
        <div
            v-if="variantChipPreview"
            class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <div
              class="pr-4 pl-3 py-1.5 dark:bg-orange-700/30 bg-orange-50 text-orange-400 rounded-full text-[0.9rem] font-[500] flex items-center gap-1"
          >
            <Icon icon="si:error-fill" class="text-[1.1rem] text-orange-400"/>
            Out of date
          </div>

          <div
              class="px-4 py-1.5 dark:bg-blue-600/20 bg-blue-50 text-blue-800 rounded-full text-[0.9rem] font-[500] flex items-center gap-1.5"
          >
            <Icon icon="mdi:clock-time-four" class="text-[1.1rem] text-blue-800"/>
            Pending
          </div>

          <div
              class="pl-4 pr-3 py-1.5 dark:bg-red-700/30 bg-red-100 text-red-700 rounded-full text-[0.9rem] font-[500] flex items-center gap-1"
          >
            HOT
            <Icon icon="mdi:fire" class="text-[1.3rem]"/>
          </div>

          <div
              class="px-4 py-1.5 bg-blue-500 text-white rounded-full text-[0.9rem] font-[500] flex items-center gap-1.5"
          >
            <Icon icon="gridicons:trending" class="text-[1.3rem]"/>
            Trending
          </div>
        </div>
        <ShowCode
            v-else
            :code="VariantsChipWithIconCodes"
        />
      </ComponentWrapper>

      <OverviewFooter
          backName="progress bar"
          backUrl="/components/progress-bar"
          forwardName="marquee"
          forwardUrl="/components/marquee"
      />
    </div>

    <ContentNavbar :contents="chipContents" :activeSection="activeSection"/>
  </aside>
</template>