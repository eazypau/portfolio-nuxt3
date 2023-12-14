<template>
  <NuxtLayout name="main">
    <div>
      <!-- <Modal
        :is-open="isOpen"
        :close-modal="closeModal"
        :modal-content="currentModalContent"
      /> -->
      <Header />
      <!-- <WorkSection
        :working-projects="workingProjects"
        :on-click-function="showModal"
      /> -->
    </div>
  </NuxtLayout>
</template>
<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web developer portfolio | Front End Developer - Po Yi Zhi",
  author: {
    "@type": "Person",
    "@id": "#poyizhi",
  },
  url: "https://www.eazypau.com/",
  description:
    "Personal Portfolio Website. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Po Yi Zhi, Yi Zhi, Po YZ, YZ Po, eazypau, Malaysia",
  image: "https://www.eazypau.com/profile-pics/profile.webp",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#poyizhi",
  name: "Po Yi Zhi",
  email: "poyizhi@gmail.com",
  url: "https://www.eazypau.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});

// modal functionality
// const isOpen = ref(false);
// const currentModalContent = ref({});
// const showModal = (content) => {
//   // lock page height?
//   // fill up modals with details
//   // open modal
//   currentModalContent.value = content;
//   isOpen.value = true;
//   document.body.style.height = "100vh";
//   document.body.style.overflow = "hidden";
// };
// const closeModal = () => {
//   isOpen.value = false;
//   document.body.style.height = "auto";
//   document.body.style.overflow = "visible";
// };

// onMounted(() => {
//   document.addEventListener("keyup", function (event) {
//     if (isOpen.value && event.key === "Escape") {
//       closeModal();
//     }
//   });
// });
</script>
