<template>
  <div :class="[classBg, 'bg-cover bg-top w-96 h-56 rounded-md overflow-hidden shadow-md']">
    <div class="py-2 px-4 text-sm text-white bg-gradient-to-b from-black to-transparent">
      <p class="font-semibold underline capitalize">{{title}}</p>
      <p>{{content}}</p>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      title: String,
      content: String,
      classBg: String,
    },
    setup() {},
  });
</script>
