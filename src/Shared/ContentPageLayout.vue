<script setup>
import Navbar from "@/components/Home/Navbar.vue";
import Sidebar from "@/components/overview/Sidebar/index.vue";
import Footer from "@/components/Home/Footer.vue";
import {useZenuiStore} from "@/Store/Index.js";
import MobileSidebar from "@/components/overview/Sidebar/MobileSidebar.vue";
import MobileNavbar from "@/components/Home/MobileNavbar.vue";
import NewsBoard from "@/components/Home/NewsBoard.vue";

const store = useZenuiStore()

</script>

<template>
  <NewsBoard/>
  <Navbar/>
  <MobileNavbar/>

  <div class="flex w-full mx-auto max-w-[1700px]">
    <div class="1024px:w-[32%] 1260px:w-[28%] relative 1404px:w-[19%] 2000px:w-[18%] 1024px:mr-[3rem] 1605px:mr-[0rem]">
      <div
          class="bg-gradient-to-b dark:from-darkBgColor dark:to-darkBgColor/20 from-white to-white/20 z-30 absolute top-0 left-0 w-full h-[80px] transition-opacity duration-300"
          :class="scrollY > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      />
      <Sidebar/>
    </div>

    <div
        class="w-full h-[calc(100vh-76px)] overflow-y-auto pt-[5rem] 640px:pt-[5rem] 1024px:pt-[2rem] 1024px:px-[0.5rem] relative"
        style="scrollbar-width: none"
    >
      <MobileSidebar/>
      <slot/>
    </div>
  </div>


  <Footer :need-much-margin="false"/>

  <div
      class="fixed bottom-0 right-0 z-[-1] w-[230vmax] h-[280vmax] translate-x-1/2 translate-y-1/2 rounded-full bg-darkBgColor transition-transform duration-1000 ease-in-out"
      :class="store.theme === 'dark' ? 'scale-100' : 'scale-0'"
  />
</template>
