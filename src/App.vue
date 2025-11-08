<template>
  <div id="app">
    <router-view/>
    <DonationButton/>
  </div>
</template>

<script setup>
import DonationButton from "@/Shared/DonationButton.vue";
</script>
