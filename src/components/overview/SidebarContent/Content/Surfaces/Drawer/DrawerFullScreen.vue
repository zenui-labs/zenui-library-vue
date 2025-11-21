<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

const openDrawer = ref(false);

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    openDrawer.value = false;
  }
};

const handleClickOutside = (e) => {
  if (
      !e.target.closest(".zenui_drawer_btn") &&
      !e.target.closest(".zenui_drawer")
  ) {
    openDrawer.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.removeEventListener("click", handleClickOutside);
});

const products = [
  {
    src: "https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg",
    title: "Still life of skincare products",
    items: 25,
    price: 32,
    sale: 12,
  },
  {
    src: "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg",
    title: "Levitating music headphones display",
    items: 8,
    price: 32,
    sale: 12,
  },
  {
    src: "https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg",
    title: "Set of aloe vera cosmetic products",
    items: 2,
    price: 32,
    sale: 12,
  },
];
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <button
        class="px-4 py-2 bg-[#36af7b] zenui_drawer_btn text-white rounded-md"
        @click="openDrawer = true"
    >
      Open Drawer
    </button>
  </div>

  <div
      :class="openDrawer ? 'visible' : 'invisible'"
      class="w-full h-screen fixed flex items-end justify-end top-0 left-0 z-[200000000] dark:bg-black/40 transition-all duration-300"
  >
    <div
        :class="openDrawer ? 'translate-y-[0px] opacity-100' : 'translate-y-[200px] opacity-0'"
        class="overflow-y-scroll w-full h-full dark:bg-slate-800 zenui_drawer bg-[#eceef6] transition-all shadow-[#36af7b] duration-300 mx-auto mt-8"
    >
      <div class="w-full flex items-end p-4 justify-end">
        <Icon
            icon="akar-icons:cross"
            class="p-2.5 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            @click="openDrawer = false"
        />
      </div>

      <div class="flex items-start 1024px:flex-row flex-col justify-between gap-8">
        <div class="bg-[#fff] dark:bg-slate-900 min-h-screen rounded-md p-6 w-full 1024px:w-[70%]">
          <div
              class="flex items-center 1024px:flex-row flex-col justify-between dark:border-slate-700 w-full border-b border-[#d1d1d1]">
            <div class="flex items-center gap-5">
              <span class="text-[1rem] font-[500] text-[#36af7b] border-b border-[#36af7b] pb-3">
                1.Cart
              </span>
              <span class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text pb-3">
                2. Shipping & Payment
              </span>
              <span class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text pb-3">
                3. Confirmation
              </span>
            </div>
            <a href="#" class="underline text-[#36af7b] font-[500] pb-3">Why is subscribing better?</a>
          </div>

          <div
              v-for="(product, index) in products"
              :key="index"
              class="mt-12 flex items-start border-b dark:border-slate-700 border-[#d1d1d1] pb-6 justify-between w-full"
          >
            <div class="flex items-start gap-5">
              <img :src="product.src" :alt="product.title" class="w-[90px] h-[60px] object-cover rounded-md"/>
              <div>
                <h2 class="text-[1.2rem] font-[600] text-[#36af7b]">{{ product.title }}</h2>
                <p class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text">{{ product.items }} items</p>
              </div>
            </div>
            <div class="flex items-center gap-12">
              <h3 class="text-[1.2rem] font-[600] dark:text-slate-500 text-[#6d6d6d]">
                ${{ product.price }} <span class="text-[#36af7b] pl-1 line-through">${{ product.sale }}</span>
              </h3>
              <Icon icon="akar-icons:cross" class="text-[#6d6d6d] dark:text-slate-400 cursor-pointer"/>
            </div>
          </div>
        </div>

        <div class="w-full 1024px:w-[30%] mr-8">
          <div class="bg-[#fff] dark:bg-slate-900 rounded-md p-6">
            <h3 class="text-[1rem] text-[#36af7b] font-[500] dark:border-slate-700 border-b border-[#d1d1d1] pb-4 text-center">
              Order Summary
            </h3>
            <div class="flex flex-col gap-5 mt-4">
              <div class="flex items-center justify-between w-full">
                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Item Total</h4>
                <span class="text-text dark:text-[#abc2d3] font-[500]">$180.00</span>
              </div>
              <div class="flex items-center justify-between w-full">
                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Subscription savings (15% off)</h4>
                <span class="text-[#36af7b] font-[500]">- $18.00</span>
              </div>
              <div class="flex items-center justify-between w-full">
                <h4 class="text-[1rem] font-[500] text-[#36af7b]">Shipping</h4>
                <span class="text-[#36af7b] font-[500]">free</span>
              </div>
              <div
                  class="flex items-center dark:border-slate-700 justify-between w-full border-t border-[#d1d1d1] pt-4">
                <h4 class="text-[1rem] font-[500] dark:text-[#abc2d3] text-text">Order Total</h4>
                <span class="text-text dark:text-[#abc2d3] font-[500]">$200.00</span>
              </div>
            </div>
          </div>
          <button class="w-full py-2 px-6 mt-6 tracking-widest bg-[#36af7b] rounded-md text-[#fff]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
