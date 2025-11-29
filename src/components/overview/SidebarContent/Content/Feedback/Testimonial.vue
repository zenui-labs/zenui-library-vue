<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {testimonialContents} from "@/Utils/ContentsConfig/FeedbackContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {
  Testimonial1Codes,
  Testimonial2Codes,
  Testimonial3Codes,
  Testimonial4Codes,
  Testimonial5Codes,
  Testimonial6Codes,
  Testimonial7Codes
} from "@/components/overview/SidebarContent/Content/Feedback/PreviewCodes/TestimonialsPreviewCodes.js";

const sectionIds = testimonialContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const testimonial1Preview = ref(true);
const testimonial1Code = ref(false);

const testimonial2Preview = ref(true);
const testimonial2Code = ref(false);

const testimonial3Preview = ref(true);
const testimonial3Code = ref(false);

const testimonial4Preview = ref(true);
const testimonial4Code = ref(false);

const testimonial5Preview = ref(true);
const testimonial5Code = ref(false);

const testimonial6Preview = ref(true);
const testimonial6Code = ref(false);

const testimonial7Preview = ref(true);
const testimonial7Code = ref(false);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full 1024px:w-[80%]">
      <ContentHeader text="testimonial 1" id="testimonial_1"/>

      <ComponentDescription
          text="This is a testimonial component. Showcase user feedback and reviews with a stylish, engaging layout."
      />

      <ToggleTab
          :code="testimonial1Code"
          @update:code="(val) => (testimonial1Code = val)"
          @update:preview="(val) => (testimonial1Preview = val)"
          :preview="testimonial1Preview"
      />

      <ComponentWrapper>
        <div
            v-if="testimonial1Preview"
            class="p-8 pt-20 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-full 1024px:w-[70%] mt-8 1024px:mt-0 p-4 dark:bg-slate-800 bg-secondary shadow-2xl rounded-lg relative"
          >
            <Icon
                icon="fa:quote-left"
                class="absolute -top-2 left-[5%] dark:text-slate-400 text-[1.3rem] text-[#727272]"
            />
            <img
                src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                alt="demo/image"
                class="w-[100px] h-[100px] object-cover rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-primary"
            />
            <p class="text-text text-[0.9rem] dark:text-[#abc2d3] mt-16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vitae non, explicabo cum dolorem temporibus alias odio quod
              officiis nam. Debitis odio libero dolorum harum magnam
              inventore ut molestias rerum sapiente!
            </p>

            <div class="flex items-start mt-5 justify-between">
              <div>
                <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">
                  Jhone Dehon
                </h2>
                <p class="text-[1rem] dark:text-slate-400 text-[#727272]">
                  CEO of Miracle
                </p>
              </div>
              <div class="flex items-center gap-1">
                <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
                <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
                <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
                <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
                <Icon icon="fa:star-o" class="text-[#ffba24] text-[1.3rem]"/>
              </div>
            </div>
            <Icon
                icon="fa:quote-left"
                class="absolute -bottom-2 dark:text-slate-400 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]"
            />
          </div>
        </div>

        <ShowCode v-else :code="Testimonial1Codes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="testimonial 2" id="testimonial_2"/>
      </div>

      <ComponentDescription
          text="This is a testimonial component. Showcase user feedback and reviews with a stylish, engaging layout."
      />

      <ToggleTab
          :code="testimonial2Code"
          @update:code="(val) => (testimonial2Code = val)"
          :preview="testimonial2Preview"
          @update:preview="(val) => (testimonial2Preview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="testimonial2Preview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-full p-4 bg-secondary dark:bg-slate-800 shadow-2xl rounded-lg relative flex flex-col 1024px:flex-row items-start justify-between gap-6"
          >
            <div class="relative w-full 1024px:w-[50%]">
              <img
                  src="https://img.freepik.com/free-photo/front-view-smiley-man-holding-laptop_23-2148946208.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=ais"
                  alt="demo/image"
                  class="w-full h-full object-cover"
              />
              <Icon
                  icon="fa:quote-right"
                  class="absolute -top-5 right-[-5%] text-[3rem] text-[#ffffff] bg-primary p-3 rounded-full"
              />
            </div>
            <div class="w-full 1024px:w-[45%]">
              <h3 class="text-[1.5rem] dark:text-[#abc2d3] font-[500] capitalize">
                help us improve our productivity
              </h3>
              <p class="text-text text-[0.8rem] dark:text-slate-400 mt-2 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vitae non, explicabo cum dolorem temporibus alias odio
                quod officiis nam. Lorem ipsum dolor sit amet.
              </p>

              <div class="mt-4">
                <h2 class="text-[1rem] dark:text-[#abc2d3] font-[500]">Jhone Dehon</h2>
                <p class="text-[0.9rem] dark:text-slate-400 text-[#727272]">
                  CEO of Miracle
                </p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="Testimonial2Codes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="testimonial 3" id="testimonial_3"/>
      </div>

      <ComponentDescription
          text="This is a testimonial component. Showcase user feedback and reviews with a stylish, engaging layout."
      />

      <ToggleTab
          :code="testimonial3Code"
          @update:code="(val) => (testimonial3Code = val)"
          @update:preview="(val) => (testimonial3Preview = val)"
          :preview="testimonial3Preview"
      />

      <ComponentWrapper>
        <div
            v-if="testimonial3Preview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-full 1024px:w-[55%] dark:bg-slate-800 bg-secondary shadow-2xl rounded-lg p-6"
          >
            <h3 class="text-[1.5rem] dark:text-[#abc2d3] font-[500] capitalize">
              help us improve our productivity
            </h3>
            <p class="dark:text-slate-400 text-justify text-[0.9rem] my-3 text-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque nesciunt saepe quam doloremque nulla cumque vero
              sequi, repellendus vel reiciendis? Eos totam quidem ducimus
              amet, in fuga quia minus ab!
            </p>

            <div class="flex items-center gap-4 mt-4">
              <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  class="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div>
                <h2 class="text-[1rem] dark:text-[#abc2d3] font-[500]">Jhone Dehon</h2>
                <p class="text-[0.9rem] dark:text-slate-400 text-text">CEO of Miracle</p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="Testimonial3Codes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="testimonial 4" id="testimonial_4"/>
      </div>

      <ComponentDescription
          text="This is a testimonial component. Showcase user feedback and reviews with a stylish, engaging layout."
      />

      <ToggleTab
          :code="testimonial4Code"
          @update:code="(val) => (testimonial4Code = val)"
          :preview="testimonial4Preview"
          @update:preview="(val) => (testimonial4Preview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="testimonial4Preview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-full z-0 1024px:w-[70%] dark:bg-slate-800 bg-secondary shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col"
          >
            <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                alt="demo/image"
                class="w-[150px] h-[150px] object-cover rounded-full"
            />
            <h3 class="text-[1.5rem] dark:text-[#abc2d3] font-[500] capitalize mt-4">
              Jhone Dehon
            </h3>
            <p class="text-text text-[0.9rem] dark:text-slate-400">London</p>

            <div class="flex items-center gap-1 my-4">
              <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
              <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
              <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
              <Icon icon="fa:star" class="text-[1.3rem] text-[#ffba24]"/>
              <Icon icon="fa:star-o" class="text-[#ffba24] text-[1.3rem]"/>
            </div>

            <div class="relative">
              <p class="dark:text-[#abc2d3] text-justify text-[0.9rem] my-3 text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque nesciunt saepe quam doloremque nulla cumque vero
                sequi, repellendus vel reiciendis? Eos totam quidem
                ducimus amet, in fuga quia minus ab!
              </p>
              <Icon
                  icon="fa:quote-right"
                  class="text-[3rem] z-[-1] dark:text-slate-700 text-[#d1d1d169] absolute top-[-20%] left-0"
              />
              <Icon
                  icon="fa:quote-left"
                  class="text-[3rem] z-[-1] dark:text-slate-700 text-[#d1d1d169] absolute bottom-[0%] right-0"
              />
            </div>
          </div>
        </div>

        <ShowCode v-else :code="Testimonial4Codes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="testimonial 5" id="testimonial_5"/>
      </div>

      <ComponentDescription
          text="This is a testimonial component. Showcase user feedback and reviews with a stylish, engaging layout."
      />

      <ToggleTab
          :code="testimonial5Code"
          @update:code="(val) => (testimonial5Code = val)"
          @update:preview="(val) => (testimonial5Preview = val)"
          :preview="testimonial5Preview"
      />

      <ComponentWrapper>
        <div
            v-if="testimonial5Preview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-full 1024px:w-[75%] bg-primary text-secondary shadow-2xl rounded-lg p-6 relative"
          >
            <Icon
                icon="fa:quote-right"
                class="text-[4rem] text-[#e9e9e959] absolute top-[10%] right-[10%]"
            />
            <div class="flex items-center gap-4 mt-4">
              <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  class="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div>
                <h2 class="text-[1rem] font-[500]">Jhone Dehon</h2>
                <p class="text-[0.9rem] text-[#e9e9e9]">CEO of Miracle</p>
              </div>
            </div>

            <h2 class="text-[1.5rem] capitalize font-[500] mt-5 leading-[30px]">
              such a life changing experience, higly recomanded!
            </h2>

            <p class="text-justify text-[0.9rem] my-3 text-[#e9e9e9]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque nesciunt saepe quam doloremque nulla cumque vero
              sequi, repellendus vel reiciendis? Eos totam quidem ducimus
              amet, in fuga quia minus ab!
            </p>
          </div>
        </div>

        <ShowCode v-else :code="Testimonial5Codes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="testimonial 6" id="testimonial_6"/>
      </div>

      <ComponentDescription
          text="This is a testimonial component. Showcase user feedback and reviews with a stylish, engaging layout."
      />

      <ToggleTab
          :code="testimonial6Code"
          @update:code="(val) => (testimonial6Code = val)"
          :preview="testimonial6Preview"
          @update:preview="(val) => (testimonial6Preview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="testimonial6Preview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-full 1024px:w-[70%] dark:bg-slate-800 bg-secondary shadow-2xl rounded-lg"
          >
            <div class="relative">
              <img
                  src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  class="w-full h-[200px] object-cover rounded-t-md border-b-[10px] border-[#e6e6e6]"
              />
              <Icon
                  icon="fa:quote-right"
                  class="absolute -bottom-5 left-[5%] text-[3rem] text-[#ffffff] bg-primary p-3 rounded-full"
              />
            </div>
            <div class="p-6">
              <p class="dark:text-[#abc2d3] text-justify text-[0.9rem] my-3 text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque nesciunt saepe quam doloremque nulla cumque vero
                sequi, repellendus vel reiciendis? Eos totam quidem
                ducimus amet, in fuga quia minus ab!
              </p>

              <div class="mt-4">
                <h2 class="text-[1rem] dark:text-[#abc2d3] font-[500]">Jhone Dehon</h2>
                <p class="text-[0.9rem] text-text dark:text-slate-400">CEO of Miracle</p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="Testimonial6Codes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="testimonial 7" id="testimonial_7"/>
      </div>

      <ComponentDescription
          text="This is a testimonial component. Showcase user feedback and reviews with a stylish, engaging layout."
      />

      <ToggleTab
          :code="testimonial7Code"
          @update:preview="(val) => (testimonial7Preview = val)"
          :preview="testimonial7Preview"
          @update:code="(val) => (testimonial7Code = val)"
      />

      <ComponentWrapper>
        <div
            v-if="testimonial7Preview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div
              class="w-full border border-primary shadow-2xl rounded-lg flex flex-col 1024px:flex-row items-center justify-between gap-6 px-6 py-16"
          >
            <img
                src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                alt="demo/image"
                class="w-[180px] h-[180px] object-cover rounded-full"
            />

            <div class="w-full 1024px:w-[65%] relative">
              <div
                  class="flex flex-col 1024px:flex-row flex-wrap gap-y-2 items-center justify-between relative"
              >
                <Icon
                    icon="fa:quote-right"
                    class="absolute top-[-550%] 1024px:top-[-150%] left-[0%] text-[2rem] text-primary"
                />
                <div class="flex items-center gap-2">
                  <h2 class="text-[1rem] dark:text-[#abc2d3] font-[500]">
                    Jhone Dehon -
                  </h2>
                  <p class="text-[0.9rem] dark:text-[#abc2d3] text-[#9c9c9c]">
                    CEO of Miracle
                  </p>
                </div>
                <div class="flex items-center gap-1">
                  <Icon icon="fa:star" class="text-[1.1rem] text-[#ffba24]"/>
                  <Icon icon="fa:star" class="text-[1.1rem] text-[#ffba24]"/>
                  <Icon icon="fa:star" class="text-[1.1rem] text-[#ffba24]"/>
                  <Icon icon="fa:star" class="text-[1.1rem] text-[#ffba24]"/>
                  <Icon icon="fa:star-o" class="text-[#ffba24] text-[1.1rem]"/>
                </div>
              </div>
              <h2 class="text-[1.5rem] dark:text-[#abc2d3] font-[500] capitalize mt-3">
                amazing customer service
              </h2>
              <p class="text-justify dark:text-[#abc2d3] text-[0.9rem] my-3 text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque nesciunt saepe quam doloremque nulla cumque vero
                sequi, repellendus vel reiciendis? Eos totam quidem
                ducimus amet, in fuga quia minus ab!
              </p>
              <Icon
                  icon="fa:quote-left"
                  class="absolute bottom-[-10%] right-[0%] text-[2rem] text-primary"
              />
            </div>
          </div>
        </div>

        <ShowCode v-else :code="Testimonial7Codes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/alert-message"
          backName="alert message"
          forwardName="loader"
          forwardUrl="/components/loader"
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="testimonialContents"/>
  </aside>
</template>