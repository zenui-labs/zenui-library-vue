<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
  <div
      class="w-full 640px:w-[80%] 1024px:w-[50%] rounded-md relative group overflow-hidden"
  >
    <img
        src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1728139729~exp=1728143329~hmac=dd0870841ecbe138afdb639fee17206241a94b02b17e1e681ad16eba38f0bd7b&w=996"
        alt="animated_cards"
        class="w-full h-[350px] object-cover"
    />

    <div
        class="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden"
    >
      <h3
          class="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100"
      >
        Jack Leo
      </h3>
      <p
          class="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
      >
        Product Designer
      </p>

      <div class="flex items-center gap-[20px] mt-[15px]">
        <div
            class="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
        >
          <Icon
              icon="icon-park-outline:facebook"
              class="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"
          />
        </div>
        <div
            class="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100"
        >
          <Icon
              icon="fa6-brands:x-twitter"
              class="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"
          />
        </div>
        <div
            class="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100"
        >
          <Icon
              icon="fa6-brands:dribbble"
              class="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"
          />
        </div>
      </div>
    </div>
  </div>
</template>
