<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const isFavorite = ref(false);
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full 1024px:w-[80%] shadow-lg dark:bg-slate-800 bg-secondary rounded-lg"
    >
      <div class="grid grid-cols-12 w-full items-center bg-black text-white rounded-t-lg overflow-hidden">
        <div class="grid col-span-5 justify-center gap-3">
          <div>
            <h1 class="text-2xl">Pop Music</h1>
            <p>Arjit Singh</p>
          </div>
          <div class="flex flex-row gap-3">
            <Icon icon="majesticons:next-circle" class="text-2xl rotate-[180deg]"/>
            <Icon icon="solar:play-bold" class="text-2xl"/>
            <Icon icon="majesticons:next-circle" class="text-2xl"/>
          </div>
        </div>

        <div class="grid col-span-7">
          <img
              src="https://media.istockphoto.com/id/1388162040/photo/a-crowded-concert-hall-with-scene-stage-in-red-lights-rock-show-performance-with-people.jpg?s=1024x1024&w=is&k=20&c=NARCbVE2aAOnSEVWr1ZxK0G4fpr60vMY7iDMsjnHjFg="
              alt=""
              class="w-full h-64 object-cover"
          />
        </div>
      </div>

      <div class="flex items-center justify-between w-full p-4">
        <div class="flex items-center gap-4">
          <Icon
              icon="fa:heart"
              :class="[
              'text-[1.3rem] cursor-pointer',
              isFavorite ? 'text-[#ff3d3d]' : 'text-text dark:text-[#abc2d3]',
            ]"
              @click="isFavorite = !isFavorite"
          />
          <Icon
              icon="ri:share-fill"
              class="text-text dark:text-[#abc2d3] text-[1.5rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
