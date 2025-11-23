export const actionButtonPreviewCode =
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
  '  <div :class=\"[\"p-8\", actionButtonActive ? \"mb-28\" : \"mb-4\", \"flex flex-wrap items-center gap-5 justify-center transition-all duration-300\"]\">\n' +
  '    <div class=\"flex items-center rounded bg-[#36af7b]/80 border-none outline-none text-secondary justify-between relative\">\n' +
  '      <button class=\"text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto\">{{ actionButtonText }}</button>\n' +
  '      <div @click=\"actionButtonActive = !actionButtonActive\" class=\"bg-[#36af7b] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton\">\n' +
  '        <Icon icon=\"mdi:menu-down\" class=\"text-[2rem]\" />\n' +
  "      </div>\n" +
  '      <ul :class=\"actionButtonActive ? \"opacity-100 z-20 translate-y-0\" : \"opacity-0 z-[-1] translate-y-[-5px]\"\"\n' +
  '          class=\"dark:bg-slate-800 dark:text-[#abc2d3] publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-full absolute top-[46px] rounded right-0 text-text text-[0.9rem]\">\n' +
  '        <li v-for=\"(item, index) in actionContents\" :key=\"index\" class=\"py-2 px-3 flex items-center dark:hover:bg-slate-900/40 gap-[5px] hover:bg-gray-50 rounded cursor-pointer\" @click=\"handleActionButtonClick(item.label)\">\n' +
  '          <Icon :icon=\"item.icon\" class=\"text-[#36af7b]\" /> {{ item.label }}\n' +
  "        </li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";