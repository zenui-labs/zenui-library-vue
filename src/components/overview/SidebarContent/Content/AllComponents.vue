<script setup>
import {onMounted, ref} from "vue";
import {allComponents} from "@/Utils/AllComponents.js";
import BlocksFooter from "@/Shared/Block/BlocksFooter.vue";
import {useHead} from "@vueuse/head";

const buttonsData = ref([]);
const inputsData = ref([]);
const displayData = ref([]);
const navigationsData = ref([]);
const surfaceData = ref([]);
const feedbackData = ref([]);

onMounted(() => {
  const buttons = [];
  const inputs = [];
  const surfaces = [];
  const feedbacks = [];
  const displays = [];
  const navigations = [];

  allComponents?.forEach((componentObj) => {
    if (componentObj.groupName === "button") {
      buttons.push(componentObj);
    } else if (componentObj.groupName === "input") {
      inputs.push(componentObj);
    } else if (componentObj.groupName === "surface") {
      surfaces.push(componentObj);
    } else if (componentObj.groupName === "feedback") {
      feedbacks.push(componentObj);
    } else if (componentObj.groupName === "data_display") {
      displays.push(componentObj);
    } else if (componentObj.groupName === "navigation") {
      navigations.push(componentObj);
    }
  });

  buttonsData.value = buttons;
  inputsData.value = inputs;
  surfaceData.value = surfaces;
  feedbackData.value = feedbacks;
  displayData.value = displays;
  navigationsData.value = navigations;
});

useHead({
  title: "ZenUI All Components"
});
</script>

<template>
  <aside class="w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <h2 class="font-[600] text-brandColor uppercase text-[2rem] 425px:text-[2.5rem]">
      ZenUI components
    </h2>
    <p class="text-text dark:text-darkSubTextColor text-[1rem]">
      Every ZenUI Library component available for free.
    </p>

    <p class="text-text dark:text-darkSubTextColor text-[1rem] mt-8">
      ZenUI is a website where you can get all the component designs you
      want and they are completely free. You can copy and use them in your
      own projects from here. All the guidelines are given very nicely on
      the website so that you can understand everything well. Our components
      are developed following professional coding so you can use them with
      confidence.
    </p>

    <!-- Input -->
    <h2 class="mt-12 font-[600] text-[1.5rem] text-brandColor">Input</h2>
    <div class="grid grid-cols-2 425px:grid-cols-3 mt-4 gap-8">
      <a
          v-for="(button, index) in inputsData"
          :key="index"
          :href="button.url"
          class="border border-border transition-all duration-200 hover:shadow-[0px_40px_30px_-20px_rgba(107,110,148,.04)] dark:border-darkBorderColor rounded-high"
      >
        <img
            :src="button.image"
            alt="component/image"
            class="w-full h-[150px] rounded-t object-contain"
        />
        <div class="border-t dark:border-darkBorderColor border-border p-4">
          <h2 class="text-text font-[600] text-[1rem] dark:text-darkSubTextColor capitalize">
            {{ button.title }}
          </h2>
        </div>
      </a>
    </div>

    <!-- Navigation -->
    <h2 class="mt-12 font-[600] text-[1.5rem] text-brandColor">Navigation</h2>
    <div class="grid grid-cols-2 425px:grid-cols-3 mt-4 gap-8">
      <a
          v-for="(button, index) in navigationsData"
          :key="index"
          :href="button.url"
          class="border border-border transition-all duration-200 hover:shadow-[0px_40px_30px_-20px_rgba(107,110,148,.04)] dark:border-darkBorderColor rounded-high"
      >
        <img
            :src="button.image"
            alt="component/image"
            class="w-full h-[150px] rounded-t object-contain"
        />
        <div class="border-t dark:border-darkBorderColor border-border p-4">
          <h2 class="text-text font-[600] text-[1rem] dark:text-darkSubTextColor capitalize">
            {{ button.title }}
          </h2>
        </div>
      </a>
    </div>

    <!-- Buttons -->
    <h2 class="mt-12 font-[600] text-[1.5rem] mb-3 text-brandColor">Buttons</h2>
    <div class="grid grid-cols-2 425px:grid-cols-3 gap-8">
      <a
          v-for="(button, index) in buttonsData"
          :key="index"
          :href="button.url"
          class="border border-border transition-all duration-200 hover:shadow-[0px_40px_30px_-20px_rgba(107,110,148,.04)] dark:border-darkBorderColor rounded-high"
      >
        <img
            :src="button.image"
            alt="component/image"
            class="w-full h-[150px] rounded-t object-contain"
        />
        <div class="border-t dark:border-darkBorderColor border-border p-4">
          <h2 class="text-text font-[600] text-[1rem] dark:text-darkSubTextColor capitalize">
            {{ button.title }}
          </h2>
        </div>
      </a>
    </div>

    <!-- Feedback -->
    <h2 class="mt-12 font-[600] text-[1.5rem] text-brandColor">Feedback</h2>
    <div class="grid grid-cols-2 425px:grid-cols-3 mt-4 gap-8">
      <a
          v-for="(button, index) in feedbackData"
          :key="index"
          :href="button.url"
          class="border border-border transition-all duration-200 hover:shadow-[0px_40px_30px_-20px_rgba(107,110,148,.04)] dark:border-darkBorderColor rounded-high"
      >
        <img
            :src="button.image"
            alt="component/image"
            class="w-full h-[150px] rounded-t object-contain"
        />
        <div class="border-t dark:border-darkBorderColor border-border p-4">
          <h2 class="text-text font-[600] text-[1rem] dark:text-darkSubTextColor capitalize">
            {{ button.title }}
          </h2>
        </div>
      </a>
    </div>

    <!-- Surface -->
    <h2 class="mt-12 font-[600] text-[1.5rem] mb-3 text-brandColor">Surface</h2>
    <div class="grid grid-cols-2 425px:grid-cols-3 gap-8">
      <a
          v-for="(button, index) in surfaceData"
          :key="index"
          :href="button.url"
          class="border border-border transition-all duration-200 hover:shadow-[0px_40px_30px_-20px_rgba(107,110,148,.04)] dark:border-darkBorderColor rounded-high"
      >
        <img
            :src="button.image"
            alt="component/image"
            class="w-full h-[150px] rounded-t object-contain"
        />
        <div class="border-t dark:border-darkBorderColor border-border p-4">
          <h2 class="text-text font-[600] text-[1rem] dark:text-darkSubTextColor capitalize">
            {{ button.title }}
          </h2>
        </div>
      </a>
    </div>

    <!-- DataDisplay -->
    <h2 class="mt-12 font-[600] text-[1.5rem] mb-3 text-brandColor">Data Display</h2>
    <div class="grid grid-cols-2 425px:grid-cols-3 gap-8">
      <a
          v-for="(button, index) in displayData"
          :key="index"
          :href="button.url"
          class="border border-border transition-all duration-200 hover:shadow-[0px_40px_30px_-20px_rgba(107,110,148,.04)] dark:border-darkBorderColor rounded-high"
      >
        <img
            :src="button.image"
            alt="component/image"
            class="w-full h-[150px] rounded-t object-contain"
        />
        <div class="border-t dark:border-darkBorderColor border-border p-4">
          <h2 class="text-text font-[600] text-[1rem] dark:text-darkSubTextColor capitalize">
            {{ button.title }}
          </h2>
        </div>
      </a>
    </div>
  </aside>

  <div class="px-8 425px:px-10">
    <BlocksFooter
        backUrl="/getting-started/templates"
        backName="templates"
        forwardName="input"
        forwardUrl="/components/input-text"
    />
  </div>
</template>
