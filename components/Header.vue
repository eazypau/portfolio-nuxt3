<template>
  <header class="headerHeight">
    <!-- <div>
      <img
        src="/wide-laptop-gradient-bg.webp"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 80vw, (max-width: 1439px) 100vw"
        srcset="
          /wide-laptop-gradient-bg-min.webp  768w,
          /wide-laptop-gradient-bg.webp     1024w
        "
        alt="laptop with black background"
      />
    </div> -->
    <TransitionGroup name="list" tag="div">
      <div v-for="square in squares" :key="square" :style="square"></div>
    </TransitionGroup>
    <div>
      <h1 class="leading-3">
        <span class="text-4xl md:text-5xl font-semibold">{{
          introObj.lineOne
        }}</span>
        <br />
        <span class="text-2xl md:text-3xl font-medium">{{
          introObj.lineTwo
        }}</span>
        <br />
        <span class="text-xl md:text-2xl">{{ introObj.lineThree }}</span>
      </h1>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from "vue";
const loading = ref(true);
const squares = ref([]);
const counter = ref(0);
const numOfSquares = ref(200);
const speed = 50;

const i = ref(0);
const j = ref(0);
const introObj = ref({
  lineOne: "",
  lineTwo: "",
  lineThree: "",
});
const intro = [
  "Po Yi Zhi",
  "Software Developer in RISB",
  "I specialise in building web app that helps to solve real world challenges.",
];

const addSquare = () => {
  if (counter.value < numOfSquares.value) {
    const randomSize = Math.floor(Math.random() * (150 - 30) + 30);
    const positionX = Math.floor(Math.random() * 100);
    const positionY = Math.floor(Math.random() * 100);
    const styling = `height: ${randomSize}px; width: ${randomSize}px; top: ${positionY}%; left: ${positionX}%`;
    squares.value.push(styling);
    counter.value++;
    setTimeout(addSquare, speed);
  }
};

const typeWriter = () => {
  const currentLine =
    j.value === 0 ? "lineOne" : j.value === 1 ? "lineTwo" : "lineThree";
  if (j.value < 3) {
    if (i.value < intro[j.value].length) {
      introObj.value[currentLine] += intro[j.value][i.value];
      i.value++;
      setTimeout(typeWriter, speed);
    } else {
      if (j.value < 2) i.value = 0;
      j.value++;
      if (j.value < 3) setTimeout(typeWriter, speed);
    }
  }
};

onMounted(() => {
  if (window.innerWidth < 500) {
    numOfSquares.value = 100;
  }
  loading.value = false;
  Promise.all([addSquare(), typeWriter()]);
});
</script>
<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 70px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
