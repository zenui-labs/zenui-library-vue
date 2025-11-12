export const circleSwitchCodes = '<script setup>\n' +
    '\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isToggle = ref(false)\n' +
    '\n' +
    'function handleToggle() {\n' +
    '  isToggle.value = !isToggle.value\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class="p-8 mb-4 flex items-center gap-5 justify-center">\n' +
    '\n' +
    '    <!--  extra large  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '              isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '          } w-[70px] h-[40px] p-[0.160rem] border dark:border-slate-700 dark:bg-slate-800 transition-colors cursor-pointer duration-500 border-[#e5eaf2]  rounded-full relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${\n' +
    '              isToggle ? \'translate-x-[30px] !bg-white\' : \'translate-x-[2px]\'\n' +
    '          } w-[32px] h-[32px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--  large  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '    } w-[65px] h-[36px] p-[0.180rem] cursor-pointer dark:border-slate-700 dark:bg-slate-800 border transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${\n' +
    '        isToggle ? \'translate-x-[28px] !bg-white\' : \'translate-x-[2px]\'\n' +
    '    } w-[28px] h-[28px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--  medium  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '    } w-[60px] h-[33px] p-[0.180rem] border dark:border-slate-700 dark:bg-slate-800 transition-colors cursor-pointer duration-500 border-[#e5eaf2]  rounded-full relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${\n' +
    '        isToggle ? \'translate-x-[26px] !bg-white\' : \'translate-x-[2px]\'\n' +
    '    } w-[25px] h-[25px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--  small  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '    } w-[57px] h-[30px] px-[0.150rem] dark:border-slate-700 dark:bg-slate-800 cursor-pointer py-[0.160rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${\n' +
    '        isToggle ? \'translate-x-[27px] !bg-white\' : \'translate-x-[1px]\'\n' +
    '    } w-[23px] h-[23px] pb-1 dark:bg-slate-300 transition-all duration-500 rounded-full bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const squareSwitchCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isToggle = ref(false)\n' +
    '\n' +
    'function handleToggle() {\n' +
    '  isToggle.value = !isToggle.value\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'p-8 mb-4 flex items-center gap-5 justify-center\'>\n' +
    '\n' +
    '    <!--  extra large  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '              isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '          } w-[70px] h-[40px] py-[0.210rem] dark:border-slate-700 dark:bg-slate-800 px-[0.209rem] cursor-pointer border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${\n' +
    '              isToggle\n' +
    '              ? \'translate-x-[29px] rotate-[90deg] !bg-white\'\n' +
    '          : \'translate-x-[0px] rotate-[0deg]\'\n' +
    '          } w-[31px] h-[31px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--  large  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '    } w-[65px] h-[38px] py-[0.210rem] dark:border-slate-700 dark:bg-slate-800 px-[0.230rem] cursor-pointer border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${\n' +
    '        isToggle\n' +
    '        ? \' translate-x-[26px] rotate-[90deg] !bg-white\'\n' +
    '    : \'translate-x-[0px] rotate-[0deg]\'\n' +
    '    } w-[29px] h-[29px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--  medium  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '    } w-[65px] h-[34px] py-[0.138rem] dark:border-slate-700 dark:bg-slate-800 px-[0.200rem] cursor-pointer border transition-colors duration-500 border-[#e5eaf2] rounded-lg relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${ isToggle\n' +
    '        ? \'translate-x-[30px] rotate-[90deg] !bg-white\'\n' +
    '    : \'translate-x-[0px] rotate-[0deg]\'\n' +
    '    } w-[26px] h-[27px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--  small  -->\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle ? \'!bg-[#36af7b]\' : \'bg-[#f0f0f0]\'\n' +
    '    } w-[55px] h-[30px] py-[0.100rem] dark:border-slate-700 dark:bg-slate-800 px-[0.200rem] cursor-pointer border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div\n' +
    '          :class="`${\n' +
    '        isToggle\n' +
    '        ? \'translate-x-[24px] rotate-[90deg] !bg-white\'\n' +
    '    : \'translate-x-[0px] rotate-[0deg]\'\n' +
    '    } w-[23px] h-[24px] transition-all dark:bg-slate-300 duration-500 rounded-md bg-[#fff]`"\n' +
    '          style="box-shadow: 1px 2px 5px 2px rgb(0,0,0,0.1)"\n' +
    '      ></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'

export const animatedSwitchCodes = '<script setup>\n' +
    'import {ref} from "vue";\n' +
    '\n' +
    'const isToggle = ref(false)\n' +
    'const widthIncrease = ref(false)\n' +
    'const animatedSwitch = ref(false)\n' +
    '\n' +
    'function handleToggle() {\n' +
    '  isToggle.value = !isToggle.value\n' +
    '}\n' +
    '\n' +
    'const handleAnimatedSwitch = () => {\n' +
    '  widthIncrease.value = true\n' +
    '  setTimeout(() => {\n' +
    '    widthIncrease.value = false\n' +
    '    animatedSwitch.value = !animatedSwitch.value;\n' +
    '  }, 200)\n' +
    '}\n' +
    '</script>\n' +
    '\n' +
    '<template>\n' +
    '  <div class=\'p-8 mb-4 flex items-center gap-5 justify-center\'>\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '              isToggle\n' +
    '              ? \'!bg-[#e5eaf2] !border-[#e5eaf2]\'\n' +
    '          : \'bg-[#f0f0f0] border-gray-200\'\n' +
    '          } border relative p-1 rounded-full dark:border-slate-700 dark:bg-slate-800 w-[70px] cursor-pointer transition-all h-[40px] duration-200`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div class=\'absolute inset-0 flex items-center justify-center\'>\n' +
    '        <div\n' +
    '            :class="`${\n' +
    '                isToggle\n' +
    '                ? \'translate-x-[15px] !bg-white\'\n' +
    '            : \'translate-x-[-15px]\'\n' +
    '            } ${\n' +
    '            widthIncrease ? \'!w-[37px]\' : \'!w-[30px]\'\n' +
    '            } w-[30px] h-[30px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"\n' +
    '        ></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle\n' +
    '        ? \'!bg-[#e5eaf2] !border-[#e5eaf2]\'\n' +
    '    : \'bg-[#f0f0f0] border-gray-200\'\n' +
    '    } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[65px] cursor-pointer transition-all h-[37px] duration-200`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div class=\'absolute inset-0 flex items-center justify-center\'>\n' +
    '        <div\n' +
    '            :class="`${\n' +
    '          isToggle\n' +
    '          ? \'translate-x-[13px] !bg-white\'\n' +
    '      : \'translate-x-[-13px]\'\n' +
    '      } ${\n' +
    '      widthIncrease ? \'!w-[35px]\' : \'!w-[28px]\'\n' +
    '      } w-[28px] h-[28px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"\n' +
    '        ></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle\n' +
    '        ? \'!bg-[#e5eaf2] !border-[#e5eaf2]\'\n' +
    '    : \'bg-[#f0f0f0] border-gray-200\'\n' +
    '    } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[60px] cursor-pointer transition-all h-[33px] duration-200`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div class=\'absolute inset-0 flex items-center justify-center\'>\n' +
    '        <div\n' +
    '            :class="`${\n' +
    '          isToggle\n' +
    '          ? \'translate-x-[13px] !bg-white\'\n' +
    '      : \'translate-x-[-13px]\'\n' +
    '      } ${\n' +
    '      widthIncrease ? \'!w-[29px]\' : \'!w-[25px]\'\n' +
    '      } w-[25px] h-[25px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"\n' +
    '        ></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div\n' +
    '        :class="`${\n' +
    '        isToggle\n' +
    '        ? \'!bg-[#e5eaf2] !border-[#e5eaf2]\'\n' +
    '    : \'bg-[#f0f0f0] border-gray-200\'\n' +
    '    } border relative p-1 dark:border-slate-700 dark:bg-slate-800 rounded-full w-[55px] cursor-pointer transition-all h-[30px] duration-200`"\n' +
    '        @click="handleToggle"\n' +
    '    >\n' +
    '      <div class=\'absolute inset-0 flex items-center justify-center\'>\n' +
    '        <div\n' +
    '            :class="`${\n' +
    '          isToggle\n' +
    '          ? \'translate-x-[13px] !bg-white\'\n' +
    '      : \'translate-x-[-13px]\'\n' +
    '      } ${\n' +
    '      widthIncrease ? \'!w-[25px]\' : \'!w-[22px]\'\n' +
    '      } w-[22px] h-[22px] dark:bg-slate-300 rounded-full bg-white transition-all duration-200`"\n' +
    '        ></div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</template>'