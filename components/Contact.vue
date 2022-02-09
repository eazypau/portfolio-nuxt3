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
              <!-- <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
              </svg> -->
              <!-- <IconsUserSvg class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block" /> -->
              <span class="relative">Get</span>
            </span>
            in touch with me
          </h2>
          <p
            class="text-base text-gray-500 md:text-lg xl:text-2xl"
            style="word-spacing: 5px"
          >
            I'm seeking out opportunities to work with companies that are able
            to improve my skills not just in tech but also to be able to lead
            and teach others. If I am the person you are looking for, feel free
            to reach me through email or my contact information in my resume.
          </p>
        </div>
        <div
          class="md:space-x-3 space-y-3 md:space-y-0 flex flex-col md:flex-row justify-center"
        >
          <a
            href="/resume/my-resume.pdf"
            download="my-resume"
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
