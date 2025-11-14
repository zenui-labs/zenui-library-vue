<script setup>
import {ref} from "vue";

const length = 4;
const autoOtp = ref("");
const navigationInputs = ref([]);

const onChange = (value) => {
  autoOtp.value = value;
};

const handleInputChange = (e, index) => {
  const {value} = e.target;
  const newOtp = navigationInputs.value.map((input) => input?.value || "");

  if (/^[0-9]$/.test(value) && value.length === 1) {
    newOtp[index] = value;
    onChange(newOtp.join(""));

    if (index < length - 1) {
      navigationInputs.value[index + 1]?.focus();
    }
  } else if (value === "") {
    newOtp[index] = "";
    onChange(newOtp.join(""));
  } else {
    e.target.value = value.slice(0, 1);
  }
};

const handleAutoNavigationKeydown = (e, index) => {
  if (e.key === "Backspace" && !navigationInputs.value[index].value && index > 0) {
    navigationInputs.value[index - 1]?.focus();
  }
};

const handleAutoNavigationPaste = (e) => {
  e.preventDefault();
  const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length);

  const newOtp = navigationInputs.value.map((input) => input?.value || "");

  for (let i = 0; i < pastedData.length && i < length; i++) {
    newOtp[i] = pastedData[i];
    navigationInputs.value[i].value = pastedData[i];
  }

  onChange(newOtp.join(""));
  const focusIndex = Math.min(pastedData.length, length - 1);
  navigationInputs.value[focusIndex]?.focus();
};
</script>

<template>
  <div class="grid grid-cols-4 gap-[10px] w-full lg:w-[40%]">
    <input
        v-for="(_, index) in length"
        :key="index"
        ref="navigationInputs"
        class="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-[#36af7b]"
        placeholder="0"
        type="number"
        @wheel="$event.target.blur()"
        @input="(e) => handleInputChange(e, index)"
        @keydown="(e) => handleAutoNavigationKeydown(e, index)"
        @paste="(e) => handleAutoNavigationPaste(e, index)"
    />
  </div>
</template>
