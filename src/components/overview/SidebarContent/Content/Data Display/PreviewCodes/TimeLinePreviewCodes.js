export const MilestoneTimelinePreviewCode =
  "<script setup>\n" +
  "\n" +
  "\n" +
  "const milestones = [\n" +
  "  {\n" +
  '    date: "January 2024",\n' +
  '    title: "Project Kickoff",\n' +
  '    description: "Initial planning and kickoff meeting.",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "February 2024",\n' +
  '    title: "Design Phase",\n' +
  '    description: "Finalizing designs and mockups.",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "March 2024",\n' +
  '    title: "Development Phase",\n' +
  '    description: "Starting the development of the project.",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "April 2024",\n' +
  '    title: "Testing Phase",\n' +
  '    description: "Testing and quality assurance.",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "May 2024",\n' +
  '    title: "Launch",\n' +
  '    description: "Official project launch.",\n' +
  "  },\n" +
  "];\n" +
  "</script>\n" +
  "<template>\n" +
  '  <div class="max-w-4xl mx-auto p-6">\n' +
  '    <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">\n' +
  "      Milestone Timeline\n" +
  "    </h1>\n" +
  '    <div class="relative border-l dark:border-slate-700 border-gray-300">\n' +
  "      <div\n" +
  '          v-for="(milestone, index) in milestones"\n' +
  '          :key="index"\n' +
  '          class="mb-8"\n' +
  "      >\n" +
  "        <div\n" +
  '            class="absolute w-5 h-5 bg-[#36af7b] dark:border-slate-700 z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"\n' +
  "        />\n" +
  '        <div class="pl-6">\n' +
  '          <div class="flex 640px:items-center 640px:flex-row flex-col">\n' +
  '            <div class="text-[#36af7b] font-semibold">\n' +
  "              {{ milestone.date }}\n" +
  "            </div>\n" +
  "            <div\n" +
  '                class="640px:ml-4 dark:text-[#abc2d3] text-text text-lg font-semibold"\n' +
  "            >\n" +
  "              {{ milestone.title }}\n" +
  "            </div>\n" +
  "          </div>\n" +
  '          <p class="text-gray-600 dark:text-slate-400 mt-1">\n' +
  "            {{ milestone.description }}\n" +
  "          </p>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n";

export const WorkProgressTimelinePreviewCode =
  "<script setup>\n" +
  'import {Icon} from "@iconify/vue";\n' +
  "\n" +
  "\n" +
  "const workHistorys = [\n" +
  "  {\n" +
  '    date: "Jan 22",\n' +
  '    title: "Posted assignments of work",\n' +
  "    description:\n" +
  '        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",\n' +
  "    commentBtn: true,\n" +
  "    fileBtn: true,\n" +
  "  },\n" +
  "  {\n" +
  '    date: "Dec 12",\n' +
  '    title: "Uploaded Assignments File",\n' +
  "    description:\n" +
  '        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",\n' +
  "    commentBtn: false,\n" +
  "    fileBtn: false,\n" +
  "  },\n" +
  "  {\n" +
  '    date: "Nov 18",\n' +
  '    title: "Asked to bring good stuff college",\n' +
  "    description:\n" +
  '        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",\n' +
  "    commentBtn: true,\n" +
  "    fileBtn: true,\n" +
  "  },\n" +
  "  {\n" +
  '    date: "Nov 04",\n' +
  '    title: "Presentation Requirement",\n' +
  "    description:\n" +
  '        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",\n' +
  "    commentBtn: true,\n" +
  "    fileBtn: false,\n" +
  "  },\n" +
  "  {\n" +
  '    date: "Oct 15",\n' +
  '    title: "File handouts",\n' +
  "    description:\n" +
  '        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",\n' +
  "    commentBtn: false,\n" +
  "    fileBtn: false,\n" +
  "  },\n" +
  "];\n" +
  "</script>\n" +
  "<template>\n" +
  '  <div class="w-[55%] sm:w-[70%] mx-auto">\n' +
  '  <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">\n' +
  "    Work Progress\n" +
  "  </h1>\n" +
  "  <div\n" +
  '      class="relative border-l dark:border-slate-700 border-gray-300 w-full"\n' +
  "  >\n" +
  "    <div\n" +
  '        v-for="(milestone, index) in workHistorys"\n' +
  '        :key="index"\n' +
  '        class="mb-8"\n' +
  "    >\n" +
  '      <div class="pl-6 w-full">\n' +
  '        <div class="flex items-center">\n' +
  "          <div\n" +
  '              class="text-gray-600 text-[1rem] dark:text-[#abc2d3] absolute left-[-75px]"\n' +
  "          >\n" +
  "            {{ milestone.date }}\n" +
  "          </div>\n" +
  '          <div class="text-text dark:text-[#abc2d3] text-lg">\n' +
  "            {{ milestone.title }}\n" +
  "          </div>\n" +
  "        </div>\n" +
  '        <p class="text-gray-500 dark:text-slate-400 mt-1 text-[0.9rem]">\n' +
  "          {{ milestone.description }}\n" +
  "        </p>\n" +
  "\n" +
  '        <div class="flex flex-wrap items-center gap-[20px] mt-[10px]">\n' +
  "          <button\n" +
  '              v-if="milestone.commentBtn"\n' +
  '              class="flex items-center gap-[9px] text-gray-400 rounded-md px-4 py-1 text-[0.9rem]"\n' +
  "          >\n" +
  '            <Icon icon="fa-regular:comment"/>\n' +
  "            5 comments\n" +
  "          </button>\n" +
  "\n" +
  "          <button\n" +
  '              v-if="milestone.fileBtn"\n' +
  '              class="flex items-center gap-[9px] border-[#36af7b] border text-[#36af7b] rounded-md px-4 py-1 text-[0.9rem]"\n' +
  "          >\n" +
  '            <Icon icon="fa-regular:file-alt"/>\n' +
  "            FantechProp..\n" +
  "          </button>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</div>\n" +
  "</template>\n";

export const TreeTimelinePreviewCode =
  "<script setup>\n" +
  'import {Icon} from "@iconify/vue";\n' +
  "\n" +
  "\n" +
  "const milestones = [\n" +
  "  {\n" +
  '    date: "January 2024",\n' +
  '    title: "B.Tech",\n' +
  '    description: "B.Tech graduate with specialization in CSE",\n' +
  '    icon: "fa6-solid:graduation-cap",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "February 2024",\n' +
  '    title: "Design Phase",\n' +
  '    description: "Finalizing designs and mockups.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "March 2024",\n' +
  '    title: "Development Phase",\n' +
  '    description: "Starting the development of the project.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "April 2024",\n' +
  '    title: "Testing Phase",\n' +
  '    description: "Testing and quality assurance.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "May 2024",\n' +
  '    title: "Launch",\n' +
  '    description: "Official project launch.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "];\n" +
  "</script>\n" +
  "<template>\n" +
  '  <div class="w-full mx-auto p-6">\n' +
  '    <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">\n' +
  "      Tree Timeline\n" +
  "    </h1>\n" +
  "\n" +
  "    <div>\n" +
  "      <ul\n" +
  "          class=\"relative h-fit before:content-[''] before:absolute before:w-1 before:h-full before:bg-gray-200 dark:before:bg-slate-800 before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-md before:z-10\"\n" +
  "      >\n" +
  "        <li\n" +
  '            v-for="(milestone, index) in milestones"\n' +
  '            :key="index"\n' +
  '            :class="[\n' +
  "                  'relative w-1/2 mb-4',\n" +
  "                  index % 2 === 0 ? 'text-right' : 'left-1/2 text-left',\n" +
  '                ]"\n' +
  "        >\n" +
  "          <div\n" +
  '              id="icon"\n' +
  '              :class="[\n' +
  "                    'absolute top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-slate-800 rounded-full p-2 z-10',\n" +
  "                    index % 2 === 0\n" +
  "                      ? 'translate-x-1/2 right-0'\n" +
  "                      : '-translate-x-1/2',\n" +
  '                  ]"\n' +
  "          >\n" +
  "            <Icon\n" +
  '                :icon="milestone.icon"\n' +
  '                class="text-gray-500 dark:text-[#abc2d3] w-5 h-5"\n' +
  "            />\n" +
  "          </div>\n" +
  "\n" +
  "          <div\n" +
  '              :class="[\n' +
  "                    'relative border rounded-md dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900 shadow-gray-50 border-gray-200/60 shadow-md',\n" +
  "                    index % 2 === 0 ? '-left-8' : '-right-8',\n" +
  '                  ]"\n' +
  "          >\n" +
  '            <div class="py-3 px-4">\n' +
  "              <div>\n" +
  "                <div\n" +
  '                    class="text-text dark:text-[#abc2d3] text-lg font-semibold"\n' +
  "                >\n" +
  "                  {{ milestone.title }}\n" +
  "                </div>\n" +
  '                <div class="text-[#36af7b] text-sm">\n' +
  "                  {{ milestone.date }}\n" +
  "                </div>\n" +
  "              </div>\n" +
  '              <p class="mt-1 text-sm dark:text-slate-400 text-gray-600">\n' +
  "                {{ milestone.description }}\n" +
  "              </p>\n" +
  "            </div>\n" +
  "          </div>\n" +
  "        </li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n";

export const MilestoneIconTimelinePreviewCode =
  "<script setup>\n" +
  'import {Icon} from "@iconify/vue";\n' +
  "\n" +
  "\n" +
  "const milestones = [\n" +
  "  {\n" +
  '    date: "January 2024",\n' +
  '    title: "B.Tech",\n' +
  '    description: "B.Tech graduate with specialization in CSE",\n' +
  '    icon: "fa6-solid:graduation-cap",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "February 2024",\n' +
  '    title: "Design Phase",\n' +
  '    description: "Finalizing designs and mockups.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "March 2024",\n' +
  '    title: "Development Phase",\n' +
  '    description: "Starting the development of the project.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "April 2024",\n' +
  '    title: "Testing Phase",\n' +
  '    description: "Testing and quality assurance.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "  {\n" +
  '    date: "May 2024",\n' +
  '    title: "Launch",\n' +
  '    description: "Official project launch.",\n' +
  '    icon: "fa6-solid:briefcase",\n' +
  "  },\n" +
  "];\n" +
  "</script>\n" +
  "<template>\n" +
  '  <div class="max-w-4xl mx-auto p-6">\n' +
  '    <h1 class="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">\n' +
  "      Milestone Icon Timeline\n" +
  "    </h1>\n" +
  '    <div class="relative border-l-[5px] dark:border-slate-700 border-gray-300">\n' +
  "      <div\n" +
  '          v-for="(milestone, index) in milestones"\n' +
  '          :key="index"\n' +
  '          class="mb-8 relative"\n' +
  "      >\n" +
  "        <div\n" +
  '            id="icon"\n' +
  '            class="absolute border-2 border-white top-5 -left-[2.5px] transform -translate-x-1/2 -translate-y-1/2 bg-[#36af7b] dark:border-slate-600 rounded-full p-2 z-10"\n' +
  "        >\n" +
  '          <Icon :icon="milestone.icon" class="text-white w-5 h-5"/>\n' +
  "        </div>\n" +
  '        <div class="pl-6">\n' +
  '          <div class="flex 640px:items-center 640px:flex-row flex-col">\n' +
  '            <div class="text-[#36af7b] font-semibold">\n' +
  "              {{ milestone.date }}\n" +
  "            </div>\n" +
  "            <div\n" +
  '                class="640px:ml-4 dark:text-[#abc2d3] text-text text-lg font-semibold"\n' +
  "            >\n" +
  "              {{ milestone.title }}\n" +
  "            </div>\n" +
  "          </div>\n" +
  '          <p class="text-gray-500 dark:text-slate-400 text-[0.9rem] mt-1">\n' +
  "            {{ milestone.description }}\n" +
  "          </p>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n";
