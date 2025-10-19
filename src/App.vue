<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
    <DonationButton/>
  </div>
</template>

<script setup>
import DonationButton from "@/Shared/DonationButton.vue";
</script>

<style scoped>
.loading {
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 100px;
  display: flex;
}
</style>
