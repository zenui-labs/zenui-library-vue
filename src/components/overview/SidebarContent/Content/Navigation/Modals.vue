<script setup>
import {ref} from 'vue';
import ContentHeader from '@/Shared/ContentHeader.vue';
import ComponentDescription from '@/Shared/Component/ComponentDescription.vue';
import ToggleTab from '@/Shared/Component/ToggleTab.vue';
import ComponentWrapper from '@/Shared/Component/ComponentWrapper.vue';
import ShowCode from '@/Shared/Component/ShowCode.vue';
import OverviewFooter from '@/Shared/OverviewFooter.vue';
import ContentNavbar from '@/Shared/Component/ContentNavbar.vue';
import WarningMessageCard from '@/Shared/Component/WarningMessageCard.vue';
import {modalContents} from '@/Utils/ContentsConfig/NavigationContents.js';
import {useScrollSpy} from '@/CustomHooks/useScrollSpy.js';
import {Icon} from '@iconify/vue';
import {
  AlertModalCodes,
  DeleteModalCodes,
  FormModalCodes,
  InfoModalCodes,
  PermissionModalCodes,
  SuccessModalCodes
} from "@/components/overview/SidebarContent/Content/Navigation/PreviewCodes/ModalPreviewCodes.js";

const sectionIds = modalContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const alertModalPreview = ref(true);
const alertModalCode = ref(false);

const successModalPreview = ref(true);
const successModalCode = ref(false);

const infoModalPreview = ref(true);
const infoModalCode = ref(false);

const permissionModalPreview = ref(true);
const permissionModalCode = ref(false);

const formModalPreview = ref(true);
const formModalCode = ref(false);

const deleteModalPreview = ref(true);
const deleteModalCode = ref(false);

const modal1Open = ref(false);
const modal2Open = ref(false);
const modal3Open = ref(false);
const modal4Open = ref(false);
const modal5Open = ref(false);
const modal10Open = ref(false);

const disabledButton = ref(true);

const checkDeleteModalChange = (event) => {
  disabledButton.value = true;
  if (event.target.value === 'DELETE') {
    disabledButton.value = false;
  }
};
</script>

<template>
  <aside class="flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div>
      <WarningMessageCard
          text="Note, when you use the modal you will first connect it to the button in your project. And it's handled by the state here in 'useState', so you'll get a good look at it. And here only the structure of the modal is given with animation you can design it as per your requirement."
      />

      <ContentHeader id="alert_modal" text="alert modal"/>

      <ComponentDescription
          text="This is an animated alert modal component. Notify with style using engaging animations for impact."
      />

      <ToggleTab
          :code="alertModalCode"
          @update:code="(val) => (alertModalCode = val)"
          @update:preview="(val) => (alertModalPreview = val)"
          :preview="alertModalPreview"
      />

      <ComponentWrapper>
        <div v-if="alertModalPreview" class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex items-center justify-center">
            <button
                class="px-4 py-2 bg-[#36af7b] text-secondary rounded-lg"
                @click="modal1Open = true"
            >
              Open Modal
            </button>
          </div>
          <div
              :class="`${
              modal1Open
                ? ' scale-[1] opacity-100'
                : ' scale-[0] opacity-0'
            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`"
          >
            <div
                class="w-[90%] 1024px:w-[30%] dark:bg-slate-800 relative bg-secondary rounded-lg p-6"
            >
              <div class="w-full flex justify-between">
                <div>
                  <h2 class="text-[1.7rem] dark:text-[#abc2d3] font-[500] text-[#202020]">
                    Are you sure about it?
                  </h2>
                  <p class="text-[1rem] dark:text-[#abc2d3]/80 text-[#525252]">
                    you can't undo this action
                  </p>
                </div>

                <Icon
                    icon="radix-icons:cross-2"
                    class="p-2 text-[2.5rem] absolute top-2 right-2 dark:text-[#abc2d3]/80 dark:hover:bg-slate-900/70 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                    @click="modal1Open = false"
                />
              </div>

              <div class="flex items-center gap-2 1024px:gap-3 w-full justify-end mt-6">
                <button
                    class="px-4 py-2 dark:hover:bg-slate-900/50 hover:bg-gray-100 border dark:border-slate-700 dark:text-[#abc2d3] border-gray-200 rounded-lg text-[#585858]"
                    @click="modal1Open = false"
                >
                  Cancel
                </button>
                <button
                    class="px-4 py-2 bg-[#36af7b] rounded-lg text-secondary"
                    @click="modal1Open = false"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="AlertModalCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="success_modal" text="success modal"/>
      </div>

      <ComponentDescription
          text="This is a success modal with animation component. Celebrate achievements with stylish animated feedback."
      />

      <ToggleTab
          :code="successModalCode"
          @update:code="(val) => (successModalCode = val)"
          :preview="successModalPreview"
          @update:preview="(val) => (successModalPreview = val)"
      />

      <ComponentWrapper>
        <div v-if="successModalPreview" class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex items-center justify-center">
            <button
                class="px-4 py-2 bg-[#36af7b] text-secondary rounded-lg"
                @click="modal2Open = true"
            >
              Open Modal
            </button>
          </div>
          <div
              :class="`${
              modal2Open ? ' visible' : ' invisible'
            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`"
          >
            <div
                :class="`${
                modal2Open
                  ? ' scale-[1] opacity-100'
                  : ' scale-[0] opacity-0'
              } w-[90%] 640px:w-[80%] 1024px:w-[30%] dark:bg-slate-800 bg-secondary rounded-lg p-4 transition-all duration-300`"
            >
              <div class="w-full flex items-end justify-end">
                <Icon
                    icon="radix-icons:cross-2"
                    class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                    @click="modal2Open = false"
                />
              </div>

              <div class="w-full flex items-center justify-center flex-col">
                <h2 class="text-[#2cac9f] text-[2rem] font-[500]">
                  Success!
                </h2>
                <Icon
                    icon="ion:checkmark-done-circle-outline"
                    class="p-2 text-[6rem] text-[#2cac9f]"
                />

                <p class="text-[1.5rem] text-gray-900 dark:text-[#abc2d3] text-center mt-4 mb-2">
                  Thank you for <br/>
                  <span class="font-[600]">Subscribing</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="SuccessModalCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="Info_modal" text="Info modal"/>
      </div>

      <ComponentDescription
          text="This is an info modal with animation component. Present information dynamically with engaging animations for clarity."
      />

      <ToggleTab
          :code="infoModalCode"
          @update:preview="(val) => (infoModalPreview = val)"
          :preview="infoModalPreview"
          @update:code="(val) => (infoModalCode = val)"
      />

      <ComponentWrapper>
        <div v-if="infoModalPreview" class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex items-center justify-center">
            <button
                class="px-4 py-2 bg-[#36af7b] text-secondary rounded-lg"
                @click="modal3Open = true"
            >
              Open Modal
            </button>
          </div>
          <div
              :class="`${
              modal3Open ? ' visible' : ' invisible'
            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-all duration-300`"
          >
            <div
                :class="`${
                modal3Open
                  ? ' translate-y-[0px] opacity-100'
                  : ' translate-y-[-200px] opacity-0'
              } w-[80%] 640px:w-[90%] 1024px:w-[40%] bg-secondary dark:bg-slate-800 rounded-lg transition-all duration-300 mx-auto mt-8`"
            >
              <div
                  class="w-full flex items-end p-4 justify-between dark:border-slate-700 border-b border-gray-200"
              >
                <h1 class="text-[1.5rem] dark:text-[#abc2d3] font-bold">Modal Header</h1>
                <Icon
                    icon="radix-icons:cross-2"
                    class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                    @click="modal3Open = false"
                />
              </div>

              <div class="p-4 border-b dark:border-slate-700 border-gray-200">
                <p class="text-[1rem] dark:text-[#abc2d3] text-text">
                  Woohoo, you are reading this text in a modal!
                </p>
              </div>

              <div class="flex items-end justify-end gap-4 p-4">
                <button
                    class="py-2 px-4 dark:hover:bg-slate-900/50 hover:bg-gray-100 border dark:text-[#abc2d3] dark:border-slate-700 border-gray-200 rounded-lg outline-none text-[#353535]"
                    @click="modal3Open = false"
                >
                  Cancel
                </button>
                <button
                    class="py-2 px-4 border dark:border-slate-800 border-gray-200 rounded-lg outline-none bg-[#36af7b] text-[#fff]"
                    @click="modal3Open = false"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="InfoModalCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="Permission_modal" text="Permission modal"/>
      </div>

      <ComponentDescription
          text="This is a permission modal with animation component. Manage permissions dynamically with engaging animations for clarity."
      />

      <ToggleTab
          :code="permissionModalCode"
          @update:code="(val) => (permissionModalCode = val)"
          :preview="permissionModalPreview"
          @update:preview="(val) => (permissionModalPreview = val)"
      />

      <ComponentWrapper>
        <div v-if="permissionModalPreview" class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex items-center justify-center">
            <button
                class="px-4 py-2 bg-[#36af7b] text-secondary rounded-lg"
                @click="modal4Open = true"
            >
              Open Modal
            </button>
          </div>
          <div
              :class="`${
              modal4Open ? ' visible' : ' invisible'
            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`"
          >
            <div
                :class="`${
                modal4Open
                  ? ' scale-[1] opacity-100'
                  : ' scale-[0] opacity-0'
              } w-[90%] 640px:w-[80%] 1024px:w-[45%] dark:bg-slate-800 bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`"
            >
              <div
                  class="w-full flex items-end p-4 justify-between dark:border-slate-700 border-b border-gray-200"
              >
                <h1 class="text-[1.5rem] font-bold dark:text-[#abc2d3]">
                  Terms of Service
                </h1>
                <Icon
                    icon="radix-icons:cross-2"
                    class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                    @click="modal4Open = false"
                />
              </div>

              <div class="p-4 border-b dark:border-slate-700 border-gray-200">
                <p class="text-[1.2rem] dark:text-[#abc2d3] text-text">
                  With less than a month to go before the European Union
                  enacts new consumer privacy laws for its citizens,
                  companies around the world are updating their terms of
                  service agreements to comply.
                </p>

                <p class="text-[1.2rem] dark:text-[#abc2d3] text-text mt-8">
                  The European Union's General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to
                  ensure a common set of data rights in the European
                  Union. It requires organizations to notify users as soon
                  as possible of high-risk data breaches that could
                  personally affect them.
                </p>
              </div>

              <div class="flex items-center gap-4 p-4">
                <button
                    class="py-2 px-4 rounded-lg outline-none bg-[#36af7b] hover:bg-[#36af7b]/90 text-[#fff]"
                    @click="modal4Open = false"
                >
                  I Accept
                </button>
                <button
                    class="py-2 px-4 dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900/50 hover:bg-gray-100 border border-gray-200 rounded-lg outline-none text-[#353535]"
                    @click="modal4Open = false"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="PermissionModalCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="Form_modal" text="Form modal"/>
      </div>

      <ComponentDescription
          text="This is a form modal with animated input fields component. Complete forms dynamically with engaging animations for user interaction."
      />

      <ToggleTab
          :code="formModalCode"
          @update:preview="(val) => (formModalPreview = val)"
          :preview="formModalPreview"
          @update:code="(val) => (formModalCode = val)"
      />

      <ComponentWrapper>
        <div v-if="formModalPreview" class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex items-center justify-center">
            <button
                class="px-4 py-2 bg-[#36af7b] text-secondary rounded-lg"
                @click="modal5Open = true"
            >
              Open Modal
            </button>
          </div>
          <div
              :class="`${
              modal5Open ? ' visible' : ' invisible'
            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`"
          >
            <div
                :class="`${
                modal5Open
                  ? ' scale-[1] opacity-100'
                  : ' scale-[0] opacity-0'
              } w-[90%] 640px:w-[80%] 1024px:w-[35%] dark:bg-slate-800 bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`"
            >
              <div
                  class="w-full flex items-end p-4 justify-between border-b dark:border-slate-700 border-gray-200"
              >
                <h1 class="text-[1.5rem] dark:text-[#abc2d3] font-bold">
                  Sign in to our platform
                </h1>
                <Icon
                    icon="radix-icons:cross-2"
                    class="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                    @click="modal5Open = false"
                />
              </div>

              <form class="flex flex-col gap-5 p-4">
                <div>
                  <label
                      for="email"
                      class="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#464646]"
                  >
                    Email
                  </label>
                  <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="zenuilibrary@gmail.com"
                      class="py-2 px-3 border dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-gray-200 rounded-lg w-full focus:outline-none mt-1 focus:border-[#36af7b]"
                  />
                </div>

                <div>
                  <label
                      for="password"
                      class="text-[1rem] font-[500] dark:text-[#abc2d3] text-[#464646]"
                  >
                    Password
                  </label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="**********"
                      class="py-2 px-3 border border-gray-200 dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] rounded-lg w-full focus:outline-none mt-1 focus:border-[#36af7b]"
                  />
                </div>

                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        class="w-[17px] h-[17px]"
                    />
                    <label for="checkbox" class="dark:text-[#abc2d3]">Remember me</label>
                  </div>

                  <a href="#" class="text-[#36af7b] hover:underline font-[400] text-[1rem]">
                    Forget Password
                  </a>
                </div>

                <button
                    type="submit"
                    class="py-2 px-4 w-full bg-[#36af7b] text-[#fff] rounded-lg"
                >
                  Sign In
                </button>
              </form>

              <div class="flex items-center justify-center w-full pb-4">
                <p class="text-[1rem] font-[400] dark:text-[#abc2d3] text-[#464646c]">
                  Not have any account?
                  <a href="#" class="text-[#36af7b] underline">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="FormModalCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="delete_modal" text="delete modal"/>
      </div>

      <ComponentDescription
          text='A delete confirmation modal that requires users to type the word "delete" to validate and confirm the action, ensuring intentional deletion.'
      />

      <ToggleTab
          :code="deleteModalCode"
          @update:preview="(val) => (deleteModalPreview = val)"
          @update:code="(val) => (deleteModalCode = val)"
          :preview="deleteModalPreview"
      />

      <ComponentWrapper>
        <div v-if="deleteModalPreview" class="p-8 pt-12 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex items-center justify-center">
            <button
                class="px-4 py-2 bg-[#36af7b] text-secondary rounded-lg"
                @click="modal10Open = true"
            >
              Open Modal
            </button>
          </div>
          <div
              :class="`${
              modal10Open ? ' visible' : ' invisible'
            } w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] flex items-center justify-center transition-all duration-300`"
          >
            <div
                :class="`${
                modal10Open
                  ? ' scale-[1] opacity-100'
                  : ' scale-[0] opacity-0'
              } w-[90%] 640px:w-[80%] 1024px:w-[30%] dark:bg-slate-800 bg-secondary rounded-lg p-5 transition-all duration-300 z-[999]`"
            >
              <div class="w-full flex items-center justify-between">
                <h2 class="text-[#000] dark:text-[#abc2d3] text-[1.3rem] font-[500]">
                  Delete Modal
                </h2>
                <Icon
                    icon="radix-icons:cross-2"
                    class="p-2 text-[2rem] dark:text-slate-400 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-lg transition-all duration-300 cursor-pointer"
                    @click="modal10Open = false"
                />
              </div>

              <div class="w-full">
                <p class="text-text dark:text-slate-400 text-[1rem] font-[400]">
                  Are You sure want to delete it?
                </p>

                <div class="mt-5">
                  <label class="font-[400] dark:text-[#abc2d3] text-black">
                    Type <b>"DELETE"</b> to confirm
                  </label>
                  <br/>
                  <input
                      @input="checkDeleteModalChange"
                      type="text"
                      class="py-3 px-4 rounded-lg dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] border border-gray-200 rounded-lg-md mt-1 w-full outline-none focus:border-[#36af7b]"
                  />
                </div>

                <div class="mt-8 flex w-full items-end justify-end gap-[13px]">
                  <button
                      @click="modal10Open = false"
                      class="py-2 px-6 dark:border-slate-700 dark:text-[#abc2d3] hover:bg-gray-50 dark:hover:bg-slate-700/50 rounded-lg font-[500] z-10 border border-[#cecece] text-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                      @click="modal10Open = false"
                      :class="`py-2 px-6 border rounded-lg font-[500] ${
                      disabledButton
                        ? '!bg-[#FDECEB] dark:!bg-red-800/30 dark:!border-red-900/30 dark:text-slate-500 !border-[#FDECEB] text-red-200 cursor-not-allowed'
                        : 'bg-red-600 text-white border-red-600'
                    }`"
                      :disabled="disabledButton"
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="DeleteModalCodes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/stepper"
          backName="stepper"
          forwardName="tabs"
          forwardUrl="/components/tabs"
      />
    </div>

    <ContentNavbar classs="w-[70%]" :contents="modalContents" :activeSection="activeSection" width="70%"/>
  </aside>
</template>