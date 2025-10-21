<template>
  <div :class="`1024px:block sticky top-4 right-0 ${classNames} hidden`">
    <h2 class="text-[0.9rem] dark:text-darkSubTextColor font-[600] text-text tracking-widest">
      CONTENTS
    </h2>
    <div class="max-h-[77vh] overflow-scroll" style="scrollbar-width: none;">
      <div class="flex flex-col border-l dark:border-darkBorderColor border-border mt-4 w-[70%]">
        <div
            v-for="item in contents"
            :key="item.id"
            class="relative group"
        >
          <div
              :class="[
            'absolute inset-y-0 left-0 bg-brandColor/5 dark:bg-slate-900 transition-all duration-[400ms] ease-linear',
            activeSection === item.href.slice(1) ? 'w-full opacity-100' : 'w-0 opacity-0'
            ]"
          ></div>
          <a
              :href="item.href"
              :class="[
        'relative z-10 block text-[0.9rem] capitalize py-[8px] dark:text-darkSubTextColor/90 transition-width duration-300 text-text border-l-2 border-transparent pl-4',
        activeSection === item.href.slice(1) ? 'text-brandColor !border-brandColor' : ''
        ]"
          >
            {{ item.title }}
          </a>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-3">
        <p class="text-[0.94rem] dark:text-darkSubTextColor/90 font-[500]">Contribute</p>
        <p
            @click="handleCreateIssue('bug')"
            class="flex text-text hover:text-[#0FABCA] transition-all duration-200 cursor-pointer dark:text-darkSubTextColor/90 items-center gap-1.5"
        >
          <IconifyIcon icon="mdi:bug-outline"/>
          <span class="text-[0.94rem]">Report an issue</span>
        </p>
        <p
            @click="handleCreateIssue('feature')"
            class="flex text-text hover:text-[#0FABCA] transition-all duration-200 cursor-pointer dark:text-darkSubTextColor/90 items-center gap-1.5"
        >
          <IconifyIcon icon="mdi:lightbulb-outline"/>
          <span class="text-[0.94rem]">Request a feature</span>
        </p>
      </div>

      <div className='py-3 px-1.5 mb-5 mt-3 flex flex-col gap-3 max-w-[273px]'>
        <a href='https://readmestudio.zenui.net/' target='_blank' rel="noreferrer">
          <img src='https://i.ibb.co.com/svzKxvxY/small-ads-for-zenui.png' alt='Readme Studio Ads'
               className='w-full rounded-xl active:scale-[0.95] transition-all duration-200 grayscale hover:grayscale-0'/>
        </a>
        <a href='https://react-hooks.zenui.net/' target='_blank' rel="noreferrer">
          <img src='https://i.ibb.co.com/wNSCP9X1/small-ads-for-zenui-1.png' alt='React Hooks Ads'
               className='w-full rounded-xl active:scale-[0.95] transition-all duration-200 grayscale hover:grayscale-0'/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Icon as IconifyIcon} from '@iconify/vue';

const props = defineProps({
  contents: {
    type: Array,
    default: () => [],
  },
  activeSection: {
    type: String,
    default: '',
  },
  classNames: {
    type: String,
    default: 'w-[40%]',
  },
});

const repoUrl = 'https://github.com/Asfak00/zenui-library';

function handleCreateIssue(type) {
  const currentPath = window.location.pathname;
  const encodedPath = encodeURIComponent(currentPath);

  let url = '';

  if (type === 'bug') {
    url = `${repoUrl}/issues/new?title=%5BBUG%5D:+${encodedPath}&labels=bug&template=bug_report.md`;
  } else if (type === 'feature') {
    url = `${repoUrl}/issues/new?title=%5Bfeat%5D:+${encodedPath}&labels=enhancement&template=feature_request.md`;
  }

  window.open(url, '_blank');
}
</script>
