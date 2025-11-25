export const ClickNavigationCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const rating = ref(0);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex items-center space-x-1">\n' +
    '    <Icon\n' +
    '        v-for="(_, index) in 5"\n' +
    '        :key="index + 1"\n' +
    '        icon="fa:star"\n' +
    '        :class="`cursor-pointer ${\n' +
    '                  index + 1 <= rating\n' +
    '                    ? \'text-yellow-400\'\n' +
    '                    : \'text-gray-300 dark:text-slate-700\'\n' +
    '                }`"\n' +
    '        :style="{ fontSize: \'24px\' }"\n' +
    '        @click="rating = index + 1"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>\n'

export const HoverNavigationCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const rating = ref(0);\n' +
    'const hover = ref(null);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex items-center space-x-1">\n' +
    '    <Icon\n' +
    '        v-for="(_, index) in 5"\n' +
    '        :key="index + 1"\n' +
    '        icon="fa:star"\n' +
    '        :class="`cursor-pointer ${\n' +
    '                  index + 1 <= (hover || rating)\n' +
    '                    ? \'text-yellow-400\'\n' +
    '                    : \'text-gray-300 dark:text-slate-700\'\n' +
    '                }`"\n' +
    '        :style="{ fontSize: \'24px\' }"\n' +
    '        @click="rating = index + 1"\n' +
    '        @mouseenter="hover = index + 1"\n' +
    '        @mouseleave="hover = null"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>\n'

export const RatingModalCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const rating = ref(0);\n' +
    'const hover = ref(null);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="bg-white dark:bg-slate-800 dark:border-slate-700 rounded-2xl border border-gray-200 w-full lg:w-[60%] pt-2 pr-2 p-4 text-center"\n' +
    '  >\n' +
    '    <Icon\n' +
    '        icon="radix-icons:cross-1"\n' +
    '        class="float-right p-2 dark:text-[#abc2d3] dark:hover:bg-slate-900 text-[2rem] text-[#333333] hover:bg-gray-200 rounded-full cursor-pointer"\n' +
    '    />\n' +
    '\n' +
    '    <h3\n' +
    '        class="text-[24px] pr-2 dark:text-[#abc2d3] font-semibold text-[#333333] mt-[45px]"\n' +
    '    >\n' +
    '      How many stars would you give to them?\n' +
    '    </h3>\n' +
    '    <p class="text-[16px] pr-2 dark:text-[#abc2d3] font-[400] mt-[10px]">\n' +
    '      Jonah Noah delivered your order from\n' +
    '      <b>Nanica Homemade Pies</b>, today at 19:47 (7 min ahead\n' +
    '      schedule).\n' +
    '    </p>\n' +
    '\n' +
    '    <div\n' +
    '        class="flex items-center space-x-1 justify-center mt-[15px] mb-[10px]"\n' +
    '    >\n' +
    '      <Icon\n' +
    '          v-for="(_, index) in 5"\n' +
    '          :key="index + 1"\n' +
    '          icon="fa:star"\n' +
    '          :class="`cursor-pointer ${\n' +
    '                    index + 1 <= (hover || rating)\n' +
    '                      ? \'text-yellow-400\'\n' +
    '                      : \'text-gray-300 dark:text-slate-600\'\n' +
    '                  }`"\n' +
    '          :style="{ fontSize: \'26px\' }"\n' +
    '          @click="rating = index + 1"\n' +
    '          @mouseenter="hover = index + 1"\n' +
    '          @mouseleave="hover = null"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RatingFeedbackModalCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const rating = ref(0);\n' +
    'const hover = ref(null);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="bg-white rounded-2xl dark:bg-slate-800 dark:border-slate-700 border border-gray-200 w-full p-4 md:p-8"\n' +
    '  >\n' +
    '    <h3\n' +
    '        class="text-[24px] font-semibold dark:text-[#abc2d3] text-[#333333] text-center"\n' +
    '    >\n' +
    '      Session feedback\n' +
    '    </h3>\n' +
    '    <p class="text-[14px] font-[400] dark:text-[#abc2d3] text-gray-500 text-center"\n' +
    '    >\n' +
    '      Please rate your experience below\n' +
    '    </p>\n' +
    '\n' +
    '    <div\n' +
    '        class="flex items-center md:flex-row flex-col md:space-x-3 w-full my-[20px] justify-center"\n' +
    '    >\n' +
    '      <div\n' +
    '          class="flex items-center space-x-2 justify-center mb-[10px]"\n' +
    '      >\n' +
    '        <Icon\n' +
    '            v-for="(_, index) in 5"\n' +
    '            :key="index + 1"\n' +
    '            icon="fa:star"\n' +
    '            :class="`cursor-pointer ${\n' +
    '                      index + 1 <= (hover || rating)\n' +
    '                        ? \'text-yellow-400\'\n' +
    '                        : \'text-gray-300 dark:text-slate-600\'\n' +
    '                    }`"\n' +
    '            :style="{ fontSize: \'26px\' }"\n' +
    '            @click="rating = index + 1"\n' +
    '            @mouseenter="hover = index + 1"\n' +
    '            @mouseleave="hover = null"\n' +
    '        />\n' +
    '      </div>\n' +
    '      <span class="text-gray-400 font-normal dark:text-[#abc2d3]/80">4/5 stars</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <label class="text-gray-500 dark:text-[#abc2d3]">Additional feedback</label>\n' +
    '    <textarea\n' +
    '        placeholder="Write your feedback here..."\n' +
    '        class="w-full border-gray-200 mt-1.5 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 resize-none outline-none focus:border-[#36af7b] border rounded-md p-2 min-h-[100px]"\n' +
    '    ></textarea>\n' +
    '\n' +
    '    <button\n' +
    '        class="py-3 px-4 bg-[#36af7b] text-white hover:bg-[#36af7b]/90 rounded-md w-full mt-[10px]"\n' +
    '    >\n' +
    '      Submit feedback\n' +
    '    </button>\n' +
    '\n' +
    '    <div class="flex items-center gap-2 my-[10px]">\n' +
    '      <div class="h-[1px] w-full bg-gray-100 dark:bg-slate-600"></div>\n' +
    '      <span class="text-gray-500 dark:text-slate-500">or</span>\n' +
    '      <div class="h-[1px] w-full bg-gray-100 dark:bg-slate-600"></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div\n' +
    '        class="flex md:flex-row flex-col items-center justify-between gap-[15px]"\n' +
    '    >\n' +
    '      <button\n' +
    '          class="py-2 hover:bg-gray-100 dark:border-[#334155] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 px-4 border border-gray-200 rounded-md w-full flex items-center justify-center gap-[10px]"\n' +
    '      >\n' +
    '        <Icon icon="fa:home" class="text-[1.3rem]"/>\n' +
    '        Home\n' +
    '      </button>\n' +
    '      <button\n' +
    '          class="py-2 hover:bg-gray-100 px-4 dark:border-[#334155] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 border border-gray-200 rounded-md w-full flex items-center justify-center gap-[10px]"\n' +
    '      >\n' +
    '        <Icon icon="ph:share-fat-light" class="text-[1.3rem]"/>\n' +
    '        Rejoin session\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RateCountCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="bg-white dark:bg-slate-800 dark:border-slate-700 rounded-2xl border border-gray-200 w-full md:w-[80%] p-8"\n' +
    '  >\n' +
    '    <div class="py-4 px-3.5 bg-[#36af7b]/10 w-max dark:bg-blue-800/20 rounded-full">\n' +
    '      <Icon icon="fa:heart" class="text-[1.5rem] text-[#36af7b]"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <h3\n' +
    '        class="text-[24px] font-semibold dark:text-[#abc2d3] text-[#333333] mt-[20px]"\n' +
    '    >\n' +
    '      Hey Drop some Rating!\n' +
    '    </h3>\n' +
    '    <p\n' +
    '        class="text-[14px] font-[400] dark:text-[#abc2d3]/80 text-gray-500 mt-[10px]"\n' +
    '    >\n' +
    '      Lorem Ipsum is simply dummy text of the printing and typesetting\n' +
    '      industry.\n' +
    '    </p>\n' +
    '\n' +
    '    <div\n' +
    '        class="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-[10px] mt-[25px]"\n' +
    '    >\n' +
    '      <div\n' +
    '          v-for="i in 5"\n' +
    '          :key="i"\n' +
    '          class="w-[55px] h-[55px] dark:bg-blue-800/20 dark:text-[#abc2d3] text-[1.5rem] bg-[#36af7b]/10 flex items-center justify-center rounded-full text-[#36af7b] hover:bg-[#36af7b] hover:text-white cursor-pointer transition-all duration-200"\n' +
    '      >\n' +
    '        {{ i }}\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <button\n' +
    '        class="py-3 px-4 bg-[#36af7b] text-white w-full mt-[25px] rounded-full text-[1.2rem]"\n' +
    '    >\n' +
    '      Submit\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>\n'