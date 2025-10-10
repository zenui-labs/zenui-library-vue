<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {computed, ref} from "vue";
import {Icon} from "@iconify/vue";
import {strongPasswordContents} from "@/Utils/ContentsConfig/InputContents.js";


const isEyeOpen = ref(true);
const strongPassword = ref('');
const hintDropdownOpen = ref(false);
const signal = ref('normal');
const signal2 = ref({
  uppercase: false,
  lowercase: false,
  number: false,
  symbol: false,
  length: false,
  strong: false,
});
const countTrueItems = (obj) => {
  const totalItems = Object.keys(obj).length;
  const trueItems = Object.values(obj).filter(item => item).length;
  return Math.floor(trueItems / totalItems * 100);
}
const strengthProgress = computed(() => {
  return countTrueItems(signal2.value);
});

const sectionIds = strongPasswordContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const checkInlinePreview = ref(true);
const checkInlineCode = ref(false);

const checkByIndicatorPreview = ref(true);
const checkByIndicatorCode = ref(false);

const checkPasswordWithHintPreview = ref(true);
const checkPasswordWithHintCode = ref(false);

const showHintInDropdownPreview = ref(true);
const showHintInDropdownCode = ref(false);

const handleStrongPasswordCheckingChange = (e) => {
  const password = e.target.value;
  strongPassword.value = password;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasLowerCase) {
    signal.value = 'lowercase-error';
  } else if (!hasUpperCase) {
    signal.value = 'uppercase-error';
  } else if (!hasNumber) {
    signal.value = 'number-error';
  } else if (!hasSymbol) {
    signal.value = 'symbol-error';
  } else if (password.length < 8) {
    signal.value = 'length-error';
  } else {
    signal.value = 'strong';
  }
};

const handleStrongPasswordCheckingChange2 = (e) => {
  const password = e.target.value;
  strongPassword.value = password;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  signal2.value = {
    uppercase: hasUpperCase,
    lowercase: hasLowerCase,
    number: hasNumber,
    symbol: hasSymbol,
    length: password.length >= 8,
    strong: password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSymbol,
  }
}

const getErrorText = () => {
  switch (signal.value) {
    case 'length-error':
      return 'Password must be at least 8 characters long.';
    case 'uppercase-error':
      return 'Password must contain at least one uppercase letter.';
    case 'lowercase-error':
      return 'Password must contain at least one lowercase letter.';
    case 'number-error':
      return 'Password must contain at least one number.';
    case 'symbol-error':
      return 'Password must contain at least one special character.';
    default:
      return 'Wow! Very strong password.';
  }
};

const hintList = [
  {
    text: 'Minimum number of characters is 8.',
    type: 'length'
  },
  {
    text: 'Should contain uppercase.',
    type: 'uppercase'
  },
  {
    text: 'Should contain lowercase.',
    type: 'lowercase'
  },
  {
    text: 'Should contain numbers.',
    type: 'number'
  },
  {
    text: 'Should contain special characters.',
    type: 'symbol'
  },
]

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader text='Check Inline' id='check_inline'/>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="checkInlinePreview"
                 @update:preview="val => checkInlinePreview = val"
                 @update:code="val => checkInlineCode = val"
                 :code="checkInlineCode"/>

      <ComponentWrapper>
        <div v-if="checkInlinePreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%]'>
            <label
                for='password'
                class='text-[15px] dark:text-[#abc2d3] text-text font-[400]'
            >
              Password
            </label>
            <div class='w-full relative'>
              <input
                  :type="isEyeOpen ? 'text' : 'password'"
                  name='password'
                  id='password'
                  @input="handleStrongPasswordCheckingChange"
                  placeholder='Password'
                  class='peer border-border dark:border-slate-600 dark:bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-brandColor transition-colors duration-300'
              />

              <p
                  v-if="strongPassword"
                  :class="`${
                  signal === 'normal'
              ? 'text-red-500'
              : 'text-green-600'
              } text-[0.9rem] mt-1`"
              >
                <p v-if="signal === 'strong'" class='text-green-600 flex items-center gap-[5px]'>
                  <Icon icon="weui:done2-outlined" class='text-[1.1rem]'/>
                  {{ getErrorText() }}
                </p>
                <p v-else class='text-red-500 flex items-center gap-[5px]'>
                  <Icon icon="material-symbols:error-outline-rounded" class='text-[1.1rem]'/>
                  {{ getErrorText() }}
                </p>
              </p>

              <Icon icon="iconamoon:eye-light"
                    v-if="isEyeOpen"
                    class=' absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer'
                    @click="isEyeOpen = false"
              />
              <Icon icon="basil:eye-closed-outline"
                    v-else
                    class=' absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer'
                    @click="isEyeOpen = true"
              />
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Check By Indicator' id='check_by_indicator'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="checkByIndicatorPreview"
                 @update:preview="val => checkByIndicatorPreview = val"
                 @update:code="val => checkByIndicatorCode = val"
                 :code="checkByIndicatorCode"/>

      <ComponentWrapper>
        <div v-if="checkByIndicatorPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class="w-full 1024px:w-[80%]">
            <label
                for="password"
                class="text-[15px] dark:text-[#abc2d3] text-text font-[400]"
            >
              Password
            </label>

            <div class="w-full relative">
              <input
                  :type="isEyeOpen ? 'text' : 'password'"
                  name="password"
                  id="password"
                  @input="handleStrongPasswordCheckingChange2"
                  placeholder="Password"
                  class="peer border-border dark:border-slate-600 dark:bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-brandColor transition-colors duration-300"
              />

              <div class="w-full mt-2 flex items-center gap-[5px]">
                <div
                    v-for="(progress, index) in [0, 16, 33, 50, 90]"
                    :key="index"
                    :class="strengthProgress > progress
            ? 'bg-brandColor'
            : 'dark:bg-slate-700 bg-gray-200'"
                    class="h-[9px] w-full rounded-md"
                ></div>
              </div>

              <Icon icon="iconamoon:eye-light"
                    v-if="isEyeOpen"
                    class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                    @click="isEyeOpen = false"
              />
              <Icon icon="basil:eye-closed-outline"
                    v-else
                    class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                    @click="isEyeOpen = true"
              />
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Check Password With Hint' id='check_password_with_hint'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="checkPasswordWithHintPreview"
                 @update:preview="val => checkPasswordWithHintPreview = val"
                 @update:code="val => checkPasswordWithHintCode = val"
                 :code="checkPasswordWithHintCode"/>

      <ComponentWrapper>
        <div v-if="checkPasswordWithHintPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class="w-full 1024px:w-[80%]">
            <label
                for="password"
                class="text-[15px] dark:text-[#abc2d3] text-text font-[400]"
            >
              Password
            </label>

            <div class="w-full relative">
              <input
                  :type="isEyeOpen ? 'text' : 'password'"
                  name="password"
                  id="password"
                  @input="handleStrongPasswordCheckingChange2"
                  placeholder="Password"
                  class="peer border-border dark:border-slate-600 dark:bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-brandColor transition-colors duration-300"
              />

              <h3 class="text-gray-900 dark:text-[#abc2d3] font-[500] text-[1rem] mt-4">
                Your password must contain:
              </h3>

              <div class="w-full mt-2 flex-col flex gap-[6px]">
                <div
                    v-for="(hint, index) in hintList"
                    :key="index"
                    :class="signal2[hint.type]
            ? 'text-green-500'
            : 'dark:text-slate-500 text-gray-500'"
                    class="text-[0.8rem] flex items-center gap-[8px]"
                >
                  <Icon icon="weui:done-outlined" v-if="signal2[hint.type]" class="text-[1rem]"/>
                  <Icon icon="icon-park-outline:close" v-else/>
                  {{ hint.text }}
                </div>
              </div>

              <Icon icon="iconamoon:eye-light"
                    v-if="isEyeOpen"
                    class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                    @click="isEyeOpen = false"
              />
              <Icon icon="basil:eye-closed-outline"
                    v-else
                    class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                    @click="isEyeOpen = true"
              />
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Show Hint In Dropdown' id='show_hint_in_dropdown'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="showHintInDropdownPreview"
                 @update:preview="val => showHintInDropdownPreview = val"
                 @update:code="val => showHintInDropdownCode = val"
                 :code="showHintInDropdownCode"/>

      <ComponentWrapper>
        <div v-if="showHintInDropdownPreview" :class="hintDropdownOpen ? 'mb-48' : 'mb-4'"
             class='p-8 flex items-center flex-col gap-5 justify-center transition-all duration-200'>
          <div class="w-full 1024px:w-[80%]">
            <label
                for="password"
                class="text-[15px] dark:text-[#abc2d3] text-text font-[400]"
            >
              Password
            </label>

            <div class="w-full relative">
              <input
                  :type="isEyeOpen ? 'text' : 'password'"
                  name="password"
                  id="password"
                  @input="handleStrongPasswordCheckingChange2"
                  @focus="hintDropdownOpen = true"
                  @blur="hintDropdownOpen = false"
                  placeholder="Password"
                  class="peer border-border dark:border-slate-600 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300"
              />

              <Transition
                  enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-2"
              >
                <div
                    v-if="hintDropdownOpen"
                    class="bg-white boxShadow dark:bg-slate-800 rounded-md py-3 px-4 absolute top-[60px] left-0 w-full"
                >
                  <h3 class="text-gray-900 dark:text-[#abc2d3] font-[500] text-[1rem]">
                    Your password must contain:
                  </h3>

                  <div class="w-full mt-2 flex-col flex gap-[6px]">
                    <div
                        v-for="(hint, index) in hintList"
                        :key="index"
                        :class="signal2[hint.type]
              ? 'text-green-500'
              : 'dark:text-slate-400 text-gray-500'"
                        class="text-[0.8rem] flex items-center gap-[8px]"
                    >
                      <Icon icon="weui:done-outlined" v-if="signal2[hint.type]" class="text-[1rem]"/>
                      <Icon icon="icon-park-outline:close" v-else/>
                      {{ hint.text }}
                    </div>
                  </div>
                </div>
              </Transition>

              <Icon icon="iconamoon:eye-light"
                    v-if="isEyeOpen"
                    class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                    @click="isEyeOpen = false"
              />
              <Icon icon="basil:eye-closed-outline"
                    v-else
                    class="absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                    @click="isEyeOpen = true"
              />
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <OverviewFooter
          backName='all components'
          backUrl='/components/all-components'
          forwardName='Textarea'
          forwardUrl='/components/input-textarea'
      />
    </div>

    <ContentNavbar :contents="strongPasswordContents" :activeSection="activeSection"/>

  </aside>
</template>
