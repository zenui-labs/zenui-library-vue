<script setup>
import { ref } from "vue";

import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";

import { authButtonContents } from "@/Utils/ContentsConfig/ButtonsContents";
import { useScrollSpy } from "@/CustomHooks/useScrollSpy";
import {
  AppleLoginButtonPreviewCode,
  GoogleLoginButtonPreviewCode,
  SocialLoginBgButtonPreviewCode,
  SocialLoginBorderButtonPreviewCode,
} from "./PreviewCodes/AuthButtonPreviewCodes";

const sectionIds = authButtonContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const googleLoginButtonPreview = ref(true);
const googleLoginButtonCode = ref(false);

const appleLoginButtonPreview = ref(true);
const appleLoginButtonCode = ref(false);

const socialBgButtonPreview = ref(true);
const socialBgButtonCode = ref(false);

const socialBorderButtonPreview = ref(true);
const socialBorderButtonCode = ref(false);
</script>

<template>
  <aside
    class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="login with google" id="login_with_google" />
      <ComponentDescription
        text="Button for logging in with Google, offering a quick and secure way to authenticate using your Google account."
      />
      <ToggleTab
        :preview="googleLoginButtonPreview"
        :code="googleLoginButtonCode"
        @update:preview="(val) => (googleLoginButtonPreview = val)"
        @update:code="(val) => (googleLoginButtonCode = val)"
      />
      <ComponentWrapper>
        <div
          v-if="googleLoginButtonPreview"
          class="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center"
        >
          <!-- Bordered Google Login Button -->
          <button
            class="border border-border dark:border-slate-600 dark:text-[#abc2d3] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-text hover:bg-gray-50 transition-all duration-200"
          >
            <img
              src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
              alt="google logo"
              class="w-[23px]"
            />
            Sign in with Google
          </button>

          <!-- Background Google Login Button -->
          <button
            class="bg-brandColor text-white rounded-md py-1 pl-1 pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-brandColor/80 transition-all duration-200"
          >
            <div class="py-2 px-2.5 rounded-l-md bg-white">
              <img
                src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                alt="google logo"
                class="w-[23px]"
              />
            </div>
            Sign in with Google
          </button>

          <!-- Logo Circle Background Google Button -->
          <button
            class="bg-brandColor text-white rounded-md py-[5px] pl-[5px] pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-brandColor/80 transition-all duration-200"
          >
            <div class="p-2 rounded-full bg-white">
              <img
                src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                alt="google logo"
                class="w-[23px]"
              />
            </div>
            Sign in with Google
          </button>
        </div>
        <ShowCode
          v-if="googleLoginButtonCode"
          :code="GoogleLoginButtonPreviewCode"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="login with apple" id="login_with_apple" />
      </div>
      <ComponentDescription
        text="Button for logging in with Apple, providing a seamless and private way to sign in using your Apple ID."
      />
      <ToggleTab
        :preview="appleLoginButtonPreview"
        :code="appleLoginButtonCode"
        @update:preview="(val) => (appleLoginButtonPreview = val)"
        @update:code="(val) => (appleLoginButtonCode = val)"
      />
      <ComponentWrapper>
        <div
          v-if="appleLoginButtonPreview"
          class="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center"
        >
          <!-- Black Background Apple Button -->
          <button
            class="bg-black text-white dark:bg-slate-800 rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png"
              alt="apple logo"
              class="w-[23px]"
            />
            Continue with Apple
          </button>

          <!-- White Border Apple Button -->
          <button
            class="border border-border dark:border-slate-600 dark:text-[#abc2d3] text-text rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] hover:bg-gray-50 transition-all duration-200"
          >
            <img
              src="https://i.ibb.co/6NFjc6z/download-removebg-preview.png"
              alt="apple logo"
              class="w-[23px]"
            />
            Continue with Apple
          </button>
        </div>
        <ShowCode
          v-if="appleLoginButtonCode"
          :code="AppleLoginButtonPreviewCode"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
          text="Social Login background"
          id="social_login_background"
        />
      </div>
      <ComponentDescription
        text="Background design for social login buttons, enhancing the visual appeal and consistency of social authentication options."
      />
      <ToggleTab
        :preview="socialBgButtonPreview"
        :code="socialBgButtonCode"
        @update:preview="(val) => (socialBgButtonPreview = val)"
        @update:code="(val) => (socialBgButtonCode = val)"
      />
      <ComponentWrapper>
        <div
          v-if="socialBgButtonPreview"
          class="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center"
        >
          <!-- Github Button -->
          <button
            class="bg-black text-white dark:bg-slate-800 rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://i.ibb.co/w4xtRf9/download-10-removebg-preview.png"
              alt="Github logo"
              class="w-[35px]"
            />
            Continue with Github
          </button>

          <!-- Linkedin Button -->
          <button
            class="bg-[#0a66c2] text-white rounded-md py-[11px] px-[15px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632cacdc3a7f08d5fb21fa73_linkedin-white.svg"
              alt="Linkedin logo"
              class="w-[25px]"
            />
            Continue with Linkedin
          </button>

          <!-- Dribble Button -->
          <button
            class="bg-[#ea4c89] text-white rounded-md py-[11px] px-[19px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://i.ibb.co/8BcCFQv/download-11-removebg-preview.png"
              alt="Dribble logo"
              class="w-[25px]"
            />
            Continue with Dribble
          </button>

          <!-- Facebook Button -->
          <button
            class="bg-[#1777f2] text-white rounded-md py-[11px] px-[10px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://i.ibb.co/GP1q2C7/download-12-removebg-preview.png"
              alt="Facebook logo"
              class="w-[25px]"
            />
            Continue with Facebook
          </button>

          <!-- Spotify Button -->
          <button
            class="bg-[#1db954] text-white rounded-md py-[11px] px-[19px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632cacdbd49f28d441099203_spotify-white.svg"
              alt="Spotify logo"
              class="w-[25px]"
            />
            Continue with Spotify
          </button>

          <!-- Microsoft Button -->
          <button
            class="bg-[#2f2f2f] text-white rounded-md py-[11px] px-[10px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4b20dd0430d840a26_microsoft.svg"
              alt="Microsoft logo"
              class="w-[25px]"
            />
            Continue with Microsoft
          </button>
        </div>
        <ShowCode
          v-if="socialBgButtonCode"
          :code="SocialLoginBgButtonPreviewCode"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
          text="Social Login bordered"
          id="social_login_bordered"
        />
      </div>
      <ComponentDescription
        text="Social login buttons with borders, providing a clean and defined look for authentication options."
      />
      <ToggleTab
        :preview="socialBorderButtonPreview"
        :code="socialBorderButtonCode"
        @update:preview="(val) => (socialBorderButtonPreview = val)"
        @update:code="(val) => (socialBorderButtonCode = val)"
      />
      <ComponentWrapper>
        <div
          v-if="socialBorderButtonPreview"
          class="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center"
        >
          <!-- Github Button -->
          <button
            class="border border-black dark:border-slate-600 dark:text-[#abc2d3] text-black rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c46041d682027a3c2a_github.svg"
              alt="Github logo"
              class="w-[30px]"
            />
            Continue with Github
          </button>

          <!-- Linkedin Button -->
          <button
            class="border border-[#0a66c2] text-[#0a66c2] rounded-md py-[11px] px-[12px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4b20dd0e861840a27_linkedin.svg"
              alt="Linkedin logo"
              class="w-[25px]"
            />
            Continue with Linkedin
          </button>

          <!-- Dribble Button -->
          <button
            class="border border-[#ea4c89] text-[#ea4c89] rounded-md py-[11px] px-[16px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632ca01585cf323fdd614a81_dribbble-svgrepo-com.svg"
              alt="Dribble logo"
              class="w-[25px]"
            />
            Continue with Dribble
          </button>

          <!-- Facebook Button -->
          <button
            class="border border-[#1777f2] text-[#1777f2] rounded-md py-[11px] px-[7px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c960d4839cf20aeafcad2_facebook.svg"
              alt="Facebook logo"
              class="w-[25px]"
            />
            Continue with Facebook
          </button>

          <!-- Spotify Button -->
          <button
            class="border border-[#1db954] text-[#1db954] rounded-md py-[11px] px-[16px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4c75f2ea0362f20b7_spotify.svg"
              alt="Spotify logo"
              class="w-[25px]"
            />
            Continue with Spotify
          </button>

          <!-- Microsoft Button -->
          <button
            class="border border-[#2f2f2f] text-[#2f2f2f] dark:border-slate-600 dark:text-[#abc2d3] rounded-md py-[11px] px-[7px] flex items-center gap-[10px] text-[1rem]"
          >
            <img
              src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4b20dd0430d840a26_microsoft.svg"
              alt="Microsoft logo"
              class="w-[25px]"
            />
            Continue with Microsoft
          </button>
        </div>
        <ShowCode
          v-if="socialBorderButtonCode"
          :code="SocialLoginBorderButtonPreviewCode"
        />
      </ComponentWrapper>

      <OverviewFooter
        backUrl="/components/button"
        backName="button"
        forwardUrl="/components/dropdown-button"
        forwardName="dropdown button"
      />
    </div>

    <ContentNavbar
      :contents="authButtonContents"
      :activeSection="activeSection"
    />
  </aside>
</template>
