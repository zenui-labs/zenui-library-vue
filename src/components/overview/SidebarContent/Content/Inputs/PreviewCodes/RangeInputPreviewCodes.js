export const sliderCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const value = ref(0)\n' +
    '\n' +
    'const handleChange = (event) => {\n' +
    '  const target = event.target\n' +
    '  value.value = Number(target.value)\n' +
    '}\n' +
    '\n' +
    'const handleClick = (event) => {\n' +
    '  const slider = (event.currentTarget).getBoundingClientRect()\n' +
    '  const newValue = ((event.clientX - slider.left) / slider.width) * 100\n' +
    '  value.value = Math.min(Math.max(newValue, 0), 100)\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex items-center justify-center">\n' +
    '    <div\n' +
    '        class="relative w-64 h-3 bg-gray-300 dark:bg-slate-700 rounded-full cursor-pointer"\n' +
    '        @click="handleClick"\n' +
    '    >\n' +
    '      <input\n' +
    '          type="range"\n' +
    '          min="0"\n' +
    '          max="100"\n' +
    '          :value="value"\n' +
    '          @input="handleChange"\n' +
    '          class="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"\n' +
    '      />\n' +
    '      <div\n' +
    '          class="absolute top-0 h-3 bg-[#108476] rounded-full"\n' +
    '          :style="{ width: value + \'%\' }"\n' +
    '      />\n' +
    '      <div\n' +
    '          class="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] dark:border-slate-300 cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"\n' +
    '          :style="{ left: value + \'%\' }"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const breakpointsSliderCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const value = ref(25)\n' +
    'const breakpoints = [0, 25, 50, 75, 100]\n' +
    '\n' +
    'const findNearestBreakpoint = (val) => {\n' +
    '  return breakpoints.reduce((prev, curr) =>\n' +
    '      Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev\n' +
    '  )\n' +
    '}\n' +
    '\n' +
    'const handleChange = (event) => {\n' +
    '  const target = event.target\n' +
    '  const newValue = Number(target.value)\n' +
    '  value.value = findNearestBreakpoint(newValue)\n' +
    '}\n' +
    '\n' +
    'const handleClick = (event) => {\n' +
    '  const slider = (event.currentTarget).getBoundingClientRect()\n' +
    '  const clickPosition = ((event.clientX - slider.left) / slider.width) * 100\n' +
    '  value.value = findNearestBreakpoint(clickPosition)\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex flex-col items-center justify-center">\n' +
    '    <div\n' +
    '        class="relative w-64 h-3 dark:bg-slate-700 bg-gray-300 rounded-full cursor-pointer"\n' +
    '        @click="handleClick"\n' +
    '    >\n' +
    '      <input\n' +
    '          type="range"\n' +
    '          min="0"\n' +
    '          max="100"\n' +
    '          :value="value"\n' +
    '          @input="handleChange"\n' +
    '          class="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"\n' +
    '      />\n' +
    '      <div\n' +
    '          class="absolute top-0 h-3 bg-[#108476] rounded-full"\n' +
    '          :style="{ width: value + \'%\' }"\n' +
    '      />\n' +
    '      <div\n' +
    '          class="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] dark:border-slate-300 cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"\n' +
    '          :style="{ left: value + \'%\' }"\n' +
    '      />\n' +
    '      <div\n' +
    '          v-for="(point, index) in breakpoints"\n' +
    '          :key="index"\n' +
    '          class="absolute top-[50%] w-[10px] h-[10px] transform -translate-x-1/2 translate-y-[-50%] bg-white dark:bg-slate-300 rounded-full border border-gray-500"\n' +
    '          :style="{ left: point + \'%\' }"\n' +
    '      />\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex justify-between w-64 mt-2">\n' +
    '                <span\n' +
    '                    v-for="(point, index) in breakpoints"\n' +
    '                    :key="index"\n' +
    '                    class="text-sm dark:text-[#abc2d3] text-gray-700"\n' +
    '                >\n' +
    '                  {{ point }}%\n' +
    '                </span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'