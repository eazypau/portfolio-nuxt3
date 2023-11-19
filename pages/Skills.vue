<script setup>
//const
const { skillWithLogo } = useConstants();
</script>
<template>
  <NuxtLayout name="default">
    <Skills :skill-set="skillWithLogo" />
  </NuxtLayout>
</template>
