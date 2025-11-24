<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {skeletonContents} from "@/Utils/ContentsConfig/FeedbackContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import {
  BlogSkeletonCodes,
  CardSkeletonCodes,
  ImageGallerySkeletonCodes,
  PostListSkeletonCodes,
  ProductDetailsPageSkeletonCodes,
  ShineSkeletonCodes,
  SocialPostSkeletonCodes
} from "@/components/overview/SidebarContent/Content/Feedback/PreviewCodes/SkeletonPreviewCodes.js";

const sectionIds = skeletonContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const cardSkeletonPreview = ref(true);
const cardSkeletonCode = ref(false);

const imageGellaryPreview = ref(true);
const imageGellaryCode = ref(false);

const socialPostPreview = ref(true);
const socialPostCode = ref(false);

const productDetailsPreview = ref(true);
const productDetailsCode = ref(false);

const postListSkeletonPreview = ref(true);
const postListSkeletonCode = ref(false);

const blogSkeletonPreview = ref(true);
const blogSkeletonCode = ref(false);

const shineSkeletonPreview = ref(true);
const shineSkeletonCode = ref(false);
</script>

<template>
  <aside class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <div class="w-full 425px:w-[80%]">
      <ContentHeader text="Card Skeleton" id="card_skeleton"/>

      <ComponentDescription
          text="This is a card skeleton component. Display placeholder content while the actual content is loading."
      />

      <ToggleTab
          :code="cardSkeletonCode"
          @update:preview="(val) => (cardSkeletonPreview = val)"
          @update:code="(val) => (cardSkeletonCode = val)"
          :preview="cardSkeletonPreview"
      />

      <ComponentWrapper>
        <div v-if="cardSkeletonPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div
              class="w-full 425px:w-[400px] border dark:border-slate-700 border-[#00000017] animate-pulse rounded-md">
            <div class="w-full bg-border dark:bg-slate-900 rounded-t-md h-[130px] relative">
              <div
                  class="w-[120px] h-[120px] rounded-full dark:bg-slate-800 bg-[#cecece] absolute bottom-[-40%] right-1/2 transform translate-x-1/2"></div>
            </div>

            <div class="flex flex-col gap-3 items-center justify-center w-full py-8 mt-12">
              <h1 class="w-[70%] h-[35px] dark:bg-slate-800 bg-border"></h1>
              <p class="w-[50%] h-[20px] dark:bg-slate-800 bg-border"></p>
            </div>

            <div
                class="border-t p-4 dark:border-slate-700 border-gray-200 w-full flex items-center justify-between">
              <div class="w-[30%] flex flex-col gap-2">
                <h1 class="h-[35px] dark:bg-slate-800 bg-border"></h1>
                <p class="h-[20px] dark:bg-slate-800 bg-border"></p>
              </div>

              <div class="w-[30%] flex flex-col gap-2">
                <h1 class="h-[35px] dark:bg-slate-800 bg-border"></h1>
                <p class="h-[20px] dark:bg-slate-800 bg-border"></p>
              </div>

              <div class="w-[30%] flex flex-col gap-2">
                <h1 class="h-[35px] dark:bg-slate-800 bg-border"></h1>
                <p class="h-[20px] dark:bg-slate-800 bg-border"></p>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="CardSkeletonCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="image gallery skeleton"
            id="image_gallery_skeleton"
        />
      </div>

      <ComponentDescription
          text="This is a grid image gallery skeleton component. Display placeholders for images while loading content."
      />

      <ToggleTab
          :code="imageGellaryCode"
          @update:code="(val) => (imageGellaryCode = val)"
          :preview="imageGellaryPreview"
          @update:preview="(val) => (imageGellaryPreview = val)"
      />

      <ComponentWrapper>
        <div v-if="imageGellaryPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div class="animate-pulse">
            <div class="flex gap-5">
              <div class="w-[200px] h-[300px] dark:bg-slate-800 bg-border"></div>

              <div class="flex flex-col gap-5">
                <div class="w-[200px] h-[140px] dark:bg-slate-800 bg-border"></div>

                <div class="w-[200px] h-[140px] dark:bg-slate-800 bg-border"></div>
              </div>
            </div>

            <div class="w-full h-[150px] mt-5 dark:bg-slate-800 bg-border"></div>
          </div>
        </div>

        <ShowCode v-else :code="ImageGallerySkeletonCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="social post skeleton"
            id="social_post_skeleton"
        />
      </div>

      <ComponentDescription
          text="This is a social card skeleton component. Show placeholders for social media content while it loads."
      />

      <ToggleTab
          :code="socialPostCode"
          @update:code="(val) => (socialPostCode = val)"
          @update:preview="(val) => (socialPostPreview = val)"
          :preview="socialPostPreview"
      />

      <ComponentWrapper>
        <div v-if="socialPostPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div
              class="w-full 425px:w-[450px] dark:bg-slate-900 dark:border-slate-700 bg-secondary p-6 border border-border rounded animate-pulse">
            <div class="flex items-center">
              <div class="w-[40%] 425px:w-[20%]">
                <div class="w-[60px] h-[60px] rounded-full dark:bg-slate-800 bg-border"></div>
              </div>

              <div class="flex flex-col gap-3 w-[80%]">
                <h1 class="w-[60%] h-[25px] dark:bg-slate-800 bg-border"></h1>
                <p class="w-[80%] h-[15px] dark:bg-slate-800 bg-border"></p>
              </div>
            </div>

            <div class="mt-10 flex flex-col gap-3">
              <p class="w-[90%] h-[15px] dark:bg-slate-800 bg-border"></p>
              <p class="w-[80%] h-[15px] dark:bg-slate-800 bg-border"></p>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="SocialPostSkeletonCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="product details skeleton"
            id="product_details_skeleton"
        />
      </div>

      <ComponentDescription
          text="This is the skeleton of the product details page. You can use this skeleton on the product details page of any of your e-commerce websites. Each section is marked with comments within the code."
      />

      <ToggleTab
          :code="productDetailsCode"
          @update:code="(val) => (productDetailsCode = val)"
          :preview="productDetailsPreview"
          @update:preview="(val) => (productDetailsPreview = val)"
      />

      <ComponentWrapper>
        <div v-if="productDetailsPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div class="flex gap-6 w-full animate-pulse">
            <div>
              <div class="flex-1 h-[300px] dark:bg-slate-800 bg-border"></div>
              <div class="flex gap-3 mt-3">
                <div class="w-[130px] h-[100px] dark:bg-slate-800 bg-border"></div>
                <div class="w-[130px] h-[100px] dark:bg-slate-800 bg-border"></div>
              </div>
            </div>

            <div class="flex flex-col gap-4 w-full">
              <h2 class="w-[100%] h-[35px] dark:bg-slate-800 bg-border"></h2>
              <p class="w-[100%] h-[200px] dark:bg-slate-800 bg-border"></p>
              <span class="w-[30%] h-[30px] dark:bg-slate-800 bg-border"></span>
              <div class="flex items-center justify-between w-full">
                <button class="w-[30%] h-[40px] dark:bg-slate-800 bg-border"></button>
                <i class="w-[40px] h-[40px] rounded-full dark:bg-slate-800 bg-border"></i>
              </div>

              <button class="w-[35%] h-[40px] dark:bg-slate-800 bg-border"></button>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="ProductDetailsPageSkeletonCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="post list skeleton"
            id="post_list_skeleton"
        />
      </div>

      <ComponentDescription
          text="A skeleton screen for a post list, displaying placeholder elements such as rectangles and lines, mimicking the structure of the content while it loads."
      />

      <ToggleTab
          :code="postListSkeletonCode"
          @update:preview="(val) => (postListSkeletonPreview = val)"
          :preview="postListSkeletonPreview"
          @update:code="(val) => (postListSkeletonCode = val)"
      />

      <ComponentWrapper>
        <div v-if="postListSkeletonPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex flex-col gap-[20px]">
            <div
                class="w-full mx-auto dark:bg-slate-900 dark:border-slate-700 bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse">
              <div class="flex items-center gap-[20px]">
                <div class="w-[40%] 425px:w-[20%]">
                  <div class="w-[80px] h-[80px] rounded-full dark:bg-slate-800 bg-border"></div>
                </div>

                <div class="flex flex-col gap-[10px] w-[80%]">
                  <h1 class="w-[80%] h-[25px] dark:bg-slate-800 bg-border rounded-md"></h1>

                  <div class="flex flex-col gap-2">
                    <p class="w-[90%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                    <p class="w-[80%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                    <p class="w-[50%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                  </div>
                </div>
              </div>
            </div>
            <div
                class="w-full mx-auto dark:bg-slate-900 dark:border-slate-700 bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse">
              <div class="flex items-center gap-[20px]">
                <div class="w-[40%] 425px:w-[20%]">
                  <div class="w-[80px] h-[80px] rounded-full dark:bg-slate-800 bg-border"></div>
                </div>

                <div class="flex flex-col gap-[10px] w-[80%]">
                  <h1 class="w-[80%] h-[25px] dark:bg-slate-800 bg-border rounded-md"></h1>

                  <div class="flex flex-col gap-2">
                    <p class="w-[90%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                    <p class="w-[80%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                    <p class="w-[50%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                  </div>
                </div>
              </div>
            </div>
            <div
                class="w-full mx-auto dark:bg-slate-900 dark:border-slate-700 bg-secondary p-3 rounded-md border border-border boxShadow animate-pulse">
              <div class="flex items-center gap-[20px]">
                <div class="w-[40%] 425px:w-[20%]">
                  <div class="w-[80px] h-[80px] rounded-full dark:bg-slate-800 bg-border"></div>
                </div>

                <div class="flex flex-col gap-[10px] w-[80%]">
                  <h1 class="w-[80%] h-[25px] dark:bg-slate-800 bg-border rounded-md"></h1>

                  <div class="flex flex-col gap-2">
                    <p class="w-[90%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                    <p class="w-[80%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                    <p class="w-[50%] h-[7px] dark:bg-slate-800 bg-border rounded-md"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="PostListSkeletonCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="blog post skeleton"
            id="blog_post_skeleton"
        />
      </div>

      <ComponentDescription
          text="A skeleton screen for a blog post, showing placeholders for the title, text blocks, and images, simulating the layout while the content is loading."
      />

      <ToggleTab
          :code="blogSkeletonCode"
          @update:code="(val) => (blogSkeletonCode = val)"
          @update:preview="(val) => (blogSkeletonPreview = val)"
          :preview="blogSkeletonPreview"
      />

      <ComponentWrapper>
        <div v-if="blogSkeletonPreview" class="p-8 mb-4 flex items-center gap-5 justify-center">
          <div class="w-full flex flex-col gap-[20px]">
            <div
                class="w-full mx-auto dark:bg-slate-900 dark:border-slate-700 bg-secondary p-4 rounded-md border border-border boxShadow animate-pulse">
              <div class="flex gap-[20px]">
                <div class="flex flex-col justify-between w-full 640px:w-[80%]">
                  <div class="flex flex-col gap-2">
                    <p class="w-[90%] h-[7px] dark:bg-slate-700 bg-border rounded-md"></p>
                    <p class="w-[90%] h-[7px] dark:bg-slate-700 bg-border rounded-md"></p>
                    <p class="w-[80%] h-[7px] dark:bg-slate-700 bg-border rounded-md"></p>
                  </div>

                  <div class="flex items-center gap-[10px] w-full">
                    <div class="w-[40px] h-[40px] rounded-full dark:bg-slate-700 bg-border"></div>

                    <div class="flex flex-col gap-2 w-[80%]">
                      <p class="w-[60%] h-[7px] dark:bg-slate-700 bg-border rounded-md"></p>
                      <span class="w-[50%] h-[7px] dark:bg-slate-700 bg-border rounded-md"></span>
                    </div>
                  </div>
                </div>

                <div class="w-[40%] 425px:w-[35%]">
                  <div class="w-[120px] h-[120px] rounded-md dark:bg-slate-700 bg-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="BlogSkeletonCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text="Shine Skeleton" id="shine_skeleton"/>
      </div>

      <ComponentDescription
          text="This is a card skeleton component. Display placeholder content while the actual content is loading."
      />

      <ToggleTab
          :code="shineSkeletonCode"
          @update:code="(val) => (shineSkeletonCode = val)"
          :preview="shineSkeletonPreview"
          @update:preview="(val) => (shineSkeletonPreview = val)"
      />

      <ComponentWrapper>
        <div v-if="shineSkeletonPreview" class="flex py-8 items-center justify-center">
          <div
              class="grid w-full px-4 grid-cols-1 640px:grid-cols-2 1024px:grid-cols-3 gap-6">

            <div
                class="relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent">
              <div class="h-24 rounded-lg dark:bg-slate-700 bg-slate-100/80"></div>
              <div class="space-y-3">
                <div class="h-3 w-3/5 rounded-lg dark:bg-slate-700 bg-slate-100/50"></div>
                <div class="h-3 w-4/5 rounded-lg dark:bg-slate-700 bg-slate-100/60"></div>
                <div class="h-3 w-2/5 rounded-lg dark:bg-slate-700 bg-slate-100/60"></div>
              </div>
            </div>

            <div
                class="relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent">
              <div class="h-24 rounded-lg dark:bg-slate-700 bg-slate-100/80"></div>
              <div class="space-y-3">
                <div class="h-3 w-3/5 rounded-lg dark:bg-slate-700 bg-slate-100/50"></div>
                <div class="h-3 w-4/5 rounded-lg dark:bg-slate-700 bg-slate-100/60"></div>
                <div class="h-3 w-2/5 rounded-lg dark:bg-slate-700 bg-slate-100/60"></div>
              </div>
            </div>

            <div
                class="relative space-y-5 border border-slate-100 dark:border-slate-700 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-slate-100/10 before:bg-gradient-to-r before:from-transparent before:via-slate-100/70 dark:before:via-slate-100/10 before:to-transparent">
              <div class="h-24 rounded-lg dark:bg-slate-700 bg-slate-100/80"></div>
              <div class="space-y-3">
                <div class="h-3 w-3/5 rounded-lg dark:bg-slate-700 bg-slate-100/50"></div>
                <div class="h-3 w-4/5 rounded-lg dark:bg-slate-700 bg-slate-100/60"></div>
                <div class="h-3 w-2/5 rounded-lg dark:bg-slate-700 bg-slate-100/60"></div>
              </div>
            </div>

          </div>
        </div>

        <ShowCode v-else :code="ShineSkeletonCodes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/context-menu"
          backName="context menu"
          forwardName="alert message"
          forwardUrl="/components/alert-message"
      />
    </div>

    <ContentNavbar :activeSection="activeSection" :contents="skeletonContents"/>

  </aside>
</template>