export const PublishButtonPreviewCode =
  "<script setup>\n" +
  "import { ref, onMounted, onBeforeUnmount } from 'vue';\n" +
  "import { Icon } from '@iconify/vue';\n" +
  "\n" +
  "const publishButtonActive = ref(false);\n" +
  "const publishButtonText = ref('Publish');\n" +
  "const publishButtonContent = ['Publish', 'Set as draft'];\n" +
  "\n" +
  "const handlePublishButtonClick = (item) => {\n" +
  "  publishButtonText.value = item;\n" +
  "  publishButtonActive.value = false;\n" +
  "};\n" +
  "\n" +
  "const handleClick = (event) => {\n" +
  "  if (!event.target.closest('.publishButtonOptions') && !event.target.closest('.publishButton')) {\n" +
  "    publishButtonActive.value = false;\n" +
  "  }\n" +
  "};\n" +
  "\n" +
  "onMounted(() => document.addEventListener('click', handleClick));\n" +
  "onBeforeUnmount(() => document.removeEventListener('click', handleClick));\n" +
  "</script>\n" +
  "\n" +
  "<template>\n" +
  '  <div :class="["p-8", publishButtonActive ? "mb-20" : "mb-4", "flex flex-wrap items-center gap-5 justify-center transition-all duration-300"]">\n' +
  '    <div class="flex items-center rounded bg-[#36af7b]/80 border-none outline-none text-secondary justify-between relative">\n' +
  '      <button class="text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">{{ publishButtonText }}</button>\n' +
  '      <div @click="publishButtonActive = !publishButtonActive" class="bg-[#36af7b] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">\n' +
  '        <Icon icon="mdi:menu-down" class="text-[2rem]" />\n' +
  "      </div>\n" +
  '      <ul :class="publishButtonActive ? "opacity-100 z-20 translate-y-0" : "opacity-0 z-[-1] translate-y-[-5px]""\n' +
  '          class="dark:bg-slate-800 dark:text-[#abc2d3] publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white absolute top-[46px] rounded right-0 text-text text-[0.9rem]">\n' +
  '        <li v-for="(item, index) in publishButtonContent" :key="index" class="py-2 px-6 hover:bg-gray-50 dark:hover:bg-slate-900/40 rounded cursor-pointer" @click="handlePublishButtonClick(item)">\n' +
  "          {{ item }}\n" +
  "        </li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";

export const ActionButtonPreviewCode =
  "<script setup>\n" +
  "import { ref, onMounted, onBeforeUnmount } from 'vue';\n" +
  "import { Icon } from '@iconify/vue';\n" +
  "\n" +
  "const actionButtonActive = ref(false);\n" +
  "const actionButtonText = ref('Mark as read');\n" +
  "const actionContents = [\n" +
  "  { label: 'Mark as read', icon: 'mdi:check' },\n" +
  "  { label: 'Copy', icon: 'mdi:content-copy' },\n" +
  "  { label: 'Edit', icon: 'mdi:pencil-outline' },\n" +
  "];\n" +
  "\n" +
  "const handleActionButtonClick = (item) => {\n" +
  "  actionButtonText.value = item;\n" +
  "  actionButtonActive.value = false;\n" +
  "};\n" +
  "\n" +
  "const handleClick = (event) => {\n" +
  "  if (!event.target.closest('.publishButtonOptions') && !event.target.closest('.publishButton')) {\n" +
  "    actionButtonActive.value = false;\n" +
  "  }\n" +
  "};\n" +
  "\n" +
  "onMounted(() => document.addEventListener('click', handleClick));\n" +
  "onBeforeUnmount(() => document.removeEventListener('click', handleClick));\n" +
  "</script>\n" +
  "\n" +
  "<template>\n" +
  '  <div :class="["p-8", actionButtonActive ? "mb-28" : "mb-4", "flex flex-wrap items-center gap-5 justify-center transition-all duration-300"]">\n' +
  '    <div class="flex items-center rounded bg-[#36af7b]/80 border-none outline-none text-secondary justify-between relative">\n' +
  '      <button class="text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">{{ actionButtonText }}</button>\n' +
  '      <div @click="actionButtonActive = !actionButtonActive" class="bg-[#36af7b] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">\n' +
  '        <Icon icon="mdi:menu-down" class="text-[2rem]" />\n' +
  "      </div>\n" +
  '      <ul :class="actionButtonActive ? "opacity-100 z-20 translate-y-0" : "opacity-0 z-[-1] translate-y-[-5px]""\n' +
  '          class="dark:bg-slate-800 dark:text-[#abc2d3] publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-full absolute top-[46px] rounded right-0 text-text text-[0.9rem]">\n' +
  '        <li v-for="(item, index) in actionContents" :key="index" class="py-2 px-3 flex items-center dark:hover:bg-slate-900/40 gap-[5px] hover:bg-gray-50 rounded cursor-pointer" @click="handleActionButtonClick(item.label)">\n' +
  '          <Icon :icon="item.icon" class="text-[#36af7b]" /> {{ item.label }}\n' +
  "        </li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";

export const SendButtonWithArrowPreviewCode =
  "<script setup>\n" +
  "import { ref, onMounted, onBeforeUnmount } from 'vue';\n" +
  "import { Icon } from '@iconify/vue';\n" +
  "\n" +
  "const sendButtonActive = ref(false);\n" +
  "const sendButtonText = ref('Send');\n" +
  "const sendButtonContent = [\n" +
  "  { label: 'Schedule for later', icon: 'mdi:calendar-clock' },\n" +
  "  { label: 'Save draft', icon: 'mdi:content-save-all-outline' },\n" +
  "  { label: 'Delete', icon: 'mdi:delete-outline' },\n" +
  "];\n" +
  "\n" +
  "const handleSendButtonClick = (item) => {\n" +
  "  sendButtonText.value = item;\n" +
  "  sendButtonActive.value = false;\n" +
  "};\n" +
  "\n" +
  "const handleClick = (event) => {\n" +
  "  if (!event.target.closest('.publishButtonOptions') && !event.target.closest('.publishButton')) {\n" +
  "    sendButtonActive.value = false;\n" +
  "  }\n" +
  "};\n" +
  "\n" +
  "onMounted(() => document.addEventListener('click', handleClick));\n" +
  "onBeforeUnmount(() => document.removeEventListener('click', handleClick));\n" +
  "</script>\n" +
  "\n" +
  "<template>\n" +
  '  <div :class="["p-8", sendButtonActive ? "mb-32" : "mb-4", "flex flex-wrap items-center gap-5 justify-center transition-all duration-300"]">\n' +
  '    <div class="flex items-center rounded bg-[#36af7b]/80 border-none outline-none text-secondary justify-between relative">\n' +
  '      <button class="text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">{{ sendButtonText }}</button>\n' +
  '      <div @click="sendButtonActive = !sendButtonActive" class="bg-[#36af7b] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">\n' +
  '        <Icon icon="mdi:menu-down" class="text-[2rem]" />\n' +
  "      </div>\n" +
  '      <ul :class="sendButtonActive ? "opacity-100 z-20 translate-y-4" : "opacity-0 z-[-1] translate-y-[-20px]""\n' +
  '          class="publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-max dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] absolute top-[46px] rounded border border-[#e6e6e6] right-0 text-text text-[0.9rem]">\n' +
  '        <div class="absolute -top-[8px] dark:bg-slate-800 dark:border-slate-700 right-3 border-l border-b border-[#e6e6e6] bg-white w-[15px] h-[15px] rotate-[135deg]"></div>\n' +
  '        <li v-for="(item, index) in sendButtonContent" :key="index" class="z-20 py-2 px-3 dark:hover:bg-slate-900/40 flex items-center gap-[8px] hover:bg-gray-50 rounded cursor-pointer" @click="handleSendButtonClick(item.label)">\n' +
  '          <Icon :icon="item.icon" class="text-[#36af7b]" /> {{ item.label }}\n' +
  "        </li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";
