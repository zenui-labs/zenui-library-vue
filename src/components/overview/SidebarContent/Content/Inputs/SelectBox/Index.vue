<script setup>
import ContentHeader from "@/Shared/ContentHeader.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";
import {selectInputContents} from "@/Utils/ContentsConfig/InputContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";
import {ref} from "vue";
import MultipleSelectWithSearch
  from "@/components/overview/SidebarContent/Content/Inputs/SelectBox/MultipleSelectWithSearch.vue";
import MultipleSelectWithSearchAndBadge
  from "@/components/overview/SidebarContent/Content/Inputs/SelectBox/MultipleSelectWithSearchAndBadge.vue";
import BasicSelectExample from "@/components/overview/SidebarContent/Content/Inputs/SelectBox/BasicSelectExample.vue";
import SelectWithIconExample
  from "@/components/overview/SidebarContent/Content/Inputs/SelectBox/SelectWithIconExample.vue";
import SingleSelectWithSearch
  from "@/components/overview/SidebarContent/Content/Inputs/SelectBox/SingleSelectWithSearch.vue";
import SingleSelectWithSearchAndBadge
  from "@/components/overview/SidebarContent/Content/Inputs/SelectBox/SingleSelectWithSearchAndBadge.vue";

const sectionIds = selectInputContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);


const basicSelectPreview = ref(true);
const basicSelectCode = ref(false);

const selectWithIconPreview = ref(true);
const selectWithIconCode = ref(false);

const multipleSelectWithSearchPreview = ref(true);
const multipleSelectWithSearchCode = ref(false);

const singleSelectWithSearchPreview = ref(true);
const singleSelectWithSearchCode = ref(false);

const singleSelectWithSearchAndBadgePreview = ref(true);
const singleSelectWithSearchAndBadgeCode = ref(false);

const multipleSelectWithSearchAndBadgePreview = ref(true);
const multipleSelectWithSearchAndBadgeCode = ref(false);

</script>

<template>
  <aside class='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
    <div>
      <ContentHeader text='Basic Select' id='basic_select'/>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="basicSelectPreview"
                 @update:preview="val => basicSelectPreview = val"
                 @update:code="val => basicSelectCode = val"
                 :code="basicSelectCode"/>

      <ComponentWrapper>
        <div v-if="basicSelectPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <BasicSelectExample/>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Select With Icon' id='select_with_icon'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="selectWithIconPreview"
                 @update:preview="val => selectWithIconPreview = val"
                 @update:code="val => selectWithIconCode = val"
                 :code="selectWithIconCode"/>

      <ComponentWrapper>
        <div v-if="selectWithIconPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <SelectWithIconExample/>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class='mt-8'>
        <ContentHeader text='Multiple Select With Search' id='multiple_select_with_search'/>
      </div>

      <ComponentDescription text='This is an input text field. Use it to enter your information, which
            will be processed accordingly.'/>

      <ToggleTab :preview="multipleSelectWithSearchPreview"
                 @update:preview="val => multipleSelectWithSearchPreview = val"
                 @update:code="val => multipleSelectWithSearchCode = val"
                 :code="multipleSelectWithSearchCode"/>

      <ComponentWrapper>
        <div v-if="multipleSelectWithSearchPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <MultipleSelectWithSearch/>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Single Select With Search' id='single_select_with_search'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="singleSelectWithSearchPreview"
                 @update:preview="val => singleSelectWithSearchPreview = val"
                 @update:code="val => singleSelectWithSearchCode = val"
                 :code="singleSelectWithSearchCode"/>

      <ComponentWrapper>
        <div v-if="singleSelectWithSearchPreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <SingleSelectWithSearch/>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='single select with search and badge' id='single_select_with_search_and_badge'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="singleSelectWithSearchAndBadgePreview"
                 @update:preview="val => singleSelectWithSearchAndBadgePreview = val"
                 @update:code="val => singleSelectWithSearchAndBadgeCode = val"
                 :code="singleSelectWithSearchAndBadgeCode"/>

      <ComponentWrapper>
        <div v-if="singleSelectWithSearchAndBadgePreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <SingleSelectWithSearchAndBadge/>
        </div>
        <ShowCode
            v-else
            code=''
        />
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader text='Multiple Select With Search And Badge' id='multiple_select_with_search_and_badge'/>
      </div>

      <ComponentDescription text='This is a bottom-bordered input text field. Enter your information
            here for it to be processed accordingly.'/>

      <ToggleTab :preview="multipleSelectWithSearchAndBadgePreview"
                 @update:preview="val => multipleSelectWithSearchAndBadgePreview = val"
                 @update:code="val => multipleSelectWithSearchAndBadgeCode = val"
                 :code="multipleSelectWithSearchAndBadgeCode"/>

      <ComponentWrapper>
        <div v-if="multipleSelectWithSearchAndBadgePreview" class='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
          <MultipleSelectWithSearchAndBadge/>
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

    <ContentNavbar :contents="selectInputContents" :activeSection="activeSection"/>

  </aside>
</template>
