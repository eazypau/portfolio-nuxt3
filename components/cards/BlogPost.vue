<template>
  <a :href="details.route" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
    <img
      :src="details.imgUrl"
      loading="lazy"
      :alt="details.alt"
      class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
    />

    <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

    <div class="relative p-4 mt-auto">
      <span class="block text-gray-200 text-sm">{{ details.date }}</span>
      <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">{{ details.title }}</h2>

      <span class="text-indigo-300 font-semibold">Read more</span>
    </div>
  </a>
</template>
<script>
  export default {
    props: ["details"],
    setup(props) {
      const router = useRouter();
      const goToBlogPost = () => {
        router.push(props.details.route);
      };
      return { goToBlogPost };
    },
  };
</script>
