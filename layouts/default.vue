<template>
  <div>
    <NavBar />
    <!-- <SideNavigation
      :left-link="leftLink"
      :right-link="rightLink"
      :show-right-link="showRightLink"
    >
      <slot />
    </SideNavigation> -->
    <slot />
    <Footer />
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const gtag = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "${runtimeConfig.public.NUXT_GTM_ID}");
`;
useHead({
  script: [
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.NUXT_GTM_ID}`,
    },
    {
      type: "text/javascript",
      innerHTML: gtag,
    },
    {
      type: "text/javascript",
      src: "js/useCopy.js",
    },
  ],
});
</script>
<!-- <script setup>
const route = useRoute();
const { navigation } = useConstants();
const leftLink = ref("");
const rightLink = ref("");
const showRightLink = ref(true);

const assignRoute = () => {
  const findCurrentRouteIndex = navigation.findIndex(
    (item) => item.href === route.path,
  );
  showRightLink.value = true;
  if (findCurrentRouteIndex === 0) {
    leftLink.value = "/";
    rightLink.value = navigation[1].href;
  } else if (findCurrentRouteIndex === navigation.length - 1) {
    leftLink.value = navigation[findCurrentRouteIndex - 1].href;
    showRightLink.value = false;
    rightLink.value = "";
  } else {
    leftLink.value = navigation[findCurrentRouteIndex - 1].href;
    rightLink.value = navigation[findCurrentRouteIndex + 1].href;
  }
};

onMounted(() => {
  assignRoute();
});
</script> -->
