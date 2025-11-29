<script setup>
import {ref} from "vue";

const initialGrid = [
  {
    id: 1,
    image: "https://i.ibb.co.com/XxvZ2Kq/Logo.png",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/9N5LS3M/images-1.jpg",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/qY35qZK/images.jpg",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/2gLx39W/Logo-3.png",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/GCDDPQz/png-clipart-logo-technology-digital-restaurant-marketing-for-restaurants-technology-electronics-text.png",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/5nTyZ7v/png-clipart-react-full-logo-tech-companies-thumbnail.png",
  },
  {
    id: 7,
    image: "https://i.ibb.co.com/fp0pFV5/Logo-5.png",
  },
  {
    id: 8,
    image: "https://i.ibb.co.com/S3Z98YZ/Logo-6.png",
  },
  {
    id: 9,
    image: "https://i.ibb.co.com/0FwfDsz/Union.png",
  },
];

const gridItems = ref([...initialGrid]);
const draggedItem = ref(null);
const hoveredItem = ref(null);

const handleDragStart = (item) => {
  draggedItem.value = item;
};

const handleDragOver = (e, item) => {
  e.preventDefault();
  hoveredItem.value = item;
};

const handleDrop = (e, dropItem) => {
  e.preventDefault();

  const newGrid = gridItems.value.map((item) => {
    if (item.id === dropItem.id) {
      return draggedItem.value;
    }
    if (item.id === draggedItem.value.id) {
      return dropItem;
    }
    return item;
  });

  gridItems.value = newGrid;
  draggedItem.value = null;
  hoveredItem.value = null;
};

const handleDragLeave = () => {
  hoveredItem.value = null;
};
</script>

<template>
  <div class="grid grid-cols-1 425px:grid-cols-2 1024px:grid-cols-3 gap-4">
    <div
        v-for="item in gridItems"
        :key="item.id"
        draggable="true"
        @dragstart="handleDragStart(item)"
        @dragover="handleDragOver($event, item)"
        @drop="handleDrop($event, item)"
        @dragleave="handleDragLeave"
        :class="[
        'w-full px-8 py-4 border-2 dark:border-slate-500 rounded text-center cursor-move',
        item.id === draggedItem?.id && 'bg-[#36af7b]/10 opacity-30',
        item.id === hoveredItem?.id
          ? 'border-dashed border-2 border-[#36af7b]'
          : 'border-gray-100',
      ]"
    >
      <img
          alt="image"
          :src="item.image"
          class="w-[100px] 640px:w-[140px] h-[50px] object-contain"
      />
    </div>
  </div>
</template>