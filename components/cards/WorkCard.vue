<template>
  <div class="work-card-container" @click="onClickFunction(content)">
    <img
      :class="image?.maxWidth"
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      loading="lazy"
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
