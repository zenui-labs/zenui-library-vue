<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const images = ref([]);
const dragging = ref(false);

const handleMultipleFileDrop = (e) => {
  e.preventDefault();
  dragging.value = false;
  const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
  uploadFiles(files);
  if (e.target) {
    e.target.value = "";
  }
};

const uploadFiles = (files) => {
  const fileList = Array.from(files).map((file) => ({
    file,
    size: formatFileSize(file.size),
    progress: 0,
    uploaded: false,
    cancelled: false,
  }));
  images.value = [...images.value, ...fileList];

  fileList.forEach((fileObj, index) => {
    simulateUpload(fileObj, index + images.value.length - fileList.length);
  });
};

const formatFileSize = (sizeInBytes) => {
  if (sizeInBytes < 1024 * 1024) {
    return (sizeInBytes / 1024).toFixed(2) + " KB";
  } else {
    return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
  }
};

const simulateUpload = (fileObj, index) => {
  const interval = setInterval(() => {
    const newImages = [...images.value];
    if (!newImages[index].cancelled) {
      const progress = newImages[index].progress + 10;
      if (progress >= 100) {
        clearInterval(interval);
        newImages[index].progress = 100;
        newImages[index].uploaded = true;
      } else {
        newImages[index].progress = progress;
      }
    } else {
      clearInterval(interval);
    }
    images.value = newImages;
  }, 300);
};

const handleMultipleDragOver = (e) => {
  e.preventDefault();
};

const handleMultipleDragEnter = () => {
  dragging.value = true;
};

const handleMultipleDragLeave = () => {
  dragging.value = false;
};

const cancelUpload = (index) => {
  const newImages = [...images.value];
  newImages[index].cancelled = true;
  images.value = newImages;
};

const resetImages = () => {
  images.value = [];
};
</script>

<template>
  <div class="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
    <div class="flex flex-col justify-center items-center w-full">
      <div
          :class="[
          'border-2 p-6 rounded-lg dark:bg-slate-800 dark:border-slate-600 w-full h-64 flex flex-col justify-center items-center bg-white transition-colors duration-300 ease-in-out',
          dragging
            ? 'border-dashed border-[#36af7b] !bg-[#36af7b]/10'
            : 'border-gray-200 border-dashed',
        ]"
          @drop="handleMultipleFileDrop"
          @dragover="handleMultipleDragOver"
          @dragenter="handleMultipleDragEnter"
          @dragleave="handleMultipleDragLeave"
      >
        <img
            src="https://i.ibb.co.com/XY2YgLh/Searching-for-files-in-a-folder.png"
            class="w-[100px]"
        />
        <label
            for="file-multiple-upload"
            class="font-[500] dark:text-[#abc2d3] text-center text-gray-700 text-[1rem]"
        >
          <span class="underline cursor-pointer"> Click to upload </span>
          Drag & Drop your images here
        </label>
        <p class="text-[0.8rem] dark:text-[#abc2d3]/60 text-gray-500 mt-2">
          Maximum file size 50 MB.
        </p>
        <input
            id="file-multiple-upload"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleMultipleFileDrop"
            multiple
        />
      </div>

      <div
          class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
      >
        <div
            v-for="(imageObj, index) in images"
            :key="index"
            class="relative p-3 rounded-lg dark:bg-slate-800 dark:border-slate-600 bg-gray-50 border border-gray-200"
        >
          <div class="flex flex-col">
            <div class="flex items-start justify-between w-full mb-1">
              <div class="flex items-start gap-[10px]">
                <Icon
                    icon="stash:image"
                    class="bg-white dark:bg-slate-900/80 dark:border-slate-600 rounded-md p-1 border border-gray-200 text-[1.7rem] text-gray-500"
                />
                <div>
                  <p
                      class="text-gray-700 dark:text-darkTextColor font-[500] text-[0.9rem] leading-[20px] 640px:leading-[9px] 640px:mt-0.5"
                  >
                    {{ imageObj.file.name }}
                  </p>
                  <span class="text-[0.6rem] text-gray-400">
                    {{ imageObj.size }}
                  </span>
                </div>
              </div>
              <button
                  v-if="!imageObj.cancelled && !imageObj.uploaded"
                  @click="cancelUpload(index)"
                  class="text-gray-500 hover:text-red-500"
              >
                <Icon icon="charm:cross"/>
              </button>

              <Icon
                  v-if="imageObj.uploaded"
                  icon="io:md-done-all"
                  class="text-green-600 text-[1.1rem]"
              />
            </div>
            <p v-if="imageObj.cancelled" class="text-[0.8rem] text-red-600">
              Upload Cancelled
            </p>
            <template v-else>
              <div class="flex items-center justify-between gap-[8px]">
                <div
                    class="w-full dark:bg-slate-800 bg-white h-1.5 rounded-lg overflow-hidden"
                >
                  <div
                      class="bg-[#36af7b] h-full transition-all duration-300"
                      :style="{ width: `${imageObj.progress}%` }"
                  ></div>
                </div>
                <span
                    class="text-[0.7rem] mb-0.5 dark:text-[#abc2d3] text-gray-500"
                >
                  {{ imageObj.progress }}%
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <button
        v-if="images.length"
        @click="resetImages"
        class="py-2 px-6 bg-red-500 rounded-md text-white"
    >
      Reset
    </button>
  </div>
</template>