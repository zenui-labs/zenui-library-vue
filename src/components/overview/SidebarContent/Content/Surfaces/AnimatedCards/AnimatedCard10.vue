<script setup></script>

<template>
  <div
    class="w-full 640px:w-[80%] 1024px:w-[60%] shadow-md h-[350px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group"
  >
    <img
      src="https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498366.jpg?t=st=1728230691~exp=1728234291~hmac=4670c1df1a791e3506bdebcdc7aecc5d09bfd2ed8fff51551b39ad3f5f237899&w=996"
      alt="animated_card"
      class="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"
    />

    <div
      class="w-full h-full absolute top-0 left-0 backdrop-blur-lg flex items-center justify-center flex-col px-[20px] opacity-0 transition-all duration-300 group-hover:opacity-100"
    >
      <h2
        class="text-[1.5rem] text-white font-bold text-center leading-[30px] capitalize"
      >
        Beautiful rainbow in nature
      </h2>
      <p class="text-[1rem] text-white text-center mt-3 opacity-85">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet
      </p>
    </div>
  </div>
</template>
