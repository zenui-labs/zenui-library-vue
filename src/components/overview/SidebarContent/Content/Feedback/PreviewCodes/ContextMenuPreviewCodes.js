export const ContextMenuCodes = [
    {
        id: "main",
        displayText: "ContextMenu.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {onMounted, onUnmounted, ref, watch} from "vue";\n' +
            'import {menuItems} from "./Data.js";\n' +
            '\n' +
            'const showMenu = ref(false);\n' +
            'const menuPosition = ref({x: 0, y: 0});\n' +
            'const menuHeight = ref(\'0px\');\n' +
            '\n' +
            'const handleContextMenu = (e) => {\n' +
            '  e.preventDefault();\n' +
            '  showMenu.value = true;\n' +
            '  menuPosition.value = {x: e.pageX, y: e.pageY};\n' +
            '};\n' +
            '\n' +
            'const handleClick = () => {\n' +
            '  if (showMenu.value) {\n' +
            '    menuHeight.value = \'0px\';\n' +
            '    setTimeout(() => (showMenu.value = false), 200);\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'onMounted(() => {\n' +
            '  document.addEventListener(\'click\', handleClick);\n' +
            '});\n' +
            '\n' +
            'onUnmounted(() => {\n' +
            '  document.removeEventListener(\'click\', handleClick);\n' +
            '});\n' +
            '\n' +
            'watch(showMenu, (newVal) => {\n' +
            '  if (newVal) {\n' +
            '    setTimeout(() => {\n' +
            '      const menuElement = document.getElementById(\'context-menu\');\n' +
            '      if (menuElement) {\n' +
            '        menuHeight.value = `${menuElement.scrollHeight}px`;\n' +
            '      }\n' +
            '    }, 0);\n' +
            '  }\n' +
            '});\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <p\n' +
            '      @contextmenu="handleContextMenu"\n' +
            '      class="w-full lg:w-[80%] cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] bg-gray-50 border-gray-300 rounded-md border p-4 text-[1rem]"\n' +
            '  >\n' +
            '    ZENUI LIBRARY - Free Templates & Components Library. Elevate your\n' +
            '    project with free UI components, customizable icons, and a color\n' +
            '    palette. No dependencies required\n' +
            '  </p>\n' +
            '\n' +
            '  <div\n' +
            '      v-if="showMenu"\n' +
            '      id="context-menu"\n' +
            '      class="fixed bg-white overflow-hidden dark:bg-slate-800 dark:border-slate-700 transition-all duration-200 shadow-md rounded-lg p-1 w-48 border border-gray-200"\n' +
            '      :style="{\n' +
            '              top: menuPosition.y + \'px\',\n' +
            '              left: menuPosition.x + \'px\',\n' +
            '              height: menuHeight,\n' +
            '              zIndex: 50,\n' +
            '            }"\n' +
            '  >\n' +
            '    <button\n' +
            '        v-for="(item, index) in menuItems"\n' +
            '        :key="index"\n' +
            '        @click.stop="\n' +
            '                () => {\n' +
            '                  item.action();\n' +
            '                  showMenu = false;\n' +
            '                }\n' +
            '              "\n' +
            '        :class="[\n' +
            '                item.label === \'Delete\' &&\n' +
            '                  \'hover:bg-red-50 dark:hover:bg-red-900/30\',\n' +
            '                \'w-full px-4 py-2 text-left dark:hover:bg-slate-900/50 hover:bg-gray-100 rounded-lg flex items-center gap-3 text-sm text-gray-600 dark:text-[#abc2d3]\',\n' +
            '              ]"\n' +
            '    >\n' +
            '      <Icon\n' +
            '          :icon="item.icon"\n' +
            '          :class="[\n' +
            '                  item.label === \'Delete\' && \'dark:text-red-500 text-red-500\',\n' +
            '                  \'text-[1.2rem] dark:text-[#abc2d3] text-gray-600\',\n' +
            '                ]"\n' +
            '      />\n' +
            '      <span\n' +
            '          :class="[item.label === \'Delete\' && \'text-red-500\']"\n' +
            '      >\n' +
            '        {{ item.label }}\n' +
            '      </span>\n' +
            '    </button>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const menuItems = [\n' +
            '  {\n' +
            '    icon: \'mingcute:copy-line\',\n' +
            '    label: \'Copy\',\n' +
            '    action: () => console.log(\'Copy clicked\'),\n' +
            '  },\n' +
            '  {\n' +
            '    icon: \'mdi:link-variant\',\n' +
            '    label: \'Copy Link\',\n' +
            '    action: () => console.log(\'Copy Link clicked\'),\n' +
            '  },\n' +
            '  {\n' +
            '    icon: \'majesticons:share-line\',\n' +
            '    label: \'Share\',\n' +
            '    action: () => console.log(\'Share clicked\'),\n' +
            '  },\n' +
            '  {\n' +
            '    icon: \'lucide:pencil\',\n' +
            '    label: \'Rename\',\n' +
            '    action: () => console.log(\'Rename clicked\'),\n' +
            '  },\n' +
            '  {\n' +
            '    icon: \'material-symbols:delete-outline\',\n' +
            '    label: \'Delete\',\n' +
            '    action: () => console.log(\'Delete clicked\'),\n' +
            '  },\n' +
            '];'
    },
]

export const DropdownContextMenuCodes = [
    {
        id: "main",
        displayText: "ContextMenu.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {onMounted, onUnmounted, ref, watch} from "vue";\n' +
            'import {menuItems} from "./Data.js";\n' +
            '\n' +
            'const showMenu = ref(false);\n' +
            'const menuPosition = ref({x: 0, y: 0});\n' +
            'const menuHeight = ref(\'0px\');\n' +
            'const subMenuHeight = ref(\'0px\');\n' +
            'const showSubmenu = ref(false);\n' +
            '\n' +
            'const handleContextMenu = (e) => {\n' +
            '  e.preventDefault();\n' +
            '  showMenu.value = true;\n' +
            '  menuPosition.value = {x: e.pageX, y: e.pageY};\n' +
            '};\n' +
            '\n' +
            'const handleClick = () => {\n' +
            '  if (showMenu.value) {\n' +
            '    menuHeight.value = \'0px\';\n' +
            '    setTimeout(() => (showMenu.value = false), 200);\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'onMounted(() => {\n' +
            '  document.addEventListener(\'click\', handleClick);\n' +
            '});\n' +
            '\n' +
            'onUnmounted(() => {\n' +
            '  document.removeEventListener(\'click\', handleClick);\n' +
            '});\n' +
            '\n' +
            'watch(showMenu, (newVal) => {\n' +
            '  if (newVal) {\n' +
            '    setTimeout(() => {\n' +
            '      const menuElement2 = document.getElementById(\'context-menu2\');\n' +
            '      if (menuElement2) {\n' +
            '        menuHeight.value = `${menuElement2.scrollHeight}px`;\n' +
            '      }\n' +
            '    }, 0);\n' +
            '  }\n' +
            '});\n' +
            '\n' +
            'watch(showSubmenu, (newVal) => {\n' +
            '  if (newVal) {\n' +
            '    setTimeout(() => {\n' +
            '      const subMenuElement = document.getElementById(\'sub-menu\');\n' +
            '      if (subMenuElement) {\n' +
            '        subMenuHeight.value = `${subMenuElement.scrollHeight}px`;\n' +
            '      }\n' +
            '    }, 0);\n' +
            '  }\n' +
            '});\n' +
            '\n' +
            'const handleItemClick = (item) => {\n' +
            '  if (!item.submenu) {\n' +
            '    item.action?.();\n' +
            '  }\n' +
            '};\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <p\n' +
            '      @contextmenu="handleContextMenu"\n' +
            '      class="w-full lg:w-[80%] cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/10 border-[#36af7b] rounded-md border p-4 text-[1rem]"\n' +
            '  >\n' +
            '    ZENUI LIBRARY - Free Templates & Components Library. Elevate your\n' +
            '    project with free UI components, customizable icons, and a color\n' +
            '    palette. No dependencies required\n' +
            '  </p>\n' +
            '\n' +
            '  <div\n' +
            '      v-if="showMenu"\n' +
            '      id="context-menu2"\n' +
            '      :class="[\n' +
            '              showSubmenu ? \'overflow-visible\' : \'overflow-hidden\',\n' +
            '              \'fixed bg-white transition-all dark:bg-slate-800 dark:border-slate-700 duration-200 shadow-md rounded-lg p-1 w-48 border border-gray-200\',\n' +
            '            ]"\n' +
            '      :style="{\n' +
            '              top: menuPosition.y + \'px\',\n' +
            '              left: menuPosition.x + \'px\',\n' +
            '              height: menuHeight,\n' +
            '              zIndex: 50,\n' +
            '            }"\n' +
            '  >\n' +
            '    <div\n' +
            '        v-for="(item, index) in menuItems"\n' +
            '        :key="item.id || index"\n' +
            '        class="relative"\n' +
            '        @mouseenter="item.hasSubmenu && (showSubmenu = true)"\n' +
            '        @mouseleave="\n' +
            '                () => {\n' +
            '                  if (item.hasSubmenu) {\n' +
            '                    showSubmenu = false;\n' +
            '                    subMenuHeight = \'0px\';\n' +
            '                  }\n' +
            '                }\n' +
            '              "\n' +
            '    >\n' +
            '      <button\n' +
            '          @click="handleItemClick(item)"\n' +
            '          :class="[\n' +
            '                  item.label === \'Delete\'\n' +
            '                    ? \'hover:bg-red-50 dark:hover:bg-red-900/20\'\n' +
            '                    : \'hover:bg-gray-100 dark:hover:bg-slate-900/50\',\n' +
            '                  \'w-full px-4 py-2 text-left rounded-lg flex items-center text-gray-600 dark:text-[#abc2d3] justify-between text-sm\',\n' +
            '                ]"\n' +
            '      >\n' +
            '        <div class="flex items-center gap-3">\n' +
            '          <Icon\n' +
            '              :icon="item.icon"\n' +
            '              :class="[\n' +
            '                      item.label === \'Delete\' &&\n' +
            '                        \'dark:text-red-500 text-red-500\',\n' +
            '                      \'text-[1.2rem] dark:text-[#abc2d3] text-gray-600\',\n' +
            '                    ]"\n' +
            '          />\n' +
            '          <p\n' +
            '              :class="[item.label === \'Delete\' && \'text-red-500\']"\n' +
            '          >\n' +
            '            {{ item.label }}\n' +
            '          </p>\n' +
            '        </div>\n' +
            '        <Icon\n' +
            '            v-if="item.hasSubmenu"\n' +
            '            icon="mdi:chevron-right"\n' +
            '            class="w-4 h-4 text-gray-400"\n' +
            '        />\n' +
            '      </button>\n' +
            '\n' +
            '      <div\n' +
            '          v-if="item.hasSubmenu && showSubmenu"\n' +
            '          id="sub-menu"\n' +
            '          class="absolute overflow-hidden transition-all duration-200 left-full top-0 bg-white shadow-md dark:bg-slate-800 dark:border-slate-700 rounded-lg p-1 w-48 border border-gray-200 ml-1.5"\n' +
            '          :style="{\n' +
            '                  height: subMenuHeight,\n' +
            '                }"\n' +
            '      >\n' +
            '        <button\n' +
            '            v-for="(subItem, subIndex) in item.submenu"\n' +
            '            :key="subIndex"\n' +
            '            @click="\n' +
            '                    () => {\n' +
            '                      subItem.action?.();\n' +
            '                      showSubmenu = false;\n' +
            '                    }\n' +
            '                  "\n' +
            '            class="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg flex items-center gap-3 text-sm dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600"\n' +
            '        >\n' +
            '          <Icon\n' +
            '              :icon="subItem.icon"\n' +
            '              :class="[\n' +
            '                      subItem.label === \'Delete\' && \'text-red-500\',\n' +
            '                      \'text-[1.2rem] dark:text-[#abc2d3] text-gray-600\',\n' +
            '                    ]"\n' +
            '          />\n' +
            '          <span\n' +
            '              :class="[subItem.label === \'Delete\' && \'text-red-500\']"\n' +
            '          >\n' +
            '            {{ subItem.label }}\n' +
            '          </span>\n' +
            '        </button>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const menuItems = [\n' +
            '  {\n' +
            '    icon: \'mingcute:copy-line\',\n' +
            '    label: \'Copy\',\n' +
            '    action: () => console.log(\'Copy clicked\'),\n' +
            '  },\n' +
            '  {\n' +
            '    icon: \'majesticons:share-line\',\n' +
            '    label: \'Share\',\n' +
            '    hasSubmenu: true,\n' +
            '    submenu: [\n' +
            '      {\n' +
            '        icon: \'material-symbols:cloud-download-outline\',\n' +
            '        label: \'Download\',\n' +
            '        action: () => console.log(\'Download clicked\'),\n' +
            '      },\n' +
            '      {\n' +
            '        icon: \'basil:cloud-upload-outline\',\n' +
            '        label: \'Upload\',\n' +
            '        action: () => console.log(\'Upload clicked\'),\n' +
            '      },\n' +
            '      {\n' +
            '        icon: \'mdi:link-variant\',\n' +
            '        label: \'Copy Link\',\n' +
            '        action: () => console.log(\'Copy Link clicked\'),\n' +
            '      },\n' +
            '    ],\n' +
            '    action: () => console.log(\'Share clicked\'),\n' +
            '  },\n' +
            '  {\n' +
            '    icon: \'lucide:pencil\',\n' +
            '    label: \'Rename\',\n' +
            '    action: () => console.log(\'Rename clicked\'),\n' +
            '  },\n' +
            '  {\n' +
            '    icon: \'material-symbols:delete-outline\',\n' +
            '    label: \'Delete\',\n' +
            '    action: () => console.log(\'Delete clicked\'),\n' +
            '  },\n' +
            '];'
    },
]