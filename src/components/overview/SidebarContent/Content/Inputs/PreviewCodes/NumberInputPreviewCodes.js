export const miniNumberInputCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const inputValue = ref(1);\n' +
    '\n' +
    'function handleDecrement() {\n' +
    '  inputValue.value = inputValue.value > 1 ? inputValue.value - 1 : inputValue.value;\n' +
    '}\n' +
    '\n' +
    'function handleInputValueChange(e) {\n' +
    '  inputValue.value = e.target.value;\n' +
    '}\n' +
    '\n' +
    'function handleIncrement() {\n' +
    '  inputValue.value = inputValue.value + 1;\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="flex items-center mx-auto border dark:border-slate-700 border-gray-200 rounded-md"\n' +
    '  >\n' +
    '    <button\n' +
    '        class="bg-gray-100 p-[15px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-l-md text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleDecrement"\n' +
    '    >\n' +
    '      <Icon icon="line-md:minus"/>\n' +
    '    </button>\n' +
    '    <input\n' +
    '        type="number"\n' +
    '        :value="inputValue"\n' +
    '        class="w-[70px] py-2.5 dark:bg-transparent dark:text-[#abc2d3] outline-none focus:ring-0 border-none text-center text-[1.1rem]"\n' +
    '        @input="handleInputValueChange"\n' +
    '    />\n' +
    '    <button\n' +
    '        class="bg-gray-100 p-[15px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-r-md text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleIncrement"\n' +
    '    >\n' +
    '      <Icon icon="majesticons:plus-line"/>\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>'

export const roundedNumberInputCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const inputValue = ref(1);\n' +
    '\n' +
    'function handleDecrement() {\n' +
    '  inputValue.value = inputValue.value > 1 ? inputValue.value - 1 : inputValue.value;\n' +
    '}\n' +
    '\n' +
    'function handleInputValueChange(e) {\n' +
    '  inputValue.value = e.target.value;\n' +
    '}\n' +
    '\n' +
    'function handleIncrement() {\n' +
    '  inputValue.value = inputValue.value + 1;\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md"\n' +
    '  >\n' +
    '    <button\n' +
    '        class="bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] rounded-full text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleDecrement"\n' +
    '    >\n' +
    '      <Icon icon="line-md:minus" />\n' +
    '    </button>\n' +
    '    <input\n' +
    '        type="number"\n' +
    '        :value="inputValue"\n' +
    '        class="w-[70px] py-2.5 outline-none dark:bg-transparent dark:text-[#abc2d3] focus:ring-0 border-none text-center text-[1.1rem]"\n' +
    '        @input="handleInputValueChange"\n' +
    '    />\n' +
    '    <button\n' +
    '        class="bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleIncrement"\n' +
    '    >\n' +
    '      <Icon icon="majesticons:plus-line" />\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>'

export const roundedpositionNumberInputCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const inputValue = ref(1);\n' +
    '\n' +
    'function handleDecrement() {\n' +
    '  inputValue.value = inputValue.value > 1 ? inputValue.value - 1 : inputValue.value;\n' +
    '}\n' +
    '\n' +
    'function handleInputValueChange(e) {\n' +
    '  inputValue.value = e.target.value;\n' +
    '}\n' +
    '\n' +
    'function handleIncrement() {\n' +
    '  inputValue.value = inputValue.value + 1;\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '\n' +
    '  <!-- left side button -->\n' +
    '  <div\n' +
    '      class="flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md"\n' +
    '  >\n' +
    '    <button\n' +
    '        class="bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] mr-2 rounded-full text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleDecrement"\n' +
    '    >\n' +
    '      <Icon icon="line-md:minus"/>\n' +
    '    </button>\n' +
    '    <button\n' +
    '        class="bg-gray-100 dark:bg-slate-800 dark:text-[#abc2d3] p-[10px] rounded-full text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleIncrement"\n' +
    '    >\n' +
    '      <Icon icon="majesticons:plus-line"/>\n' +
    '    </button>\n' +
    '\n' +
    '    <input\n' +
    '        type="number"\n' +
    '        :value="inputValue"\n' +
    '        class="w-[70px] px-2 py-2.5 outline-none dark:bg-transparent dark:text-[#abc2d3] focus:ring-0 border-none text-center text-[1.1rem]"\n' +
    '        @input="handleInputValueChange"\n' +
    '    />\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- right side button -->\n' +
    '  <div\n' +
    '      class="flex px-2 py-0.5 items-center dark:border-slate-700 mx-auto border border-gray-200 rounded-md"\n' +
    '  >\n' +
    '    <input\n' +
    '        type="number"\n' +
    '        :value="inputValue"\n' +
    '        class="w-[70px] px-2 py-2.5 dark:bg-transparent dark:text-[#abc2d3] outline-none focus:ring-0 border-none text-center text-[1.1rem]"\n' +
    '        @input="handleInputValueChange"\n' +
    '    />\n' +
    '    <button\n' +
    '        class="bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleDecrement"\n' +
    '    >\n' +
    '      <Icon icon="line-md:minus"/>\n' +
    '    </button>\n' +
    '    <button\n' +
    '        class="bg-gray-100 p-[10px] dark:bg-slate-800 dark:text-[#abc2d3] rounded-full ml-2 text-gray-700 text-[1.1rem]"\n' +
    '        @click="handleIncrement"\n' +
    '    >\n' +
    '      <Icon icon="majesticons:plus-line"/>\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>'