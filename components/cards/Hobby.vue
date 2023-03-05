<template>
  <div :class="[classBg, 'hobbyCardContainer']">
    <div>
      <p>
        {{ title }}
      </p>
      <p>{{ content }}</p>
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
