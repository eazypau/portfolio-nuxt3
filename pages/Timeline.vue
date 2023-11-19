<script setup>
//const
const { timeline } = useConstants();
</script>
<template>
  <NuxtLayout name="default"
    ><TimelineSection :timeline="timeline"
  /></NuxtLayout>
</template>
