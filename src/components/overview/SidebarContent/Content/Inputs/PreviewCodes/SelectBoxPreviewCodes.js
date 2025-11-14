export const basicSelectBoxCodes = '<script setup>\n' +
    'import {onBeforeUnmount, onMounted, ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const isActive = ref(false);\n' +
    'const content = ref("Select Option");\n' +
    '\n' +
    'const options = ["Football", "Cricket", "Tennis", "Badminton"];\n' +
    '\n' +
    'const toggleDropdown = () => {\n' +
    '  isActive.value = !isActive.value;\n' +
    '};\n' +
    '\n' +
    'const selectOption = (option) => {\n' +
    '  content.value = option;\n' +
    '  isActive.value = false;\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  if (!event.target.closest(".dropdown")) {\n' +
    '    isActive.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("mousedown", handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener("mousedown", handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative w-full lg:w-[60%]">\n' +
    '    <button\n' +
    '        class="bg-[#fff] dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border border-gray-200 rounded-md justify-between px-3 w-full py-2 flex items-center gap-8 cursor-pointer dropdown"\n' +
    '        @click="toggleDropdown"\n' +
    '    >\n' +
    '      {{ content }}\n' +
    '      <Icon icon="proicons:chevron-down"\n' +
    '            :class="[\n' +
    '          isActive ? \'rotate-[180deg]\' : \'rotate-0\',\n' +
    '          \'transition-all duration-300 text-[1.2rem]\'\n' +
    '        ]"\n' +
    '      />\n' +
    '    </button>\n' +
    '\n' +
    '    <transition\n' +
    '        name="fade-up"\n' +
    '        enter-active-class="transition-all duration-200 ease-out"\n' +
    '        enter-from-class="opacity-0 -translate-y-2"\n' +
    '        enter-to-class="opacity-100 translate-y-0"\n' +
    '        leave-active-class="transition-all duration-200 ease-in"\n' +
    '        leave-from-class="opacity-100 translate-y-0"\n' +
    '        leave-to-class="opacity-0 -translate-y-2"\n' +
    '    >\n' +
    '      <div\n' +
    '          v-if="isActive"\n' +
    '          class="absolute top-[105%] left-0 dark:border-slate-700 p-1 dark:bg-slate-800 w-full mt-1 border border-gray-200 rounded-md bg-white z-20"\n' +
    '          style="box-shadow: 0 15px 60px -15px rgba(0, 0, 0, 0.3)"\n' +
    '      >\n' +
    '        <p\n' +
    '            v-for="(option, index) in options"\n' +
    '            :key="index"\n' +
    '            class="py-2 px-4 dark:hover:bg-slate-900/40 rounded-lg hover:bg-[#ececec] transition-all duration-200"\n' +
    '            @click="selectOption(option)"\n' +
    '        >\n' +
    '          {{ option }}\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </transition>\n' +
    '  </div>\n' +
    '</template>\n'

export const selectBoxWithIconCodes = '<script setup>\n' +
    'import {onBeforeUnmount, onMounted, ref} from \'vue\';\n' +
    'import {Icon} from \'@iconify/vue\';\n' +
    '\n' +
    'const isDropdownOpen = ref(false);\n' +
    'const selectedItem = ref(\'Select Option\');\n' +
    '\n' +
    'const options = [\n' +
    '  {icon: \'solar:football-linear\', title: \'Football\'},\n' +
    '  {icon: \'hugeicons:cricket-bat\', title: \'Cricket\'},\n' +
    '  {icon: \'cil:tennis\', title: \'Tennis\'},\n' +
    '  {icon: \'material-symbols-light:badminton-outline-rounded\', title: \'Badminton\'},\n' +
    '];\n' +
    '\n' +
    'const toggleDropdown = () => {\n' +
    '  isDropdownOpen.value = !isDropdownOpen.value;\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  if (!event.target.closest(\'.dropdown\')) {\n' +
    '    isDropdownOpen.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener(\'mousedown\', handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener(\'mousedown\', handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'const selectOption = (title) => {\n' +
    '  selectedItem.value = title;\n' +
    '  isDropdownOpen.value = false;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative w-full lg:w-[60%]">\n' +
    '    <button\n' +
    '        class="bg-white dark:border-slate-600 dark:bg-transparent dark:text-[#abc2d3] border border-[#d1d1d1] rounded-md w-full justify-between px-3 py-2 flex items-center gap-8 cursor-pointer dropdown"\n' +
    '        @click="toggleDropdown"\n' +
    '    >\n' +
    '      {{ selectedItem }}\n' +
    '      <Icon\n' +
    '          icon="proicons:chevron-down"\n' +
    '          class="transition-all duration-300 text-[1.2rem]"\n' +
    '          :class="{ \'rotate-180\': isDropdownOpen, \'rotate-0\': !isDropdownOpen }"\n' +
    '      />\n' +
    '    </button>\n' +
    '\n' +
    '    <transition\n' +
    '        name="fade-scale"\n' +
    '        enter-active-class="transition-all duration-200 ease-out"\n' +
    '        enter-from-class="opacity-0 -translate-y-2"\n' +
    '        enter-to-class="opacity-100 translate-y-0"\n' +
    '        leave-active-class="transition-all duration-200 ease-in"\n' +
    '        leave-from-class="opacity-100 translate-y-0"\n' +
    '        leave-to-class="opacity-0 -translate-y-2"\n' +
    '    >\n' +
    '      <div\n' +
    '          v-if="isDropdownOpen"\n' +
    '          class="w-full absolute top-12 p-1 dark:bg-slate-800 left-0 right-0 bg-white rounded-xl flex flex-col overflow-hidden"\n' +
    '          style="box-shadow: 0 15px 60px -15px rgba(0, 0, 0, 0.3);"\n' +
    '      >\n' +
    '        <p\n' +
    '            v-for="(option, index) in options"\n' +
    '            :key="index"\n' +
    '            class="py-2 px-4 dark:hover:bg-slate-900/40 rounded-lg hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"\n' +
    '            @click="selectOption(option.title)"\n' +
    '        >\n' +
    '          <Icon :icon="option.icon"/>\n' +
    '          {{ option.title }}\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </transition>\n' +
    '  </div>\n' +
    '</template>\n'

export const multipleSelectBoxWithSearchCodes = '<script setup>\n' +
    'import {computed, onBeforeUnmount, onMounted, ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const searchValue = ref("");\n' +
    'const isDropdownOpen = ref(false);\n' +
    'const selectedItems = ref([]);\n' +
    '\n' +
    'const options = ref([\n' +
    '  {id: 1, name: "Option 1"},\n' +
    '  {id: 2, name: "Option 2"},\n' +
    '  {id: 3, name: "Option 3"},\n' +
    '  {id: 4, name: "Option 4"},\n' +
    '  {id: 5, name: "Option 5"},\n' +
    ']);\n' +
    '\n' +
    'const filteredItems = computed(() =>\n' +
    '    options.value.filter((item) =>\n' +
    '        item.name.toLowerCase().includes(searchValue.value.toLowerCase())\n' +
    '    )\n' +
    ');\n' +
    '\n' +
    'const isSelected = (item) =>\n' +
    '    selectedItems.value.some((selected) => selected.id === item.id);\n' +
    '\n' +
    'const toggleSelect = (item) => {\n' +
    '  if (isSelected(item)) {\n' +
    '    selectedItems.value = selectedItems.value.filter(\n' +
    '        (selected) => selected.id !== item.id\n' +
    '    );\n' +
    '  } else {\n' +
    '    selectedItems.value.push(item);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  if (event.target.closest(".custom-select")) return;\n' +
    '  setTimeout(() => {\n' +
    '    isDropdownOpen.value = false;\n' +
    '  }, 200);\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("mousedown", handleClickOutside);\n' +
    '});\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener("mousedown", handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative custom-select w-full lg:w-[60%]">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Search.."\n' +
    '        v-model="searchValue"\n' +
    '        @focus="isDropdownOpen = true"\n' +
    '        class="w-full border dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border-gray-300 rounded-md px-3 py-2 focus:outline-none"\n' +
    '    />\n' +
    '\n' +
    '    <Icon icon="proicons:chevron-down"\n' +
    '          :class="[\n' +
    '            \'transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500\',\n' +
    '            isDropdownOpen ? \'rotate-[180deg]\' : \'rotate-0\'\n' +
    '            ]"\n' +
    '    />\n' +
    '\n' +
    '    <Transition\n' +
    '        enter-active-class="transition-all duration-200 ease-out"\n' +
    '        enter-from-class="opacity-0 -translate-y-1"\n' +
    '        enter-to-class="opacity-100 translate-y-0"\n' +
    '        leave-active-class="transition-all duration-150 ease-in"\n' +
    '        leave-from-class="opacity-100 translate-y-0"\n' +
    '        leave-to-class="opacity-0 -translate-y-2"\n' +
    '    >\n' +
    '      <div\n' +
    '          v-if="isDropdownOpen"\n' +
    '          class="absolute left-0 dark:border-slate-700 p-1 dark:bg-slate-800 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20"\n' +
    '      >\n' +
    '        <div class="w-full overflow-auto">\n' +
    '          <p\n' +
    '              v-for="item in filteredItems"\n' +
    '              :key="item.id"\n' +
    '              @click="toggleSelect(item)"\n' +
    '              class="cursor-pointer px-3 rounded-lg dark:text-[#abc2d3] dark:hover:bg-slate-900/40 py-2 flex items-center hover:bg-gray-200"\n' +
    '          >\n' +
    '            <Icon icon="weui:done-outlined"\n' +
    '                  :class="[\n' +
    '                        \'mr-2 transition-all text-[1.3rem] duration-300\',\n' +
    '                        isSelected(item)\n' +
    '                        ? \'scale-[1] opacity-100\'\n' +
    '                        : \'scale-[0.5] opacity-0\'\n' +
    '                        ]"\n' +
    '            />\n' +
    '            {{ item.name }}\n' +
    '          </p>\n' +
    '\n' +
    '          <p\n' +
    '              v-if="filteredItems.length === 0"\n' +
    '              class="text-center dark:text-[#abc2d3] text-[0.9rem] text-[#424242] py-8"\n' +
    '          >\n' +
    '            No search found!\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </Transition>\n' +
    '  </div>\n' +
    '</template>\n'

export const singleSelectBoxWithSearchCodes = '<script setup>\n' +
    'import {computed, onBeforeUnmount, onMounted, ref} from \'vue\';\n' +
    'import {Icon} from \'@iconify/vue\';\n' +
    '\n' +
    'const searchValue = ref(\'\');\n' +
    'const isOpenDropdown = ref(false);\n' +
    'const selectedItem = ref(null);\n' +
    '\n' +
    'const options = [\n' +
    '  {id: 1, name: \'Option 1\'},\n' +
    '  {id: 2, name: \'Option 2\'},\n' +
    '  {id: 3, name: \'Option 3\'},\n' +
    '  {id: 4, name: \'Option 4\'},\n' +
    '  {id: 5, name: \'Option 5\'},\n' +
    '];\n' +
    '\n' +
    'const filteredItems = computed(() =>\n' +
    '    options.filter((item) =>\n' +
    '        item.name.toLowerCase().includes(searchValue.value.toLowerCase())\n' +
    '    )\n' +
    ');\n' +
    '\n' +
    'const isSelected = (item) => selectedItem.value?.id === item.id;\n' +
    '\n' +
    'const toggleItem = (item) => {\n' +
    '  selectedItem.value = item;\n' +
    '  isOpenDropdown.value = false;\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  if (!event.target.closest(\'.custom-select\')) {\n' +
    '    setTimeout(() => {\n' +
    '      isOpenDropdown.value = false;\n' +
    '    }, 200);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener(\'mousedown\', handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener(\'mousedown\', handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative custom-select w-full lg:w-[60%]">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Search.."\n' +
    '        v-model="searchValue"\n' +
    '        @focus="isOpenDropdown = true"\n' +
    '        class="w-full dark:border-slate-600 dark:bg-transparent dark:text-[#abc2d3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none"\n' +
    '    />\n' +
    '\n' +
    '    <Icon\n' +
    '        icon="proicons:chevron-down"\n' +
    '        class="transition-all duration-300 text-[1.3rem] absolute top-[50%] transform -translate-y-1/2 right-3 text-gray-500"\n' +
    '        :class="{ \'rotate-180\': isOpenDropdown, \'rotate-0\': !isOpenDropdown }"\n' +
    '    />\n' +
    '\n' +
    '    <transition\n' +
    '        name="fade-scale"\n' +
    '        enter-active-class="transition-all duration-200 ease-out"\n' +
    '        enter-from-class="opacity-0 -translate-y-2"\n' +
    '        enter-to-class="opacity-100 translate-y-0"\n' +
    '        leave-active-class="transition-all duration-200 ease-in"\n' +
    '        leave-from-class="opacity-100 translate-y-0"\n' +
    '        leave-to-class="opacity-0 -translate-y-2"\n' +
    '    >\n' +
    '      <div\n' +
    '          v-if="isOpenDropdown"\n' +
    '          class="absolute left-0 w-full mt-1 border p-1 dark:border-slate-700 dark:bg-slate-800 border-gray-200 rounded-md bg-white shadow-lg z-20"\n' +
    '      >\n' +
    '        <div class="w-full overflow-auto">\n' +
    '          <p\n' +
    '              v-for="item in filteredItems"\n' +
    '              :key="item.id"\n' +
    '              @click="toggleItem(item)"\n' +
    '              class="cursor-pointer px-3 py-2 rounded-lg dark:hover:bg-slate-900/40 flex items-center hover:bg-gray-200 dark:text-[#abc2d3]"\n' +
    '          >\n' +
    '            <Icon\n' +
    '                icon="ion:checkmark"\n' +
    '                class="mr-2 transition-all duration-300 text-[1.3rem]"\n' +
    '                :class="{\n' +
    '                  \'scale-100 opacity-100\': isSelected(item),\n' +
    '                  \'scale-50 opacity-0\': !isSelected(item)\n' +
    '                }"\n' +
    '            />\n' +
    '            {{ item.name }}\n' +
    '          </p>\n' +
    '\n' +
    '          <p\n' +
    '              v-if="filteredItems.length === 0"\n' +
    '              class="text-center dark:text-[#abc2d3] text-[0.9rem] text-[#424242] py-8"\n' +
    '          >\n' +
    '            No search found!\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </transition>\n' +
    '  </div>\n' +
    '</template>\n'

export const singleSelectWithSearchAndBadgeCodes = '<script setup>\n' +
    'import {computed, onBeforeUnmount, onMounted, ref} from \'vue\';\n' +
    'import {Icon} from \'@iconify/vue\';\n' +
    '\n' +
    'const searchValue = ref(\'\');\n' +
    'const isDropdownOpen = ref(false);\n' +
    'const selectedItem = ref(null);\n' +
    '\n' +
    'const options = [\n' +
    '  {id: 1, name: \'Option 1\'},\n' +
    '  {id: 2, name: \'Option 2\'},\n' +
    '  {id: 3, name: \'Option 3\'},\n' +
    '  {id: 4, name: \'Option 4\'},\n' +
    '  {id: 5, name: \'Option 5\'},\n' +
    '];\n' +
    '\n' +
    'const filteredItems = computed(() =>\n' +
    '    options.filter((item) =>\n' +
    '        item.name.toLowerCase().includes(searchValue.value.toLowerCase())\n' +
    '    )\n' +
    ');\n' +
    '\n' +
    'const isSelected = (item) => selectedItem.value?.id === item.id;\n' +
    '\n' +
    'const toggleItem = (item) => {\n' +
    '  selectedItem.value = item;\n' +
    '  isDropdownOpen.value = false;\n' +
    '};\n' +
    '\n' +
    'const removeItem = () => {\n' +
    '  selectedItem.value = null;\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  if (!event.target.closest(\'.custom-select\')) {\n' +
    '    setTimeout(() => {\n' +
    '      isDropdownOpen.value = false;\n' +
    '    }, 200);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener(\'mousedown\', handleClickOutside);\n' +
    '});\n' +
    '\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener(\'mousedown\', handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative custom-select w-full lg:w-[60%]">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Search.."\n' +
    '        v-model="searchValue"\n' +
    '        @focus="isDropdownOpen = true"\n' +
    '        class="w-full dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none"\n' +
    '    />\n' +
    '\n' +
    '    <Icon\n' +
    '        icon="proicons:chevron-down"\n' +
    '        class="absolute top-[10px] right-3 text-gray-500 text-[1.3rem] transition-all duration-300"\n' +
    '        :class="{ \'rotate-180\': isDropdownOpen, \'rotate-0\': !isDropdownOpen }"\n' +
    '    />\n' +
    '\n' +
    '    <transition\n' +
    '        name="fade-scale"\n' +
    '        enter-active-class="transition-all duration-200 ease-out"\n' +
    '        enter-from-class="opacity-0 -translate-y-2"\n' +
    '        enter-to-class="opacity-100 translate-y-0"\n' +
    '        leave-active-class="transition-all duration-200 ease-in"\n' +
    '        leave-from-class="opacity-100 translate-y-0"\n' +
    '        leave-to-class="opacity-0 -translate-y-2"\n' +
    '    >\n' +
    '      <div\n' +
    '          v-if="isDropdownOpen"\n' +
    '          class="absolute left-0 p-1 dark:border-slate-700 dark:bg-slate-800 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20"\n' +
    '      >\n' +
    '        <div class="w-full overflow-auto">\n' +
    '          <p\n' +
    '              v-for="item in filteredItems"\n' +
    '              :key="item.id"\n' +
    '              @click="toggleItem(item)"\n' +
    '              class="cursor-pointer dark:text-[#abc2d3] rounded-lg dark:hover:bg-slate-900/40 px-3 py-2 flex items-center hover:bg-gray-200"\n' +
    '          >\n' +
    '            <Icon\n' +
    '                icon="ion:checkmark"\n' +
    '                class="mr-2 text-[1.3rem] transition-all duration-300"\n' +
    '                :class="{\n' +
    '                  \'scale-100 opacity-100\': isSelected(item),\n' +
    '                  \'scale-50 opacity-0\': !isSelected(item)\n' +
    '                }"\n' +
    '            />\n' +
    '            {{ item.name }}\n' +
    '          </p>\n' +
    '\n' +
    '          <p\n' +
    '              v-if="filteredItems.length === 0"\n' +
    '              class="text-center dark:text-[#abc2d3] text-[0.9rem] text-[#424242] py-8"\n' +
    '          >\n' +
    '            No search found!\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </transition>\n' +
    '\n' +
    '    <div\n' +
    '        v-if="selectedItem"\n' +
    '        class="bg-brandColor dark:bg-slate-800 dark:border dark:border-slate-700 dark:text-[#abc2d3]/80 w-max text-white px-2 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"\n' +
    '    >\n' +
    '      {{ selectedItem.name }}\n' +
    '      <button\n' +
    '          @click="removeItem"\n' +
    '          class="ml-2 hover:text-red-600 text-[0.8rem]"\n' +
    '      >\n' +
    '        <Icon icon="icon-park-outline:close"/>\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const multipleSelectWithSearchAndBadgeCodes = '<script setup>\n' +
    'import {computed, onBeforeUnmount, onMounted, ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const searchValue = ref("");\n' +
    'const isOpenDropdown = ref(false);\n' +
    'const selectedOptions = ref([]);\n' +
    '\n' +
    'const options = ref([\n' +
    '  {id: 1, name: "Option 1"},\n' +
    '  {id: 2, name: "Option 2"},\n' +
    '  {id: 3, name: "Option 3"},\n' +
    '  {id: 4, name: "Option 4"},\n' +
    '  {id: 5, name: "Option 5"},\n' +
    ']);\n' +
    '\n' +
    'const filteredItems = computed(() =>\n' +
    '    options.value.filter((item) =>\n' +
    '        item.name.toLowerCase().includes(searchValue.value.toLowerCase())\n' +
    '    )\n' +
    ');\n' +
    '\n' +
    'const isSelected = (item) =>\n' +
    '    selectedOptions.value.some((selected) => selected.id === item.id);\n' +
    '\n' +
    'const toggleSelectItem = (item) => {\n' +
    '  if (isSelected(item)) {\n' +
    '    selectedOptions.value = selectedOptions.value.filter(\n' +
    '        (selected) => selected.id !== item.id\n' +
    '    );\n' +
    '  } else {\n' +
    '    selectedOptions.value.push(item);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const removeItem = (option) => {\n' +
    '  selectedOptions.value = selectedOptions.value.filter(\n' +
    '      (selected) => selected.id !== option.id\n' +
    '  );\n' +
    '};\n' +
    '\n' +
    'const handleClickOutside = (event) => {\n' +
    '  if (!event.target.closest(".custom-select")) {\n' +
    '    isOpenDropdown.value = false;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("click", handleClickOutside);\n' +
    '});\n' +
    'onBeforeUnmount(() => {\n' +
    '  document.removeEventListener("click", handleClickOutside);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="relative custom-select w-full lg:w-[60%]">\n' +
    '    <input\n' +
    '        type="text"\n' +
    '        placeholder="Search.."\n' +
    '        v-model="searchValue"\n' +
    '        @focus="isOpenDropdown = true"\n' +
    '        class="w-full dark:bg-transparent dark:border-slate-600 dark:text-[#abc2d3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none"\n' +
    '    />\n' +
    '\n' +
    '    <Icon\n' +
    '        icon="proicons:chevron-down"\n' +
    '        :class="[\n' +
    '            \'transition-all duration-300 text-[1.3rem] absolute top-[10px] right-3 text-gray-500\',\n' +
    '            isOpenDropdown ? \'rotate-[180deg]\' : \'rotate-0\'\n' +
    '            ]"\n' +
    '    />\n' +
    '\n' +
    '    <div\n' +
    '        v-if="isOpenDropdown"\n' +
    '        class="absolute dark:border-slate-700 dark:bg-slate-800 left-0 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20 p-1"\n' +
    '    >\n' +
    '      <div class="w-full overflow-auto">\n' +
    '        <p\n' +
    '            v-for="item in filteredItems"\n' +
    '            :key="item.id"\n' +
    '            @click="toggleSelectItem(item)"\n' +
    '            class="cursor-pointer dark:text-[#abc2d3] rounded-lg dark:hover:bg-slate-900/40 px-3 py-2 flex items-center hover:bg-gray-200"\n' +
    '        >\n' +
    '          <Icon\n' +
    '              icon="ion:checkmark"\n' +
    '              :class="[\n' +
    '                    \'mr-2 transition-all text-[1.3rem] duration-300\',\n' +
    '                    isSelected(item)\n' +
    '                    ? \'scale-[1] opacity-100\'\n' +
    '                    : \'scale-[0.5] opacity-0\'\n' +
    '                    ]"\n' +
    '          />\n' +
    '          {{ item.name }}\n' +
    '        </p>\n' +
    '\n' +
    '        <p\n' +
    '            v-if="filteredItems.length === 0"\n' +
    '            class="text-center dark:text-[#abc2d3] text-[0.9rem] text-[#424242] py-8"\n' +
    '        >\n' +
    '          No search found!\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div\n' +
    '        v-if="selectedOptions.length > 0"\n' +
    '        class="flex items-center gap-x-[5px] mt-2 flex-wrap"\n' +
    '    >\n' +
    '      <div\n' +
    '          v-for="item in selectedOptions"\n' +
    '          :key="item.id"\n' +
    '          class="bg-brandColor dark:bg-slate-800 dark:border-slate-700 dark:border dark:text-[#abc2d3]/80 min-w-fit text-white px-2 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"\n' +
    '      >\n' +
    '        {{ item.name }}\n' +
    '        <button\n' +
    '            @click="removeItem(item)"\n' +
    '            class="ml-2 text-[0.8rem] hover:text-red-600"\n' +
    '        >\n' +
    '          <Icon icon="icon-park-outline:close"/>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'