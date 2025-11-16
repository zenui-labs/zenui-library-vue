<template>
  <div
      class="code-block-wrapper border border-[#ffffff15] rounded-normal overflow-hidden 1404px:max-w-[700px] 1605px:max-w-[800px] max-h-[400px] 400px:max-w-[380px] max-w-[325px] 640px:max-w-[980px]">
    <div
        v-if="isMultiTab"
        style="scrollbar-width: none"
        class="flex overflow-x-auto bg-[#282a36] border-b border-[#ffffff15] pl-2 pr-4 pt-1.5"
    >
      <button
          v-for="tab in formattedCode"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
          'px-3 py-2 flex items-center border-b border-transparent gap-[8px] text-sm transition-colors',
          activeTab === tab.id
            ? 'text-white border-white/80'
            : 'text-gray-400 hover:bg-slate-700',
        ]"
      >
        <IconifyIcon
            v-if="tab.language === 'vue'"
            icon="logos:vue"
            class="text-blue-400 text-[0.9rem]"
        />
        <IconifyIcon
            v-else-if="tab.language === 'js'"
            icon="logos:javascript"
            class="text-yellow-400 text-[0.9rem]"
        />
        <IconifyIcon
            v-else-if="tab.language === 'css'"
            icon="devicon:css3"
            class="text-blue-400 text-[1.1rem]"
        />
        {{ tab.displayText || tab.id.toUpperCase() }}
      </button>
    </div>

    <div class="relative">
      <button
          @click="copyToClipboard"
          class="absolute right-4 top-4 z-10 w-[40px] h-[40px] flex items-center justify-center bg-black rounded-md transition-all duration-300"
      >
        <IconifyIcon
            v-if="isCopy"
            icon="lets-icons:done-all-round"
            class="text-[1.3rem] text-green-500"
        />
        <IconifyIcon
            v-else
            icon="mdi:content-copy"
            class="text-[1.2rem] text-gray-400"
        />
      </button>

      <div
          class="text-[14px] max-h-[450px] overflow-auto font-mono bg-[#282a36] text-white flex"
          :style="{ maxWidth: maxWidth }"
          style="scrollbar-width: none"
      >
        <div
            class="line-numbers text-right select-none pr-3 pl-3 pt-[1.4rem] bg-[#242631] text-gray-500 border-r border-[#ffffff15]"
        >
          <div
              v-for="line in totalLines"
              :key="line"
              class="leading-[1.7] font-mono text-[13px]"
          >
            {{ line }}
          </div>
        </div>

        <pre
            class="zenui_code_snippet overflow-x-auto pl-1 pb-3 pr-4 min-w-[94.2%] text-[14px]">
          <code v-html="highlightedCode"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {Icon as IconifyIcon} from "@iconify/vue";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-css.min.js";
import "prismjs/themes/prism-tomorrow.css";
import toggleThemeBaseClasses from "@/Utils/ToggleThemeBasedClasses.js";
import {useZenuiStore} from "@/Store/Index.js";

const props = defineProps({
  code: {
    type: [Array, String],
    required: true,
  },
});

const store = useZenuiStore();
const isCopy = ref(false);
const isMultiTab = Array.isArray(props.code);
const activeTab = ref(isMultiTab ? props.code[0].id : "default");

const formattedCode = computed(() => {
  if (isMultiTab) return props.code;
  return [{id: "default", displayText: "", language: "html", code: props.code}];
});

const currentCode = computed(() => {
  const item = formattedCode.value.find((item) => item.id === activeTab.value);
  return item ? toggleThemeBaseClasses(item.code, store.withDarkClasses) : "";
});

const highlightedCode = computed(() => {
  if (!currentCode.value) return "";
  const lang =
      formattedCode.value.find((item) => item.id === activeTab.value)?.language ||
      "vue";
  return Prism.highlight(
      currentCode.value,
      Prism.languages[lang] || Prism.languages.jsx,
      lang
  );
});

const totalLines = computed(() => {
  return currentCode.value
      ? currentCode.value.split("\n").length
      : 1;
});

const maxWidth = computed(() => "800px");

function copyToClipboard() {
  navigator.clipboard.writeText(currentCode.value).then(() => {
    isCopy.value = true;
    setTimeout(() => {
      isCopy.value = false;
    }, 1000);
  });
}
</script>

<style scoped>
.line-numbers {
  user-select: none;
  flex-shrink: 0;
}

pre {
  margin: 0;
  background: transparent;
}

.zenui_code_snippet code {
  display: block;
  margin: 0;
}


</style>
