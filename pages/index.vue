<template>
  <div class="pt-10">
    <Header id="top" />
    <div>
      <div class="w-8/12 py-20 mx-auto" id="about">
        <TextLeftImgRight />
        <TextRightImgLeft />
      </div>
    </div>

    <!-- use dark bg color below -->
    <Skills id="skills" />
    <div class="py-20" id="projects">
      <h2 class="text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-10">Projects That I Have Worked On</h2>
      <div class="px-5 lg:w-10/12 xl:w-9/12 2xl:w-8/12 space-y-7 2xl:space-y-10 mx-auto">
        <CardsProject />
        <CardsProject />
        <CardsProject />
        <CardsProject />
        <CardsProject />
      </div>
    </div>
    <!-- Need project section -->
    <div class="flex flex-col items-center py-24">
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-16">Some of My Favourite Activities</h2>
      <div class="px-5 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10">
        <CardsHobby v-for="item in hobbies" :key="item" :title="item.title" :content="item.text" :classBg="item.classBg" class="relative" />
      </div>
    </div>
    <!-- use dark bg color above -->
    <Contact id="contact" />
  </div>
</template>
<script setup>
  const hobbies = [
    {
      title: "Drink Black tea",
      text: "One of my favourite beverage",
      classBg: "bg-tea",
    },
    {
      title: "Blog Writing",
      text: "To pen down my thoughts",
      classBg: "bg-blog",
    },
    {
      title: "Grocery Shopping",
      text: "Buy some of my favourite snacks",
      classBg: "bg-grocer",
    },
    {
      title: "Listening to music",
      text: "Recent favourites: Alec Benjamin, HONNE and Yoasobi",
      classBg: "bg-music",
    },
  ];
  // TODO create a draft design template
  // testing to see whether add todo action is working after the push
  // labels: testing
  // assignees: eazypau
  // milestone: 1
  // TODO pick the right font family
  // testing 2nd commit to add new todo
  // labels: testing
  // assignees: eazypau
  // milestone: 1
</script>
