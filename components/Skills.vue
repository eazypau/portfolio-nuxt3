<template>
  <div class="flex flex-col items-center py-16 bg-gray-100" id="skills">
    <div class="mb-8">
      <h3 class="text-3xl font-bold text-gray-800">Skills</h3>
    </div>
    <div class="flex flex-wrap">
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
  ];
</script>
