<script setup>
//const
const { timeline } = useConstants();
useHead({
  title: "Web Developer Portfolio | Career Journey",
  meta: [
    {
      property: "og:site_name",
      content: "Web Developer Portfolio | Career Journey",
    },
    {
      property: "og:site",
      content: "https://www.eazypau.com/timeline",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default"
    ><TimelineSection :timeline="timeline"
  /></NuxtLayout>
</template>
