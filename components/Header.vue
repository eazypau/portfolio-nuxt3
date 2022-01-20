<template>
  <header class="relative w-full h-screen sm:h-auto sm:px-2 sm:py-5 flex items-center justify-center bg-black overflow-hidden">
    <div class="absolute ">
      <img src="/negative-space-abstract-particle-snow.jpg" alt="bg" class="w-full h-full object-cover mix-blend-hard-light">
    </div>
    <div class="relative text-center sm:pt-32 xl:pt-40 sm:pb-24 xl:pb-32 flex flex-col items-center justify-center">
      <!-- previous bg colors: bg-gradient-to-b from-primary-dark via-secondary-dark to-transparent -->
      <p
        class="
          firstLineHeight
          text-3xl
          md:text-4xl
          2xl:text-5xl
          font-bold
          bg-clip-text
          text-transparent
          bg-gradient-to-t
          from-gray-400
          via-white
          to-gray-400
        "
      >
        Hey there, <br class="sm:hidden"> my name is Po
      </p>
      <p
        class="
          hugeHeading
          text-5xl
          md:text-6xl
          2xl:text-7xl
          font-extrabold
          text-center
          py-2
          bg-clip-text
          text-transparent
          bg-gradient-to-t
          from-gray-400
          via-white
          to-gray-400
        "
      >
        Mechanical Engineer
      </p>
      <p
        class="
          text-3xl
          md:text-4xl
          2xl:text-5xl
          font-bold
          text-center
          bg-clip-text
          text-transparent
          bg-gradient-to-t
          from-gray-400
          via-white
          to-gray-400
        "
      >
        turned into
      </p>
      <p
        class="
          hugeHeading
          text-5xl
          md:text-6xl
          2xl:text-7xl
          font-extrabold
          text-center
          py-2
          bg-clip-text
          text-transparent
          bg-gradient-to-t
          from-gray-400
          via-white
          to-gray-400
        "
      >
        Web Developer
      </p>
    </div>
  </header>
</template>
<script setup>
  import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
  //* maybe can try gradient text with very light bg color or with out any bg color
  //*ref https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
</script>
<style lang="scss" scoped>
  .firstLineHeight {
    min-height: 35px;
    // text-shadow: 0 0 30px #fff;
  }
  .hugeHeading {
    min-height: 78px;
  }
  @media (min-width: 768px) {
    .firstLineHeight {
      min-height: 43px;
    }
  }
  @media (min-width: 1580px) {
    .firstLineHeight {
      min-height: 55px;
    }
    .hugeHeading {
      min-height: 93px;
    }
  }
</style>
