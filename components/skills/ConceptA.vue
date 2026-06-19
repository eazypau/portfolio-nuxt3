<template>
  <section
    class="concept-a min-h-screen max-w-full overflow-hidden py-16 px-8 bg-gray-50 text-gray-900 dark:bg-[#0f0f0f] dark:text-white"
  >
    <h2
      class="text-[clamp(1.8rem,4vw,3rem)] font-bold text-center mb-10 tracking-tight"
    >
      Technologies & Frameworks
    </h2>

    <div class="flex flex-wrap justify-center gap-2 mb-12">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="[
          'px-5 py-2 rounded-full border-[1.5px] bg-transparent text-sm cursor-pointer transition-all duration-200',
          activeCategory === cat
            ? 'bg-gray-900 text-blue-500 border-gray-900 font-semibold dark:bg-white dark:text-[#0f0f0f] dark:border-white'
            : 'border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700 dark:border-[#333] dark:text-[#888] dark:hover:border-[#666] dark:hover:text-[#ccc]',
        ]"
        @click="switchCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <div
      ref="gridRef"
      class="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-5 max-w-[900px] mx-auto"
    >
      <div
        v-for="skill in filteredSkills"
        :key="skill.name"
        class="card bg-white border border-gray-200 rounded-2xl py-6 px-4 flex flex-col items-center gap-3 cursor-pointer will-change-transform transition-[border-color,box-shadow] duration-200 hover:border-gray-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:bg-[#1a1a1a] dark:border-[#2a2a2a] dark:hover:border-[#444] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(255,255,255,0.04)]"
        @mousemove="onMouseMove($event, skill.name)"
        @mouseleave="onMouseLeave(skill.name)"
        :ref="(el) => setCardRef(el, skill.name)"
      >
        <div class="flex flex-col items-center gap-3">
          <div class="w-14 h-14 flex items-center justify-center">
            <img
              v-if="skill.imgUrl"
              :src="skill.imgUrl"
              :alt="skill.alt"
              class="w-full h-full object-contain"
            />
            <div
              v-else-if="skill.svgCode"
              v-html="skill.svgCode"
              class="w-14 h-14 border-black border rounded-lg"
            ></div>
            <div
              v-else
              class="w-14 h-14 rounded-xl flex items-center justify-center text-[1.75rem] font-bold"
              :class="skill.bgColor"
            >
              <span>{{ skill.initial }}</span>
            </div>
          </div>
          <p
            class="text-[0.8rem] text-gray-500 dark:text-[#aaa] text-center m-0"
          >
            {{ skill.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";

const categories = [
  "All",
  "Frontend",
  "UI & Styling",
  "Backend & Data",
  "Tools & CMS",
];
const activeCategory = ref("All");

const allSkills = [
  {
    imgUrl: "/logos/html5-original.svg",
    name: "HTML",
    alt: "HTML logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/css3-plain-wordmark.svg",
    name: "CSS",
    alt: "CSS logo",
    category: "UI & Styling",
  },
  {
    imgUrl: "/logos/javascript-original.svg",
    name: "JavaScript",
    alt: "JavaScript logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/react-original.svg",
    name: "React",
    alt: "React logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/nextjs-original.svg",
    name: "NextJS",
    alt: "NextJs logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/typescript-original.svg",
    name: "TypeScript",
    alt: "TypeScript logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/vuejs-original.svg",
    name: "Vue",
    alt: "Vue logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/nuxtjs-original.svg",
    name: "NuxtJS",
    alt: "NuxtJS logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/jquery-original.svg",
    name: "jQuery",
    alt: "jQuery logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/Chart.js_logo.svg.png",
    name: "Chart.js",
    alt: "ChartJs logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/redux-original.svg",
    name: "Redux",
    alt: "Redux logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/tailwindcss-plain.svg",
    name: "TailwindCSS",
    alt: "TailwindCSS logo",
    category: "UI & Styling",
  },
  {
    imgUrl: "/logos/materialui-original.svg",
    name: "Material UI",
    alt: "Material UI logo",
    category: "UI & Styling",
  },
  {
    imgUrl: "/logos/nodejs-original.svg",
    name: "NodeJS",
    alt: "NodeJS logo",
    category: "Backend & Data",
  },
  {
    imgUrl: "/logos/firebase-plain.svg",
    name: "Firebase",
    alt: "Firebase logo",
    category: "Backend & Data",
  },
  {
    imgUrl: "/logos/git-original.svg",
    name: "Git",
    alt: "Git logo",
    category: "Tools & CMS",
  },
  {
    imgUrl: "/logos/shopify-liquid-logo.webp",
    name: "Liquid",
    alt: "Liquid logo",
    category: "Tools & CMS",
  },
  {
    imgUrl: "/logos/shopify-b_w.webp",
    name: "Shopify",
    alt: "Shopify logo",
    category: "Tools & CMS",
  },
  {
    svgCode: `<svg
      style="
        fill: white;
        background-color: #ec5990;
        border: 4px solid white;
        border-radius: 10px;
      "
      viewBox="0 0 100 100"
    >
      <path
        d="M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z"
      ></path>
      <path
        style="transform: translateX(-25px)"
        d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"
      ></path>
      <path d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"></path>
      <path
        style="transform: translateX(-25px)"
        d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"
      ></path>
      <path d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"></path>
    </svg>`,
    name: "React hook form",
    alt: "React hook form logo",
    category: "Frontend",
  },
  {
    imgUrl: "/logos/jest-plain.svg",
    name: "Jest",
    alt: "Jest logo",
    category: "Frontend",
  },
  {
    initial: "S",
    bgColor: "bg-gray-200",
    name: "Slate.js",
    alt: "Slate.js logo",
    category: "Frontend",
  },
];

const filteredSkills = computed(() =>
  activeCategory.value === "All"
    ? allSkills
    : allSkills.filter((s) => s.category === activeCategory.value),
);

const cardRefs = {};
const setCardRef = (el, name) => {
  if (el) cardRefs[name] = el;
};

const onMouseMove = (e, name) => {
  const card = cardRefs[name];
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / (rect.width / 2);
  const dy = (e.clientY - cy) / (rect.height / 2);
  gsap.to(card, {
    rotateY: dx * 18,
    rotateX: -dy * 18,
    scale: 1.08,
    duration: 0.3,
    ease: "power2.out",
    transformPerspective: 800,
  });
};

const onMouseLeave = (name) => {
  const card = cardRefs[name];
  if (!card) return;
  gsap.to(card, {
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    duration: 0.5,
    ease: "elastic.out(1, 0.5)",
  });
};

let isAnimating = false;
const switchCategory = async (cat) => {
  if (cat === activeCategory.value || isAnimating) return;
  isAnimating = true;

  const cards = document.querySelectorAll(".concept-a .card");
  await gsap.to(cards, {
    opacity: 0,
    scale: 0.5,
    x: () => (Math.random() - 0.5) * 600,
    y: () => (Math.random() - 0.5) * 400,
    rotation: () => (Math.random() - 0.5) * 60,
    duration: 0.4,
    ease: "power2.in",
    stagger: { amount: 0.15, from: "random" },
  });

  activeCategory.value = cat;
  await nextTick();

  const newCards = document.querySelectorAll(".concept-a .card");
  gsap.fromTo(
    newCards,
    {
      opacity: 0,
      scale: 0.4,
      x: () => (Math.random() - 0.5) * 500,
      y: () => (Math.random() - 0.5) * 300,
      rotation: () => (Math.random() - 0.5) * 45,
    },
    {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.55,
      ease: "back.out(1.4)",
      stagger: { amount: 0.25, from: "random" },
      onComplete: () => {
        isAnimating = false;
      },
    },
  );
};

onMounted(() => {
  gsap.fromTo(
    ".concept-a .card",
    { opacity: 0, y: 40, scale: 0.85 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.3)",
      stagger: 0.05,
    },
  );
});
</script>

<style scoped>
.card {
  transform-style: preserve-3d;
}
</style>
