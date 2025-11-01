<script setup>
import { ref } from "vue";

// Components
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";

// Reactive states
const imageGallery1Preview = ref(true);
const imageGallery1Code = ref(false);

// Image URLs
const images = [
  "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",
  "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",
  "https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",
  "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",
  "https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",
];
</script>

<template>
  <ContentHeader text="image Gallery 1" id="image_gallery_1" />

  <ComponentDescription
    text="This is an image gallery with a simple layout for easy browsing and viewing."
  />

  <ToggleTab
    :code="imageGallery1Code"
    @update:code="(val) => (imageGallery1Code = val)"
    :preview="imageGallery1Preview"
    @update:preview="(val) => (imageGallery1Preview = val)"
  />

  <ComponentWrapper>
    <div
      v-if="imageGallery1Preview"
      class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
    >
      <div class="grid grid-cols-3 gap-3">
        <img v-for="(img, index) in images" :key="index" :src="img" alt="" />
      </div>
    </div>

    <Showcode
      v-if="imageGallery1Code"
      code="
"
    />
  </ComponentWrapper>
</template>
