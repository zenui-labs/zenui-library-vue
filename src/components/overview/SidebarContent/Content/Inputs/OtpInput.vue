<script setup>
import {ref} from "vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";

import {otpInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {
  autoNavigationOtpCodes,
  customNavigationOtpCodes
} from "@/components/overview/SidebarContent/Content/Inputs/PreviewCodes/OtpInputPreviewCodes.js";

const sectionIds = otpInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const customNavigatePreview = ref(true);
const customNavigationCode = ref(false);
const autoNavigationPreview = ref(true);
const autoNavigationCode = ref(false);

const autoOtp = ref("");
const length = 4;

const customNavigationInputs = ref([]);
const autoNavigationInputs = ref([]);

const onChange = (value) => {
  autoOtp.value = value;
};

const handleCustomNavigationInputChange = (e, index) => {
  const {value} = e.target;
  const newOtp = customNavigationInputs.value.map((input) => input?.value || "");

  if (/^[0-9]$/.test(value) && value.length === 1) {
    newOtp[index] = value;
    onChange(newOtp.join(""));
  } else if (value === "") {
    newOtp[index] = "";
    onChange(newOtp.join(""));
  } else {
    e.target.value = value.slice(0, 1);
  }
};

const handleAutoNavigationInputChange = (e, index) => {
  const {value} = e.target;
  const newOtp = autoNavigationInputs.value.map((input) => input?.value || "");

  if (/^[0-9]$/.test(value) && value.length === 1) {
    newOtp[index] = value;
    onChange(newOtp.join(""));

    if (index < length - 1) {
      autoNavigationInputs.value[index + 1]?.focus();
    }
  } else if (value === "") {
    newOtp[index] = "";
    onChange(newOtp.join(""));
  } else {
    e.target.value = value.slice(0, 1);
  }
};

const handleAutoNavigationKeydown = (e, index) => {
  if (e.key === "Backspace" && !autoNavigationInputs.value[index].value && index > 0) {
    autoNavigationInputs.value[index - 1]?.focus();
  }
};

const handleAutoNavigationPaste = (e) => {
  e.preventDefault();
  const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length);

  const newOtp = autoNavigationInputs.value.map((input) => input?.value || "");

  for (let i = 0; i < pastedData.length && i < length; i++) {
    newOtp[i] = pastedData[i];
    autoNavigationInputs.value[i].value = pastedData[i];
  }

  onChange(newOtp.join(""));
  const focusIndex = Math.min(pastedData.length, length - 1);
  autoNavigationInputs.value[focusIndex]?.focus();
};
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div>
      <ContentHeader text="custom navigation" id="custom_navigation"/>

      <ComponentDescription
          text="Custom OTP input field with navigation controls, allowing users to easily move between digits for seamless entry."
      />

      <ToggleTab
          :code="customNavigationCode"
          @update:code="(val) => (customNavigationCode = val)"
          :preview="customNavigatePreview"
          @update:preview="(val) => (customNavigatePreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="customNavigatePreview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="grid grid-cols-4 gap-[10px] w-full 1024px:w-[40%]">
            <input
                v-for="(_, index) in length"
                :key="index"
                ref="customNavigationInputs"
                class="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-brandColor"
                placeholder="0"
                type="number"
                @wheel="$event.target.blur()"
                @input="(e) => handleCustomNavigationInputChange(e, index)"
            />
          </div>
        </div>

        <ShowCode
            v-if="customNavigationCode"
            :code="customNavigationOtpCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="Keyboard navigation" id="keyboard_navigation"/>
      </div>

      <ComponentDescription
          text="OTP input field with keyboard navigation, enabling users to move between digits using arrow keys and paste numeric codes (extracting only numbers) for quick and efficient entry."
      />

      <ToggleTab
          :code="autoNavigationCode"
          @update:code="(val) => (autoNavigationCode = val)"
          :preview="autoNavigationPreview"
          @update:preview="(val) => (autoNavigationPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="autoNavigationPreview"
            class="p-8 mb-4 pt-12 flex items-center flex-col gap-5 justify-center"
        >
          <div class="grid grid-cols-4 gap-[10px] w-full 1024px:w-[40%]">
            <input
                v-for="(_, index) in length"
                :key="index"
                ref="autoNavigationInputs"
                class="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-brandColor"
                placeholder="0"
                type="number"
                @wheel="$event.target.blur()"
                @input="(e) => handleAutoNavigationInputChange(e, index)"
                @keydown="(e) => handleAutoNavigationKeydown(e, index)"
                @paste="(e) => handleAutoNavigationPaste(e, index)"
            />
          </div>
        </div>

        <ShowCode
            v-if="autoNavigationCode"
            :code="autoNavigationOtpCodes"
        />
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/input-file"
          backName="file"
          forwardName="button"
          forwardUrl="/components/button"
      />
    </div>

    <ContentNavbar classs="w-[70%]" :contents="otpInputContents" :activeSection="activeSection"/>
  </aside>
</template>
