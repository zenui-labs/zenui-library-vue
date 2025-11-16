<script setup>
import {ref} from "vue";

import ContentHeader from "@/Shared/ContentHeader.vue";
import OverviewFooter from "@/Shared/OverviewFooter.vue";
import ShowCode from "@/Shared/Component/ShowCode.vue";
import ComponentDescription from "@/Shared/Component/ComponentDescription.vue";
import ToggleTab from "@/Shared/Component/ToggleTab.vue";
import ComponentWrapper from "@/Shared/Component/ComponentWrapper.vue";
import ContentNavbar from "@/Shared/Component/ContentNavbar.vue";

import {dragAndDropContents} from "@/Utils/ContentsConfig/SurfacesContents.js";
import {useScrollSpy} from "@/CustomHooks/useScrollSpy.js";

import DragWithIndicator from "./DragWithIndicator.vue";
import UploadMultipleFilesWithDragDrop from "./UploadMultipleFilesWithDragDrop.vue";
import ImageUploadWithDragDrop from "./ImageUploadWithDragDrop.vue";
import ListDragDrop from "./ListDragDrop.vue";
import TodoAppDragDrop from "./TodoAppDragDrop.vue";
import {
  dragAndDropWithIndicatorCodes,
  listDragAndDropCodes,
  todoAppDragAndDropCodes,
  uploadFileWithDragAndDropCodes,
  uploadMultipleFilesDragAndDropCodes
} from "@/components/overview/SidebarContent/Content/Surfaces/PreviewCodes/DragAndDropPreviewCodes.js";

const sectionIds = dragAndDropContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const dragDrop1Preview = ref(true);
const dragDrop1Code = ref(false);

const dragDrop2Preview = ref(true);
const dragDrop2Code = ref(false);

const dragDrop3Preview = ref(true);
const dragDrop3Code = ref(false);

const dragDrop4Preview = ref(true);
const dragDrop4Code = ref(false);

const dragDrop5Preview = ref(true);
const dragDrop5Code = ref(false);
</script>

<template>
  <aside
      class="flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="w-full 425px:w-[80%]">
      <ContentHeader
          id="drag-&-drop-with-indicator"
          text="drag & drop with indicator"
      />

      <ComponentDescription
          text="Drag & drop with indicator shows where an item will be placed, enhancing user clarity and interaction."
      />

      <ToggleTab
          @update:code="(val) => (dragDrop1Code = val)"
          :code="dragDrop1Code"
          :preview="dragDrop1Preview"
          @update:preview="(val) => (dragDrop1Preview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="dragDrop1Preview"
            class="p-8 mb-4 flex flex-col items-center gap-5 justify-center"
        >
          <DragWithIndicator/>
        </div>

        <ShowCode v-else :code="dragAndDropWithIndicatorCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="upload-multiple-files-with-drag-&-drop"
            text="upload multiple files with drag & drop"
            :isPremium="true"
        />
      </div>

      <ComponentDescription
          text="Drag & drop for multiple file uploads lets users easily upload several files at once."
      />

      <ToggleTab
          @update:code="(val) => (dragDrop2Code = val)"
          :code="dragDrop2Code"
          @update:preview="(val) => (dragDrop2Preview = val)"
          :preview="dragDrop2Preview"
      />

      <ComponentWrapper>
        <UploadMultipleFilesWithDragDrop v-if="dragDrop2Preview"/>

        <ShowCode v-else :code="uploadMultipleFilesDragAndDropCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="upload-image-with-drag-&-drop"
            text="upload image with drag & drop"
        />
      </div>

      <ComponentDescription
          text="Drag & drop image upload lets users quickly upload images by dragging them into a designated area."
      />

      <ToggleTab
          @update:code="(val) => (dragDrop3Code = val)"
          :code="dragDrop3Code"
          @update:preview="(val) => (dragDrop3Preview = val)"
          :preview="dragDrop3Preview"
      />

      <ComponentWrapper>
        <div
            v-if="dragDrop3Preview"
            class="p-8 mb-4 flex flex-col items-center gap-5 justify-center"
        >
          <ImageUploadWithDragDrop/>
        </div>

        <ShowCode v-else :code="uploadFileWithDragAndDropCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader id="list-drag-&-drop" text="list drag & drop"/>
      </div>

      <ComponentDescription
          text="List drag & drop allows users to rearrange items by dragging and dropping them into a new order."
      />

      <ToggleTab
          @update:code="(val) => (dragDrop4Code = val)"
          :code="dragDrop4Code"
          :preview="dragDrop4Preview"
          @update:preview="(val) => (dragDrop4Preview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="dragDrop4Preview"
            class="p-8 mb-4 flex flex-col items-center gap-5 justify-center"
        >
          <ListDragDrop/>
        </div>

        <ShowCode v-else :code="listDragAndDropCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            id="todo-app-with-drag-&-drop"
            text="todo app with drag & drop"
        />
      </div>

      <ComponentDescription
          text="A to-do app with drag & drop lets users easily organize tasks by dragging them into new positions."
      />

      <ToggleTab
          @update:code="(val) => (dragDrop5Code = val)"
          @update:preview="(val) => (dragDrop5Preview = val)"
          :code="dragDrop5Code"
          :preview="dragDrop5Preview"
      />

      <ComponentWrapper>
        <TodoAppDragDrop v-if="dragDrop5Preview"/>

        <ShowCode v-else :code="todoAppDragAndDropCodes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/dropdown-button"
          backName="dropdown button"
          forwardName="Comparison Card"
          forwardUrl="/components/comparison-card"
      />
    </div>

    <ContentNavbar :contents="dragAndDropContents" :activeSection="activeSection"/>
  </aside>
</template>