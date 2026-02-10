<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://www.eazypau.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <h2>About</h2>
          <p class="mt-2">
            Hi there! I'm a self-taught developer with a background in
            mechanical engineering (graduated from
            <a
              class="font-bold text-blue-800 dark:text-blue-500 hover:underline"
              href="https://www.mmu.edu.my/"
              target="blank"
              >Multimedia University</a
            >). After discovering my passion for web development, I made a
            career change and became a frontend web developer. Currently working
            as a Senior Software Engineer in
            <a
              class="font-bold text-blue-600 dark:text-blue-300 hover:underline"
              href="https://renalworks.com/"
              target="blank"
              >Renalworks</a
            >.
          </p>
          <p class="mt-2">
            I'm passionate in learning new technologies, building responsive
            websites, and documenting my working process when it comes to
            complicated features.
          </p>
          <p class="mt-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Vue</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>Material UI</li>
              <li>jQuery</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Career Timeline</h2>
          <CardsCareer v-for="career in timeline" :career-details="career" />
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
