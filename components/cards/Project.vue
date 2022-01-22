<template>
  <div class="relative w-full rounded-lg border-gray-200 overflow-hidden shadow-md shadow-gray-400 hover:shadow-xl hover:shadow-gray-500 transition ease-out duration-300">
    <div
      :class="[isReverse ? 'right-0' : 'left-0', 'md:absolute md:w-8/12 md:h-full']"
      @mouseover="hovered = true"
      @mouseout="hovered = false"
    >
      <!-- img -->
      <img :src="hovered ? projectDetails.gifUrl : projectDetails.imageUrl" alt="project image" class="w-full h-full object-cover" />
      <!-- <img v-if="hovered" :src="projectDetails.gifUrl" alt="project image" class="w-full h-full object-cover" /> -->
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
          <a v-if="projectDetails.isUrl" :href="projectDetails.urlLink" target="blank" class="cursor-pointer">
            <!-- <PencilAltIcon class="w-6 h-6 hover:text-gray-600" /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-arrow-up-right-square-fill w-5 h-5 hover:text-gray-600 rounded"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"
              />
            </svg>
          </a>
          <!-- </div> -->
          <!-- <div> -->
          <a class="mx-2" :href="projectDetails.githubLink" target="blank" aria-label="Github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-github w-5 h-5 hover:text-gray-600"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
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
