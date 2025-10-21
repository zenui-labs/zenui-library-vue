<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {paginationContents} from "@/Utils/ContentsConfig/NavigationContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import HorizontalMarquee from "@/components/overview/SidebarContent/Content/Navigation/Marquees/HorizontalMarquee.vue";
import VerticalMarquee from "@/components/overview/SidebarContent/Content/Navigation/Marquees/VerticalMarquee.vue";

const sectionIds = paginationContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// states start
const animatedPaginationPreview = ref(true);
const animatedPaginationCode = ref(false);

const paginationWithButtonPreview = ref(true);
const paginationWithButtonCode = ref(false);

const roundedButtonPaginationPreview = ref(true);
const roundedButtonPaginationCode = ref(false);

const smartPaginationPreview = ref(true);
const smartPaginationCode = ref(false);
// states end

// pagination logic
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

// pagination 4 logic
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
            class='p-8 flex w-[320px] 640px:w-[700px] mx-auto 1024px:w-[500px] 1360px:w-[600px] overflow-hidden flex-wrap items-center gap-5 justify-center'>
          <HorizontalMarquee/>
        </div>
        <ShowCode v-else code=""/>
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
            class='p-8 flex w-[320px] 640px:w-[700px] 1024px:w-[500px] 1360px:w-[600px] overflow-hidden flex-wrap items-center mx-auto gap-5 justify-center'>
          <VerticalMarquee/>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <OverviewFooter
          backName="all components"
          backUrl="/components/all-components"
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