<script setup>
import { ref } from "vue";

// Components
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";
import { Icon } from "@iconify/vue";

// Reactive states
const imageGallery6Preview = ref(true);
const imageGallery6Code = ref(false);

// Images with title info
const galleryImages = [
  {
    src: "https://img.freepik.com/free-photo/waterfall-nature-thailand_335224-989.jpg",
    title: "Natural",
    author: "@prokas",
  },
  {
    src: "https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg",
    title: "Natural",
    author: "@prokas",
  },
  {
    src: "https://img.freepik.com/free-photo/island-view-from-sea_1127-2244.jpg",
    title: "Natural",
    author: "@prokas",
  },
  {
    src: "https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg",
    title: "Natural",
    author: "@prokas",
  },
  {
    src: "https://img.freepik.com/free-photo/green-park-view_1417-1487.jpg",
    title: "Natural",
    author: "@prokas",
  },
  {
    src: "https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg",
    title: "Natural",
    author: "@prokas",
  },
];
</script>

<template>
  <div class="mt-8">
    <ContentHeader text="Image Gallery with title bar" id="image_gallery_6" />
  </div>

  <ComponentDescription
    text="This is an image gallery with a stylish layout featuring title text and icons for enhanced visual appeal."
  />

  <ToggleTab
    :code="imageGallery6Code"
    @update:code="(val) => (imageGallery6Code = val)"
    :preview="imageGallery6Preview"
    @update:preview="(val) => (imageGallery6Preview = val)"
  />

  <ComponentWrapper>
    <div
      v-if="imageGallery6Preview"
      class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
    >
      <div class="grid grid-cols-2 640px:grid-cols-3 gap-2">
        <div
          v-for="(img, index) in galleryImages"
          :key="index"
          class="relative"
        >
          <img :src="img.src" class="w-full h-full object-cover" />

          <div
            class="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between"
          >
            <div>
              <h3 class="text-[1rem] font-[600]">{{ img.title }}</h3>
              <p class="text-[0.9rem]">{{ img.author }}</p>
            </div>
            <!-- Updated icon -->
            <Icon
              icon="rx:cross-1"
              class="text-[1.4rem] cursor-pointer text-[#00000093]"
            />
          </div>
        </div>
      </div>
    </div>

    <Showcode v-if="imageGallery6Code" code="" />
  </ComponentWrapper>
</template>
