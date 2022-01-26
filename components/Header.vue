<template>
  <!-- <header class="relative w-full h-screen md:h-auto px-2 sm:px-2 sm:py-5 flex items-center justify-center bg-black overflow-hidden">
    <div class="absolute w-full h-full">
      <img src="/negative-space-abstract-particle-snow.webp" alt="bg" class="w-full h-full object-cover mix-blend-hard-light" />
    </div>
    <div class="relative text-center pt-28 pb-16 sm:pt-32 xl:pt-40 sm:pb-24 xl:pb-32 flex flex-col items-center justify-center"> -->
  <!-- previous bg colors: bg-gradient-to-b from-primary-dark via-secondary-dark to-transparent -->
  <!-- <p
        class="firstLineHeight text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-white to-gray-400"
      >
        Hey there
      </p>
      <p
        class="firstLineHeight text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-white to-gray-400"
      >
        my name is <span class="text-6xl">Po</span>
      </p>
      <p
        class="hugeHeading text-6xl 2xl:text-7xl font-extrabold text-center py-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        Mechanical Engineer
      </p>
      <p
        class="text-4xl 2xl:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        turned into
      </p>
      <p
        class="hugeHeading text-6xl xl:text-7xl font-extrabold text-center py-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        Web Developer
      </p>
      <p
        class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-white to-gray-400"
      >
        Previouly worked as
      </p>
      <p
        class="hugeHeading text-6xl xl:text-7xl font-extrabold text-center py-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        Mechanical Engineer
      </p>
    </div>
  </header> -->
  <header class="relative w-full headerHeight overflow-hidden flex items-top">
    <div class="absolute w-full h-full">
      <img src="/wide-laptop-gradient-bg.jpg" alt="bg" class="w-full h-full object-cover object-top" />
    </div>
    <div class="relative headerFont w-full px-5 md:px-16 xl:px-20 pt-5">
      <!-- previous bg colors: bg-gradient-to-b from-primary-dark via-secondary-dark to-transparent -->
      <!-- next version: bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-white to-gray-400 -->
      <div>
        <p class="text-3xl md:text-5xl font-bold tracking-wide">
          <span class="text-white">Hey there</span> 👋
        </p>
        <p
          class="mt-1 text-4xl md:text-6xl xl:text-6xl font-bold tracking-wide text-white"
        >
          My name is <span class="text-4xl md:text-6xl xl:text-7xl font-extrabold">Po</span>
        </p>
      </div>
      <div class="mt-2">
        <p
          class="text-4xl md:text-6xl xl:text-7xl font-bold tracking-wide text-white"
        >
          A <span class="text-4xl md:text-6xl xl:text-7xl font-extrabold">Frontend</span>
        </p>
        <p
          class="text-4xl md:text-6xl xl:text-7xl font-black py-2 text-white"
        >
          Web Developer
        </p>
      </div>
    </div>
  </header>
</template>
<script setup>
  import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
  //* maybe can try gradient text with very light bg color or with out any bg color
  //*ref https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
</script>
<style lang="scss" scoped>
  .headerHeight {
    height: calc(100vh - 64px);
  }
  .firstLineHeight {
    min-height: 35px;
    // text-shadow: 0 0 30px #fff;
  }
  .hugeHeading {
    min-height: 78px;
  }
  @media (min-width: 768px) {
    .headerHeight {
      height: calc(100vh - 70px);
    }
    .firstLineHeight {
      min-height: 43px;
    }
  }
  @media (min-width: 1280px) {
    .firstLineHeight {
      min-height: 55px;
    }
    .hugeHeading {
      min-height: 93px;
    }
  }
</style>
