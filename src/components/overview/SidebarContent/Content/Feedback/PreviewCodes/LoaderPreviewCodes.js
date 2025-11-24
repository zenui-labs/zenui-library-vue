export const CircleLoaderCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <!-- loader 1 -->\n' +
    '  <div\n' +
    '      class="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#36af7b] border-[#36af7b]/10"\n' +
    '  ></div>\n' +
    '\n' +
    '  <!-- loader 2 -->\n' +
    '  <Icon icon="teenyicons:loader-solid" class="text-[2.8rem] animate-spin text-[#36af7b]"/>\n' +
    '\n' +
    '  <!-- loader 3 -->\n' +
    '  <Icon icon="tabler:loader-3" class="text-[2.8rem] animate-spin text-[#36af7b]"/>\n' +
    '</template>'

export const DashedLoaderCodes = '<template>\n' +
    '  <div\n' +
    '      class="w-14 h-14 animate-spin rounded-full border-dashed border-8 border-[#36af7b]"\n' +
    '  ></div>\n' +
    '</template>'

export const OpacityLoaderCodes = '<template>\n' +
    '  <div\n' +
    '      class="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#36af7b] flex items-center justify-center"\n' +
    '  >\n' +
    '    <div\n' +
    '        class="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#36af7b]"\n' +
    '    ></div>\n' +
    '  </div>\n' +
    '</template>'

export const WaveLoaderCodes = '<script setup>\n' +
    'import {computed} from "vue";\n' +
    '\n' +
    'const spinnerDivs = computed(() => {\n' +
    '  return Array.from({length: 10}).map((_, index) => {\n' +
    '    const delay = (index + 1) * 0.1;\n' +
    '    const rotation = (index + 1) * 36;\n' +
    '    const translation = 150;\n' +
    '\n' +
    '    return {\n' +
    '      key: index,\n' +
    '      style: {\n' +
    '        \'--delay\': delay,\n' +
    '        \'--rotation\': rotation,\n' +
    '        \'--translation\': translation,\n' +
    '        transform: `rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%))`,\n' +
    '        animation: `spinner-animation 1s calc(var(--delay) * 1s) infinite ease`\n' +
    '      }\n' +
    '    };\n' +
    '  });\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="my-10">\n' +
    '    <div class="absolute w-[9px] h-[9px]">\n' +
    '      <div\n' +
    '          v-for="item in spinnerDivs"\n' +
    '          :key="item.key"\n' +
    '          class="absolute w-[50%] h-[140%] bg-[#36af7b]"\n' +
    '          :style="item.style"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const ChaseLoaderCodes = [
    {
        id: "main",
        displayText: "Loader.vue",
        language: "vue",
        code: '<script setup>\n' +
            'const sharedStyle = {\n' +
            '  content: \'""\',\n' +
            '  width: \'100%\',\n' +
            '  height: \'100%\',\n' +
            '  display: \'block\',\n' +
            '  border: \'5.6px solid #36af7b\',\n' +
            '  borderRadius: \'50%\',\n' +
            '  boxShadow: \'0 -33.6px 0 -5.6px #36af7b\',\n' +
            '  position: \'absolute\',\n' +
            '  animation: \'spinner-rotate 1.25s infinite ease\'\n' +
            '};\n' +
            '\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="my-10">\n' +
            '    <div class="relative w-[22.4px] h-[22.4px]">\n' +
            '      <div\n' +
            '          :style="{\n' +
            '                    ...sharedStyle,\n' +
            '                    animation: \'spinner-b4c8mmmd 0.5s backwards, spinner-rotate 1.25s 0.5s infinite ease\'\n' +
            '                  }"\n' +
            '      ></div>\n' +
            '      <div\n' +
            '          :style="{\n' +
            '                    ...sharedStyle,\n' +
            '                    animationDelay: \'0s, 1.25s\'\n' +
            '                  }"\n' +
            '      ></div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "css",
        displayText: "Index.css",
        language: "css",
        code: '@keyframes spinner-b4c8mmmd {\n' +
            '  from {\n' +
            '    box-shadow: 0 0 0 -5.6px #36af7b;\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '@keyframes spinner-rotate {\n' +
            '  to {\n' +
            '    transform: rotate(360deg);\n' +
            '  }\n' +
            '}'
    },
]

export const DotLoaderCodes = [
    {
        id: "main",
        displayText: "Loader.vue",
        language: "vue",
        code: '<template>\n' +
            '  <div class="my-10">\n' +
            '    <div\n' +
            '        class="w-[56px] h-[56px]"\n' +
            '        :style="{\n' +
            '                  \'--c\': \'radial-gradient(farthest-side, #36af7b 92%, transparent)\',\n' +
            '                  background: `\n' +
            '                    var(--c) 50% 0,\n' +
            '                    var(--c) 50% 100%,\n' +
            '                    var(--c) 100% 50%,\n' +
            '                    var(--c) 0 50%\n' +
            '                  `,\n' +
            '                  backgroundSize: \'13.4px 13.4px\',\n' +
            '                  backgroundRepeat: \'no-repeat\',\n' +
            '                  animation: \'spinner-kh173p 1s infinite\'\n' +
            '                }"\n' +
            '    >\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "css",
        displayText: "Index.css",
        language: "css",
        code: '@keyframes spinner-kh173p {\n' +
            '  to {\n' +
            '    transform: rotate(0.5turn);\n' +
            '  }\n' +
            '}'
    },
]

export const ShapeLoaderCodes = [
    {
        id: "main",
        displayText: "Loader.vue",
        language: "vue",
        code: '<template>\n' +
            '  <div class="my-10">\n' +
            '    <div class="relative w-[44.8px] h-[44.8px] text-[#36af7b]">\n' +
            '      <div\n' +
            '          class="absolute inset-0 rounded-full"\n' +
            '          :style="{\n' +
            '                    background: `\n' +
            '                      radial-gradient(10.08px at bottom right, transparent 94%, currentColor) top left,\n' +
            '                      radial-gradient(10.08px at bottom left, transparent 94%, currentColor) top right,\n' +
            '                      radial-gradient(10.08px at top right, transparent 94%, currentColor) bottom left,\n' +
            '                      radial-gradient(10.08px at top left, transparent 94%, currentColor) bottom right\n' +
            '                    `,\n' +
            '                    backgroundSize: \'22.4px 22.4px\',\n' +
            '                    backgroundRepeat: \'no-repeat\',\n' +
            '                    animation: \'shapes-77ngqcmd 1.5s infinite cubic-bezier(0.3,1,0,1)\'\n' +
            '                  }"\n' +
            '      ></div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "css",
        displayText: "Index.css",
        language: "css",
        code: '@keyframes shapes-77ngqcmd {\n' +
            '  33% {\n' +
            '    inset: -11.2px;\n' +
            '    transform: rotate(0deg);\n' +
            '  }\n' +
            '  66% {\n' +
            '    inset: -11.2px;\n' +
            '    transform: rotate(90deg);\n' +
            '  }\n' +
            '  100% {\n' +
            '    inset: 0;\n' +
            '    transform: rotate(90deg);\n' +
            '  }\n' +
            '}'
    },
]

export const FlipLoaderCodes = [
    {
        id: "main",
        displayText: "Loader.vue",
        language: "vue",
        code: '<script setup>\n' +
            'const items = Array.from({length: 9});\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="my-10">\n' +
            '    <div class="grid grid-cols-3 grid-rows-3 w-[67.2px] h-[67.2px]">\n' +
            '      <div\n' +
            '          v-for="(_, index) in items"\n' +
            '          :key="index"\n' +
            '          class="bg-[#36af7b]"\n' +
            '          :style="{\n' +
            '                    animation: `flipping-18i5bq 1.5s ${index * 0.1}s infinite backwards`\n' +
            '                  }"\n' +
            '      ></div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "css",
        displayText: "Index.css",
        language: "css",
        code: '@keyframes flipping-18i5bq {\n' +
            '  0% {\n' +
            '    transform: perspective(67.2px) rotateX(-90deg);\n' +
            '  }\n' +
            '  50%, 75% {\n' +
            '    transform: perspective(67.2px) rotateX(0);\n' +
            '  }\n' +
            '  100% {\n' +
            '    opacity: 0;\n' +
            '    transform: perspective(67.2px) rotateX(0);\n' +
            '  }\n' +
            '}'
    },
]