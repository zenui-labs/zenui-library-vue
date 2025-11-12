export const requiredTextareaCodes = '<template>\n' +
    '  <div class="w-full lg:w-[90%]">\n' +
    '    <label\n' +
    '        for="description"\n' +
    '        class="font-[400] dark:text-[#abc2d3] text-[15px] text-text"\n' +
    '    >\n' +
    '      Description\n' +
    '      <span class="text-red-500">*</span>\n' +
    '    </label>\n' +
    '    <textarea\n' +
    '        id="description"\n' +
    '        required\n' +
    '        placeholder="Write something about zenUI"\n' +
    '        class="border-[#e5eaf2] dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-[#36af7b] transition-colors duration-300"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>'

export const backgroundTextareaCodes = '<template>\n' +
    '  <div class="w-full lg:w-[90%]">\n' +
    '    <label\n' +
    '        for="description"\n' +
    '        class="font-[400] dark:text-[#abc2d3] text-[15px] text-[#424242]"\n' +
    '    >\n' +
    '      Description\n' +
    '    </label>\n' +
    '    <textarea\n' +
    '        id="name"\n' +
    '        placeholder="Write something about zenUI"\n' +
    '        class="border-[#e5eaf2] dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border outline-none px-4 w-full mt-1 min-h-[100px] bg-gray-200 rounded-md py-3 focus:border-gray-400 transition-colors duration-300"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>'

export const animatedLabelTextareaCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const animatedInputValue = ref(\'\');\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <label class="relative w-full lg:w-[90%]">\n' +
    '    <textarea\n' +
    '        name="name"\n' +
    '        id="name"\n' +
    '        :value="animatedInputValue"\n' +
    '        @change="(e) => animatedInputValue = e.target.value"\n' +
    '        class="peer dark:border-slate-700 dark:bg-transparent border-[#e5eaf2] border rounded-md outline-none px-4 min-h-[200px] dark:text-[#d2e5f5] py-3 w-full focus:border-[#36af7b] transition-colors duration-300"\n' +
    '    />\n' +
    '    <span\n' +
    '        :class="`${animatedInputValue ? \'-top-3 left-2 scale-[0.9] dark:bg-darkBgColor bg-white px-[4px]\' : \'left-5 top-3.5\'} absolute dark:text-slate-500 dark:peer-focus:bg-[#020617] peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#36af7b] text-[#777777] peer-focus:px-1 transition-all duration-300`">\n' +
    '        Write something about zenUI\n' +
    '    </span>\n' +
    '  </label>\n' +
    '</template>'