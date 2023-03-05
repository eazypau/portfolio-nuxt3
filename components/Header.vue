<template>
  <header class="headerHeight">
    <div>
      <!-- previously set width 1600 height 1200 -->
      <img
        src="/wide-laptop-gradient-bg.webp"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 80vw, (max-width: 1439px) 100vw"
        srcset="
          /wide-laptop-gradient-bg-min.webp  768w,
          /wide-laptop-gradient-bg.webp     1024w
        "
        alt="laptop with black background"
      />
    </div>
    <div>
      <h1>
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
