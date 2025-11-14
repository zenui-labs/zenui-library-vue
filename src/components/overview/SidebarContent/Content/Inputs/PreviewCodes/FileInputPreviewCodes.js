export const fileUploadWithIconCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const image = ref("");\n' +
    '\n' +
    'const handleUploadImage = () => {\n' +
    '  document.getElementById("fileInput").click();\n' +
    '};\n' +
    '\n' +
    'const handleFileChange = (e) => {\n' +
    '  const file = e.target.files[0];\n' +
    '  if (file) {\n' +
    '    image.value = URL.createObjectURL(file);\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">\n' +
    '    <input\n' +
    '        type="file"\n' +
    '        name="image"\n' +
    '        id="fileInput"\n' +
    '        class="hidden"\n' +
    '        @change="handleFileChange"\n' +
    '    />\n' +
    '\n' +
    '    <div\n' +
    '        v-if="image === \'\'"\n' +
    '        class="w-full lg:w-[90%] flex items-center dark:border-slate-600 justify-center flex-col gap-4 border-[#e5eaf2] border rounded-md py-6 cursor-pointer"\n' +
    '        @click="handleUploadImage"\n' +
    '    >\n' +
    '      <Icon icon="mdi:upload" class="text-[2rem] text-[#36af7b] dark:text-[#abc2d3]" />\n' +
    '      <p class="text-[#36af7b] dark:text-[#abc2d3]">Browse to upload your file</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div v-else class="relative w-full lg:w-[80%] h-[300px]">\n' +
    '      <img :src="image" alt="image" class="w-full h-full object-cover" />\n' +
    '\n' +
    '      <Icon\n' +
    '          icon="mdi:delete"\n' +
    '          class="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"\n' +
    '          @click="image = \'\'"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const fileUploadWithButtonCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const image = ref("");\n' +
    '\n' +
    'const handleImageUpload = () => {\n' +
    '  document.getElementById("fileInput").click();\n' +
    '};\n' +
    '\n' +
    'const handleFileChange = (e) => {\n' +
    '  const file = e.target.files[0];\n' +
    '  if (file) {\n' +
    '    image.value = URL.createObjectURL(file);\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">\n' +
    '    <input\n' +
    '        type="file"\n' +
    '        name="image"\n' +
    '        id="fileInput"\n' +
    '        class="hidden"\n' +
    '        @change="handleFileChange"\n' +
    '    />\n' +
    '\n' +
    '    <div\n' +
    '        v-if="image === \'\'"\n' +
    '        class="w-full lg:w-[90%] flex dark:border-slate-700 dark:bg-slate-900 items-center justify-center flex-col bg-white border border-dashed border-[#36af7b] rounded-md py-6"\n' +
    '    >\n' +
    '      <Icon icon="ion:cloud-upload" class="text-[3rem] text-[#36af7b]" />\n' +
    '\n' +
    '      <p class="mt-2 text-[#424242] dark:text-[#abc2d3]">Drag and drop here</p>\n' +
    '      <p class="text-[#424242] dark:text-[#abc2d3]">or</p>\n' +
    '\n' +
    '      <button\n' +
    '          class="px-6 py-1.5 text-[#36af7b]"\n' +
    '          @click="handleImageUpload"\n' +
    '      >\n' +
    '        Browse\n' +
    '      </button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div v-else class="relative w-full lg:w-[80%] h-[200px]">\n' +
    '      <img :src="image" alt="image" class="w-full h-full object-cover" />\n' +
    '\n' +
    '      <Icon\n' +
    '          icon="mdi:delete"\n' +
    '          class="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"\n' +
    '          @click="image = \'\'"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const fileUploadWithHeadingCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const image = ref("");\n' +
    '\n' +
    'const handleUploadImage = () => {\n' +
    '  document.getElementById("fileInput").click();\n' +
    '};\n' +
    '\n' +
    'const handleFileChange = (e) => {\n' +
    '  const file = e.target.files[0];\n' +
    '  if (file) {\n' +
    '    image.value = URL.createObjectURL(file);\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">\n' +
    '    <div v-if="image === \'\'" class="text-center w-full lg:w-[90%]">\n' +
    '      <input\n' +
    '          type="file"\n' +
    '          name="image"\n' +
    '          id="fileInput"\n' +
    '          class="hidden"\n' +
    '          @change="handleFileChange"\n' +
    '      />\n' +
    '      <h1 class="text-[1.5rem] dark:text-[#abc2d3] text-[#424242] font-[600]">\n' +
    '        Upload your files\n' +
    '      </h1>\n' +
    '      <p class="text-[#777777] dark:text-[#abc2d3]/80 font-[400] text-[1rem]">\n' +
    '        JPG,PNG,JPEG\n' +
    '      </p>\n' +
    '\n' +
    '      <div\n' +
    '          class="mt-5 w-full lg:w-[70%] mx-auto dark:border-slate-700 dark:bg-slate-900 flex items-center justify-center flex-col bg-white border-[2px] border-dashed border-[#36af7b] rounded-md py-10 cursor-pointer"\n' +
    '          @click="handleUploadImage"\n' +
    '      >\n' +
    '\n' +
    '        <Icon icon="mdi:file-upload-outline" class="text-[4rem] text-[#36af7b] dark:text-[#abc2d3]/70" />\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div v-else class="relative w-full lg:w-[80%] h-[200px]">\n' +
    '      <img :src="image" alt="image" class="w-full h-full object-cover" />\n' +
    '\n' +
    '\n' +
    '      <Icon\n' +
    '          icon="mdi:delete"\n' +
    '          class="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"\n' +
    '          @click="image = \'\'"\n' +
    '      />\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'

export const profileUploadCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const image = ref("");\n' +
    '\n' +
    'const handleUploadImage = () => {\n' +
    '  document.getElementById("fileInput").click();\n' +
    '};\n' +
    '\n' +
    'const handleFileChange = (e) => {\n' +
    '  const file = e.target.files[0];\n' +
    '  if (file) {\n' +
    '    image.value = URL.createObjectURL(file);\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center flex-col gap-5 justify-center">\n' +
    '    <div class="text-center">\n' +
    '      <input\n' +
    '          type="file"\n' +
    '          name="image"\n' +
    '          id="fileInput"\n' +
    '          class="hidden"\n' +
    '          @change="handleFileChange"\n' +
    '      />\n' +
    '\n' +
    '      <div\n' +
    '          class="w-[150px] h-[150px] rounded-full dark:border-slate-700 border border-[#e5eaf2] flex items-center justify-center overflow-hidden"\n' +
    '      >\n' +
    '\n' +
    '        <Icon\n' +
    '            v-if="image === \'\'"\n' +
    '            icon="healthicons:ui-user-profile-outline"\n' +
    '            class="text-[10rem] text-[#36af7b] dark:text-slate-500"\n' +
    '        />\n' +
    '        <img\n' +
    '            v-else\n' +
    '            :src="image"\n' +
    '            alt="profile"\n' +
    '            class="w-full h-full object-cover rounded-full"\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <button\n' +
    '          class="px-4 py-2 bg-[#36af7b] text-white rounded-md mt-5"\n' +
    '          @click="handleUploadImage"\n' +
    '      >\n' +
    '        Upload profile\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>\n'