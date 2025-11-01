<script setup>
import { ref } from "vue";

// Components
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import Showcode from "@/Shared/Component/ShowCode.vue";

// Reactive states
const imageGallery4Preview = ref(true);
const imageGallery4Code = ref(false);

// Images with classes
const images = [
  {
    src: "https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "row-span-1 col-span-2 w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-view-mesmerizing-nature-traditional-styled-japanese-adelaide-himeji-gardens_181624-46195.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/autumn-river-ordesa-national-park-pyrenees-huesca-aragon-spain_1301-6980.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/mustard-field-with-beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4824.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover col-span-2 row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/fictitious-floating-island_1048-2899.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover col-span-2 row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/scenic-view-mountains-lake_53876-138187.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover col-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/sunset-with-silhoutte-birds-flying_335224-915.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover",
  },
  {
    src: "https://img.freepik.com/free-photo/landscape-rocks-surrounded-by-forests-covered-fog-cloudy-sky_181624-6475.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover col-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/mist-chinese-water-peak-landscapes_1417-36.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",
    class: "w-full h-full object-cover",
  },
];
</script>

<template>
  <div class="mt-8">
    <ContentHeader text="image Gallery 4" id="image_gallery_4" />
  </div>

  <ComponentDescription
    text="This is an image gallery with a robust layout for structured and efficient viewing."
  />

  <ToggleTab
    :code="imageGallery4Code"
    @update:code="(val) => (imageGallery4Code = val)"
    :preview="imageGallery4Preview"
    @update:preview="(val) => (imageGallery4Preview = val)"
  />

  <ComponentWrapper>
    <div
      v-if="imageGallery4Preview"
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
      v-if="imageGallery4Code"
      code="
"
    />
  </ComponentWrapper>
</template>
