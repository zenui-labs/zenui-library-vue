export const inlineCheckingPasswordCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isEyeOpen = ref(false);\n' +
    'const strongPassword = ref(\'\');\n' +
    '\n' +
    'const signal = ref({\n' +
    '  uppercase: false,\n' +
    '  lowercase: false,\n' +
    '  number: false,\n' +
    '  symbol: false,\n' +
    '  length: false,\n' +
    '  strong: false,\n' +
    '});\n' +
    '\n' +
    'function getErrorText() {\n' +
    '  switch (signal.value) {\n' +
    '    case \'length-error\':\n' +
    '      return \'Password must be at least 8 characters long.\';\n' +
    '    case \'uppercase-error\':\n' +
    '      return \'Password must contain at least one uppercase letter.\';\n' +
    '    case \'lowercase-error\':\n' +
    '      return \'Password must contain at least one lowercase letter.\';\n' +
    '    case \'number-error\':\n' +
    '      return \'Password must contain at least one number.\';\n' +
    '    case \'symbol-error\':\n' +
    '      return \'Password must contain at least one special character.\';\n' +
    '    default:\n' +
    '      return \'Wow! Very strong password.\';\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'function handlePasswordChange(e) {\n' +
    '  const password = e.target.value;\n' +
    '  strongPassword.value = password;\n' +
    '\n' +
    '  const hasUpperCase = /[A-Z]/.test(password);\n' +
    '  const hasLowerCase = /[a-z]/.test(password);\n' +
    '  const hasNumber = /[0-9]/.test(password);\n' +
    '  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);\n' +
    '\n' +
    '  signal.value = {\n' +
    '    uppercase: hasUpperCase,\n' +
    '    lowercase: hasLowerCase,\n' +
    '    number: hasNumber,\n' +
    '    symbol: hasSymbol,\n' +
    '    length: password.length >= 8,\n' +
    '    strong: password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSymbol,\n' +
    '  }\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'w-full lg:w-[80%]\'>\n' +
    '    <label\n' +
    '        for=\'password\'\n' +
    '        class=\'text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]\'\n' +
    '    >\n' +
    '      Password\n' +
    '    </label>\n' +
    '    <div class=\'w-full relative\'>\n' +
    '      <input\n' +
    '          :type="isEyeOpen ? \'text\' : \'password\'"\n' +
    '          name=\'password\'\n' +
    '          id=\'password\'\n' +
    '          @input="handlePasswordChange"\n' +
    '          placeholder=\'Password\'\n' +
    '          class=\'peer border-[#e5eaf2] dark:border-slate-600 dark:bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#36af7b] transition-colors duration-300\'\n' +
    '      />\n' +
    '\n' +
    '      <p\n' +
    '          v-if="strongPassword"\n' +
    '          :class="`${\n' +
    '                  signal === \'normal\'\n' +
    '              ? \'text-red-500\'\n' +
    '              : \'text-green-600\'\n' +
    '              } text-[0.9rem] mt-1`"\n' +
    '      >\n' +
    '        <p v-if="signal === \'strong\'" class=\'text-green-600 flex items-center gap-[5px]\'>\n' +
    '          <Icon icon="weui:done2-outlined" class=\'text-[1.1rem]\'/>\n' +
    '          {{ getErrorText() }}\n' +
    '        </p>\n' +
    '        <p v-else class=\'text-red-500 flex items-center gap-[5px]\'>\n' +
    '          <Icon icon="material-symbols:error-outline-rounded" class=\'text-[1.1rem]\'/>\n' +
    '          {{ getErrorText() }}\n' +
    '        </p>\n' +
    '      </p>\n' +
    '\n' +
    '      <Icon icon="iconamoon:eye-light"\n' +
    '            v-if="isEyeOpen"\n' +
    '            class=\'absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer\'\n' +
    '            @click="isEyeOpen = false"\n' +
    '      />\n' +
    '      <Icon icon="basil:eye-closed-outline"\n' +
    '            v-else\n' +
    '            class=\'absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer\'\n' +
    '            @click="isEyeOpen = true"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const checkByIndicatorCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {computed, ref} from "vue";\n' +
    '\n' +
    'const isEyeOpen = ref(false);\n' +
    'const strongPassword = ref(\'\');\n' +
    '\n' +
    'const signal = ref({\n' +
    '  uppercase: false,\n' +
    '  lowercase: false,\n' +
    '  number: false,\n' +
    '  symbol: false,\n' +
    '  length: false,\n' +
    '  strong: false,\n' +
    '});\n' +
    '\n' +
    'function countTrueItems(obj) {\n' +
    '  const totalItems = Object.keys(obj).length;\n' +
    '  const trueItems = Object.values(obj).filter(item => item).length;\n' +
    '  return Math.floor(trueItems / totalItems * 100);\n' +
    '}\n' +
    '\n' +
    'const strengthProgress = computed(() => {\n' +
    '  return countTrueItems(signal.value);\n' +
    '});\n' +
    '\n' +
    'function handlePasswordChange(e) {\n' +
    '  const password = e.target.value;\n' +
    '  strongPassword.value = password;\n' +
    '\n' +
    '  const hasUpperCase = /[A-Z]/.test(password);\n' +
    '  const hasLowerCase = /[a-z]/.test(password);\n' +
    '  const hasNumber = /[0-9]/.test(password);\n' +
    '  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);\n' +
    '\n' +
    '  signal.value = {\n' +
    '    uppercase: hasUpperCase,\n' +
    '    lowercase: hasLowerCase,\n' +
    '    number: hasNumber,\n' +
    '    symbol: hasSymbol,\n' +
    '    length: password.length >= 8,\n' +
    '    strong: password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSymbol,\n' +
    '  }\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full lg:w-[80%]">\n' +
    '    <label\n' +
    '        for="password"\n' +
    '        class="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"\n' +
    '    >\n' +
    '      Password\n' +
    '    </label>\n' +
    '\n' +
    '    <div class="w-full relative">\n' +
    '      <input\n' +
    '          :type="isEyeOpen ? \'text\' : \'password\'"\n' +
    '          name="password"\n' +
    '          id="password"\n' +
    '          @input="handlePasswordChange"\n' +
    '          placeholder="Password"\n' +
    '          class="peer border-[#e5eaf2] dark:border-slate-600 dark:bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#36af7b] transition-colors duration-300"\n' +
    '      />\n' +
    '\n' +
    '      <div class="w-full mt-2 flex items-center gap-[5px]">\n' +
    '        <div\n' +
    '            v-for="(progress, index) in [0, 16, 33, 50, 90]"\n' +
    '            :key="index"\n' +
    '            :class="strengthProgress > progress\n' +
    '            ? \'bg-[#36af7b]\'\n' +
    '            : \'dark:bg-slate-700 bg-gray-200\'"\n' +
    '            class="h-[9px] w-full rounded-md"\n' +
    '        ></div>\n' +
    '      </div>\n' +
    '\n' +
    '      <Icon icon="iconamoon:eye-light"\n' +
    '            v-if="isEyeOpen"\n' +
    '            class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = false"\n' +
    '      />\n' +
    '      <Icon icon="basil:eye-closed-outline"\n' +
    '            v-else\n' +
    '            class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = true"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const checkPasswordWithHintCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isEyeOpen = ref(false);\n' +
    'const strongPassword = ref(\'\');\n' +
    '\n' +
    'const signal = ref({\n' +
    '  uppercase: false,\n' +
    '  lowercase: false,\n' +
    '  number: false,\n' +
    '  symbol: false,\n' +
    '  length: false,\n' +
    '  strong: false,\n' +
    '});\n' +
    '\n' +
    'const hintList = [\n' +
    '  {\n' +
    '    text: \'Minimum number of characters is 8.\',\n' +
    '    type: \'length\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain uppercase.\',\n' +
    '    type: \'uppercase\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain lowercase.\',\n' +
    '    type: \'lowercase\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain numbers.\',\n' +
    '    type: \'number\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain special characters.\',\n' +
    '    type: \'symbol\'\n' +
    '  },\n' +
    ']\n' +
    '\n' +
    'function handlePasswordChange(e) {\n' +
    '  const password = e.target.value;\n' +
    '  strongPassword.value = password;\n' +
    '\n' +
    '  const hasUpperCase = /[A-Z]/.test(password);\n' +
    '  const hasLowerCase = /[a-z]/.test(password);\n' +
    '  const hasNumber = /[0-9]/.test(password);\n' +
    '  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);\n' +
    '\n' +
    '  signal.value = {\n' +
    '    uppercase: hasUpperCase,\n' +
    '    lowercase: hasLowerCase,\n' +
    '    number: hasNumber,\n' +
    '    symbol: hasSymbol,\n' +
    '    length: password.length >= 8,\n' +
    '    strong: password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSymbol,\n' +
    '  }\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full lg:w-[80%]">\n' +
    '    <label\n' +
    '        for="password"\n' +
    '        class="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"\n' +
    '    >\n' +
    '      Password\n' +
    '    </label>\n' +
    '\n' +
    '    <div class="w-full relative">\n' +
    '      <input\n' +
    '          :type="isEyeOpen ? \'text\' : \'password\'"\n' +
    '          name="password"\n' +
    '          id="password"\n' +
    '          @input="handlePasswordChange"\n' +
    '          placeholder="Password"\n' +
    '          class="peer border-[#e5eaf2] dark:border-slate-600 dark:bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#36af7b] transition-colors duration-300"\n' +
    '      />\n' +
    '\n' +
    '      <h3 class="text-gray-900 dark:text-[#abc2d3] font-[500] text-[1rem] mt-4">\n' +
    '        Your password must contain:\n' +
    '      </h3>\n' +
    '\n' +
    '      <div class="w-full mt-2 flex-col flex gap-[6px]">\n' +
    '        <div\n' +
    '            v-for="(hint, index) in hintList"\n' +
    '            :key="index"\n' +
    '            :class="signal[hint.type]\n' +
    '            ? \'text-green-500\'\n' +
    '            : \'dark:text-slate-500 text-gray-500\'"\n' +
    '            class="text-[0.8rem] flex items-center gap-[8px]"\n' +
    '        >\n' +
    '          <Icon icon="weui:done-outlined" v-if="signal[hint.type]" class="text-[1rem]"/>\n' +
    '          <Icon icon="icon-park-outline:close" v-else/>\n' +
    '          {{ hint.text }}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <Icon icon="iconamoon:eye-light"\n' +
    '            v-if="isEyeOpen"\n' +
    '            class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = false"\n' +
    '      />\n' +
    '      <Icon icon="basil:eye-closed-outline"\n' +
    '            v-else\n' +
    '            class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = true"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const checkPasswordWithHintDropdownCodes = '<script setup>\n' +
    'import {Icon} from "@iconify/vue";\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isEyeOpen = ref(false);\n' +
    'const strongPassword = ref(\'\');\n' +
    'const isDropdownOpen = ref(false);\n' +
    '\n' +
    'const signal = ref({\n' +
    '  uppercase: false,\n' +
    '  lowercase: false,\n' +
    '  number: false,\n' +
    '  symbol: false,\n' +
    '  length: false,\n' +
    '  strong: false,\n' +
    '});\n' +
    '\n' +
    'const hintList = [\n' +
    '  {\n' +
    '    text: \'Minimum number of characters is 8.\',\n' +
    '    type: \'length\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain uppercase.\',\n' +
    '    type: \'uppercase\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain lowercase.\',\n' +
    '    type: \'lowercase\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain numbers.\',\n' +
    '    type: \'number\'\n' +
    '  },\n' +
    '  {\n' +
    '    text: \'Should contain special characters.\',\n' +
    '    type: \'symbol\'\n' +
    '  },\n' +
    ']\n' +
    '\n' +
    'function handlePasswordChange(e) {\n' +
    '  const password = e.target.value;\n' +
    '  strongPassword.value = password;\n' +
    '\n' +
    '  const hasUpperCase = /[A-Z]/.test(password);\n' +
    '  const hasLowerCase = /[a-z]/.test(password);\n' +
    '  const hasNumber = /[0-9]/.test(password);\n' +
    '  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);\n' +
    '\n' +
    '  signal.value = {\n' +
    '    uppercase: hasUpperCase,\n' +
    '    lowercase: hasLowerCase,\n' +
    '    number: hasNumber,\n' +
    '    symbol: hasSymbol,\n' +
    '    length: password.length >= 8,\n' +
    '    strong: password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSymbol,\n' +
    '  }\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="w-full lg:w-[80%]">\n' +
    '    <label\n' +
    '        for="password"\n' +
    '        class="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"\n' +
    '    >\n' +
    '      Password\n' +
    '    </label>\n' +
    '\n' +
    '    <div class="w-full relative">\n' +
    '      <input\n' +
    '          :type="isEyeOpen ? \'text\' : \'password\'"\n' +
    '          name="password"\n' +
    '          id="password"\n' +
    '          @input="handlePasswordChange"\n' +
    '          @focus="isDropdownOpen = true"\n' +
    '          @blur="isDropdownOpen = false"\n' +
    '          placeholder="Password"\n' +
    '          class="peer border-[#e5eaf2] dark:border-slate-600 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#36af7b] transition-colors duration-300"\n' +
    '      />\n' +
    '\n' +
    '      <Transition\n' +
    '          enter-active-class="transition-all duration-200 ease-out"\n' +
    '          enter-from-class="opacity-0 -translate-y-2"\n' +
    '          enter-to-class="opacity-100 translate-y-0"\n' +
    '          leave-active-class="transition-all duration-200 ease-in"\n' +
    '          leave-from-class="opacity-100 translate-y-0"\n' +
    '          leave-to-class="opacity-0 -translate-y-2"\n' +
    '      >\n' +
    '        <div\n' +
    '            v-if="isDropdownOpen"\n' +
    '            class="bg-white boxShadow dark:bg-slate-800 rounded-md py-3 px-4 absolute top-[60px] left-0 w-full"\n' +
    '        >\n' +
    '          <h3 class="text-gray-900 dark:text-[#abc2d3] font-[500] text-[1rem]">\n' +
    '            Your password must contain:\n' +
    '          </h3>\n' +
    '\n' +
    '          <div class="w-full mt-2 flex-col flex gap-[6px]">\n' +
    '            <div\n' +
    '                v-for="(hint, index) in hintList"\n' +
    '                :key="index"\n' +
    '                :class="signal[hint.type]\n' +
    '              ? \'text-green-500\'\n' +
    '              : \'dark:text-slate-400 text-gray-500\'"\n' +
    '                class="text-[0.8rem] flex items-center gap-[8px]"\n' +
    '            >\n' +
    '              <Icon icon="weui:done-outlined" v-if="signal[hint.type]" class="text-[1rem]"/>\n' +
    '              <Icon icon="icon-park-outline:close" v-else/>\n' +
    '              {{ hint.text }}\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </Transition>\n' +
    '\n' +
    '      <Icon icon="iconamoon:eye-light"\n' +
    '            v-if="isEyeOpen"\n' +
    '            class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = false"\n' +
    '      />\n' +
    '      <Icon icon="basil:eye-closed-outline"\n' +
    '            v-else\n' +
    '            class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"\n' +
    '            @click="isEyeOpen = true"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'