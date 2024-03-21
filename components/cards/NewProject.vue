<template>
  <div
    class="project-card"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="project-img-container">
      <!-- img -->
      <!-- previously is on hover change to gif :src="hovered ? projectDetails.gifUrl : projectDetails.imageUrl" -->
      <img
        :src="projectDetails.imageUrl"
        width="535"
        height="261"
        alt="project image"
        loading="lazy"
      />
      <div :class="projectDetails.filterColor">
        <h3 :class="projectDetails.titleColor">
          {{ projectDetails.title }}
        </h3>
      </div>
    </div>
    <TransitionRoot
      :show="hovered"
      as="template"
      appear
      enter="transform transition duration-700"
      enter-from="-translate-y-full"
      enter-to="translate-y-0"
      leave="transform duration-500 transition ease-in-out"
      leave-from="translate-y-0"
      leave-to="-translate-y-full"
    >
      <div class="project-text-container">
        <!-- content -->
        <div>
          <h4>
            {{ projectDetails.title }}
          </h4>
          <p class="project-description">
            {{ projectDetails.description }}
          </p>
        </div>
        <div class="stack-and-project-links">
          <div class="tech-stack-container">
            <div v-for="(tech, index) in projectDetails.techStack" :key="tech">
              <p>
                {{ tech
                }}<span v-if="index !== projectDetails.techStack.length - 1"
                  >&#183;</span
                >
              </p>
            </div>
          </div>
          <div class="project-links">
            <a
              v-if="projectDetails.isUrl"
              :href="projectDetails.urlLink"
              target="blank"
              class="cursor-pointer"
            >
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
            <a
              v-if="projectDetails.githubLink"
              class="mx-2"
              :href="projectDetails.githubLink"
              target="blank"
              aria-label="Github"
            >
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
          </div>
        </div>
      </div>
    </TransitionRoot>
  </div>
</template>
<script setup>
import { TransitionRoot } from "@headlessui/vue";
const props = defineProps({
  // isReverse: {
  //   type: Boolean,
  //   default: false,
  // },
  projectDetails: {
    type: Object,
    default() {
      return {};
    },
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
