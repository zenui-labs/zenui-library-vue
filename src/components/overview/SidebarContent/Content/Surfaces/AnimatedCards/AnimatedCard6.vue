<script setup></script>

<template>
  <div
    class="w-full 640px:w-[80%] 1024px:w-[60%] h-[350px] overflow-hidden rounded-md relative cursor-pointer group"
  >
    <!-- image -->
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample9.jpg"
      alt="animated_card"
      class="w-full h-full object-cover group-hover:scale-[1.15] group-hover:rotate-[8deg] transition-all duration-300 ease-out"
    />

    <!-- texts -->
    <div class="absolute bottom-0 left-0 py-[10px] px-[20px]">
      <h3 class="text-[2rem] font-bold text-white">The</h3>
      <h3 class="text-[2rem] font-bold text-yellow-500">Winter</h3>
      <h3 class="text-[2rem] font-bold text-white">Collection</h3>
    </div>
  </div>
</template>
