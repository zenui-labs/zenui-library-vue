<template>
  <div
      class="code-block-wrapper border border-[#ffffff15] rounded-normal overflow-hidden 1404px:max-w-[700px] 1605px:max-w-[800px] 400px:max-w-[380px] max-w-[325px] 640px:max-w-[700px]"
  >
    <div
        v-if="isMultiTab"
        class="flex overflow-x-auto bg-[#1a1a1a] px-2"
        style="scrollbar-width: none"
    >
      <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="active = tab.id"
          :class="[
          'px-3 py-3 flex items-center gap-2 text-sm border-b-[2px] transition-colors whitespace-nowrap',
          active === tab.id
            ? 'text-white border-brandColor'
            : 'text-gray-400 hover:bg-[#2e2e2e] border-transparent',
        ]"
      >
        <IconifyIcon v-if="tab.language === 'vue'" icon="logos:vue" class="text-green-400 text-sm"/>
        <IconifyIcon v-else-if="tab.language === 'js'" icon="logos:javascript" class="text-yellow-400 text-sm"/>
        <IconifyIcon v-else-if="tab.language === 'css'" icon="devicon:css3" class="text-blue-400 text-lg"/>
        {{ tab.displayText || tab.id.toUpperCase() }}
      </button>
    </div>

    <div class="relative">
      <button
          @click="copy"
          class="absolute right-4 top-4 z-10 w-[40px] h-[40px] grid place-items-center bg-black/60 backdrop-blur rounded-md"
      >
        <IconifyIcon
            v-if="copied"
            icon="lets-icons:done-all-round"
            class="text-[1.3rem] text-green-500"
        />
        <IconifyIcon
            v-else
            icon="mdi:content-copy"
            class="text-[1.2rem] text-gray-300"
        />
      </button>

      <div
          class="zenui_code_snippet max-h-[450px] bg-[#212121] overflow-auto text-[14px]"
      >
        <pre
            class="text-white py-4 px-6 text-sm font-mono leading-relaxed"
            v-html="highlighted"
        ></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {Icon as IconifyIcon} from "@iconify/vue";
import {createHighlighter} from "shiki";

const props = defineProps({
  code: {type: [String, Array], required: true},
  theme: {type: String, default: "material-theme-darker"},
});

const copied = ref(false);
const active = ref("default");
const highlighter = ref(null);

const isMultiTab = Array.isArray(props.code);

const tabs = computed(() => {
  if (isMultiTab) return props.code;
  return [
    {
      id: "default",
      displayText: "",
      language: "vue",
      code: props.code,
    },
  ];
});

onMounted(async () => {
  highlighter.value = await createHighlighter({
    themes: [props.theme],
    langs: [
      "javascript",
      "typescript",
      "vue",
      "html",
      "css",
      "json",
    ],
  });

  if (isMultiTab) active.value = tabs.value[0].id;
});

const currentCode = computed(() => {
  return tabs.value.find((t) => t.id === active.value) || tabs.value[0];
});

const highlighted = computed(() => {
  if (!highlighter.value) return "";
  return highlighter.value.codeToHtml(currentCode.value.code, {
    lang: currentCode.value.language,
    theme: props.theme,
  });
});

function copy() {
  navigator.clipboard.writeText(currentCode.value.code).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 800);
  });
}
</script>
