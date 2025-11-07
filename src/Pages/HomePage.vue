<script setup>
import Navbar from "@/components/Home/Navbar.vue";
import MobileNavbar from "@/components/Home/MobileNavbar.vue";
import Hero from "@/components/Home/Hero.vue";
import Footer from "@/components/Home/Footer.vue";
import AnimatedDarkBg from "@/Shared/AnimatedDarkBg.vue";
</script>

<template>
  <div class="overflow-clip">
    <Navbar/>
    <MobileNavbar/>
    <Hero/>
    <Footer/>
  </div>

  <AnimatedDarkBg/>
</template>