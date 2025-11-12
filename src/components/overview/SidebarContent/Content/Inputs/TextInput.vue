<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {textInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import {Icon} from "@iconify/vue";
import {
  animatedLabelInputCodes,
  bottomBorderInputCodes,
  inputWithIconCodes,
  joinUsInputCodes,
  linkInputCodes,
  passwordInputCodes,
  priceInputCodes,
  primaryInputCodes,
  searchInputCodes
} from "@/components/overview/SidebarContent/Content/Inputs/PreviewCodes/TextInputPreviewCodes.js";

const animatedInputValue = ref('');
const isEyeOpen = ref(false);
const priceDropdownOpen = ref(false);
const selectedCurrencyType = ref('BDT');

const sectionIds = textInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const primaryInputPreview = ref(true);
const primaryInputCode = ref(false);

const bottomBorderInputPreview = ref(true);
const bottomBorderInputCode = ref(false);

const animateLabelInputPreview = ref(true);
const animateLabelInputCode = ref(false);

const inputWithIconPreview = ref(true);
const inputWithIconCode = ref(false);

const passwordInputPreview = ref(true);
const passwordInputCode = ref(false);

const linkInputPreview = ref(true);
const linkInputCode = ref(false);

const priceInputPreview = ref(true);
const priceInputCode = ref(false);

const searchInputPreview = ref(true);
const searchInputCode = ref(false);

const joinUsInputPreview = ref(true);
const joinUsInputCode = ref(false);

const allCurrencyTypes = ['USD', 'EUR', 'BDT'];

const handlePriceDropdownClick = (currency) => {
  selectedCurrencyType.value = currency;
  priceDropdownOpen.value = !priceDropdownOpen.value;
};

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader text='primary input' id='primary_input'/>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%]'>
            <label
                for='name'
                class='text-[15px] dark:text-slate-300 text-text font-[400]'
            >
              Name
              <span class='text-red-500'>*</span>
            </label>
            <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='Your name'
                class='border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600 dark:text-slate-300 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-brandColor transition-colors duration-300'
            />
          </div>
        </div>
        <ShowCode
            v-else
            :code="primaryInputCodes"
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='bottom bordered input' id='bottom_bordered_input'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="bottomBorderInputPreview"
                 @update:preview="val => bottomBorderInputPreview = val"
                 @update:code="val => bottomBorderInputCode = val"
                 :code="bottomBorderInputCode"/>

      <ComponentWrapper>
        <div v-if="bottomBorderInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <input
              type='text'
              name='name'
              id='name'
              placeholder='Your name'
              class='border-border dark:bg-slate-900 dark:text-[#abc2d3] dark:border-slate-600 border-b outline-none px-4 w-full 1024px:w-[80%] py-3 focus:border-brandColor transition-colors duration-300'
          />
        </div>
        <ShowCode
            v-else
            :code='bottomBorderInputCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='animate label input' id='animate_label_input'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="animateLabelInputPreview"
                 @update:preview="val => animateLabelInputPreview = val"
                 @update:code="val => animateLabelInputCode = val"
                 :code="animateLabelInputCode"/>

      <ComponentWrapper>
        <div v-if="animateLabelInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <label class='relative w-full 1024px:w-[80%]'>
            <input
                type='text'
                name='name'
                :value="animatedInputValue"
                @change="(e) => animatedInputValue = e.target.value"
                id='name'
                class='peer border-border dark:border-slate-600 bg-transparent border rounded-md outline-none dark:text-darkTextColor px-4 py-3 w-full focus:border-brandColor transition-colors duration-300'
            />
            <span
                :class="`${animatedInputValue ? '-top-3 left-2 scale-[0.9] dark:bg-darkBgColor bg-white px-[4px]' : 'left-5 top-3'} absolute dark:peer-focus:bg-darkBgColor peer-focus:-top-3 peer-focus:bg-white dark:text-slate-500 peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-brandColor text-[#777777] peer-focus:px-1 transition-all duration-300`">
            Your name
            </span>
          </label>
        </div>
        <ShowCode
            v-else
            :code='animatedLabelInputCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Input With Icon' id='input_with_icon'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="inputWithIconPreview"
                 @update:preview="val => inputWithIconPreview = val"
                 @update:code="val => inputWithIconCode = val"
                 :code="inputWithIconCode"/>

      <ComponentWrapper>
        <div v-if="inputWithIconPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%] relative'>
            <Icon icon="uil:user"
                  class=' absolute top-3.5 left-3 text-[1.3rem] dark:text-slate-400 text-[#777777]'/>
            <input
                type='text'
                name='text'
                id='text'
                placeholder='Username'
                class='peer border-border dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-brandColor transition-colors duration-300'
            />
          </div>

          <div class='w-full 1024px:w-[80%] relative'>
            <Icon icon="mynaui:lock-password"
                  class=' absolute top-3.5 left-3 text-[1.3rem] dark:text-slate-400 text-[#777777]'/>
            <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                class='peer border-border dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-brandColor transition-colors duration-300'
            />
          </div>

          <div class='w-full 1024px:w-[80%] relative'>
            <Icon icon="mdi:email-outline"
                  class=' absolute top-3.5 left-3 text-[1.3rem] dark:text-slate-400 text-[#777777]'/>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email address'
                class='peer border-border dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-brandColor transition-colors duration-300'
            />
          </div>
        </div>
        <ShowCode
            v-else
            :code='inputWithIconCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Password Input' id='password_input'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="passwordInputPreview"
                 @update:preview="val => passwordInputPreview = val"
                 @update:code="val => passwordInputCode = val"
                 :code="passwordInputCode"/>

      <ComponentWrapper>
        <div v-if="passwordInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
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
                  placeholder='Password'
                  class='peer border-border dark:border-slate-600 dark:bg-slate-900 dark:placeholder:text-slate-500 border dark:text-[#abc2d3] rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-brandColor transition-colors duration-300'
              />
              <Icon icon="akar-icons:eye-open" :strokeWidth="1.1"
                    v-if="isEyeOpen"
                    class=' absolute top-4 right-4 text-[1.5rem] dark:text-slate-400 text-[#777777] cursor-pointer'
                    @click="isEyeOpen = false"
              />
              <Icon icon="basil:eye-closed-outline"
                    v-else
                    class=' absolute top-4 right-4 text-[1.5rem] dark:text-slate-400 text-[#777777] cursor-pointer'
                    @click="isEyeOpen = true"
              />
            </div>
          </div>
        </div>
        <ShowCode
            v-else
            :code='passwordInputCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Link Input' id='link_input'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="linkInputPreview"
                 @update:preview="val => linkInputPreview = val"
                 @update:code="val => linkInputCode = val"
                 :code="linkInputCode"/>

      <ComponentWrapper>
        <div v-if="linkInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%] relative'>
            <input
                type='text'
                placeholder='Website url'
                class='border dark:border-slate-600 dark:text-[#abc2d3] dark:placeholder:text-slate-500 bg-transparent border-border py-3 pr-4 pl-[90px] outline-none w-full rounded-md'
            />

            <span
                class='bg-gray-300 dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-slate-400 text-gray-500 text-[1rem] absolute top-0 left-0 h-full px-3 flex items-center justify-center rounded-l-md'>
                    Https://
                  </span>
          </div>
        </div>
        <ShowCode
            v-else
            :code='linkInputCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Price Input' id='price_input'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="priceInputPreview"
                 @update:preview="val => priceInputPreview = val"
                 @update:code="val => priceInputCode = val"
                 :code="priceInputCode"/>

      <ComponentWrapper>
        <div v-if="priceInputPreview" :class="priceDropdownOpen ? 'mb-[8rem]' : 'mb-4'"
             class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%] relative'>
            <input
                type='number'
                placeholder='0'
                class='border dark:border-slate-600 bg-transparent dark:text-[#abc2d3] dark:placeholder:text-slate-500 border-border py-3 pl-[65px] pr-[80px] outline-none w-full rounded-md'
            />

            <div
                class='bg-gray-100 w-[50px] dark:bg-slate-900 dark:border dark:border-slate-600 absolute top-0 h-full left-0 flex items-center justify-center rounded-l-md'>
              <Icon
                  :icon="selectedCurrencyType === 'BDT' ? 'mdi:currency-bdt' : selectedCurrencyType === 'EUR' ? 'material-symbols:euro' : 'fa:usd'"
                  class='text-[1.2rem] dark:text-slate-400 text-gray-600'/>
            </div>

            <div
                class='absolute top-0 right-0 h-full flex dark:border-slate-600 items-center justify-center cursor-pointer border-l border-border px-4'
            >
            <span @click="priceDropdownOpen = !priceDropdownOpen"
                  class='flex items-center gap-[8px] dark:text-slate-300 text-text'>
                      {{ selectedCurrencyType }}
                        <Icon icon="formkit:down"
                              :class="`${
                            priceDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'
                            } transition-all text-[0.6rem] duration-200`"
                        />
                    </span>
            </div>
            <ul
                :class="`${
                      priceDropdownOpen
                      ? 'translate-y-0 opacity-100 z-30'
                  : 'translate-y-[-10px] opacity-0 z-[-1]'
                  } list-none absolute top-[53px] dark:bg-slate-800 dark:text-slate-300 right-0 bg-white toastshadow w-[87px] flex flex-col items-center transition-all duration-200 justify-center py-1 rounded-md`"
            >
              <li
                  v-for="(currency, index) in allCurrencyTypes"
                  :key="index"
                  class='py-2 px-4 w-full dark:hover:bg-slate-700/30 hover:bg-gray-100 text-center cursor-pointer'
                  @click="handlePriceDropdownClick(currency)"
              >
                {{ currency }}
              </li>
            </ul>
          </div>
        </div>
        <ShowCode
            v-else
            :code='priceInputCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Search Input' id='search_input'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="searchInputPreview"
                 @update:preview="val => searchInputPreview = val"
                 @update:code="val => searchInputCode = val"
                 :code="searchInputCode"/>

      <ComponentWrapper>
        <div v-if="searchInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%] relative'>
            <input
                type='text'
                placeholder='Search...'
                class='border dark:border-slate-600 bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'
            />

            <span
                class='bg-gray-300 dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-slate-400 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'>
                    <Icon icon="circum:search" class='text-[1.3rem]  group-hover:text-gray-200'/>
                  </span>
          </div>

          <div class='w-full 1024px:w-[80%] relative'>
            <input
                type='text'
                placeholder='Search...'
                class='border dark:border-slate-600 dark:placeholder:text-slate-500 bg-transparent dark:text-[#abc2d3] border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'
            />

            <span
                class='bg-gray-300 dark:bg-slate-900 dark:border-slate-600 dark:border dark:text-slate-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200'>
                    Search
                  </span>
          </div>

          <div
              class='bg-brandColor py-4 w-full 1024px:w-[80%] px-5 flex items-center justify-center rounded-full cursor-pointer relative'>
            <Icon icon="circum:search" class='text-[1.3rem] text-white ml-auto'/>

            <input
                type='text'
                placeholder='Search...'
                class='border dark:bg-slate-900 dark:border-none dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-border absolute top-[2px] left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full'
            />
          </div>
        </div>
        <ShowCode
            v-else
            :code='searchInputCodes'
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Join Us Input' id='join_us_input'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="joinUsInputPreview"
                 @update:preview="val => joinUsInputPreview = val"
                 @update:code="val => joinUsInputCode = val"
                 :code="joinUsInputCode"/>

      <ComponentWrapper>
        <div v-if="joinUsInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='w-full 1024px:w-[80%] relative'>
            <input
                type='email'
                placeholder='Email'
                class='border bg-transparent dark:border-slate-500 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-border py-3 pl-4 pr-[115px] outline-none w-full rounded-md'
            />

            <span
                class='bg-brandColor text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'>
                    Subscribe
                  </span>
          </div>
        </div>
        <ShowCode
            v-else
            :code='joinUsInputCodes'
        />
      </ComponentWrapper>

      <OverviewFooter
          backName='all components'
          backUrl='/components/all-components'
          forwardName='Textarea'
          forwardUrl='/components/input-textarea'
      />
    </div>

    <ContentNavbar :contents="textInputContents" :activeSection="activeSection"/>

  </aside>
</template>
