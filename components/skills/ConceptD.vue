<template>
  <section class="concept-d">
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

    <div class="canvas-wrap" ref="wrapRef">
      <svg class="lines-svg" ref="svgRef" :width="svgW" :height="svgH">
        <line
          v-for="(line, i) in visibleLines"
          :key="i"
          :x1="line.x1" :y1="line.y1"
          :x2="line.x2" :y2="line.y2"
          :class="['conn-line', { lit: line.lit }]"
        />
      </svg>

      <div
        v-for="node in positionedNodes"
        :key="node.name"
        class="node"
        :style="{ left: node.x + 'px', top: node.y + 'px' }"
        :class="{ hovered: hoveredNode === node.name, related: relatedNodes.has(node.name) }"
        @mouseenter="onHover(node)"
        @mouseleave="onLeave"
        :ref="el => setNodeRef(el, node.name)"
      >
        <div class="node-ring" />
        <div class="node-core">
          <img v-if="node.imgUrl" :src="node.imgUrl" :alt="node.alt" />
          <div v-else class="initial-badge" :class="node.bgColor">{{ node.initial }}</div>
        </div>
        <span class="node-label">{{ node.name }}</span>
      </div>
    </div>

    <p v-if="hoveredNode" class="hover-hint">
      <strong>{{ hoveredNode }}</strong> — {{ hoveredCategory }}
    </p>
  </section>
</template>

<script setup>
import gsap from 'gsap'

const categories = ['All', 'Frontend', 'UI & Styling', 'Backend & Data', 'Tools & CMS']
const activeCategory = ref('All')
const hoveredNode = ref(null)
const hoveredCategory = ref('')
const relatedNodes = ref(new Set())
const wrapRef = ref(null)
const svgRef = ref(null)
const svgW = ref(800)
const svgH = ref(500)

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

const positionedNodes = ref([])
const visibleLines = ref([])

const nodeRefs = {}
const setNodeRef = (el, name) => { if (el) nodeRefs[name] = el }

const layoutNodes = () => {
  const skills = filteredSkills.value
  const w = svgW.value
  const h = svgH.value
  const cx = w / 2
  const cy = h / 2
  const count = skills.length
  const radius = Math.min(w, h) * 0.38

  positionedNodes.value = skills.map((skill, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2
    const jitter = count > 8 ? (Math.sin(i * 2.5) * 30) : 0
    return {
      ...skill,
      x: cx + Math.cos(angle) * (radius + jitter) - 28,
      y: cy + Math.sin(angle) * (radius + jitter) - 28,
    }
  })

  buildLines()
}

const buildLines = () => {
  const nodes = positionedNodes.value
  const lines = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].category === nodes[j].category) {
        lines.push({
          x1: nodes[i].x + 28,
          y1: nodes[i].y + 28,
          x2: nodes[j].x + 28,
          y2: nodes[j].y + 28,
          nodeA: nodes[i].name,
          nodeB: nodes[j].name,
          lit: false,
        })
      }
    }
  }
  visibleLines.value = lines
}

const onHover = (node) => {
  hoveredNode.value = node.name
  hoveredCategory.value = node.category
  relatedNodes.value = new Set(
    allSkills.filter(s => s.category === node.category && s.name !== node.name).map(s => s.name)
  )
  visibleLines.value = visibleLines.value.map(l => ({
    ...l,
    lit: l.nodeA === node.name || l.nodeB === node.name,
  }))
}

const onLeave = () => {
  hoveredNode.value = null
  hoveredCategory.value = ''
  relatedNodes.value = new Set()
  visibleLines.value = visibleLines.value.map(l => ({ ...l, lit: false }))
}

let isAnimating = false
const switchCategory = async (cat) => {
  if (cat === activeCategory.value || isAnimating) return
  isAnimating = true

  const nodes = document.querySelectorAll('.concept-d .node')
  await gsap.to(nodes, {
    opacity: 0,
    scale: 0,
    duration: 0.3,
    ease: 'power2.in',
    stagger: 0.02,
  })
  gsap.to('.concept-d .lines-svg', { opacity: 0, duration: 0.2 })

  activeCategory.value = cat
  onLeave()
  await nextTick()
  layoutNodes()
  await nextTick()

  gsap.to('.concept-d .lines-svg', { opacity: 1, duration: 0.4, delay: 0.2 })
  gsap.fromTo(
    '.concept-d .node',
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
      stagger: 0.06,
      onComplete: () => { isAnimating = false },
    }
  )
}

const updateSize = () => {
  if (!wrapRef.value) return
  svgW.value = wrapRef.value.clientWidth
  svgH.value = wrapRef.value.clientHeight
  layoutNodes()
}

onMounted(() => {
  updateSize()
  window.addEventListener('resize', updateSize)
  nextTick(() => {
    gsap.fromTo(
      '.concept-d .node',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.05 }
    )
    gsap.fromTo('.concept-d .lines-svg', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 })
  })
})

onUnmounted(() => window.removeEventListener('resize', updateSize))
</script>

<style scoped>
.concept-d {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #07090f;
  color: #c8d6f0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: -0.01em;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tab-btn {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  border: 1px solid #1e2a40;
  background: transparent;
  color: #4a6080;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover { border-color: #3a5080; color: #8aaed0; }
.tab-btn.active {
  background: linear-gradient(135deg, #1d3a6e, #2d1f5e);
  border-color: #4060a0;
  color: #a0c0f0;
}

.canvas-wrap {
  position: relative;
  width: 100%;
  max-width: 860px;
  height: 500px;
  margin: 0 auto;
}

.lines-svg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.conn-line {
  stroke: #1a2a40;
  stroke-width: 1;
  transition: stroke 0.3s, stroke-width 0.3s, opacity 0.3s;
}

.conn-line.lit {
  stroke: #4080ff;
  stroke-width: 1.5;
  filter: drop-shadow(0 0 4px #4080ff88);
}

.node {
  position: absolute;
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.node-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.node.hovered .node-ring,
.node.related .node-ring {
  border-color: #4080ff;
  box-shadow: 0 0 12px #4080ff66;
}

.node-core {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #0d1525;
  border: 1.5px solid #1e2a3f;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background 0.25s, border-color 0.25s;
}

.node.hovered .node-core {
  background: #132040;
  border-color: #4080ff;
}
.node.related .node-core {
  background: #0f1a30;
  border-color: #2050a0;
}

.node-core img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.initial-badge {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
}

.node-label {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.65rem;
  color: #4a6080;
  transition: color 0.2s;
}

.node.hovered .node-label { color: #a0c0f0; }
.node.related .node-label { color: #6080b0; }

.hover-hint {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #5070a0;
  text-align: center;
}

.hover-hint strong { color: #80a0d0; }
</style>
