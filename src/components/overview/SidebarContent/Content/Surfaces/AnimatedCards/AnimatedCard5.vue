<script setup></script>

<template>
  <div
    class="group [perspective:1000px] w-full 640px:w-[80%] 1024px:w-[60%] h-[350px]"
  >
    <div
      class="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    >
      <!-- Front Side -->
      <div
        class="absolute w-full h-full backface-hidden [backface-visibility:hidden]"
      >
        <img
          src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1728142095~exp=1728145695~hmac=01edb1d4b68f37689510f834a442804bd4fb7bf68d8f795d7d30f7cc87f79a8b&w=996"
          alt="animated_card"
          class="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
        />
        <h2
          class="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5"
        >
          Marketing Strategy
        </h2>
      </div>

      <!-- Back Side -->
      <div
        class="absolute w-full dark:bg-slate-800 h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]"
      >
        <h2
          class="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-gray-800 mb-4"
        >
          Marketing Strategy
        </h2>
        <p class="text-gray-600 dark:text-[#abc2d3]/80">
          A marketing strategy is a plan to reach target customers, promote
          products, and grow business. It uses tools like ads, social media, and
          content to build brand awareness and drive sales.
        </p>
        <a
          href="https://zenui.net"
          class="inline-block mt-4 text-blue-500 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>
