<script setup>
//const
const { hobbies } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://www.eazypau.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <TextLeftImgRight />
    <HobbySection :hobbies="hobbies" />
  </NuxtLayout>
</template>
