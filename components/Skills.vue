<template>
  <div class="flex flex-col items-center py-24" id="skills">
    <div class="mb-4 lg:mb-8">
      <h3 class="text-3xl lg:text-4xl font-bold text-gray-800">Skills</h3>
    </div>
    <div class="flex flex-wrap justify-center">
      <p class="skillStyle" v-for="skill in skillSet" :key="skill">{{ skill }}</p>
    </div>
  </div>
</template>
<script setup>
  const skillSet = [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue",
    "Tailwind",
    "Firebase",
    "TypeScript",
    "Bootstrap",
    "Nuxt"
  ];
</script>
