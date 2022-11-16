<template>
  <div class="workCardContainer" @click="onClickFunction(content)">
    <img
      :src="imgSrc"
      :alt="imgAlt"
      loading="lazy"
      class="max-w-[70%] md:max-w-[80%]"
    />
    <!-- <span>Flowerchimp</span> -->
  </div>
</template>
<script>
export default defineComponent({
  props: {
    imgSrc: {
      type: String,
      default:
        "https://cdn.shopify.com/s/files/1/1252/1803/files/FC-MY-Rectangle_410x.png?v=1666837710",
    },
    imgAlt: {
      type: String,
      default: "Flowerchimp",
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
