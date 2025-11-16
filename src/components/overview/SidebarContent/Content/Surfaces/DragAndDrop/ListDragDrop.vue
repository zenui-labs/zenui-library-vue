<script setup>
import {ref} from "vue";
import {Icon} from "@iconify/vue";

const listsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    title: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    title: "Product Manager",
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    title: "UX Designer",
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    title: "Marketing Specialist",
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    title: "Data Analyst",
  },
  {
    id: 6,
    name: "Sophia Brown",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    title: "Project Coordinator",
  },
];

const listItems = ref([...listsData]);
const listDraggedItem = ref(null);
const listHoveredItem = ref(null);

const handleListDragStart = (item) => {
  listDraggedItem.value = item;
};

const handleListDragOver = (e, item) => {
  e.preventDefault();
  listHoveredItem.value = item;
};

const handleListDrop = (e, dropItem) => {
  e.preventDefault();

  const newGrid = listItems.value.map((item) => {
    if (item.id === dropItem.id) {
      return listDraggedItem.value;
    }
    if (item.id === listDraggedItem.value.id) {
      return dropItem;
    }
    return item;
  });

  listItems.value = newGrid;
  listDraggedItem.value = null;
  listHoveredItem.value = null;
};

const handleDragLeave = () => {
  listHoveredItem.value = null;
};
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <div
        v-for="item in listItems"
        :key="item.id"
        draggable="true"
        @dragstart="handleListDragStart(item)"
        @dragover="handleListDragOver($event, item)"
        @drop="handleListDrop($event, item)"
        @dragleave="handleDragLeave"
        :class="[
        'grid-item p-4 border-2 dark:border-slate-600 rounded text-center flex items-center justify-between',
        item.id === listDraggedItem?.id && 'bg-[#36af7b]/10 opacity-30',
        item.id === listHoveredItem?.id
          ? 'border-dashed border-2 border-[#36af7b]'
          : 'border-gray-100',
      ]"
    >
      <div class="flex items-center gap-[8px] 640px:gap-[15px]">
        <img
            alt="image"
            :src="item.avatar"
            class="w-[40px] h-[40px] 640px:w-[60px] 640px:h-[60px] rounded-md object-contain"
        />

        <div class="text-left flex flex-col 640px:gap-[5px]">
          <h4
              class="text-[1rem] dark:text-[#abc2d3] 640px:text-[1.3rem] text-gray-700 font-[600]"
          >
            {{ item.name }}
          </h4>
          <p
              class="text-[0.7rem] dark:text-[#abc2d3]/70 640px:text-[0.9rem] text-gray-500"
          >
            {{ item.title }}
          </p>
        </div>
      </div>

      <Icon
          icon="ri:draggable"
          class="text-[1.5rem] dark:text-[#abc2d3]/70 640px:text-[1.8rem] text-gray-600 cursor-move"
      />
    </div>
  </div>
</template>