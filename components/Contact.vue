<template>
  <div
    class="px-10 pt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-20 lg:px-8 lg:py-20 xl:pt-24 2xl:pb-28 3xl:pb-32"
  >
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div
        class="flex flex-col mb-16 sm:text-center sm:mb-0 subFontFamily tracking-wide"
      >
        <a class="mb-6 sm:mx-auto">
          <div
            class="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-50"
          >
            <UserIcon class="w-9 h-9 lg:w-10 lg:h-10" />
          </div>
        </a>
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h2
            class="max-w-lg mb-6 text-3xl font-bold leading-none text-gray-900 sm:text-4xl md:mx-auto"
          >
            <span class="relative inline-block">
              <span class="relative">Get</span>
            </span>
            in touch with me
          </h2>
          <p
            class="text-base text-gray-600 md:text-lg xl:text-xl"
            style="word-spacing: 5px"
          >
            I'm seeking opportunities to work with companies that can improve my
            skills not just in tech but also to be able to learn to lead and
            teach others. If I am the person you are looking for, feel free to
            reach me through email or my contact information in my resume.
          </p>
        </div>
        <div
          class="md:space-x-3 space-y-3 md:space-y-0 flex flex-col md:flex-row justify-center"
        >
          <a
            href="/resume/my-resume.pdf"
            download="yzpo-resume"
            target="_blank"
            class="inline-flex items-center justify-center h-12 px-6 text-lg text-white font-medium bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-600 hover:to-gray-600 transition duration-200 rounded shadow-md hover:shadow-gray-400 focus:shadow-outline focus:outline-none"
          >
            <ClipboardListIcon class="w-5 h-5 mr-2" /> My Resume
          </a>
          <a
            href="mailto:poyizhi@gmail.com"
            class="inline-flex items-center justify-center h-12 px-6 text-lg text-white font-medium bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 transition duration-200 rounded shadow-md hover:shadow-gray-400 focus:shadow-outline focus:outline-none"
          >
            <MailIcon class="w-5 h-5 mr-2" /> Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { UserIcon, MailIcon, ClipboardListIcon } from "@heroicons/vue/outline";
</script>
