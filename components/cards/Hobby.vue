<template>
  <div :class="[classBg, 'bg-cover bg-top w-auto md:w-96 h-56 xl:w-[550px] xl:h-[300px] rounded-md overflow-hidden shadow-md hover:shadow-2xl hover:ring hover:ring-zinc-200 transition ease-linear duration-300']">
    <div class="py-3 xl:pt-4 px-4 xl:px-5 text-sm text-white bg-gradient-to-b from-black to-transparent subFontFamily">
      <p class="xl:text-lg font-semibold xl:font-bold underline capitalize">{{title}}</p>
      <p class="xl:text-lg">{{content}}</p>
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
