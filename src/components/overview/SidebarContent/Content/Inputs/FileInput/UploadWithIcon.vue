<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const image = ref("");

const handleUploadImage = () => {
  document.getElementById("image").click();
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
    <input
        type="file"
        name="image"
        id="image"
        class="hidden"
        @change="handleFileChange"
    />

    <div
        v-if="image === ''"
        class="w-full 1024px:w-[90%] flex items-center dark:border-slate-600 justify-center flex-col gap-4 border-border border rounded-md py-6 cursor-pointer"
        @click="handleUploadImage"
    >
      <Icon icon="mdi:upload" class="text-[2rem] text-brandColor dark:text-[#abc2d3]"/>
      <p class="text-brandColor dark:text-[#abc2d3]">Browse to upload your file</p>
    </div>

    <div v-else class="relative w-full 1024px:w-[80%] h-[300px]">
      <img :src="image" alt="image" class="w-full h-full object-cover"/>

      <Icon
          icon="mdi:delete"
          class="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
          @click="image = ''"
      />
    </div>
  </div>
</template>
