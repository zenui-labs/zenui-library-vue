<script setup>
import {ref} from "vue";
import {useHead} from "@vueuse/head";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";

import UploadWithIcon from "./UploadWithIcon.vue";
import UploadWithButton from "./UploadWithButton.vue";
import UploadWithHeading from "./UploadWithHeading.vue";
import ProfileUpload from "./ProfileUpload.vue";

import {fileInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {
  fileUploadWithButtonCodes,
  fileUploadWithHeadingCodes,
  fileUploadWithIconCodes,
  profileUploadCodes
} from "@/components/overview/SidebarContent/Content/Inputs/PreviewCodes/FileInputPreviewCodes.js";

const sectionIds = fileInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const iconUploadPreview = ref(true);
const iconUploadCode = ref(false);

const buttonUploadPreview = ref(true);
const buttonUploadCode = ref(false);

const headingUploadPreview = ref(true);
const headingUploadCode = ref(false);

const profileUploadPreview = ref(true);
const profileUploadCode = ref(false);

useHead({
  title: "Form - File Input",
});
</script>

<template>
  <aside
      class="flex items-start justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="upload with icon" id="upload_with_icon"/>

      <ComponentDescription
          text="This is a file upload with icon component. Upload files easily using intuitive icons for guidance."
      />

      <ToggleTab
          :code="iconUploadCode"
          @update:code="val => iconUploadCode = val"
          :preview="iconUploadPreview"
          @update:preview="val => iconUploadPreview = val"
      />

      <ComponentWrapper>
        <UploadWithIcon v-if="iconUploadPreview"/>
        <ShowCode v-else :code="fileUploadWithIconCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="upload with button" id="upload_with_button"/>
      </div>

      <ComponentDescription
          text="This is a file upload with button component. Easily upload files with a simple click of a button."
      />

      <ToggleTab
          :code="buttonUploadCode"
          @update:code="val => buttonUploadCode = val"
          :preview="buttonUploadPreview"
          @update:preview="val => buttonUploadPreview = val"
      />

      <ComponentWrapper>
        <UploadWithButton v-if="buttonUploadPreview"/>
        <ShowCode v-else :code="fileUploadWithButtonCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="upload with heading" id="upload_with_heading"/>
      </div>

      <ComponentDescription
          text="This is a file upload with heading text component. Upload files accompanied by clear heading instructions."
      />

      <ToggleTab
          :code="headingUploadCode"
          @update:code="val => headingUploadCode = val"
          :preview="headingUploadPreview"
          @update:preview="val => headingUploadPreview = val"
      />

      <ComponentWrapper>
        <UploadWithHeading v-if="headingUploadPreview"/>
        <ShowCode v-else :code="fileUploadWithHeadingCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="profile upload" id="profile_upload"/>
      </div>

      <ComponentDescription
          text="This is a profile upload component. Easily update your profile picture with a simple upload feature."
      />

      <ToggleTab
          :code="profileUploadCode"
          @update:code="val => profileUploadCode = val"
          :preview="profileUploadPreview"
          @update:preview="val => profileUploadPreview = val"
      />

      <ComponentWrapper>
        <ProfileUpload v-if="profileUploadPreview"/>
        <ShowCode v-else :code="profileUploadCodes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/input-range"
          backName="range"
          forwardName="OTP input"
          forwardUrl="/components/otp-input"
      />
    </div>

    <ContentNavbar
        :contents="fileInputContents"
        :activeSection="activeSection"
    />
  </aside>
</template>
