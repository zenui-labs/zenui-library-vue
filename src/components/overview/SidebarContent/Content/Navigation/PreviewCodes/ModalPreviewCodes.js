export const AlertModalCodes = [
    {
        id: "main",
        displayText: "App.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false); // toggle your global state for modal open from a separate component\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full flex items-center justify-center">\n' +
            '    <button\n' +
            '        class="px-4 py-2 bg-[#36af7b] text-white rounded-lg"\n' +
            '        @click="modalOpen = true"\n' +
            '    >\n' +
            '      Open Modal\n' +
            '    </button>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "modal",
        displayText: "Modal.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false);\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div\n' +
            '      :class="`${\n' +
            '              modalOpen\n' +
            '                ? \' scale-[1] opacity-100\'\n' +
            '                : \' scale-[0] opacity-0\'\n' +
            '            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`"\n' +
            '  >\n' +
            '    <div\n' +
            '        class="w-[90%] lg:w-[30%] dark:bg-slate-800 relative bg-white rounded-lg p-6"\n' +
            '    >\n' +
            '      <div class="w-full flex justify-between">\n' +
            '        <div>\n' +
            '          <h2 class="text-[1.7rem] dark:text-[#abc2d3] font-[500] text-[#202020]">\n' +
            '            Are you sure about it?\n' +
            '          </h2>\n' +
            '          <p class="text-[1rem] dark:text-[#abc2d3]/80 text-[#525252]">\n' +
            '            you can\'t undo this action\n' +
            '          </p>\n' +
            '        </div>\n' +
            '\n' +
            '        <Icon\n' +
            '            icon="radix-icons:cross-2"\n' +
            '            class="p-2 text-[2.5rem] absolute top-2 right-2 dark:text-[#abc2d3]/80 dark:hover:bg-slate-900/70 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"\n' +
            '            @click="modalOpen = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="flex items-center gap-2 lg:gap-3 w-full justify-end mt-6">\n' +
            '        <button\n' +
            '            class="px-4 py-2 dark:hover:bg-slate-900/50 hover:bg-gray-100 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-200 rounded-lg text-[#585858]"\n' +
            '            @click="modalOpen = false"\n' +
            '        >\n' +
            '          Cancel\n' +
            '        </button>\n' +
            '        <button\n' +
            '            class="px-4 py-2 bg-[#36af7b] rounded-lg text-white"\n' +
            '            @click="modalOpen = false"\n' +
            '        >\n' +
            '          Confirm\n' +
            '        </button>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
]

export const SuccessModalCodes = [
    {
        id: "main",
        displayText: "App.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false); // toggle your global state for modal open from a separate component\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full flex items-center justify-center">\n' +
            '    <button\n' +
            '        class="px-4 py-2 bg-[#36af7b] text-white rounded-lg"\n' +
            '        @click="modalOpen = true"\n' +
            '    >\n' +
            '      Open Modal\n' +
            '    </button>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "modal",
        displayText: "Modal.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false);\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div\n' +
            '      :class="`${\n' +
            '              modalOpen ? \' visible\' : \' invisible\'\n' +
            '            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`"\n' +
            '  >\n' +
            '    <div\n' +
            '        :class="`${\n' +
            '                modalOpen\n' +
            '                  ? \' scale-[1] opacity-100\'\n' +
            '                  : \' scale-[0] opacity-0\'\n' +
            '              } w-[90%] md:w-[80%] lg:w-[30%] dark:bg-slate-800 bg-white rounded-lg p-4 transition-all duration-300`"\n' +
            '    >\n' +
            '      <div class="w-full flex items-end justify-end">\n' +
            '        <Icon\n' +
            '            icon="radix-icons:cross-2"\n' +
            '            class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"\n' +
            '            @click="modalOpen = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="w-full flex items-center justify-center flex-col">\n' +
            '        <h2 class="text-[#2cac9f] text-[2rem] font-[500]">\n' +
            '          Success!\n' +
            '        </h2>\n' +
            '        <Icon\n' +
            '            icon="ion:checkmark-done-circle-outline"\n' +
            '            class="p-2 text-[6rem] text-[#2cac9f]"\n' +
            '        />\n' +
            '\n' +
            '        <p class="text-[1.5rem] text-gray-900 dark:text-[#abc2d3] text-center mt-4 mb-2">\n' +
            '          Thank you for <br/>\n' +
            '          <span class="font-[600]">Subscribing</span>\n' +
            '        </p>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
]

export const InfoModalCodes = [
    {
        id: "main",
        displayText: "App.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false); // toggle your global state for modal open from a separate component\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full flex items-center justify-center">\n' +
            '    <button\n' +
            '        class="px-4 py-2 bg-[#36af7b] text-white rounded-lg"\n' +
            '        @click="modalOpen = true"\n' +
            '    >\n' +
            '      Open Modal\n' +
            '    </button>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "modal",
        displayText: "Modal.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false);\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div\n' +
            '      :class="`${\n' +
            '              modalOpen ? \' visible\' : \' invisible\'\n' +
            '            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-all duration-300`"\n' +
            '  >\n' +
            '    <div\n' +
            '        :class="`${\n' +
            '                modalOpen\n' +
            '                  ? \' translate-y-[0px] opacity-100\'\n' +
            '                  : \' translate-y-[-200px] opacity-0\'\n' +
            '              } w-[80%] md:w-[90%] lg:w-[40%] bg-white dark:bg-slate-800 rounded-lg transition-all duration-300 mx-auto mt-8`"\n' +
            '    >\n' +
            '      <div\n' +
            '          class="w-full flex items-end p-4 justify-between dark:border-slate-700 border-b border-gray-200"\n' +
            '      >\n' +
            '        <h1 class="text-[1.5rem] dark:text-[#abc2d3] font-bold">Modal Header</h1>\n' +
            '        <Icon\n' +
            '            icon="radix-icons:cross-2"\n' +
            '            class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"\n' +
            '            @click="modalOpen = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="p-4 border-b dark:border-slate-700 border-gray-200">\n' +
            '        <p class="text-[1rem] dark:text-[#abc2d3] text-text">\n' +
            '          Woohoo, you are reading this text in a modal!\n' +
            '        </p>\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="flex items-end justify-end gap-4 p-4">\n' +
            '        <button\n' +
            '            class="py-2 px-4 dark:hover:bg-slate-900/50 hover:bg-gray-100 border dark:text-[#abc2d3] dark:border-slate-700 border-gray-200 rounded-lg outline-none text-[#353535]"\n' +
            '            @click="modalOpen = false"\n' +
            '        >\n' +
            '          Cancel\n' +
            '        </button>\n' +
            '        <button\n' +
            '            class="py-2 px-4 border dark:border-slate-800 border-gray-200 rounded-lg outline-none bg-[#36af7b] text-[#fff]"\n' +
            '            @click="modalOpen = false"\n' +
            '        >\n' +
            '          Confirm\n' +
            '        </button>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
]

export const PermissionModalCodes = [
    {
        id: "main",
        displayText: "App.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false); // toggle your global state for modal open from a separate component\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full flex items-center justify-center">\n' +
            '    <button\n' +
            '        class="px-4 py-2 bg-[#36af7b] text-white rounded-lg"\n' +
            '        @click="modalOpen = true"\n' +
            '    >\n' +
            '      Open Modal\n' +
            '    </button>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "modal",
        displayText: "Modal.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false);\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div\n' +
            '      :class="`${\n' +
            '              modalOpen ? \' visible\' : \' invisible\'\n' +
            '            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`"\n' +
            '  >\n' +
            '    <div\n' +
            '        :class="`${\n' +
            '                modalOpen\n' +
            '                  ? \' scale-[1] opacity-100\'\n' +
            '                  : \' scale-[0] opacity-0\'\n' +
            '              } w-[90%] md:w-[80%] lg:w-[45%] dark:bg-slate-800 bg-white rounded-lg transition-all duration-300 mx-auto mt-8`"\n' +
            '    >\n' +
            '      <div\n' +
            '          class="w-full flex items-end p-4 justify-between dark:border-slate-700 border-b border-gray-200"\n' +
            '      >\n' +
            '        <h1 class="text-[1.5rem] font-bold dark:text-[#abc2d3]">\n' +
            '          Terms of Service\n' +
            '        </h1>\n' +
            '        <Icon\n' +
            '            icon="radix-icons:cross-2"\n' +
            '            class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"\n' +
            '            @click="modalOpen = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="p-4 border-b dark:border-slate-700 border-gray-200">\n' +
            '        <p class="text-[1.2rem] dark:text-[#abc2d3] text-text">\n' +
            '          With less than a month to go before the European Union\n' +
            '          enacts new consumer privacy laws for its citizens,\n' +
            '          companies around the world are updating their terms of\n' +
            '          service agreements to comply.\n' +
            '        </p>\n' +
            '\n' +
            '        <p class="text-[1.2rem] dark:text-[#abc2d3] text-[#424242] mt-8">\n' +
            '          The European Union\'s General Data Protection Regulation\n' +
            '          (G.D.P.R.) goes into effect on May 25 and is meant to\n' +
            '          ensure a common set of data rights in the European\n' +
            '          Union. It requires organizations to notify users as soon\n' +
            '          as possible of high-risk data breaches that could\n' +
            '          personally affect them.\n' +
            '        </p>\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="flex items-center gap-4 p-4">\n' +
            '        <button\n' +
            '            class="py-2 px-4 rounded-lg outline-none bg-[#36af7b] hover:bg-[#36af7b]/90 text-[#fff]"\n' +
            '            @click="modalOpen = false"\n' +
            '        >\n' +
            '          I Accept\n' +
            '        </button>\n' +
            '        <button\n' +
            '            class="py-2 px-4 dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900/50 hover:bg-gray-100 border border-gray-200 rounded-lg outline-none text-[#353535]"\n' +
            '            @click="modalOpen = false"\n' +
            '        >\n' +
            '          Decline\n' +
            '        </button>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
]

export const FormModalCodes = [
    {
        id: "main",
        displayText: "App.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false); // toggle your global state for modal open from a separate component\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full flex items-center justify-center">\n' +
            '    <button\n' +
            '        class="px-4 py-2 bg-[#36af7b] text-white rounded-lg"\n' +
            '        @click="modalOpen = true"\n' +
            '    >\n' +
            '      Open Modal\n' +
            '    </button>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "modal",
        displayText: "Modal.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false);\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div\n' +
            '      :class="`${\n' +
            '              modalOpen ? \' visible\' : \' invisible\'\n' +
            '            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`"\n' +
            '  >\n' +
            '    <div\n' +
            '        :class="`${\n' +
            '                modalOpen\n' +
            '                  ? \' scale-[1] opacity-100\'\n' +
            '                  : \' scale-[0] opacity-0\'\n' +
            '              } w-[90%] md:w-[80%] lg:w-[35%] dark:bg-slate-800 bg-white rounded-lg transition-all duration-300 mx-auto mt-8`"\n' +
            '    >\n' +
            '      <div\n' +
            '          class="w-full flex items-end p-4 justify-between border-b dark:border-slate-700 border-gray-200"\n' +
            '      >\n' +
            '        <h1 class="text-[1.5rem] dark:text-[#abc2d3] font-bold">\n' +
            '          Sign in to our platform\n' +
            '        </h1>\n' +
            '        <Icon\n' +
            '            icon="radix-icons:cross-2"\n' +
            '            class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"\n' +
            '            @click="modalOpen = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <form class="flex flex-col gap-5 p-4">\n' +
            '        <div>\n' +
            '          <label\n' +
            '              for="email"\n' +
            '              class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#464646]"\n' +
            '          >\n' +
            '            Email\n' +
            '          </label>\n' +
            '          <input\n' +
            '              type="email"\n' +
            '              name="email"\n' +
            '              id="email"\n' +
            '              placeholder="zenuilibrary@gmail.com"\n' +
            '              class="py-2 px-3 border dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-gray-200 rounded-lg w-full focus:outline-none mt-1 focus:border-[#36af7b]"\n' +
            '          />\n' +
            '        </div>\n' +
            '\n' +
            '        <div>\n' +
            '          <label\n' +
            '              for="password"\n' +
            '              class="text-[1rem] font-[500] dark:text-[#abc2d3] text-[#464646]"\n' +
            '          >\n' +
            '            Password\n' +
            '          </label>\n' +
            '          <input\n' +
            '              type="password"\n' +
            '              name="password"\n' +
            '              id="password"\n' +
            '              placeholder="**********"\n' +
            '              class="py-2 px-3 border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] rounded-lg w-full focus:outline-none mt-1 focus:border-[#36af7b]"\n' +
            '          />\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="flex items-center justify-between w-full">\n' +
            '          <div class="flex items-center gap-2">\n' +
            '            <input\n' +
            '                type="checkbox"\n' +
            '                name="checkbox"\n' +
            '                id="checkbox"\n' +
            '                class="w-[17px] h-[17px]"\n' +
            '            />\n' +
            '            <label for="checkbox" class="dark:text-[#abc2d3]">Remember me</label>\n' +
            '          </div>\n' +
            '\n' +
            '          <a href="#" class="text-[#36af7b] hover:underline font-[400] text-[1rem]">\n' +
            '            Forget Password\n' +
            '          </a>\n' +
            '        </div>\n' +
            '\n' +
            '        <button\n' +
            '            type="submit"\n' +
            '            class="py-2 px-4 w-full bg-[#36af7b] text-[#fff] rounded-lg"\n' +
            '        >\n' +
            '          Sign In\n' +
            '        </button>\n' +
            '      </form>\n' +
            '\n' +
            '      <div class="flex items-center justify-center w-full pb-4">\n' +
            '        <p class="text-[1rem] font-[400] dark:text-[#abc2d3] text-[#464646c]">\n' +
            '          Not have any account?\n' +
            '          <a href="#" class="text-[#36af7b] underline">\n' +
            '            Sign Up\n' +
            '          </a>\n' +
            '        </p>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
]

export const DeleteModalCodes = [
    {
        id: "main",
        displayText: "App.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false); // toggle your global state for modal open from a separate component\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full flex items-center justify-center">\n' +
            '    <button\n' +
            '        class="px-4 py-2 bg-[#36af7b] text-white rounded-lg"\n' +
            '        @click="modalOpen = true"\n' +
            '    >\n' +
            '      Open Modal\n' +
            '    </button>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "modal",
        displayText: "Modal.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {ref} from "vue";\n' +
            '\n' +
            'const modalOpen = ref(false);\n' +
            'const disabledButton = ref(true);\n' +
            '\n' +
            'const checkInputChange = (event) => {\n' +
            '  disabledButton.value = event.target.value !== \'DELETE\';\n' +
            '};\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div\n' +
            '      :class="`${\n' +
            '              modalOpen ? \' visible\' : \' invisible\'\n' +
            '            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`"\n' +
            '  >\n' +
            '    <div\n' +
            '        :class="`${\n' +
            '                modalOpen\n' +
            '                  ? \' scale-[1] opacity-100\'\n' +
            '                  : \' scale-[0] opacity-0\'\n' +
            '              } w-[90%] md:w-[80%] lg:w-[30%] dark:bg-slate-800 bg-white rounded-lg p-5 transition-all duration-300 z-[999]`"\n' +
            '    >\n' +
            '      <div class="w-full flex items-center justify-between">\n' +
            '        <h2 class="text-[#000] dark:text-[#abc2d3] text-[1.3rem] font-[500]">\n' +
            '          Delete Modal\n' +
            '        </h2>\n' +
            '        <Icon\n' +
            '            icon="radix-icons:cross-2"\n' +
            '            class="p-2 text-[2rem] dark:text-slate-400 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-lg transition-all duration-300 cursor-pointer"\n' +
            '            @click="modalOpen = false"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div class="w-full">\n' +
            '        <p class="text-text dark:text-slate-400 text-[1rem] font-[400]">\n' +
            '          Are You sure want to delete it?\n' +
            '        </p>\n' +
            '\n' +
            '        <div class="mt-5">\n' +
            '          <label class="font-[400] dark:text-[#abc2d3] text-black">\n' +
            '            Type <b>"DELETE"</b> to confirm\n' +
            '          </label>\n' +
            '          <br/>\n' +
            '          <input\n' +
            '              @input="checkInputChange"\n' +
            '              type="text"\n' +
            '              class="py-3 px-4 dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] border border-gray-200 rounded-lg-md mt-1 w-full outline-none focus:border-[#36af7b]"\n' +
            '          />\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="mt-8 flex w-full items-end justify-end gap-[13px]">\n' +
            '          <button\n' +
            '              @click="modalOpen = false"\n' +
            '              class="py-2 px-6 dark:border-slate-700 dark:text-[#abc2d3] hover:bg-gray-50 dark:hover:bg-slate-700/50 rounded-lg font-[500] z-10 border border-[#cecece] text-gray-500"\n' +
            '          >\n' +
            '            Cancel\n' +
            '          </button>\n' +
            '          <button\n' +
            '              @click="modalOpen = false"\n' +
            '              :class="`py-2 px-6 border rounded-lg font-[500] ${\n' +
            '                      disabledButton\n' +
            '                        ? \'!bg-[#FDECEB] dark:!bg-red-800/30 dark:!border-red-900/30 dark:text-slate-500 !border-[#FDECEB] text-red-200 cursor-not-allowed\'\n' +
            '                        : \'bg-red-600 text-white border-red-600\'\n' +
            '                    }`"\n' +
            '              :disabled="disabledButton"\n' +
            '          >\n' +
            '            Yes, Delete\n' +
            '          </button>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
]