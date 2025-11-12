export const normalCheckboxCodes = [
    {
        id: "main",
        displayText: "Checkbox.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            'import CheckedIcon from "./CheckedIcon.vue";\n' +
            'import UncheckIcon from "./UncheckIcon.vue";\n' +
            '\n' +
            'const isChecked = ref(false);\n' +
            '\n' +
            'function handleChange() {\n' +
            '  isChecked.value = !isChecked.value;\n' +
            '}\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <label class="flex items-center gap-[10px] cursor-pointer">\n' +
            '    <input\n' +
            '        type="checkbox"\n' +
            '        class="hidden"\n' +
            '        @change="handleChange"\n' +
            '    />\n' +
            '    <CheckedIcon v-if="isChecked"/>\n' +
            '    <UncheckIcon v-else/>\n' +
            '    <span class="text-[1.2rem] dark:text-[#abc2d3] text-[#424242]">ZenUI Library</span>\n' +
            '  </label>\n' +
            '</template>'
    },
    {
        id: "checkedIcon",
        displayText: "CheckedIcon.vue",
        language: "vue",
        code: '<template>\n' +
            '  <svg\n' +
            '      width="21"\n' +
            '      height="21"\n' +
            '      viewBox="0 0 20 20"\n' +
            '      fill="none"\n' +
            '      xmlns="http://www.w3.org/2000/svg"\n' +
            '  >\n' +
            '    <g id="Group 335">\n' +
            '      <rect\n' +
            '          id="Rectangle 331"\n' +
            '          x="-0.00012207"\n' +
            '          y="6.10352e-05"\n' +
            '          width="20"\n' +
            '          height="20"\n' +
            '          rx="4"\n' +
            '          class="fill-[#36af7b]"\n' +
            '          stroke="#3B9DF8"\n' +
            '      ></rect>\n' +
            '      <path\n' +
            '          id="Vector"\n' +
            '          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"\n' +
            '          fill="white"\n' +
            '      ></path>\n' +
            '    </g>\n' +
            '  </svg>\n' +
            '</template>'
    },
    {
        id: "uncheckedIcon",
        displayText: "UncheckedIcon.vue",
        language: "vue",
        code: '<template>\n' +
            '  <svg\n' +
            '      width="21"\n' +
            '      height="21"\n' +
            '      viewBox="0 0 20 20"\n' +
            '      fill="none"\n' +
            '      xmlns="http://www.w3.org/2000/svg"\n' +
            '  >\n' +
            '    <g id="Group 335">\n' +
            '      <rect\n' +
            '          id="Rectangle 331"\n' +
            '          x="-0.00012207"\n' +
            '          y="6.10352e-05"\n' +
            '          width="20"\n' +
            '          height="20"\n' +
            '          rx="4"\n' +
            '          class="fill-transparent"\n' +
            '          stroke="#ccc"\n' +
            '      ></rect>\n' +
            '    </g>\n' +
            '  </svg>\n' +
            '</template>'
    },
]

export const animatedCheckboxCodes = [
    {
        id: "main",
        displayText: "Checkbox.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            'import CheckedIcon from "./CheckedIcon.vue";\n' +
            'import UncheckIcon from "./UncheckIcon.vue";\n' +
            '\n' +
            'const isChecked = ref(false)\n' +
            '\n' +
            'function handleChange() {\n' +
            '  isChecked.value = !isChecked.value\n' +
            '}\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <label class="flex items-center gap-[10px] cursor-pointer">\n' +
            '    <input\n' +
            '        type="checkbox"\n' +
            '        class="hidden"\n' +
            '        @change="handleChange"\n' +
            '    />\n' +
            '    <span class="relative">\n' +
            '              <span\n' +
            '                  :class="`${\n' +
            '                  isChecked\n' +
            '                    ? \'opacity-100 z-20 scale-[1]\'\n' +
            '                    : \'opacity-0 scale-[0.4] z-[-1]\'\n' +
            '                } transition-all duration-200 absolute top-0 left-0`"\n' +
            '              >\n' +
            '                <CheckedIcon/>\n' +
            '              </span>\n' +
            '\n' +
            '              <span\n' +
            '                  :class="`${\n' +
            '                  !isChecked\n' +
            '                    ? \'opacity-100 z-20 scale-[1]\'\n' +
            '                    : \'opacity-0 scale-[0.4] z-[-1]\'\n' +
            '                } transition-all duration-200`"\n' +
            '              >\n' +
            '                <UncheckIcon/>\n' +
            '              </span>\n' +
            '    </span>\n' +
            '\n' +
            '    <span class="text-[1.2rem] dark:text-[#abc2d3] text-[#424242]">ZenUI Library</span>\n' +
            '  </label>\n' +
            '</template>'
    },
    {
        id: "checkedIcon",
        displayText: "CheckedIcon.vue",
        language: "vue",
        code: '<template>\n' +
            '  <svg\n' +
            '      width="21"\n' +
            '      height="21"\n' +
            '      viewBox="0 0 20 20"\n' +
            '      fill="none"\n' +
            '      xmlns="http://www.w3.org/2000/svg"\n' +
            '  >\n' +
            '    <g id="Group 335">\n' +
            '      <rect\n' +
            '          id="Rectangle 331"\n' +
            '          x="-0.00012207"\n' +
            '          y="6.10352e-05"\n' +
            '          width="20"\n' +
            '          height="20"\n' +
            '          rx="4"\n' +
            '          class="fill-[#36af7b]"\n' +
            '          stroke="#3B9DF8"\n' +
            '      ></rect>\n' +
            '      <path\n' +
            '          id="Vector"\n' +
            '          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"\n' +
            '          fill="white"\n' +
            '      ></path>\n' +
            '    </g>\n' +
            '  </svg>\n' +
            '</template>'
    },
    {
        id: "uncheckedIcon",
        displayText: "UncheckedIcon.vue",
        language: "vue",
        code: '<template>\n' +
            '  <svg\n' +
            '      width="21"\n' +
            '      height="21"\n' +
            '      viewBox="0 0 20 20"\n' +
            '      fill="none"\n' +
            '      xmlns="http://www.w3.org/2000/svg"\n' +
            '  >\n' +
            '    <g id="Group 335">\n' +
            '      <rect\n' +
            '          id="Rectangle 331"\n' +
            '          x="-0.00012207"\n' +
            '          y="6.10352e-05"\n' +
            '          width="20"\n' +
            '          height="20"\n' +
            '          rx="4"\n' +
            '          class="fill-transparent"\n' +
            '          stroke="#ccc"\n' +
            '      ></rect>\n' +
            '    </g>\n' +
            '  </svg>\n' +
            '</template>'
    },
]

export const groupCheckboxCodes = [
    {
        id: "main",
        displayText: "Checkbox.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            'import CheckedIcon from "./CheckedIcon.vue";\n' +
            'import UncheckIcon from "./UncheckIcon.vue";\n' +
            '\n' +
            'const selected = ref([1]);\n' +
            '\n' +
            'function handleChange(value) {\n' +
            '  if (selected.value.includes(value)) {\n' +
            '    selected.value = selected.value.filter((item) => item !== value);\n' +
            '  } else {\n' +
            '    selected.value.push(value);\n' +
            '  }\n' +
            '}\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="flex flex-col gap-[10px]">\n' +
            '    <label\n' +
            '        v-for="item in [1, 2, 3]"\n' +
            '        :key="item"\n' +
            '        class="flex items-center gap-[10px] cursor-pointer"\n' +
            '    >\n' +
            '      <input\n' +
            '          type="checkbox"\n' +
            '          name="checkboxGroup"\n' +
            '          :value="item"\n' +
            '          :checked="selected.includes(item)"\n' +
            '          @change="handleChange(item)"\n' +
            '          class="hidden"\n' +
            '      />\n' +
            '      <span class="relative">\n' +
            '                <span\n' +
            '                    :class="`${\n' +
            '                    selected.includes(item)\n' +
            '                      ? \'opacity-100 z-20 scale-[1]\'\n' +
            '                      : \'opacity-0 scale-[0.4] z-[-1]\'\n' +
            '                  } transition-all duration-200 absolute top-0 left-0`"\n' +
            '                >\n' +
            '                  <CheckedIcon/>\n' +
            '                </span>\n' +
            '\n' +
            '                <span\n' +
            '                    :class="`${\n' +
            '                    !selected.includes(item)\n' +
            '                      ? \'opacity-100 z-20 scale-[1]\'\n' +
            '                      : \'opacity-0 scale-[0.4] z-[-1]\'\n' +
            '                  } transition-all duration-200`"\n' +
            '                >\n' +
            '                  <UncheckIcon/>\n' +
            '                </span>\n' +
            '      </span>\n' +
            '      <span class="text-[1.2rem] dark:text-[#abc2d3] text-[#424242]">ZenUI Library</span>\n' +
            '    </label>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "checkedIcon",
        displayText: "CheckedIcon.vue",
        language: "vue",
        code: '<template>\n' +
            '  <svg\n' +
            '      width="21"\n' +
            '      height="21"\n' +
            '      viewBox="0 0 20 20"\n' +
            '      fill="none"\n' +
            '      xmlns="http://www.w3.org/2000/svg"\n' +
            '  >\n' +
            '    <g id="Group 335">\n' +
            '      <rect\n' +
            '          id="Rectangle 331"\n' +
            '          x="-0.00012207"\n' +
            '          y="6.10352e-05"\n' +
            '          width="20"\n' +
            '          height="20"\n' +
            '          rx="4"\n' +
            '          class="fill-[#36af7b]"\n' +
            '          stroke="#3B9DF8"\n' +
            '      ></rect>\n' +
            '      <path\n' +
            '          id="Vector"\n' +
            '          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"\n' +
            '          fill="white"\n' +
            '      ></path>\n' +
            '    </g>\n' +
            '  </svg>\n' +
            '</template>'
    },
    {
        id: "uncheckedIcon",
        displayText: "UncheckedIcon.vue",
        language: "vue",
        code: '<template>\n' +
            '  <svg\n' +
            '      width="21"\n' +
            '      height="21"\n' +
            '      viewBox="0 0 20 20"\n' +
            '      fill="none"\n' +
            '      xmlns="http://www.w3.org/2000/svg"\n' +
            '  >\n' +
            '    <g id="Group 335">\n' +
            '      <rect\n' +
            '          id="Rectangle 331"\n' +
            '          x="-0.00012207"\n' +
            '          y="6.10352e-05"\n' +
            '          width="20"\n' +
            '          height="20"\n' +
            '          rx="4"\n' +
            '          class="fill-transparent"\n' +
            '          stroke="#ccc"\n' +
            '      ></rect>\n' +
            '    </g>\n' +
            '  </svg>\n' +
            '</template>'
    },
]