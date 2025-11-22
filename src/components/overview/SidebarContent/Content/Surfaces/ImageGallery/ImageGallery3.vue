<script setup>
import {ref} from "vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";
import {
  ImageGallery3Codes
} from "@/components/overview/SidebarContent/Content/Surfaces/PreviewCodes/ImageGalleryPreviewCodes.js";

const imageGallery3Preview = ref(true);
const imageGallery3Code = ref(false);

const images = [
  {
    src: "https://img.freepik.com/free-vector/beach-seascape-scenery_603843-2331.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "row-span-2 col-span-2 w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover col-span-1",
  },
  {
    src: "https://img.freepik.com/free-photo/landscape-hills-covered-greenery-with-rocky-mountains-cloudy-sky_181624-9192.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover col-span-1",
  },
  {
    src: "https://img.freepik.com/free-vector/summer-natural-landscape-with-meadow-mountains_107791-24623.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover col-span-3",
  },
];
</script>

<template>
  <div class="mt-8">
    <ContentHeader text="image Gallery 3" id="image_gallery_3"/>
  </div>

  <ComponentDescription
      text="This is an image gallery with a sleek layout for stylish and organized viewing."
  />

  <ToggleTab
      :code="imageGallery3Code"
      @update:code="(val) => (imageGallery3Code = val)"
      :preview="imageGallery3Preview"
      @update:preview="(val) => (imageGallery3Preview = val)"
  />

  <ComponentWrapper>
    <div
        v-if="imageGallery3Preview"
        class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
    >
      <div class="grid grid-cols-3 gap-2">
        <img
            v-for="(img, index) in images"
            :key="index"
            :src="img.src"
            alt="image"
            :class="img.class"
        />
      </div>
    </div>

    <Showcode
        v-if="imageGallery3Code"
        :code="ImageGallery3Codes"
    />
  </ComponentWrapper>
</template>
