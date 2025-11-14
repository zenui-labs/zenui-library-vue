<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const image = ref("");

const handleUploadImage = () => {
  document.getElementById("thridImage").click();
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    image.value = URL.createObjectURL(file);
  }
};
</script>

<template>
  <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
    <div v-if="image === ''" class="text-center w-full 1024px:w-[90%]">
      <input
          type="file"
          name="image"
          id="thridImage"
          class="hidden"
          @change="handleFileChange"
      />
      <h1 class="text-[1.5rem] dark:text-[#abc2d3] text-text font-[600]">
        Upload your files
      </h1>
      <p class="text-[#777777] dark:text-[#abc2d3]/80 font-[400] text-[1rem]">
        JPG,PNG,JPEG
      </p>

      <div
          class="mt-5 w-full 1024px:w-[70%] mx-auto dark:border-slate-700 dark:bg-slate-900 flex items-center justify-center flex-col bg-white border-[2px] border-dashed border-brandColor rounded-md py-10 cursor-pointer"
          @click="handleUploadImage"
      >

        <Icon icon="mdi:file-upload-outline" class="text-[4rem] text-brandColor dark:text-[#abc2d3]/70"/>
      </div>
    </div>

    <div v-else class="relative w-full 1024px:w-[80%] h-[200px]">
      <img :src="image" alt="image" class="w-full h-full object-cover"/>


      <Icon
          icon="mdi:delete"
          class="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
          @click="image = ''"
      />
    </div>
  </div>
</template>
