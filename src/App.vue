<script setup>
import DonationButton from "@/Shared/DonationButton.vue";
import CookieModal from "@/Shared/CookieModal.vue";
import {ref} from "vue";

const isCookieModalOpen = ref(false);

function handleCookieModalToggle(value) {
  isCookieModalOpen.value = value;
}
</script>

<template>
  <div id="app">
    <router-view/>
    <DonationButton/>
    <CookieModal @update:is-modal-open="handleCookieModalToggle" :is-modal-open="isCookieModalOpen"/>
  </div>
</template>
