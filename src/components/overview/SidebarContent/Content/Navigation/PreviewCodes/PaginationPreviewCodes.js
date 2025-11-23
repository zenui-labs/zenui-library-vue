export const AnimatedPaginationCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const currentPage = ref(1);\n' +
    'const totalPages = 5;\n' +
    '\n' +
    'const handlePrevious = () => {\n' +
    '  if (currentPage.value > 1) {\n' +
    '    currentPage.value = currentPage.value - 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleNext = () => {\n' +
    '  if (currentPage.value < totalPages) {\n' +
    '    currentPage.value = currentPage.value + 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handlePageClick = (pageNumber) => {\n' +
    '  currentPage.value = pageNumber;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="flex items-center flex-wrap justify-center mt-8 space-x-1 md:space-x-2"\n' +
    '  >\n' +
    '    <button\n' +
    '        @click="handlePrevious"\n' +
    '        :disabled="currentPage === 1"\n' +
    '        class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"\n' +
    '    >\n' +
    '      <Icon icon="fa:chevron-left"/>\n' +
    '    </button>\n' +
    '    <button\n' +
    '        v-for="i in totalPages"\n' +
    '        :key="i"\n' +
    '        @click="handlePageClick(i)"\n' +
    '        :class="`mx-1 px-4 py-2 text-[0.9rem] md:text-[1rem] rounded-full transform transition-all duration-300 ${\n' +
    '                currentPage === i\n' +
    '                  ? \'bg-[#3fb682] text-white scale-110 shadow-md\'\n' +
    '                  : \'bg-transparent text-[#3fb682] hover:bg-blue-100\'\n' +
    '              }`"\n' +
    '    >\n' +
    '      {{ i }}\n' +
    '    </button>\n' +
    '    <button\n' +
    '        @click="handleNext"\n' +
    '        :disabled="currentPage === totalPages"\n' +
    '        class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"\n' +
    '    >\n' +
    '      <Icon icon="fa:chevron-right"/>\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>\n'

export const PaginationWithButtonCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const currentPage = ref(1);\n' +
    'const totalPages = 5;\n' +
    '\n' +
    'const handlePrevious = () => {\n' +
    '  if (currentPage.value > 1) {\n' +
    '    currentPage.value = currentPage.value - 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleNext = () => {\n' +
    '  if (currentPage.value < totalPages) {\n' +
    '    currentPage.value = currentPage.value + 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handlePageClick = (pageNumber) => {\n' +
    '  currentPage.value = pageNumber;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex items-center flex-wrap justify-center mt-4">\n' +
    '    <button\n' +
    '        @click="handlePrevious"\n' +
    '        :disabled="currentPage === 1"\n' +
    '        class="mx-1 px-3 py-1 text-[0.9rem] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-[#abc2d3] md:text-[1rem] rounded bg-gray-200 text-[#424242] disabled:opacity-50"\n' +
    '    >\n' +
    '      Previous\n' +
    '    </button>\n' +
    '    <button\n' +
    '        v-for="i in totalPages"\n' +
    '        :key="i"\n' +
    '        @click="handlePageClick(i)"\n' +
    '        :class="`mx-1 px-3 py-1 text-[0.9rem] md:text-[1rem] rounded ${\n' +
    '                currentPage === i\n' +
    '                  ? \'bg-[#3fb682] text-white\'\n' +
    '                  : \'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700\'\n' +
    '              }`"\n' +
    '    >\n' +
    '      {{ i }}\n' +
    '    </button>\n' +
    '    <button\n' +
    '        @click="handleNext"\n' +
    '        :disabled="currentPage === totalPages"\n' +
    '        class="mx-1 px-3 py-1 text-[0.9rem] md:text-[1rem] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-[#abc2d3] rounded bg-gray-200 text-[#424242] disabled:opacity-50"\n' +
    '    >\n' +
    '      Next\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>\n'

export const RoundedButtonPaginationCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const currentPage = ref(1);\n' +
    'const totalPages = 5;\n' +
    '\n' +
    'const handlePrevious = () => {\n' +
    '  if (currentPage.value > 1) {\n' +
    '    currentPage.value = currentPage.value - 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleNext = () => {\n' +
    '  if (currentPage.value < totalPages) {\n' +
    '    currentPage.value = currentPage.value + 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handlePageClick = (pageNumber) => {\n' +
    '  currentPage.value = pageNumber;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="flex items-center flex-wrap justify-center mt-8 space-x-4"\n' +
    '  >\n' +
    '    <button\n' +
    '        @click="handlePrevious"\n' +
    '        :disabled="currentPage === 1"\n' +
    '        class="px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3fb682] hover:text-secondary disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 dark:disabled:hover:bg-slate-800 dark:disabled:hover:text-slate-500 disabled:hover:text-gray-700 transition-all duration-300"\n' +
    '    >\n' +
    '      Previous\n' +
    '    </button>\n' +
    '    <div class="flex items-center space-x-2">\n' +
    '      <button\n' +
    '          v-for="i in totalPages"\n' +
    '          :key="i"\n' +
    '          @click="handlePageClick(i)"\n' +
    '          :class="`mx-1 px-3 py-1 text-[0.9rem] md:text-[1rem] rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all dark:bg-slate-700 dark:text-[#abc2d3] duration-300 transform hover:scale-105 ${\n' +
    '                  currentPage === i ? \'!bg-[#3fb682] !text-white shadow-lg\' : \'\'\n' +
    '                }`"\n' +
    '      >\n' +
    '        {{ i }}\n' +
    '      </button>\n' +
    '    </div>\n' +
    '    <button\n' +
    '        @click="handleNext"\n' +
    '        :disabled="currentPage === totalPages"\n' +
    '        :class="`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3fb682] hover:text-secondary dark:bg-slate-700 dark:text-[#abc2d3] dark:disabled:bg-slate-800 dark:disabled:text-slate-500 dark:disabled:hover:bg-slate-800 dark:disabled:hover:text-slate-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-700 transition-all duration-300 ${\n' +
    '                currentPage === totalPages\n' +
    '                  ? \'opacity-50 cursor-not-allowed\'\n' +
    '                  : \'\'\n' +
    '              }`"\n' +
    '    >\n' +
    '      Next\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>\n'

export const SmartPaginationCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const currentPage = ref(1);\n' +
    'const totalPages = 50;\n' +
    '\n' +
    'const handlePreviousClick = () => {\n' +
    '  if (currentPage.value > 1) {\n' +
    '    currentPage.value = currentPage.value - 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleNextClick = () => {\n' +
    '  if (currentPage.value < totalPages) {\n' +
    '    currentPage.value = currentPage.value + 1;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handlePageClick = (pageNumber) => {\n' +
    '  currentPage.value = pageNumber;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="flex items-center flex-wrap justify-center mt-8 space-x-1 md:space-x-2"\n' +
    '  >\n' +
    '    <button\n' +
    '        @click="handlePreviousClick"\n' +
    '        :disabled="currentPage === 1"\n' +
    '        class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"\n' +
    '    >\n' +
    '      <Icon icon="fa:chevron-left"/>\n' +
    '    </button>\n' +
    '\n' +
    '    <button\n' +
    '        @click="handlePageClick(1)"\n' +
    '        :class="`mx-1 px-3 py-1 text-[0.9rem] md:text-[1rem] rounded ${\n' +
    '                currentPage === 1\n' +
    '                  ? \'bg-[#3fb682] text-white\'\n' +
    '                  : \'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700\'\n' +
    '              }`"\n' +
    '    >\n' +
    '      1\n' +
    '    </button>\n' +
    '\n' +
    '    <span\n' +
    '        v-if="currentPage > 3"\n' +
    '        class="mx-1 px-2 dark:text-[#abc2d3] text-gray-500"\n' +
    '    >...</span\n' +
    '    >\n' +
    '\n' +
    '    <template v-for="i in totalPages" :key="i">\n' +
    '      <button\n' +
    '          v-if="\n' +
    '                  i !== 1 &&\n' +
    '                  i !== totalPages &&\n' +
    '                  i >= currentPage - 1 &&\n' +
    '                  i <= currentPage + 1\n' +
    '                "\n' +
    '          @click="handlePageClick(i)"\n' +
    '          :class="`mx-1 px-3 py-1 text-[0.9rem] md:text-[1rem] rounded ${\n' +
    '                  currentPage === i\n' +
    '                    ? \'bg-[#3fb682] text-white\'\n' +
    '                    : \'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700\'\n' +
    '                }`"\n' +
    '      >\n' +
    '        {{ i }}\n' +
    '      </button>\n' +
    '    </template>\n' +
    '\n' +
    '    <span\n' +
    '        v-if="currentPage < totalPages - 2"\n' +
    '        class="mx-1 px-2 dark:text-[#abc2d3] text-gray-500"\n' +
    '    >...</span\n' +
    '    >\n' +
    '\n' +
    '    <button\n' +
    '        @click="handlePageClick(totalPages)"\n' +
    '        :class="`mx-1 px-3 py-1 text-[0.9rem] md:text-[1rem] rounded ${\n' +
    '                currentPage === totalPages\n' +
    '                  ? \'bg-[#3fb682] text-white\'\n' +
    '                  : \'bg-gray-200 dark:bg-slate-700 dark:text-[#abc2d3] text-gray-700\'\n' +
    '              }`"\n' +
    '    >\n' +
    '      {{ totalPages }}\n' +
    '    </button>\n' +
    '\n' +
    '    <button\n' +
    '        @click="handleNextClick"\n' +
    '        :disabled="currentPage === totalPages"\n' +
    '        class="mx-1 px-4 py-3.5 rounded-full bg-white text-[#3fb682] hover:bg-[#3fb682]/10 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"\n' +
    '    >\n' +
    '      <Icon icon="fa:chevron-right"/>\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>\n'