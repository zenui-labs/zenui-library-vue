export const RoundedTooltipPreviewCode =
  "<template>\n" +
  '  <div class="relative group">\n' +
  "    <button\n" +
  '        class="px-3 py-2 dark:border-slate-700 dark:text-[#abc2d3] border border-gray-800 rounded text-gray-800"\n' +
  "    >\n" +
  "      Rounded Tooltip\n" +
  "    </button>\n" +
  "\n" +
  "    <div\n" +
  '        class="absolute bottom-[-90%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300"\n' +
  "    >\n" +
  "              <span\n" +
  '                  class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"\n' +
  "              >\n" +
  "                Rounded Tooltip\n" +
  "              </span>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";

export const ArrowTooltipPreviewCode =
  "<template>\n" +
  '  <div class="flex items-center gap-6">\n' +
  '    <div class="relative group">\n' +
  "      <button\n" +
  '          class="px-3 py-2 dark:border-slate-700 dark:text-[#abc2d3] border border-gray-800 rounded text-gray-800"\n' +
  "      >\n" +
  "        Left\n" +
  "      </button>\n" +
  "\n" +
  "      <div\n" +
  '          class="absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] dark:before:bg-slate-800 scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-[1%] before:rotate-[40deg] before:rounded-b-3xl"\n' +
  "      >\n" +
  "                <span\n" +
  '                    class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"\n' +
  "                >\n" +
  "                  Left\n" +
  "                </span>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "\n" +
  '    <div class="relative group">\n' +
  "      <button\n" +
  '          class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"\n' +
  "      >\n" +
  "        Center\n" +
  "      </button>\n" +
  "\n" +
  "      <div\n" +
  '          class="absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] dark:before:bg-slate-800 before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-1/3 before:rotate-[45deg] before:rounded-b-3xl"\n' +
  "      >\n" +
  "                <span\n" +
  '                    class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"\n' +
  "                >\n" +
  "                  Center\n" +
  "                </span>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "\n" +
  '    <div class="relative group">\n' +
  "      <button\n" +
  '          class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"\n' +
  "      >\n" +
  "        Right\n" +
  "      </button>\n" +
  "\n" +
  "      <div\n" +
  '          class="absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] dark:before:bg-slate-800 scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:right-[1%] before:rotate-[45deg] before:rounded-r-3xl"\n' +
  "      >\n" +
  "                <span\n" +
  '                    class="text-[0.9rem] bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"\n' +
  "                >\n" +
  "                  Right\n" +
  "                </span>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n";

export const RelativeTooltipPreviewCode =
  "<template>\n" +
  '  <div class="flex items-center gap-6 flex-wrap">\n' +
  '    <div class="relative group">\n' +
  "      <button\n" +
  '          class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"\n' +
  "      >\n" +
  "        Left\n" +
  "      </button>\n" +
  "\n" +
  "      <div\n" +
  '          class="absolute top-0.5 left-[-100px] translate-x-[-20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"\n' +
  "      >\n" +
  "        <p\n" +
  '            class="text-[0.9rem] w-max bg-[#8d8d8d] dark:bg-slate-800 dark:text-[#abc2d3] text-secondary rounded px-3 py-2"\n' +
  "        >\n" +
  "          Left Tooltip\n" +
  "        </p>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "\n" +
  '    <div class="relative group">\n' +
  "      <button\n" +
  '          class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"\n' +
  "      >\n" +
  "        Top\n" +
  "      </button>\n" +
  "\n" +
  "      <div\n" +
  '          class="absolute top-[-45px] left-[-23px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"\n' +
  "      >\n" +
  "        <p\n" +
  '            class="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-[#8d8d8d] text-secondary rounded px-3 py-2"\n' +
  "        >\n" +
  "          Top Tooltip\n" +
  "        </p>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "\n" +
  '    <div class="relative group">\n' +
  "      <button\n" +
  '          class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"\n' +
  "      >\n" +
  "        Bottom\n" +
  "      </button>\n" +
  "\n" +
  "      <div\n" +
  '          class="absolute bottom-[-45px] left-[-20px] translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"\n' +
  "      >\n" +
  "        <p\n" +
  '            class="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-[#8d8d8d] text-secondary rounded px-3 py-2"\n' +
  "        >\n" +
  "          Bottom Tooltip\n" +
  "        </p>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "\n" +
  '    <div class="relative group">\n' +
  "      <button\n" +
  '          class="px-3 py-2 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 rounded text-gray-800"\n' +
  "      >\n" +
  "        Right\n" +
  "      </button>\n" +
  "\n" +
  "      <div\n" +
  '          class="absolute top-0.5 right-[-110px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500"\n' +
  "      >\n" +
  "        <p\n" +
  '            class="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-[#8d8d8d] text-secondary rounded px-3 py-2"\n' +
  "        >\n" +
  "          Right Tooltip\n" +
  "        </p>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";

export const ProfileTooltipPreviewCode =
  "<script setup>\n" +
  'import {ref} from "vue";\n' +
  "\n" +
  "const isProfileHovered = ref(false);\n" +
  "</script>\n" +
  "<template>\n" +
  "\n" +
  "  <div\n" +
  '      class="relative w-fit h-full flex items-center justify-center"\n' +
  '      @mouseenter="isProfileHovered = true"\n' +
  '      @mouseleave="isProfileHovered = false"\n' +
  "  >\n" +
  "    <!--  initial profile picture  -->\n" +
  "    <img\n" +
  '        src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900"\n' +
  '        alt="profile"\n' +
  '        class="w-[50px] h-[50px] rounded-full object-cover border-[3px] cursor-pointer border-[#36af7b]"\n' +
  "    />\n" +
  "\n" +
  "    <!--  tooltip  -->\n" +
  "    <div\n" +
  '        :class="[\n' +
  "                isProfileHovered\n" +
  "                  ? 'opacity-100 z-20 translate-y-0'\n" +
  "                  : 'opacity-0 z-[-1] translate-y-[20px]',\n" +
  "                'absolute top-[-270px] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all dark:bg-slate-800 duration-300',\n" +
  '              ]"\n' +
  "    >\n" +
  "      <!--  socials  -->\n" +
  "      <div\n" +
  '          class="flex items-center justify-between dark:border-slate-700 border-b border-gray-200 pb-[7px]"\n' +
  "      >\n" +
  "        <p\n" +
  '            class="text-[1rem] font-[600] dark:text-[#abc2d3] text-gray-700"\n' +
  "        >\n" +
  "          Socials\n" +
  "        </p>\n" +
  '        <div class="flex items-center gap-[8px]">\n' +
  '          <a href="https://zenui.net">\n' +
  "            <Icon\n" +
  '                icon="mdi:linkedin"\n' +
  '                class="text-[1.7rem] dark:text-[#abc2d3] text-gray-700 hover:text-[#36af7b] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"\n' +
  "            />\n" +
  "          </a>\n" +
  '          <a href="https://zenui.net">\n' +
  "            <Icon\n" +
  '                icon="fa:github-square"\n' +
  '                class="text-[1.3rem] dark:text-[#abc2d3] text-gray-700 hover:text-[#36af7b] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"\n' +
  "            />\n" +
  "          </a>\n" +
  '          <a href="https://zenui.net">\n' +
  "            <Icon\n" +
  '                icon="ri:instagram-fill"\n' +
  '                class="text-[1.6rem] dark:text-[#abc2d3] text-gray-700 hover:text-[#36af7b] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"\n' +
  "            />\n" +
  "          </a>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "\n" +
  "      <!--  account details  -->\n" +
  '      <div class="flex items-center justify-center flex-col mt-5">\n' +
  '        <div class="relative">\n' +
  "          <img\n" +
  '              src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900"\n' +
  '              alt="profile"\n' +
  '              class="w-[80px] h-[80px] rounded-full object-cover"\n' +
  "          />\n" +
  "          <div\n" +
  '              class="w-[10px] h-[10px] rounded-full bg-green-400 absolute top-[7px] right-[8px] border-[2px] border-white"\n' +
  "          ></div>\n" +
  "        </div>\n" +
  "        <h4\n" +
  '            class="text-[1.1rem] dark:text-[#abc2d3] font-[600] text-gray-700 mt-2"\n' +
  "        >\n" +
  "          Evelyn Adson\n" +
  "        </h4>\n" +
  '        <p class="text-[0.8rem] dark:text-[#abc2d3] text-gray-600">\n' +
  "          Programmer\n" +
  "        </p>\n" +
  "      </div>\n" +
  "\n" +
  "      <!--  send message  -->\n" +
  "      <button\n" +
  '          class="flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-[#36af7b] mt-4"\n' +
  "      >\n" +
  '        <Icon icon="feather:message-circle" class="text-[1.1rem]" />\n' +
  "        Send Message\n" +
  "      </button>\n" +
  "\n" +
  "      <!--  bottom arrow  -->\n" +
  "      <div\n" +
  '          class="bg-white w-[15px] h-[15px] dark:bg-slate-800 rotate-[45deg] absolute bottom-[-7px] left-[50%] transform translate-x-[-50%]"\n' +
  "      ></div>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n";

export const ClickedTooltipPreviewCode =
  "<script setup>\n" +
  'import {ref} from "vue";\n' +
  "\n" +
  "const leftClicked = ref(false);\n" +
  "const rightClicked = ref(false);\n" +
  "const topClicked = ref(false);\n" +
  "const bottomClicked = ref(false);\n" +
  "</script>\n" +
  "<template>\n" +
  '  <div class="flex items-center gap-[10px] justify-center flex-wrap">\n' +
  "    <!--  left  -->\n" +
  '    <div class="relative">\n' +
  "      <button\n" +
  '          @click="leftClicked = true"\n' +
  '          class="left_button py-2 px-6 border dark:border-slate-700 dark:text-[#abc2d3] rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800"\n' +
  "      >\n" +
  "        Left\n" +
  "      </button>\n" +
  "\n" +
  "      <!-- tooltip -->\n" +
  "      <p\n" +
  '          :class="[\n' +
  "                  leftClicked\n" +
  "                    ? 'opacity-100 z-[100] translate-x-0'\n" +
  "                    : 'opacity-0 z-[-1] translate-x-[20px]',\n" +
  "                  'absolute top-[50%] transform translate-y-[-50%] left-[-130px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200',\n" +
  '                ]"\n' +
  "      >\n" +
  "        Left Tooltip\n" +
  "        <!-- arrow -->\n" +
  "        <span\n" +
  '            class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] right-[-3%]"\n' +
  "        ></span>\n" +
  "      </p>\n" +
  "    </div>\n" +
  "\n" +
  "    <!--  top  -->\n" +
  '    <div class="relative">\n' +
  "      <button\n" +
  '          @click="topClicked = true"\n' +
  '          class="top_button py-2 px-6 border rounded-md dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 text-[1rem] font-[500] text-gray-800"\n' +
  "      >\n" +
  "        Top\n" +
  "      </button>\n" +
  "\n" +
  "      <!-- tooltip -->\n" +
  "      <p\n" +
  '          :class="[\n' +
  "                  topClicked\n" +
  "                    ? 'opacity-100 z-[100] translate-y-0'\n" +
  "                    : 'opacity-0 z-[-1] translate-y-[20px]',\n" +
  "                  'absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200',\n" +
  '                ]"\n' +
  "      >\n" +
  "        Top Tooltip\n" +
  "        <!-- arrow -->\n" +
  "        <span\n" +
  '            class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"\n' +
  "        ></span>\n" +
  "      </p>\n" +
  "    </div>\n" +
  "\n" +
  "    <!--  bottom  -->\n" +
  '    <div class="relative">\n' +
  "      <button\n" +
  '          @click="bottomClicked = true"\n' +
  '          class="bottom_button py-2 px-6 border rounded-md dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 text-[1rem] font-[500] text-gray-800"\n' +
  "      >\n" +
  "        Bottom\n" +
  "      </button>\n" +
  "\n" +
  "      <!-- tooltip -->\n" +
  "      <p\n" +
  '          :class="[\n' +
  "                  bottomClicked\n" +
  "                    ? 'opacity-100 z-[100] translate-y-0'\n" +
  "                    : 'opacity-0 z-[-1] translate-y-[-20px]',\n" +
  "                  'absolute left-[50%] transform translate-x-[-50%] bottom-[-50px] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200',\n" +
  '                ]"\n' +
  "      >\n" +
  "        Bottom Tooltip\n" +
  "        <!-- arrow -->\n" +
  "        <span\n" +
  '            class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] top-[-13%]"\n' +
  "        ></span>\n" +
  "      </p>\n" +
  "    </div>\n" +
  "\n" +
  "    <!--  right  -->\n" +
  '    <div class="relative">\n' +
  "      <button\n" +
  '          @click="rightClicked = true"\n' +
  '          class="right_button py-2 px-6 border rounded-md dark:border-slate-700 dark:text-[#abc2d3] border-gray-800 text-[1rem] font-[500] text-gray-800"\n' +
  "      >\n" +
  "        Right\n" +
  "      </button>\n" +
  "\n" +
  "      <!-- tooltip -->\n" +
  "      <p\n" +
  '          :class="[\n' +
  "                  rightClicked\n" +
  "                    ? 'opacity-100 z-[100] translate-x-0'\n" +
  "                    : 'opacity-0 z-[-1] translate-x-[-20px]',\n" +
  "                  'absolute top-[50%] transform translate-y-[-50%] right-[-140px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] dark:text-[#abc2d3] text-white font-[400] transition-all duration-200',\n" +
  '                ]"\n' +
  "      >\n" +
  "        Right Tooltip\n" +
  "        <!-- arrow -->\n" +
  "        <span\n" +
  '            class="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] left-[-3%]"\n' +
  "        ></span>\n" +
  "      </p>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n";
