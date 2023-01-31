<template>
  <header class="relative w-full headerHeight overflow-hidden flex items-top">
    <div class="absolute w-full h-full">
      <!-- previously set width 1600 height 1200 -->
      <img
        src="/wide-laptop-gradient-bg.webp"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 80vw, (max-width: 1439px) 100vw"
        srcset="
          /wide-laptop-gradient-bg-min.webp  768w,
          /wide-laptop-gradient-bg.webp     1024w
        "
        alt="laptop with black background"
        class="w-full h-full object-cover object-top"
      />
    </div>
    <div
      class="relative w-full text-center px-1 md:px-16 lg:px-28 xl:px-40 pt-5 2xl:pt-10 headerFont text-4xl lg:text-6xl 2xl:text-7xl font-bold"
    >
      <!-- <div>
        <MyTransition>
          <h1 v-if="!loading" class="text-white flex justify-center">
            Hi there
            <span>
              <IconsHiIcon class="ml-3 p-1" />
            </span>
          </h1>
        </MyTransition>
        <MyTransition :delay="Number(1.1)">
          <h1 v-if="!loading" class="mt-1 tracking-wide text-white">
            My name is Po
          </h1>
        </MyTransition>
      </div>
      <div class="mt-2">
        <MyTransition :delay="Number(1.3)">
          <h1 v-if="!loading" class="tracking-wide text-white">A Frontend</h1>
        </MyTransition>
        <MyTransition :delay="Number(1.5)">
          <h1 v-if="!loading" class="py-2 tracking-wide text-white">
            Web Developer
          </h1>
        </MyTransition>
      </div> -->
      <h1 class="text-white flex flex-col justify-center">
        <MyTransition>
          <span v-if="!loading" class="flex justify-center">
            Hi there
            <span>
              <IconsHiIcon class="ml-3 p-1" />
            </span>
          </span>
        </MyTransition>
        <MyTransition :delay="Number(1.1)">
          <span v-if="!loading" class="mt-1 tracking-wide text-white">
            My name is Po
          </span>
        </MyTransition>
        <MyTransition :delay="Number(1.3)">
          <span v-if="!loading" class="mt-2 tracking-wide text-white">
            A Frontend
          </span>
        </MyTransition>
        <MyTransition :delay="Number(1.5)">
          <span v-if="!loading" class="py-2 tracking-wide text-white">
            Web Developer
          </span>
        </MyTransition>
      </h1>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from "vue";
let loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>
<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 30px);
}
</style>
