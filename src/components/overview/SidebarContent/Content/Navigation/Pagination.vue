<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {paginationContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {
  AnimatedPaginationCodes,
  PaginationWithButtonCodes,
  RoundedButtonPaginationCodes,
  SmartPaginationCodes
} from "@/components/overview/SidebarContent/Content/Navigation/PreviewCodes/PaginationPreviewCodes.js";

const sectionIds = paginationContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const animatedPaginationPreview = ref(true);
const animatedPaginationCode = ref(false);

const paginationWithButtonPreview = ref(true);
const paginationWithButtonCode = ref(false);

const roundedButtonPaginationPreview = ref(true);
const roundedButtonPaginationCode = ref(false);

const smartPaginationPreview = ref(true);
const smartPaginationCode = ref(false);

const currentPage = ref(1);
const totalPages = 5;

const handlePrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
  }
};

const handleNext = () => {
  if (currentPage.value < totalPages) {
    currentPage.value = currentPage.value + 1;
  }
};

const handlePageClick = (pageNumber) => {
  currentPage.value = pageNumber;
};

const currentPagePagination4 = ref(1);
const FourPaginationTotalPages = 50;

const handlePreviousPagination4 = () => {
  if (currentPagePagination4.value > 1) {
    currentPagePagination4.value = currentPagePagination4.value - 1;
  }
};

const handleNextPagination4 = () => {
  if (currentPagePagination4.value < FourPaginationTotalPages) {
    currentPagePagination4.value = currentPagePagination4.value + 1;
  }
};

const handlePageClick4 = (pageNumber) => {
  currentPagePagination4.value = pageNumber;
};
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="animated pagination" id="animated_pagination"/>

      <ComponentDescription
          text="An animated pagination component that seamlessly guides users through content with fluid transitions and intuitive design."
      />

      <ToggleTab
          :preview="animatedPaginationPreview"
          @update:preview="(val) => (animatedPaginationPreview = val)"
          @update:code="(val) => (animatedPaginationCode = val)"
          :code="animatedPaginationCode"
      />

      <ComponentWrapper>
        <div
            v-if="animatedPaginationPreview"
            class="640px:p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="flex items-center flex-wrap justify-center mt-8 space-x-1 640px:space-x-2"
          >
            <button
                @click="handlePrevious"
                :disabled="currentPage === 1"
                class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Icon icon="fa:chevron-left"/>
            </button>
            <button
                v-for="i in totalPages"
                :key="i"
                @click="handlePageClick(i)"
                :class="`mx-1 px-4 py-2 text-[0.9rem] 640px:text-[1rem] rounded-full transform transition-all duration-300 ${
                currentPage === i
                  ? 'bg-[#3fb682] text-white scale-110 shadow-md'
                  : 'bg-transparent text-[#3fb682] hover:bg-blue-100'
              }`"
            >
              {{ i }}
            </button>
            <button
                @click="handleNext"
                :disabled="currentPage === totalPages"
                class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Icon icon="fa:chevron-right"/>
            </button>
          </div>
        </div>
        <ShowCode v-else :code="AnimatedPaginationCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="pagination with button"
            id="pagination_with_button"
        />
      </div>

      <ComponentDescription
          text="Pagination featuring user-friendly buttons for effortless navigation
            through content, enhancing accessibility and interaction."
      />

      <ToggleTab
          :preview="paginationWithButtonPreview"
          @update:preview="(val) => (paginationWithButtonPreview = val)"
          @update:code="(val) => (paginationWithButtonCode = val)"
          :code="paginationWithButtonCode"
      />

      <ComponentWrapper>
        <div
            v-if="paginationWithButtonPreview"
            class="640px:p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div class="flex items-center flex-wrap justify-center mt-4">
            <button
                @click="handlePrevious"
                :disabled="currentPage === 1"
                class="mx-1 px-3 py-1 text-[0.9rem] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-[#abc2d3] 640px:text-[1rem] rounded bg-gray-200 text-text disabled:opacity-50"
            >
              Previous
            </button>
            <button
                v-for="i in totalPages"
                :key="i"
                @click="handlePageClick(i)"
                :class="`mx-1 px-3 py-1 text-[0.9rem] 640px:text-[1rem] rounded ${
                currentPage === i
                  ? 'bg-[#3fb682] text-white'
                  : 'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700'
              }`"
            >
              {{ i }}
            </button>
            <button
                @click="handleNext"
                :disabled="currentPage === totalPages"
                class="mx-1 px-3 py-1 text-[0.9rem] 640px:text-[1rem] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-[#abc2d3] rounded bg-gray-200 text-text disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
        <ShowCode
            v-else
            :code="PaginationWithButtonCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="pagination with rounded button"
            id="pagination_with_rounded_button"
        />
      </div>

      <ComponentDescription
          text="Pagination with rounded buttons offering smooth navigation through
            content, enhancing both aesthetics and usability."
      />

      <ToggleTab
          :preview="roundedButtonPaginationPreview"
          @update:preview="(val) => (roundedButtonPaginationPreview = val)"
          @update:code="(val) => (roundedButtonPaginationCode = val)"
          :code="roundedButtonPaginationCode"
      />

      <ComponentWrapper>
        <div
            v-if="roundedButtonPaginationPreview"
            class="640px:p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="flex items-center flex-wrap justify-center mt-8 space-x-4"
          >
            <button
                @click="handlePrevious"
                :disabled="currentPage === 1"
                class="px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3fb682] hover:text-secondary disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 dark:disabled:hover:bg-slate-800 dark:disabled:hover:text-slate-500 disabled:hover:text-gray-700 transition-all duration-300"
            >
              Previous
            </button>
            <div class="flex items-center space-x-2">
              <button
                  v-for="i in totalPages"
                  :key="i"
                  @click="handlePageClick(i)"
                  :class="`mx-1 px-3 py-1 text-[0.9rem] 640px:text-[1rem] rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all dark:bg-slate-700 dark:text-[#abc2d3] duration-300 transform hover:scale-105 ${
                  currentPage === i ? '!bg-[#3fb682] !text-white shadow-lg' : ''
                }`"
              >
                {{ i }}
              </button>
            </div>
            <button
                @click="handleNext"
                :disabled="currentPage === totalPages"
                :class="`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3fb682] hover:text-secondary dark:bg-slate-700 dark:text-[#abc2d3] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 dark:disabled:hover:bg-slate-800 dark:disabled:hover:text-slate-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-700 transition-all duration-300 ${
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`"
            >
              Next
            </button>
          </div>
        </div>
        <ShowCode
            v-else
            :code="RoundedButtonPaginationCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="Smart Pagination" id="smart_pagination"/>
      </div>

      <ComponentDescription
          text="Smart pagination that intelligently handles large page sets by showing only relevant page numbers with ellipses for better navigation experience."
      />

      <ToggleTab
          :preview="smartPaginationPreview"
          @update:preview="(val) => (smartPaginationPreview = val)"
          @update:code="(val) => (smartPaginationCode = val)"
          :code="smartPaginationCode"
      />

      <ComponentWrapper>
        <div
            v-if="smartPaginationPreview"
            class="640px:p-8 mb-4 flex items-center gap-5 justify-center"
        >
          <div
              class="flex items-center flex-wrap justify-center mt-8 space-x-1 640px:space-x-2"
          >
            <button
                @click="handlePreviousPagination4"
                :disabled="currentPagePagination4 === 1"
                class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Icon icon="fa:chevron-left"/>
            </button>

            <button
                @click="handlePageClick4(1)"
                :class="`mx-1 px-3 py-1 text-[0.9rem] 640px:text-[1rem] rounded ${
                currentPagePagination4 === 1
                  ? 'bg-[#3fb682] text-white'
                  : 'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700'
              }`"
            >
              1
            </button>

            <span
                v-if="currentPagePagination4 > 3"
                class="mx-1 px-2 dark:text-[#abc2d3] text-gray-500"
            >...</span
            >

            <template v-for="i in FourPaginationTotalPages" :key="i">
              <button
                  v-if="
                  i !== 1 &&
                  i !== FourPaginationTotalPages &&
                  i >= currentPagePagination4 - 1 &&
                  i <= currentPagePagination4 + 1
                "
                  @click="handlePageClick4(i)"
                  :class="`mx-1 px-3 py-1 text-[0.9rem] 640px:text-[1rem] rounded ${
                  currentPagePagination4 === i
                    ? 'bg-[#3fb682] text-white'
                    : 'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700'
                }`"
              >
                {{ i }}
              </button>
            </template>

            <span
                v-if="currentPagePagination4 < FourPaginationTotalPages - 2"
                class="mx-1 px-2 dark:text-[#abc2d3] text-gray-500"
            >...</span
            >

            <button
                @click="handlePageClick4(FourPaginationTotalPages)"
                :class="`mx-1 px-3 py-1 text-[0.9rem] 640px:text-[1rem] rounded ${
                currentPagePagination4 === FourPaginationTotalPages
                  ? 'bg-[#3fb682] text-white'
                  : 'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700'
              }`"
            >
              {{ FourPaginationTotalPages }}
            </button>

            <button
                @click="handleNextPagination4"
                :disabled="currentPagePagination4 === FourPaginationTotalPages"
                class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Icon icon="fa:chevron-right"/>
            </button>
          </div>
        </div>
        <ShowCode
            v-else
            :code="SmartPaginationCodes"
        />
      </ComponentWrapper>

      <OverviewFooter
          backName="image gallery"
          backUrl="/components/image-gallery"
          forwardName="Progress Bar"
          forwardUrl="/components/progress-bar"
      />
    </div>

    <ContentNavbar
        :contents="paginationContents"
        :activeSection="activeSection"
    />
  </aside>
</template>