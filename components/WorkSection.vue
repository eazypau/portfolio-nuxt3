<template>
  <section class="pt-28 pb-20 px-4 lg:px-0">
    <h3 class="subTitle mb-10 subFontFamily workTitle">My Works</h3>
    <div
      class="px-4 md:px-0 md:w-8/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 flex justify-around gap-10 flex-wrap md:flex-nowrap mx-auto"
    >
      <CardsWorkCard
        v-for="project in workingProjects"
        :key="project.imgSrc"
        :img-src="project.imgSrc"
        :img-alt="project.imgAlt"
      />
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const props = defineProps({
  workingProjects: {
    type: Array,
    default: () => [],
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

  gsap.set(".workCardContainer", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".workCardContainer", {
    start: "-130px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
  });
});
</script>
