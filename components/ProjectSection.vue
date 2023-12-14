<template>
  <section class="project-section">
    <h2 class="project-title">My Personal Projects</h2>
    <div class="project-grid">
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

const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-title",
      start: "-100px center",
      end: "top center",
      // markers: true,
    },
  });
  titleTl
    .addLabel("start")
    .from(".project-title", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".project-title", { opacity: 1, translateX: "0px", duration: 0.5 })
    .addLabel("end");

  gsap.set(".project-card", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".project-card", {
    start: "-130px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
  });
});
</script>
<style>
.project-card {
  opacity: 0;
}
</style>
