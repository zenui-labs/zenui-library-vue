<script setup>
import {onMounted} from "vue";

const props = defineProps({
  isModalOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:isModalOpen"]);

onMounted(() => {
  if (!localStorage.getItem("zenUI-vCookiesAccepted")) {
    setTimeout(() => {
      emit("update:isModalOpen", true);
    }, 6000);
  }
});

const acceptCookie = () => {
  localStorage.setItem("zenUI-vCookiesAccepted", "true");
  emit("update:isModalOpen", false);
};

const cancelCookie = () => {
  localStorage.setItem("zenUI-vCookiesAccepted", "true");
  emit("update:isModalOpen", false);
};
</script>

<template>
  <div
      :class="[
      isModalOpen 
        ? 'translate-y-[0px] opacity-100'
        : 'translate-y-[200px] opacity-0',
      'bg-brandColor transition-all fixed boxShadow rounded-md duration-300 mx-auto mt-8 bottom-3 left-[15px] z-[2000] transform'
    ]"
  >
    <div
        class="flex items-center gap-[20px] 1024px:gap-[50px] flex-col 640px:flex-row justify-between py-[20px] px-[30px]">
      <p class="text-[0.9rem] 1024px:w-[70%] text-white">
        We use cookies to make your experience better. <br/> By accepting, you agree to our
        <a href="/privacy-policy" class='text-white font-bold underline'>Privacy
          Policy</a>.
      </p>

      <div class="flex items-end justify-end gap-4 w-full 1024px:w-[20%]">
        <button
            class="py-2 w-full px-4 rounded-md outline-none hover:bg-white/90 bg-white"
            @click="acceptCookie"
        >
          Accept
        </button>
        <button
            class="py-2 w-full px-4 hover:bg-emerald-500 text-white border border-gray-200 rounded-md outline-none"
            @click="cancelCookie"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
</template>
