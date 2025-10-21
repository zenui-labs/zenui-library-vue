<script setup>
import {onMounted, onUnmounted, ref} from 'vue';

// contents for scrollspy
import {useScrollSpy} from '@/CustomHooks/useScrollSpy';
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {Icon} from "@iconify/vue";
import {breadcrumbContents} from "@/Utils/ContentsConfig/NavigationContents.js";

const sectionIds = breadcrumbContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

// non clickable
const nonClickablePreview = ref(true);
const nonClickableCode = ref(false);

// clickable
const clickablePreview = ref(true);
const clickableCode = ref(false);

// dropdown breadcrumb
const dropdownBreadcrumbPreview = ref(true);
const dropdownBreadcrumbCode = ref(false);

// customizable breadcrumb
const customizableBreadcrumbPreview = ref(true);
const customizableBreadcrumbCode = ref(false);

const nonClickableItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Category',
    path: '/category',
  },
  {
    label: 'Sub Category',
    path: '/sub-category',
  },
  {
    label: 'Current Page',
    path: '/current-page',
  },
];

const dropdownBreadcrumbArray = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Category',
    path: '/category',
  },
  {
    label: 'Sub Category',
    path: '/sub-category',
  },
  {
    label: 'About Us',
    path: '/about-us',
  },
  {
    label: 'Contact Us',
    path: '/contact-us',
  },
  {
    label: 'Current Page',
    path: '/current-page',
  },
];

const dropdownOpen = ref(false);

const handleClickOutside = (e) => {
  if (
      !e.target.closest('.dropdownModal') &&
      !e.target.closest('.dropdownButton')
  ) {
    dropdownOpen.value = false;
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
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader
          text='non clickable breadcrumb'
          id='non_clickable_breadcrumb'
      />

      <ComponentDescription
          text="A breadcrumb navigation that displays the user's path but with non-clickable links, serving as a visual guide without interactive functionality."
      />

      <ToggleTab
          :code="nonClickableCode"
          :preview="nonClickablePreview"
          @update:code="nonClickableCode = $event"
          @update:preview="nonClickablePreview = $event"
      />

      <ComponentWrapper>
        <div v-if="nonClickablePreview" class='p-8 mb-4 flex flex-wrap items-center gap-5 justify-center'>
          <ol class='flex items-center flex-wrap gap-[5px]'>
            <template v-for="(item, index) in nonClickableItems" :key="index">
              <li
                  :class="[
                  'text-[0.9rem] dark:text-[#abc2d3] text-text',
                  { '!text-primary': index === nonClickableItems.length - 1 }
                ]"
              >
                {{ item.label }}
              </li>
              <Icon icon="solar:alt-arrow-down-line-duotone"
                    v-if="index !== nonClickableItems.length - 1"
                    class='rotate-[-90deg] dark:text-[#abc2d3] text-[0.9rem]'
              />
            </template>
          </ol>
        </div>

        <ShowCode v-if="nonClickableCode" code=''/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            text='clickable breadcrumb'
            id='clickable_breadcrumb'
        />
      </div>

      <ComponentDescription
          text='A breadcrumb navigation with clickable links, allowing users to easily navigate back to previous pages or sections.'
      />

      <ToggleTab
          :code="clickableCode"
          :preview="clickablePreview"
          @update:code="clickableCode = $event"
          @update:preview="clickablePreview = $event"
      />

      <ComponentWrapper>
        <div v-if="clickablePreview" class='p-8 mb-4 flex flex-wrap items-center gap-5 justify-center'>
          <div class='flex items-center flex-wrap gap-[5px]'>
            <template v-for="(item, index) in nonClickableItems" :key="index">
              <a
                  :href="item.path"
                  :class="[
                  'text-[0.9rem] dark:text-[#abc2d3] text-text hover:underline',
                  { '!text-primary': index === nonClickableItems.length - 1 }
                ]"
              >
                {{ item.label }}
              </a>
              <Icon icon="solar:alt-arrow-down-line-duotone"
                    v-if="index !== nonClickableItems.length - 1"
                    class='rotate-[-90deg] dark:text-[#abc2d3] text-[0.9rem]'
              />
            </template>
          </div>
        </div>

        <ShowCode v-if="clickableCode" code=''/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            text='dropdown breadcrumb'
            id='dropdown_breadcrumb'
        />
      </div>

      <ComponentDescription
          text='A breadcrumb navigation with a dropdown that appears after a certain number of links, allowing users to access additional navigation options from the dropdown menu.'
      />

      <ToggleTab
          :code="dropdownBreadcrumbCode"
          :preview="dropdownBreadcrumbPreview"
          @update:code="dropdownBreadcrumbCode = $event"
          @update:preview="dropdownBreadcrumbPreview = $event"
      />

      <ComponentWrapper>
        <div
            v-if="dropdownBreadcrumbPreview"
            :class="[
            'p-8 flex flex-wrap items-center gap-5 justify-center transition-all duration-300',
            dropdownOpen ? 'mb-[8rem]' : 'mb-4'
          ]"
        >
          <div class='flex items-center gap-[5px]'>
            <template v-for="(item, index) in dropdownBreadcrumbArray.slice(0, 3)" :key="index">
              <a
                  :href="item.path"
                  :class="[
                  'text-[0.9rem] dark:text-[#abc2d3] text-text hover:underline',
                  { '!text-primary': index === nonClickableItems.length - 1 }
                ]"
              >
                {{ item.label }}
              </a>
              <Icon icon="solar:alt-arrow-down-line-duotone"
                    v-if="index !== nonClickableItems.length - 1"
                    class='rotate-[-90deg] dark:text-[#abc2d3] text-[0.9rem]'
              />
            </template>

            <div class='relative'>
              <p
                  class='dropdownButton dark:text-[#abc2d3] cursor-pointer'
                  @click="dropdownOpen = !dropdownOpen"
              >
                ....
              </p>

              <div
                  :class="[
                  'flex flex-col text-[0.8rem] dark:bg-slate-800 dark:text-[#abc2d3] bg-white boxShadow dropdownModal transition-all duration-300 rounded-md p-1 absolute top-[25px] right-0 640px:left-[-20px] w-max',
                  dropdownOpen
                    ? 'translate-y-0 opacity-100 z-30'
                    : 'translate-y-[-20px] opacity-0 z-[-1]'
                ]"
              >
                <a
                    v-for="(item, index) in dropdownBreadcrumbArray.slice(3)"
                    :key="index"
                    :href="item.path"
                    class='w-full rounded-md hover:bg-gray-100 dark:hover:bg-slate-900/40 px-5 py-2 cursor-pointer'
                >
                  {{ item.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-if="dropdownBreadcrumbCode" code=''/>
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader
            text='customizable breadcrumb'
            id='customizable_breadcrumb'
        />
      </div>

      <ComponentDescription
          text='This is a basic chip component. Use it to display concise information or tags in a compact form.'
      />

      <ToggleTab
          :code="customizableBreadcrumbCode"
          :preview="customizableBreadcrumbPreview"
          @update:code="customizableBreadcrumbCode = $event"
          @update:preview="customizableBreadcrumbPreview = $event"
      />

      <ComponentWrapper>
        <div
            v-if="customizableBreadcrumbPreview"
            :class="[
            'p-8 flex flex-wrap items-center gap-5 justify-center transition-all duration-300',
            dropdownOpen ? 'mb-[8rem]' : 'mb-4'
          ]"
        >
          <div class='flex flex-col gap-[10px]'>
            <ol class='flex items-center flex-wrap gap-[5px] dark:bg-blue-800/20 bg-blue-50 py-2.5 px-3 rounded-md'>
              <template v-for="(item, index) in nonClickableItems" :key="index">
                <li
                    :class="[
                    'text-[0.9rem] dark:text-blue-600 text-blue-900',
                    { 'font-bold': index === nonClickableItems.length - 1 }
                  ]"
                >
                  {{ item.label }}
                </li>
                <Icon icon="solar:alt-arrow-down-line-duotone"
                      v-if="index !== nonClickableItems.length - 1"
                      class='rotate-[-90deg] text-blue-900 text-[0.9rem]'
                />
              </template>
            </ol>

            <ol class='flex items-center flex-wrap gap-[5px] dark:bg-orange-800/20 bg-orange-50 py-2.5 px-3 rounded-md'>
              <template v-for="(item, index) in nonClickableItems" :key="index">
                <li
                    :class="[
                    'text-[0.9rem] dark:text-orange-600 text-orange-900',
                    { 'font-bold': index === nonClickableItems.length - 1 }
                  ]"
                >
                  {{ item.label }}
                </li>
                <Icon icon="solar:alt-arrow-down-line-duotone"
                      v-if="index !== nonClickableItems.length - 1"
                      class='rotate-[-90deg] text-orange-900 text-[0.9rem]'
                />
              </template>
            </ol>

            <ol class='flex items-center flex-wrap gap-[5px] dark:bg-green-800/20 bg-green-50 py-2.5 px-3 rounded-md'>
              <template v-for="(item, index) in nonClickableItems" :key="index">
                <li
                    :class="[
                    'text-[0.9rem] dark:text-green-600 text-green-900',
                    { 'font-bold': index === nonClickableItems.length - 1 }
                  ]"
                >
                  {{ item.label }}
                </li>
                <Icon icon="solar:alt-arrow-down-line-duotone"
                      v-if="index !== nonClickableItems.length - 1"
                      class='rotate-[-90deg] text-green-900 text-[0.9rem]'
                />
              </template>
            </ol>
          </div>
        </div>

        <ShowCode v-if="customizableBreadcrumbCode" code=''/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl='/components/chip'
          backName='chip'
          forwardName='rating'
          forwardUrl='/components/rating'
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="breadcrumbContents"/>
  </aside>
</template>