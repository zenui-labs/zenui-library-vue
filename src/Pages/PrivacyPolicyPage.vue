<script setup>
import Navbar from "@/components/Home/Navbar.vue";
import MobileNavbar from "@/components/Home/MobileNavbar.vue";
import Footer from "@/components/Home/Footer.vue";
import PrivacyPolicy from "@/components/Home/PrivacyPolicy.vue";
</script>

<template>
  <div class="overflow-clip">
    <Navbar/>
    <MobileNavbar/>
    <PrivacyPolicy/>
    <Footer/>
  </div>
</template>