export const circleRadioCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isToggle = ref(false);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex items-center gap-[10px]">\n' +
    '    <div\n' +
    '        class="w-[35px] h-[35px] border border-[#36af7b] rounded-full flex items-center justify-center cursor-pointer"\n' +
    '        @click="isToggle = !isToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="[\n' +
    '                    isToggle ? \'bg-[#36af7b] scale-[1]\' : \'bg-transparent scale-[0.7]\',\n' +
    '                    \'w-[25px] h-[25px] transition-all duration-200 rounded-full\'\n' +
    '                  ]"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '    <p\n' +
    '        class="text-[1.2rem] font-bold dark:text-[#abc2d3] text-[#424242] cursor-pointer"\n' +
    '        @click="isToggle = !isToggle"\n' +
    '    >\n' +
    '      Toggle\n' +
    '    </p>\n' +
    '  </div>\n' +
    '</template>'

export const squareRadioCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isToggle = ref(false);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex items-center gap-[10px]">\n' +
    '    <div\n' +
    '        class="w-[32px] h-[32px] border border-[#36af7b] rounded-md flex items-center justify-center cursor-pointer"\n' +
    '        @click="isToggle = !isToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="[\n' +
    '                    isToggle ? \'bg-[#36af7b] scale-[1]\' : \'bg-transparent scale-[0.7]\',\n' +
    '                    \'w-[25px] h-[25px] transition-all duration-200 rounded-md\'\n' +
    '                  ]"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <p\n' +
    '        class="text-[1.2rem] font-bold dark:text-[#abc2d3] text-[#424242] cursor-pointer"\n' +
    '        @click="isToggle = !isToggle"\n' +
    '    >\n' +
    '      Toggle\n' +
    '    </p>\n' +
    '  </div>\n' +
    '</template>'