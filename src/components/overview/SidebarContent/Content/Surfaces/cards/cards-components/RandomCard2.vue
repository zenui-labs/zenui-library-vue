<script setup></script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
      class="bg-white dark:bg-slate-800 rounded-md boxShadow relative w-full 1024px:max-w-[60%]"
    >
      <!-- Main Image -->
      <img
        src="https://img.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149002586.jpg"
        alt="image"
        class="w-full h-[200px] object-cover rounded-t-md"
      />

      <!-- Overlapping Avatars -->
      <div class="relative mt-2">
        <div class="flex items-center">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt=""
            class="w-[30px] h-[30px] object-cover rounded-full border border-white absolute right-[30%] -top-3"
          />
          <img
            src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg"
            alt=""
            class="w-[30px] h-[30px] object-cover rounded-full border border-white absolute right-[25%] -top-3"
          />
          <img
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
            alt=""
            class="w-[30px] h-[30px] object-cover rounded-full border border-white absolute right-[20%] -top-3"
          />
          <img
            src="https://img.freepik.com/free-photo/handsome-guy-sweater_144627-13026.jpg"
            alt=""
            class="w-[30px] h-[30px] object-cover rounded-full border border-white absolute right-[15%] -top-3"
          />
          <img
            src="https://img.freepik.com/free-photo/portrait-hacker_23-2148165910.jpg"
            alt=""
            class="w-[30px] h-[30px] object-cover rounded-full border border-white absolute right-[10%] -top-3"
          />
          <div
            class="w-[30px] h-[30px] rounded-full border border-white bg-[#e5eaf2] text-[#424242] absolute -top-3 right-[5%] flex items-center justify-center"
          >
            <p class="text-[0.7rem] cursor-pointer">18+</p>
          </div>
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-3">
        <p class="text-[1rem] dark:text-[#abc2d3]/90 text-gray-300">
          Recommended
        </p>
        <h1
          class="text-[20px] font-bold text-black dark:text-[#abc2d3] leading-[24px] mt-0.5"
        >
          Silent Ninja Stalker
        </h1>

        <button
          class="py-2 px-4 bg-blue-500 text-white rounded-md min-w-[40%] mt-3"
        >
          Play
        </button>
      </div>
    </div>
  </div>
</template>
