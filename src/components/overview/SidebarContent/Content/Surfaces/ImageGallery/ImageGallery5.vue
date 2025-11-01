<script setup>
import { ref } from "vue";

// Components
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";

// Reactive states
const imageGallery5Preview = ref(true);
const imageGallery5Code = ref(false);

// Images with classes
const images = [
  {
    src: "https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/landscape-hills-covered-greenery-with-rocky-mountains-cloudy-sky_181624-9192.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/vertical-orange-lily-field-cloudy-dark-sky_181624-37905.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/bamboo-forest-kyoto-japan_335224-28.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/vertical-orange-lily-field-cloudy-dark-sky_181624-37905.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/fog-dark-clouds-mountains_1204-503.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?size=626&ext=jpg",
    class: "w-full h-full object-cover",
  },
];
</script>

<template>
  <div class="mt-8">
    <ContentHeader text="image Gallery 5" id="image_gallery_5" />
  </div>

  <ComponentDescription
    text="This is an image gallery with a complex layout for detailed and organized viewing."
  />

  <ToggleTab
    :code="imageGallery5Code"
    @update:code="(val) => (imageGallery5Code = val)"
    :preview="imageGallery5Preview"
    @update:preview="(val) => (imageGallery5Preview = val)"
  />

  <ComponentWrapper>
    <div
      v-if="imageGallery5Preview"
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
      v-if="imageGallery5Code"
      code="
"
    />
  </ComponentWrapper>
</template>
