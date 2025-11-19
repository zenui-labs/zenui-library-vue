<script setup></script>

<template>
  <div class="p-8 mt-20 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full 1024px:w-[60%] mt-16 1024px:mt-0 dark:bg-slate-800 shadow-lg rounded-lg flex flex-col"
    >
      <div class="w-full flex justify-center items-center">
        <img
            src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"
            alt="profile"
            class="w-[80px] h-[80px] rounded-full flex justify-center border-blue-800 border-2 -mt-16 object-cover"
        />
      </div>

      <div>
        <div class="w-full start mt-3 px-4">
          <h2 class="font-[600] dark:text-[#abc2d3] text-center text-[1.4rem]">
            Description
          </h2>
          <p class="text-text dark:text-[#abc2d3] text-[0.9rem] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptatibus porro at praesentium enim animi deserunt totam
            voluptatem tempora repudiandae possimus iure cum veniam nesciunt,
            ipsa ad illo, magnam tenetur?
          </p>
        </div>

        <div
            class="w-full py-4 px-5 mt-8 border-t dark:border-slate-600 border-border flex items-center justify-between"
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
  </div>
</template>
