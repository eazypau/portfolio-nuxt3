<template>
  <section class="pt-28 pb-20 px-4 lg:px-0">
    <h2 class="subTitle mb-10 subFontFamily projectTitle">
      Projects That I Have Worked On
    </h2>
    <div
      class="px-4 md:px-0 md:w-8/12 lg:w-10/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto"
    >
      <CardsNewProject
        v-for="project in projects"
        :key="project"
        :project-details="project"
        :is-reverse="project.isReverse"
      />
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projectTitle",
      start: "-100px center",
      end: "top center",
      // markers: true,
    },
  });
  titleTl
    .addLabel("start")
    .from(".projectTitle", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".projectTitle", { opacity: 1, translateX: "0px", duration: 0.5 })
    .addLabel("end");

  gsap.set(".projectCardContainer", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".projectCardContainer", {
    start: "-130px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
  });
});
</script>
