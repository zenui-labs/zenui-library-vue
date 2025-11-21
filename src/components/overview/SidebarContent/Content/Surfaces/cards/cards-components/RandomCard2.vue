<script setup>
const members = [
  {
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
  },
  {
    img: "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg"
  },
  {
    img: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
  },
  {
    img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-hacker_23-2148165910.jpg"
  }
];
</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="bg-white dark:bg-slate-800 rounded-lg boxShadow relative w-full 1024px:max-w-[60%]"
    >
      <img
          src="https://img.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149002586.jpg"
          alt="image"
          class="w-full h-[200px] object-cover rounded-t-lg"
      />

      <div class="flex items-center justify-end -my-4 pr-4">
        <img
            v-for="(member, index) in members"
            :key="index"
            :src="member.img"
            alt="members"
            class="w-[30px] h-[30px] -ml-3 object-cover rounded-full border border-secondary"
        />

        <div
            class="w-[30px] h-[30px] object-cover -ml-3 rounded-full border border-secondary bg-[#e5eaf2] text-[#424242] flex items-center justify-center"
        >
          <p class="text-[0.7rem] cursor-pointer">18+</p>
        </div>
      </div>

      <div class="p-5">
        <p class="text-[1rem] dark:text-[#abc2d3]/90 text-gray-300">
          Recommended
        </p>
        <h1
            class="text-[20px] font-bold text-black dark:text-[#abc2d3] leading-[24px] mt-1.5"
        >
          Silent Ninja Stalker
        </h1>

        <button
            class="py-2 px-4 bg-[#36af7b] text-white rounded-md min-w-[40%] mt-8"
        >
          Play
        </button>
      </div>
    </div>
  </div>
</template>
