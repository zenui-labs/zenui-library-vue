export const ImageGallery1Codes = [
    {
        id: "main",
        displayText: "ImageGallery.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import images from \'./Images.js\'\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="grid grid-cols-3 gap-3">\n' +
            '    <img v-for="(img, index) in images" :key="index" :src="img" alt=""/>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "images",
        displayText: "Images.js",
        language: "js",
        code: 'export const images = [\n' +
            '  "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '  "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '  "https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '  "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '  "https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '];'
    },
]

export const ImageGallery2Codes = [
    {
        id: "main",
        displayText: "ImageGallery.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import images from \'./Images.js\'\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="grid grid-cols-4 gap-2">\n' +
            '    <img\n' +
            '        v-for="(img, index) in images"\n' +
            '        :key="index"\n' +
            '        :src="img.src"\n' +
            '        alt="image"\n' +
            '        :class="img.class"\n' +
            '    />\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "images",
        displayText: "Images.js",
        language: "js",
        code: 'export const images = [\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg",\n' +
            '    class: "col-span-2 w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg",\n' +
            '    class: "col-span-2 w-full h-full object-cover",\n' +
            '  },\n' +
            '];'
    },
]

export const ImageGallery3Codes = [
    {
        id: "main",
        displayText: "ImageGallery.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import images from \'./Images.js\'\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="grid grid-cols-3 gap-2">\n' +
            '    <img\n' +
            '        v-for="(img, index) in images"\n' +
            '        :key="index"\n' +
            '        :src="img.src"\n' +
            '        alt="image"\n' +
            '        :class="img.class"\n' +
            '    />\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "images",
        displayText: "Images.js",
        language: "js",
        code: 'export const images = [\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-vector/beach-seascape-scenery_603843-2331.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "row-span-2 col-span-2 w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover col-span-1",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/landscape-hills-covered-greenery-with-rocky-mountains-cloudy-sky_181624-9192.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover col-span-1",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-vector/summer-natural-landscape-with-meadow-mountains_107791-24623.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover col-span-3",\n' +
            '  },\n' +
            '];'
    },
]

export const ImageGallery4Codes = [
    {
        id: "main",
        displayText: "ImageGallery.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import images from \'./Images.js\'\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="grid grid-cols-4 gap-2">\n' +
            '    <img\n' +
            '        v-for="(img, index) in images"\n' +
            '        :key="index"\n' +
            '        alt="image"\n' +
            '        :src="img.src"\n' +
            '        :class="img.class"\n' +
            '    />\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "images",
        displayText: "Images.js",
        language: "js",
        code: 'export const images = [\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "row-span-1 col-span-2 w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/beautiful-view-mesmerizing-nature-traditional-styled-japanese-adelaide-himeji-gardens_181624-46195.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/autumn-river-ordesa-national-park-pyrenees-huesca-aragon-spain_1301-6980.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/mustard-field-with-beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4824.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover col-span-2 row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/fictitious-floating-island_1048-2899.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover col-span-2 row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/scenic-view-mountains-lake_53876-138187.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover col-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/sunset-with-silhoutte-birds-flying_335224-915.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/landscape-rocks-surrounded-by-forests-covered-fog-cloudy-sky_181624-6475.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover col-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/mist-chinese-water-peak-landscapes_1417-36.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '];'
    },
]

export const ImageGallery5Codes = [
    {
        id: "main",
        displayText: "ImageGallery.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import images from \'./Images.js\'\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="grid grid-cols-4 gap-2">\n' +
            '    <img\n' +
            '        v-for="(img, index) in images"\n' +
            '        :key="index"\n' +
            '        alt="image"\n' +
            '        :src="img.src"\n' +
            '        :class="img.class"\n' +
            '    />\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "images",
        displayText: "Images.js",
        language: "js",
        code: 'export const images = [\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/landscape-hills-covered-greenery-with-rocky-mountains-cloudy-sky_181624-9192.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/vertical-orange-lily-field-cloudy-dark-sky_181624-37905.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/bamboo-forest-kyoto-japan_335224-28.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/vertical-orange-lily-field-cloudy-dark-sky_181624-37905.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover row-span-2",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/fog-dark-clouds-mountains_1204-503.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?size=626&ext=jpg",\n' +
            '    class: "w-full h-full object-cover",\n' +
            '  },\n' +
            '];'
    },
]

export const ImageGallery6Codes = [
    {
        id: "main",
        displayText: "ImageGallery.vue",
        language: "vue",
        code: '<script setup>\n' +
            'import {Icon} from "@iconify/vue";\n' +
            'import galleryImages from "./Data.js";\n' +
            '</script>\n' +
            '\n' +
            '<template>\n' +
            '  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">\n' +
            '    <div\n' +
            '        v-for="(img, index) in galleryImages"\n' +
            '        :key="index"\n' +
            '        class="relative"\n' +
            '    >\n' +
            '      <img :src="img.src" :alt="img.author" class="w-full h-full object-cover"/>\n' +
            '\n' +
            '      <div\n' +
            '          class="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between"\n' +
            '      >\n' +
            '        <div>\n' +
            '          <h3 class="text-[1rem] font-[600]">{{ img.title }}</h3>\n' +
            '          <p class="text-[0.9rem]">{{ img.author }}</p>\n' +
            '        </div>\n' +
            '        <Icon\n' +
            '            icon="rx:cross-1"\n' +
            '            class="text-[1.4rem] cursor-pointer text-[#00000093]"\n' +
            '        />\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</template>\n'
    },
    {
        id: "data",
        displayText: "Data.js",
        language: "js",
        code: 'export const galleryImages = [\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/waterfall-nature-thailand_335224-989.jpg",\n' +
            '    title: "Natural",\n' +
            '    author: "@prokas",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg",\n' +
            '    title: "Natural",\n' +
            '    author: "@prokas",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/island-view-from-sea_1127-2244.jpg",\n' +
            '    title: "Natural",\n' +
            '    author: "@prokas",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg",\n' +
            '    title: "Natural",\n' +
            '    author: "@prokas",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/green-park-view_1417-1487.jpg",\n' +
            '    title: "Natural",\n' +
            '    author: "@prokas",\n' +
            '  },\n' +
            '  {\n' +
            '    src: "https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg",\n' +
            '    title: "Natural",\n' +
            '    author: "@prokas",\n' +
            '  },\n' +
            '];'
    },
]