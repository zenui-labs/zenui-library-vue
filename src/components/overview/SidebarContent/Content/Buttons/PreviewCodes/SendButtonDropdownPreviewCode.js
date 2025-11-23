export const sendButtonWithArrowPreviewCode =
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
  '  <div :class=\"[\"p-8\", sendButtonActive ? \"mb-32\" : \"mb-4\", \"flex flex-wrap items-center gap-5 justify-center transition-all duration-300\"]\">\n' +
  '    <div class=\"flex items-center rounded bg-[#36af7b]/80 border-none outline-none text-secondary justify-between relative\">\n' +
  '      <button class=\"text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto\">{{ sendButtonText }}</button>\n' +
  '      <div @click=\"sendButtonActive = !sendButtonActive\" class=\"bg-[#36af7b] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton\">\n' +
  '        <Icon icon=\"mdi:menu-down\" class=\"text-[2rem]\" />\n' +
  "      </div>\n" +
  '      <ul :class=\"sendButtonActive ? \"opacity-100 z-20 translate-y-4\" : \"opacity-0 z-[-1] translate-y-[-20px]\"\"\n' +
  '          class=\"publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-max dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] absolute top-[46px] rounded border border-[#e6e6e6] right-0 text-text text-[0.9rem]\">\n' +
  '        <div class=\"absolute -top-[8px] dark:bg-slate-800 dark:border-slate-700 right-3 border-l border-b border-[#e6e6e6] bg-white w-[15px] h-[15px] rotate-[135deg]\"></div>\n' +
  '        <li v-for=\"(item, index) in sendButtonContent\" :key=\"index\" class=\"z-20 py-2 px-3 dark:hover:bg-slate-900/40 flex items-center gap-[8px] hover:bg-gray-50 rounded cursor-pointer\" @click=\"handleSendButtonClick(item.label)\">\n' +
  '          <Icon :icon=\"item.icon\" class=\"text-[#36af7b]\" /> {{ item.label }}\n' +
  "        </li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";