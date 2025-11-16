export const verticalComparisonCardCodes = '<script setup>\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const sliderPosition = ref(50);\n' +
    'const containerRef = ref(null);\n' +
    'const isDragging = ref(false);\n' +
    '\n' +
    'const handleMove = (clientY) => {\n' +
    '  if (!isDragging.value) return;\n' +
    '\n' +
    '  const container = containerRef.value;\n' +
    '  if (!container) return;\n' +
    '\n' +
    '  const rect = container.getBoundingClientRect();\n' +
    '  const y = Math.min(Math.max(0, clientY - rect.top), rect.height);\n' +
    '  sliderPosition.value = (y / rect.height) * 100;\n' +
    '};\n' +
    '\n' +
    'const handleMouseMove = (e) => handleMove(e.clientY);\n' +
    'const handleTouchMove = (e) => handleMove(e.touches[0].clientY);\n' +
    '\n' +
    'const startDragging = () => {\n' +
    '  isDragging.value = true;\n' +
    '};\n' +
    '\n' +
    'const stopDragging = () => {\n' +
    '  isDragging.value = false;\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("mousemove", handleMouseMove);\n' +
    '  document.addEventListener("mouseup", stopDragging);\n' +
    '  document.addEventListener("touchmove", handleTouchMove, {passive: true});\n' +
    '  document.addEventListener("touchend", stopDragging);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  document.removeEventListener("mousemove", handleMouseMove);\n' +
    '  document.removeEventListener("mouseup", stopDragging);\n' +
    '  document.removeEventListener("touchmove", handleTouchMove);\n' +
    '  document.removeEventListener("touchend", stopDragging);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      ref="containerRef"\n' +
    '      class="relative w-full h-full select-none bg-gray-100"\n' +
    '  >\n' +
    '    <!-- Before Image -->\n' +
    '    <img\n' +
    '        src="https://i.ibb.co.com/YXzxRBv/before.png"\n' +
    '        alt="Before"\n' +
    '        class="absolute inset-0 w-full h-full object-cover"\n' +
    '    />\n' +
    '\n' +
    '    <!-- After Image -->\n' +
    '    <img\n' +
    '        src="https://i.ibb.co.com/1ZKL4wK/after.png"\n' +
    '        alt="After"\n' +
    '        class="absolute inset-0 w-full h-full object-cover"\n' +
    '        :style="{\n' +
    '        clipPath: `polygon(0 0, 100% 0, 100% ${sliderPosition}%, 0 ${sliderPosition}%)`,\n' +
    '      }"\n' +
    '    />\n' +
    '\n' +
    '    <!-- Slider Handle -->\n' +
    '    <div\n' +
    '        class="absolute left-0 right-0 h-0.5 bg-white cursor-ns-resize"\n' +
    '        :style="{ top: `${sliderPosition}%` }"\n' +
    '        @mousedown="startDragging"\n' +
    '        @touchstart="startDragging"\n' +
    '    >\n' +
    '      <div class="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">\n' +
    '        <div\n' +
    '            class="w-full h-full rounded-full bg-[#36af7b] border-[3px] border-white shadow-lg flex items-center justify-center"\n' +
    '        >\n' +
    '          <div class="flex gap-[5px] justify-evenly rotate-90">\n' +
    '            <div class="w-0.5 h-4 bg-white"></div>\n' +
    '            <div class="w-0.5 h-4 bg-white"></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const horizontalComparisonCardCodes = '<script setup>\n' +
    'import {onMounted, onUnmounted, ref} from "vue";\n' +
    '\n' +
    'const sliderPosition = ref(50);\n' +
    'const containerRef = ref(null);\n' +
    'const isDragging = ref(false);\n' +
    '\n' +
    'const handleMove = (clientX) => {\n' +
    '  if (!isDragging.value) return;\n' +
    '\n' +
    '  const container = containerRef.value;\n' +
    '  if (!container) return;\n' +
    '\n' +
    '  const rect = container.getBoundingClientRect();\n' +
    '  const x = Math.min(Math.max(0, clientX - rect.left), rect.width);\n' +
    '  sliderPosition.value = (x / rect.width) * 100;\n' +
    '};\n' +
    '\n' +
    'const handleMouseMove = (e) => handleMove(e.clientX);\n' +
    'const handleTouchMove = (e) => handleMove(e.touches[0].clientX);\n' +
    '\n' +
    'const startDragging = () => {\n' +
    '  isDragging.value = true;\n' +
    '};\n' +
    '\n' +
    'const stopDragging = () => {\n' +
    '  isDragging.value = false;\n' +
    '};\n' +
    '\n' +
    'onMounted(() => {\n' +
    '  document.addEventListener("mousemove", handleMouseMove);\n' +
    '  document.addEventListener("mouseup", stopDragging);\n' +
    '  document.addEventListener("touchmove", handleTouchMove, {passive: true});\n' +
    '  document.addEventListener("touchend", stopDragging);\n' +
    '});\n' +
    '\n' +
    'onUnmounted(() => {\n' +
    '  document.removeEventListener("mousemove", handleMouseMove);\n' +
    '  document.removeEventListener("mouseup", stopDragging);\n' +
    '  document.removeEventListener("touchmove", handleTouchMove);\n' +
    '  document.removeEventListener("touchend", stopDragging);\n' +
    '});\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div\n' +
    '      ref="containerRef"\n' +
    '      class="relative w-full aspect-video select-none bg-gray-100"\n' +
    '  >\n' +
    '    <!-- Before Image -->\n' +
    '    <img\n' +
    '        src="https://i.ibb.co.com/YXzxRBv/before.png"\n' +
    '        alt="Before"\n' +
    '        class="absolute inset-0 w-full h-full object-cover"\n' +
    '    />\n' +
    '\n' +
    '    <!-- After Image -->\n' +
    '    <img\n' +
    '        src="https://i.ibb.co.com/1ZKL4wK/after.png"\n' +
    '        alt="After"\n' +
    '        class="absolute inset-0 w-full h-full object-cover"\n' +
    '        :style="{\n' +
    '        clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,\n' +
    '      }"\n' +
    '    />\n' +
    '\n' +
    '    <!-- Slider Handle -->\n' +
    '    <div\n' +
    '        class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"\n' +
    '        :style="{ left: `${sliderPosition}%` }"\n' +
    '        @mousedown="startDragging"\n' +
    '        @touchstart="startDragging"\n' +
    '    >\n' +
    '      <div class="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">\n' +
    '        <div\n' +
    '            class="w-full h-full rounded-full border-[3px] border-white bg-[#36af7b] shadow-lg flex items-center justify-center"\n' +
    '        >\n' +
    '          <div class="flex gap-[5px] justify-evenly">\n' +
    '            <div class="w-0.5 h-4 bg-white"></div>\n' +
    '            <div class="w-0.5 h-4 bg-white"></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'