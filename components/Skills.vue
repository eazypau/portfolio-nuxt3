<template>
  <section id="skills" class="flex flex-col items-center pt-28 pb-20 lg:py-28">
    <div class="mb-4 lg:mb-8">
      <h3 class="subTitle subFontFamily">Technologies & Framework</h3>
    </div>
    <div class="flex flex-wrap justify-center lg:w-10/12 2xl:w-8/12 3xl:w-7/12">
      <p
        v-for="skill in skillSet"
        :key="skill"
        class="skillStyle subFontFamily"
      >
        {{ skill }}
      </p>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  skillSet: {
    type: Array,
    default: () => [],
  },
});
</script>
