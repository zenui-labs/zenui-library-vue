<script setup></script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full 1024px:w-[60%] shadow-lg bg-white dark:bg-slate-800 rounded-lg"
    >
      <div
          class="w-full h-[150px] rounded-t-md relative bg-[url('https://img.freepik.com/premium-vector/content-writer-vector-colored-round-line-illustration_104589-2571.jpg')] bg-center bg-cover"
      >
        <img
            src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"
            alt=""
            class="w-[80px] h-[80px] rounded-full border-secondary border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"
        />
      </div>

      <div class="w-full text-center mt-16">
        <h2 class="font-[600] dark:text-[#abc2d3] text-[1.4rem]">User Name</h2>
        <p class="text-text dark:text-[#abc2d3]/80 text-[0.9rem]">London</p>
      </div>

      <div
          class="w-full py-4 px-5 mt-8 border-t dark:border-slate-700 border-border flex items-center justify-between"
      >
        <div class="flex items-center justify-center flex-col">
          <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">80k</h2>
          <p class="text-text dark:text-[#abc2d3]/80 text-[0.9rem]">Post</p>
        </div>

        <div class="flex items-center justify-center flex-col">
          <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">8k</h2>
          <p class="text-text dark:text-[#abc2d3]/80 text-[0.9rem]">
            Following
          </p>
        </div>

        <div class="flex items-center justify-center flex-col">
          <h2 class="text-[1.2rem] dark:text-[#abc2d3] font-[600]">200k</h2>
          <p class="text-text dark:text-[#abc2d3]/80 text-[0.9rem]">
            Followers
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
