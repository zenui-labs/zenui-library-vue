<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentHeader from "@/Shared/ContentHeader.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {badgeContents} from "@/Utils/ContentsConfig/DataDisplayContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {
  CartBadgePreviewCode,
  MessageBadgePreviewCode,
  onlineBadgePreviewCode,
  VerifiedBadgePreviewCode,
} from "./PreviewCodes/BadgePreviewCodes";

const sectionIds = badgeContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const messageBadgePreview = ref(true);
const messageBadgeCode = ref(false);

const cartBadgePreview = ref(true);
const cartBadgeCode = ref(false);

const onlineBadgePreview = ref(true);
const onlineBadgeCode = ref(false);

const verifiedBadgePreview = ref(true);
const verifiedBadgeCode = ref(false);
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div>
      <ContentHeader text="message badge" id="message_badge"/>

      <ComponentDescription
          text="This is a message badge component. Display notifications or messages with a sleek and visible badge."
      />

      <ToggleTab
          :code="messageBadgeCode"
          @update:code="(val) => (messageBadgeCode = val)"
          @update:preview="(val) => (messageBadgePreview = val)"
          :preview="messageBadgePreview"
      />

      <ComponentWrapper>
        <div
            v-if="messageBadgePreview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="relative">
            <Icon
                icon="material-symbols:mail-outline"
                class="text-[2.7rem] dark:text-[#abc2d3]"
            />
            <div
                class="absolute top-[-10%] right-[-15%] text-secondary min-w-[20px] min-h-[20px] text-center"
            >
              <span
                  class="text-[0.8rem] bg-[#36af7b] py-1 px-[6px] rounded-full w-full h-full border-[2px] border-secondary dark:border-darkBgColor"
              >
                10
              </span>
            </div>
          </div>

          <div
              class="relative before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:top-[-2%] before:right-[-5%] before:border-[2px] dark:before:border-darkBgColor before:border-secondary before:bg-[#36af7b]"
          >
            <Icon
                icon="material-symbols:mail-outline"
                class="text-[2.7rem] dark:text-[#abc2d3]"
            />
          </div>
        </div>

        <ShowCode v-else :code="MessageBadgePreviewCode"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="cart badge" id="cart_badge"/>
      </div>

      <ComponentDescription
          text="This is a cart badge component. Show cart items or notifications with a stylish and visible badge."
      />

      <ToggleTab
          :code="cartBadgeCode"
          @update:code="(val) => (cartBadgeCode = val)"
          :preview="cartBadgePreview"
          @update:preview="(val) => (cartBadgePreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="cartBadgePreview"
            class="p-8 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <div class="relative">
            <Icon
                icon="ion:cart-outline"
                class="text-[2.7rem] dark:text-[#abc2d3]"
            />
            <div
                class="absolute top-[-10%] right-[-15%] text-secondary min-w-[20px] min-h-[20px] text-center"
            >
              <span
                  class="text-[0.8rem] bg-[#36af7b] py-1 px-[6px] dark:border-darkBgColor rounded-full w-full h-full border-[2px] border-secondary"
              >
                10
              </span>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="CartBadgePreviewCode"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="online badge" id="online_badge"/>
      </div>

      <ComponentDescription
          text="An indicator, typically a small colored dot or icon, showing that a user is currently online and available."
      />

      <ToggleTab
          :code="onlineBadgeCode"
          @update:preview="(val) => (onlineBadgePreview = val)"
          :preview="onlineBadgePreview"
          @update:code="(val) => (onlineBadgeCode = val)"
      />

      <ComponentWrapper>
        <div
            v-if="onlineBadgePreview"
            class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996"
                alt="avatar"
                class="w-[80px] h-[80px] rounded-full object-cover"
            />

            <div
                class="p-[2px] bg-white dark:bg-[#020617] absolute top-[60px] right-2 rounded-full"
            >
              <div class="w-[16px] h-[16px] rounded-full bg-[#36af7b]"></div>
            </div>
          </div>

          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996"
                alt="avatar"
                class="w-[70px] h-[70px] rounded-full object-cover"
            />

            <div
                class="p-[2px] bg-white absolute dark:bg-[#020617] top-[53px] right-2 rounded-full"
            >
              <div class="w-[14px] h-[14px] rounded-full bg-[#36af7b]"></div>
            </div>
          </div>

          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996"
                alt="avatar"
                class="w-[60px] h-[60px] rounded-full object-cover"
            />

            <div
                class="p-[2px] bg-white absolute dark:bg-[#020617] top-[47px] right-2 rounded-full"
            >
              <div class="w-[12px] h-[12px] rounded-full bg-[#36af7b]"></div>
            </div>
          </div>

          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996"
                alt="avatar"
                class="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div
                class="p-[2px] bg-white absolute dark:bg-[#020617] top-[38px] right-[4px] rounded-full"
            >
              <div class="w-[10px] h-[10px] rounded-full bg-[#36af7b]"></div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="onlineBadgePreviewCode"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="verified badge" id="verified_badge"/>
      </div>

      <ComponentDescription
          text="A badge or icon indicating that a user, account, or content has been verified for authenticity or credibility."
      />

      <ToggleTab
          :code="verifiedBadgeCode"
          @update:code="(val) => (verifiedBadgeCode = val)"
          :preview="verifiedBadgePreview"
          @update:preview="(val) => (verifiedBadgePreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="verifiedBadgePreview"
            class="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center"
        >
          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996"
                alt="avatar"
                class="w-[80px] h-[80px] rounded-full object-cover"
            />

            <Icon
                icon="material-symbols:verified"
                class="text-blue-500 p-[2px] text-[1.5rem] dark:bg-[#020617] bg-white rounded-full absolute top-[57px] right-[5px]"
            />
          </div>

          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996"
                alt="avatar"
                class="w-[70px] h-[70px] rounded-full object-cover"
            />

            <Icon
                icon="material-symbols:verified"
                class="text-blue-500 p-[2px] text-[1.4rem] dark:bg-[#020617] bg-white rounded-full absolute top-[50px] right-[4px]"
            />
          </div>

          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996"
                alt="avatar"
                class="w-[60px] h-[60px] rounded-full object-cover"
            />

            <Icon
                icon="material-symbols:verified"
                class="text-blue-500 p-[2px] text-[1.3rem] dark:bg-[#020617] bg-white rounded-full absolute top-[43px] right-[4px]"
            />
          </div>

          <div class="relative">
            <img
                src="https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996"
                alt="avatar"
                class="w-[50px] h-[50px] rounded-full object-cover"
            />

            <Icon
                icon="material-symbols:verified"
                class="text-blue-500 p-[2px] text-[1.2rem] dark:bg-[#020617] bg-white rounded-full absolute top-[35px] right-[4px]"
            />
          </div>
        </div>

        <ShowCode v-else :code="VerifiedBadgePreviewCode"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/loader"
          backName="loader"
          forwardName="tooltip"
          forwardUrl="/components/tooltip"
      />
    </div>

    <ContentNavbar classs="w-[35%]" :contents="badgeContents" :activeSection="activeSection"/>
  </aside>
</template>
