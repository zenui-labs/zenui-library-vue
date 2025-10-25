<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {Icon} from "@iconify/vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import WarningMessageCard from "@/Shared/Component/WarningMessageCard.vue";
import {tooltipContents} from "@/Utils/ContentsConfig/DataDisplayContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";

const sectionIds = tooltipContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// actions
const roundedTooltipPreview = ref(true);
const roundedTooltipCode = ref(false);

const arrowTooltipPreview = ref(true);
const arrowTooltipCode = ref(false);

const relativeAnimationPreview = ref(true);
const relativeAnimationCode = ref(false);

const profileTooltipPreview = ref(true);
const profileTooltipCode = ref(false);

const clickedTooltipPreview = ref(true);
const clickedTooltipCode = ref(false);

const isProfileHovered = ref(false);
const leftClicked = ref(false);
const rightClicked = ref(false);
const topClicked = ref(false);
const bottomClicked = ref(false);

const handleClickOutside = (event) => {
  if (!event.target.closest('.top_button')) {
    topClicked.value = false;
  }
  if (!event.target.closest('.left_button')) {
    leftClicked.value = false;
  }
  if (!event.target.closest('.right_button')) {
    rightClicked.value = false;
  }
  if (!event.target.closest('.bottom_button')) {
    bottomClicked.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div class="w-full 425px:w-[80%]">
      <WarningMessageCard
          text="You can style it yourself if you want. And after copying the code you ' z-index ' check a little. And since the tooltip is only coming up on hovering over a button to show the demo, you'll need to set it up well in your project when you get this code."
      />

      <ContentHeader text="rounded tooltip" id="rounded_tooltip"/>

      <ComponentDescription
          text="This is a tooltip component. Provide contextual information with a brief, hover-triggered tooltip."
      />

      <ToggleTab
          :code="roundedTooltipCode"
          :preview="roundedTooltipPreview"
          @update:code="(val) => (roundedTooltipCode = val)"
          @update:preview="(val) => (roundedTooltipPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="roundedTooltipPreview"
            class="p-8 pb-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="relative group">
            <button
                class="px-3 py-2 dark:border-slate-700 dark:text-[#abc2d3] border border-gray-800 rounded text-gray-800"
            >
              Rounded Tooltip
            </button>

            <div
                class="absolute bottom-[-90%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300"
            >
              <span
                  class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"
              >
                Rounded Tooltip
              </span>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="arrow tooltip" id="arrow_tooltip"/>
      </div>

      <ComponentDescription
          text="This is a tooltip component with an arrow indicator for clear element association on hover."
      />

      <ToggleTab
          :code="arrowTooltipCode"
          @update:preview="(val) => (arrowTooltipPreview = val)"
          @update:code="(val) => (arrowTooltipCode = val)"
          :preview="arrowTooltipPreview"
      />

      <ComponentWrapper>
        <div
            v-if="arrowTooltipPreview"
            class="p-8 pb-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="flex items-center gap-6">
            <div class="relative group">
              <button
                  class="px-3 py-2 dark:border-slate-700 dark:text-[#abc2d3] border border-gray-800 rounded text-gray-800"
              >
                Left
              </button>

              <div
                  class="absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] dark:before:bg-slate-800 scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-[1%] before:rotate-[40deg] before:rounded-b-3xl"
              >
                <span
                    class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"
                >
                  Left
                </span>
              </div>
            </div>

            <div class="relative group">
              <button
                  class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"
              >
                Center
              </button>

              <div
                  class="absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] dark:before:bg-slate-800 before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-1/3 before:rotate-[45deg] before:rounded-b-3xl"
              >
                <span
                    class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"
                >
                  Center
                </span>
              </div>
            </div>

            <div class="relative group">
              <button
                  class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"
              >
                Right
              </button>

              <div
                  class="absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] dark:before:bg-slate-800 scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:right-[1%] before:rotate-[45deg] before:rounded-r-3xl"
              >
                <span
                    class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"
                >
                  Right
                </span>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="Relative Animation" id="relative_animation"/>
      </div>

      <ComponentDescription
          text="A tooltip system that can appear in any position..left, right, top, or bottom—relative to the element, offering flexible placement based on user interaction or design needs."
      />

      <ToggleTab
          :code="relativeAnimationCode"
          :preview="relativeAnimationPreview"
          @update:code="(val) => (relativeAnimationCode = val)"
          @update:preview="(val) => (relativeAnimationPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="relativeAnimationPreview"
            class="p-8 pb-20 mb-4 pt-20 flex items-center flex-col gap-5 justify-center"
        >
          <div class="flex items-center gap-6 flex-wrap">
            <div class="relative group">
              <button
                  class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"
              >
                Left
              </button>

              <div
                  class="absolute top-0.5 left-[-100px] translate-x-[-20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"
              >
                <p
                    class="text-[0.9rem] w-max bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"
                >
                  Left Tooltip
                </p>
              </div>
            </div>

            <div class="relative group">
              <button
                  class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"
              >
                Top
              </button>

              <div
                  class="absolute top-[-45px] left-[-23px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"
              >
                <p
                    class="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-[#8d8d8d] text-secondary rounded px-3 py-2"
                >
                  Top Tooltip
                </p>
              </div>
            </div>

            <div class="relative group">
              <button
                  class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"
              >
                Bottom
              </button>

              <div
                  class="absolute bottom-[-45px] left-[-20px] translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"
              >
                <p
                    class="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-[#8d8d8d] text-secondary rounded px-3 py-2"
                >
                  Bottom Tooltip
                </p>
              </div>
            </div>

            <div class="relative group">
              <button
                  class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"
              >
                Right
              </button>

              <div
                  class="absolute top-0.5 right-[-110px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"
              >
                <p
                    class="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-[#8d8d8d] text-secondary rounded px-3 py-2"
                >
                  Right Tooltip
                </p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="profile tooltip" id="profile_tooltip"/>
      </div>

      <ComponentDescription
          text="A small pop-up displaying key details about a user's profile when hovered or clicked."
      />

      <ToggleTab
          :code="profileTooltipCode"
          @update:preview="(val) => (profileTooltipPreview = val)"
          @update:code="(val) => (profileTooltipCode = val)"
          :preview="profileTooltipPreview"
      />

      <ComponentWrapper>
        <div
            v-if="profileTooltipPreview"
            class="p-8 pb-16 mb-4 pt-20 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="relative w-fit h-full flex items-center justify-center"
              @mouseenter="isProfileHovered = true"
              @mouseleave="isProfileHovered = false"
          >
            <!--  initial profile picture  -->
            <img
                src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900"
                alt="profile"
                class="w-[50px] h-[50px] rounded-full object-cover border-[3px] cursor-pointer border-[#36af7b]"
            />

            <!--  tooltip  -->
            <div
                :class="[
                  isProfileHovered
                    ? 'opacity-100 z-20 translate-y-0'
                    : 'opacity-0 z-[-1] translate-y-[20px]',
                  'absolute top-[-270px] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all dark:bg-slate-800 duration-300'
                ]"
            >
              <!--  socials  -->
              <div
                  class="flex items-center justify-between dark:border-slate-700 border-b border-gray-200 pb-[7px]"
              >
                <p class="text-[1rem] font-[600] dark:text-[#abc2d3] text-gray-700">
                  Socials
                </p>
                <div class="flex items-center gap-[8px]">
                  <a href="https://zenui.net">
                    <Icon
                        icon="mdi:linkedin"
                        class="text-[1.7rem] dark:text-[#abc2d3] text-gray-700 hover:text-[#36af7b] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"
                    />
                  </a>
                  <a href="https://zenui.net">
                    <Icon
                        icon="fa:github-square"
                        class="text-[1.3rem] dark:text-[#abc2d3] text-gray-700 hover:text-[#36af7b] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"
                    />
                  </a>
                  <a href="https://zenui.net">
                    <Icon
                        icon="ri:instagram-fill"
                        class="text-[1.6rem] dark:text-[#abc2d3] text-gray-700 hover:text-[#36af7b] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"
                    />
                  </a>
                </div>
              </div>

              <!--  account details  -->
              <div class="flex items-center justify-center flex-col mt-5">
                <div class="relative">
                  <img
                      src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900"
                      alt="profile"
                      class="w-[80px] h-[80px] rounded-full object-cover"
                  />
                  <div
                      class="w-[10px] h-[10px] rounded-full bg-green-400 absolute top-[7px] right-[8px] border-[2px] border-white"
                  ></div>
                </div>
                <h4 class="text-[1.1rem] dark:text-[#abc2d3] font-[600] text-gray-700 mt-2">
                  Evelyn Adson
                </h4>
                <p class="text-[0.8rem] dark:text-[#abc2d3] text-gray-600">Programmer</p>
              </div>

              <!--  send message  -->
              <button
                  class="flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-[#36af7b] mt-4"
              >
                <Icon icon="feather:message-circle" class="text-[1.1rem]"/>
                Send Message
              </button>

              <!--  bottom arrow  -->
              <div
                  class="bg-white w-[15px] h-[15px] dark:bg-slate-800 rotate-[45deg] absolute bottom-[-7px] left-[50%] transform translate-x-[-50%]"
              ></div>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="clicked tooltip" id="clicked_tooltip"/>
      </div>

      <ComponentDescription
          text="A brief pop-up providing additional information when clicked, typically used for clarifying or expanding on specific content."
      />

      <ToggleTab
          :code="clickedTooltipCode"
          :preview="clickedTooltipPreview"
          @update:code="(val) => (clickedTooltipCode = val)"
          @update:preview="(val) => (clickedTooltipPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="clickedTooltipPreview"
            class="p-8 pb-20 mb-4 pt-20 flex items-center flex-col gap-5 justify-center"
        >
          <div class="flex items-center gap-[10px] justify-center flex-wrap">
            <!--  left  -->
            <div class="relative">
              <button
                  @click="leftClicked = true"
                  class="left_button py-2 px-6 border dark:border-slate-700 dark:text-[#abc2d3] rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800"
              >
                Left
              </button>

              <!-- tooltip -->
              <p
                  :class="[
                    leftClicked
                      ? 'opacity-100 z-[100] translate-x-0'
                      : 'opacity-0 z-[-1] translate-x-[20px]',
                    'absolute top-[50%] transform translate-y-[-50%] left-[-130px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200'
                  ]"
              >
                Left Tooltip
                <!-- arrow -->
                <span
                    class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] right-[-3%]"
                ></span>
              </p>
            </div>

            <!--  top  -->
            <div class="relative">
              <button
                  @click="topClicked = true"
                  class="top_button py-2 px-6 border rounded-md dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 text-[1rem] font-[500] text-gray-800"
              >
                Top
              </button>

              <!-- tooltip -->
              <p
                  :class="[
                    topClicked
                      ? 'opacity-100 z-[100] translate-y-0'
                      : 'opacity-0 z-[-1] translate-y-[20px]',
                    'absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200'
                  ]"
              >
                Top Tooltip
                <!-- arrow -->
                <span
                    class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"
                ></span>
              </p>
            </div>

            <!--  bottom  -->
            <div class="relative">
              <button
                  @click="bottomClicked = true"
                  class="bottom_button py-2 px-6 border rounded-md dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 text-[1rem] font-[500] text-gray-800"
              >
                Bottom
              </button>

              <!-- tooltip -->
              <p
                  :class="[
                    bottomClicked
                      ? 'opacity-100 z-[100] translate-y-0'
                      : 'opacity-0 z-[-1] translate-y-[-20px]',
                    'absolute left-[50%] transform translate-x-[-50%] bottom-[-50px] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200'
                  ]"
              >
                Bottom Tooltip
                <!-- arrow -->
                <span
                    class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] top-[-13%]"
                ></span>
              </p>
            </div>

            <!--  right  -->
            <div class="relative">
              <button
                  @click="rightClicked = true"
                  class="right_button py-2 px-6 border rounded-md dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 text-[1rem] font-[500] text-gray-800"
              >
                Right
              </button>

              <!-- tooltip -->
              <p
                  :class="[
                    rightClicked
                      ? 'opacity-100 z-[100] translate-x-0'
                      : 'opacity-0 z-[-1] translate-x-[-20px]',
                    'absolute top-[50%] transform translate-y-[-50%] right-[-140px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200'
                  ]"
              >
                Right Tooltip
                <!-- arrow -->
                <span
                    class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] left-[-3%]"
                ></span>
              </p>
            </div>
          </div>
        </div>

        <ShowCode v-else code=""/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/badge"
          backName="badge"
          forwardName="timeline"
          forwardUrl="/components/timeline"
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="tooltipContents"/>
  </aside>
</template>