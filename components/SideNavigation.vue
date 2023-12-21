<template>
  <div class="max-w-full overflow-x-hidden">
    <NuxtLink
      v-if="showLeftLink"
      :href="leftLink"
      class="opacity-50 fixed left-0 top-1/2 z-10 lg:hidden"
    >
      <ChevronLeftIcon class="w-10 h-10 text-white" />
    </NuxtLink>
    <NuxtLink
      v-if="showRightLink"
      :href="rightLink"
      class="opacity-50 fixed right-0 top-1/2 z-10 lg:hidden"
    >
      <ChevronRightIcon class="w-10 h-10 text-white" />
    </NuxtLink>
    <slot />
  </div>
</template>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
defineProps({
  leftLink: {
    type: String,
    default: "",
  },
  showLeftLink: {
    type: Boolean,
    default: true,
  },
  rightLink: {
    type: String,
    default: "",
  },
  showRightLink: {
    type: Boolean,
    default: true,
  },
});
</script>
