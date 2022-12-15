<template>
  <div class="workCardContainer" @click="onClickFunction(content)">
    <img
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      loading="lazy"
      class="max-w-[60%] md:max-w-[70%] 2xl:max-w-[70%]"
    />
  </div>
</template>
<script>
export default defineComponent({
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    bgColor: {
      type: String,
      default: "bg-white",
    },
    onClickFunction: {
      type: Function,
      default: () => {
        return "Default function";
      },
    },
    content: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
});
</script>
