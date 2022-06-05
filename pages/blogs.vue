<template>
  <NuxtLayout name="default">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2
            class="subFontFamily text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            Blog
          </h2>

          <p
            class="subFontFamily max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"
          >
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        <!-- text - end -->

        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8"
        >
          <div v-for="post in posts" :key="post.title">
            <CardsPost :post="post" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
useHead({
  titleTemplate: "My Blogs",
});
definePageMeta({
  layout: false,
});

const posts = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "laptop",
    date: "January 27, 2021",
    title: "8 High Performance Notebooks",
    href: "/blog-post/HelloReaders",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "laptop",
    date: "January 27, 2021",
    title: "8 High Performance Notebooks",
    href: "#",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "laptop",
    date: "January 27, 2021",
    title: "8 High Performance Notebooks",
    href: "#",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
    alt: "laptop",
    date: "January 27, 2021",
    title: "8 High Performance Notebooks",
    href: "#",
  },
];
</script>
