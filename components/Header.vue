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
    <TransitionGroup name="list" tag="div" class="header-bg">
      <div v-for="rectang in rectangs" :key="rectang" :style="rectang"></div>
      <img v-if="showBgImg" src="/red-blue.jpg" width="1920" height="1280" alt="blue red fusion" />
    </TransitionGroup>
    <div class="content">
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
// const loading = ref(true);

const rectangs = ref([]);
const counter = ref(0);
const numOfRectang = ref(4);
const currentLeftPosition = ref(20)
const width = 2
const speed = 50;
const rectangDelay = ref(1500)
const typeWriterDelay = ref(2000)
const showBgImg = ref(false)
const { enabled } = useTheme()
const { transitionCompletedOnce } = useTransitionTracking()

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
  if (counter.value < numOfRectang.value) {
    const positionY = 0
    const styling = `height: 100%; width: ${width}%; top: ${positionY}; left: ${currentLeftPosition.value}%`;
    rectangs.value.push(styling);
    currentLeftPosition.value += 20
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

const assignDelayAmount = () => {
  if (window.innerWidth < 500) {
    if (enabled.value) {
      typeWriterDelay.value = 300
    } else {
      rectangDelay.value = transitionCompletedOnce.value ? 0 : 600
      typeWriterDelay.value = transitionCompletedOnce.value ? 400 : 1000
    }
  } else {
    if (enabled.value) {
      typeWriterDelay.value = transitionCompletedOnce.value ? 300 : 1200
    } else {
      rectangDelay.value = transitionCompletedOnce.value ? 0 : 1500
      typeWriterDelay.value = transitionCompletedOnce.value ? 500 : 2000
    }
  }
}

watchEffect(() => {
  if (counter.value === 4 && !enabled.value) {
    setTimeout(() => {
      showBgImg.value = true
    }, 500);
  } else if (enabled.value) {
    setTimeout(() => {
      showBgImg.value = true
    }, 800);
  }
})

onMounted(() => {
  assignDelayAmount()
  setTimeout(() => {
    addSquare()
  }, rectangDelay.value);
  if (counter.value === 4 && !enabled.value) {
    setTimeout(() => {
      showBgImg.value = true
    }, enabled.value ? 0 : 500);
  } else if (enabled.value) {
    setTimeout(() => {
      showBgImg.value = true
    }, 800);
  }
  setTimeout(() => {
    typeWriter()
  }, typeWriterDelay.value);
  // loading.value = false;
  // Promise.all([addSquare(), typeWriter()]);
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
