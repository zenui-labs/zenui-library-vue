export const customNavigationOtpCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const length = 4;\n' +
    'const autoOtp = ref("");\n' +
    'const navigationInputs = ref([]);\n' +
    '\n' +
    'const onChange = (value) => {\n' +
    '  autoOtp.value = value;\n' +
    '};\n' +
    '\n' +
    'const handleInputChange = (e, index) => {\n' +
    '  const {value} = e.target;\n' +
    '  const newOtp = navigationInputs.value.map((input) => input?.value || "");\n' +
    '\n' +
    '  if (/^[0-9]$/.test(value) && value.length === 1) {\n' +
    '    newOtp[index] = value;\n' +
    '    onChange(newOtp.join(""));\n' +
    '  } else if (value === "") {\n' +
    '    newOtp[index] = "";\n' +
    '    onChange(newOtp.join(""));\n' +
    '  } else {\n' +
    '    e.target.value = value.slice(0, 1);\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="grid grid-cols-4 gap-[10px] w-full lg:w-[40%]">\n' +
    '    <input\n' +
    '        v-for="(_, index) in length"\n' +
    '        :key="index"\n' +
    '        ref="customNavigationInputs"\n' +
    '        class="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-[#36af7b]"\n' +
    '        placeholder="0"\n' +
    '        type="number"\n' +
    '        @wheel="$event.target.blur()"\n' +
    '        @input="(e) => handleInputChange(e, index)"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>\n'

export const autoNavigationOtpCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const length = 4;\n' +
    'const autoOtp = ref("");\n' +
    'const navigationInputs = ref([]);\n' +
    '\n' +
    'const onChange = (value) => {\n' +
    '  autoOtp.value = value;\n' +
    '};\n' +
    '\n' +
    'const handleInputChange = (e, index) => {\n' +
    '  const {value} = e.target;\n' +
    '  const newOtp = navigationInputs.value.map((input) => input?.value || "");\n' +
    '\n' +
    '  if (/^[0-9]$/.test(value) && value.length === 1) {\n' +
    '    newOtp[index] = value;\n' +
    '    onChange(newOtp.join(""));\n' +
    '\n' +
    '    if (index < length - 1) {\n' +
    '      navigationInputs.value[index + 1]?.focus();\n' +
    '    }\n' +
    '  } else if (value === "") {\n' +
    '    newOtp[index] = "";\n' +
    '    onChange(newOtp.join(""));\n' +
    '  } else {\n' +
    '    e.target.value = value.slice(0, 1);\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleAutoNavigationKeydown = (e, index) => {\n' +
    '  if (e.key === "Backspace" && !navigationInputs.value[index].value && index > 0) {\n' +
    '    navigationInputs.value[index - 1]?.focus();\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleAutoNavigationPaste = (e) => {\n' +
    '  e.preventDefault();\n' +
    '  const pastedData = e.clipboardData\n' +
    '      .getData("text")\n' +
    '      .replace(/[^0-9]/g, "")\n' +
    '      .slice(0, length);\n' +
    '\n' +
    '  const newOtp = navigationInputs.value.map((input) => input?.value || "");\n' +
    '\n' +
    '  for (let i = 0; i < pastedData.length && i < length; i++) {\n' +
    '    newOtp[i] = pastedData[i];\n' +
    '    navigationInputs.value[i].value = pastedData[i];\n' +
    '  }\n' +
    '\n' +
    '  onChange(newOtp.join(""));\n' +
    '  const focusIndex = Math.min(pastedData.length, length - 1);\n' +
    '  navigationInputs.value[focusIndex]?.focus();\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="grid grid-cols-4 gap-[10px] w-full lg:w-[40%]">\n' +
    '    <input\n' +
    '        v-for="(_, index) in length"\n' +
    '        :key="index"\n' +
    '        ref="navigationInputs"\n' +
    '        class="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-[#36af7b]"\n' +
    '        placeholder="0"\n' +
    '        type="number"\n' +
    '        @wheel="$event.target.blur()"\n' +
    '        @input="(e) => handleInputChange(e, index)"\n' +
    '        @keydown="(e) => handleAutoNavigationKeydown(e, index)"\n' +
    '        @paste="(e) => handleAutoNavigationPaste(e, index)"\n' +
    '    />\n' +
    '  </div>\n' +
    '</template>\n'