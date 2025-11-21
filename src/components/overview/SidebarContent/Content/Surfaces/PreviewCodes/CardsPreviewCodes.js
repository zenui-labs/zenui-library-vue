export const TicketCardCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="bg-blue-50 dark:bg-slate-800 w-full justify-between rounded-xl flex"\n' +
    '    >\n' +
    '      <div class="flex flex-col p-[15px] lg:p-[20px] gap-[18px]">\n' +
    '        <h1\n' +
    '            class="text-[1rem] lg:text-[1.3rem] font-bold dark:text-blue-600 text-blue-800"\n' +
    '        >\n' +
    '          Ticket Title\n' +
    '        </h1>\n' +
    '\n' +
    '        <div class="flex items-center gap-[10px]">\n' +
    '          <Icon\n' +
    '              icon="bi:send"\n' +
    '              class="p-[8px] lg:p-[10px] dark:text-[#abc2d3] dark:bg-slate-700 rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]"\n' +
    '          />\n' +
    '          <div>\n' +
    '            <h4\n' +
    '                class="text-[0.8rem] lg:text-[1.1rem] font-[600] dark:text-[#abc2d3] text-gray-800"\n' +
    '            >\n' +
    '              Place Name\n' +
    '            </h4>\n' +
    '            <p\n' +
    '                class="text-[0.6rem] lg:text-[0.9rem] font-[400] dark:text-[#abc2d3]/70 text-gray-500"\n' +
    '            >\n' +
    '              15-Dec-2020\n' +
    '            </p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex items-center gap-[10px]">\n' +
    '          <Icon\n' +
    '              icon="ion:location-outline"\n' +
    '              class="p-[8px] lg:p-[10px] dark:bg-slate-700 dark:text-[#abc2d3] rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]"\n' +
    '          />\n' +
    '          <div>\n' +
    '            <h4\n' +
    '                class="text-[0.8rem] lg:text-[1.1rem] font-[600] dark:text-[#abc2d3] text-gray-800"\n' +
    '            >\n' +
    '              Location\n' +
    '            </h4>\n' +
    '            <p\n' +
    '                class="text-[0.6rem] lg:text-[0.9rem] font-[400] dark:text-[#abc2d3]/70 text-gray-500"\n' +
    '            >\n' +
    '              15-Dec-2020\n' +
    '            </p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="flex flex-col justify-between relative w-[45%] lg:w-[40%] items-center border-l-[2px] p-[15px] lg:p-[20px] dark:border-slate-600 border-dashed border-gray-200"\n' +
    '      >\n' +
    '        <div\n' +
    '            class="w-[45px] h-[45px] dark:bg-[#020617] rounded-full bg-white absolute top-[-15%] lg:top-[-13%] sm:left-[-13.5%] left-[-19%] lg:left-[-9%]"\n' +
    '        ></div>\n' +
    '\n' +
    '        <h4\n' +
    '            class="text-[0.9rem] lg:text-[1.3rem] font-bold dark:text-blue-600 text-blue-800"\n' +
    '        >\n' +
    '          9:00 AM\n' +
    '        </h4>\n' +
    '\n' +
    '        <button\n' +
    '            class="px-2 lg:px-4 py-1 text-[0.8rem] lg:text-[1.1rem] lg:py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600"\n' +
    '        >\n' +
    '          Buy Ticket\n' +
    '        </button>\n' +
    '\n' +
    '        <p\n' +
    '            class="text-[0.9rem] lg:text-[1.1rem] dark:text-[#abc2d3] text-gray-500"\n' +
    '        >\n' +
    '          Price: <span class="text-red-600 font-semibold">$70</span>\n' +
    '        </p>\n' +
    '\n' +
    '        <div\n' +
    '            class="w-[45px] h-[45px] dark:bg-[#020617] rounded-full bg-white absolute bottom-[-15%] lg:bottom-[-13%] left-[-18.5%] sm:left-[-13.5%] lg:left-[-9%]"\n' +
    '        ></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const BlogCardCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const isOpen = ref(false);\n' +
    'const isFavorite = ref(false);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:w-[70%] shadow-lg dark:bg-slate-800 bg-secondary rounded"\n' +
    '    >\n' +
    '      <div class="flex w-full justify-between items-center p-4">\n' +
    '        <div class="flex items-center gap-4">\n' +
    '          <div\n' +
    '              class="w-[50px] h-[50px] flex items-center justify-center text-secondary text-[1.3rem] rounded-full bg-[#f36f23]"\n' +
    '          >\n' +
    '            R\n' +
    '          </div>\n' +
    '          <div>\n' +
    '            <h2 class="font-[500] dark:text-[#abc2d3] text-[1.2rem]">\n' +
    '              Author Name\n' +
    '            </h2>\n' +
    '            <p class="text-[#424242] dark:text-[#abc2d3]/70 text-[0.9rem]">\n' +
    '              September 14, 2016\n' +
    '            </p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <Icon\n' +
    '            icon="bi:three-dots-vertical"\n' +
    '            class="text-[#424242] dark:hover:bg-slate-900/60 dark:text-[#abc2d3] rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/premium-photo/tasty-tofu-stir-fry-with-veggies-crispy-tofu-fresh-cilantro-perfect-vegan-meal-healthy_763042-1514.jpg"\n' +
    '          alt=""\n' +
    '          class="w-full h-[250px] object-cover"\n' +
    '      />\n' +
    '\n' +
    '      <p class="text-[#424242] dark:text-[#abc2d3] p-4">\n' +
    '        This impressive paella is a perfect party dish and a fun meal to cook\n' +
    '        together with your guests. Add 1 cup of frozen peas along with the\n' +
    '        mussels, if you like.\n' +
    '      </p>\n' +
    '\n' +
    '      <div class="flex items-center justify-between w-full p-4">\n' +
    '        <div class="flex items-center gap-3">\n' +
    '          <Icon\n' +
    '              icon="fa:heart"\n' +
    '              :class="[\n' +
    '              \'text-[1.2rem] cursor-pointer\',\n' +
    '              isFavorite ? \'text-[#ff3d3d]\' : \'text-[#424242] dark:text-[#abc2d3]\',\n' +
    '            ]"\n' +
    '              @click="isFavorite = !isFavorite"\n' +
    '          />\n' +
    '          <Icon\n' +
    '              icon="ri:share-fill"\n' +
    '              class="text-text dark:text-[#abc2d3] text-[1.5rem] cursor-pointer"\n' +
    '          />\n' +
    '        </div>\n' +
    '\n' +
    '        <div @click="isOpen = !isOpen" class="cursor-pointer">\n' +
    '          <Icon\n' +
    '              :icon="isOpen ? \'ion:chevron-up\' : \'ion:chevron-down\'"\n' +
    '              class="text-[#424242] text-[1.4rem] dark:text-[#abc2d3]"\n' +
    '          />\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="grid overflow-hidden px-4 transition-all duration-300 text-[0.9rem] dark:text-[#abc2d3]"\n' +
    '          :class="isOpen ? \'grid-rows-[1fr] py-4\' : \'grid-rows-[0fr]\'"\n' +
    '      >\n' +
    '        <div class="overflow-hidden">\n' +
    '          <b>Method:</b>\n' +
    '          <p class="mt-3">\n' +
    '            Heat 1/2 cup of the broth in a pot until simmering, add saffron and\n' +
    '            set aside for 10 minutes.\n' +
    '          </p>\n' +
    '          <p class="mt-5">\n' +
    '            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet\n' +
    '            over medium-high heat...\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const ProductCardCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const isFavorite = ref(false);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:w-[70%] shadow-lg dark:bg-slate-800 bg-white rounded-lg"\n' +
    '    >\n' +
    '      <img\n' +
    '          src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60"\n' +
    '          alt=""\n' +
    '          class="w-full h-64 object-cover rounded-t-lg"\n' +
    '      />\n' +
    '\n' +
    '      <div class="p-4">\n' +
    '        <h2 class="font-semibold dark:text-[#abc2d3] text-3xl mb-4">Shoes</h2>\n' +
    '\n' +
    '        <div class="flex flex-row dark:text-[#abc2d3] gap-3 mb-1">\n' +
    '          <button class="flex items-center gap-1.5">\n' +
    '            <Icon icon="bi:eye" class="text-[1rem]"/>\n' +
    '            50\n' +
    '          </button>\n' +
    '          <button class="flex items-center gap-1.5">\n' +
    '            <Icon icon="bi:hand-thumbs-up" class="text-[1rem]"/>\n' +
    '            10\n' +
    '          </button>\n' +
    '        </div>\n' +
    '\n' +
    '        <p class="text-[#424242] dark:text-[#abc2d3]">\n' +
    '          This impressive paella is a perfect party dish and a fun meal to cook\n' +
    '          together with your guests.\n' +
    '        </p>\n' +
    '\n' +
    '        <div class="flex items-center justify-between w-full mt-5">\n' +
    '          <p class="text-[#424242] dark:text-[#abc2d3] text-[1rem]">\n' +
    '            Price: <span class=\'text-[#36af7b] font-bold\'>$25</span>\n' +
    '          </p>\n' +
    '          <div class=\'flex items-center gap-3\'>\n' +
    '            <button\n' +
    '                @click="isFavorite = !isFavorite"\n' +
    '                :class="[\n' +
    '                \'btn px-2.5 py-[0.65rem] rounded-lg\',\n' +
    '                isFavorite ? \'bg-red-100 dark:bg-red-800/20\' : \'bg-gray-100 dark:bg-slate-700\',\n' +
    '              ]"\n' +
    '            >\n' +
    '              <Icon\n' +
    '                  icon="fa:heart"\n' +
    '                  :class="[\n' +
    '                \'text-[1.3rem]\',\n' +
    '                isFavorite ? \'text-[#ff3d3d]\' : \'text-[#424242] dark:text-[#abc2d3]\',\n' +
    '              ]"\n' +
    '              />\n' +
    '            </button>\n' +
    '            <button\n' +
    '                class="btn px-2.5 py-2 text-[0.9rem] rounded-lg bg-[#36af7b] text-white hover:bg-[#36af7b]/90"\n' +
    '            >\n' +
    '              <Icon\n' +
    '                  icon="mynaui:cart-solid"\n' +
    '                  class="text-white text-[1.6rem] cursor-pointer"\n' +
    '              />\n' +
    '            </button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const MusicCardCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const isFavorite = ref(false);\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:w-[80%] shadow-lg dark:bg-slate-800 bg-white rounded-lg"\n' +
    '    >\n' +
    '      <div class="grid grid-cols-12 w-full items-center bg-black text-white rounded-t-lg overflow-hidden">\n' +
    '        <div class="grid col-span-5 justify-center gap-3">\n' +
    '          <div>\n' +
    '            <h1 class="text-2xl">Pop Music</h1>\n' +
    '            <p>Arjit Singh</p>\n' +
    '          </div>\n' +
    '          <div class="flex flex-row gap-3">\n' +
    '            <Icon icon="majesticons:next-circle" class="text-2xl rotate-[180deg]"/>\n' +
    '            <Icon icon="solar:play-bold" class="text-2xl"/>\n' +
    '            <Icon icon="majesticons:next-circle" class="text-2xl"/>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="grid col-span-7">\n' +
    '          <img\n' +
    '              src="https://media.istockphoto.com/id/1388162040/photo/a-crowded-concert-hall-with-scene-stage-in-red-lights-rock-show-performance-with-people.jpg?s=1024x1024&w=is&k=20&c=NARCbVE2aAOnSEVWr1ZxK0G4fpr60vMY7iDMsjnHjFg="\n' +
    '              alt=""\n' +
    '              class="w-full h-64 object-cover"\n' +
    '          />\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="flex items-center justify-between w-full p-4">\n' +
    '        <div class="flex items-center gap-4">\n' +
    '          <Icon\n' +
    '              icon="fa:heart"\n' +
    '              :class="[\n' +
    '              \'text-[1.3rem] cursor-pointer\',\n' +
    '              isFavorite ? \'text-[#ff3d3d]\' : \'text-[#424242] dark:text-[#abc2d3]\',\n' +
    '            ]"\n' +
    '              @click="isFavorite = !isFavorite"\n' +
    '          />\n' +
    '          <Icon\n' +
    '              icon="ri:share-fill"\n' +
    '              class="text-[#424242] dark:text-[#abc2d3] text-[1.5rem] cursor-pointer"\n' +
    '          />\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const SimpleProfileCardCodes = '<script setup>\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mt-20 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:w-[60%] mt-16 lg:mt-0 dark:bg-slate-800 shadow-lg rounded-lg flex flex-col"\n' +
    '    >\n' +
    '      <div class="w-full flex justify-center items-center">\n' +
    '        <img\n' +
    '            src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"\n' +
    '            alt="profile"\n' +
    '            class="w-[80px] h-[80px] rounded-full flex justify-center border-blue-800 border-2 -mt-16 object-cover"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <div>\n' +
    '        <div class="w-full start mt-3 px-4">\n' +
    '          <h2 class="font-[600] dark:text-[#abc2d3] text-center text-[1.4rem]">\n' +
    '            Description\n' +
    '          </h2>\n' +
    '          <p class="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] text-center">\n' +
    '            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit\n' +
    '            voluptatibus porro at praesentium enim animi deserunt totam\n' +
    '            voluptatem tempora repudiandae possimus iure cum veniam nesciunt,\n' +
    '            ipsa ad illo, magnam tenetur?\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div\n' +
    '            class="w-full py-4 px-5 mt-8 border-t dark:border-slate-600 border-border flex items-center justify-between"\n' +
    '        >\n' +
    '          <div class="flex items-center justify-center flex-col">\n' +
    '            <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">80k</h2>\n' +
    '            <p class="text-[#424242] dark:text-[#abc2d3]/80 text-[0.9rem]">Post</p>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="flex items-center justify-center flex-col">\n' +
    '            <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">8k</h2>\n' +
    '            <p class="text-[#424242] dark:text-[#abc2d3]/80 text-[0.9rem]">\n' +
    '              Following\n' +
    '            </p>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="flex items-center justify-center flex-col">\n' +
    '            <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">200k</h2>\n' +
    '            <p class="text-[#424242] dark:text-[#abc2d3]/80 text-[0.9rem]">\n' +
    '              Followers\n' +
    '            </p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const ProfileCardCodes = '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:w-[60%] shadow-lg bg-white dark:bg-slate-800 rounded-lg"\n' +
    '    >\n' +
    '      <div\n' +
    '          class="w-full h-[150px] rounded-t-md relative bg-[url(\'https://img.freepik.com/premium-vector/content-writer-vector-colored-round-line-illustration_104589-2571.jpg\')] bg-center bg-cover"\n' +
    '      >\n' +
    '        <img\n' +
    '            src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"\n' +
    '            alt=""\n' +
    '            class="w-[80px] h-[80px] rounded-full border-white border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="w-full text-center mt-16">\n' +
    '        <h2 class="font-[600] dark:text-[#abc2d3] text-[1.4rem]">User Name</h2>\n' +
    '        <p class="text-[#424242] dark:text-[#abc2d3]/80 text-[0.9rem]">London</p>\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="w-full py-4 px-5 mt-8 border-t dark:border-slate-700 border-[#e5eaf2] flex items-center justify-between"\n' +
    '      >\n' +
    '        <div class="flex items-center justify-center flex-col">\n' +
    '          <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">80k</h2>\n' +
    '          <p class="text-[#424242] dark:text-[#abc2d3]/80 text-[0.9rem]">Post</p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex items-center justify-center flex-col">\n' +
    '          <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">8k</h2>\n' +
    '          <p class="text-[#424242] dark:text-[#abc2d3]/80 text-[0.9rem]">\n' +
    '            Following\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex items-center justify-center flex-col">\n' +
    '          <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">200k</h2>\n' +
    '          <p class="text-[#424242] dark:text-[#abc2d3]/80 text-[0.9rem]">\n' +
    '            Followers\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const TeamCardCodes = [
    {
        id: "main",
        displayText: "TeamCard.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import members from "./Data.js";\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
            '    <div\n' +
            '        class="w-full lg:w-[60%] bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4"\n' +
            '    >\n' +
            '      <div class="w-full flex items-center justify-between mb-4">\n' +
            '        <div class="flex items-center dark:text-[#abc2d3] gap-2">\n' +
            '          <Icon\n' +
            '              icon="ri:team-fill"\n' +
            '              class="text-[2rem] p-2 dark:text-[#abc2d3] rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"\n' +
            '          />\n' +
            '          <h3>Teams</h3>\n' +
            '        </div>\n' +
            '\n' +
            '        <Icon\n' +
            '            icon="bi:three-dots-vertical"\n' +
            '            class="text-[2rem] p-2 dark:text-[#abc2d3] rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <img\n' +
            '          src="https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg"\n' +
            '          alt=""\n' +
            '          class="rounded-lg"\n' +
            '      />\n' +
            '\n' +
            '      <h2 class="font-[600] dark:text-[#abc2d3] text-[1.3rem] py-4">\n' +
            '        Simple Design\n' +
            '      </h2>\n' +
            '\n' +
            '      <div class="w-full flex items-center justify-between">\n' +
            '        <button\n' +
            '            class="py-1 px-4 dark:text-[#abc2d3] bg-[#3b9df828] text-[#2367a7] rounded"\n' +
            '        >\n' +
            '          Design\n' +
            '        </button>\n' +
            '\n' +
            '        <div class="flex items-center justify-center">\n' +
            '          <img\n' +
            '              v-for="(member, index) in members"\n' +
            '              :key="index"\n' +
            '              :src="member.img"\n' +
            '              alt="member"\n' +
            '              class="w-[30px] h-[30px] -ml-3 object-cover rounded-full border border-white"\n' +
            '          />\n' +
            '\n' +
            '          <div\n' +
            '              class="w-[30px] h-[30px] object-cover -ml-3 rounded-full border border-white bg-[#e5eaf2] text-[#424242] flex items-center justify-center"\n' +
            '          >\n' +
            '            <p class="text-[0.7rem] cursor-pointer">18+</p>\n' +
            '          </div>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const members = [\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/portrait-hacker_23-2148165910.jpg"\n' +
            '  }\n' +
            '];'
    },
]

export const PricingCard1Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:w-[80%] border bg-white dark:bg-slate-800 dark:border-slate-700 border-[#e5eaf2] p-2 rounded-2xl"\n' +
    '    >\n' +
    '      <div\n' +
    '          class="w-full bg-[#36af7b] rounded-2xl p-4 mb-5"\n' +
    '      >\n' +
    '        <div class="flex items-center justify-between mb-5">\n' +
    '          <Icon icon="lucide:rocket" class="text-white text-[3.5rem]"/>\n' +
    '          <button\n' +
    '              class="px-2 py-1 border border-white rounded-md text-[0.8rem] bg-white"\n' +
    '          >\n' +
    '            ENTERPRISE\n' +
    '          </button>\n' +
    '        </div>\n' +
    '\n' +
    '        <h2 class="text-[2.3rem] font-[800] text-white">\n' +
    '          $79.58 <span class="text-[1rem] font-[400]">/ month</span>\n' +
    '        </h2>\n' +
    '        <p class="text-[1rem] text-white">True power of marketing</p>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="flex flex-col px-8 text-text mt-6">\n' +
    '        <p\n' +
    '            v-for="(_, index) in Array.from({length: 6})"\n' +
    '            :class="index === 5 ? \'border-transparent\' : \'border-[#e5eaf2] dark:border-[#334155]\'"\n' +
    '            class="flex items-center gap-2 py-3 border-b dark:text-[#abc2d3] text-[1rem]"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="fa7-regular:dot-circle"\n' +
    '              class="text-[1rem] dark:text-[#abc2d3] text-[#000]"\n' +
    '          />\n' +
    '          Lorem ipsum dolor sit.\n' +
    '        </p>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="px-8 my-5">\n' +
    '        <button\n' +
    '            class="px-4 py-2.5 border bg-[#36af7b] rounded-lg text-white text-[0.95rem] flex items-center gap-2 group"\n' +
    '        >\n' +
    '          GET STARTED\n' +
    '          <Icon\n' +
    '              icon="bi:arrow-right"\n' +
    '              class="text-[1.4rem] group-hover:ml-2 transition-all duration-300"\n' +
    '          />\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const PricingCard2Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:w-[80%] border bg-white dark:bg-slate-800 rounded-lg overflow-hidden dark:border-slate-700 border-[#e5eaf2] shadow-lg"\n' +
    '    >\n' +
    '      <div class="w-full flex items-center justify-center flex-col p-6">\n' +
    '        <h2 class="text-[1.5rem] text-[#36af7b] font-[600]">Standard</h2>\n' +
    '        <p class="text-[#424242] dark:text-[#abc2d3] text-[1rem]">\n' +
    '          Ideal for growing businesses\n' +
    '        </p>\n' +
    '\n' +
    '        <div class="flex mt-6 gap-1">\n' +
    '          <h2 class="font-[800] dark:text-[#abc2d3] text-[4rem] leading-[4rem]">\n' +
    '            49.50\n' +
    '          </h2>\n' +
    '          <span class="text-[1.2rem] dark:text-[#abc2d3] font-[500]">$</span>\n' +
    '        </div>\n' +
    '        <p class="text-[#424242] dark:text-[#abc2d3]/70 text-[0.9rem]">per month</p>\n' +
    '\n' +
    '        <button\n' +
    '            class="px-12 py-2 bg-[#36af7b] rounded-3xl text-white text-[1rem] my-6"\n' +
    '        >\n' +
    '          Buy Now\n' +
    '        </button>\n' +
    '      </div>\n' +
    '\n' +
    '      <h3\n' +
    '          class="text-[1.2rem] dark:text-[#abc2d3] font-[600] text-[#424242] mt-3 px-6"\n' +
    '      >\n' +
    '        What you will get?\n' +
    '      </h3>\n' +
    '\n' +
    '      <div class="flex gap-3 flex-col py-4 px-6">\n' +
    '        <p\n' +
    '            class="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]"\n' +
    '        >\n' +
    '          <Icon icon="material-symbols:done-rounded" class="text-[#36af7b] text-[1.5rem]"/>\n' +
    '          5 Users\n' +
    '        </p>\n' +
    '        <p\n' +
    '            class="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]"\n' +
    '        >\n' +
    '          <Icon icon="material-symbols:done-rounded" class="text-[#36af7b] text-[1.5rem]"/>\n' +
    '          50GB Storage\n' +
    '        </p>\n' +
    '        <p\n' +
    '            class="flex items-center gap-2 dark:text-[#abc2d3] text-[#424242] text-[1rem]"\n' +
    '        >\n' +
    '          <Icon icon="material-symbols:done-rounded" class="text-[#36af7b] text-[1.5rem]"/>\n' +
    '          Priority\n' +
    '          Email Support\n' +
    '        </p>\n' +
    '        <p\n' +
    '            class="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="radix-icons:cross-2"\n' +
    '              class="text-[#e73939] text-[1.2rem]"\n' +
    '          />\n' +
    '          Unlimited Users\n' +
    '        </p>\n' +
    '        <p\n' +
    '            class="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]"\n' +
    '        >\n' +
    '          <Icon icon="radix-icons:cross-2" class="text-[#e73939] text-[1.2rem]"/>\n' +
    '          100GB\n' +
    '          Storage\n' +
    '        </p>\n' +
    '        <p\n' +
    '            class="flex items-center gap-3 dark:text-[#abc2d3] text-[#424242] text-[1rem]"\n' +
    '        >\n' +
    '          <Icon icon="radix-icons:cross-2" class="text-[#e73939] text-[1.2rem]"/>\n' +
    '          24/7\n' +
    '          Live Chat Support\n' +
    '        </p>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="w-full h-[10px] bg-[#36af7b]"></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard1Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="bg-white dark:bg-slate-800 rounded-lg boxShadow relative min-w-[60%]"\n' +
    '    >\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg"\n' +
    '          alt="image"\n' +
    '          class="w-full h-[250px] object-cover rounded-t-md"\n' +
    '      />\n' +
    '\n' +
    '      <span\n' +
    '          class="text-[0.9rem] py-0.5 px-3 bg-blue-500 text-white rounded-full absolute top-4 right-4"\n' +
    '      >New</span\n' +
    '      >\n' +
    '\n' +
    '      <div class="p-5">\n' +
    '        <div class="flex items-center gap-[5px]">\n' +
    '          <Icon v-for="_ in Array.from({length: 5})" icon="mdi:star"\n' +
    '                class="text-yellow-400 cursor-pointer text-[1.3rem]"/>\n' +
    '        </div>\n' +
    '\n' +
    '        <h1\n' +
    '            class="text-[20px] mt-3 dark:text-[#abc2d3] font-bold text-black leading-[24px]"\n' +
    '        >\n' +
    '          Minimal Pattern\n' +
    '        </h1>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard2Codes = [
    {
        id: "main",
        displayText: "RandomCard.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import members from \'./Data.js\'\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
            '    <div\n' +
            '        class="bg-white dark:bg-slate-800 rounded-lg boxShadow relative w-full 1024px:max-w-[60%]"\n' +
            '    >\n' +
            '      <img\n' +
            '          src="https://img.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149002586.jpg"\n' +
            '          alt="image"\n' +
            '          class="w-full h-[200px] object-cover rounded-t-lg"\n' +
            '      />\n' +
            '\n' +
            '      <div class="flex items-center justify-end -my-4 pr-4">\n' +
            '        <img\n' +
            '            v-for="(member, index) in members"\n' +
            '            :key="index"\n' +
            '            :src="member.img"\n' +
            '            alt="members"\n' +
            '            class="w-[30px] h-[30px] -ml-3 object-cover rounded-full border border-secondary"\n' +
            '        />\n' +
            '\n' +
            '        <div\n' +
            '            class="w-[30px] h-[30px] object-cover -ml-3 rounded-full border border-secondary bg-[#e5eaf2] text-[#424242] flex items-center justify-center"\n' +
            '        >\n' +
            '          <p class="text-[0.7rem] cursor-pointer">18+</p>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="p-5">\n' +
            '        <p class="text-[1rem] dark:text-[#abc2d3]/90 text-gray-300">\n' +
            '          Recommended\n' +
            '        </p>\n' +
            '        <h1\n' +
            '            class="text-[20px] font-bold text-black dark:text-[#abc2d3] leading-[24px] mt-1.5"\n' +
            '        >\n' +
            '          Silent Ninja Stalker\n' +
            '        </h1>\n' +
            '\n' +
            '        <button\n' +
            '            class="py-2 px-4 bg-[#36af7b] text-white rounded-md min-w-[40%] mt-8"\n' +
            '        >\n' +
            '          Play\n' +
            '        </button>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const members = [\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"\n' +
            '  },\n' +
            '  {\n' +
            '    img: "https://img.freepik.com/free-photo/portrait-hacker_23-2148165910.jpg"\n' +
            '  }\n' +
            '];'
    },
]

export const RandomCard3Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="bg-white dark:bg-slate-800 rounded-lg boxShadow w-full lg:max-w-[60%]"\n' +
    '    >\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/free-psd/office-desktop-icon-isolated-3d-render-illustration_47987-8371.jpg"\n' +
    '          alt="image"\n' +
    '          class="w-full h-[200px] object-cover rounded-t-lg"\n' +
    '      />\n' +
    '\n' +
    '      <div class="py-6 px-4 relative">\n' +
    '        <span\n' +
    '            class="w-[40px] dark:bg-slate-900 h-[40px] rounded-full bg-white absolute -top-5 right-5 boxShadow flex items-center justify-center"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="material-symbols:bookmark-outline"\n' +
    '              class="text-gray-500 text-[1.3rem]"\n' +
    '          />\n' +
    '        </span>\n' +
    '\n' +
    '        <h1\n' +
    '            class="text-[20px] font-bold text-black dark:text-[#abc2d3] leading-[24px]"\n' +
    '        >\n' +
    '          ZenUI Library\n' +
    '        </h1>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard4Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="bg-white dark:bg-slate-800 rounded-md boxShadow w-full lg:min-w-[70%] lg:max-w-[80%]"\n' +
    '    >\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/free-photo/hip-hop-dancer-dance_144627-7472.jpg"\n' +
    '          alt="image"\n' +
    '          class="w-full h-[250px] object-cover rounded-t-md"\n' +
    '      />\n' +
    '\n' +
    '      <div class="p-5 relative">\n' +
    '        <div\n' +
    '            class="rounded-xl w-[70px] dark:bg-slate-900 dark:text-[#abc2d3] py-3 bg-white absolute -top-9 right-6 boxShadow flex items-center flex-col justify-center"\n' +
    '        >\n' +
    '          <b class="text-[1.4rem] leading-[1.4rem]">18</b>\n' +
    '          <span class="text-[1rem]">JAN</span>\n' +
    '        </div>\n' +
    '\n' +
    '        <p class="text-[1rem] dark:text-[#abc2d3]/90 text-gray-300">\n' +
    '          Performance\n' +
    '        </p>\n' +
    '        <h1\n' +
    '            class="text-[22px] font-bold dark:text-[#abc2d3] text-black leading-[28px] mt-1.5"\n' +
    '        >\n' +
    '          Hip hop dancer in dance\n' +
    '        </h1>\n' +
    '\n' +
    '        <div class="mt-8 flex items-center gap-[10px]">\n' +
    '          <span\n' +
    '              class="w-[40px] dark:border-slate-500 cursor-pointer h-[40px] hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full border border-gray-200 flex items-center justify-center"\n' +
    '          >\n' +
    '            <Icon\n' +
    '                icon="material-symbols:bookmark-outline"\n' +
    '                class="text-[#959393] dark:text-[#abc2d3] text-[1.3rem]"\n' +
    '            />\n' +
    '          </span>\n' +
    '          <span\n' +
    '              class="w-[40px] dark:border-slate-500 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 h-[40px] rounded-full border border-gray-200 flex items-center justify-center"\n' +
    '          >\n' +
    '            <Icon\n' +
    '                icon="material-symbols:share-outline"\n' +
    '                class="text-[#959393] dark:text-[#abc2d3] text-[1.2rem]"\n' +
    '            />\n' +
    '          </span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard5Codes = '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="bg-white dark:bg-slate-800 rounded-lg boxShadow w-full lg:max-w-[45%] px-4 py-8 flex items-center justify-center flex-col"\n' +
    '    >\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18666.jpg"\n' +
    '          alt="image"\n' +
    '          class="w-[100px] h-[100px] rounded-full object-cover"\n' +
    '      />\n' +
    '\n' +
    '      <h1\n' +
    '          class="text-[1.3rem] font-[500] leading-[24px] dark:text-[#abc2d3] mt-4"\n' +
    '      >\n' +
    '        Bruce Lee\n' +
    '      </h1>\n' +
    '      <p class="text-[0.9rem] text-gray-500 font-[400] dark:text-[#abc2d3]/80">\n' +
    '        Front-End Developer\n' +
    '      </p>\n' +
    '      <button\n' +
    '          class="py-1.5 mt-8 px-6 border border-[#36af7b] rounded-lg hover:bg-[#36af7b] hover:text-white text-[#36af7b]"\n' +
    '      >\n' +
    '        Follow\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const RandomCard6Codes = '<script setup>\n' +
    'import { Icon } from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div class="w-full lg:min-w-[60%] lg:max-w-[75%] relative">\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg"\n' +
    '          alt="image"\n' +
    '          class="w-full h-[400px] object-cover rounded-xl"\n' +
    '      />\n' +
    '\n' +
    '      <div class="absolute top-3 right-3 bg-blue-500 rounded-full p-2">\n' +
    '        <Icon\n' +
    '            icon="ion:notifications-outline"\n' +
    '            class="text-white text-[1.4rem]"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl"\n' +
    '      >\n' +
    '        <span\n' +
    '            class="text-[0.8rem] py-1 px-3 bg-blue-500 rounded-full text-white"\n' +
    '        >\n' +
    '          Featured\n' +
    '        </span>\n' +
    '        <h1 class="text-[1.8rem] text-white font-bold leading-[34px] mt-4">\n' +
    '          Wet Vietnam Mountain Flow Stream Rural\n' +
    '        </h1>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard7Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full lg:min-w-[60%] lg:max-w-[65%] relative dark:bg-slate-800 bg-white shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] rounded-xl"\n' +
    '    >\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/free-psd/3d-render-illustration-chair-isolated-icon_439185-11403.jpg"\n' +
    '          alt="image"\n' +
    '          class="w-full h-[260px] object-cover rounded-t-xl"\n' +
    '      />\n' +
    '\n' +
    '      <div class="absolute top-3 right-3 bg-blue-500 rounded-full p-2">\n' +
    '        <Icon\n' +
    '            icon="ion:notifications-outline"\n' +
    '            class="text-white text-[1.4rem]"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="p-4">\n' +
    '        <h1 class="text-[1.3rem] font-bold dark:text-[#abc2d3] leading-[34px]">\n' +
    '          Minimal Chair\n' +
    '        </h1>\n' +
    '        <p class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-400">\n' +
    '          Elegant Simplicity: The Essence of Minimalist Design in Chairs\n' +
    '        </p>\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="float-right p-2 dark:hover:bg-slate-900/70 hover:bg-gray-100 cursor-pointer mr-2 mb-2 rounded-full group"\n' +
    '      >\n' +
    '        <Icon icon="bi:arrow-right" class="text-[1.5rem] text-gray-400"/>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard8Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="lg:min-w-[60%] dark:bg-slate-800 w-full lg:max-w-[60%] relative bg-white shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] rounded-xl"\n' +
    '    >\n' +
    '      <img\n' +
    '          src="https://i.ibb.co.com/Mn0DzdL/asfak-ahmed-ceo-of-zenui.jpg"\n' +
    '          alt="image"\n' +
    '          class="w-full h-[260px] object-cover rounded-t-xl"\n' +
    '      />\n' +
    '\n' +
    '      <div class="p-5">\n' +
    '        <h1 class="text-[1.3rem] font-bold dark:text-[#abc2d3] leading-[24px]">\n' +
    '          Asfak Ahmed\n' +
    '        </h1>\n' +
    '        <span class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-400">\n' +
    '          Founder & CEO of ZenUI Library\n' +
    '        </span>\n' +
    '\n' +
    '        <p class="text-gray-600 text-sm dark:text-[#abc2d3] mt-3">\n' +
    '          Asfak Ahmed is a professional Front-End Web Developer. He was born on\n' +
    '          (12 Oct 2004). His full name is Asfak Ahmed...\n' +
    '        </p>\n' +
    '\n' +
    '        <button\n' +
    '            class="py-2.5 px-4 bg-gray-300 dark:bg-slate-700 mt-8 rounded-md w-full flex items-center justify-center gap-[10px] dark:text-[#abc2d3] group"\n' +
    '        >\n' +
    '          Learn more\n' +
    '          <Icon\n' +
    '              icon="bi:arrow-right"\n' +
    '              class="text-[1.3rem] text-gray-600 dark:text-[#abc2d3] group-hover:ml-2 transition-all duration-200"\n' +
    '          />\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard9Codes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const menuOpen = ref(false);\n' +
    '\n' +
    'const toggleMenu = () => {\n' +
    '  menuOpen.value = !menuOpen.value;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full dark:bg-slate-800 lg:min-w-[60%] lg:max-w-[80%] relative bg-white shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] rounded-xl flex-col md:flex gap-[20px] p-4"\n' +
    '    >\n' +
    '      <div class="w-full md:w-[23.5%]">\n' +
    '        <img\n' +
    '            src="https://img.freepik.com/free-photo/portrait-young-bearded-man-looking-camera_23-2148187159.jpg"\n' +
    '            alt="image"\n' +
    '            class="size-[100px] object-cover md:rounded-full"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="w-full mt-5 md:mt-0">\n' +
    '        <div class="flex md:items-center justify-between w-full">\n' +
    '          <div\n' +
    '              class="flex md:flex-row flex-col md:items-center md:gap-[0.5rem]"\n' +
    '          >\n' +
    '            <h1 class="text-[1.2rem] dark:text-[#abc2d3] font-bold">\n' +
    '              Jerome Bell\n' +
    '            </h1>\n' +
    '            <span class="text-gray-400 text-xs dark:text-[#abc2d3]/90">\n' +
    '              • 2 weeks ago\n' +
    '            </span>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="relative">\n' +
    '            <Icon\n' +
    '                icon="bi:three-dots-vertical"\n' +
    '                class="text-gray-700 dark:text-[#abc2d3] dark:hover:bg-gray-900 hover:bg-gray-100 rounded-full p-1.5 text-[2rem] cursor-pointer"\n' +
    '                @click="toggleMenu"\n' +
    '            />\n' +
    '\n' +
    '            <ul\n' +
    '                :class="[\n' +
    '                \'transition-all duration-200 bg-white w-max boxShadow py-1 rounded-md dark:bg-slate-900 absolute top-8 right-0\',\n' +
    '                menuOpen\n' +
    '                  ? \'translate-y-0 opacity-100 z-20 h-auto\'\n' +
    '                  : \'translate-y-[-10px] opacity-0 z-[-1] h-0\',\n' +
    '              ]"\n' +
    '            >\n' +
    '              <li\n' +
    '                  class="py-2 px-4 dark:hover:bg-slate-800/60 dark:text-[#abc2d3] hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-gray-600"\n' +
    '              >\n' +
    '                <Icon icon="fa-regular:bookmark"/>\n' +
    '                Make favorite\n' +
    '              </li>\n' +
    '              <li\n' +
    '                  class="py-2 px-4 dark:hover:bg-slate-800/60 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-red-500"\n' +
    '              >\n' +
    '                <Icon icon="ant-design:delete-outlined"/>\n' +
    '                Delete\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <p class="text-gray-600 mt-5 dark:text-[#abc2d3]/90 text-[0.9rem]">\n' +
    '          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet\n' +
    '          sint. Velit officia consequat duis enim velit mollit. Exercitation\n' +
    '          veniam consequat sunt nostrud amet.\n' +
    '        </p>\n' +
    '\n' +
    '        <div class="flex items-center gap-[20px] mt-6">\n' +
    '          <div\n' +
    '              class="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-[#36af7b]"\n' +
    '          >\n' +
    '            <Icon icon="fa-regular:heart"/>\n' +
    '            22\n' +
    '          </div>\n' +
    '          <div\n' +
    '              class="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-[#36af7b]"\n' +
    '          >\n' +
    '            <Icon icon="fa-regular:bookmark"/>\n' +
    '            234\n' +
    '          </div>\n' +
    '          <div\n' +
    '              class="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-[#36af7b]"\n' +
    '          >\n' +
    '            <Icon icon="bx:comment"/>\n' +
    '            185\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard10Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="bg-white dark:bg-slate-800 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] rounded-lg overflow-hidden w-full lg:max-w-[80%]"\n' +
    '    >\n' +
    '      <div class="p-5">\n' +
    '        <h1\n' +
    '            class="text-[1.5rem] dark:text-[#abc2d3] font-semibold leading-[28px]"\n' +
    '        >\n' +
    '          Constructive and destructive waves\n' +
    '        </h1>\n' +
    '        <p class="text-[1rem] dark:text-[#abc2d3]/80 text-gray-600 mt-2 mb-4">\n' +
    '          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet\n' +
    '          sint.\n' +
    '        </p>\n' +
    '        <span\n' +
    '            class="text-[0.9rem] text-gray-400 dark:text-[#abc2d3] font-[300]"\n' +
    '        >\n' +
    '          2 hours 40 minutes\n' +
    '        </span>\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="border-t hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-900 dark:border-slate-600 border-gray-200 p-5 flex items-center justify-between w-full"\n' +
    '      >\n' +
    '        <button class="font-semibold dark:text-[#abc2d3] text-gray-700">\n' +
    '          View More\n' +
    '        </button>\n' +
    '        <Icon\n' +
    '            icon="ri:arrow-right-s-line"\n' +
    '            class="text-[1.4rem] dark:text-[#abc2d3] cursor-pointer"\n' +
    '        />\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard11Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="bg-white dark:bg-slate-800 shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] rounded-lg w-full lg:max-w-[60%] px-2"\n' +
    '    >\n' +
    '      <div class="py-5 px-3">\n' +
    '        <span\n' +
    '            class="text-[0.9rem] dark:text-[#abc2d3] text-gray-400 font-[300]"\n' +
    '        >\n' +
    '          Reading Task\n' +
    '        </span>\n' +
    '        <h1\n' +
    '            class="text-[1.5rem] dark:text-[#abc2d3] font-semibold leading-[28px] mt-2"\n' +
    '        >\n' +
    '          Constructive and destructive waves\n' +
    '        </h1>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="flex flex-col">\n' +
    '        <div\n' +
    '            class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-2 hover:bg-gray-100 px-3 rounded-md cursor-pointer"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="mdi:email-outline"\n' +
    '              class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"\n' +
    '          />\n' +
    '          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">\n' +
    '            Meeting Reminder: Project Kickoff\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div\n' +
    '            class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-2 hover:bg-gray-100 px-3 rounded-md cursor-pointer"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="mdi:email-outline"\n' +
    '              class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"\n' +
    '          />\n' +
    '          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">\n' +
    '            Invitation: Web Development Webinar\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div\n' +
    '            class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-2 hover:bg-gray-100 px-3 rounded-md cursor-pointer"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="mdi:email-outline"\n' +
    '              class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"\n' +
    '          />\n' +
    '          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">\n' +
    '            Invoice #12345 Due Tomorrow\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div\n' +
    '            class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-2 hover:bg-gray-100 px-3 rounded-md cursor-pointer"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="mdi:email-outline"\n' +
    '              class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"\n' +
    '          />\n' +
    '          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">\n' +
    '            Your Order Has Shipped\n' +
    '          </p>\n' +
    '        </div>\n' +
    '\n' +
    '        <div\n' +
    '            class="flex items-start gap-[8px] dark:hover:bg-slate-700 py-2 hover:bg-gray-100 px-3 rounded-md cursor-pointer"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="mdi:email-outline"\n' +
    '              class="text-[1.3rem] dark:text-[#abc2d3]/90 mt-[3px]"\n' +
    '          />\n' +
    '          <p class="text-[1.1rem] dark:text-[#abc2d3]/90">\n' +
    '            Update: New Policy Changes\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="mx-3 mt-3">\n' +
    '        <button\n' +
    '            class="w-full mx-auto dark:bg-slate-700 dark:text-[#abc2d3] py-2.5 px-6 text-center bg-[#e9e1ff] text-[#7949ff] my-5 rounded-md"\n' +
    '        >\n' +
    '          Continue\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard12Codes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '    <div\n' +
    '        class="w-full bg-white dark:bg-slate-800 lg:max-w-[60%] shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] rounded-lg"\n' +
    '    >\n' +
    '      <div class="flex items-center justify-between w-full p-4">\n' +
    '        <h2 class="text-[1.4rem] dark:text-[#abc2d3] font-semibold">\n' +
    '          Strawberry Cake\n' +
    '        </h2>\n' +
    '        <div class="flex items-center gap-[5px]">\n' +
    '          <Icon\n' +
    '              icon="bi:leaf-fill"\n' +
    '              class="py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer"\n' +
    '          />\n' +
    '          <Icon\n' +
    '              icon="fa:fire"\n' +
    '              class="py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer"\n' +
    '          />\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <img\n' +
    '          src="https://img.freepik.com/free-photo/strawberry-dessert-gourmet-sweet-food-chocolate-indulgence-generative-ai_188544-8522.jpg"\n' +
    '          alt="icecream"\n' +
    '          class="w-full"\n' +
    '      />\n' +
    '\n' +
    '      <div class="p-4">\n' +
    '        <p class="text-[1rem] dark:text-[#abc2d3]/90 text-gray-700">\n' +
    '          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
    '          eiusmod tempor incididunt.\n' +
    '        </p>\n' +
    '\n' +
    '        <div\n' +
    '            class="mt-8 flex md:flex-row flex-col gap-[15px] md:gap-[5px] md:items-center justify-between w-full"\n' +
    '        >\n' +
    '          <h3\n' +
    '              class="text-[1.4rem] dark:text-[#abc2d3] font-semibold flex items-center gap-[4px]"\n' +
    '          >\n' +
    '            $13.90\n' +
    '            <del\n' +
    '                class="text-[1rem] dark:text-[#abc2d3] text-red-500 font-[300]"\n' +
    '            >\n' +
    '              $18.90\n' +
    '            </del>\n' +
    '          </h3>\n' +
    '\n' +
    '          <button\n' +
    '              class="py-2 px-6 border border-[#36af7b] text-[#36af7b] rounded-lg"\n' +
    '          >\n' +
    '            Order now\n' +
    '          </button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const RandomCard13Codes = [
    {
        id: "main",
        displayText: "RandomCard.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import members from \'./Data.js\'\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
            '    <div\n' +
            '        class="w-full bg-white dark:bg-slate-800 lg:max-w-[80%] shadow-[0px_0px_10px_0px_rgb(0,0,0,0.1)] rounded-lg"\n' +
            '    >\n' +
            '      <div class="p-4">\n' +
            '        <h1 class="text-[1.5rem] dark:text-[#abc2d3] font-semibold">\n' +
            '          Minim dolorin\n' +
            '        </h1>\n' +
            '        <p class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">\n' +
            '          Minim dolor in amet nulla laboris enim dolore consequat.\n' +
            '        </p>\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="mt-4">\n' +
            '        <div\n' +
            '            v-for="member in members"\n' +
            '            :key="member.id"\n' +
            '            class="flex md:flex-row flex-col dark:hover:bg-slate-700 md:items-center w-full justify-between py-3 hover:bg-gray-50 px-4"\n' +
            '        >\n' +
            '          <div class="flex gap-[10px]">\n' +
            '            <img\n' +
            '                :src="member.avatar"\n' +
            '                :alt="member.name"\n' +
            '                class="w-[60px] h-[60px] object-cover rounded-full"\n' +
            '            />\n' +
            '            <div class="flex flex-col">\n' +
            '              <h3 class="text-[1.2rem] dark:text-[#abc2d3] font-semibold">\n' +
            '                {{ member.name }}\n' +
            '              </h3>\n' +
            '              <span class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500"\n' +
            '              >{{ member.role }}</span\n' +
            '              >\n' +
            '            </div>\n' +
            '          </div>\n' +
            '          <button\n' +
            '              class="py-2 w-max md:m-0 mx-auto px-6 bg-[#36af7b] hover:bg-[#36af7b]/90 text-white rounded-md"\n' +
            '          >\n' +
            '            Follow\n' +
            '          </button>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '\n' +
            '      <div\n' +
            '          class="bg-gray-100 dark:bg-slate-600 p-4 rounded-b-md flex items-center justify-between w-full"\n' +
            '      >\n' +
            '        <span class="text-[0.9rem] dark:text-[#abc2d3] text-gray-400"\n' +
            '        >543 students</span\n' +
            '        >\n' +
            '        <button\n' +
            '            class="text-[0.9rem] dark:text-[#abc2d3] hover:text-[#36af7b] text-gray-700 font-[500]"\n' +
            '        >\n' +
            '          VIEW ALL MEMBER\n' +
            '        </button>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "data",
        displayText: "data.js",
        language: "js",
        code: 'export const members = [\n' +
            '  {\n' +
            '    id: 1,\n' +
            '    name: "Wade Warren",\n' +
            '    role: "Dog Trainer",\n' +
            '    avatar:\n' +
            '        "https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 2,\n' +
            '    name: "Robert Fox",\n' +
            '    role: "President of Sales",\n' +
            '    avatar:\n' +
            '        "https://img.freepik.com/free-photo/bearded-man-listening-music-through-earphones_53876-129947.jpg",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 3,\n' +
            '    name: "Jane Cooper",\n' +
            '    role: "Nursing Assistant",\n' +
            '    avatar:\n' +
            '        "https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 4,\n' +
            '    name: "Frank Esteban",\n' +
            '    role: "Software Tester",\n' +
            '    avatar:\n' +
            '        "https://img.freepik.com/free-photo/portrait-male-traveler-looking-camera-outdoors_23-2148148710.jpg",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 5,\n' +
            '    name: "Dianne Russell",\n' +
            '    role: "Web Designer",\n' +
            '    avatar:\n' +
            '        "https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg",\n' +
            '  },\n' +
            '];'
    },
]