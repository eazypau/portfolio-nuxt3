<template>
  <div class="w-full py-5">
    <div class="text-center py-32 flex flex-col items-center justify-center">
      <!-- previous bg colors: bg-gradient-to-b from-primary-dark via-secondary-dark to-transparent -->
      <p class="firstLineHeight text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Hey there, my name is Po</p>
      <p class="hugeHeading text-6xl font-bold text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Mechanical Engineer</p>
      <p class="text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">turned into</p>
      <p class="hugeHeading text-6xl font-bold text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Web Developer</p>
    </div>
  </div>
</template>
<script setup>
  import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
  //* maybe can try gradient text with very light bg color or with out any bg color
  //*ref https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
</script>
<style lang="scss" scoped>
  .firstLineHeight {
    min-height: 43px;
  }
  .hugeHeading {
    min-height: 78px;
  }
</style>
