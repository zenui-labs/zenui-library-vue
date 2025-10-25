<script setup>
import {computed, ref} from "vue";
import {Icon} from "@iconify/vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {loaderContents} from "@/Utils/ContentsConfig/FeedbackContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";

const sectionIds = loaderContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// circle loader
const circleLoaderPreview = ref(true);
const circleLoaderCode = ref(false);

// dashed Loader
const dashedLoaderPreview = ref(true);
const dashedLoaderCode = ref(false);

// opacity Loader
const opacityLoaderPreview = ref(true);
const opacityLoaderCode = ref(false);

// wave Loader
const waveLoaderPreview = ref(true);
const waveLoaderCode = ref(false);

// chase Loader
const chaseLoaderPreview = ref(true);
const chaseLoaderCode = ref(false);

// dot Loader
const dotLoaderPreview = ref(true);
const dotLoaderCode = ref(false);

// shape Loader
const shapeLoaderPreview = ref(true);
const shapeLoaderCode = ref(false);

// flip Loader
const flipLoaderPreview = ref(true);
const flipLoaderCode = ref(false);

const spinnerDivs = computed(() => {
  return Array.from({length: 10}).map((_, index) => {
    const delay = (index + 1) * 0.1;
    const rotation = (index + 1) * 36;
    const translation = 150;

    return {
      key: index,
      style: {
        '--delay': delay,
        '--rotation': rotation,
        '--translation': translation,
        transform: `rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%))`,
        animation: `spinner-animation 1s calc(var(--delay) * 1s) infinite ease`
      }
    };
  });
});

const sharedStyle = {
  content: '""',
  width: '100%',
  height: '100%',
  display: 'block',
  border: '5.6px solid #36af7b',
  borderRadius: '50%',
  boxShadow: '0 -33.6px 0 -5.6px #36af7b',
  position: 'absolute',
  animation: 'spinner-rotate 1.25s infinite ease'
};

const items = Array.from({length: 9});
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div>
      <ContentHeader id="circle_loader" text="circle loader"/>

      <ComponentDescription
          text="This is a circle loader component. Indicate loading status with a sleek, circular animation."
      />

      <ToggleTab
          @update:code="(val) => (circleLoaderCode = val)"
          :code="circleLoaderCode"
          :preview="circleLoaderPreview"
          @update:preview="(val) => (circleLoaderPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="circleLoaderPreview"
            class="p-8 mb-4 flex items-center gap-12 justify-center"
        >
          <div
              class="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#36af7b] border-[#36af7b]/10"
          ></div>

          <Icon icon="teenyicons:loader-solid" class="text-[2.8rem] animate-spin text-[#36af7b]"/>

          <Icon icon="tabler:loader-3" class="text-[2.8rem] animate-spin text-[#36af7b]"/>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="dashed_loader" text="dashed loader"/>
      </div>

      <ComponentDescription
          text="This is a dashed loader component. Show loading progress with a dynamic, dashed-line animation."
      />

      <ToggleTab
          @update:code="(val) => (dashedLoaderCode = val)"
          :code="dashedLoaderCode"
          @update:preview="(val) => (dashedLoaderPreview = val)"
          :preview="dashedLoaderPreview"
      />

      <ComponentWrapper>
        <div
            v-if="dashedLoaderPreview"
            class="p-16 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-14 h-14 animate-spin rounded-full border-dashed border-8 border-[#36af7b]"
          ></div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="opacity_loader" text="opacity loader"/>
      </div>

      <ComponentDescription
          text="This is an opacity loader component. Display loading status with a subtle opacity animation for sleek transitions."
      />

      <ToggleTab
          @update:code="(val) => (opacityLoaderCode = val)"
          :code="opacityLoaderCode"
          :preview="opacityLoaderPreview"
          @update:preview="(val) => (opacityLoaderPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="opacityLoaderPreview"
            class="p-16 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#36af7b] flex items-center justify-center"
          >
            <div
                class="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#36af7b]"
            ></div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="wave_loader" text="wave loader"/>
      </div>

      <ComponentDescription
          text="This is a wave loader component. Show loading progress with a dynamic, wave-like animation."
      />

      <ToggleTab
          @update:code="(val) => (waveLoaderCode = val)"
          :code="waveLoaderCode"
          @update:preview="(val) => (waveLoaderPreview = val)"
          :preview="waveLoaderPreview"
      />

      <ComponentWrapper>
        <div
            v-if="waveLoaderPreview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="my-10">
            <div class="absolute w-[9px] h-[9px]">
              <div
                  v-for="item in spinnerDivs"
                  :key="item.key"
                  class="absolute w-[50%] h-[140%] bg-[#36af7b]"
                  :style="item.style"
              ></div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="chase_loader" text="chase loader"/>
      </div>

      <ComponentDescription
          text="This is a chase animation loader component. Display loading progress with an engaging, sequential movement."
      />

      <ToggleTab
          @update:code="(val) => (chaseLoaderCode = val)"
          :code="chaseLoaderCode"
          :preview="chaseLoaderPreview"
          @update:preview="(val) => (chaseLoaderPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="chaseLoaderPreview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="my-10">
            <div class="relative w-[22.4px] h-[22.4px]">
              <div
                  :style="{
                    ...sharedStyle,
                    animation: 'spinner-b4c8mmmd 0.5s backwards, spinner-rotate 1.25s 0.5s infinite ease'
                  }"
              ></div>
              <div
                  :style="{
                    ...sharedStyle,
                    animationDelay: '0s, 1.25s'
                  }"
              ></div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="dot_loader" text="dot loader"/>
      </div>

      <ComponentDescription
          text="This is a dot animation loader component. Show loading progress with rhythmic dot movement for visual feedback."
      />

      <ToggleTab
          @update:code="(val) => (dotLoaderCode = val)"
          :code="dotLoaderCode"
          @update:preview="(val) => (dotLoaderPreview = val)"
          :preview="dotLoaderPreview"
      />

      <ComponentWrapper>
        <div
            v-if="dotLoaderPreview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="my-10">
            <div
                class="w-[56px] h-[56px]"
                :style="{
                  '--c': 'radial-gradient(farthest-side, #36af7b 92%, transparent)',
                  background: `
                    var(--c) 50% 0,
                    var(--c) 50% 100%,
                    var(--c) 100% 50%,
                    var(--c) 0 50%
                  `,
                  backgroundSize: '13.4px 13.4px',
                  backgroundRepeat: 'no-repeat',
                  animation: 'spinner-kh173p 1s infinite'
                }"
            >
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="shape_loader" text="shape loader"/>
      </div>

      <ComponentDescription
          text="This is a shape animation loader component. Display loading progress with dynamic shape transformations for visual appeal."
      />

      <ToggleTab
          @update:code="(val) => (shapeLoaderCode = val)"
          :code="shapeLoaderCode"
          :preview="shapeLoaderPreview"
          @update:preview="(val) => (shapeLoaderPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="shapeLoaderPreview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="my-10">
            <div class="relative w-[44.8px] h-[44.8px] text-[#36af7b]">
              <div
                  class="absolute inset-0 rounded-full"
                  :style="{
                    background: `
                      radial-gradient(10.08px at bottom right, transparent 94%, currentColor) top left,
                      radial-gradient(10.08px at bottom left, transparent 94%, currentColor) top right,
                      radial-gradient(10.08px at top right, transparent 94%, currentColor) bottom left,
                      radial-gradient(10.08px at top left, transparent 94%, currentColor) bottom right
                    `,
                    backgroundSize: '22.4px 22.4px',
                    backgroundRepeat: 'no-repeat',
                    animation: 'shapes-77ngqcmd 1.5s infinite cubic-bezier(0.3,1,0,1)'
                  }"
              ></div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="flip_loader" text="flip loader"/>
      </div>

      <ComponentDescription
          text="This is a flip animation loader component. Showcase loading progress with engaging flip animations for visual interest."
      />

      <ToggleTab
          @update:code="(val) => (flipLoaderCode = val)"
          :code="flipLoaderCode"
          @update:preview="(val) => (flipLoaderPreview = val)"
          :preview="flipLoaderPreview"
      />

      <ComponentWrapper>
        <div
            v-if="flipLoaderPreview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="my-10">
            <div class="grid grid-cols-3 grid-rows-3 w-[67.2px] h-[67.2px]">
              <div
                  v-for="(_, index) in items"
                  :key="index"
                  class="bg-[#36af7b]"
                  :style="{
                    animation: `flipping-18i5bq 1.5s ${index * 0.1}s infinite backwards`
                  }"
              ></div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/testimonials"
          backName="testimonial"
          forwardName="notification"
          forwardUrl="/components/notification"
      />
    </div>

    <ContentNavbar :contents="loaderContents" :activeSection="activeSection"/>
  </aside>
</template>

<style>
@keyframes flipping-18i5bq {
  0% {
    transform: perspective(67.2px) rotateX(-90deg);
  }
  50%, 75% {
    transform: perspective(67.2px) rotateX(0);
  }
  100% {
    opacity: 0;
    transform: perspective(67.2px) rotateX(0);
  }
}

@keyframes shapes-77ngqcmd {
  33% {
    inset: -11.2px;
    transform: rotate(0deg);
  }
  66% {
    inset: -11.2px;
    transform: rotate(90deg);
  }
  100% {
    inset: 0;
    transform: rotate(90deg);
  }
}

@keyframes spinner-kh173p {
  to {
    transform: rotate(0.5turn);
  }
}

@keyframes spinner-b4c8mmmd {
  from {
    box-shadow: 0 0 0 -5.6px #36af7b;
  }
}

@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>