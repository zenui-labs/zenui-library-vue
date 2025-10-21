<script setup>
import {allComponents} from "@/Utils/AllComponents.js";
import {computed} from "vue";

const doubledComponents = computed(() =>
    allComponents ? [...allComponents, ...allComponents] : []
);
</script>

<template>
  <div class="flex gap-5">
    <div
        class="slider-container h-80 w-full relative overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]"
    >
      <div class="allComponentSliderUp flex flex-col items-center gap-5">
        <a
            v-for="(item, index) in doubledComponents"
            :key="index"
            :href="item.url"
            class="py-2 px-4 640px:px-6 w-32 640px:w-48 text-center dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium"
        >
          {{ item.title }}
        </a>
      </div>
    </div>

    <div
        class="slider-container h-80 w-full relative overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]"
    >
      <div class="allComponentSliderDown flex flex-col items-center gap-5">
        <a
            v-for="(item, index) in doubledComponents"
            :key="index"
            :href="item.url"
            class="py-2 px-4 640px:px-6 w-32 640px:w-48 text-center dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scrollUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes scrollDown {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

.allComponentSliderUp {
  animation: scrollUp 45s linear infinite;
}

.allComponentSliderDown {
  animation: scrollDown 45s linear infinite;
}

.slider-container:hover .allComponentSliderUp,
.slider-container:hover .allComponentSliderDown {
  animation-play-state: paused;
}
</style>