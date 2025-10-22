<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {ratingContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const sectionIds = ratingContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// states start
const clickNavigationPreview = ref(true);
const clickNavigationCode = ref(false);

const hoverNavigationPreview = ref(true);
const hoverNavigationCode = ref(false);

const ratingModalPreview = ref(true);
const ratingModalCode = ref(false);

const ratingFeedbackModalPreview = ref(true);
const ratingFeedbackModalCode = ref(false);

const rateCountPreview = ref(true);
const rateCountCode = ref(false);
// states end

const rating = ref(0);
const hover = ref(null);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="click navigation" id="click_navigation"/>

      <ComponentDescription
          text="A rating system with clickable stars or icons, allowing users to select a rating by clicking and navigating through the options."
      />

      <ToggleTab
          :preview="clickNavigationPreview"
          @update:preview="(val) => (clickNavigationPreview = val)"
          @update:code="(val) => (clickNavigationCode = val)"
          :code="clickNavigationCode"
      />

      <ComponentWrapper>
        <div
            v-if="clickNavigationPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div class="flex items-center space-x-1">
            <Icon
                v-for="(_, index) in 5"
                :key="index + 1"
                icon="fa:star"
                :class="`cursor-pointer ${
                  index + 1 <= rating
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-slate-700'
                }`"
                :style="{ fontSize: '24px' }"
                @click="rating = index + 1"
            />
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="hover navigation" id="hover_navigation"/>
      </div>

      <ComponentDescription
          text="A rating system with hover navigation, allowing users to preview and select a rating as they hover over stars or icons before clicking."
      />

      <ToggleTab
          :preview="hoverNavigationPreview"
          @update:preview="(val) => (hoverNavigationPreview = val)"
          @update:code="(val) => (hoverNavigationCode = val)"
          :code="hoverNavigationCode"
      />

      <ComponentWrapper>
        <div
            v-if="hoverNavigationPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div class="flex items-center space-x-1">
            <Icon
                v-for="(_, index) in 5"
                :key="index + 1"
                icon="fa:star"
                :class="`cursor-pointer ${
                  index + 1 <= (hover || rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-slate-700'
                }`"
                :style="{ fontSize: '24px' }"
                @click="rating = index + 1"
                @mouseenter="hover = index + 1"
                @mouseleave="hover = null"
            />
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="rating modal" id="rating_modal"/>
      </div>

      <ComponentDescription
          text="A modal window that allows users to submit a rating, often including stars or icons for rating and a form for additional feedback."
      />

      <ToggleTab
          :preview="ratingModalPreview"
          @update:preview="(val) => (ratingModalPreview = val)"
          @update:code="(val) => (ratingModalCode = val)"
          :code="ratingModalCode"
      />

      <ComponentWrapper>
        <div
            v-if="ratingModalPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="bg-white dark:bg-slate-800 dark:border-slate-700 rounded-2xl border border-gray-200 w-full 1024px:w-[60%] pt-2 pr-2 p-4 text-center"
          >
            <Icon
                icon="radix-icons:cross-1"
                class="float-right p-2 dark:text-[#abc2d3] dark:hover:bg-slate-900 text-[2rem] text-[#333333] hover:bg-gray-200 rounded-full cursor-pointer"
            />

            <h3
                class="text-[24px] pr-2 dark:text-[#abc2d3] font-semibold text-[#333333] mt-[45px]"
            >
              How many stars would you give to them?
            </h3>
            <p class="text-[16px] pr-2 dark:text-[#abc2d3] font-[400] mt-[10px]">
              Jonah Noah delivered your order from
              <b>Nanica Homemade Pies</b>, today at 19:47 (7 min ahead
              schedule).
            </p>

            <div
                class="flex items-center space-x-1 justify-center mt-[15px] mb-[10px]"
            >
              <Icon
                  v-for="(_, index) in 5"
                  :key="index + 1"
                  icon="fa:star"
                  :class="`cursor-pointer ${
                    index + 1 <= (hover || rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300 dark:text-slate-600'
                  }`"
                  :style="{ fontSize: '26px' }"
                  @click="rating = index + 1"
                  @mouseenter="hover = index + 1"
                  @mouseleave="hover = null"
              />
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="rating with feedback" id="rating_with_feedback"/>
      </div>

      <ComponentDescription
          text="A rating system that includes a feedback section, allowing users to submit both a rating (e.g., stars) and written comments or suggestions."
      />

      <ToggleTab
          :preview="ratingFeedbackModalPreview"
          @update:preview="(val) => (ratingFeedbackModalPreview = val)"
          @update:code="(val) => (ratingFeedbackModalCode = val)"
          :code="ratingFeedbackModalCode"
      />

      <ComponentWrapper>
        <div
            v-if="ratingFeedbackModalPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="bg-white rounded-2xl dark:bg-slate-800 dark:border-slate-700 border border-gray-200 w-full p-4 640px:p-8"
          >
            <h3
                class="text-[24px] font-semibold dark:text-[#abc2d3] text-[#333333] text-center"
            >
              Session feedback
            </h3>
            <p class="text-[14px] font-[400] dark:text-[#abc2d3] text-gray-500 text-center"
            >
              Please rate your experience below
            </p>

            <div
                class="flex items-center 640px:flex-row flex-col 640px:space-x-3 w-full my-[20px] justify-center"
            >
              <div
                  class="flex items-center space-x-2 justify-center mb-[10px]"
              >
                <Icon
                    v-for="(_, index) in 5"
                    :key="index + 1"
                    icon="fa:star"
                    :class="`cursor-pointer ${
                      index + 1 <= (hover || rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-slate-600'
                    }`"
                    :style="{ fontSize: '26px' }"
                    @click="rating = index + 1"
                    @mouseenter="hover = index + 1"
                    @mouseleave="hover = null"
                />
              </div>
              <span class="text-gray-400 font-normal dark:text-[#abc2d3]/80">4/5 stars</span>
            </div>

            <label class="text-gray-500 dark:text-[#abc2d3]">Additional feedback</label>
            <textarea
                placeholder="Write your feedback here..."
                class="w-full border-gray-200 mt-1.5 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 resize-none outline-none focus:border-[#36af7b] border rounded-md p-2 min-h-[100px]"
            ></textarea>

            <button
                class="py-3 px-4 bg-[#36af7b] text-white hover:bg-[#36af7b]/90 rounded-md w-full mt-[10px]"
            >
              Submit feedback
            </button>

            <div class="flex items-center gap-2 my-[10px]">
              <div class="h-[1px] w-full bg-gray-100 dark:bg-slate-600"></div>
              <span class="text-gray-500 dark:text-slate-500">or</span>
              <div class="h-[1px] w-full bg-gray-100 dark:bg-slate-600"></div>
            </div>

            <div
                class="flex 640px:flex-row flex-col items-center justify-between gap-[15px]"
            >
              <button
                  class="py-2 hover:bg-gray-100 px-4 border border-gray-200 rounded-md w-full flex items-center justify-center gap-[10px]"
              >
                <Icon icon="fa:home" class="text-[1.3rem]"/>
                Home
              </button>
              <button
                  class="py-2 hover:bg-gray-100 px-4 border border-gray-200 rounded-md w-full flex items-center justify-center gap-[10px]"
              >
                <Icon icon="ph:share-fat-light" class="text-[1.3rem]"/>
                Rejoin session
              </button>
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="rate via count" id="rate_via_count"/>
      </div>

      <ComponentDescription
          text="A rating system where users can select a rating based on a numerical count, typically using stars or icons to represent the total rating value."
      />

      <ToggleTab
          :preview="rateCountPreview"
          @update:preview="(val) => (rateCountPreview = val)"
          @update:code="(val) => (rateCountCode = val)"
          :code="rateCountCode"
      />

      <ComponentWrapper>
        <div
            v-if="rateCountPreview"
            class="p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="bg-white dark:bg-slate-800 dark:border-slate-700 rounded-2xl border border-gray-200 w-full 640px:w-[80%] p-8"
          >
            <div class="py-4 px-3.5 bg-[#36af7b]/10 w-max dark:bg-blue-800/20 rounded-full">
              <Icon icon="fa:heart" class="text-[1.5rem] text-[#36af7b]"/>
            </div>

            <h3
                class="text-[24px] font-semibold dark:text-[#abc2d3] text-[#333333] mt-[20px]"
            >
              Hey Drop some Rating!
            </h3>
            <p
                class="text-[14px] font-[400] dark:text-[#abc2d3]/80 text-gray-500 mt-[10px]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div
                class="flex 640px:flex-nowrap flex-wrap items-center 640px:gap-5 gap-[10px] mt-[25px]"
            >
              <div
                  v-for="i in 5"
                  :key="i"
                  class="w-[55px] h-[55px] dark:bg-blue-800/20 dark:text-[#abc2d3] text-[1.5rem] bg-[#36af7b]/10 flex items-center justify-center rounded-full text-[#36af7b] hover:bg-[#36af7b] hover:text-white cursor-pointer transition-all duration-200"
              >
                {{ i }}
              </div>
            </div>

            <button
                class="py-3 px-4 bg-[#36af7b] text-white w-full mt-[25px] rounded-full text-[1.2rem]"
            >
              Submit
            </button>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <OverviewFooter
          backName="breadcrumb"
          backUrl="/components/breadcrumb"
          forwardName="stepper"
          forwardUrl="/components/stepper"
      />
    </div>

    <ContentNavbar
        :contents="ratingContents"
        :activeSection="activeSection"
    />
  </aside>
</template>