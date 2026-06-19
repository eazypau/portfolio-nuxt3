<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

let mm;

onMounted(() => {
  // All hiding happens inside the no-preference branch, so reduced-motion
  // users simply keep the static, fully-visible page (no extra branch needed).
  mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // --- Profile block ---
    const profileTrigger = { trigger: ".profile", start: "top 85%" };
    gsap.from(".profile-img", {
      scrollTrigger: profileTrigger,
      clipPath: "inset(100% 0 0 0)",
      scale: 1.08,
      filter: "blur(8px)",
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
    gsap.from(".profile-text", {
      scrollTrigger: profileTrigger,
      y: 24,
      opacity: 0,
      filter: "blur(6px)",
      duration: 0.8,
      stagger: 0.12,
      ease: "power4.out",
      delay: 0.15,
    });
    gsap.from(".profile-social-icons a", {
      scrollTrigger: profileTrigger,
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.7)",
      delay: 0.35,
    });

    // --- About text section: heading mask reveal, then paragraphs + tech list ---
    const aboutTl = gsap.timeline({
      scrollTrigger: { trigger: ".about-text", start: "top 80%" },
    });
    aboutTl
      .from(".about-heading", { yPercent: 100, duration: 0.9, ease: "expo.out" })
      .from(
        ".about-para",
        {
          y: 24,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.7,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.4"
      )
      .from(
        ".tech-list li",
        {
          x: -16,
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

    // --- Career Timeline: heading mask reveal ---
    gsap.from(".career-heading", {
      scrollTrigger: { trigger: ".career-heading", start: "top 85%" },
      yPercent: 100,
      duration: 0.9,
      ease: "expo.out",
    });

    // --- Career cards: staggered rise + scale + tilt, logos pop after ---
    gsap.set(".career-card", {
      opacity: 0,
      y: 40,
      scale: 0.92,
      rotateX: 8,
      transformPerspective: 600,
    });
    ScrollTrigger.batch(".career-card", {
      start: "top 85%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
        }),
    });

    gsap.set(".career-logo", { opacity: 0, scale: 0 });
    ScrollTrigger.batch(".career-logo", {
      start: "top 85%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          scale: 1,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 0.2,
        }),
    });

    // Recalculate trigger positions once the profile image has loaded and
    // shifted the layout.
    ScrollTrigger.refresh();
  });
});

onBeforeUnmount(() => {
  mm?.revert();
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section class="about-text">
          <h2 class="heading-mask"><span class="about-heading">About</span></h2>
          <p class="mt-2 about-para">
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
          <p class="mt-2 about-para">
            I'm passionate in learning new technologies, building responsive
            websites, and documenting my working process when it comes to
            complicated features.
          </p>
          <p class="mt-2 about-para">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3 tech-list">
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
          <h2 class="heading-mask">
            <span class="career-heading">Career Timeline</span>
          </h2>
          <CardsCareer v-for="career in timeline" :career-details="career" />
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
// Mask wrapper: clips the heading so its text can slide up into view.
.heading-mask {
  overflow: hidden;

  > span {
    display: inline-block;
  }
}
</style>
