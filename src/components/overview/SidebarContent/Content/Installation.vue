<script setup>
import {useHead} from '@vueuse/head'
import BlocksFooter from '@/Shared/Block/BlocksFooter.vue'

useHead({
  title: 'Get-Started - Installation'
})
</script>

<template>
  <div class="w-full 640px:pl-[2.5rem] px-6 640px:px-10">
    <h1 class="text-[2rem] 425px:text-[2.7rem] font-[600] text-brandColor">
      Installation Guide
    </h1>

    <div class="mt-3 w-full 1024px:w-[80%]">
      <p class="text-[1rem] text-gray-900 dark:text-darkSubTextColor">
        ZenUI Library Vue is designed to be <b>easy to use</b> with
        <b>no installation process required</b>. Unlike many libraries that
        need to be installed via npm or similar package managers, ZenUI
        components can be <b>directly copied and pasted</b> into your existing
        project. This means there is <b>no need</b> to install ZenUI itself.
      </p>

      <p class="mt-3 text-[1rem] text-gray-900 dark:text-darkSubTextColor">
        However, for ZenUI components to work correctly, your project needs to
        be set up with specific tools and frameworks like <b>Tailwind CSS</b>,
        <b>Vue3 (composition API)</b>. These are the fundamental technologies
        that power the ZenUI components, as they are built using Tailwind CSS
        for styling and compatible with popular frameworks like Vue.
      </p>
    </div>

    <div class="w-full 1024px:w-[80%] mt-6">
      <h3 class="text-[1.5rem] font-[600] text-brandColor">
        Why Doesn’t ZenUI Require Installation?
      </h3>
      <p class="mt-3 text-[1rem] text-gray-900 dark:text-darkSubTextColor">
        ZenUI is a library of pre-built components that can be
        directly inserted into your project’s code. It doesn’t function as a
        JavaScript package that needs installation. Instead, you can copy the
        component’s HTML and Tailwind CSS classes from ZenUI and immediately use
        them in your application, making it incredibly flexible and easy to
        integrate.
      </p>
    </div>

    <div
        class="mt-6 w-full 1024px:w-[80%] text-[1rem] text-gray-900 bg-orange-50 p-[15px] rounded-[8px] border-l-[5px] border-orange-400 dark:bg-slate-800 dark:text-darkSubTextColor dark:border-slate-600"
    >
      Some ZenUI components may include icons. To ensure these components
      display correctly, you will need to install the <a href="https://icon-sets.iconify.design/" target="_blank"
                                                         class="font-bold hover:underline">@iconify/vue</a>
      package
      if you're using Vue. This package provides a wide range of icons that
      can be easily integrated into your components. You can install it via npm
      <span
          class="py-1 px-3 bg-orange-100 dark:bg-slate-900 rounded-md text-[0.9rem] font-mono"
      >npm install @iconify/vue</span
      >
    </div>

    <div class="mt-6 w-full 1024px:w-[80%]">
      <h3 class="text-[1.5rem] font-[600] text-brandColor">Project Requirements:</h3>
      <p class="mt-3 dark:text-darkSubTextColor">
        While ZenUI doesn’t have its own installation, you’ll need to ensure
        that <b>your project is already configured</b> with the necessary tools,
        depending on the type of project you're working on. Below are the common
        setups you’ll need for ZenUI components:
      </p>
      <ul class="list-disc ml-8 mt-4 flex dark:text-darkSubTextColor flex-col gap-[15px]">
        <li>
          <b>Tailwind CSS Project:</b>
          <span>
            If you're building a project with plain HTML or any framework,
            ensure that you have Tailwind CSS installed for styling. ZenUI
            components are styled using Tailwind CSS, so having it set up is
            essential.
          </span> <br/>
          <a href='https://tailwindcss.com/docs/installation/tailwind-cli' class='text-brandColor hover:underline'>Tailwind
            CSS Installation Guide</a>
        </li>
        <li>
          <b>Vue Project with Tailwind CSS:</b>
          <span>
            If you're using Vue, Tailwind CSS should be installed and
            configured in your Vue project. ZenUI components can be used
            directly in your Template files once Tailwind is set up.
          </span>
          <br/>
          <a href='https://tailwindcss.com/docs/installation/using-vite'
             class='text-brandColor hover:underline'>React + Tailwind CSS Setup
            Guide</a>
        </li>
      </ul>
    </div>

    <div
        class="mt-6 w-full 1024px:w-[80%] text-[1rem] text-gray-900 bg-brandColor/10 p-[15px] rounded-[8px] border-l-[5px] dark:bg-slate-800 dark:text-darkSubTextColor dark:border-slate-600 border-brandColor"
    >
      By following the setup guides for Tailwind CSS, Vue3 (composition API), you'll
      be ready to use ZenUI components right away!
    </div>

    <div class="w-full 1024px:w-[80%]">
      <BlocksFooter
          back-url="/docs/overview"
          back-name="overview"
          forward-url="/components/all-components"
          forward-name="All components"
      />
    </div>
  </div>
</template>
