export const NonClickableBreadcrumbCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const items = [\n' +
    '  {\n' +
    '    label: \'Home\',\n' +
    '    path: \'/\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Category\',\n' +
    '    path: \'/category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Sub Category\',\n' +
    '    path: \'/sub-category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Current Page\',\n' +
    '    path: \'/current-page\',\n' +
    '  },\n' +
    '];\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <ol class=\'flex items-center flex-wrap gap-[5px]\'>\n' +
    '    <template v-for="(item, index) in items" :key="index">\n' +
    '      <li\n' +
    '          :class="[\n' +
    '                  \'text-[0.9rem] dark:text-[#abc2d3] text-text\',\n' +
    '                  { \'!text-[#3B9DF8]\': index === items.length - 1 }\n' +
    '                ]"\n' +
    '      >\n' +
    '        {{ item.label }}\n' +
    '      </li>\n' +
    '      <Icon icon="solar:alt-arrow-down-line-duotone"\n' +
    '            v-if="index !== items.length - 1"\n' +
    '            class=\'rotate-[-90deg] dark:text-[#abc2d3] text-[0.9rem]\'\n' +
    '      />\n' +
    '    </template>\n' +
    '  </ol>\n' +
    '</template>\n'

export const ClickableBreadcrumbCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const items = [\n' +
    '  {\n' +
    '    label: \'Home\',\n' +
    '    path: \'/\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Category\',\n' +
    '    path: \'/category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Sub Category\',\n' +
    '    path: \'/sub-category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Current Page\',\n' +
    '    path: \'/current-page\',\n' +
    '  },\n' +
    '];\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'flex items-center flex-wrap gap-[5px]\'>\n' +
    '    <template v-for="(item, index) in items" :key="index">\n' +
    '      <a\n' +
    '          :href="item.path"\n' +
    '          :class="[\n' +
    '                  \'text-[0.9rem] dark:text-[#abc2d3] text-text hover:underline\',\n' +
    '                  { \'!text-[#3B9DF8]\': index === items.length - 1 }\n' +
    '                ]"\n' +
    '      >\n' +
    '        {{ item.label }}\n' +
    '      </a>\n' +
    '      <Icon icon="solar:alt-arrow-down-line-duotone"\n' +
    '            v-if="index !== items.length - 1"\n' +
    '            class=\'rotate-[-90deg] dark:text-[#abc2d3] text-[0.9rem]\'\n' +
    '      />\n' +
    '    </template>\n' +
    '  </div>\n' +
    '</template>\n'

export const DropdownBreadcrumbCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const dropdownOpen = ref(false);\n' +
    '\n' +
    'const dropdownBreadcrumbArray = [\n' +
    '  {\n' +
    '    label: \'Home\',\n' +
    '    path: \'/\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Category\',\n' +
    '    path: \'/category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Sub Category\',\n' +
    '    path: \'/sub-category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'About Us\',\n' +
    '    path: \'/about-us\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Contact Us\',\n' +
    '    path: \'/contact-us\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Current Page\',\n' +
    '    path: \'/current-page\',\n' +
    '  },\n' +
    '];\n' +
    '\n' +
    'const handleClickOutside = (e) => {\n' +
    '  if (\n' +
    '      !e.target.closest(\'.dropdownModal\') &&\n' +
    '      !e.target.closest(\'.dropdownButton\')\n' +
    '  ) {\n' +
    '    dropdownOpen.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener(\'click\', handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  document.removeEventListener(\'click\', handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'flex items-center gap-[5px]\'>\n' +
    '    <template v-for="(item, index) in dropdownBreadcrumbArray.slice(0, 3)" :key="index">\n' +
    '      <a\n' +
    '          :href="item.path"\n' +
    '          :class="[\n' +
    '                  \'text-[0.9rem] dark:text-[#abc2d3] text-[#424242] hover:underline\',\n' +
    '                  { \'!text-[#3B9DF8]\': index === dropdownBreadcrumbArray.length - 1 }\n' +
    '                ]"\n' +
    '      >\n' +
    '        {{ item.label }}\n' +
    '      </a>\n' +
    '      <Icon icon="solar:alt-arrow-down-line-duotone"\n' +
    '            v-if="index !== dropdownBreadcrumbArray.length - 1"\n' +
    '            class=\'rotate-[-90deg] dark:text-[#abc2d3] text-[0.9rem]\'\n' +
    '      />\n' +
    '    </template>\n' +
    '\n' +
    '    <div class=\'relative\'>\n' +
    '      <p\n' +
    '          class=\'dropdownButton dark:text-[#abc2d3] cursor-pointer\'\n' +
    '          @click="dropdownOpen = !dropdownOpen"\n' +
    '      >\n' +
    '        ....\n' +
    '      </p>\n' +
    '\n' +
    '      <div\n' +
    '          :class="[\n' +
    '                  \'flex flex-col text-[0.8rem] dark:bg-slate-800 dark:text-[#abc2d3] bg-white shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] dropdownModal transition-all duration-300 rounded-md p-1 absolute top-[25px] right-0 md:left-[-20px] w-max\',\n' +
    '                  dropdownOpen\n' +
    '                    ? \'translate-y-0 opacity-100 z-30\'\n' +
    '                    : \'translate-y-[-20px] opacity-0 z-[-1]\'\n' +
    '                ]"\n' +
    '      >\n' +
    '        <a\n' +
    '            v-for="(item, index) in dropdownBreadcrumbArray.slice(3)"\n' +
    '            :key="index"\n' +
    '            :href="item.path"\n' +
    '            class=\'w-full rounded-md hover:bg-gray-100 dark:hover:bg-slate-900/40 px-5 py-2 cursor-pointer\'\n' +
    '        >\n' +
    '          {{ item.label }}\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const CustomizableBreadcrumbCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const items = [\n' +
    '  {\n' +
    '    label: \'Home\',\n' +
    '    path: \'/\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Category\',\n' +
    '    path: \'/category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Sub Category\',\n' +
    '    path: \'/sub-category\',\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Current Page\',\n' +
    '    path: \'/current-page\',\n' +
    '  },\n' +
    '];\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'flex flex-col gap-[10px]\'>\n' +
    '    <ol class=\'flex items-center flex-wrap gap-[5px] dark:bg-blue-800/20 bg-blue-50 py-2.5 px-3 rounded-md\'>\n' +
    '      <template v-for="(item, index) in items" :key="index">\n' +
    '        <li\n' +
    '            :class="[\n' +
    '                    \'text-[0.9rem] dark:text-blue-600 text-blue-900\',\n' +
    '                    { \'font-bold\': index === items.length - 1 }\n' +
    '                  ]"\n' +
    '        >\n' +
    '          {{ item.label }}\n' +
    '        </li>\n' +
    '        <Icon icon="solar:alt-arrow-down-line-duotone"\n' +
    '              v-if="index !== items.length - 1"\n' +
    '              class=\'rotate-[-90deg] text-blue-900 text-[0.9rem]\'\n' +
    '        />\n' +
    '      </template>\n' +
    '    </ol>\n' +
    '\n' +
    '    <ol class=\'flex items-center flex-wrap gap-[5px] dark:bg-orange-800/20 bg-orange-50 py-2.5 px-3 rounded-md\'>\n' +
    '      <template v-for="(item, index) in items" :key="index">\n' +
    '        <li\n' +
    '            :class="[\n' +
    '                    \'text-[0.9rem] dark:text-orange-600 text-orange-900\',\n' +
    '                    { \'font-bold\': index === items.length - 1 }\n' +
    '                  ]"\n' +
    '        >\n' +
    '          {{ item.label }}\n' +
    '        </li>\n' +
    '        <Icon icon="solar:alt-arrow-down-line-duotone"\n' +
    '              v-if="index !== items.length - 1"\n' +
    '              class=\'rotate-[-90deg] text-orange-900 text-[0.9rem]\'\n' +
    '        />\n' +
    '      </template>\n' +
    '    </ol>\n' +
    '\n' +
    '    <ol class=\'flex items-center flex-wrap gap-[5px] dark:bg-green-800/20 bg-green-50 py-2.5 px-3 rounded-md\'>\n' +
    '      <template v-for="(item, index) in items" :key="index">\n' +
    '        <li\n' +
    '            :class="[\n' +
    '                    \'text-[0.9rem] dark:text-green-600 text-green-900\',\n' +
    '                    { \'font-bold\': index === items.length - 1 }\n' +
    '                  ]"\n' +
    '        >\n' +
    '          {{ item.label }}\n' +
    '        </li>\n' +
    '        <Icon icon="solar:alt-arrow-down-line-duotone"\n' +
    '              v-if="index !== items.length - 1"\n' +
    '              class=\'rotate-[-90deg] text-green-900 text-[0.9rem]\'\n' +
    '        />\n' +
    '      </template>\n' +
    '    </ol>\n' +
    '  </div>\n' +
    '</template>\n'