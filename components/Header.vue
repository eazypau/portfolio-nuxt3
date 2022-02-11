<template>
  <header class="relative w-full headerHeight overflow-hidden flex items-top">
    <div class="absolute w-full h-full">
      <img
        src="/wide-laptop-gradient-bg.webp"
        alt="laptop with black background"
        class="w-full h-full object-cover object-top"
      />
    </div>
    <div
      class="relative w-full text-center px-1 md:px-16 lg:px-28 xl:px-40 pt-5 2xl:pt-10 headerFont text-4xl md:text-6xl 2xl:text-7xl font-bold"
    >
      <div>
        <!-- <Transition appear @before-enter="beforeEnter" @enter="enter">
          <p v-if="!loading" class="text-white flex justify-center">
            Hi there
            <span>
              <IconsHiIcon class="ml-3" />
            </span>
          </p>
        </Transition>
        <p class="mt-1 tracking-wide text-white">My name is Po</p> -->
        <MyTransition>
          <p v-if="!loading" class="text-white flex justify-center">
            Hi there
            <span>
              <IconsHiIcon class="ml-3" />
            </span>
          </p>
        </MyTransition>
        <MyTransition :delay="Number(1.3)">
          <p v-if="!loading" class="mt-1 tracking-wide text-white">
            My name is Po
          </p>
        </MyTransition>
      </div>
      <div class="mt-2">
        <MyTransition :delay="Number(1.6)">
          <p v-if="!loading" class="tracking-wide text-white">A Frontend</p>
        </MyTransition>
        <MyTransition :delay="Number(1.9)">
          <p v-if="!loading" class="py-2 tracking-wide text-white">
            Web Developer
          </p>
        </MyTransition>
        <!-- <p class="tracking-wide text-white">A Frontend</p> -->
        <!-- <p class="py-2 tracking-wide text-white">Web Developer</p> -->
      </div>
    </div>
  </header>
</template>
<script setup>
//* maybe can try gradient text with very light bg color or with out any bg color
//*ref https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
import { ref, onMounted } from "vue";
// import { gsap } from "gsap";
let loading = ref(true);

// animation
// const beforeEnter = (el) => {
//   gsap.set(el, {
//     opacity: 0,
//     translateX: "-20px",
//   });
// };
// const enter = (el, done) => {
//   gsap.to(el, {
//     opacity: 1,
//     translateX: "0px",
//     duration: 0.4,
//     delay: 2,
//     onComplete: done,
//   });
// };

onMounted(() => {
  loading.value = false;
});
</script>
<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 30px);
}
</style>
