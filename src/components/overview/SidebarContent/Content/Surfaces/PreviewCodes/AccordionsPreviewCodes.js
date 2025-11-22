export const DefaultOpenAccordionCodes = [
    {
        id: "main",
        displayText: "Accordion.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {ref} from "vue";\n' +
            'import accordionData from "./Data.js";\n' +
            '\n' +
            'const isAccordionOpen = ref(0);\n' +
            '\n' +
            'const handleClick = (index) => {\n' +
            '  isAccordionOpen.value = isAccordionOpen.value === index ? null : index;\n' +
            '};\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="flex gap-3 flex-col w-full lg:w-[90%]">\n' +
            '    <article\n' +
            '        v-for="(accordion, index) in accordionData"\n' +
            '        :key="index"\n' +
            '        class="border-b dark:border-slate-700 border-[#e5eaf2] rounded py-3"\n' +
            '    >\n' +
            '      <div\n' +
            '          class="flex gap-2 cursor-pointer items-center justify-between w-full"\n' +
            '          @click="handleClick(index)"\n' +
            '      >\n' +
            '        <h2 :class="[\'font-[600] transition-colors duration-200 text-[1.2rem]\', isAccordionOpen === index && \'text-[#36af7b]\']">\n' +
            '          {{ accordion.title }}\n' +
            '        </h2>\n' +
            '        <Icon\n' +
            '            icon="mdi:chevron-down"\n' +
            '            class="text-[1.8rem] dark:text-slate-600 text-[#424242] transition-all duration-300"\n' +
            '            :class="{\n' +
            '                  \'rotate-180 !text-[#36af7b]\': isAccordionOpen === index,\n' +
            '                }"\n' +
            '        />\n' +
            '      </div>\n' +
            '      <div\n' +
            '          class="grid transition-all duration-300 overflow-hidden ease-in-out"\n' +
            '          :class="\n' +
            '                isAccordionOpen === index\n' +
            '                  ? \'grid-rows-[1fr] opacity-100 mt-4\'\n' +
            '                  : \'grid-rows-[0fr] opacity-0\'\n' +
            '              "\n' +
            '      >\n' +
            '        <p\n' +
            '            class="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden"\n' +
            '        >\n' +
            '          {{ accordion.description }}\n' +
            '        </p>\n' +
            '      </div>\n' +
            '    </article>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const accordionData = [\n' +
            '  {\n' +
            '    title: "What is the purpose of wireframing in design?",\n' +
            '    description:\n' +
            '        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "Why is user-centered design important?",\n' +
            '    description:\n' +
            '        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "What role does contrast play in graphic design?",\n' +
            '    description:\n' +
            '        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "Define the term \'responsive design\' in web development.",\n' +
            '    description:\n' +
            '        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "What is the significance of color theory in design?",\n' +
            '    description:\n' +
            '        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",\n' +
            '  },\n' +
            '];'
    },
]

export const BorderAccordionCodes = [
    {
        id: "main",
        displayText: "Accordion.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import accordionData from "./Data.js";\n' +
            '\n' +
            'const activeAccordionIndex = ref(null);\n' +
            '\n' +
            'const handleAccordionToggle = (index) => {\n' +
            '  activeAccordionIndex.value = activeAccordionIndex.value === index ? null : index;\n' +
            '};\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="flex gap-4 flex-col w-full">\n' +
            '    <article\n' +
            '        v-for="(accordion, index) in accordionData"\n' +
            '        :key="index"\n' +
            '        class="border dark:border-slate-700 border-border rounded p-3"\n' +
            '    >\n' +
            '      <div\n' +
            '          class="flex gap-2 cursor-pointer items-center justify-between w-full"\n' +
            '          @click="handleAccordionToggle(index)"\n' +
            '      >\n' +
            '        <h2 :class="[\'font-[600] text-[1.2rem]\'], activeAccordionIndex === index && \'text-[#36af7b]\'">\n' +
            '          {{ accordion.title }}\n' +
            '        </h2>\n' +
            '        <Icon\n' +
            '            icon="mdi:plus"\n' +
            '            class="text-[1.6rem] dark:text-slate-600 text-[#424242] transition-all duration-300"\n' +
            '            :class="{\n' +
            '                  \'rotate-45 !text-[#36af7b]\': activeAccordionIndex === index,\n' +
            '                }"\n' +
            '        />\n' +
            '      </div>\n' +
            '      <div\n' +
            '          class="grid transition-all duration-300 overflow-hidden ease-in-out"\n' +
            '          :class="\n' +
            '                activeAccordionIndex === index\n' +
            '                  ? \'grid-rows-[1fr] opacity-100 mt-4\'\n' +
            '                  : \'grid-rows-[0fr] opacity-0\'\n' +
            '              "\n' +
            '      >\n' +
            '        <p\n' +
            '            class="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden"\n' +
            '        >\n' +
            '          {{ accordion.description }}\n' +
            '        </p>\n' +
            '      </div>\n' +
            '    </article>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const accordionData = [\n' +
            '  {\n' +
            '    title: "What is the purpose of wireframing in design?",\n' +
            '    description:\n' +
            '        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "Why is user-centered design important?",\n' +
            '    description:\n' +
            '        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "What role does contrast play in graphic design?",\n' +
            '    description:\n' +
            '        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "Define the term \'responsive design\' in web development.",\n' +
            '    description:\n' +
            '        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "What is the significance of color theory in design?",\n' +
            '    description:\n' +
            '        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",\n' +
            '  },\n' +
            '];'
    },
]

export const BgAccordionCodes = [
    {
        id: "main",
        displayText: "Accordion.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import accordionData from "./Data.js";\n' +
            '\n' +
            'const activeAccordionIndex = ref(null);\n' +
            '\n' +
            'const handleAccordionToggle = (index) => {\n' +
            '  activeAccordionIndex.value = activeAccordionIndex.value === index ? null : index;\n' +
            '};\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="flex gap-3 flex-col w-full">\n' +
            '    <article\n' +
            '        v-for="(accordion, index) in accordionData"\n' +
            '        :key="index"\n' +
            '        class="bg-[#e5eaf2] dark:bg-transparent rounded"\n' +
            '    >\n' +
            '      <div\n' +
            '          :class="[\n' +
            '                activeAccordionIndex === index ? \'rounded-t-sm\' : \'rounded\',\n' +
            '                \'flex gap-2 cursor-pointer items-center justify-between dark:bg-slate-800 w-full bg-gray-700 p-3\',\n' +
            '              ]"\n' +
            '          @click="handleAccordionToggle(index)"\n' +
            '      >\n' +
            '        <h2\n' +
            '            class="dark:text-[#abc2d3] text-white font-[600] text-[1.2rem]"\n' +
            '        >\n' +
            '          {{ accordion.title }}\n' +
            '        </h2>\n' +
            '\n' +
            '        <Icon\n' +
            '            icon="mdi:plus"\n' +
            '            class="shrink-0 ml-8 text-[1.6rem] dark:text-[#abc2d3] text-white transition-transform duration-200"\n' +
            '            :class="{ \'rotate-45\': activeAccordionIndex === index }"\n' +
            '        />\n' +
            '      </div>\n' +
            '\n' +
            '      <div\n' +
            '          class="grid transition-all duration-300 dark:bg-slate-900 rounded-b-md overflow-hidden ease-in-out bg-gray-100"\n' +
            '          :class="\n' +
            '                activeAccordionIndex === index\n' +
            '                  ? \'grid-rows-[1fr] opacity-100 px-3 py-3\'\n' +
            '                  : \'grid-rows-[0fr] opacity-0 px-3\'\n' +
            '              "\n' +
            '      >\n' +
            '        <div\n' +
            '            class="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden"\n' +
            '        >\n' +
            '          {{ accordion.description }}\n' +
            '        </div>\n' +
            '      </div>\n' +
            '    </article>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const accordionData = [\n' +
            '  {\n' +
            '    title: "What is the purpose of wireframing in design?",\n' +
            '    description:\n' +
            '        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "Why is user-centered design important?",\n' +
            '    description:\n' +
            '        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "What role does contrast play in graphic design?",\n' +
            '    description:\n' +
            '        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "Define the term \'responsive design\' in web development.",\n' +
            '    description:\n' +
            '        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",\n' +
            '  },\n' +
            '  {\n' +
            '    title: "What is the significance of color theory in design?",\n' +
            '    description:\n' +
            '        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",\n' +
            '  },\n' +
            '];'
    },
]