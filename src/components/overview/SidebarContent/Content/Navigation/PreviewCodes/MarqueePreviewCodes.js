export const HorizontalMarqueeCodes = [
    {
        id: "main",
        displayText: "Marquee.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {allComponents} from "./Data.js";\n' +
            'import {computed} from "vue";\n' +
            '\n' +
            'const doubledComponents = computed(() =>\n' +
            '    allComponents ? [...allComponents, ...allComponents] : []\n' +
            ');\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="w-full space-y-4">\n' +
            '    <div\n' +
            '        class="slider-container w-full flex-nowrap relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"\n' +
            '    >\n' +
            '      <div class="horizontalMarqueeLeft flex items-center gap-5">\n' +
            '        <a\n' +
            '            v-for="(item, index) in doubledComponents"\n' +
            '            :key="index"\n' +
            '            :href="item.url"\n' +
            '            class="py-2 px-6 dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium whitespace-nowrap"\n' +
            '        >\n' +
            '          {{ item.title }}\n' +
            '        </a>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '\n' +
            '    <div\n' +
            '        class="slider-container w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"\n' +
            '    >\n' +
            '      <div class="horizontalMarqueeRight flex items-center gap-5 w-[50%] lg:w-[100%] justify-center">\n' +
            '        <a\n' +
            '            v-for="(item, index) in allComponents"\n' +
            '            :key="index"\n' +
            '            :href="item.url"\n' +
            '            class="py-2 px-6 dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium whitespace-nowrap"\n' +
            '        >\n' +
            '          {{ item.title }}\n' +
            '        </a>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "css",
        displayText: "Index.css",
        language: "css",
        code: '.horizontalMarqueeLeft {\n' +
            '  animation: marqueeLeft 20s linear infinite;\n' +
            '}\n' +
            '\n' +
            '@keyframes marqueeLeft {\n' +
            '  from {\n' +
            '    transform: translateX(0);\n' +
            '  }\n' +
            '  to {\n' +
            '    transform: translateX(-100%);\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '.horizontalMarqueeRight {\n' +
            '  animation: marqueeRight 20s linear infinite;\n' +
            '}\n' +
            '\n' +
            '@keyframes marqueeRight {\n' +
            '  from {\n' +
            '    transform: translateX(0);\n' +
            '  }\n' +
            '  to {\n' +
            '    transform: translateX(100%);\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '.slider-container:hover .horizontalMarqueeLeft,\n' +
            '.slider-container:hover .horizontalMarqueeRight {\n' +
            '  animation-play-state: paused;\n' +
            '}'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const allComponents = [\n' +
            '    {\n' +
            '        title: "input",\n' +
            '        image: "https://i.ibb.co.com/VWfYt5Fz/input-text.png",\n' +
            '        url: "/components/input-text",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "textarea",\n' +
            '        image: "https://i.ibb.co.com/jkMNKCrr/textarea.png",\n' +
            '        url: "/components/input-textarea",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "switch",\n' +
            '        image: "https://i.ibb.co.com/cSXTB3zK/switch.png",\n' +
            '        url: "/components/input-switch",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "radio",\n' +
            '        image: "https://i.ibb.co.com/9km4WHSC/radio.png",\n' +
            '        url: "/components/input-radio",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Number Input",\n' +
            '        image: "https://i.ibb.co.com/S4z4j1sx/number-input.png",\n' +
            '        url: "/components/input-number",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Checkbox",\n' +
            '        image: "https://i.ibb.co.com/S4WWhhbV/checkbox.png",\n' +
            '        url: "/components/input-checkbox",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Strong Password",\n' +
            '        image: "https://i.ibb.co.com/pjd3sG1Z/password.png",\n' +
            '        url: "/components/strong-password",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Input Range",\n' +
            '        image: "https://i.ibb.co.com/FLVrPv1M/slider.png",\n' +
            '        url: "/components/input-range",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "OTP Input",\n' +
            '        image: "https://i.ibb.co.com/R4vRZK9W/otp-input.png",\n' +
            '        url: "/components/otp-input",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "file upload",\n' +
            '        image: "https://i.ibb.co.com/GfN5kgBw/file-upload.png",\n' +
            '        url: "/components/input-file",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "primary button",\n' +
            '        image: "https://i.ibb.co.com/FLH85qfW/auth-button.png",\n' +
            '        url: "/components/normal-button",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Auth Button",\n' +
            '        image: "https://i.ibb.co.com/FLH85qfW/auth-button.png",\n' +
            '        url: "/components/auth-buttons",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Dropdown Button",\n' +
            '        image: "https://i.ibb.co.com/F4SB7GgH/dropdown-button.png",\n' +
            '        url: "/components/dropdown-button",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "animated button",\n' +
            '        image: "https://i.ibb.co.com/FLH85qfW/auth-button.png",\n' +
            '        url: "/components/animated-button",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "chip",\n' +
            '        image: "https://i.ibb.co.com/3yXwxCSM/chip.png",\n' +
            '        url: "/components/chip",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Timer",\n' +
            '        image: "https://i.ibb.co.com/hJK9MbZy/timer.png",\n' +
            '        url: "/components/timer",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Progress Bar",\n' +
            '        image: "https://i.ibb.co.com/gbfcv2m2/progress-bar.png",\n' +
            '        url: "/components/progress-bar",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "breadcrumb",\n' +
            '        image: "https://i.ibb.co.com/zTJhP7jM/breadcrumb.png",\n' +
            '        url: "/components/breadcrumb",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Rating",\n' +
            '        image: "https://i.ibb.co.com/V0ksF2b8/star.png",\n' +
            '        url: "/components/rating",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "stepper",\n' +
            '        image: "https://i.ibb.co.com/v6rMh7JV/stepper.png",\n' +
            '        url: "/components/stepper",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "tab",\n' +
            '        image: "https://i.ibb.co.com/ZqxbVpv/tabs.png",\n' +
            '        url: "/components/tabs",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "modal",\n' +
            '        image: "https://i.ibb.co.com/Ps8HWt5g/tabs-1.png",\n' +
            '        url: "/components/modal",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "pagination",\n' +
            '        image: "https://i.ibb.co.com/zwYF6Bg/pagination.png",\n' +
            '        url: "/components/pagination",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "tooltip",\n' +
            '        image: "https://i.ibb.co.com/mVJJGD4d/tooltip.png",\n' +
            '        url: "/components/tooltip",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "badge",\n' +
            '        image: "https://i.ibb.co.com/fVFMJnp0/badge.png",\n' +
            '        url: "/components/badge",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Table",\n' +
            '        image: "https://i.ibb.co.com/fGvGZN0s/table.png",\n' +
            '        url: "/components/table",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Timeline",\n' +
            '        image: "https://i.ibb.co.com/cKhF8hcZ/timeline.png",\n' +
            '        url: "/components/timeline",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "alert message",\n' +
            '        image: "https://i.ibb.co.com/WpjzVT2R/alert-message.png",\n' +
            '        url: "/components/alert-message",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "skeleton",\n' +
            '        image: "https://i.ibb.co.com/ZRLBhLxc/skeleton.png",\n' +
            '        url: "/components/skeleton",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Tree Dropdown",\n' +
            '        image: "https://i.ibb.co.com/NgytjVwP/tree-dropdown.png",\n' +
            '        url: "/components/tree-dropdown",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "loader",\n' +
            '        image: "https://i.ibb.co.com/0RWpT608/loading.png",\n' +
            '        url: "/components/loader",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "accordion",\n' +
            '        image: "https://i.ibb.co.com/mCjRgVH1/accordion.png",\n' +
            '        url: "/components/according",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "card",\n' +
            '        image: "https://i.ibb.co.com/Xrr994ZH/card.png",\n' +
            '        url: "/components/cards",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Drag & Drop",\n' +
            '        image: "https://i.ibb.co.com/PXJ3885/drag-drop.png",\n' +
            '        url: "/components/drag-and-drop",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "appbar",\n' +
            '        image: "https://i.ibb.co.com/hxL8b1V5/app-bar.png",\n' +
            '        url: "/components/appbar",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "image gallery",\n' +
            '        image: "https://i.ibb.co.com/YBhbHx8R/image-gellery.png",\n' +
            '        url: "/components/image-gallery",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '];\n'
    },
]

export const VerticalMarqueeCodes = [
    {
        id: "main",
        displayText: "Marquee.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {allComponents} from "./Data.js";\n' +
            'import {computed} from "vue";\n' +
            '\n' +
            'const doubledComponents = computed(() =>\n' +
            '    allComponents ? [...allComponents, ...allComponents] : []\n' +
            ');\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="flex gap-5">\n' +
            '    <div\n' +
            '        class="slider-container h-80 w-full relative overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]"\n' +
            '    >\n' +
            '      <div class="verticalMarqueeUp flex flex-col items-center gap-5">\n' +
            '        <a\n' +
            '            v-for="(item, index) in doubledComponents"\n' +
            '            :key="index"\n' +
            '            :href="item.url"\n' +
            '            class="py-2 px-4 md:px-6 w-32 md:w-48 text-center dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium"\n' +
            '        >\n' +
            '          {{ item.title }}\n' +
            '        </a>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '\n' +
            '    <div\n' +
            '        class="slider-container h-80 w-full relative overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]"\n' +
            '    >\n' +
            '      <div class="verticalMarqueeDown flex flex-col items-center gap-5">\n' +
            '        <a\n' +
            '            v-for="(item, index) in doubledComponents"\n' +
            '            :key="index"\n' +
            '            :href="item.url"\n' +
            '            class="py-2 px-4 md:px-6 w-32 md:w-48 text-center dark:bg-[#36af7b]/90 bg-[#36af7b] capitalize border dark:border-[#36af7b]/90 border-[#36af7b] text-white rounded font-medium"\n' +
            '        >\n' +
            '          {{ item.title }}\n' +
            '        </a>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "css",
        displayText: "Index.css",
        language: "css",
        code: '@keyframes scrollUp {\n' +
            '  0% {\n' +
            '    transform: translateY(0);\n' +
            '  }\n' +
            '  100% {\n' +
            '    transform: translateY(-50%);\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '@keyframes scrollDown {\n' +
            '  0% {\n' +
            '    transform: translateY(-50%);\n' +
            '  }\n' +
            '  100% {\n' +
            '    transform: translateY(0);\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '.verticalMarqueeUp {\n' +
            '  animation: scrollUp 45s linear infinite;\n' +
            '}\n' +
            '\n' +
            '.verticalMarqueeDown {\n' +
            '  animation: scrollDown 45s linear infinite;\n' +
            '}\n' +
            '\n' +
            '.slider-container:hover .verticalMarqueeUp,\n' +
            '.slider-container:hover .verticalMarqueeDown {\n' +
            '  animation-play-state: paused;\n' +
            '}'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const allComponents = [\n' +
            '    {\n' +
            '        title: "input",\n' +
            '        image: "https://i.ibb.co.com/VWfYt5Fz/input-text.png",\n' +
            '        url: "/components/input-text",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "textarea",\n' +
            '        image: "https://i.ibb.co.com/jkMNKCrr/textarea.png",\n' +
            '        url: "/components/input-textarea",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "switch",\n' +
            '        image: "https://i.ibb.co.com/cSXTB3zK/switch.png",\n' +
            '        url: "/components/input-switch",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "radio",\n' +
            '        image: "https://i.ibb.co.com/9km4WHSC/radio.png",\n' +
            '        url: "/components/input-radio",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Number Input",\n' +
            '        image: "https://i.ibb.co.com/S4z4j1sx/number-input.png",\n' +
            '        url: "/components/input-number",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Checkbox",\n' +
            '        image: "https://i.ibb.co.com/S4WWhhbV/checkbox.png",\n' +
            '        url: "/components/input-checkbox",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Strong Password",\n' +
            '        image: "https://i.ibb.co.com/pjd3sG1Z/password.png",\n' +
            '        url: "/components/strong-password",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Input Range",\n' +
            '        image: "https://i.ibb.co.com/FLVrPv1M/slider.png",\n' +
            '        url: "/components/input-range",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "OTP Input",\n' +
            '        image: "https://i.ibb.co.com/R4vRZK9W/otp-input.png",\n' +
            '        url: "/components/otp-input",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "file upload",\n' +
            '        image: "https://i.ibb.co.com/GfN5kgBw/file-upload.png",\n' +
            '        url: "/components/input-file",\n' +
            '        groupName: "input",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "primary button",\n' +
            '        image: "https://i.ibb.co.com/FLH85qfW/auth-button.png",\n' +
            '        url: "/components/normal-button",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Auth Button",\n' +
            '        image: "https://i.ibb.co.com/FLH85qfW/auth-button.png",\n' +
            '        url: "/components/auth-buttons",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Dropdown Button",\n' +
            '        image: "https://i.ibb.co.com/F4SB7GgH/dropdown-button.png",\n' +
            '        url: "/components/dropdown-button",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "animated button",\n' +
            '        image: "https://i.ibb.co.com/FLH85qfW/auth-button.png",\n' +
            '        url: "/components/animated-button",\n' +
            '        groupName: "button",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "chip",\n' +
            '        image: "https://i.ibb.co.com/3yXwxCSM/chip.png",\n' +
            '        url: "/components/chip",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Timer",\n' +
            '        image: "https://i.ibb.co.com/hJK9MbZy/timer.png",\n' +
            '        url: "/components/timer",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Progress Bar",\n' +
            '        image: "https://i.ibb.co.com/gbfcv2m2/progress-bar.png",\n' +
            '        url: "/components/progress-bar",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "breadcrumb",\n' +
            '        image: "https://i.ibb.co.com/zTJhP7jM/breadcrumb.png",\n' +
            '        url: "/components/breadcrumb",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Rating",\n' +
            '        image: "https://i.ibb.co.com/V0ksF2b8/star.png",\n' +
            '        url: "/components/rating",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "stepper",\n' +
            '        image: "https://i.ibb.co.com/v6rMh7JV/stepper.png",\n' +
            '        url: "/components/stepper",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "tab",\n' +
            '        image: "https://i.ibb.co.com/ZqxbVpv/tabs.png",\n' +
            '        url: "/components/tabs",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "modal",\n' +
            '        image: "https://i.ibb.co.com/Ps8HWt5g/tabs-1.png",\n' +
            '        url: "/components/modal",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "pagination",\n' +
            '        image: "https://i.ibb.co.com/zwYF6Bg/pagination.png",\n' +
            '        url: "/components/pagination",\n' +
            '        groupName: "navigation",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "tooltip",\n' +
            '        image: "https://i.ibb.co.com/mVJJGD4d/tooltip.png",\n' +
            '        url: "/components/tooltip",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "badge",\n' +
            '        image: "https://i.ibb.co.com/fVFMJnp0/badge.png",\n' +
            '        url: "/components/badge",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Table",\n' +
            '        image: "https://i.ibb.co.com/fGvGZN0s/table.png",\n' +
            '        url: "/components/table",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Timeline",\n' +
            '        image: "https://i.ibb.co.com/cKhF8hcZ/timeline.png",\n' +
            '        url: "/components/timeline",\n' +
            '        groupName: "data_display",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "alert message",\n' +
            '        image: "https://i.ibb.co.com/WpjzVT2R/alert-message.png",\n' +
            '        url: "/components/alert-message",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "skeleton",\n' +
            '        image: "https://i.ibb.co.com/ZRLBhLxc/skeleton.png",\n' +
            '        url: "/components/skeleton",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Tree Dropdown",\n' +
            '        image: "https://i.ibb.co.com/NgytjVwP/tree-dropdown.png",\n' +
            '        url: "/components/tree-dropdown",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "loader",\n' +
            '        image: "https://i.ibb.co.com/0RWpT608/loading.png",\n' +
            '        url: "/components/loader",\n' +
            '        groupName: "feedback",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "accordion",\n' +
            '        image: "https://i.ibb.co.com/mCjRgVH1/accordion.png",\n' +
            '        url: "/components/according",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "card",\n' +
            '        image: "https://i.ibb.co.com/Xrr994ZH/card.png",\n' +
            '        url: "/components/cards",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "Drag & Drop",\n' +
            '        image: "https://i.ibb.co.com/PXJ3885/drag-drop.png",\n' +
            '        url: "/components/drag-and-drop",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "appbar",\n' +
            '        image: "https://i.ibb.co.com/hxL8b1V5/app-bar.png",\n' +
            '        url: "/components/appbar",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '    {\n' +
            '        title: "image gallery",\n' +
            '        image: "https://i.ibb.co.com/YBhbHx8R/image-gellery.png",\n' +
            '        url: "/components/image-gallery",\n' +
            '        groupName: "surface",\n' +
            '    },\n' +
            '];\n'
    },
]