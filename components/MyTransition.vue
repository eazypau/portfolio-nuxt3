<template>
  <Transition name="my-transition" @before-enter="beforeEnter" @enter="enter">
    <slot></slot>
  </Transition>
</template>
<script setup>
import { gsap } from "gsap";
const props = defineProps({
  delay: {
    type: Number,
    default: 0.9,
  },
});
const beforeEnter = (el) => {
  gsap.set(el, {
    opacity: 0,
    translateX: "-20px",
  });
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    translateX: "0px",
    duration: 0.4,
    delay: props.delay,
    onComplete: done,
  });
};
</script>
