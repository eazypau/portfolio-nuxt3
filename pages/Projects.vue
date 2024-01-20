<script setup>
//const
const { projects } = useConstants();
useHead({
  title: "Web Developer Portfolio | Personal Projects",
  meta: [
    {
      property: "og:title",
      content: "Web Developer Portfolio | Personal Projects",
    },
    {
      property: "og:site_name",
      content: "Web Developer Portfolio | Personal Projects",
    },
    {
      property: "og:site",
      content: "https://www.eazypau.com/projects",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <ProjectSection :projects="projects" />
  </NuxtLayout>
</template>
