<script setup>
const members = [
  {
    id: 1,
    name: "Wade Warren",
    role: "Dog Trainer",
    avatar:
        "https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg",
  },
  {
    id: 2,
    name: "Robert Fox",
    role: "President of Sales",
    avatar:
        "https://img.freepik.com/free-photo/bearded-man-listening-music-through-earphones_53876-129947.jpg",
  },
  {
    id: 3,
    name: "Jane Cooper",
    role: "Nursing Assistant",
    avatar:
        "https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg",
  },
  {
    id: 4,
    name: "Frank Esteban",
    role: "Software Tester",
    avatar:
        "https://img.freepik.com/free-photo/portrait-male-traveler-looking-camera-outdoors_23-2148148710.jpg",
  },
  {
    id: 5,
    name: "Dianne Russell",
    role: "Web Designer",
    avatar:
        "https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg",
  },
];

</script>

<template>
  <div class="p-8 mb-4 flex items-center gap-5 justify-center">
    <div
        class="w-full bg-white dark:bg-slate-800 1024px:max-w-[80%] boxShadow rounded-lg"
    >
      <div class="p-4">
        <h1 class="text-[1.5rem] dark:text-[#abc2d3] font-semibold">
          Minim dolorin
        </h1>
        <p class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">
          Minim dolor in amet nulla laboris enim dolore consequat.
        </p>
      </div>

      <div class="mt-4">
        <div
            v-for="member in members"
            :key="member.id"
            class="flex 640px:flex-row flex-col dark:hover:bg-slate-700 640px:items-center w-full justify-between py-3 hover:bg-gray-50 px-4"
        >
          <div class="flex gap-[10px]">
            <img
                :src="member.avatar"
                :alt="member.name"
                class="w-[60px] h-[60px] object-cover rounded-full"
            />
            <div class="flex flex-col">
              <h3 class="text-[1.2rem] dark:text-[#abc2d3] font-semibold">
                {{ member.name }}
              </h3>
              <span class="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500"
              >{{ member.role }}</span
              >
            </div>
          </div>
          <button
              class="py-2 w-max 640px:m-0 mx-auto px-6 bg-[#36af7b] hover:bg-[#36af7b]/90 text-white rounded-md"
          >
            Follow
          </button>
        </div>
      </div>

      <div
          class="bg-gray-100 dark:bg-slate-600 p-4 rounded-b-md flex items-center justify-between w-full"
      >
        <span class="text-[0.9rem] dark:text-[#abc2d3] text-gray-400"
        >543 students</span
        >
        <button
            class="text-[0.9rem] dark:text-[#abc2d3] hover:text-[#36af7b] text-gray-700 font-[500]"
        >
          VIEW ALL MEMBER
        </button>
      </div>
    </div>
  </div>
</template>
