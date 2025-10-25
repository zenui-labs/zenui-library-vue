<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const selectedImage = ref(null);
const errorMessage = ref("");
const isDragging = ref(false);

// Handle file selection when dropped or clicked
const handleFileDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  handleFile(file);
  isDragging.value = false;
};

// Function to validate and display the image
const handleFile = (file) => {
  if (!file) return;

  if (file.type.startsWith("image/")) {
    errorMessage.value = "";
    const reader = new FileReader();
    reader.onload = () => (selectedImage.value = reader.result);
    reader.readAsDataURL(file);
  } else {
    errorMessage.value = "Please upload an image file.";
    selectedImage.value = null;
  }
};

// Handle drag over event to allow the drop
const handleImageDragOver = (e) => {
  e.preventDefault();
};

const handleDragEnter = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const removeImage = () => {
  selectedImage.value = null;
};
</script>

<template>
  <div class="flex justify-center items-center w-full flex-col">
    <div
        :class="[
        'rounded-lg w-full h-64 flex flex-col dark:bg-slate-800 dark:border-slate-600 justify-center items-center bg-white',
        isDragging ? 'border-[#36af7b]/30 !bg-[#36af7b]/10' : 'border-gray-300',
        selectedImage ? '' : 'border-dashed border-2 p-6',
      ]"
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
        @drop="handleFileDrop"
        @dragover="handleImageDragOver"
    >
      <img
          v-if="selectedImage"
          :src="selectedImage"
          alt="Preview"
          class="w-full h-full object-cover rounded-lg"
      />
      <template v-else>
        <h5 v-if="isDragging" class="text-[2rem] text-[#36af7b] font-[600]">
          Drop Here
        </h5>
        <template v-else>
          <Icon
              icon="ion:cloud-upload-outline"
              class="text-[3rem] mb-4 text-gray-400"
          />
          <p
              class="text-gray-500 text-center dark:text-[#abc2d3] text-[1.1rem] font-[500] mb-2"
          >
            Drag & Drop your image here
          </p>
          <p class="text-gray-400">or</p>
          <label
              for="file-upload"
              class="cursor-pointer dark:bg-slate-500 hover:bg-[#36af7b] hover:text-white transition-colors duration-300 dark:text-[#abc2d3] py-2 px-4 bg-gray-200 rounded-md mt-2"
          >
            Browse File
          </label>
          <input
              id="file-upload"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleFileDrop"
          />
        </template>
      </template>
    </div>

    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>

    <div v-if="selectedImage" class="mt-4">
      <button
          @click="removeImage"
          class="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Remove Image
      </button>
    </div>
  </div>
</template>