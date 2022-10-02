<template>
  <section id="skills" class="flex flex-col items-center pt-28 pb-20 lg:py-28">
    <div class="mb-4 lg:mb-8">
      <h3 class="subTitle subFontFamily techTitle">Technologies & Framework</h3>
    </div>
    <ul class="flex flex-wrap justify-center lg:w-10/12 2xl:w-8/12 3xl:w-7/12">
      <li
        v-for="skill in skillSet"
        :key="skill"
        class="skillStyle subFontFamily"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const props = defineProps({
  skillSet: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".techTitle",
      start: "-50px center",
      end: "top center",
      // markers: true,
      // toggleActions: "restart pause reverse pause",
      // scrub: 1, // scrub is use set the amount of time to catch up, it kinda looks the scroll animation with ur scroller
    },
  });
  titleTl
    .addLabel("start")
    .from(".techTitle", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".techTitle", { opacity: 1, translateX: "0px", duration: 0.5 })
    .addLabel("end");

  gsap.set(".skillStyle", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".skillStyle", {
    start: "-100px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
  });
});
</script>
<style>
.skillStyle:hover {
  transform: translateY(-0.5rem) !important;
}
</style>
