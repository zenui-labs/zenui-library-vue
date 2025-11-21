<script setup>
import {Icon} from "@iconify/vue";

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
        class="w-full 1024px:w-[60%] bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4"
    >
      <div class="w-full flex items-center justify-between mb-4">
        <div class="flex items-center dark:text-[#abc2d3] gap-2">
          <Icon
              icon="ri:team-fill"
              class="text-[2rem] p-2 dark:text-[#abc2d3] rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"
          />
          <h3>Teams</h3>
        </div>

        <Icon
            icon="bi:three-dots-vertical"
            class="text-[2rem] p-2 dark:text-[#abc2d3] rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"
        />
      </div>

      <img
          src="https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg"
          alt=""
          class="rounded-lg"
      />

      <h2 class="font-[600] dark:text-[#abc2d3] text-[1.3rem] py-4">
        Simple Design
      </h2>

      <div class="w-full flex items-center justify-between">
        <button
            class="py-1 px-4 dark:text-[#abc2d3] bg-[#3b9df828] text-[#2367a7] rounded"
        >
          Design
        </button>

        <div class="flex items-center justify-center">
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
      </div>
    </div>
  </div>
</template>
