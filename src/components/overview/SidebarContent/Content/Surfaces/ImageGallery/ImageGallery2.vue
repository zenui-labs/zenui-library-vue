<script setup>
import {ref} from "vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";
import {
  ImageGallery2Codes
} from "@/components/overview/SidebarContent/Content/Surfaces/PreviewCodes/ImageGalleryPreviewCodes.js";

const imageGallery2Preview = ref(true);
const imageGallery2Code = ref(false);

const images = [
  {
    src: "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg",
    class: "col-span-2 w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg",
    class: "w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    class: "w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg",
    class: "col-span-2 w-full h-full object-cover",
  },
];
</script>

<template>
  <div class="mt-8">
    <ContentHeader text="image Gallery 2" id="image_gallery_2"/>
  </div>

  <ComponentDescription
      text="This is an image gallery with a complex layout for detailed and organized viewing."
  />

  <ToggleTab
      :code="imageGallery2Code"
      @update:code="(val) => (imageGallery2Code = val)"
      :preview="imageGallery2Preview"
      @update:preview="(val) => (imageGallery2Preview = val)"
  />

  <ComponentWrapper>
    <div
        v-if="imageGallery2Preview"
        class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
    >
      <div class="grid grid-cols-4 gap-2">
        <img
            v-for="(img, index) in images"
            :key="index"
            :src="img.src"
            :class="img.class"
        />
      </div>
    </div>

    <Showcode
        v-if="imageGallery2Code"
        :code="ImageGallery2Codes"
    />
  </ComponentWrapper>
</template>
