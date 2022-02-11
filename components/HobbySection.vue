<template>
  <div class="flex flex-col items-center px-4 py-24">
    <h2 class="subTitle mb-10 md:mb-16 subFontFamily">
      Some of My Favourite Activities
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <CardsHobby
        v-for="item in hobbies"
        :key="item"
        :title="item.title"
        :content="item.text"
        :class-bg="item.classBg"
        class="relative"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  hobbies: {
    type: Array,
    default: () => [],
  },
});
</script>
