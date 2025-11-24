export const BackgroundAlertMessageCodes = '<script setup lang="ts">\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full h-full flex flex-col gap-4">\n' +
    '    <div class="p-3 flex items-center gap-3 dark:bg-green-800/40 bg-[#edf7ed] rounded-lg">\n' +
    '      <Icon\n' +
    '          icon="icon-park-outline:done-all"\n' +
    '          class="text-[#418944] dark:text-green-500 text-[1.5rem]"\n' +
    '      />\n' +
    '      <p class="text-[#418944] text-[1rem] dark:text-green-500">\n' +
    '        This is a success Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center gap-3 dark:bg-blue-800/40 bg-[#e5f6fd] rounded-lg">\n' +
    '      <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem] dark:text-blue-500"/>\n' +
    '      <p class="text-[#2d9dda] text-[1rem] dark:text-blue-500">\n' +
    '        This is a info Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center gap-3 dark:bg-red-800/40 bg-[#fdeded] rounded-lg">\n' +
    '      <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem] dark:text-red-500"/>\n' +
    '      <p class="text-[#d74242] text-[1rem] dark:text-red-500">\n' +
    '        This is a error Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center gap-3 dark:bg-orange-800/40 bg-[#fff4e5] rounded-lg">\n' +
    '      <Icon\n' +
    '          icon="bx:error"\n' +
    '          class="text-[#f18831] text-[1.5rem] dark:text-orange-500"\n' +
    '      />\n' +
    '      <p class="text-[#f18831] text-[1rem] dark:text-orange-500">\n' +
    '        This is a warning Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const AlertWithTitleCodes = '<script setup lang="ts">\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full h-full flex flex-col gap-4">\n' +
    '    <div class="p-3 flex gap-3 dark:bg-green-800/40 bg-[#edf7ed] rounded-lg">\n' +
    '      <Icon\n' +
    '          icon="icon-park-outline:done-all"\n' +
    '          class="text-[#418944] text-[1.5rem] dark:text-green-600"\n' +
    '      />\n' +
    '      <div class="flex flex-col gap-1">\n' +
    '        <h2 class="text-[#418944] text-[1.2rem] font-[500] dark:text-green-600">\n' +
    '          Message Title\n' +
    '        </h2>\n' +
    '        <p class="text-[#418944] text-[1rem] dark:text-green-600">\n' +
    '          This is a success Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex gap-3 dark:bg-blue-800/40 bg-[#e5f6fd] rounded-lg">\n' +
    '      <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem] dark:text-blue-500"/>\n' +
    '      <div class="flex flex-col gap-1">\n' +
    '        <h2 class="text-[#2d9dda] text-[1.2rem] font-[500] dark:text-blue-500">\n' +
    '          Message Title\n' +
    '        </h2>\n' +
    '        <p class="text-[#2d9dda] text-[1rem] dark:text-blue-500">\n' +
    '          This is a info Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex gap-3 dark:bg-red-800/40 bg-[#fdeded] rounded-lg">\n' +
    '      <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem] dark:text-red-500"/>\n' +
    '      <div class="flex flex-col gap-1">\n' +
    '        <h2 class="text-[#d74242] text-[1.2rem] font-[500] dark:text-red-500">\n' +
    '          Message Title\n' +
    '        </h2>\n' +
    '        <p class="text-[#d74242] text-[1rem] dark:text-red-500">\n' +
    '          This is a error Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex gap-3 dark:bg-orange-800/40 bg-[#fff4e5] rounded-lg">\n' +
    '      <Icon\n' +
    '          icon="bx:error"\n' +
    '          class="text-[#f18831] text-[1.5rem] dark:text-orange-500"\n' +
    '      />\n' +
    '      <div class="flex flex-col gap-1">\n' +
    '        <h2 class="text-[#f18831] text-[1.2rem] font-[500] dark:text-orange-500">\n' +
    '          Message Title\n' +
    '        </h2>\n' +
    '        <p class="text-[#f18831] text-[1rem] dark:text-orange-500">\n' +
    '          This is a warning Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const BorderedAlertMessageCodes = '<script setup lang="ts">\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full h-full flex flex-col gap-4">\n' +
    '    <div class="p-3 flex items-center gap-3 border-[2px] border-[#418944] rounded-lg">\n' +
    '      <Icon icon="icon-park-outline:done-all" class="text-[#418944] text-[1.5rem]"/>\n' +
    '      <p class="text-[#418944] text-[1rem]">\n' +
    '        This is a success Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center gap-3 border-[2px] border-[#2d9dda] rounded-lg">\n' +
    '      <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem]"/>\n' +
    '      <p class="text-[#2d9dda] text-[1rem]">\n' +
    '        This is a info Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center gap-3 border-[2px] border-[#d74242] rounded-lg">\n' +
    '      <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem]"/>\n' +
    '      <p class="text-[#d74242] text-[1rem]">\n' +
    '        This is a error Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center gap-3 border-[2px] border-[#f18831] rounded-lg">\n' +
    '      <Icon icon="bx:error" class="text-[#f18831] text-[1.5rem]"/>\n' +
    '      <p class="text-[#f18831] text-[1rem]">\n' +
    '        This is a warning Alert.\n' +
    '      </p>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const AlertWithActionCodes = '<script setup lang="ts">\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full h-full flex flex-col gap-4">\n' +
    '    <div class="p-3 flex items-center justify-between dark:bg-green-800/40 bg-[#edf7ed] rounded-lg">\n' +
    '      <div class="flex items-center gap-3">\n' +
    '        <Icon\n' +
    '            icon="icon-park-outline:done-all"\n' +
    '            class="text-[#418944] text-[1.5rem] dark:text-green-500"\n' +
    '        />\n' +
    '        <p class="text-[#418944] text-[1rem] dark:text-green-500">\n' +
    '          This is a success Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <Icon\n' +
    '          icon="heroicons:x-mark"\n' +
    '          class="text-[#418944] dark:text-green-500 text-[1.8rem] p-1 rounded-full hover:bg-[#41894317] cursor-pointer active:scale-[0.9]"\n' +
    '      />\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center justify-between dark:bg-blue-800/40 bg-[#e5f6fd] rounded-lg">\n' +
    '      <div class="flex items-center gap-3">\n' +
    '        <Icon icon="ci:info" class="text-[#2d9dda] text-[1.5rem] dark:text-blue-500"/>\n' +
    '        <p class="text-[#2d9dda] text-[1rem] dark:text-blue-500">\n' +
    '          This is a info Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <Icon\n' +
    '          icon="heroicons:x-mark"\n' +
    '          class="text-[#2d9dda] dark:text-blue-500 text-[1.8rem] p-1 rounded-full hover:bg-[#2d9dda15] cursor-pointer active:scale-[0.9]"\n' +
    '      />\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center justify-between dark:bg-red-800/40 bg-[#fdeded] rounded-lg">\n' +
    '      <div class="flex items-center gap-3">\n' +
    '        <Icon icon="material-symbols:error-outline" class="text-[#d74242] text-[1.5rem] dark:text-red-500"/>\n' +
    '        <p class="text-[#d74242] text-[1rem] dark:text-red-500">\n' +
    '          This is a error Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <Icon\n' +
    '          icon="heroicons:x-mark"\n' +
    '          class="text-[#d74242] dark:text-red-500 text-[1.8rem] p-1 rounded-full hover:bg-[#d7424215] cursor-pointer active:scale-[0.9]"\n' +
    '      />\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="p-3 flex items-center justify-between dark:bg-orange-800/40 bg-[#fff4e5] rounded-lg">\n' +
    '      <div class="flex items-center gap-3">\n' +
    '        <Icon\n' +
    '            icon="bx:error"\n' +
    '            class="text-[#f18831] text-[1.5rem] dark:text-orange-500"\n' +
    '        />\n' +
    '        <p class="text-[#f18831] text-[1rem] dark:text-orange-500">\n' +
    '          This is a warning Alert.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <Icon\n' +
    '          icon="heroicons:x-mark"\n' +
    '          class="text-[#f18831] dark:text-orange-500 text-[1.8rem] p-1 rounded-full hover:bg-[#f1873118] cursor-pointer active:scale-[0.9]"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'