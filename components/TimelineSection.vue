<template>
  <section id="timeline">
    <h2 class="timeline-title">My Career Journey</h2>
    <ul>
      <li v-for="(item, index) in timeline" class="timeline-item">
        <div v-if="index !== 0" class="line"></div>
        <div class="timeline-card">
          <div>
            <h3>
              {{ item.title }}
            </h3>
            <span><CalendarIcon class="w-5 h-5" />{{ item.date }}</span>
          </div>
          <p>
            {{ item.description }}
          </p>
          <a v-if="item.link" :href="item.link.url" target="_blank">
            {{ item.link.text }} <LinkIcon class="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { CalendarIcon, LinkIcon } from "@heroicons/vue/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  timeline: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline-title",
      start: "-60px center",
      end: "top center",
      // markers: true,
    },
  });
  titleTl
    .addLabel("start")
    .from(".timeline-title", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".timeline-title", { opacity: 1, translateX: "0px", duration: 0.5 })
    .addLabel("end");

  gsap.set(".timeline-item", { opacity: 0, x: -20 });
  ScrollTrigger.batch(".timeline-item", {
    start: "-150px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, x: 0, autoAlpha: 1, stagger: 0.15 }),
  });
});
</script>
