<template>
  <div
    class="contactSectionHeight px-10 pt-24 sm:pb-16 md:pb-0 md:pt-16 flex items-center justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 xl:pb-4 2xl:pb-0"
  >
    <div class="max-w-xl sm:mx-auto lg:max-w-3xl xl:max-w-5xl">
      <div
        class="flex flex-col lg:flex-row mb-16 sm:text-center sm:mb-0 lg:gap-5 xl:gap-10 subFontFamily tracking-wide"
      >
        <div class="mb-10 md:mb-7 mt-3 sm:mx-auto xl:w-5/12">
          <!-- <div
            class="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-50"
          >
            <UserIcon class="w-9 h-9 lg:w-10 lg:h-10" />
          </div> -->
          <div class="w-1/2 sm:w-1/4 lg:w-64 xl:w-full mx-auto">
            <img
              src="/undraw_personal_email.svg"
              alt="personal email svg"
              width="890"
              height="730"
            />
          </div>
        </div>
        <div>
          <div
            class="max-w-xl mb-10 md:mx-auto sm:text-center lg:text-left lg:max-w-2xl xl:max-w-3xl md:mb-12 xl:mb-8 2xl:mb-12"
          >
            <h3
              class="max-w-lg lg:max-w-3xl mb-6 text-3xl font-extrabold leading-none text-gray-900 sm:text-4xl xl:text-5xl 2xl:text-6xl md:mx-auto"
            >
              Get in touch with me
            </h3>
            <p
              class="text-base text-justify text-gray-600 md:text-lg 2xl:text-xl"
              style="word-spacing: 5px"
            >
              I'm seeking opportunities to work with companies that can improve
              my skills not just in tech but also to be able to learn to lead
              and teach others. If I am the person you are looking for, feel
              free to reach me through email or my contact information in my
              resume.
            </p>
          </div>
          <div
            class="md:space-x-3 space-y-3 md:space-y-0 flex flex-col md:flex-row justify-center lg:justify-start"
          >
            <a
              href="/resume/my-resume.pdf"
              download="resume_poyizhi"
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
  </div>
</template>
<script setup>
import { UserIcon, MailIcon, ClipboardListIcon } from "@heroicons/vue/outline";
</script>
