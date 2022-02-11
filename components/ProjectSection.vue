<template>
  <div class="pt-28 pb-20 px-4 lg:px-0">
    <h2 class="subTitle mb-10 subFontFamily">Projects That I Have Worked On</h2>
    <!-- <div class="lg:w-10/12 xl:w-9/12 2xl:w-8/12 space-y-7 md:space-y-10 lg:space-y-14 2xl:space-y-20 mx-auto">
				<CardsNewProject v-for="project in projects" :key="project" :project-details="project" :is-reverse="project.isReverse" />
			</div> -->
    <div
      class="px-4 md:px-0 md:w-8/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto"
    >
      <CardsNewProject
        v-for="project in projects"
        :key="project"
        :project-details="project"
        :is-reverse="project.isReverse"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});
</script>
