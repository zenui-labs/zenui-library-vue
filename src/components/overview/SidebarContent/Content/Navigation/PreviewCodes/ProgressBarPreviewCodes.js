export const BasicProgressBarCodes = '<script setup>\n' +
    'import {ref, watch} from "vue";\n' +
    '\n' +
    'const progress = ref(0);\n' +
    'const isLoading = ref(false);\n' +
    '\n' +
    'let interval = null;\n' +
    '\n' +
    'watch(isLoading, (newValue) => {\n' +
    '  if (newValue) {\n' +
    '    interval = setInterval(() => {\n' +
    '      progress.value = progress.value + 1;\n' +
    '      if (progress.value >= 90) {\n' +
    '        clearInterval(interval);\n' +
    '        isLoading.value = false;\n' +
    '        progress.value = 90;\n' +
    '      }\n' +
    '    }, 30);\n' +
    '  } else {\n' +
    '    if (interval) {\n' +
    '      clearInterval(interval);\n' +
    '    }\n' +
    '  }\n' +
    '});\n' +
    '\n' +
    'const handleStartLoading = () => {\n' +
    '  if (isLoading.value) {\n' +
    '    progress.value = 0;\n' +
    '    isLoading.value = false;\n' +
    '  }\n' +
    '\n' +
    '  progress.value = 0;\n' +
    '  isLoading.value = true;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative dark:bg-slate-700 bg-gray-200 w-[80%] h-[15px] rounded-full">\n' +
    '    <div\n' +
    '        class="absolute top-0 left-0 bg-[#3fb682] h-full rounded-full"\n' +
    '        :style="{ width: `${progress}%` }"\n' +
    '    ></div>\n' +
    '  </div>\n' +
    '\n' +
    '  <button\n' +
    '      @click="handleStartLoading"\n' +
    '      class="bg-gray-600 hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"\n' +
    '  >\n' +
    '    Start Loading\n' +
    '  </button>\n' +
    '</template>\n'

export const ProgressBarWithTooltipCodes = '<script setup>\n' +
    'import {ref, watch} from "vue";\n' +
    '\n' +
    'const progress = ref(0);\n' +
    'const isLoading = ref(false);\n' +
    '\n' +
    'let interval = null;\n' +
    '\n' +
    'watch(isLoading, (newValue) => {\n' +
    '  if (newValue) {\n' +
    '    interval = setInterval(() => {\n' +
    '      progress.value = progress.value + 1;\n' +
    '      if (progress.value >= 90) {\n' +
    '        clearInterval(interval);\n' +
    '        isLoading.value = false;\n' +
    '        progress.value = 90;\n' +
    '      }\n' +
    '    }, 30);\n' +
    '  } else {\n' +
    '    if (interval) {\n' +
    '      clearInterval(interval);\n' +
    '    }\n' +
    '  }\n' +
    '});\n' +
    '\n' +
    'const handleStartLoading = () => {\n' +
    '  if (isLoading.value) {\n' +
    '    progress.value = 0;\n' +
    '    isLoading.value = false;\n' +
    '  }\n' +
    '\n' +
    '  progress.value = 0;\n' +
    '  isLoading.value = true;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative dark:bg-slate-700 bg-gray-200 w-[80%] h-[15px] rounded-full">\n' +
    '    <div\n' +
    '        v-if="progress !== 0"\n' +
    '        :style="{ left: `calc(${progress}% - 40px)` }"\n' +
    '        class="bg-[#3fb682] rounded-[5px] absolute top-[-40px] text-white px-2 py-0.5 before:w-[8px] before:h-[8px] before:bg-[#3fb682] before:absolute before:bottom-[-4px] before:left-[35%] before:transform before:translate-x-1/2 before:rotate-[45deg]"\n' +
    '    >\n' +
    '      {{ progress }}%\n' +
    '    </div>\n' +
    '    <div\n' +
    '        class="absolute top-0 left-0 bg-[#3fb682] h-full rounded-full"\n' +
    '        :style="{ width: `${progress}%` }"\n' +
    '    ></div>\n' +
    '  </div>\n' +
    '\n' +
    '  <button\n' +
    '      @click="handleStartLoading"\n' +
    '      class="bg-gray-600 hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"\n' +
    '  >\n' +
    '    Start Loading\n' +
    '  </button>\n' +
    '</template>\n'

export const ProgressBarWithLabelCodes = '<script setup>\n' +
    'import {ref, watch} from "vue";\n' +
    '\n' +
    'const progress = ref(0);\n' +
    'const isLoading = ref(false);\n' +
    '\n' +
    'let interval = null;\n' +
    '\n' +
    'watch(isLoading, (newValue) => {\n' +
    '  if (newValue) {\n' +
    '    interval = setInterval(() => {\n' +
    '      progress.value = progress.value + 1;\n' +
    '      if (progress.value >= 90) {\n' +
    '        clearInterval(interval);\n' +
    '        isLoading.value = false;\n' +
    '        progress.value = 90;\n' +
    '      }\n' +
    '    }, 30);\n' +
    '  } else {\n' +
    '    if (interval) {\n' +
    '      clearInterval(interval);\n' +
    '    }\n' +
    '  }\n' +
    '});\n' +
    '\n' +
    'const handleStartLoading = () => {\n' +
    '  if (isLoading.value) {\n' +
    '    progress.value = 0;\n' +
    '    isLoading.value = false;\n' +
    '  }\n' +
    '\n' +
    '  progress.value = 0;\n' +
    '  isLoading.value = true;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex flex-col items-center justify-center w-full gap-[10px]">\n' +
    '    <div class="relative dark:bg-slate-700 bg-gray-200 w-[80%] h-[15px] rounded-full">\n' +
    '      <div\n' +
    '          class="absolute top-0 left-0 bg-[#3fb682] h-full rounded-full"\n' +
    '          :style="{ width: `${progress}%` }"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <p>\n' +
    '      Loading: <b>{{ progress }}%</b>\n' +
    '    </p>\n' +
    '  </div>\n' +
    '\n' +
    '  <button\n' +
    '      @click="handleStartLoading"\n' +
    '      class="bg-gray-600 hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"\n' +
    '  >\n' +
    '    Start Loading\n' +
    '  </button>\n' +
    '</template>\n'

export const CircleProgressBarCodes = '<script setup>\n' +
    'import {ref, watch} from "vue";\n' +
    '\n' +
    'const progress = ref(0);\n' +
    'const isLoading = ref(false);\n' +
    '\n' +
    'let interval = null;\n' +
    '\n' +
    'watch(isLoading, (newValue) => {\n' +
    '  if (newValue) {\n' +
    '    interval = setInterval(() => {\n' +
    '      progress.value = progress.value + 1;\n' +
    '      if (progress.value >= 90) {\n' +
    '        clearInterval(interval);\n' +
    '        isLoading.value = false;\n' +
    '        progress.value = 90;\n' +
    '      }\n' +
    '    }, 30);\n' +
    '  } else {\n' +
    '    if (interval) {\n' +
    '      clearInterval(interval);\n' +
    '    }\n' +
    '  }\n' +
    '});\n' +
    '\n' +
    'const handleStartLoading = () => {\n' +
    '  if (isLoading.value) {\n' +
    '    progress.value = 0;\n' +
    '    isLoading.value = false;\n' +
    '  }\n' +
    '\n' +
    '  progress.value = 0;\n' +
    '  isLoading.value = true;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative w-[150px] h-[150px] mx-auto">\n' +
    '    <svg class="w-full h-full" viewBox="0 0 100 100">\n' +
    '      <circle\n' +
    '          cx="50"\n' +
    '          cy="50"\n' +
    '          r="45"\n' +
    '          class="text-gray-200"\n' +
    '          stroke-width="10"\n' +
    '          fill="none"\n' +
    '      />\n' +
    '\n' +
    '      <circle\n' +
    '          cx="50"\n' +
    '          cy="50"\n' +
    '          r="45"\n' +
    '          class="dark:stroke-[#334155]"\n' +
    '          stroke="#e2e2e2"\n' +
    '          stroke-width="10"\n' +
    '          fill="none"\n' +
    '          stroke-dasharray="282.6"\n' +
    '          :stroke-dashoffset="0"\n' +
    '          stroke-linecap="round"\n' +
    '          transform="rotate(-90 50 50)"\n' +
    '      />\n' +
    '\n' +
    '      <circle\n' +
    '          cx="50"\n' +
    '          cy="50"\n' +
    '          r="45"\n' +
    '          class="text-gray-200"\n' +
    '          stroke-width="10"\n' +
    '          fill="none"\n' +
    '      />\n' +
    '\n' +
    '      <circle\n' +
    '          cx="50"\n' +
    '          cy="50"\n' +
    '          r="45"\n' +
    '          stroke="#3fb682"\n' +
    '          stroke-width="10"\n' +
    '          fill="none"\n' +
    '          stroke-dasharray="282.6"\n' +
    '          :stroke-dashoffset="(1 - progress / 100) * 282.6"\n' +
    '          stroke-linecap="round"\n' +
    '          transform="rotate(-90 50 50)"\n' +
    '      />\n' +
    '    </svg>\n' +
    '\n' +
    '    <p class="absolute top-[35%] left-[30%] translate-x-1/2 transform translate-y-1/2">\n' +
    '      {{ progress }}%\n' +
    '    </p>\n' +
    '  </div>\n' +
    '\n' +
    '  <button\n' +
    '      @click="handleStartLoading"\n' +
    '      class="bg-gray-600 mx-auto hover:bg-gray-800 transition-all duration-300 text-white rounded-md mt-3 text-[0.8rem] px-3 py-2"\n' +
    '  >\n' +
    '    Start Loading\n' +
    '  </button>\n' +
    '</template>\n'