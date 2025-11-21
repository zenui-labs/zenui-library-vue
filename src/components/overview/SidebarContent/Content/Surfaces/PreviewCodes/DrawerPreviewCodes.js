export const DrawerTopCodes = '<script setup>\n' +
    'import {onBeforeUnmount, onMounted, ref} from "vue";\n' +
    '\n' +
    'const openDrawer = ref(false);\n' +
    '\n' +
    'const handleKeydown = (event) => {\n' +
    '  if (event.key === "Escape") {\n' +
    '    openDrawer.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  const drawerBtn = event.target.closest(".zenui_drawer_btn");\n' +
    '  const drawer = event.target.closest(".zenui_drawer");\n' +
    '\n' +
    '  if (!drawerBtn && !drawer) {\n' +
    '    openDrawer.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("keydown", handleKeydown);\n' +
    '  document.addEventListener("click", handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener("keydown", handleKeydown);\n' +
    '  document.removeEventListener("click", handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full flex items-center justify-center">\n' +
    '    <button\n' +
    '        class="px-4 py-2 zenui_drawer_btn bg-[#36af7b] text-white rounded-md"\n' +
    '        @click="openDrawer = true"\n' +
    '    >\n' +
    '      Open Drawer\n' +
    '    </button>\n' +
    '  </div>\n' +
    '\n' +
    '  <div\n' +
    '      :class="[\n' +
    '      openDrawer ? \'visible\' : \'invisible\',\n' +
    '      \'w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-black/10 backdrop-blur-[2px] transition-all duration-300\'\n' +
    '    ]"\n' +
    '  >\n' +
    '    <div\n' +
    '        :class="[\n' +
    '        openDrawer\n' +
    '          ? \'translate-y-[0px] opacity-100\'\n' +
    '          : \'translate-y-[-200px] opacity-0\',\n' +
    '        \'w-full dark:bg-slate-800 bg-secondary zenui_drawer transition-all shadow-[0px_0px_20px_0px_rgb(0,0,0,0.1)] duration-300 mx-auto\'\n' +
    '      ]"\n' +
    '    >\n' +
    '      <div class="flex md:flex-row flex-col justify-between w-full gap-5 px-8 py-10">\n' +
    '        <p class="text-[1rem] dark:text-[#abc2d3] text-text w-full md:w-[70%]">\n' +
    '          This site uses cookies and related technologies, as\n' +
    '          described in our privacy policy, for purposes that may\n' +
    '          include site operation, analytics, enhanced user\n' +
    '          experience, or advertising. You may choose to consent to\n' +
    '          our use of these technologies, or manage your own\n' +
    '          preferences.\n' +
    '        </p>\n' +
    '\n' +
    '        <div class="flex items-end justify-end mt-5 gap-4 flex-col 1024px:flex-row w-full md:w-[20%]">\n' +
    '          <button\n' +
    '              class="py-2 w-full px-4 dark:border-slate-800 border border-[#d1d1d1] rounded-md outline-none bg-[#36af7b] text-[#fff]"\n' +
    '              @click="openDrawer = false"\n' +
    '          >\n' +
    '            Accept\n' +
    '          </button>\n' +
    '          <button\n' +
    '              class="py-2 w-full dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900/50 hover:bg-gray-100 px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"\n' +
    '              @click="openDrawer = false"\n' +
    '          >\n' +
    '            Decline\n' +
    '          </button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const DrawerBottomCodes = '<script setup>\n' +
    'import {onBeforeUnmount, onMounted, ref} from "vue";\n' +
    '\n' +
    'const openDrawer = ref(false);\n' +
    '\n' +
    'const handleKeydown = (event) => {\n' +
    '  if (event.key === "Escape") {\n' +
    '    openDrawer.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  const drawerBtn = event.target.closest(".zenui_drawer_btn");\n' +
    '  const drawer = event.target.closest(".zenui_drawer");\n' +
    '\n' +
    '  if (!drawerBtn && !drawer) {\n' +
    '    openDrawer.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("keydown", handleKeydown);\n' +
    '  document.addEventListener("click", handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener("keydown", handleKeydown);\n' +
    '  document.removeEventListener("click", handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full flex items-center justify-center">\n' +
    '    <button\n' +
    '        class="px-4 py-2 bg-[#36af7b] zenui_drawer_btn text-white rounded-md"\n' +
    '        @click="openDrawer = true"\n' +
    '    >\n' +
    '      Open Drawer\n' +
    '    </button>\n' +
    '  </div>\n' +
    '\n' +
    '  <div\n' +
    '      :class="[\n' +
    '      openDrawer ? \'visible\' : \'invisible\',\n' +
    '      \'w-full h-screen fixed flex items-end justify-end top-0 left-0 z-[200000000] bg-black/10 backdrop-blur-[2px] dark:bg-black/40 transition-all duration-300\'\n' +
    '    ]"\n' +
    '  >\n' +
    '    <div\n' +
    '        :class="[\n' +
    '        openDrawer\n' +
    '          ? \'translate-y-[0px] opacity-100\'\n' +
    '          : \'translate-y-[200px] opacity-0\',\n' +
    '        \'w-full dark:bg-slate-800 bg-secondary zenui_drawer transition-all shadow-[0px_0px_20px_0px_rgb(0,0,0,0.1)] duration-300 mx-auto mt-8\'\n' +
    '      ]"\n' +
    '    >\n' +
    '      <div class="flex md:flex-row flex-col justify-between w-full gap-5 px-8 py-12">\n' +
    '        <p class="text-[1rem] dark:text-[#abc2d3] text-text w-full md:w-[70%]">\n' +
    '          This site uses cookies and related technologies, as\n' +
    '          described in our privacy policy, for purposes that may\n' +
    '          include site operation, analytics, enhanced user\n' +
    '          experience, or advertising. You may choose to consent to\n' +
    '          our use of these technologies, or manage your own\n' +
    '          preferences.\n' +
    '        </p>\n' +
    '\n' +
    '        <div class="flex items-end mt-5 justify-end gap-4 flex-col 1024px:flex-row w-full md:w-[20%]">\n' +
    '          <button\n' +
    '              class="py-2 w-full px-4 dark:border-slate-800 border-[#36af7b] border rounded-md outline-none bg-[#36af7b] text-[#fff]"\n' +
    '              @click="openDrawer = false"\n' +
    '          >\n' +
    '            Accept\n' +
    '          </button>\n' +
    '          <button\n' +
    '              class="py-2 w-full dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900/50 hover:bg-gray-100 px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"\n' +
    '              @click="openDrawer = false"\n' +
    '          >\n' +
    '            Decline\n' +
    '          </button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const DrawerLeftCodes = '<script setup>\n' +
    'import {onBeforeUnmount, onMounted, ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const openDrawer = ref(false);\n' +
    '\n' +
    'const handleKeydown = (event) => {\n' +
    '  if (event.key === "Escape") {\n' +
    '    openDrawer.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  const drawerBtn = event.target.closest(".zenui_drawer_btn");\n' +
    '  const drawer = event.target.closest(".zenui_drawer");\n' +
    '\n' +
    '  if (!drawerBtn && !drawer) {\n' +
    '    openDrawer.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("keydown", handleKeydown);\n' +
    '  document.addEventListener("click", handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener("keydown", handleKeydown);\n' +
    '  document.removeEventListener("click", handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <button\n' +
    '      class="px-4 py-2 zenUIRightModalButton zenui_drawer_btn bg-[#36af7b] text-white rounded-md"\n' +
    '      @click="openDrawer = true"\n' +
    '  >\n' +
    '    Open Drawer\n' +
    '  </button>\n' +
    '\n' +
    '  <div\n' +
    '      :class="[\n' +
    '      openDrawer ? \'visible\' : \'invisible\',\n' +
    '      \'w-full h-screen fixed bg-[rgb(0,0,0,0.2)] top-0 left-0 z-[200000000] backdrop-blur-[2px] dark:bg-black/40 transition-all duration-300\',\n' +
    '    ]"\n' +
    '  >\n' +
    '    <div\n' +
    '        :class="[\n' +
    '        openDrawer\n' +
    '          ? \'translate-x-[0px] opacity-100\'\n' +
    '          : \'translate-x-[-200px] opacity-0\',\n' +
    '        \'overflow-y-scroll zenui_drawer w-full md:w-[80%] lg:w-[40%] dark:bg-slate-800 h-screen bg-[#eceef6] transition-all duration-300\',\n' +
    '      ]"\n' +
    '    >\n' +
    '      <div class="w-full flex items-end p-4 justify-end">\n' +
    '        <Icon\n' +
    '            icon="akar-icons:cross"\n' +
    '            class="p-2.5 w-fit dark:text-slate-300 dark:hover:bg-slate-900/50 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-200 cursor-pointer"\n' +
    '            @click="openDrawer = false"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="flex items-start flex-col p-6 md:p-12 justify-between gap-8"\n' +
    '      >\n' +
    '        <div\n' +
    '            class="bg-[#fff] dark:bg-slate-900 min-h-screen rounded-md p-6 w-full"\n' +
    '        >\n' +
    '          <div\n' +
    '              class="flex items-center lg:flex-row flex-col justify-between w-full border-b border-[#d1d1d1] dark:border-slate-700 flex-wrap gap-y-6"\n' +
    '          >\n' +
    '            <div class="flex items-center flex-wrap gap-5">\n' +
    '              <span\n' +
    '                  class="text-[1rem] font-[500] text-[#36af7b] border-b border-[#36af7b] pb-3"\n' +
    '              >1.Cart</span\n' +
    '              >\n' +
    '              <span\n' +
    '                  class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#424242] pb-3"\n' +
    '              >2. Shipping & Payment</span\n' +
    '              >\n' +
    '              <span\n' +
    '                  class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#424242] pb-3"\n' +
    '              >3. Confimation</span\n' +
    '              >\n' +
    '            </div>\n' +
    '            <a href="#" class="underline text-[#36af7b] font-[500] pb-3"\n' +
    '            >Why is subscribing better?</a\n' +
    '            >\n' +
    '          </div>\n' +
    '\n' +
    '          <div\n' +
    '              class="mt-12 flex items-start dark:border-slate-700 border-b border-[#d1d1d1] pb-6 justify-between w-full"\n' +
    '          >\n' +
    '            <div class="flex items-start gap-5">\n' +
    '              <img\n' +
    '                  src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg"\n' +
    '                  alt="Still life of skincare products"\n' +
    '                  class="w-[90px] h-[60px] object-cover rounded-md"\n' +
    '              />\n' +
    '              <div>\n' +
    '                <h2 class="text-[1.2rem] font-[600] text-[#36af7b]">\n' +
    '                  Still life of skincare products\n' +
    '                </h2>\n' +
    '                <p class="text-[1rem] dark:text-slate-400 font-[500] text-[#424242]">\n' +
    '                  25 items\n' +
    '                </p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="flex items-center gap-12">\n' +
    '              <h3\n' +
    '                  class="text-[1.2rem] font-[600] dark:text-slate-400 text-[#6d6d6d]"\n' +
    '              >\n' +
    '                $32 <span class="text-[#36af7b] pl-1 line-through">$12</span>\n' +
    '              </h3>\n' +
    '              <Icon\n' +
    '                  icon="rx:cross-1"\n' +
    '                  class="text-[#6d6d6d] dark:text-slate-400 cursor-pointer"\n' +
    '              />\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="w-full mr-8">\n' +
    '          <div class="bg-[#fff] dark:bg-slate-900 rounded-md p-6">\n' +
    '            <h3\n' +
    '                class="text-[1rem] text-[#36af7b] dark:border-slate-700 font-[500] border-b border-[#d1d1d1] pb-4 text-center"\n' +
    '            >\n' +
    '              Order Summary\n' +
    '            </h3>\n' +
    '\n' +
    '            <div class="flex flex-col gap-5 mt-4">\n' +
    '              <div class="flex items-center justify-between w-full">\n' +
    '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Item Total</h4>\n' +
    '                <span class="text-[#424242] dark:text-[#abc2d3] font-[500]"\n' +
    '                >$180.00</span\n' +
    '                >\n' +
    '              </div>\n' +
    '              <div class="flex items-center justify-between w-full">\n' +
    '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">\n' +
    '                  Subcription savings (15% off)\n' +
    '                </h4>\n' +
    '                <span class="text-[#36af7b] font-[500]">- $18.00</span>\n' +
    '              </div>\n' +
    '              <div class="flex items-center justify-between w-full">\n' +
    '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Shipping</h4>\n' +
    '                <span class="text-[#36af7b] font-[500]">free</span>\n' +
    '              </div>\n' +
    '              <div\n' +
    '                  class="flex items-center dark:border-slate-700 justify-between w-full border-t border-[#d1d1d1] pt-4"\n' +
    '              >\n' +
    '                <h4\n' +
    '                    class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#424242]"\n' +
    '                >\n' +
    '                  Order Total\n' +
    '                </h4>\n' +
    '                <span class="text-[#424242] font-[500] dark:text-[#abc2d3]"\n' +
    '                >$200.00</span\n' +
    '                >\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <button\n' +
    '              class="w-full py-2 px-6 mt-6 tracking-widest bg-[#36af7b] rounded-md text-[#fff]"\n' +
    '          >\n' +
    '            Checkout\n' +
    '          </button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const DrawerRightCodes = [
    {
        id: "main",
        displayText: "DrawerRight.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {onBeforeUnmount, onMounted, ref} from "vue";\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import products from "./Data.js";\n' +
            '\n' +
            'const openDrawer = ref(false);\n' +
            '\n' +
            'const handleKeydown = (event) => {\n' +
            '  if (event.key === "Escape") {\n' +
            '    openDrawer.value = false;\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'const handleClickOutside = (e) => {\n' +
            '  if (\n' +
            '      !e.target.closest(".zenui_drawer_btn") &&\n' +
            '      !e.target.closest(".zenui_drawer")\n' +
            '  ) {\n' +
            '    openDrawer.value = false;\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'onMounted(() => {\n' +
            '  document.addEventListener("keydown", handleKeydown);\n' +
            '  document.addEventListener("click", handleClickOutside);\n' +
            '});\n' +
            '\n' +
            'onBeforeUnmount(() => {\n' +
            '  document.removeEventListener("keydown", handleKeydown);\n' +
            '  document.removeEventListener("click", handleClickOutside);\n' +
            '});\n' +
            '\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <button\n' +
            '      class="px-4 py-2 zenui_drawer_btn bg-[#36af7b] text-white rounded-md"\n' +
            '      @click="openDrawer = true"\n' +
            '  >\n' +
            '    Open Drawer\n' +
            '  </button>\n' +
            '\n' +
            '  <div\n' +
            '      :class="openDrawer ? \'visible\' : \'invisible\'"\n' +
            '      class="w-full h-screen fixed bg-[rgb(0,0,0,0.2)] top-0 left-0 backdrop-blur-[2px] z-[200000000] dark:bg-black/40 transition-all duration-300"\n' +
            '  >\n' +
            '    <div\n' +
            '        :class="\n' +
            '        openDrawer\n' +
            '          ? \'translate-x-[0px] opacity-100\'\n' +
            '          : \'translate-x-[200px] opacity-0\'\n' +
            '      "\n' +
            '        class="overflow-y-scroll zenui_drawer w-full md:w-[80%] lg:w-[40%] dark:bg-slate-800 h-screen bg-[#eceef6] transition-all duration-300 float-right"\n' +
            '    >\n' +
            '      <div class="w-full flex items-end p-4 justify-end">\n' +
            '        <Icon\n' +
            '            icon="akar-icons:cross"\n' +
            '            class="p-2.5 w-fit dark:text-slate-400 dark:hover:bg-slate-900/50 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"\n' +
            '            @click="openDrawer = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div\n' +
            '          class="flex items-start flex-col p-6 md:p-12 justify-between gap-8"\n' +
            '      >\n' +
            '        <div\n' +
            '            class="bg-[#fff] dark:bg-slate-900 min-h-screen rounded-md p-6 w-full"\n' +
            '        >\n' +
            '          <div\n' +
            '              class="flex items-center lg:flex-row flex-col justify-between w-full border-b border-[#d1d1d1] dark:border-slate-700 flex-wrap gap-y-6"\n' +
            '          >\n' +
            '            <div class="flex items-center gap-5">\n' +
            '              <span\n' +
            '                  class="text-[1rem] font-[500] text-[#36af7b] border-b border-[#36af7b] pb-3"\n' +
            '              >\n' +
            '                1.Cart\n' +
            '              </span>\n' +
            '              <span\n' +
            '                  class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#424242] pb-3"\n' +
            '              >\n' +
            '                2. Shipping & Payment\n' +
            '              </span>\n' +
            '              <span\n' +
            '                  class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#424242] pb-3"\n' +
            '              >\n' +
            '                3. Confirmation\n' +
            '              </span>\n' +
            '            </div>\n' +
            '            <a href="#" class="underline text-[#36af7b] font-[500] pb-3"\n' +
            '            >Why is subscribing better?</a\n' +
            '            >\n' +
            '          </div>\n' +
            '\n' +
            '          <div\n' +
            '              v-for="(product, index) in products"\n' +
            '              :key="index"\n' +
            '              class="mt-12 flex items-start dark:border-slate-700 border-b border-[#d1d1d1] pb-6 justify-between w-full"\n' +
            '          >\n' +
            '            <div class="flex items-start gap-5">\n' +
            '              <img\n' +
            '                  :src="product.src"\n' +
            '                  :alt="product.title"\n' +
            '                  class="w-[90px] h-[60px] object-cover rounded-md"\n' +
            '              />\n' +
            '              <div>\n' +
            '                <h2 class="text-[1.2rem] font-[600] text-[#36af7b]">\n' +
            '                  {{ product.title }}\n' +
            '                </h2>\n' +
            '                <p class="text-[1rem] dark:text-slate-400 font-[500] text-[#424242]">\n' +
            '                  {{ product.items }} items\n' +
            '                </p>\n' +
            '              </div>\n' +
            '            </div>\n' +
            '            <div class="flex items-center gap-12">\n' +
            '              <h3\n' +
            '                  class="text-[1.2rem] font-[600] dark:text-slate-400 text-[#6d6d6d]"\n' +
            '              >\n' +
            '                ${{ product.price }}\n' +
            '                <span class="text-[#36af7b] pl-1 line-through">${{ product.sale }}</span>\n' +
            '              </h3>\n' +
            '              <Icon\n' +
            '                  icon="akar-icons:cross"\n' +
            '                  class="text-[#6d6d6d] dark:text-slate-400 cursor-pointer"\n' +
            '              />\n' +
            '            </div>\n' +
            '          </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="w-full mr-8">\n' +
            '          <div class="bg-[#fff] dark:bg-slate-900 rounded-md p-6">\n' +
            '            <h3\n' +
            '                class="text-[1rem] text-[#36af7b] dark:border-slate-700 font-[500] border-b border-[#d1d1d1] pb-4 text-center"\n' +
            '            >\n' +
            '              Order Summary\n' +
            '            </h3>\n' +
            '            <div class="flex flex-col gap-5 mt-4">\n' +
            '              <div class="flex items-center justify-between w-full">\n' +
            '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Item Total</h4>\n' +
            '                <span class="text-[#424242] dark:text-[#abc2d3] font-[500]"\n' +
            '                >$180.00</span\n' +
            '                >\n' +
            '              </div>\n' +
            '              <div class="flex items-center justify-between w-full">\n' +
            '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">\n' +
            '                  Subscription savings (15% off)\n' +
            '                </h4>\n' +
            '                <span class="text-[#36af7b] font-[500]">- $18.00</span>\n' +
            '              </div>\n' +
            '              <div class="flex items-center justify-between w-full">\n' +
            '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Shipping</h4>\n' +
            '                <span class="text-[#36af7b] font-[500]">free</span>\n' +
            '              </div>\n' +
            '              <div\n' +
            '                  class="flex items-center dark:border-slate-700 justify-between w-full border-t border-[#d1d1d1] pt-4"\n' +
            '              >\n' +
            '                <h4\n' +
            '                    class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#424242]"\n' +
            '                >\n' +
            '                  Order Total\n' +
            '                </h4>\n' +
            '                <span class="text-[#424242] dark:text-[#abc2d3] font-[500]"\n' +
            '                >$200.00</span\n' +
            '                >\n' +
            '              </div>\n' +
            '            </div>\n' +
            '          </div>\n' +
            '          <button\n' +
            '              class="w-full py-2 px-6 mt-6 tracking-widest bg-[#36af7b] rounded-md text-[#fff]"\n' +
            '          >\n' +
            '            Checkout\n' +
            '          </button>\n' +
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
        code: 'export const products = [\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg",\n' +
            '    title: "Still life of skincare products",\n' +
            '    items: 25,\n' +
            '    price: 32,\n' +
            '    sale: 12,\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg",\n' +
            '    title: "Levitating music headphones display",\n' +
            '    items: 8,\n' +
            '    price: 32,\n' +
            '    sale: 12,\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg",\n' +
            '    title: "Set of aloe vera cosmetic products",\n' +
            '    items: 2,\n' +
            '    price: 32,\n' +
            '    sale: 12,\n' +
            '  },\n' +
            '];'
    },
]

export const FullScreenDrawerCodes = [
    {
        id: "main",
        displayText: "FullScreenDrawer.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {onBeforeUnmount, onMounted, ref} from "vue";\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import products from "./Data.js";\n' +
            '\n' +
            'const openDrawer = ref(false);\n' +
            '\n' +
            'const handleKeydown = (event) => {\n' +
            '  if (event.key === "Escape") {\n' +
            '    openDrawer.value = false;\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'const handleClickOutside = (e) => {\n' +
            '  if (\n' +
            '      !e.target.closest(".zenui_drawer_btn") &&\n' +
            '      !e.target.closest(".zenui_drawer")\n' +
            '  ) {\n' +
            '    openDrawer.value = false;\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'onMounted(() => {\n' +
            '  document.addEventListener("keydown", handleKeydown);\n' +
            '  document.addEventListener("click", handleClickOutside);\n' +
            '});\n' +
            '\n' +
            'onBeforeUnmount(() => {\n' +
            '  document.removeEventListener("keydown", handleKeydown);\n' +
            '  document.removeEventListener("click", handleClickOutside);\n' +
            '});\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full flex items-center justify-center">\n' +
            '    <button\n' +
            '        class="px-4 py-2 bg-[#36af7b] zenui_drawer_btn text-white rounded-md"\n' +
            '        @click="openDrawer = true"\n' +
            '    >\n' +
            '      Open Drawer\n' +
            '    </button>\n' +
            '  </div>\n' +
            '\n' +
            '  <div\n' +
            '      :class="openDrawer ? \'visible\' : \'invisible\'"\n' +
            '      class="w-full h-screen fixed flex items-end justify-end top-0 left-0 z-[200000000] dark:bg-black/40 transition-all duration-300"\n' +
            '  >\n' +
            '    <div\n' +
            '        :class="openDrawer ? \'translate-y-[0px] opacity-100\' : \'translate-y-[200px] opacity-0\'"\n' +
            '        class="overflow-y-scroll w-full h-full dark:bg-slate-800 zenui_drawer bg-[#eceef6] transition-all shadow-[#36af7b] duration-300 mx-auto mt-8"\n' +
            '    >\n' +
            '      <div class="w-full flex items-end p-4 justify-end">\n' +
            '        <Icon\n' +
            '            icon="akar-icons:cross"\n' +
            '            class="p-2.5 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"\n' +
            '            @click="openDrawer = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="flex items-start lg:flex-row flex-col justify-between gap-8">\n' +
            '        <div class="bg-[#fff] dark:bg-slate-900 min-h-screen rounded-md p-6 w-full lg:w-[70%]">\n' +
            '          <div\n' +
            '              class="flex items-center lg:flex-row flex-col justify-between dark:border-slate-700 w-full border-b border-[#d1d1d1]">\n' +
            '            <div class="flex items-center gap-5">\n' +
            '              <span class="text-[1rem] font-[500] text-[#36af7b] border-b border-[#36af7b] pb-3">\n' +
            '                1.Cart\n' +
            '              </span>\n' +
            '              <span class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text pb-3">\n' +
            '                2. Shipping & Payment\n' +
            '              </span>\n' +
            '              <span class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text pb-3">\n' +
            '                3. Confirmation\n' +
            '              </span>\n' +
            '            </div>\n' +
            '            <a href="#" class="underline text-[#36af7b] font-[500] pb-3">Why is subscribing better?</a>\n' +
            '          </div>\n' +
            '\n' +
            '          <div\n' +
            '              v-for="(product, index) in products"\n' +
            '              :key="index"\n' +
            '              class="mt-12 flex items-start border-b dark:border-slate-700 border-[#d1d1d1] pb-6 justify-between w-full"\n' +
            '          >\n' +
            '            <div class="flex items-start gap-5">\n' +
            '              <img :src="product.src" :alt="product.title" class="w-[90px] h-[60px] object-cover rounded-md"/>\n' +
            '              <div>\n' +
            '                <h2 class="text-[1.2rem] font-[600] text-[#36af7b]">{{ product.title }}</h2>\n' +
            '                <p class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text">{{ product.items }} items</p>\n' +
            '              </div>\n' +
            '            </div>\n' +
            '            <div class="flex items-center gap-12">\n' +
            '              <h3 class="text-[1.2rem] font-[600] dark:text-slate-500 text-[#6d6d6d]">\n' +
            '                ${{ product.price }} <span class="text-[#36af7b] pl-1 line-through">${{ product.sale }}</span>\n' +
            '              </h3>\n' +
            '              <Icon icon="akar-icons:cross" class="text-[#6d6d6d] dark:text-slate-400 cursor-pointer"/>\n' +
            '            </div>\n' +
            '          </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="w-full lg:w-[30%] mr-8">\n' +
            '          <div class="bg-[#fff] dark:bg-slate-900 rounded-md p-6">\n' +
            '            <h3 class="text-[1rem] text-[#36af7b] font-[500] dark:border-slate-700 border-b border-[#d1d1d1] pb-4 text-center">\n' +
            '              Order Summary\n' +
            '            </h3>\n' +
            '            <div class="flex flex-col gap-5 mt-4">\n' +
            '              <div class="flex items-center justify-between w-full">\n' +
            '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Item Total</h4>\n' +
            '                <span class="text-text dark:text-[#abc2d3] font-[500]">$180.00</span>\n' +
            '              </div>\n' +
            '              <div class="flex items-center justify-between w-full">\n' +
            '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Subscription savings (15% off)</h4>\n' +
            '                <span class="text-[#36af7b] font-[500]">- $18.00</span>\n' +
            '              </div>\n' +
            '              <div class="flex items-center justify-between w-full">\n' +
            '                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Shipping</h4>\n' +
            '                <span class="text-[#36af7b] font-[500]">free</span>\n' +
            '              </div>\n' +
            '              <div\n' +
            '                  class="flex items-center dark:border-slate-700 justify-between w-full border-t border-[#d1d1d1] pt-4">\n' +
            '                <h4 class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text">Order Total</h4>\n' +
            '                <span class="text-text dark:text-[#abc2d3] font-[500]">$200.00</span>\n' +
            '              </div>\n' +
            '            </div>\n' +
            '          </div>\n' +
            '          <button class="w-full py-2 px-6 mt-6 tracking-widest bg-[#36af7b] rounded-md text-[#fff]">\n' +
            '            Checkout\n' +
            '          </button>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "data",
        displayText: "ProductData.js",
        language: "js",
        code: 'export const products = [\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg",\n' +
            '    title: "Still life of skincare products",\n' +
            '    items: 25,\n' +
            '    price: 32,\n' +
            '    sale: 12,\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg",\n' +
            '    title: "Levitating music headphones display",\n' +
            '    items: 8,\n' +
            '    price: 32,\n' +
            '    sale: 12,\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg",\n' +
            '    title: "Set of aloe vera cosmetic products",\n' +
            '    items: 2,\n' +
            '    price: 32,\n' +
            '    sale: 12,\n' +
            '  },\n' +
            '];'
    },
]