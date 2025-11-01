<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";

const openDrawer = ref(false);

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    openDrawer.value = false;
  }
};

const handleClickOutside = (event) => {
  const drawerBtn = event.target.closest(".zenui_drawer_btn");
  const drawer = event.target.closest(".zenui_drawer");

  if (!drawerBtn && !drawer) {
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
</script>

<template>
  <button
    class="px-4 py-2 zenUIRightModalButton zenui_drawer_btn bg-primary text-secondary rounded-md"
    @click="openDrawer = true"
  >
    Open Drawer
  </button>

  <!-- Drawer Left -->
  <div
    :class="[
      openDrawer ? 'visible' : 'invisible',
      'w-full h-screen fixed bg-[rgb(0,0,0,0.2)] top-0 left-0 z-[200000000] dark:bg-black/40 transition-all duration-300',
    ]"
  >
    <div
      :class="[
        openDrawer
          ? 'translate-x-[0px] opacity-100'
          : 'translate-x-[-200px] opacity-0',
        'overflow-y-scroll zenui_drawer w-full 640px:w-[80%] 1024px:w-[40%] dark:bg-slate-800 h-screen bg-[#eceef6] transition-all duration-300',
      ]"
    >
      <!-- Close button -->
      <div class="w-full flex items-end p-4 justify-end">
        <Icon
          icon="rx:cross-1"
          class="p-2 w-fit dark:text-slate-300 dark:hover:bg-slate-900/50 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
          @click="openDrawer = false"
        />
      </div>

      <!-- Drawer content -->
      <div
        class="flex items-start flex-col p-6 640px:p-12 justify-between gap-8"
      >
        <div
          class="bg-[#fff] dark:bg-slate-900 min-h-screen rounded-md p-6 w-full"
        >
          <!-- Steps -->
          <div
            class="flex items-center 1024px:flex-row flex-col justify-between w-full border-b border-[#d1d1d1] dark:border-slate-700 flex-wrap gap-y-6"
          >
            <div class="flex items-center flex-wrap gap-5">
              <span
                class="text-[1rem] font-[500] text-primary border-b border-primary pb-3"
                >1.Cart</span
              >
              <span
                class="text-[1rem] dark:text-[#abc2d3] font-[500] text-text pb-3"
                >2. Shipping & Payment</span
              >
              <span
                class="text-[1rem] dark:text-[#abc2d3] font-[500] text-text pb-3"
                >3. Confimation</span
              >
            </div>
            <a href="#" class="underline text-primary font-[500] pb-3"
              >Why is subscribing better?</a
            >
          </div>

          <!-- Products -->
          <div
            class="mt-12 flex items-start dark:border-slate-700 border-b border-[#d1d1d1] pb-6 justify-between w-full"
          >
            <div class="flex items-start gap-5">
              <img
                src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg"
                alt="Still life of skincare products"
                class="w-[90px] h-[60px] object-cover rounded-md"
              />
              <div>
                <h2 class="text-[1.2rem] font-[600] text-primary">
                  Still life of skincare products
                </h2>
                <p class="text-[1rem] dark:text-slate-400 font-[500] text-text">
                  25 items
                </p>
              </div>
            </div>

            <div class="flex items-center gap-12">
              <h3
                class="text-[1.2rem] font-[600] dark:text-slate-400 text-[#6d6d6d]"
              >
                $32 <span class="text-primary pl-1">$12</span>
              </h3>
              <Icon
                icon="rx:cross-1"
                class="text-[#6d6d6d] dark:text-slate-400 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <!-- Order summary -->
        <div class="w-full mr-8">
          <div class="bg-[#fff] dark:bg-slate-900 rounded-md p-6">
            <h3
              class="text-[1rem] text-primary dark:border-slate-700 font-[500] border-b border-[#d1d1d1] pb-4 text-center"
            >
              Order Summary
            </h3>

            <div class="flex flex-col gap-5 mt-4">
              <div class="flex items-center justify-between w-full">
                <h4 class="text-[1rem] font-[500] text-primary">Item Total</h4>
                <span class="text-text dark:text-[#abc2d3] font-[500]"
                  >$180.00</span
                >
              </div>
              <div class="flex items-center justify-between w-full">
                <h4 class="text-[1rem] font-[500] text-primary">
                  Subcription savings (15% off)
                </h4>
                <span class="text-primary font-[500]">- $18.00</span>
              </div>
              <div class="flex items-center justify-between w-full">
                <h4 class="text-[1rem] font-[500] text-primary">Shipping</h4>
                <span class="text-primary font-[500]">free</span>
              </div>
              <div
                class="flex items-center dark:border-slate-700 justify-between w-full border-t border-[#d1d1d1] pt-4"
              >
                <h4
                  class="text-[1rem] dark:text-[#abc2d3] font-[500] text-text"
                >
                  Order Total
                </h4>
                <span class="text-text font-[500] dark:text-[#abc2d3]"
                  >$200.00</span
                >
              </div>
            </div>
          </div>
          <button
            class="w-full py-2 px-6 mt-6 tracking-widest bg-primary rounded-md text-[#fff]"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
