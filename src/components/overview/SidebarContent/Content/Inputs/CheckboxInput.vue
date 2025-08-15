<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {checkboxInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import WarningMessageCard from "@/Shared/Component/WarningMessageCard.vue";

const check1Change = ref(false);
const animatedCheckChange = ref(false);
const selected = ref([1]);

const sectionIds = checkboxInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const primaryInputPreview = ref(true);
const primaryInputCode = ref(false);

const handleCheckbox1Change = () => {
  check1Change.value = !check1Change.value;
}

const handleAnimatedCheckboxChange = () => {
  animatedCheckChange.value = !animatedCheckChange.value;
}

const handleChange = (value) => {
  if (selected.value.includes(value)) {
    selected.value = selected.value.filter((item) => item !== value);
  } else {
    selected.value.push(value);
  }
}

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <WarningMessageCard>
        Customize your checkboxes by changing their colors and sizes.
        Adjust the <b>background-color</b> for the unchecked state and
        <b>accent-color</b> for the checked state. Resize them using
        <b>width</b> and <b>height</b> properties.
      </WarningMessageCard>

      <ContentHeader text='Normal Checkbox' id='normal_checkbox'/>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <label class='flex items-center gap-[10px] cursor-pointer'>
            <input
                type='checkbox'
                class='hidden'
                @change="handleCheckbox1Change"
            />
            <svg
                v-if="check1Change"
                width='21'
                height='21'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Group 335'>
                <rect
                    id='Rectangle 331'
                    x='-0.00012207'
                    y='6.10352e-05'
                    width='20'
                    height='20'
                    rx='4'
                    class='fill-brandColor'
                    stroke='#3B9DF8'
                ></rect>
                <path
                    id='Vector'
                    d='M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z'
                    fill='white'
                ></path>
              </g>
            </svg>
            <svg
                v-else
                width='21'
                height='21'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Group 335'>
                <rect
                    id='Rectangle 331'
                    x='-0.00012207'
                    y='6.10352e-05'
                    width='20'
                    height='20'
                    rx='4'
                    class='fill-transparent'
                    stroke='#ccc'
                ></rect>
              </g>
            </svg>

            <span class='text-[1.2rem] dark:text-[#abc2d3] text-text'>ZenUI Library</span>
          </label>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Animated Checkbox' id='animated_checkbox'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <label class='flex items-center gap-[10px] cursor-pointer'>
            <input
                type='checkbox'
                class='hidden'
                @change="handleAnimatedCheckboxChange"
            />
            <span class='relative'>
                    <span
                        :class="`${
                        animatedCheckChange
                        ? 'opacity-100 z-20 scale-[1]'
              : 'opacity-0 scale-[0.4] z-[-1]'
              } transition-all duration-200 absolute top-0 left-0`"
                    >
              <svg
                  width='21'
                  height='21'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
              >
                <g id='Group 335'>
                  <rect
                      id='Rectangle 331'
                      x='-0.00012207'
                      y='6.10352e-05'
                      width='20'
                      height='20'
                      rx='4'
                      class='fill-brandColor'
                      stroke='#3B9DF8'
                  ></rect>
                  <path
                      id='Vector'
                      d='M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z'
                      fill='white'
                  ></path>
                </g>
              </svg>
              </span>

              <span
                  :class="`${
                  !animatedCheckChange
                  ? 'opacity-100 z-20 scale-[1]'
              : 'opacity-0 scale-[0.4] z-[-1]'
              } transition-all duration-200`"
              >
              <svg
                  width='21'
                  height='21'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
              >
                <g id='Group 335'>
                  <rect
                      id='Rectangle 331'
                      x='-0.00012207'
                      y='6.10352e-05'
                      width='20'
                      height='20'
                      rx='4'
                      class='fill-transparent'
                      stroke='#ccc'
                  ></rect>
                </g>
              </svg>
              </span>
            </span>

            <span class='text-[1.2rem] dark:text-[#abc2d3] text-text'>ZenUI Library</span>
          </label>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Checkbox Group' id='checkbox_group'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="primaryInputPreview"
                 @update:preview="val => primaryInputPreview = val"
                 @update:code="val => primaryInputCode = val"
                 :code="primaryInputCode"/>

      <ComponentWrapper>
        <div v-if="primaryInputPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <div class='flex flex-col gap-[10px]'>
            <label
                v-for="(item) in [1, 2, 3]"
                :key="item"
                class='flex items-center gap-[10px] cursor-pointer'
            >
              <input
                  type='checkbox'
                  name='checkboxGroup'
                  :value="item"
                  :checked="selected.includes(item)"
                  @change="handleChange(item)"
                  class='hidden'
              />
              <span class='relative'>
                        <span
                            :class="`${
                            selected.includes(item)
                            ? 'opacity-100 z-20 scale-[1]'
                : 'opacity-0 scale-[0.4] z-[-1]'
                } transition-all duration-200 absolute top-0 left-0`"
                        >
                <svg
                    width='21'
                    height='21'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='Group 335'>
                    <rect
                        id='Rectangle 331'
                        x='-0.00012207'
                        y='6.10352e-05'
                        width='20'
                        height='20'
                        rx='4'
                        class='fill-brandColor'
                        stroke='#3B9DF8'
                    ></rect>
                    <path
                        id='Vector'
                        d='M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z'
                        fill='white'
                    ></path>
                  </g>
                </svg>
                </span>

                <span
                    :class="`${
                    !selected.includes(item)
                    ? 'opacity-100 z-20 scale-[1]'
                : 'opacity-0 scale-[0.4] z-[-1]'
                } transition-all duration-200`"
                >
                <svg
                    width='21'
                    height='21'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='Group 335'>
                    <rect
                        id='Rectangle 331'
                        x='-0.00012207'
                        y='6.10352e-05'
                        width='20'
                        height='20'
                        rx='4'
                        class='fill-transparent'
                        stroke='#ccc'
                    ></rect>
                  </g>
                </svg>
                </span>
              </span>
              <span class='text-[1.2rem] dark:text-[#abc2d3] text-text'>
                        ZenUI Library
                      </span>
            </label>
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

    <ContentNavbar :contents="checkboxInputContents" :activeSection="activeSection"/>

  </aside>
</template>
