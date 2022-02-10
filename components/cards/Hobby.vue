<template>
  <div :class="[classBg, 'hobbyCardContainer']">
    <div
      class="py-3 xl:pt-4 px-4 xl:px-5 text-sm text-white bg-gradient-to-b from-black to-transparent subFontFamily"
    >
      <p class="xl:text-lg font-semibold xl:font-bold underline capitalize">
        {{ title }}
      </p>
      <p class="xl:text-lg">{{ content }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "title",
    },
    content: {
      type: String,
      default: "content",
    },
    classBg: {
      type: String,
      default: "bg-gray-200",
    },
  },
  setup() {},
});
</script>
