<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="navPadding flex items-center justify-between">
    <div>
      <p class="text-2xl font-bold">EZ.</p>
    </div>
    <div class="flex font-medium">
      <a v-for="item in navigation" :key="item" :href="item.href" class="px-4">{{ item.name }}</a>
      <NuxtLink to="/blog" class="px-4">Blog</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
  const navigation = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
</script>
