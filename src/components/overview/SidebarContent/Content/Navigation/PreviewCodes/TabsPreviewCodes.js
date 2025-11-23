export const AnimatedTabCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const activeButton = ref(1);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <ul class="flex items-center dark:bg-slate-800 bg-[#36af7b]/10 rounded-full p-1 relative">\n' +
    '    <div\n' +
    '        :class="[\n' +
    '                (activeButton === 1 && \'w-[75px] md:w-[95px] translate-x-[0px]\') ||\n' +
    '                (activeButton === 2 && \'w-[80px] translate-x-[70px] md:translate-x-[90px] md:w-[95px]\') ||\n' +
    '                (activeButton === 3 && \'translate-x-[143px] w-[90px] md:w-[95px] md:translate-x-[192px]\') ||\n' +
    '                (activeButton === 4 && \'translate-x-[232px] w-[85px] md:w-[105px] md:translate-x-[295px]\'),\n' +
    '                \'!bg-[#36af7b] absolute !text-[#fff] h-[85%] transition duration-700 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '    ></div>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 1 && \' !text-[#fff]\',\n' +
    '                \'px-4 md:px-6 py-2 dark:text-[#abc2d3] text-[0.9rem] md:text-[1rem] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 1"\n' +
    '    >\n' +
    '      Home\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 2 && \' !text-[#fff]\',\n' +
    '                \'px-4 md:px-6 py-2 dark:text-[#abc2d3] text-[0.9rem] md:text-[1rem] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 2"\n' +
    '    >\n' +
    '      About\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 3 && \' !text-[#fff]\',\n' +
    '                \'px-4 md:px-6 py-2 dark:text-[#abc2d3] text-[0.9rem] md:text-[1rem] text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 3"\n' +
    '    >\n' +
    '      Support\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 4 && \' !text-[#fff]\',\n' +
    '                \'px-4 md:px-6 py-2 dark:text-[#abc2d3] text-[0.9rem] md:text-[1rem] hidden sm:block text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 4"\n' +
    '    >\n' +
    '      Contact\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</template>'

export const FullBorderTabCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isActive = ref(1);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <ul class="flex items-center flex-wrap gap-5">\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                isActive === 1 && \'bg-[#36af7b] text-white\',\n' +
    '                \'px-6 py-2 border text-[#36af7b] transition duration-300 border-[#36af7b] cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="isActive = 1"\n' +
    '    >\n' +
    '      Home\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                isActive === 2 && \'bg-[#36af7b] text-white\',\n' +
    '                \'px-6 py-2 border text-[#36af7b] transition duration-300 border-[#36af7b] cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="isActive = 2"\n' +
    '    >\n' +
    '      About\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                isActive === 3 && \'bg-[#36af7b] text-white\',\n' +
    '                \'px-6 py-2 border hidden sm:block text-[#36af7b] transition duration-300 border-[#36af7b] cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="isActive = 3"\n' +
    '    >\n' +
    '      Support\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</template>'

export const BottomBorderTabCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const borderActiveButton = ref(1);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <ul class="flex flex-wrap items-center gap-5">\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 1 && \'!border-[#36af7b] !text-[#36af7b]\',\n' +
    '                \'px-6 py-2 border-b dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 1"\n' +
    '    >\n' +
    '      Home\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 2 && \'!border-[#36af7b] !text-[#36af7b]\',\n' +
    '                \'px-6 py-2 border-b dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 2"\n' +
    '    >\n' +
    '      About\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 3 && \'!border-[#36af7b] !text-[#36af7b]\',\n' +
    '                \'px-6 py-2 border-b hidden dark:text-[#abc2d3] sm:block text-[#424242] transition duration-300 border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 3"\n' +
    '    >\n' +
    '      Support\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</template>'

export const TopBorderTabCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const borderActiveButton = ref(1);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <ul class="flex flex-wrap items-center">\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 1 && \'!border-[#36af7b] !text-[#36af7b] !bg-transparent\',\n' +
    '                \'px-6 py-2 border-t dark:bg-slate-800 dark:text-[#abc2d3] bg-[#d1d1d1] text-[#424242] transition duration-300 border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 1"\n' +
    '    >\n' +
    '      Home\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 2 && \'!border-[#36af7b] !text-[#36af7b] !bg-transparent\',\n' +
    '                \'px-6 py-2 border-t dark:bg-slate-800 dark:text-[#abc2d3] bg-[#d1d1d1]  text-[#424242] transition duration-300 border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 2"\n' +
    '    >\n' +
    '      About\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 3 && \'!border-[#36af7b] !text-[#36af7b] !bg-transparent\',\n' +
    '                \'px-6 py-2 border-t dark:bg-slate-800 dark:text-[#abc2d3] bg-[#d1d1d1]  text-[#424242] transition duration-300 border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 3"\n' +
    '    >\n' +
    '      Support\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 4 && \'!border-[#36af7b] !text-[#36af7b] !bg-transparent\',\n' +
    '                \'px-6 py-2 border-t dark:bg-slate-800 dark:text-[#abc2d3] bg-[#d1d1d1] hidden sm:block text-[#424242] transition duration-300 border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 4"\n' +
    '    >\n' +
    '      Contact\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</template>'

export const SquareBorderTabCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const borderActiveButton = ref(1);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <ul class="flex flex-wrap items-center">\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 1\n' +
    '                  ? \'border border-b-transparent dark:border-slate-700 dark:border-b-transparent rounded-tr rounded-tl\'\n' +
    '                  : \'border-b dark:border-slate-700\',\n' +
    '                \'px-6 py-2 border-[#d1d1d1] text-[#424242] dark:text-[#abc2d3] transition duration-300 cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 1"\n' +
    '    >\n' +
    '      Home\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 2\n' +
    '                  ? \'border border-b-transparent dark:border-slate-700 dark:border-b-transparent rounded-tr rounded-tl\'\n' +
    '                  : \'border-b dark:border-slate-700\',\n' +
    '                \'px-6 py-2 border-[#d1d1d1] text-[#424242] transition dark:text-[#abc2d3] duration-300 cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 2"\n' +
    '    >\n' +
    '      About\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 3\n' +
    '                  ? \'border border-b-transparent dark:border-slate-700 dark:border-b-transparent rounded-tr rounded-tl\'\n' +
    '                  : \'border-b dark:border-slate-700\',\n' +
    '                \'px-6 py-2 border-[#d1d1d1] text-[#424242] transition dark:text-[#abc2d3] duration-300 cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 3"\n' +
    '    >\n' +
    '      Support\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                borderActiveButton === 4\n' +
    '                  ? \'border border-b-transparent dark:border-slate-700 dark:border-b-transparent rounded-tr rounded-tl\'\n' +
    '                  : \'border-b dark:border-slate-700\',\n' +
    '                \'px-6 py-2 border-[#d1d1d1] text-[#424242] transition dark:text-[#abc2d3] duration-300 cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="borderActiveButton = 4"\n' +
    '    >\n' +
    '      Contact\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</template>'

export const BoxButtonTabCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const activeButton = ref(1);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <ul class="flex flex-wrap items-center dark:bg-slate-800 bg-[#36af7b]/10 rounded-full p-1">\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 1 && \'!bg-[#36af7b] !text-[#fff]\',\n' +
    '                \'px-4 640px:px-6 text-[0.9rem] 640px:text-[1rem] py-2  text-[#424242] dark:text-[#abc2d3] transition duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 1"\n' +
    '    >\n' +
    '      Home\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 2 && \'!bg-[#36af7b] !text-[#fff]\',\n' +
    '                \'px-4 640px:px-6 text-[0.9rem] 640px:text-[1rem] py-2  text-[#424242] transition dark:text-[#abc2d3] duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 2"\n' +
    '    >\n' +
    '      About\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 3 && \'!bg-[#36af7b] !text-[#fff]\',\n' +
    '                \'px-4 640px:px-6 text-[0.9rem] 640px:text-[1rem] py-2  text-[#424242] transition dark:text-[#abc2d3] duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 3"\n' +
    '    >\n' +
    '      Support\n' +
    '    </li>\n' +
    '    <li\n' +
    '        :class="[\n' +
    '                activeButton === 4 && \'!bg-[#36af7b] !text-[#fff]\',\n' +
    '                \'px-6 py-2  text-[#424242] hidden dark:text-[#abc2d3] 425px:block transition duration-300 rounded-full border-transparent cursor-pointer\'\n' +
    '              ]"\n' +
    '        @click="activeButton = 4"\n' +
    '    >\n' +
    '      Contact\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</template>'

export const ToggleButtonTabCodes = '<template>\n' +
    '  <div class="flex flex-wrap flex-col items-center justify-center">\n' +
    '    <div class="z-10 w-full">\n' +
    '      <div class="mx-auto mt-6 flex items-center justify-center gap-4">\n' +
    '        <label for="transactions">\n' +
    '          <div\n' +
    '              class="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 dark:bg-slate-800 dark:text-[#abc2d3] border-transparent bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-[#36af7b] has-[:checked]:text-white text-gray-500"\n' +
    '          >\n' +
    '            <div class="flex items-center overflow-hidden">\n' +
    '              <input\n' +
    '                  type="radio"\n' +
    '                  name="radio"\n' +
    '                  id="transactions"\n' +
    '                  class="peer appearance-none"\n' +
    '              />\n' +
    '\n' +
    '              <span\n' +
    '                  class="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0"\n' +
    '              >\n' +
    '                        <svg\n' +
    '                            class="default absolute inset-0 transition-opacity"\n' +
    '                            xmlns="http://www.w3.org/2000/svg"\n' +
    '                            width="25"\n' +
    '                            height="25"\n' +
    '                            viewBox="0 0 256 256"\n' +
    '                        >\n' +
    '                          <path\n' +
    '                              fill="currentColor"\n' +
    '                              d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"\n' +
    '                          />\n' +
    '                        </svg>\n' +
    '\n' +
    '                        <svg\n' +
    '                            class="active absolute inset-0 opacity-0 transition-opacity"\n' +
    '                            xmlns="http://www.w3.org/2000/svg"\n' +
    '                            width="25"\n' +
    '                            height="25"\n' +
    '                            viewBox="0 0 256 256"\n' +
    '                        >\n' +
    '                          <path\n' +
    '                              fill="currentColor"\n' +
    '                              d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"\n' +
    '                          />\n' +
    '                        </svg>\n' +
    '                      </span>\n' +
    '              <span\n' +
    '                  class="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide"\n' +
    '              >\n' +
    '                        Transactions\n' +
    '                      </span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </label>\n' +
    '        <label for="updates">\n' +
    '          <div\n' +
    '              class="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 dark:bg-slate-800 dark:text-[#abc2d3] border-transparent bg-gray-200 py-2 pl-3.5 pt-3.5 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-[#36af7b] has-[:checked]:text-white text-gray-500"\n' +
    '          >\n' +
    '            <div class="flex items-center overflow-hidden">\n' +
    '              <input\n' +
    '                  type="radio"\n' +
    '                  name="radio"\n' +
    '                  id="updates"\n' +
    '                  class="peer appearance-none"\n' +
    '              />\n' +
    '\n' +
    '              <span\n' +
    '                  class="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0"\n' +
    '              >\n' +
    '                        <svg\n' +
    '                            class="default absolute inset-0 transition-opacity"\n' +
    '                            xmlns="http://www.w3.org/2000/svg"\n' +
    '                            width="25"\n' +
    '                            height="25"\n' +
    '                            viewBox="0 0 16 16"\n' +
    '                        >\n' +
    '                          <g fill="currentColor">\n' +
    '                            <path\n' +
    '                                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333L6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"\n' +
    '                            />\n' +
    '                            <path\n' +
    '                                d="M5 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"\n' +
    '                            />\n' +
    '                          </g>\n' +
    '                        </svg>\n' +
    '\n' +
    '                        <svg\n' +
    '                            class="active absolute inset-0 opacity-0 transition-opacity"\n' +
    '                            xmlns="http://www.w3.org/2000/svg"\n' +
    '                            width="25"\n' +
    '                            height="25"\n' +
    '                            viewBox="0 0 16 16"\n' +
    '                        >\n' +
    '                          <path\n' +
    '                              fill="currentColor"\n' +
    '                              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm5 4a1 1 0 1 0-2 0a1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"\n' +
    '                          />\n' +
    '                        </svg>\n' +
    '                      </span>\n' +
    '              <span\n' +
    '                  class="opacity-0 text-white transition-all mb-1 peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide"\n' +
    '              >\n' +
    '                        Updates\n' +
    '                      </span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </label>\n' +
    '        <label for="promotions">\n' +
    '          <div\n' +
    '              class="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-[#36af7b] has-[:checked]:text-white text-gray-500"\n' +
    '          >\n' +
    '            <div class="flex items-center overflow-hidden">\n' +
    '              <input\n' +
    '                  type="radio"\n' +
    '                  name="radio"\n' +
    '                  id="promotions"\n' +
    '                  class="peer appearance-none"\n' +
    '              />\n' +
    '\n' +
    '              <span\n' +
    '                  class="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0"\n' +
    '              >\n' +
    '                        <svg\n' +
    '                            class="default absolute inset-0 transition-opacity"\n' +
    '                            xmlns="http://www.w3.org/2000/svg"\n' +
    '                            width="25"\n' +
    '                            height="25"\n' +
    '                            viewBox="0 0 16 16"\n' +
    '                        >\n' +
    '                          <path\n' +
    '                              fill="currentColor"\n' +
    '                              d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49l-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013a75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975l1.609 3.037l.01.024h.548l-.002-.014l-.443-2.966a68 68 0 0 0-1.722-.082z"\n' +
    '                          />\n' +
    '                        </svg>\n' +
    '\n' +
    '                        <svg\n' +
    '                            class="active absolute inset-0 opacity-0 transition-opacity"\n' +
    '                            xmlns="http://www.w3.org/2000/svg"\n' +
    '                            width="25"\n' +
    '                            height="25"\n' +
    '                            viewBox="0 0 16 16"\n' +
    '                        >\n' +
    '                          <path\n' +
    '                              fill="currentColor"\n' +
    '                              d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06"\n' +
    '                          />\n' +
    '                        </svg>\n' +
    '                      </span>\n' +
    '              <span\n' +
    '                  class="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide"\n' +
    '              >\n' +
    '                        Promotions\n' +
    '                      </span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'