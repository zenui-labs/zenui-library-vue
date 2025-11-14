<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const image = ref("");

const handleUploadImage = () => {
  document.getElementById("fourthImage").click();
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
    <div class="text-center">
      <input
          type="file"
          name="image"
          id="fourthImage"
          class="hidden"
          @change="handleFileChange"
      />

      <div
          class="w-[150px] h-[150px] rounded-full dark:border-slate-700 border border-border flex items-center justify-center overflow-hidden"
      >

        <Icon
            v-if="image === ''"
            icon="healthicons:ui-user-profile-outline"
            class="text-[10rem] text-brandColor dark:text-slate-500"
        />
        <img
            v-else
            :src="image"
            alt="profile"
            class="w-full h-full object-cover rounded-full"
        />
      </div>

      <button
          class="px-4 py-2 bg-brandColor text-white rounded-md mt-5"
          @click="handleUploadImage"
      >
        Upload profile
      </button>
    </div>
  </div>
</template>
