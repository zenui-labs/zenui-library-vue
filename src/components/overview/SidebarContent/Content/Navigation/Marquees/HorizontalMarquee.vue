<script setup>
import {allComponents} from "@/Utils/AllComponents.js";
import {computed} from "vue";

const doubledComponents = computed(() =>
    allComponents ? [...allComponents, ...allComponents] : []
);
</script>

<template>
  <div class="w-full space-y-4">
    <div
        class="slider-container w-full flex-nowrap relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <div class="allComponentSliderLeft flex items-center gap-5">
        <a
            v-for="(item, index) in doubledComponents"
            :key="index"
            :href="item.url"
            class="py-2 px-6 dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium whitespace-nowrap"
        >
          {{ item.title }}
        </a>
      </div>
    </div>

    <div
        class="slider-container w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <div class="allComponentSliderRight flex items-center gap-5 w-[50%] 1404px:w-[100%] justify-center">
        <a
            v-for="(item, index) in allComponents"
            :key="index"
            :href="item.url"
            class="py-2 px-6 dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium whitespace-nowrap"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.allComponentSliderLeft {
  animation: marqueeLeft 20s linear infinite;
}

@keyframes marqueeLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.allComponentSliderRight {
  animation: marqueeRight 20s linear infinite;
}

@keyframes marqueeRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.slider-container:hover .allComponentSliderLeft,
.slider-container:hover .allComponentSliderRight {
  animation-play-state: paused;
}
</style>