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
