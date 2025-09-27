<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const image = ref("");

const handleImageUpload = () => {
  document.getElementById("secondImage").click();
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    image.value = imageURL;
  }
};
</script>

<template>
  <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
    <input
      type="file"
      name="image"
      id="secondImage"
      class="hidden"
      @change="handleFileChange"
    />

    <div
      v-if="image === ''"
      class="w-full 1024px:w-[90%] flex dark:border-slate-700 dark:bg-slate-900 items-center justify-center flex-col bg-white border border-dashed border-brandColor rounded-md py-6"
    >
      <!-- 👇 Replaced IoMdCloudUpload -->
      <Icon icon="ion:cloud-upload" class="text-[3rem] text-brandColor" />

      <p class="mt-2 text-text dark:text-[#abc2d3]">Drag and drop here</p>
      <p class="text-text dark:text-[#abc2d3]">or</p>

      <button
        class="px-6 py-1.5 text-brandColor"
        @click="handleImageUpload"
      >
        Browse
      </button>
    </div>

    <div v-else class="relative w-full 1024px:w-[80%] h-[200px]">
      <img :src="image" alt="image" class="w-full h-full object-cover" />

      <!-- 👇 Replaced MdDelete -->
      <Icon
        icon="mdi:delete"
        class="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
        @click="image = ''"
      />
    </div>
  </div>
</template>
