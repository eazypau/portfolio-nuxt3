<template>
  <section class="pt-28 pb-20">
    <h2 class="subTitle mb-5 lg:mb-10 px-3 subFontFamily workTitle">
      Projects that I Worked On
    </h2>
    <div class="workCardLane">
      <CardsWorkCard
        v-for="project in workingProjects"
        :key="project.imgSrc"
        :image="project.image"
        :on-click-function="revealDescription"
        :content="project"
      />
    </div>
    <div
      class="flex flex-col justify-between md:w-10/12 lg:w-10/12 2xl:w-8/12 mx-6 md:mx-auto border-b-2 border-gray-100 subFontFamily overflow-hidden transition-all duration-500 ease-in-out"
      :class="{
        'pt-2 md:pt-7 h-0.5': isHeightZero,
        'pt-5 md:pt-10 h-[570px] md:h-[500px] lg:h-[530px] 2xl:h-[500px]':
          isHeightAuto,
      }"
    >
      <div class="md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-8/12 mx-auto">
        <div class="relative">
          <img
            :src="websiteContent.imageShowcase[0].src"
            :alt="websiteContent.imageShowcase[0].alt"
            :width="websiteContent.imageShowcase[0].width"
            :height="websiteContent.imageShowcase[0].height"
            class="rounded-lg shadow-lg mb-5 md:mb-9 w-9/12 md:w-7/12 2xl:w-1/2 h-auto mx-auto absolute left-3 md:left-10 xl:left-16 2xl:left-28 top-1.5 md:top-3 2xl:top-4"
            loading="lazy"
          />
          <img
            :src="websiteContent.imageShowcase[1].src"
            :alt="websiteContent.imageShowcase[1].alt"
            :width="websiteContent.imageShowcase[1].width"
            :height="websiteContent.imageShowcase[1].height"
            class="rounded-lg shadow-lg mb-5 md:mb-9 w-10/12 md:w-8/12 2xl:w-7/12 h-auto mx-auto relative z-10"
            loading="lazy"
          />
          <img
            :src="websiteContent.imageShowcase[2].src"
            :alt="websiteContent.imageShowcase[2].alt"
            :width="websiteContent.imageShowcase[2].width"
            :height="websiteContent.imageShowcase[2].height"
            class="rounded-lg shadow-lg mb-5 md:mb-9 w-9/12 md:w-7/12 2xl:w-1/2 h-auto mx-auto absolute right-3 md:right-10 xl:right-16 2xl:right-28 top-1.5 md:top-3 2xl:top-4"
            loading="lazy"
          />
        </div>
        <p class="mb-2 md:mb-4 lg:mb-5 text-center">
          {{ websiteContent.description }}
        </p>
      </div>
      <div
        class="flex items-center justify-center flex-wrap md:w-8/12 lg:w-8/12 xl:w-1/2 2xl:w-8/12 mx-auto mb-2"
      >
        <LinkIcon class="w-5 h-5 mr-1 text-gray-500" />
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
  image: {
    src: "/work/LVLY_logo.jpg",
    alt: "LVLY",
    width: "410",
    height: "117",
  },
  imageShowcase: [
    {
      src: "/work/LVLY-productpage.png",
      alt: "LVLY product page",
      width: "726",
      height: "460",
    },
    {
      src: "/work/LVLY-homepage.png",
      alt: "LVLY home page",
      width: "726",
      height: "460",
    },
    {
      src: "/work/LVLY-cartpage.png",
      alt: "LVLY cart page",
      width: "726",
      height: "460",
    },
  ],
  heading: "LVLY",
  description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion. 
    With its wide selection of blooms, LVLY is the perfect choice for those who are looking for a unique and special 
    way to show their love and appreciation. From classic roses to exotic orchids, LVLY has something for everyone. 
    Customers can choose from a variety of bouquets, vases and boxes to make sure that their gift is as special and 
    unique as they are. With same-day delivery options,  LVLY ensures that its customers can get the perfect 
    arrangement for any occasion.`,
  urls: [
    {
      name: "LVLY AU",
      link: "https://www.lvly.com.au/",
    },
    {
      name: "LVLY MY",
      link: "https://www.lvly.my/",
    },
  ],
});

const revealDescription = (content) => {
  const previousContent = { ...websiteContent.value };
  const nextContent = { ...content };

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
