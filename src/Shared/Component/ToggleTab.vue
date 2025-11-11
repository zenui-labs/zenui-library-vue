<script setup>
import {onBeforeUnmount, ref, watch} from 'vue';
import {useZenuiStore} from "@/Store/Index.js";
import {Icon} from '@iconify/vue';

const props = defineProps({
  preview: Boolean,
  code: Boolean,
});

const emit = defineEmits(['update:preview', 'update:code']);

function toggleToPreview() {
  if (!props.preview) {
    emit('update:preview', true);
    emit('update:code', false);
  }
}

function toggleToCode() {
  if (!props.code) {
    emit('update:preview', false);
    emit('update:code', true);
  }
}

const settingOpen = ref(false);
const store = useZenuiStore();

const uniqueId = `setting-${Math.random().toString(36).substring(2, 9)}`;

function handleClick(e) {
  const clickedButton = e.target.closest('.theme_setting_btn');
  if (!clickedButton || clickedButton.dataset.id !== uniqueId) {
    settingOpen.value = false;
  }
}

watch(settingOpen, (val) => {
  if (val) {
    document.addEventListener('click', handleClick);
  } else {
    document.removeEventListener('click', handleClick);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClick);
});
</script>

<template>
  <div class="flex mt-8 mb-2 relative items-end justify-between w-full 1024px:w-[90%]">

    <div
        class="relative backdrop-blur-md overflow-hidden bg-gray-200/80 dark:bg-slate-800 w-max rounded-normal"
    >
      <div
          :class="[
            'absolute top-[50%] translate-y-[-50%] dark:bg-darkBgColor shadow-sm shadow-gray-300 dark:shadow-slate-900 transform left-0 h-[85%] z-[1] bg-white transition-all rounded-normal duration-500',
            preview ? 'translate-x-[3%] w-[53%]' : 'translate-x-[128%] !w-[43%]',
            ]"
          style="width: 50%;"
      ></div>

      <button
          :class="[
        preview ? 'text-tabTextColor dark:text-darkTextColor/90' : '',
        'px-6 py-2.5 z-[2] relative text-center dark:text-darkSubTextColor transition-all duration-500 text-text',
        ]"
          @click="toggleToPreview"
      >
        Preview
      </button>

      <button
          :class="[
    code ? 'text-tabTextColor dark:text-darkTextColor/90' : '',
    'px-6 py-2.5 z-[2] relative dark:text-darkSubTextColor transition-all dark:text-darkSubTextColor/90 duration-500 text-text',
    ]"
          @click="toggleToCode"
      >
        Code
      </button>
    </div>

    <div
        :data-id="uniqueId"
        @click="settingOpen = !settingOpen"
        class="relative border dark:border-darkBorderColor px-[11px] cursor-pointer theme_setting_btn dark:hover:bg-slate-900 hover:bg-gray-50 transition-all duration-500 py-[9px] rounded-normal"
    >
      <div
          @click.stop
          :class="[
settingOpen
    ? 'opacity-100 visible z-30 translate-y-0'
    : 'z-[-1] opacity-0 invisible translate-y-[10px]',
    'theme_setting_dropdown absolute w-max dark:bg-slate-800 rounded-normal p-2 transition-all duration-300 bg-white border border-gray-200/70 bottom-[115%] dark:shadow-[2px_-3px_30px_#000] dark:border-slate-700/50 shadow-[2px_1px_15px_rgba(0,0,0,0.1)] shadow-gray-200 dark:shadow-primary/30 right-0 flex items-center justify-between gap-[25px]',
]"
      >
        <p class="text-[14px] dark:text-darkSubTextColor">
          Copy to clipboard with <br/>
          <span class="text-brandColor">dark:</span> classes
        </p>

        <div
            :class="[
store.withDarkClasses ? 'bg-brandColor' : 'bg-[#f0f0f0] dark:bg-slate-600',
    'w-[50px] h-[26px] px-[0.150rem] py-[0.120rem] cursor-pointer dark:border-darkBorderColor border transition-colors duration-500 border-[#e5eaf2] rounded-full relative',
]"
            @click.stop="store.handleToggleDarkClasses()"
        >
          <div
              :class="[
store.withDarkClasses ? 'translate-x-[23px] !bg-white' : 'translate-x-[1px]',
    'w-[20px] h-[19.5px] pb-1 transition-all duration-500 dark:bg-slate-300 rounded-full bg-[#fff]',
]"
              style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"
          ></div>
        </div>
      </div>

      <Icon icon="lucide:settings-2" class="dark:text-darkSubTextColor text-text/80 border-border text-[1.2rem]"/>
    </div>
  </div>
</template>
