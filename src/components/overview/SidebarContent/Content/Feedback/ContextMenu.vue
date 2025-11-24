<script setup>
import {onMounted, onUnmounted, ref, watch} from 'vue';
import ContentHeader from '@/Shared/ContentHeader.vue';
import ComponentDescription from '@/Shared/Component/ComponentDescription.vue';
import ToggleTab from '@/Shared/Component/ToggleTab.vue';
import ComponentWrapper from '@/Shared/Component/ComponentWrapper.vue';
import ShowCode from '@/Shared/Component/ShowCode.vue';
import OverviewFooter from '@/Shared/OverviewFooter.vue';
import ContentNavbar from '@/Shared/Component/ContentNavbar.vue';
import {contextMenuContents} from '@/Utils/ContentsConfig/FeedbackContents.js';
import {useScrollSpy} from '@/CustomHooks/useScrollSpy.js';
import {Icon} from '@iconify/vue';
import {
  ContextMenuCodes,
  DropdownContextMenuCodes
} from "@/components/overview/SidebarContent/Content/Feedback/PreviewCodes/ContextMenuPreviewCodes.js";

const sectionIds = contextMenuContents.map((item) => item.href.slice(1));
const activeSection = useScrollSpy(sectionIds);

const contextMenuPreview = ref(true);
const contextMenuCode = ref(false);

const dropdownContextMenuPreview = ref(true);
const dropdownContextMenuCode = ref(false);

const showMenu = ref(false);
const menuPosition = ref({x: 0, y: 0});
const menuHeight = ref('0px');

const handleContextMenu = (e) => {
  e.preventDefault();
  showMenu.value = true;
  menuPosition.value = {x: e.pageX, y: e.pageY};
};

const handleClick = () => {
  if (showMenu.value) {
    menuHeight.value = '0px';
    setTimeout(() => (showMenu.value = false), 200);
  }
};

onMounted(() => {
  document.addEventListener('click', handleClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClick);
});

watch(showMenu, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      const menuElement = document.getElementById('context-menu');
      if (menuElement) {
        menuHeight.value = `${menuElement.scrollHeight}px`;
      }
    }, 0);
  }
});

const menuItems = [
  {
    icon: 'mingcute:copy-line',
    label: 'Copy',
    action: () => console.log('Copy clicked'),
  },
  {
    icon: 'mdi:link-variant',
    label: 'Copy Link',
    action: () => console.log('Copy Link clicked'),
  },
  {
    icon: 'majesticons:share-line',
    label: 'Share',
    action: () => console.log('Share clicked'),
  },
  {
    icon: 'lucide:pencil',
    label: 'Rename',
    action: () => console.log('Rename clicked'),
  },
  {
    icon: 'material-symbols:delete-outline',
    label: 'Delete',
    action: () => console.log('Delete clicked'),
  },
];

const showMenu2 = ref(false);
const menuPosition2 = ref({x: 0, y: 0});
const menuHeight2 = ref('0px');
const subMenuHeight = ref('0px');
const showSubmenu = ref(false);

const handleContextMenu2 = (e) => {
  e.preventDefault();
  showMenu2.value = true;
  menuPosition2.value = {x: e.pageX, y: e.pageY};
};

const handleClick2 = () => {
  if (showMenu2.value) {
    menuHeight2.value = '0px';
    setTimeout(() => (showMenu2.value = false), 200);
  }
};

onMounted(() => {
  document.addEventListener('click', handleClick2);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClick2);
});

watch(showMenu2, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      const menuElement2 = document.getElementById('context-menu2');
      if (menuElement2) {
        menuHeight2.value = `${menuElement2.scrollHeight}px`;
      }
    }, 0);
  }
});

watch(showSubmenu, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      const subMenuElement = document.getElementById('sub-menu');
      if (subMenuElement) {
        subMenuHeight.value = `${subMenuElement.scrollHeight}px`;
      }
    }, 0);
  }
});

const menuItems2 = [
  {
    icon: 'mingcute:copy-line',
    label: 'Copy',
    action: () => console.log('Copy clicked'),
  },
  {
    icon: 'majesticons:share-line',
    label: 'Share',
    hasSubmenu: true,
    submenu: [
      {
        icon: 'material-symbols:cloud-download-outline',
        label: 'Download',
        action: () => console.log('Download clicked'),
      },
      {
        icon: 'basil:cloud-upload-outline',
        label: 'Upload',
        action: () => console.log('Upload clicked'),
      },
      {
        icon: 'mdi:link-variant',
        label: 'Copy Link',
        action: () => console.log('Copy Link clicked'),
      },
    ],
    action: () => console.log('Share clicked'),
  },
  {
    icon: 'lucide:pencil',
    label: 'Rename',
    action: () => console.log('Rename clicked'),
  },
  {
    icon: 'material-symbols:delete-outline',
    label: 'Delete',
    action: () => console.log('Delete clicked'),
  },
];

const handleItemClick = (item) => {
  if (!item.submenu) {
    item.action?.();
  }
};
</script>

<template>
  <aside
      class="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10"
  >
    <div class="1024px:w-[80%]">
      <ContentHeader text="context menu" id="context_menu"/>

      <ComponentDescription
          text="A context menu is a pop-up that shows relevant actions when you right-click an item."
      />

      <ToggleTab
          :code="contextMenuCode"
          @update:preview="(val) => (contextMenuPreview = val)"
          @update:code="(val) => (contextMenuCode = val)"
          :preview="contextMenuPreview"
      />

      <ComponentWrapper>
        <div
            v-if="contextMenuPreview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <p
              @contextmenu="handleContextMenu"
              class="w-full 1024px:w-[80%] cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] bg-gray-50 border-gray-300 rounded-md border p-4 text-[1rem]"
          >
            ZENUI LIBRARY - Free Templates & Components Library. Elevate your
            project with free UI components, customizable icons, and a color
            palette. No dependencies required
          </p>

          <div
              v-if="showMenu"
              id="context-menu"
              class="fixed bg-white overflow-hidden dark:bg-slate-800 dark:border-slate-700 transition-all duration-200 shadow-md rounded-lg p-1 w-48 border border-gray-200"
              :style="{
              top: menuPosition.y + 'px',
              left: menuPosition.x + 'px',
              height: menuHeight,
              zIndex: 50,
            }"
          >
            <button
                v-for="(item, index) in menuItems"
                :key="index"
                @click.stop="
                () => {
                  item.action();
                  showMenu = false;
                }
              "
                :class="[
                item.label === 'Delete' &&
                  'hover:bg-red-50 dark:hover:bg-red-900/30',
                'w-full px-4 py-2 text-left dark:hover:bg-slate-900/50 hover:bg-gray-100 rounded-lg flex items-center gap-3 text-sm text-gray-600 dark:text-[#abc2d3]',
              ]"
            >
              <Icon
                  :icon="item.icon"
                  :class="[
                  item.label === 'Delete' && 'dark:text-red-500 text-red-500',
                  'text-[1.2rem] dark:text-[#abc2d3] text-gray-600',
                ]"
              />
              <span
                  :class="[item.label === 'Delete' && 'text-red-500']"
              >
                {{ item.label }}
              </span>
            </button>
          </div>
        </div>

        <ShowCode v-else :code="ContextMenuCodes"/>
      </ComponentWrapper>

      <div class="mt-8">
        <ContentHeader
            text="context menu with dropdown"
            id="context_menu_with_dropdown"
        />
      </div>

      <ComponentDescription
          text="A context menu with a dropdown appears on right-click and includes items that expand to show more options."
      />

      <ToggleTab
          :code="dropdownContextMenuCode"
          :preview="dropdownContextMenuPreview"
          @update:code="(val) => (dropdownContextMenuCode = val)"
          @update:preview="(val) => (dropdownContextMenuPreview = val)"
      />

      <ComponentWrapper>
        <div
            v-if="dropdownContextMenuPreview"
            class="p-8 pt-12 mb-4 flex items-center flex-col gap-5 justify-center"
        >
          <p
              @contextmenu="handleContextMenu2"
              class="w-full 1024px:w-[80%] cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-[#abc2d3] bg-[#36af7b]/10 border-[#36af7b] rounded-md border p-4 text-[1rem]"
          >
            ZENUI LIBRARY - Free Templates & Components Library. Elevate your
            project with free UI components, customizable icons, and a color
            palette. No dependencies required
          </p>

          <div
              v-if="showMenu2"
              id="context-menu2"
              :class="[
              showSubmenu ? 'overflow-visible' : 'overflow-hidden',
              'fixed bg-white transition-all dark:bg-slate-800 dark:border-slate-700 duration-200 shadow-md rounded-lg p-1 w-48 border border-gray-200',
            ]"
              :style="{
              top: menuPosition2.y + 'px',
              left: menuPosition2.x + 'px',
              height: menuHeight2,
              zIndex: 50,
            }"
          >
            <div
                v-for="(item, index) in menuItems2"
                :key="item.id || index"
                class="relative"
                @mouseenter="item.hasSubmenu && (showSubmenu = true)"
                @mouseleave="
                () => {
                  if (item.hasSubmenu) {
                    showSubmenu = false;
                    subMenuHeight = '0px';
                  }
                }
              "
            >
              <button
                  @click="handleItemClick(item)"
                  :class="[
                  item.label === 'Delete'
                    ? 'hover:bg-red-50 dark:hover:bg-red-900/20'
                    : 'hover:bg-gray-100 dark:hover:bg-slate-900/50',
                  'w-full px-4 py-2 text-left rounded-lg flex items-center text-gray-600 dark:text-[#abc2d3] justify-between text-sm',
                ]"
              >
                <div class="flex items-center gap-3">
                  <Icon
                      :icon="item.icon"
                      :class="[
                      item.label === 'Delete' &&
                        'dark:text-red-500 text-red-500',
                      'text-[1.2rem] dark:text-[#abc2d3] text-gray-600',
                    ]"
                  />
                  <p
                      :class="[item.label === 'Delete' && 'text-red-500']"
                  >
                    {{ item.label }}
                  </p>
                </div>
                <Icon
                    v-if="item.hasSubmenu"
                    icon="mdi:chevron-right"
                    class="w-4 h-4 text-gray-400"
                />
              </button>

              <div
                  v-if="item.hasSubmenu && showSubmenu"
                  id="sub-menu"
                  class="absolute overflow-hidden transition-all duration-200 left-full top-0 bg-white shadow-md dark:bg-slate-800 dark:border-slate-700 rounded-lg p-1 w-48 border border-gray-200 ml-1.5"
                  :style="{
                  height: subMenuHeight,
                }"
              >
                <button
                    v-for="(subItem, subIndex) in item.submenu"
                    :key="subIndex"
                    @click="
                    () => {
                      subItem.action?.();
                      showSubmenu = false;
                    }
                  "
                    class="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg flex items-center gap-3 text-sm dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600"
                >
                  <Icon
                      :icon="subItem.icon"
                      :class="[
                      subItem.label === 'Delete' && 'text-red-500',
                      'text-[1.2rem] dark:text-[#abc2d3] text-gray-600',
                    ]"
                  />
                  <span
                      :class="[subItem.label === 'Delete' && 'text-red-500']"
                  >
                    {{ subItem.label }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <ShowCode v-else :code="DropdownContextMenuCodes"/>
      </ComponentWrapper>

      <OverviewFooter
          backUrl="/components/tabs"
          backName="tabs"
          forwardName="skeleton"
          forwardUrl="/components/skeleton"
      />
    </div>

    <ContentNavbar :contents="contextMenuContents" :activeSection="activeSection"/>
  </aside>
</template>