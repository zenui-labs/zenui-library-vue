<template>
  <div class="code-block-wrapper border border-[#ffffff15] rounded-normal overflow-hidden">
    <div v-if="isMultiTab" class="flex bg-[#282a36] border-b border-[#ffffff15] pl-2 pr-4 pt-1.5">
      <button
          v-for="tab in formattedCode"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
          'px-3 py-2 flex items-center gap-[8px] rounded-lg text-sm',
          activeTab === tab.id
            ? 'border-b rounded-b-none text-white'
            : 'text-gray-400 hover:bg-slate-700'
        ]"
      >
        <IconifyIcon
            v-if="tab.language === 'vue'"
            icon="logos:vue"
            class="text-blue-400 text-[1.1rem]"
        />
        <IconifyIcon
            v-else-if="tab.language === 'js'"
            icon="logos:javascript"
            class="text-yellow-400 text-[1.1rem]"
        />
        <IconifyIcon
            v-else-if="tab.language === 'css'"
            icon="logos:css-3"
            class="text-blue-400 text-[1.1rem]"
        />
        {{ tab.displayText || tab.id.toUpperCase() }}
      </button>
    </div>

    <!-- Code Block Section -->
    <div class="relative">
      <!-- Copy Button -->
      <button
          @click="copyToClipboard"
          class="absolute right-4 top-4 z-10 w-[40px] h-[40px] flex items-center justify-center bg-[#000000d7] rounded-md transition-all duration-300 hover:bg-[#00000080]"
      >
        <IconifyIcon
            v-if="isCopy"
            icon="mdi:check-circle-outline"
            class="text-[1.3rem] text-green-500"
        />
        <IconifyIcon
            v-else
            icon="mdi:content-copy"
            class="text-[1.2rem] text-gray-400"
        />
      </button>

      <!-- Code Display -->
      <pre
          class="zenui_code_snippet text-[14px] max-h-[400px] overflow-auto rounded-none font-mono bg-[#282a36] text-white px-4 py-3"
          :style="{ maxWidth: maxWidth }">
        <code v-html="highlightedCode"></code>
      </pre>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {Icon as IconifyIcon} from '@iconify/vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/themes/prism-tomorrow.css';
import toggleThemeBaseClasses from '@/Utils/ToggleThemeBasedClasses.js';
import {useZenuiStore} from "@/Store/Index.js";

const props = defineProps({
  code: {
    type: [Array, String],
    required: true,
  },
});

const isCopy = ref(false);
const isMultiTab = Array.isArray(props.code);
const activeTab = ref(isMultiTab ? props.code[0].id : 'default');

const store = useZenuiStore();

const formattedCode = computed(() => {
  if (isMultiTab) {
    return props.code;
  }
  return [{id: 'default', displayText: '', language: 'jsx', code: props.code}];
});

const currentCode = computed(() => {
  const item = formattedCode.value.find(item => item.id === activeTab.value);
  return item ? toggleThemeBaseClasses(item.code, store.withDarkClasses) : '';
});

const highlightedCode = computed(() => {
  if (!currentCode.value) return '';
  const lang = formattedCode.value.find(item => item.id === activeTab.value)?.language || 'jsx';
  return Prism.highlight(currentCode.value, Prism.languages[lang] || Prism.languages.jsx, lang);
});

const maxWidth = computed(() => {
  return '700px';
});

function copyToClipboard() {
  navigator.clipboard.writeText(currentCode.value).then(() => {
    isCopy.value = true;
    setTimeout(() => {
      isCopy.value = false;
    }, 1000);
  });
}
</script>
