export const dragAndDropWithIndicatorCodes = [
    {
        id: "main",
        displayText: "DragAndDrop.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            'import {Data} from "./Data.js"\n' +
            '\n' +
            'const gridItems = ref([...Data]);\n' +
            'const draggedItem = ref(null);\n' +
            'const hoveredItem = ref(null);\n' +
            '\n' +
            'const handleDragStart = (item) => {\n' +
            '  draggedItem.value = item;\n' +
            '};\n' +
            '\n' +
            'const handleDragOver = (e, item) => {\n' +
            '  e.preventDefault();\n' +
            '  hoveredItem.value = item;\n' +
            '};\n' +
            '\n' +
            'const handleDrop = (e, dropItem) => {\n' +
            '  e.preventDefault();\n' +
            '\n' +
            '  gridItems.value = gridItems.value.map((item) => {\n' +
            '    if (item.id === dropItem.id) {\n' +
            '      return draggedItem.value;\n' +
            '    }\n' +
            '    if (item.id === draggedItem.value.id) {\n' +
            '      return dropItem;\n' +
            '    }\n' +
            '    return item;\n' +
            '  });\n' +
            '  draggedItem.value = null;\n' +
            '  hoveredItem.value = null;\n' +
            '};\n' +
            '\n' +
            'const handleDragLeave = () => {\n' +
            '  hoveredItem.value = null;\n' +
            '};\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n' +
            '    <div\n' +
            '        v-for="item in gridItems"\n' +
            '        :key="item.id"\n' +
            '        draggable="true"\n' +
            '        @dragstart="handleDragStart(item)"\n' +
            '        @dragover="handleDragOver($event, item)"\n' +
            '        @drop="handleDrop($event, item)"\n' +
            '        @dragleave="handleDragLeave"\n' +
            '        :class="[\n' +
            '        \'w-full px-8 py-4 border-2 dark:border-slate-500 rounded text-center cursor-move\',\n' +
            '        item.id === draggedItem?.id && \'bg-[#36af7b]/10 opacity-30\',\n' +
            '        item.id === hoveredItem?.id\n' +
            '          ? \'border-dashed border-2 border-[#36af7b]\'\n' +
            '          : \'border-gray-100\',\n' +
            '      ]"\n' +
            '    >\n' +
            '      <img\n' +
            '          alt="image"\n' +
            '          :src="item.image"\n' +
            '          class="w-[100px] md:w-[140px] h-[50px] object-contain"\n' +
            '      />\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const Data = [\n' +
            '  {\n' +
            '    id: 1,\n' +
            '    image: "https://i.ibb.co.com/XxvZ2Kq/Logo.png",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 2,\n' +
            '    image: "https://i.ibb.co.com/9N5LS3M/images-1.jpg",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 3,\n' +
            '    image: "https://i.ibb.co.com/qY35qZK/images.jpg",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 4,\n' +
            '    image: "https://i.ibb.co.com/2gLx39W/Logo-3.png",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 5,\n' +
            '    image: "https://i.ibb.co.com/GCDDPQz/png-clipart-logo-technology-digital-restaurant-marketing-for-restaurants-technology-electronics-text.png",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 6,\n' +
            '    image: "https://i.ibb.co.com/5nTyZ7v/png-clipart-react-full-logo-tech-companies-thumbnail.png",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 7,\n' +
            '    image: "https://i.ibb.co.com/fp0pFV5/Logo-5.png",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 8,\n' +
            '    image: "https://i.ibb.co.com/S3Z98YZ/Logo-6.png",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 9,\n' +
            '    image: "https://i.ibb.co.com/0FwfDsz/Union.png",\n' +
            '  },\n' +
            '];'
    },
]

export const uploadMultipleFilesDragAndDropCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const images = ref([]);\n' +
    'const dragging = ref(false);\n' +
    '\n' +
    'const handleMultipleFileDrop = (e) => {\n' +
    '  e.preventDefault();\n' +
    '  dragging.value = false;\n' +
    '  const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;\n' +
    '  uploadFiles(files);\n' +
    '  if (e.target) {\n' +
    '    e.target.value = "";\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const uploadFiles = (files) => {\n' +
    '  const fileList = Array.from(files).map((file) => ({\n' +
    '    file,\n' +
    '    size: formatFileSize(file.size),\n' +
    '    progress: 0,\n' +
    '    uploaded: false,\n' +
    '    cancelled: false,\n' +
    '  }));\n' +
    '  images.value = [...images.value, ...fileList];\n' +
    '\n' +
    '  fileList.forEach((fileObj, index) => {\n' +
    '    simulateUpload(fileObj, index + images.value.length - fileList.length);\n' +
    '  });\n' +
    '};\n' +
    '\n' +
    'const formatFileSize = (sizeInBytes) => {\n' +
    '  if (sizeInBytes < 1024 * 1024) {\n' +
    '    return (sizeInBytes / 1024).toFixed(2) + " KB";\n' +
    '  } else {\n' +
    '    return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const simulateUpload = (fileObj, index) => {\n' +
    '  const interval = setInterval(() => {\n' +
    '    const newImages = [...images.value];\n' +
    '    if (!newImages[index].cancelled) {\n' +
    '      const progress = newImages[index].progress + 10;\n' +
    '      if (progress >= 100) {\n' +
    '        clearInterval(interval);\n' +
    '        newImages[index].progress = 100;\n' +
    '        newImages[index].uploaded = true;\n' +
    '      } else {\n' +
    '        newImages[index].progress = progress;\n' +
    '      }\n' +
    '    } else {\n' +
    '      clearInterval(interval);\n' +
    '    }\n' +
    '    images.value = newImages;\n' +
    '  }, 300);\n' +
    '};\n' +
    '\n' +
    'const handleMultipleDragOver = (e) => {\n' +
    '  e.preventDefault();\n' +
    '};\n' +
    '\n' +
    'const handleMultipleDragEnter = () => {\n' +
    '  dragging.value = true;\n' +
    '};\n' +
    '\n' +
    'const handleMultipleDragLeave = () => {\n' +
    '  dragging.value = false;\n' +
    '};\n' +
    '\n' +
    'const cancelUpload = (index) => {\n' +
    '  const newImages = [...images.value];\n' +
    '  newImages[index].cancelled = true;\n' +
    '  images.value = newImages;\n' +
    '};\n' +
    '\n' +
    'const resetImages = () => {\n' +
    '  images.value = [];\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex flex-col items-center gap-5 justify-center">\n' +
    '    <div class="flex flex-col justify-center items-center w-full">\n' +
    '      <div\n' +
    '          :class="[\n' +
    '          \'border-2 p-6 rounded-lg dark:bg-slate-800 dark:border-slate-600 w-full h-64 flex flex-col justify-center items-center bg-white transition-colors duration-300 ease-in-out\',\n' +
    '          dragging\n' +
    '            ? \'border-dashed border-[#36af7b] !bg-[#36af7b]/10\'\n' +
    '            : \'border-gray-200 border-dashed\',\n' +
    '        ]"\n' +
    '          @drop="handleMultipleFileDrop"\n' +
    '          @dragover="handleMultipleDragOver"\n' +
    '          @dragenter="handleMultipleDragEnter"\n' +
    '          @dragleave="handleMultipleDragLeave"\n' +
    '      >\n' +
    '        <img\n' +
    '            alt="demo_image"\n' +
    '            src="https://i.ibb.co.com/XY2YgLh/Searching-for-files-in-a-folder.png"\n' +
    '            class="w-[100px]"\n' +
    '        />\n' +
    '        <label\n' +
    '            for="file-multiple-upload"\n' +
    '            class="font-[500] dark:text-[#abc2d3] text-center text-gray-700 text-[1rem]"\n' +
    '        >\n' +
    '          <span class="underline cursor-pointer"> Click to upload </span>\n' +
    '          Drag & Drop your images here\n' +
    '        </label>\n' +
    '        <p class="text-[0.8rem] dark:text-[#abc2d3]/60 text-gray-500 mt-2">\n' +
    '          Maximum file size 50 MB.\n' +
    '        </p>\n' +
    '        <input\n' +
    '            id="file-multiple-upload"\n' +
    '            type="file"\n' +
    '            accept="image/*"\n' +
    '            class="hidden"\n' +
    '            @change="handleMultipleFileDrop"\n' +
    '            multiple\n' +
    '        />\n' +
    '      </div>\n' +
    '\n' +
    '      <div\n' +
    '          class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"\n' +
    '      >\n' +
    '        <div\n' +
    '            v-for="(imageObj, index) in images"\n' +
    '            :key="index"\n' +
    '            class="relative p-3 rounded-lg dark:bg-slate-800 dark:border-slate-600 bg-gray-50 border border-gray-200"\n' +
    '        >\n' +
    '          <div class="flex flex-col">\n' +
    '            <div class="flex items-start justify-between w-full mb-1">\n' +
    '              <div class="flex items-start gap-[10px]">\n' +
    '                <Icon\n' +
    '                    icon="stash:image"\n' +
    '                    class="bg-white dark:bg-slate-900/80 dark:border-slate-600 rounded-md p-1 border border-gray-200 text-[1.7rem] text-gray-500"\n' +
    '                />\n' +
    '                <div>\n' +
    '                  <p\n' +
    '                      class="text-gray-700 dark:text-darkTextColor font-[500] text-[0.9rem] leading-[20px] md:leading-[9px] md:mt-0.5"\n' +
    '                  >\n' +
    '                    {{ imageObj.file.name }}\n' +
    '                  </p>\n' +
    '                  <span class="text-[0.6rem] text-gray-400">\n' +
    '                    {{ imageObj.size }}\n' +
    '                  </span>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <button\n' +
    '                  v-if="!imageObj.cancelled && !imageObj.uploaded"\n' +
    '                  @click="cancelUpload(index)"\n' +
    '                  class="text-gray-500 hover:text-red-500"\n' +
    '              >\n' +
    '                <Icon icon="charm:cross"/>\n' +
    '              </button>\n' +
    '\n' +
    '              <Icon\n' +
    '                  v-if="imageObj.uploaded"\n' +
    '                  icon="io:md-done-all"\n' +
    '                  class="text-green-600 text-[1.1rem]"\n' +
    '              />\n' +
    '            </div>\n' +
    '            <p v-if="imageObj.cancelled" class="text-[0.8rem] text-red-600">\n' +
    '              Upload Cancelled\n' +
    '            </p>\n' +
    '            <template v-else>\n' +
    '              <div class="flex items-center justify-between gap-[8px]">\n' +
    '                <div\n' +
    '                    class="w-full dark:bg-slate-800 bg-white h-1.5 rounded-lg overflow-hidden"\n' +
    '                >\n' +
    '                  <div\n' +
    '                      class="bg-[#36af7b] h-full transition-all duration-300"\n' +
    '                      :style="{ width: `${imageObj.progress}%` }"\n' +
    '                  ></div>\n' +
    '                </div>\n' +
    '                <span\n' +
    '                    class="text-[0.7rem] mb-0.5 dark:text-[#abc2d3] text-gray-500"\n' +
    '                >\n' +
    '                  {{ imageObj.progress }}%\n' +
    '                </span>\n' +
    '              </div>\n' +
    '            </template>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <button\n' +
    '        v-if="images.length"\n' +
    '        @click="resetImages"\n' +
    '        class="py-2 px-6 bg-red-500 rounded-md text-white"\n' +
    '    >\n' +
    '      Reset\n' +
    '    </button>\n' +
    '  </div>\n' +
    '</template>'

export const uploadFileWithDragAndDropCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    'import {Icon} from "@iconify/vue";\n' +
    '\n' +
    'const selectedImage = ref(null);\n' +
    'const errorMessage = ref("");\n' +
    'const isDragging = ref(false);\n' +
    '\n' +
    'const handleFileDrop = (e) => {\n' +
    '  e.preventDefault();\n' +
    '  const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];\n' +
    '  handleFile(file);\n' +
    '  isDragging.value = false;\n' +
    '};\n' +
    '\n' +
    'const handleFile = (file) => {\n' +
    '  if (!file) return;\n' +
    '\n' +
    '  if (file.type.startsWith("image/")) {\n' +
    '    errorMessage.value = "";\n' +
    '    const reader = new FileReader();\n' +
    '    reader.onload = () => (selectedImage.value = reader.result);\n' +
    '    reader.readAsDataURL(file);\n' +
    '  } else {\n' +
    '    errorMessage.value = "Please upload an image file.";\n' +
    '    selectedImage.value = null;\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleImageDragOver = (e) => {\n' +
    '  e.preventDefault();\n' +
    '};\n' +
    '\n' +
    'const handleDragEnter = () => {\n' +
    '  isDragging.value = true;\n' +
    '};\n' +
    '\n' +
    'const handleDragLeave = () => {\n' +
    '  isDragging.value = false;\n' +
    '};\n' +
    '\n' +
    'const removeImage = () => {\n' +
    '  selectedImage.value = null;\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="flex justify-center items-center w-full flex-col">\n' +
    '    <div\n' +
    '        :class="[\n' +
    '        \'rounded-lg w-full h-64 flex flex-col dark:bg-slate-800 dark:border-slate-600 justify-center items-center bg-white\',\n' +
    '        isDragging ? \'border-[#36af7b]/30 !bg-[#36af7b]/10\' : \'border-gray-300\',\n' +
    '        selectedImage ? \'\' : \'border-dashed border-2 p-6\',\n' +
    '      ]"\n' +
    '        @dragenter="handleDragEnter"\n' +
    '        @dragleave="handleDragLeave"\n' +
    '        @drop="handleFileDrop"\n' +
    '        @dragover="handleImageDragOver"\n' +
    '    >\n' +
    '      <img\n' +
    '          v-if="selectedImage"\n' +
    '          :src="selectedImage"\n' +
    '          alt="Preview"\n' +
    '          class="w-full h-full object-cover rounded-lg"\n' +
    '      />\n' +
    '      <template v-else>\n' +
    '        <h5 v-if="isDragging" class="text-[2rem] text-[#36af7b] font-[600]">\n' +
    '          Drop Here\n' +
    '        </h5>\n' +
    '        <template v-else>\n' +
    '          <Icon\n' +
    '              icon="ion:cloud-upload-outline"\n' +
    '              class="text-[3rem] mb-4 text-gray-400"\n' +
    '          />\n' +
    '          <p\n' +
    '              class="text-gray-500 text-center dark:text-[#abc2d3] text-[1.1rem] font-[500] mb-2"\n' +
    '          >\n' +
    '            Drag & Drop your image here\n' +
    '          </p>\n' +
    '          <p class="text-gray-400">or</p>\n' +
    '          <label\n' +
    '              for="file-upload"\n' +
    '              class="cursor-pointer dark:bg-slate-500 hover:bg-[#36af7b] hover:text-white transition-colors duration-300 dark:text-[#abc2d3] py-2 px-4 bg-gray-200 rounded-md mt-2"\n' +
    '          >\n' +
    '            Browse File\n' +
    '          </label>\n' +
    '          <input\n' +
    '              id="file-upload"\n' +
    '              type="file"\n' +
    '              accept="image/*"\n' +
    '              class="hidden"\n' +
    '              @change="handleFileDrop"\n' +
    '          />\n' +
    '        </template>\n' +
    '      </template>\n' +
    '    </div>\n' +
    '\n' +
    '    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>\n' +
    '\n' +
    '    <div v-if="selectedImage" class="mt-4">\n' +
    '      <button\n' +
    '          @click="removeImage"\n' +
    '          class="bg-red-500 text-white px-4 py-2 rounded-lg"\n' +
    '      >\n' +
    '        Remove Image\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const listDragAndDropCodes = [
    {
        id: "main",
        displayText: "DragAndDrop.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {ref} from "vue";\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import {listsData} from "./Data.js";\n' +
            '\n' +
            'const listItems = ref([...listsData]);\n' +
            'const listDraggedItem = ref(null);\n' +
            'const listHoveredItem = ref(null);\n' +
            '\n' +
            'const handleListDragStart = (item) => {\n' +
            '  listDraggedItem.value = item;\n' +
            '};\n' +
            '\n' +
            'const handleListDragOver = (e, item) => {\n' +
            '  e.preventDefault();\n' +
            '  listHoveredItem.value = item;\n' +
            '};\n' +
            '\n' +
            'const handleListDrop = (e, dropItem) => {\n' +
            '  e.preventDefault();\n' +
            '\n' +
            '  const newGrid = listItems.value.map((item) => {\n' +
            '    if (item.id === dropItem.id) {\n' +
            '      return listDraggedItem.value;\n' +
            '    }\n' +
            '    if (item.id === listDraggedItem.value.id) {\n' +
            '      return dropItem;\n' +
            '    }\n' +
            '    return item;\n' +
            '  });\n' +
            '\n' +
            '  listItems.value = newGrid;\n' +
            '  listDraggedItem.value = null;\n' +
            '  listHoveredItem.value = null;\n' +
            '};\n' +
            '\n' +
            'const handleDragLeave = () => {\n' +
            '  listHoveredItem.value = null;\n' +
            '};\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="flex flex-col w-full gap-4">\n' +
            '    <div\n' +
            '        v-for="item in listItems"\n' +
            '        :key="item.id"\n' +
            '        draggable="true"\n' +
            '        @dragstart="handleListDragStart(item)"\n' +
            '        @dragover="handleListDragOver($event, item)"\n' +
            '        @drop="handleListDrop($event, item)"\n' +
            '        @dragleave="handleDragLeave"\n' +
            '        :class="[\n' +
            '        \'grid-item p-4 border-2 dark:border-slate-600 rounded text-center flex items-center justify-between\',\n' +
            '        item.id === listDraggedItem?.id && \'bg-[#36af7b]/10 opacity-30\',\n' +
            '        item.id === listHoveredItem?.id\n' +
            '          ? \'border-dashed border-2 border-[#36af7b]\'\n' +
            '          : \'border-gray-100\',\n' +
            '      ]"\n' +
            '    >\n' +
            '      <div class="flex items-center gap-[8px] md:gap-[15px]">\n' +
            '        <img\n' +
            '            alt="image"\n' +
            '            :src="item.avatar"\n' +
            '            class="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-md object-contain"\n' +
            '        />\n' +
            '\n' +
            '        <div class="text-left flex flex-col md:gap-[5px]">\n' +
            '          <h4\n' +
            '              class="text-[1rem] dark:text-[#abc2d3] md:text-[1.3rem] text-gray-700 font-[600]"\n' +
            '          >\n' +
            '            {{ item.name }}\n' +
            '          </h4>\n' +
            '          <p\n' +
            '              class="text-[0.7rem] dark:text-[#abc2d3]/70 md:text-[0.9rem] text-gray-500"\n' +
            '          >\n' +
            '            {{ item.title }}\n' +
            '          </p>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '\n' +
            '      <Icon\n' +
            '          icon="ri:draggable"\n' +
            '          class="text-[1.5rem] dark:text-[#abc2d3]/70 md:text-[1.8rem] text-gray-600 cursor-move"\n' +
            '      />\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const listsData = [\n' +
            '  {\n' +
            '    id: 1,\n' +
            '    name: "John Doe",\n' +
            '    avatar: "https://randomuser.me/api/portraits/men/1.jpg",\n' +
            '    title: "Software Engineer",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 2,\n' +
            '    name: "Jane Smith",\n' +
            '    avatar: "https://randomuser.me/api/portraits/women/2.jpg",\n' +
            '    title: "Product Manager",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 3,\n' +
            '    name: "Michael Johnson",\n' +
            '    avatar: "https://randomuser.me/api/portraits/men/3.jpg",\n' +
            '    title: "UX Designer",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 4,\n' +
            '    name: "Emily Davis",\n' +
            '    avatar: "https://randomuser.me/api/portraits/women/4.jpg",\n' +
            '    title: "Marketing Specialist",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 5,\n' +
            '    name: "David Wilson",\n' +
            '    avatar: "https://randomuser.me/api/portraits/men/5.jpg",\n' +
            '    title: "Data Analyst",\n' +
            '  },\n' +
            '  {\n' +
            '    id: 6,\n' +
            '    name: "Sophia Brown",\n' +
            '    avatar: "https://randomuser.me/api/portraits/women/6.jpg",\n' +
            '    title: "Project Coordinator",\n' +
            '  },\n' +
            '];'
    },
]

export const todoAppDragAndDropCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const todos = ref([\n' +
    '  {id: 1, text: "Fix website bug", completed: false},\n' +
    '  {id: 2, text: "Prepare for meeting", completed: false},\n' +
    '  {id: 3, text: "Send email updates", completed: false},\n' +
    ']);\n' +
    '\n' +
    'const completedTodos = ref([]);\n' +
    'const newTodoText = ref("");\n' +
    '\n' +
    'const onTodoDragStart = (e, id, isCompleted) => {\n' +
    '  e.dataTransfer.setData("text/plain", JSON.stringify({id, isCompleted}));\n' +
    '};\n' +
    '\n' +
    'const onTodoDragOver = (e) => {\n' +
    '  e.preventDefault();\n' +
    '};\n' +
    '\n' +
    'const onTodoDrop = (e, targetCompleted) => {\n' +
    '  e.preventDefault();\n' +
    '  const data = JSON.parse(e.dataTransfer.getData("text/plain"));\n' +
    '  const {id, isCompleted} = data;\n' +
    '\n' +
    '  if (isCompleted !== targetCompleted) {\n' +
    '    if (isCompleted) {\n' +
    '      const movedTodo = completedTodos.value.find((todo) => todo.id === id);\n' +
    '      completedTodos.value = completedTodos.value.filter(\n' +
    '          (todo) => todo.id !== id\n' +
    '      );\n' +
    '      todos.value = [...todos.value, {...movedTodo, completed: false}];\n' +
    '    } else {\n' +
    '      const movedTodo = todos.value.find((todo) => todo.id === id);\n' +
    '      todos.value = todos.value.filter((todo) => todo.id !== id);\n' +
    '      completedTodos.value = [\n' +
    '        ...completedTodos.value,\n' +
    '        {...movedTodo, completed: true},\n' +
    '      ];\n' +
    '    }\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const handleAddTodo = (e) => {\n' +
    '  e.preventDefault();\n' +
    '  if (newTodoText.value.trim() !== "") {\n' +
    '    const newTodo = {\n' +
    '      id: Date.now(),\n' +
    '      text: newTodoText.value.trim(),\n' +
    '      completed: false,\n' +
    '    };\n' +
    '    todos.value = [...todos.value, newTodo];\n' +
    '    newTodoText.value = "";\n' +
    '  }\n' +
    '};\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      class="p-8 mb-4 flex lg:flex-row flex-col gap-5 justify-center"\n' +
    '  >\n' +
    '    <div\n' +
    '        class="w-full lg:w-[50%] bg-gray-50 dark:bg-slate-800 p-3 rounded-md"\n' +
    '        @dragover="onTodoDragOver"\n' +
    '        @drop="onTodoDrop($event, false)"\n' +
    '    >\n' +
    '      <h4\n' +
    '          class="text-xl font-semibold dark:text-[#abc2d3] text-gray-700 text-center mb-3"\n' +
    '      >\n' +
    '        Todo\n' +
    '      </h4>\n' +
    '\n' +
    '      <form @submit="handleAddTodo" class="mb-4 w-full">\n' +
    '        <div class="flex">\n' +
    '          <input\n' +
    '              type="text"\n' +
    '              v-model="newTodoText"\n' +
    '              placeholder="Add todo"\n' +
    '              class="px-4 py-2 dark:bg-slate-800 dark:border-slate-600 dark:text-[#abc2d3] w-full outline-none border-l border-t border-b rounded-l-md focus:border-[#36af7b] border-gray-300 text-[0.9rem]"\n' +
    '          />\n' +
    '          <button\n' +
    '              type="submit"\n' +
    '              class="px-4 py-1 text-[0.9rem] bg-[#36af7b] text-white rounded-r-md"\n' +
    '          >\n' +
    '            Add\n' +
    '          </button>\n' +
    '        </div>\n' +
    '      </form>\n' +
    '\n' +
    '      <ul class="space-y-2">\n' +
    '        <li\n' +
    '            v-for="todo in todos"\n' +
    '            :key="todo.id"\n' +
    '            draggable="true"\n' +
    '            @dragstart="onTodoDragStart($event, todo.id, false)"\n' +
    '            class="bg-white p-2 dark:bg-slate-700 dark:text-[#abc2d3] rounded-md cursor-move"\n' +
    '        >\n' +
    '          {{ todo.text }}\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '\n' +
    '    <div\n' +
    '        class="w-full lg:w-[50%] min-h-[120px] dark:bg-slate-800 bg-gray-50 p-3 rounded-md"\n' +
    '        @dragover="onTodoDragOver"\n' +
    '        @drop="onTodoDrop($event, true)"\n' +
    '    >\n' +
    '      <h4\n' +
    '          class="text-xl font-semibold text-gray-700 dark:text-[#abc2d3] text-center mb-3"\n' +
    '      >\n' +
    '        Completed\n' +
    '      </h4>\n' +
    '      <ul class="space-y-2">\n' +
    '        <li\n' +
    '            v-for="todo in completedTodos"\n' +
    '            :key="todo.id"\n' +
    '            draggable="true"\n' +
    '            @dragstart="onTodoDragStart($event, todo.id, true)"\n' +
    '            class="bg-white p-2 dark:bg-slate-700 dark:text-[#abc2d3] rounded-md cursor-move"\n' +
    '        >\n' +
    '          {{ todo.text }}\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'