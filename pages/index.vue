<template>
  <div>
    <Header />
    <TextLeftImgRight />
    <TextRightImgLeft />
    <Skills />
    <!-- Need project section -->
    <div class="flex flex-col items-center py-16 bg-gray-100">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Some of My Favourite Activities</h2>
      <div class="w-11/12 flex space-x-3">
          <CardsHobby
        v-for="item in hobbies"
        :key="item"
        :title="item.title"
        :content="item.text"
        :classBg="item.classBg"
      />
      </div>
    </div>
    <Contact />
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
</script>
