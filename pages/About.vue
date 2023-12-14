<template>
  <NuxtLayout name="default">
    <TextLeftImgRight />
    <HobbySection :hobbies="hobbies" />
  </NuxtLayout>
</template>
<script setup>
//const
const { hobbies } = useConstants();
</script>
