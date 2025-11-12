export const primaryInputCodes = '<template>\n' +
    '  <div class="w-full lg:w-[80%]">\n' +
    '    <label\n' +
    '        for="name"\n' +
    '        class="text-[15px] dark:text-slate-300 text-[#424242] font-[400]"\n' +
    '    >\n' +
    '      Name\n' +
    '      <span class="text-red-500">*</span>\n' +
    '    </label>\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        name="name"\n' +
    '        id="name"\n' +
    '        required\n' +
    '        placeholder="Your name"\n' +
    '        class="border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#36af7b] transition-colors duration-300"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>'

export const bottomBorderInputCodes = '<template>\n' +
    '  <input\n' +
    '      type="text"\n' +
    '      name="name"\n' +
    '      id="name"\n' +
    '      placeholder="Your name"\n' +
    '      class="border-[#e5eaf2] dark:bg-slate-900 dark:text-[#abc2d3] dark:border-slate-600 border-b outline-none px-4 w-full lg:w-[80%] py-3 focus:border-[#36af7b] transition-colors duration-300"\n' +
    '  />\n' +
    '</template>'

export const animatedLabelInputCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const animatedInputValue = ref("")\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <label class="relative w-full lg:w-[80%]">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        name="name"\n' +
    '        :value="animatedInputValue"\n' +
    '        @change="(e) => animatedInputValue = e.target.value"\n' +
    '        id="name"\n' +
    '        class="peer border-[#e5eaf2] dark:border-slate-600 bg-transparent border rounded-md outline-none dark:text-[#d2e5f5] px-4 py-3 w-full focus:border-[#36af7b] transition-colors duration-300"\n' +
    '    />\n' +
    '    <span\n' +
    '        :class="`${animatedInputValue ? \'-top-3 left-2 scale-[0.9] dark:bg-darkBgColor bg-white px-[4px]\' : \'left-5 top-3\'} absolute dark:peer-focus:bg-darkBgColor peer-focus:-top-3 peer-focus:bg-white dark:text-slate-500 peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#36af7b] text-[#777777] peer-focus:px-1 transition-all duration-300`">\n' +
    '        Your name\n' +
    '    </span>\n' +
    '  </label>\n' +
    '</template>'

export const inputWithIconCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '\n' +
    '  <!-- username input -->\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <Icon icon="uil:user"\n' +
    '          class=" absolute top-3.5 left-3 text-[1.3rem] dark:text-slate-400 text-[#777777]"/>\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        name="text"\n' +
    '        id="text"\n' +
    '        placeholder="Username"\n' +
    '        class="peer border-[#e5eaf2] dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#36af7b] transition-colors duration-300"\n' +
    '    />\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- password input -->\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <Icon icon="mynaui:lock-password"\n' +
    '          class=" absolute top-3.5 left-3 text-[1.3rem] dark:text-slate-400 text-[#777777]"/>\n' +
    '    <input\n' +
    '        type="password"\n' +
    '        name="password"\n' +
    '        id="password"\n' +
    '        placeholder="Password"\n' +
    '        class="peer border-[#e5eaf2] dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#36af7b] transition-colors duration-300"\n' +
    '    />\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- email input -->\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <Icon icon="mdi:email-outline"\n' +
    '          class=" absolute top-3.5 left-3 text-[1.3rem] dark:text-slate-400 text-[#777777]"/>\n' +
    '    <input\n' +
    '        type="email"\n' +
    '        name="email"\n' +
    '        id="email"\n' +
    '        placeholder="Email address"\n' +
    '        class="peer border-[#e5eaf2] dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#36af7b] transition-colors duration-300"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>'

export const passwordInputCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isEyeOpen = ref(true);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full lg:w-[80%]">\n' +
    '    <label\n' +
    '        for="password"\n' +
    '        class="text-[15px] dark:text-[#abc2d3] text-text font-[400]"\n' +
    '    >\n' +
    '      Password\n' +
    '    </label>\n' +
    '    <div class="w-full relative">\n' +
    '      <input\n' +
    '          :type="isEyeOpen ? \'text\' : \'password\'"\n' +
    '          name="password"\n' +
    '          id="password"\n' +
    '          placeholder="Password"\n' +
    '          class="peer border-[#e5eaf2] dark:border-slate-600 dark:bg-slate-900 dark:placeholder:text-slate-500 border dark:text-[#abc2d3] rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#36af7b] transition-colors duration-300"\n' +
    '      />\n' +
    '      <Icon icon="akar-icons:eye-open" :strokeWidth="1.1"\n' +
    '            v-if="isEyeOpen"\n' +
    '            class=" absolute top-4 right-4 text-[1.5rem] dark:text-slate-400 text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = false"\n' +
    '      />\n' +
    '      <Icon icon="basil:eye-closed-outline"\n' +
    '            v-else\n' +
    '            class=" absolute top-4 right-4 text-[1.5rem] dark:text-slate-400 text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = true"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const linkInputCodes = '<template>\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Website url"\n' +
    '        class="border dark:border-slate-600 dark:text-[#abc2d3] dark:placeholder:text-slate-500 bg-transparent border-[#e5eaf2] py-3 pr-4 pl-[90px] outline-none w-full rounded-md"\n' +
    '    />\n' +
    '\n' +
    '    <span\n' +
    '        class="bg-gray-300 dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-slate-400 text-gray-500 text-[1rem] absolute top-0 left-0 h-full px-3 flex items-center justify-center rounded-l-md">\n' +
    '        Https://\n' +
    '    </span>\n' +
    '  </div>\n' +
    '</template>'

export const priceInputCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const priceDropdownOpen = ref(false);\n' +
    'const selectedCurrencyType = ref("BDT");\n' +
    '\n' +
    'const allCurrencyTypes = ["BDT", "EUR", "USD"];\n' +
    '\n' +
    'function handlePriceOptionClick(currency) {\n' +
    '  selectedCurrencyType.value = currency;\n' +
    '  priceDropdownOpen.value = !priceDropdownOpen.value;\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <input\n' +
    '        type="number"\n' +
    '        placeholder="0"\n' +
    '        class="border dark:border-slate-600 bg-transparent dark:text-[#abc2d3] dark:placeholder:text-slate-500 border-[#e5eaf2] py-3 pl-[65px] pr-[80px] outline-none w-full rounded-md"\n' +
    '    />\n' +
    '\n' +
    '    <div\n' +
    '        class="bg-gray-100 w-[50px] dark:bg-slate-900 dark:border dark:border-slate-600 absolute top-0 h-full left-0 flex items-center justify-center rounded-l-md">\n' +
    '      <Icon\n' +
    '          :icon="selectedCurrencyType === \'BDT\' ? \'mdi:currency-bdt\' : selectedCurrencyType === \'EUR\' ? \'material-symbols:euro\' : \'fa:usd\'"\n' +
    '          class="text-[1.2rem] dark:text-slate-400 text-gray-600"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div\n' +
    '        class="absolute top-0 right-0 h-full flex dark:border-slate-600 items-center justify-center cursor-pointer border-l border-[#e5eaf2] px-4"\n' +
    '    >\n' +
    '            <span @click="priceDropdownOpen = !priceDropdownOpen"\n' +
    '                  class="flex items-center gap-[8px] dark:text-slate-300 text-text">\n' +
    '                      {{ selectedCurrencyType }}\n' +
    '                        <Icon icon="formkit:down"\n' +
    '                              :class="`${\n' +
    '                            priceDropdownOpen ? \'rotate-[180deg]\' : \'rotate-0\'\n' +
    '                            } transition-all text-[0.6rem] duration-200`"\n' +
    '                        />\n' +
    '                    </span>\n' +
    '    </div>\n' +
    '    <ul\n' +
    '        :class="`${\n' +
    '                      priceDropdownOpen\n' +
    '                      ? \'translate-y-0 opacity-100 z-30\'\n' +
    '                  : \'translate-y-[-10px] opacity-0 z-[-1]\'\n' +
    '                  } list-none absolute top-[53px] dark:bg-slate-800 dark:text-slate-300 right-0 bg-white w-[87px] flex flex-col items-center transition-all duration-200 justify-center py-1 rounded-md`"\n' +
    '    >\n' +
    '      <li\n' +
    '          v-for="(currency, index) in allCurrencyTypes"\n' +
    '          :key="index"\n' +
    '          class="py-2 px-4 w-full dark:hover:bg-slate-700/30 hover:bg-gray-100 text-center cursor-pointer"\n' +
    '          @click="handlePriceOptionClick(currency)"\n' +
    '      >\n' +
    '        {{ currency }}\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </div>\n' +
    '</template>'

export const searchInputCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '\n' +
    '  <!-- rounded input with search icon button -->\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Search..."\n' +
    '        class="border dark:border-slate-600 bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"\n' +
    '    />\n' +
    '\n' +
    '    <span\n' +
    '        class="bg-gray-300 dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-slate-400 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group">\n' +
    '                    <Icon icon="circum:search" class="text-[1.3rem]  group-hover:text-gray-200"/>\n' +
    '                  </span>\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- rounded input with search text button -->\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Search..."\n' +
    '        class="border dark:border-slate-600 dark:placeholder:text-slate-500 bg-transparent dark:text-[#abc2d3] border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"\n' +
    '    />\n' +
    '\n' +
    '    <span\n' +
    '        class="bg-gray-300 dark:bg-slate-900 dark:border-slate-600 dark:border dark:text-slate-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200">\n' +
    '                    Search\n' +
    '                  </span>\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- rounded full input with search icon button -->\n' +
    '  <div\n' +
    '      class="bg-[#36af7b] py-4 w-full lg:w-[80%] px-5 flex items-center justify-center rounded-full cursor-pointer relative">\n' +
    '    <Icon icon="circum:search" class="text-[1.3rem] text-white ml-auto"/>\n' +
    '\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Search..."\n' +
    '        class="border dark:bg-slate-900 dark:border-none dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-[#e5eaf2] absolute top-[2px] left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>'

export const joinUsInputCodes = '<template>\n' +
    '  <div class="w-full lg:w-[80%] relative">\n' +
    '    <input\n' +
    '        type="email"\n' +
    '        placeholder="Email"\n' +
    '        class="border bg-transparent dark:border-slate-500 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-[#e5eaf2] py-3 pl-4 pr-[115px] outline-none w-full rounded-md"\n' +
    '    />\n' +
    '\n' +
    '    <span\n' +
    '        class="bg-[#36af7b] text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group">\n' +
    '        Subscribe\n' +
    '    </span>\n' +
    '  </div>\n' +
    '</template>'