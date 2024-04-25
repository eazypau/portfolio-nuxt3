<script setup>
const props = defineProps({
  careerDetails: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>
<template>
  <div
    class="relative bg-white dark:bg-[#1c1c1c] border border-white hover:border-gray-600 dark:border-[#1c1c1c] dark:hover:border-white rounded shadow-lg mt-14 transition ease-out duration-300"
  >
    <div class="w-full absolute -top-10">
      <img
        :src="careerDetails.logo"
        :alt="careerDetails.companyName"
        :style="`border-color: ${careerDetails.logoBorderColor};`"
        class="w-20 rounded-full border mx-auto"
      />
    </div>
    <div class="p-5">
      <h3>{{ careerDetails.companyName }}</h3>
      <p class="duration">{{ careerDetails.duration }}</p>
      <ul class="mt-3">
        <li v-for="item in careerDetails.jobScope" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
