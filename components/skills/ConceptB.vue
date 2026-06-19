<template>
  <section class="concept-b">
    <h2 class="section-title">Technologies & Frameworks</h2>

    <div class="tabs">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['tab-btn', { active: activeCategory === cat }]"
        @click="switchCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid" ref="gridRef">
      <div
        v-for="skill in filteredSkills"
        :key="skill.name"
        class="card"
        :data-name="skill.name"
      >
        <div class="glitch-wrap">
          <img v-if="skill.imgUrl" :src="skill.imgUrl" :alt="skill.alt" class="skill-img" />
          <div v-else class="initial-badge" :class="skill.bgColor">
            <span>{{ skill.initial }}</span>
          </div>
        </div>
        <p class="skill-name">{{ displayNames[skill.name] || skill.name }}</p>
        <div class="scan-line" />
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const categories = ['All', 'Frontend', 'UI & Styling', 'Backend & Data', 'Tools & CMS']
const activeCategory = ref('All')

const allSkills = [
  { imgUrl: '/logos/html5-original.svg', name: 'HTML', alt: 'HTML logo', category: 'Frontend' },
  { imgUrl: '/logos/css3-plain-wordmark.svg', name: 'CSS', alt: 'CSS logo', category: 'Frontend' },
  { imgUrl: '/logos/javascript-original.svg', name: 'JavaScript', alt: 'JavaScript logo', category: 'Frontend' },
  { imgUrl: '/logos/react-original.svg', name: 'React', alt: 'React logo', category: 'Frontend' },
  { imgUrl: '/logos/nextjs-original.svg', name: 'NextJS', alt: 'NextJs logo', category: 'Frontend' },
  { imgUrl: '/logos/typescript-original.svg', name: 'TypeScript', alt: 'TypeScript logo', category: 'Frontend' },
  { imgUrl: '/logos/vuejs-original.svg', name: 'Vue', alt: 'Vue logo', category: 'Frontend' },
  { imgUrl: '/logos/nuxtjs-original.svg', name: 'NuxtJS', alt: 'NuxtJS logo', category: 'Frontend' },
  { imgUrl: '/logos/jquery-original.svg', name: 'jQuery', alt: 'jQuery logo', category: 'Frontend' },
  { imgUrl: '/logos/Chart.js_logo.svg.png', name: 'Chart.js', alt: 'ChartJs logo', category: 'Frontend' },
  { imgUrl: '/logos/redux-original.svg', name: 'Redux', alt: 'Redux logo', category: 'Frontend' },
  { imgUrl: '/logos/tailwindcss-plain.svg', name: 'TailwindCSS', alt: 'TailwindCSS logo', category: 'UI & Styling' },
  { imgUrl: '/logos/materialui-original.svg', name: 'Material UI', alt: 'Material UI logo', category: 'UI & Styling' },
  { imgUrl: '/logos/nodejs-original.svg', name: 'NodeJS', alt: 'NodeJS logo', category: 'Backend & Data' },
  { imgUrl: '/logos/firebase-plain.svg', name: 'Firebase', alt: 'Firebase logo', category: 'Backend & Data' },
  { imgUrl: '/logos/git-original.svg', name: 'Git', alt: 'Git logo', category: 'Tools & CMS' },
  { imgUrl: '/logos/shopify-liquid-logo.webp', name: 'Liquid', alt: 'Liquid logo', category: 'Tools & CMS' },
  { imgUrl: '/logos/shopify-b_w.webp', name: 'Shopify', alt: 'Shopify logo', category: 'Tools & CMS' },
  { imgUrl: '/logos/jest-plain.svg', name: 'Jest', alt: 'Jest logo', category: 'Tools & CMS' },
  { initial: 'S', bgColor: 'bg-gray-200', name: 'Slate.js', alt: 'Slate.js logo', category: 'Tools & CMS' },
]

const filteredSkills = computed(() =>
  activeCategory.value === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory.value)
)

const displayNames = reactive({})
const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'

const scrambleName = (skill) => {
  const target = skill.name
  let iteration = 0
  const total = 12
  const interval = setInterval(() => {
    displayNames[skill.name] = target
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (i < Math.floor((iteration / total) * target.length)) return char
        return CHARSET[Math.floor(Math.random() * CHARSET.length)]
      })
      .join('')
    iteration++
    if (iteration > total) {
      displayNames[skill.name] = target
      clearInterval(interval)
    }
  }, 40)
}

const revealCards = () => {
  const cards = document.querySelectorAll('.concept-b .card')
  cards.forEach((card, i) => {
    const skillName = card.getAttribute('data-name')
    const skill = allSkills.find(s => s.name === skillName)

    gsap.fromTo(
      card,
      { opacity: 0, filter: 'blur(12px)', scale: 0.8 },
      {
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.6,
        delay: i * 0.07,
        ease: 'power3.out',
        onStart: () => {
          if (skill) scrambleName(skill)
        },
      }
    )

    const img = card.querySelector('.skill-img, .initial-badge')
    if (img) {
      gsap.fromTo(
        img,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, delay: i * 0.07 + 0.15 }
      )
    }
  })
}

let isAnimating = false
const switchCategory = async (cat) => {
  if (cat === activeCategory.value || isAnimating) return
  isAnimating = true

  const cards = document.querySelectorAll('.concept-b .card')
  await gsap.to(cards, {
    opacity: 0,
    filter: 'blur(16px)',
    scale: 0.75,
    duration: 0.3,
    ease: 'power2.in',
    stagger: 0.02,
  })

  activeCategory.value = cat
  await nextTick()
  revealCards()
  isAnimating = false
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.create({
    trigger: '.concept-b .grid',
    start: 'top 75%',
    once: true,
    onEnter: revealCards,
  })
  gsap.set('.concept-b .card', { opacity: 0 })
})
</script>

<style scoped>
.concept-b {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #050510;
  color: #e0e0ff;
  font-family: 'Courier New', monospace;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #a0a0ff;
  text-shadow: 0 0 20px rgba(120, 120, 255, 0.5);
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.tab-btn {
  padding: 0.4rem 1rem;
  border: 1px solid #3a3a6a;
  background: transparent;
  color: #6060aa;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  border-color: #7070cc;
  color: #aaaaee;
}

.tab-btn.active {
  border-color: #a0a0ff;
  color: #a0a0ff;
  background: rgba(100, 100, 255, 0.1);
  box-shadow: 0 0 10px rgba(100, 100, 255, 0.2);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  position: relative;
  background: rgba(10, 10, 30, 0.8);
  border: 1px solid #1a1a3a;
  border-radius: 4px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.card:hover {
  border-color: #5050cc;
  box-shadow: 0 0 20px rgba(80, 80, 200, 0.2), inset 0 0 20px rgba(80, 80, 200, 0.05);
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #7070ff, transparent);
  opacity: 0;
  animation: scan 3s ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

.card:hover .scan-line {
  opacity: 1;
}

@keyframes scan {
  0% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.glitch-wrap {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.initial-badge {
  width: 52px;
  height: 52px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.skill-name {
  font-size: 0.72rem;
  color: #7070cc;
  text-align: center;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  min-height: 1em;
}
</style>
