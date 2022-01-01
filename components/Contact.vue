<template>
  <!-- <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex flex-col items-center rounded-lg p-4 sm:p-8">
        <div class="mb-4 sm:mb-8">
          <h2 class="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center">
            Get the latest updates
          </h2>
          <p class="text-gray-500 text-center">Sign up for our newsletter</p>
        </div>

        <form class="w-full max-w-md flex gap-2 mb-3 sm:mb-5">
          <input
            placeholder="Email"
            class="
              w-full
              flex-1
              bg-gray-white
              text-gray-800
              placeholder-gray-400
              border border-gray-300
              focus:ring
              ring-indigo-300
              rounded
              outline-none
              transition
              duration-100
              px-3
              py-2
            "
          />

          <button
            class="
              inline-block
              bg-indigo-500
              hover:bg-indigo-600
              active:bg-indigo-700
              focus-visible:ring
              ring-indigo-300
              text-white text-sm
              md:text-base
              font-semibold
              text-center
              rounded
              outline-none
              transition
              duration-100
              px-8
              py-2
            "
          >
            Send
          </button>
        </form>

        <p class="text-gray-400 text-xs text-center">
          By signing up to our newsletter you agree to our
          <a
            href="#"
            class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
            >Term of Service</a
          >
          and
          <a
            href="#"
            class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
            >Privacy Policy</a
          >.
        </p>
      </div>
    </div>
  </div> -->
  <div class="px-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 xl:pb-32">
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
        <a href="/" class="mb-6 sm:mx-auto">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
            <!-- <svg class="w-10 h-10" stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg> -->
            <UserIcon class="w-7 h-7" />
          </div>
        </a>
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg
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
              </svg>
              <span class="relative">Get</span>
            </span>
            in touch with me
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div class="space-x-3 flex justify-center">
          <a
            href="/"
            class="
              inline-flex
              items-center
              justify-center
              h-12
              px-6
              font-medium
              tracking-wide
              transition
              duration-200
              rounded
              shadow-md
              focus:shadow-outline focus:outline-none
            "
          >
            My Resume
          </a>
          <a
            href="/"
            class="
              inline-flex
              items-center
              justify-center
              h-12
              px-6
              font-medium
              tracking-wide
              transition
              duration-200
              rounded
              shadow-md
              focus:shadow-outline focus:outline-none
            "
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { UserIcon } from "@heroicons/vue/outline";
</script>
