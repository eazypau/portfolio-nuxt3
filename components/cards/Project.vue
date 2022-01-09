<template>
  <div class="relative w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition ease-linear duration-300">
    <div
      :class="[isReverse ? 'right-0' : 'left-0', 'md:absolute md:w-8/12 md:h-full']"
      @mouseover="hovered = true"
      @mouseout="hovered = false"
    >
      <!-- img -->
      <img v-if="!hovered" :src="projectDetails.imageUrl" alt="project image" class="w-full h-full object-cover" />
      <img v-if="hovered" :src="projectDetails.gifUrl" alt="project image" class="w-full h-full object-cover" />
    </div>
    <div :class="[isReverse ? 'md:float-left' : 'md:float-right', 'px-6 py-4 flex flex-col justify-between min-h-56 md:h-96 md:w-4/12']">
      <!-- content -->
      <div>
        <h1 class="text-lg font-bold underline">{{ projectDetails.title }}</h1>
        <p>
          {{ projectDetails.description }}
        </p>
      </div>
      <div class="flex justify-between items-end max-h-9 space-x-5 mt-8 md:mt-5 lg:mt-0">
        <div class="flex flex-wrap items-center">
          <div v-for="(tech, index) in projectDetails.techStack" :key="tech">
            <p>{{ tech }}<span v-if="index !== projectDetails.techStack.length - 1" class="px-1 font-bold">&#183;</span></p>
          </div>

          <!-- <p class="px-1 font-bold"></p> -->
          <!-- <p>CSS</p>
          <p class="px-1 font-bold">&#183;</p>
          <p>JavaScript</p> -->
        </div>
        <div class="flex items-center space-x-2 pb-0.5">
          <!-- <div> -->
          <a v-if="projectDetails.isUrl" :href="projectDetails.linkUrl" class="cursor-pointer">
            <PencilAltIcon class="w-5 h-5 hover:text-gray-600" />
          </a>
          <!-- </div> -->
          <!-- <div> -->
          <a class="mx-2" :href="projectDetails.githubLink" aria-label="Github">
            <svg class="w-5 h-5 fill-current hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
              />
            </svg>
          </a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { PencilAltIcon } from "@heroicons/vue/outline";

  const props = defineProps({
    isReverse: {
      type: Boolean,
      default: false,
    },
    projectDetails: {
      type: Object,
    },
  });

  let hovered = ref(false);
</script>
<style lang="scss" scoped>
  .imgContainer {
    height: 200px;
    width: 200px;
  }
</style>
