<template>
  <section class="pt-28 pb-20 px-0 lg:px-0">
    <h2 class="subTitle mb-5 lg:mb-10 subFontFamily workTitle">My Works</h2>
    <div class="workCardLane">
      <CardsWorkCard
        v-for="project in workingProjects"
        :key="project.imgSrc"
        :img-src="project.imgSrc"
        :img-alt="project.imgAlt"
        :on-click-function="revealDescription"
        :content="project"
      />
    </div>
    <div
      class="flex flex-col justify-between md:w-10/12 lg:w-10/12 2xl:w-8/12 mx-6 md:mx-auto border-b-2 border-gray-100 subFontFamily overflow-hidden transition-all duration-500 ease-in-out"
      :class="{
        'pt-7 h-0.5': isHeightZero,
        'pt-10 h-[410px] md:h-[360px] lg:h-80 2xl:h-72': isHeightAuto,
      }"
    >
      <div class="md:w-8/12 lg:w-8/12 xl:w-1/2 2xl:w-8/12 mx-auto">
        <p class="text-xl font-semibold text-center mb-2">
          {{ websiteContent.heading }}
        </p>
        <p class="mb-2 md:mb-4 lg:mb-5 text-center">
          {{ websiteContent.description }}
        </p>
      </div>
      <div
        class="flex items-center justify-center flex-wrap md:w-8/12 lg:w-8/12 xl:w-1/2 2xl:w-8/12 mx-auto mb-2"
      >
        <LinkIcon class="w-5 h-5 mr-1 text-gray-500" />
        <!-- <a
          class="block text-center text-gray-400 underline"
          :href="websiteContent.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ websiteContent.url }}</a
        > -->
        <p v-for="(url, index) in websiteContent.urls" :key="url" class="flex">
          <a
            class="block text-center text-gray-400 underline"
            :href="url.link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ url.name }}</a
          >
          <span v-if="index !== websiteContent.urls.length - 1"
            >&nbsp;&#183;&nbsp;</span
          >
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkIcon } from "@heroicons/vue/outline";
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

const isHeightZero = ref(true);
const isHeightAuto = ref(false);
const websiteContent = ref({
  heading: "",
  description: "",
  url: "",
});
// const generalDropdownStyle =
//   "pt-10 px-4 md:px-0 md:w-8/12 lg:w-10/12 xl:w-1/2 2xl:w-8/12 mx-auto subFontFamily overflow-hidden transition-all duration-1000 ease-in-out";

const revealDescription = (content) => {
  const previousContent = { ...websiteContent.value };
  const nextContent = { ...content };
  // websiteContent.value = nextContent;

  if (previousContent.heading === nextContent.heading && isHeightAuto.value) {
    isHeightAuto.value = false;
    isHeightZero.value = true;
    return;
  }
  if (previousContent.heading === nextContent.heading && isHeightZero.value) {
    isHeightAuto.value = true;
    isHeightZero.value = false;
    return;
  }
  if (previousContent.heading !== nextContent.heading && isHeightZero.value) {
    websiteContent.value = nextContent;
    isHeightAuto.value = true;
    isHeightZero.value = false;
    return;
  }
  if (previousContent.heading !== nextContent.heading && isHeightAuto.value) {
    isHeightAuto.value = false;
    isHeightZero.value = true;
    setTimeout(() => {
      websiteContent.value = nextContent;
      isHeightAuto.value = true;
      isHeightZero.value = false;
    }, 500);
    return;
  }
};
</script>
