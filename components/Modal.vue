<template>
  <Transition>
    <div
      v-if="isOpen"
      class="modal-container"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="modal-bg"></div>

      <div class="modal-fixed-wrapper">
        <div class="modal-size">
          <div class="modal">
            <XIcon class="x-icon" @click="closeModal" />
            <!-- title -->
            <p class="modal-heading">
              {{ modalContent?.heading }}
            </p>
            <hr />
            <!-- details -->
            <div class="modal-content-wrapper">
              <div
                class="lg:flex justify-between gap-10 lg:px-2 lg:mb-7 xl:mb-10"
              >
                <p class="text-sm lg:text-base lg:w-1/2">
                  <!-- left content -->
                  {{ modalContent?.description }}
                </p>

                <div class="lg:flex flex-col justify-between lg:w-1/2">
                  <div class="mt-3 lg:mt-0">
                    <p class="text-sm lg:text-base">Tech Stack:</p>
                    <p class="flex flex-wrap">
                      <span
                        v-for="(tech, index) in modalContent?.techStack"
                        :key="tech"
                        class="text-sm lg:text-base"
                        >{{ tech
                        }}<span
                          v-if="index !== modalContent?.techStack.length - 1"
                          >&nbsp;&#183;&nbsp;</span
                        ></span
                      >
                    </p>
                  </div>

                  <div class="flex items-center flex-wrap mt-3 lg:mt-0">
                    <LinkIcon class="w-4 h-4 mr-1 text-gray-500" />
                    <p
                      v-for="(url, index) in modalContent?.urls"
                      :key="url"
                      class="flex text-sm lg:text-base"
                    >
                      <a
                        class="block text-center text-gray-600 underline"
                        :href="url.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >{{ url.name }}</a
                      >
                      <span v-if="index !== modalContent?.urls.length - 1"
                        >&nbsp;&#183;&nbsp;</span
                      >
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div class="space-y-3 lg:space-y-12 px-2 pb-5">
                <!-- right scrollable content -->
                <div
                  v-for="imageShowcase in modalContent?.imageShowcase"
                  :key="imageShowcase.alt"
                >
                  <p
                    class="uppercase text-center text-sm lg:text-base mb-1 font-semibold"
                  >
                    {{ imageShowcase.title }}
                  </p>
                  <img
                    :src="imageShowcase.src"
                    :alt="imageShowcase.alt"
                    class="shadow-md rounded-md"
                    :title="imageShowcase.title"
                  />
                </div>
              </div>
            </div>
            <!-- list of images of work done -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { XIcon, LinkIcon } from "@heroicons/vue/outline";
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  closeModal: {
    type: Function,
    default: () => {
      return "Default function";
    },
  },
  modalContent: {
    type: Object,
    default: () => {},
  },
});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
