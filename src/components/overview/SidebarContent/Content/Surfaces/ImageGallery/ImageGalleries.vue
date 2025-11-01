<script setup>
// Components
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import ImageGallery1 from "./ImageGallery1.vue";
import ImageGallery2 from "./ImageGallery2.vue";
import ImageGallery3 from "./ImageGallery3.vue";
import ImageGallery4 from "./ImageGallery4.vue";
import ImageGallery5 from "./ImageGallery5.vue";
import ImageGallery6 from "./ImageGallery6.vue";

// Data
import { imageGalleryContents } from "@/Utils/ContentsConfig/SurfacesContents";
import { useScrollSpy } from "@/CustomHooks/useScrollSpy";

// Scroll spy logic
const sectionIds = imageGalleryContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);
</script>

<template>
  <div
    class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full 425px:w-[80%]">
      <ImageGallery1 />
      <ImageGallery2 />
      <ImageGallery3 />
      <ImageGallery4 />
      <ImageGallery5 />
      <ImageGallery6 />

      <OverviewFooter
        back-url="/components/appbar"
        back-name="app bar"
        forward-name="Carousel"
        forward-url="/components/carousel"
      />
    </div>

    <ContentNavbar
      :active-section="activeSection"
      :contents="imageGalleryContents"
    />
  </div>
</template>
