<template>
  <section class="concept-c">
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

    <div class="bento" ref="bentoRef">
      <div
        v-for="skill in filteredSkills"
        :key="skill.name"
        :class="['tile', skill.size || 'sm', `accent-${skill.accent || 'blue'}`]"
        @mouseenter="onEnter($event)"
        @mouseleave="onLeave($event)"
      >
        <div class="tile-bg" />
        <div class="tile-content">
          <div class="logo-wrap">
            <img v-if="skill.imgUrl" :src="skill.imgUrl" :alt="skill.alt" />
            <div v-else class="initial-badge" :class="skill.bgColor">
              <span>{{ skill.initial }}</span>
            </div>
          </div>
          <p class="skill-name">{{ skill.name }}</p>
        </div>
        <span class="category-tag">{{ skill.category }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'

const categories = ['All', 'Frontend', 'UI & Styling', 'Backend & Data', 'Tools & CMS']
const activeCategory = ref('All')

const allSkills = [
  { imgUrl: '/logos/vuejs-original.svg', name: 'Vue', alt: 'Vue logo', category: 'Frontend', size: 'lg', accent: 'green' },
  { imgUrl: '/logos/react-original.svg', name: 'React', alt: 'React logo', category: 'Frontend', size: 'lg', accent: 'blue' },
  { imgUrl: '/logos/javascript-original.svg', name: 'JavaScript', alt: 'JavaScript logo', category: 'Frontend', size: 'md', accent: 'yellow' },
  { imgUrl: '/logos/typescript-original.svg', name: 'TypeScript', alt: 'TypeScript logo', category: 'Frontend', size: 'md', accent: 'blue' },
  { imgUrl: '/logos/nuxtjs-original.svg', name: 'NuxtJS', alt: 'NuxtJS logo', category: 'Frontend', size: 'sm', accent: 'green' },
  { imgUrl: '/logos/nextjs-original.svg', name: 'NextJS', alt: 'NextJs logo', category: 'Frontend', size: 'sm', accent: 'gray' },
  { imgUrl: '/logos/html5-original.svg', name: 'HTML', alt: 'HTML logo', category: 'Frontend', size: 'sm', accent: 'orange' },
  { imgUrl: '/logos/css3-plain-wordmark.svg', name: 'CSS', alt: 'CSS logo', category: 'Frontend', size: 'sm', accent: 'blue' },
  { imgUrl: '/logos/jquery-original.svg', name: 'jQuery', alt: 'jQuery logo', category: 'Frontend', size: 'sm', accent: 'blue' },
  { imgUrl: '/logos/Chart.js_logo.svg.png', name: 'Chart.js', alt: 'ChartJs logo', category: 'Frontend', size: 'sm', accent: 'pink' },
  { imgUrl: '/logos/redux-original.svg', name: 'Redux', alt: 'Redux logo', category: 'Frontend', size: 'sm', accent: 'purple' },
  { imgUrl: '/logos/tailwindcss-plain.svg', name: 'TailwindCSS', alt: 'TailwindCSS logo', category: 'UI & Styling', size: 'lg', accent: 'teal' },
  { imgUrl: '/logos/materialui-original.svg', name: 'Material UI', alt: 'Material UI logo', category: 'UI & Styling', size: 'md', accent: 'blue' },
  { imgUrl: '/logos/nodejs-original.svg', name: 'NodeJS', alt: 'NodeJS logo', category: 'Backend & Data', size: 'lg', accent: 'green' },
  { imgUrl: '/logos/firebase-plain.svg', name: 'Firebase', alt: 'Firebase logo', category: 'Backend & Data', size: 'md', accent: 'orange' },
  { imgUrl: '/logos/git-original.svg', name: 'Git', alt: 'Git logo', category: 'Tools & CMS', size: 'md', accent: 'orange' },
  { imgUrl: '/logos/shopify-b_w.webp', name: 'Shopify', alt: 'Shopify logo', category: 'Tools & CMS', size: 'md', accent: 'green' },
  { imgUrl: '/logos/shopify-liquid-logo.webp', name: 'Liquid', alt: 'Liquid logo', category: 'Tools & CMS', size: 'sm', accent: 'green' },
  { imgUrl: '/logos/jest-plain.svg', name: 'Jest', alt: 'Jest logo', category: 'Tools & CMS', size: 'sm', accent: 'pink' },
  { initial: 'S', bgColor: 'bg-gray-200', name: 'Slate.js', alt: 'Slate.js logo', category: 'Tools & CMS', size: 'sm', accent: 'gray' },
]

const filteredSkills = computed(() =>
  activeCategory.value === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory.value)
)

const onEnter = (e) => {
  gsap.to(e.currentTarget, { y: -6, scale: 1.04, duration: 0.25, ease: 'back.out(2)' })
}
const onLeave = (e) => {
  gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.35, ease: 'elastic.out(1, 0.5)' })
}

let isAnimating = false
const switchCategory = async (cat) => {
  if (cat === activeCategory.value || isAnimating) return
  isAnimating = true

  const tiles = document.querySelectorAll('.concept-c .tile')
  await gsap.to(tiles, {
    opacity: 0,
    y: 20,
    scale: 0.92,
    duration: 0.25,
    ease: 'power2.in',
    stagger: 0.03,
  })

  activeCategory.value = cat
  await nextTick()

  gsap.fromTo(
    '.concept-c .tile',
    { opacity: 0, y: 24, scale: 0.92 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.5)',
      stagger: 0.05,
      onComplete: () => { isAnimating = false },
    }
  )
}

onMounted(() => {
  gsap.fromTo(
    '.concept-c .tile',
    { opacity: 0, y: 30, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.4)', stagger: 0.06 }
  )
})
</script>

<style scoped>
.concept-c {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #f8f7f4;
  color: #1a1a1a;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: -0.03em;
  color: #111;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.tab-btn {
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  border: 2px solid #e0ddd8;
  background: #fff;
  color: #666;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.18s ease;
}

.tab-btn:hover {
  border-color: #bbb;
  color: #333;
}

.tab-btn.active {
  background: #111;
  color: #fff;
  border-color: #111;
}

.bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 120px;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;
}

.tile {
  position: relative;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  background: #fff;
  border: 2px solid #e8e5e0;
  will-change: transform;
}

.tile.sm { grid-column: span 2; grid-row: span 1; }
.tile.md { grid-column: span 3; grid-row: span 1; }
.tile.lg { grid-column: span 3; grid-row: span 2; }

.tile-bg {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.tile:hover .tile-bg { opacity: 1; }

.accent-blue .tile-bg    { background: linear-gradient(135deg, #dbeafe, #eff6ff); }
.accent-green .tile-bg   { background: linear-gradient(135deg, #dcfce7, #f0fdf4); }
.accent-yellow .tile-bg  { background: linear-gradient(135deg, #fef9c3, #fefce8); }
.accent-orange .tile-bg  { background: linear-gradient(135deg, #ffedd5, #fff7ed); }
.accent-purple .tile-bg  { background: linear-gradient(135deg, #ede9fe, #f5f3ff); }
.accent-pink .tile-bg    { background: linear-gradient(135deg, #fce7f3, #fdf2f8); }
.accent-teal .tile-bg    { background: linear-gradient(135deg, #ccfbf1, #f0fdfa); }
.accent-gray .tile-bg    { background: linear-gradient(135deg, #f3f4f6, #f9fafb); }

.tile-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tile.sm .logo-wrap  { width: 44px; height: 44px; }
.tile.md .logo-wrap  { width: 52px; height: 52px; }
.tile.lg .logo-wrap  { width: 72px; height: 72px; }

.logo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.initial-badge {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.skill-name {
  font-size: 0.78rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 0;
}

.tile.lg .skill-name { font-size: 1rem; }

.category-tag {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 0.6rem;
  color: #bbb;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.tile:hover .category-tag { opacity: 1; }

@media (max-width: 600px) {
  .bento {
    grid-template-columns: repeat(4, 1fr);
  }
  .tile.lg { grid-column: span 2; }
  .tile.md { grid-column: span 2; }
}
</style>
