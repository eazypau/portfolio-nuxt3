<template>
  <div class="bg-white pt-10 md:pt-16 pb-10 md:pb-20">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16 subFontFamily">
        <h2 class="subTitle mb-4 md:mb-6">Blog</h2>
        <p
          class="max-w-screen-md text-gray-500 md:text-lg xl:text-xl text-center mx-auto"
        >
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </div>
      <!-- text - end -->
      <div
        class="lg:w-9/12 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8"
      >
        <CardsBlogPost v-for="post in blogPosts" :key="post" :details="post" />
      </div>
    </div>
  </div>
</template>
<script setup>
const blogPosts = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "some image",
    route: "/blogpost/smth",
    date: "January 27, 2021",
    title: "8 High performance Notebooks",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "some image",
    route: "/blogpost/smth",
    date: "January 27, 2021",
    title: "8 High performance Notebooks",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "some image",
    route: "/blogpost/smth",
    date: "January 27, 2021",
    title: "8 High performance Notebooks",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "some image",
    route: "/blogpost/smth",
    date: "January 27, 2021",
    title: "8 High performance Notebooks",
  },
];
//* design extract from https://flowrift.com/c/blog/AgFW8?view=code
</script>
