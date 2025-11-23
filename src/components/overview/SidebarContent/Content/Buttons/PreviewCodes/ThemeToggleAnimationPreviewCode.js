export const themeToggleAnimationPreviewCode =
  "<script setup>\n" +
  "import { ref } from 'vue';\n" +
  "</script>\n" +
  "<template>\n" +
  '  <div>\n' +
  "    <style scoped>\n" +
  "      .day-night-toggle .sky {\n" +
  "        background-color: #357bb3;\n" +
  "        height: 60px;\n" +
  "        aspect-ratio: 2.542;\n" +
  "        width: auto;\n" +
  "        border-radius: 9999px;\n" +
  "        position: relative;\n" +
  "        overflow: hidden;\n" +
  "        transition: all ease-in-out 0.6s;\n" +
  "        display: block;\n" +
  "        cursor: pointer;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle .sky::before {\n" +
  "        content: '';\n" +
  "        position: absolute;\n" +
  "        top: 0;\n" +
  "        left: 0;\n" +
  "        width: 100%;\n" +
  "        height: 100%;\n" +
  "        border-radius: 9999px;\n" +
  "        box-shadow: 0px 2.226px 2.862px 0px rgba(0, 0, 0, 0.25) inset,\n" +
  "                    0px -0.318px 4.134px 0px rgba(0, 0, 0, 0.25) inset,\n" +
  "                    0px -0.954px 1.272px 0px rgba(0, 0, 0, 0.25);\n" +
  "        z-index: 9999;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #sun_wrapper {\n" +
  "        display: flex;\n" +
  "        align-items: center;\n" +
  "        justify-content: center;\n" +
  "        height: 100%;\n" +
  "        aspect-ratio: 1;\n" +
  "        position: relative;\n" +
  "        z-index: 10;\n" +
  "        margin-left: 0.45%;\n" +
  "        transition: all ease-in-out 0.6s;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #sun {\n" +
  "        background-color: #ffd700;\n" +
  "        height: 83%;\n" +
  "        aspect-ratio: 1;\n" +
  "        border-radius: 9999px;\n" +
  "        position: absolute;\n" +
  "        z-index: 20;\n" +
  "        box-shadow: 0.6px 0.8px 0.8px 0px rgba(254, 255, 239, 0.61) inset,\n" +
  "                    0px -1px 0.8px 0px #ba9b2e inset;\n" +
  "        overflow: hidden;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #sun_wrapper .ray {\n" +
  "        background-color: #fff;\n" +
  "        height: 260%;\n" +
  "        aspect-ratio: 1;\n" +
  "        border-radius: 9999px;\n" +
  "        position: absolute;\n" +
  "        opacity: 0.1;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #moon {\n" +
  "        background-color: rgb(195, 201, 209);\n" +
  "        height: 100%;\n" +
  "        aspect-ratio: 1;\n" +
  "        border-radius: 9999px;\n" +
  "        z-index: -11;\n" +
  "        position: relative;\n" +
  "        box-shadow: 0.6px 0.8px 0.8px 0px rgba(255, 255, 255, 0.61) inset,\n" +
  "                    0px -1px 0.8px 0px #969696 inset;\n" +
  "        transform: translateX(100%);\n" +
  "        transition: all ease-in-out 0.6s;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #moon .spot {\n" +
  "        background: rgb(148, 158, 178);\n" +
  "        height: 10%;\n" +
  "        aspect-ratio: 1;\n" +
  "        border-radius: 99999px;\n" +
  "        position: absolute;\n" +
  "        box-shadow: 0px 0.2px 0.8px 0px rgba(0, 0, 0, 0.25) inset;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle .cloud_wrapper {\n" +
  "        background-color: transparent;\n" +
  "        position: absolute;\n" +
  "        top: 0;\n" +
  "        right: 0;\n" +
  "        height: 100%;\n" +
  "        width: 100%;\n" +
  "        display: flex;\n" +
  "        align-items: flex-end;\n" +
  "        z-index: 10;\n" +
  "        transition: all ease-in-out 0.6s;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle .cloud {\n" +
  "        background-color: rgb(243, 253, 255);\n" +
  "        height: 55%;\n" +
  "        aspect-ratio: 1;\n" +
  "        border-radius: 9999px;\n" +
  "        position: absolute;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #stars {\n" +
  "        width: 100%;\n" +
  "        height: 100%;\n" +
  "        background-color: inherit;\n" +
  "        position: absolute;\n" +
  "        border-radius: 99999px;\n" +
  "        display: flex;\n" +
  "        justify-content: flex-start;\n" +
  "        gap: 1.2%;\n" +
  "        padding-left: 8%;\n" +
  "        align-items: center;\n" +
  "        top: 0;\n" +
  "        transform: translateY(-100%);\n" +
  "        transition: transform ease-in-out 0.6s;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle input[type='checkbox'] {\n" +
  "        display: none;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #checkbox:checked + .sky {\n" +
  "        background: #1c1f2c;\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #checkbox:checked + .sky .cloud_wrapper {\n" +
  "        transform: translateY(130%);\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #checkbox:checked + .sky #sun_wrapper {\n" +
  "        transform: translateX(152.1%);\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #checkbox:checked + .sky #moon {\n" +
  "        transform: translateX(0%);\n" +
  "      }\n" +
  "\n" +
  "      .day-night-toggle #checkbox:checked + .sky #stars {\n" +
  "        transform: unset;\n" +
  "      }\n" +
  "    </style>\n" +
  "\n" +
  '    <div class=\"day-night-toggle\">\n' +
  '      <input id=\"checkbox\" type=\"checkbox\" />\n' +
  '      <label for=\"checkbox\" class=\"sky\">\n' +
  '        <div id=\"sun_wrapper\">\n' +
  '          <div class=\"ray\"></div>\n' +
  '          <div class=\"ray\"></div>\n' +
  '          <div class=\"ray\"></div>\n' +
  '          <div id=\"sun\">\n' +
  '            <div id=\"moon\">\n' +
  '              <div class=\"spot\"></div>\n' +
  '              <div class=\"spot\"></div>\n' +
  '              <div class=\"spot\"></div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <div class=\"cloud_wrapper\">\n' +
  '          <div v-for=\"n in 8\" :key=\"n\" class=\"cloud\"></div>\n' +
  '        </div>\n' +
  '        <div class=\"cloud_wrapper\">\n' +
  '          <div v-for=\"n in 8\" :key=\"n\" class=\"cloud\"></div>\n' +
  '        </div>\n' +
  '        <div id=\"stars\">\n' +
  '          <div v-for=\"n in 9\" :key=\"\\`star-\\${n}\\`\" class=\"star\">\n' +
  '            <div class=\"base\"></div>\n' +
  '            <div class=\"ray\"></div>\n' +
  '            <div class=\"ray\"></div>\n' +
  '            <div class=\"ray\"></div>\n' +
  '            <div class=\"ray\"></div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </label>\n' +
  '    </div>\n' +
  "  </div>\n" +
  "</template>";