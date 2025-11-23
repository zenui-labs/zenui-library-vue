export const TimerStyle1Codes = '<script setup>\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const timeLeft = ref({\n' +
    '  days: 0,\n' +
    '  hours: 0,\n' +
    '  minutes: 0,\n' +
    '  seconds: 0\n' +
    '});\n' +
    '\n' +
    'const targetDate = \'2025-12-31T23:59:59\';\n' +
    'let timer = null;\n' +
    '\n' +
    'const calculateTimeLeft = () => {\n' +
    '  const difference = new Date(targetDate) - new Date();\n' +
    '\n' +
    '  if (difference > 0) {\n' +
    '    timeLeft.value = {\n' +
    '      days: Math.floor(difference / (1000 * 60 * 60 * 24)),\n' +
    '      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),\n' +
    '      minutes: Math.floor((difference / 1000 / 60) % 60),\n' +
    '      seconds: Math.floor((difference / 1000) % 60)\n' +
    '    };\n' +
    '  } else {\n' +
    '    clearInterval(timer);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const formatNumber = (number) => number.toString().padStart(2, \'0\');\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  calculateTimeLeft();\n' +
    '  timer = setInterval(calculateTimeLeft, 1000);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  clearInterval(timer);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'grid grid-cols-4 gap-[10px] mt-2\'>\n' +
    '    <div class=\'flex items-center justify-center flex-col gap-[0.2rem]\'>\n' +
    '      <h5 class=\'py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold\'>\n' +
    '        {{ formatNumber(timeLeft.days) }}</h5>\n' +
    '      <span class=\'text-[0.7rem]\'>Days</span>\n' +
    '    </div>\n' +
    '    <div class=\'flex items-center justify-center flex-col gap-[0.2rem]\'>\n' +
    '      <h5 class=\'py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold\'>\n' +
    '        {{ formatNumber(timeLeft.hours) }}</h5>\n' +
    '      <span class=\'text-[0.7rem]\'>Hours</span>\n' +
    '    </div>\n' +
    '    <div class=\'flex items-center justify-center flex-col gap-[0.2rem]\'>\n' +
    '      <h5 class=\'py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold\'>\n' +
    '        {{ formatNumber(timeLeft.minutes) }}</h5>\n' +
    '      <span class=\'text-[0.7rem]\'>Minutes</span>\n' +
    '    </div>\n' +
    '    <div class=\'flex items-center justify-center flex-col gap-[0.2rem]\'>\n' +
    '      <h5 class=\'py-2 px-3 dark:bg-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/20 text-[1.9rem] font-semibold\'>\n' +
    '        {{ formatNumber(timeLeft.seconds) }}</h5>\n' +
    '      <span class=\'text-[0.7rem]\'>Seconds</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const TimerStyle2Codes = '<script setup>\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const timeLeft = ref({\n' +
    '  days: 0,\n' +
    '  hours: 0,\n' +
    '  minutes: 0,\n' +
    '  seconds: 0\n' +
    '});\n' +
    '\n' +
    'const targetDate = \'2025-12-31T23:59:59\';\n' +
    'let timer = null;\n' +
    '\n' +
    'const calculateTimeLeft = () => {\n' +
    '  const difference = new Date(targetDate) - new Date();\n' +
    '\n' +
    '  if (difference > 0) {\n' +
    '    timeLeft.value = {\n' +
    '      days: Math.floor(difference / (1000 * 60 * 60 * 24)),\n' +
    '      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),\n' +
    '      minutes: Math.floor((difference / 1000 / 60) % 60),\n' +
    '      seconds: Math.floor((difference / 1000) % 60)\n' +
    '    };\n' +
    '  } else {\n' +
    '    clearInterval(timer);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const formatNumber = (number) => number.toString().padStart(2, \'0\');\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  calculateTimeLeft();\n' +
    '  timer = setInterval(calculateTimeLeft, 1000);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  clearInterval(timer);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="grid grid-cols-4 gap-8 p-4">\n' +
    '    <div class="text-center">\n' +
    '      <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{ formatNumber(timeLeft.days) }}</div>\n' +
    '      <div class="text-[0.7rem] text-gray-500">Days</div>\n' +
    '    </div>\n' +
    '    <div class="text-center">\n' +
    '      <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{\n' +
    '          formatNumber(timeLeft.hours)\n' +
    '        }}\n' +
    '      </div>\n' +
    '      <div class="text-[0.7rem] text-gray-500">Hours</div>\n' +
    '    </div>\n' +
    '    <div class="text-center">\n' +
    '      <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{\n' +
    '          formatNumber(timeLeft.minutes)\n' +
    '        }}\n' +
    '      </div>\n' +
    '      <div class="text-[0.7rem] text-gray-500">Minutes</div>\n' +
    '    </div>\n' +
    '    <div class="text-center">\n' +
    '      <div class="text-[2.2rem] leading-[38px] font-bold text-[#36af7b]">{{\n' +
    '          formatNumber(timeLeft.seconds)\n' +
    '        }}\n' +
    '      </div>\n' +
    '      <div class="text-[0.7rem] text-gray-500">Seconds</div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const TimerStyle3Codes = '<script setup>\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const timeLeft = ref({\n' +
    '  days: 0,\n' +
    '  hours: 0,\n' +
    '  minutes: 0,\n' +
    '  seconds: 0\n' +
    '});\n' +
    '\n' +
    'const targetDate = \'2025-12-31T23:59:59\';\n' +
    'let timer = null;\n' +
    '\n' +
    'const calculateTimeLeft = () => {\n' +
    '  const difference = new Date(targetDate) - new Date();\n' +
    '\n' +
    '  if (difference > 0) {\n' +
    '    timeLeft.value = {\n' +
    '      days: Math.floor(difference / (1000 * 60 * 60 * 24)),\n' +
    '      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),\n' +
    '      minutes: Math.floor((difference / 1000 / 60) % 60),\n' +
    '      seconds: Math.floor((difference / 1000) % 60)\n' +
    '    };\n' +
    '  } else {\n' +
    '    clearInterval(timer);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const formatNumber = (number) => number.toString().padStart(2, \'0\');\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  calculateTimeLeft();\n' +
    '  timer = setInterval(calculateTimeLeft, 1000);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  clearInterval(timer);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'w-full bg-blue-50 dark:bg-slate-900 flex items-center justify-center py-12 rounded-md\'>\n' +
    '    <div class=\'grid grid-cols-4 gap-[15px] mt-2\'>\n' +
    '      <div\n' +
    '          class=\'py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] md:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col\'>\n' +
    '        <h5 class=\'text-white text-[1.3rem] md:text-[1.9rem] pb-4 font-semibold\'>\n' +
    '          {{ formatNumber(timeLeft.days) }}</h5>\n' +
    '        <span\n' +
    '            class=\'absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md\'>Days</span>\n' +
    '      </div>\n' +
    '      <div\n' +
    '          class=\'py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] md:px-[23px] shadow-xl bg-blue-500 relative  flex items-center justify-center flex-col\'>\n' +
    '        <h5 class=\'text-white text-[1.3rem] md:text-[1.9rem] pb-4 font-semibold\'>\n' +
    '          {{ formatNumber(timeLeft.hours) }}</h5>\n' +
    '        <span\n' +
    '            class=\'absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md\'>Hours</span>\n' +
    '      </div>\n' +
    '      <div\n' +
    '          class=\'py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] md:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col\'>\n' +
    '        <h5 class=\'text-white text-[1.3rem] md:text-[1.9rem] pb-4 font-semibold\'>\n' +
    '          {{ formatNumber(timeLeft.minutes) }}</h5>\n' +
    '        <span\n' +
    '            class=\'absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md\'>Minutes</span>\n' +
    '      </div>\n' +
    '      <div\n' +
    '          class=\'py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] md:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col\'>\n' +
    '        <h5 class=\'text-white text-[1.3rem] md:text-[1.9rem] pb-4 font-semibold\'>\n' +
    '          {{ formatNumber(timeLeft.seconds) }}</h5>\n' +
    '        <span\n' +
    '            class=\'absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 dark:bg-slate-600 dark:text-[#abc2d3] rounded-b-md\'>Seconds</span>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const TimerStyle4Codes = '<script setup>\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const timeLeft = ref({\n' +
    '  days: 0,\n' +
    '  hours: 0,\n' +
    '  minutes: 0,\n' +
    '  seconds: 0\n' +
    '});\n' +
    '\n' +
    'const targetDate = \'2025-12-31T23:59:59\';\n' +
    'let timer = null;\n' +
    '\n' +
    'const calculateTimeLeft = () => {\n' +
    '  const difference = new Date(targetDate) - new Date();\n' +
    '\n' +
    '  if (difference > 0) {\n' +
    '    timeLeft.value = {\n' +
    '      days: Math.floor(difference / (1000 * 60 * 60 * 24)),\n' +
    '      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),\n' +
    '      minutes: Math.floor((difference / 1000 / 60) % 60),\n' +
    '      seconds: Math.floor((difference / 1000) % 60)\n' +
    '    };\n' +
    '  } else {\n' +
    '    clearInterval(timer);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const formatNumber = (number) => number.toString().padStart(2, \'0\');\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  calculateTimeLeft();\n' +
    '  timer = setInterval(calculateTimeLeft, 1000);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  clearInterval(timer);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'bg-gradient-to-b from-[#4c468f] to-[#c65f72] w-full py-12 rounded-md\'>\n' +
    '    <div class=\'flex items-start gap-[5px] md:gap-[15px] justify-center\'>\n' +
    '      <div class=\'flex items-center justify-center flex-col gap-[0.5rem]\'>\n' +
    '        <div class=\'flex items-center gap-[8px]\'>\n' +
    '          <p class=\'bg-white md:px-4 py-3 w-[35px] md:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] md:text-[2rem]\'>\n' +
    '            {{ formatNumber(timeLeft.hours).slice(0, 1) }}</p>\n' +
    '          <p class=\'bg-white md:px-4 py-3 w-[35px] md:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] md:text-[2rem]\'>\n' +
    '            {{ formatNumber(timeLeft.hours).slice(1) }}</p>\n' +
    '        </div>\n' +
    '        <span class=\'text-white font-normal text-[0.8rem] md:text-[0.9rem]\'>Hours</span>\n' +
    '      </div>\n' +
    '\n' +
    '      <span class=\'text-[2.3rem] text-white md:mt-1\'>:</span>\n' +
    '\n' +
    '      <div class=\'flex items-center justify-center flex-col gap-[0.5rem]\'>\n' +
    '        <div class=\'flex items-center gap-[8px]\'>\n' +
    '          <p class=\'bg-white md:px-4 py-3 w-[35px] md:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] md:text-[2rem]\'>\n' +
    '            {{ formatNumber(timeLeft.minutes).slice(0, 1) }}</p>\n' +
    '          <p class=\'bg-white md:px-4 py-3 w-[35px] md:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] md:text-[2rem]\'>\n' +
    '            {{ formatNumber(timeLeft.minutes).slice(1) }}</p>\n' +
    '        </div>\n' +
    '        <span class=\'text-white font-normal text-[0.8rem] md:text-[0.9rem]\'>Minutes</span>\n' +
    '      </div>\n' +
    '\n' +
    '      <span class=\'text-[2.3rem] text-white md:mt-1\'>:</span>\n' +
    '\n' +
    '      <div class=\'flex items-center justify-center flex-col gap-[0.5rem]\'>\n' +
    '        <div class=\'flex items-center gap-[8px]\'>\n' +
    '          <p class=\'bg-white md:px-4 py-3 w-[35px] md:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] md:text-[2rem]\'>\n' +
    '            {{ formatNumber(timeLeft.seconds).slice(0, 1) }}</p>\n' +
    '          <p class=\'bg-white md:px-4 py-3 w-[35px] md:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] md:text-[2rem]\'>\n' +
    '            {{ formatNumber(timeLeft.seconds).slice(1) }}</p>\n' +
    '        </div>\n' +
    '        <span class=\'text-white font-normal text-[0.8rem] md:text-[0.9rem]\'>Seconds</span>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const TimerStyle5Codes = '<script setup>\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const timeLeft = ref({\n' +
    '  days: 0,\n' +
    '  hours: 0,\n' +
    '  minutes: 0,\n' +
    '  seconds: 0\n' +
    '});\n' +
    '\n' +
    'const targetDate = \'2025-12-31T23:59:59\';\n' +
    'let timer = null;\n' +
    '\n' +
    'const calculateTimeLeft = () => {\n' +
    '  const difference = new Date(targetDate) - new Date();\n' +
    '\n' +
    '  if (difference > 0) {\n' +
    '    timeLeft.value = {\n' +
    '      days: Math.floor(difference / (1000 * 60 * 60 * 24)),\n' +
    '      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),\n' +
    '      minutes: Math.floor((difference / 1000 / 60) % 60),\n' +
    '      seconds: Math.floor((difference / 1000) % 60)\n' +
    '    };\n' +
    '  } else {\n' +
    '    clearInterval(timer);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const formatNumber = (number) => number.toString().padStart(2, \'0\');\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  calculateTimeLeft();\n' +
    '  timer = setInterval(calculateTimeLeft, 1000);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  clearInterval(timer);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex items-end gap-[5px] p-4">\n' +
    '    <div class=\'flex items-end gap-[1px]\'>\n' +
    '      <h4 class=\'text-[2.5rem] dark:text-[#abc2d3] md:text-[3rem] leading-[45px] md:leading-[50px] font-semibold text-gray-900\'>\n' +
    '        {{ formatNumber(timeLeft.days) }}</h4>\n' +
    '      <span class=\'text-[1.3rem] font-semibold text-orange-500\'>d</span>\n' +
    '    </div>\n' +
    '    <div class=\'flex items-end gap-[1px]\'>\n' +
    '      <h4 class=\'text-[2.5rem] dark:text-[#abc2d3] md:text-[3rem] leading-[45px] md:leading-[50px] font-semibold text-gray-900\'>\n' +
    '        {{ formatNumber(timeLeft.hours) }}</h4>\n' +
    '      <span class=\'text-[1.3rem] font-semibold text-orange-500\'>h</span>\n' +
    '    </div>\n' +
    '    <div class=\'flex items-end gap-[1px]\'>\n' +
    '      <h4 class=\'text-[2.5rem] dark:text-[#abc2d3] md:text-[3rem] leading-[45px] md:leading-[50px] font-semibold text-gray-900\'>\n' +
    '        {{ formatNumber(timeLeft.minutes) }}</h4>\n' +
    '      <span class=\'text-[1.3rem] font-semibold text-orange-500\'>m</span>\n' +
    '    </div>\n' +
    '    <p class=\'text-[1.3rem] dark:text-[#abc2d3] font-semibold text-gray-900\'>{{\n' +
    '        formatNumber(timeLeft.seconds)\n' +
    '      }}</p>\n' +
    '  </div>\n' +
    '</template>'

export const TimerStyle6Codes = [
    {
        id: "main",
        displayText: "Timer.vue",
        language: "vue",
        code: '<template>\n' +
            '  <div class="flex flex-wrap justify-center items-center space-x-6 p-4">\n' +
            '    <CircleTimer :value="timeLeft2.hours" type="hours"/>\n' +
            '    <CircleTimer :value="timeLeft2.minutes" type="minutes"/>\n' +
            '    <CircleTimer :value="timeLeft2.seconds" type="seconds"/>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "circle",
        displayText: "Circle.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {computed} from \'vue\'\n' +
            '\n' +
            'const props = defineProps({\n' +
            '  value: Number,\n' +
            '  type: String\n' +
            '})\n' +
            '\n' +
            'const size = 100\n' +
            'const strokeWidth = 7\n' +
            'const radius = (size - strokeWidth) / 2\n' +
            'const circumference = radius * 2 * Math.PI\n' +
            '\n' +
            'const durations = {\n' +
            '  days: 365,\n' +
            '  hours: 24,\n' +
            '  minutes: 60,\n' +
            '  seconds: 60\n' +
            '}\n' +
            '\n' +
            'const progress = computed(() => (props.value / durations[props.type]) * 100)\n' +
            'const strokeDashoffset = computed(() => circumference - (progress.value / 100) * circumference)\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="relative" :style="{ width: size + \'px\', height: size + \'px\' }">\n' +
            '    <svg class="absolute top-0 left-0" :width="size" :height="size">\n' +
            '      <circle\n' +
            '          :cx="size / 2"\n' +
            '          :cy="size / 2"\n' +
            '          :r="radius"\n' +
            '          fill="transparent"\n' +
            '          stroke="#e5e5e5"\n' +
            '          class="dark:stroke-[#1e293b]"\n' +
            '          :stroke-width="strokeWidth"\n' +
            '      />\n' +
            '    </svg>\n' +
            '\n' +
            '    <svg class="absolute top-0 left-0" :width="size" :height="size">\n' +
            '      <circle\n' +
            '          :cx="size / 2"\n' +
            '          :cy="size / 2"\n' +
            '          :r="radius"\n' +
            '          fill="transparent"\n' +
            '          stroke="#36af7b"\n' +
            '          :stroke-width="strokeWidth"\n' +
            '          :stroke-dasharray="circumference"\n' +
            '          :stroke-dashoffset="strokeDashoffset"\n' +
            '          stroke-linecap="round"\n' +
            '          style="transition: stroke-dashoffset 1s linear; transform: rotate(-90deg); transform-origin: 50% 50%;"\n' +
            '      />\n' +
            '    </svg>\n' +
            '\n' +
            '    <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">\n' +
            '      <div class="text-[1.2rem] font-semibold text-[#36af7b]">{{ value }}</div>\n' +
            '      <div class="text-[0.6rem] text-gray-500">\n' +
            '        {{ type.charAt(0).toUpperCase() + type.slice(1) }}\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>\n'
    },
]