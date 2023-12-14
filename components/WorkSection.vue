<template>
  <section id="works">
    <h2 class="workTitle">Career Highlights</h2>
    <div class="work-card-lane">
      <CardsWorkCard
        v-for="project in workingProjects"
        :key="project.imgSrc"
        :image="project.image"
        :on-click-function="onClickFunction"
        :content="project"
      />
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  workingProjects: {
    type: Array,
    default: () => [],
  },
  onClickFunction: {
    type: Function,
    default: () => {
      return "Default function";
    },
  },
});
onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".workTitle",
      start: "-100px center",
      end: "top center",
      // markers: true,
    },
  });
  titleTl
    .addLabel("start")
    .from(".workTitle", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".workTitle", { opacity: 1, translateX: "0px", duration: 0.5 })
    .addLabel("end");

  gsap.set(".work-card-container", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".work-card-container", {
    start: "-250px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
  });
});
</script>
<style>
.work-card-container {
  opacity: 0;
}
</style>
