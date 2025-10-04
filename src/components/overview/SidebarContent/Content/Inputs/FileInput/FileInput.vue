<script setup>
import { ref } from "vue";

// components
import OverviewFooter from "../../../../../../Shared/OverviewFooter.vue";
import ContentHeader from "../../../../../../Shared/ContentHeader.vue";
import Showcode from "../../../../../../Shared/Component/ShowCode.vue";
import ComponentDescription from "../../../../../../Shared/Component/ComponentDescription.vue";
import ComponentWrapper from "../../../../../../Shared/Component/ComponentWrapper.vue";
import ToggleTab from "../../../../../../Shared/Component/ToggleTab.vue";
import ContentNavbar from "../../../../../../Shared/Component/ContentNavbar.vue";

// uploads
import UploadWithIcon from "./UploadWithIcon.vue";
import UploadWithButton from "./UploadWithButton.vue";
import UploadWithHeading from "./UploadWithHeading.vue";
import ProfileUpload from "./ProfileUpload.vue";

// contents for scrollspy
import { fileInputContents } from "../../../../../../Utils/ContentsConfig/InputContents.js";
import { useScrollSpy } from "../../../../../../CustomHooks/useScrollSpy.js";
import { useHead } from "@vueuse/head";

const sectionIds = fileInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// upload with icon
const iconUploadPreview = ref(true);
const iconUploadCode = ref(false);

// upload with button
const buttonUploadPreview = ref(true);
const buttonUploadCode = ref(false);

// upload with heading
const headingUploadPreview = ref(true);
const headingUploadCode = ref(false);

// profile upload
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
      <!-- Upload with icon -->
      <ContentHeader text="upload with icon" id="upload_with_icon" />

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
        <div v-if="iconUploadPreview">
          <UploadWithIcon />
        </div>
        <div v-if="iconUploadCode">
          <Showcode code="/* your code here */" />
        </div>
      </ComponentWrapper>

      <!-- Upload with button -->
      <div class="mt-8">
        <ContentHeader text="upload with button" id="upload_with_button" />
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
        <div v-if="buttonUploadPreview">
          <UploadWithButton />
        </div>
        <div v-if="buttonUploadCode">
          <Showcode code="" />
        </div>
      </ComponentWrapper>

      <!-- Upload with heading -->
      <div class="mt-8">
        <ContentHeader text="upload with heading" id="upload_with_heading" />
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
        <div v-if="headingUploadPreview">
          <UploadWithHeading />
        </div>
        <div v-if="headingUploadCode">
          <Showcode code="/* heading code */" />
        </div>
      </ComponentWrapper>

      <!-- Profile upload -->
      <div class="mt-8">
        <ContentHeader text="profile upload" id="profile_upload" />
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
        <div v-if="profileUploadPreview">
          <ProfileUpload />
        </div>
        <div v-if="profileUploadCode">
          <Showcode code="/* profile upload code */" />
        </div>
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
