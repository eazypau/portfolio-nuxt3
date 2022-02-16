<template>
  <div class="flex flex-col items-center px-4 py-24">
    <h2 class="subTitle mb-10 md:mb-16 subFontFamily hobbyTitle">
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps({
  hobbies: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hobbyTitle",
      start: "-40px center",
      end: "top center",
      // markers: true,
    },
  });
  titleTl
    .addLabel("start")
    .from(".hobbyTitle", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".hobbyTitle", { opacity: 1, translateX: "0px", duration: 0.5 })
    .addLabel("end");

  gsap.set(".hobbyCardContainer", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".hobbyCardContainer", {
    start: "-70px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
  });
});
</script>
