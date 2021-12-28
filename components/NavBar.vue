<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="z-30 navPadding flex items-center justify-between fixed top-0 w-full bg-white">
    <div>
      <p class="text-2xl font-bold">EZ.</p>
    </div>
    <div class="flex font-medium">
      <a v-for="item in navigation" :key="item" :href="item.href" class="text-lg px-4 hover:opacity-60 hover:underline">{{ item.name }}</a>
      <NuxtLink to="/blog" class="text-lg px-4 hover:opacity-60 hover:underline">Blog</NuxtLink>
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
