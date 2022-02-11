<template>
  <section>
    <div class="container px-6 py-8 mx-auto">
      <div class="items-center lg:flex lg:space-x-6">
        <div class="lg:w-7/12 xl:w-9/12 subFontFamily leftText">
          <h2 class="text-3xl xl:text-4xl font-bold text-gray-800">
            Who am I?
          </h2>

          <p
            class="mt-4 text-gray-500 lg:max-w-md xl:max-w-lg 3xl:max-w-xl md:text-lg xl:text-xl"
            style="word-spacing: 5px"
          >
            Hi, I am Po Yi Zhi, frontend web developer in
            <a
              class="font-bold text-indigo-600"
              href="https://hackercollective.co/teams"
              >The Hacker Collective</a
            >
            . I was born in Melaka, Malaysia. Graduated with Bachelor of degree
            in Mechanical Engineering in year 2019 from Multimedia University
            (MMU). Previously I worked as a mechanical engineer for about 2
            years in M&E consultancy industry.
          </p>

          <div class="flex items-center mt-6 -mx-2">
            <a
              class="mx-2"
              href="https://www.instagram.com/yzpo/"
              aria-label="Instagram"
              target="blank"
            >
              <IconsInstaIcon class="IconInProfile" />
            </a>

            <a
              class="mx-2"
              href="https://www.facebook.com/yizhipo"
              aria-label="Facebook"
              target="blank"
            >
              <IconsFacebookIcon class="IconInProfile" />
            </a>

            <a
              class="mx-2"
              href="https://www.linkedin.com/in/yzpo/"
              aria-label="Linkden"
              target="blank"
            >
              <IconsLinkedInIcon class="IconInProfile" />
            </a>

            <a
              class="mx-2"
              href="https://github.com/eazypau"
              aria-label="Github"
              target="blank"
            >
              <IconsGithubIcon class="IconInProfile" />
            </a>
          </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-1/2 xl:w-4/12">
          <div class="flex items-center justify-center lg:justify-end">
            <div class="profileImgContainer">
              <img
                class="bg-white p-1.5 object-cover object-top rounded-full"
                src="/profile-pics/resized.jpg"
                alt="profile image"
                loading="lazy"
              />
              <!-- <div
                class="w-full h-full border-2 border-gray-100 bg-gray-100 absolute bottom-0 right-0 -mr-6 rounded-full"
                style="z-index: -1"
              ></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".leftText",
      start: "top center",
      end: "top center",
      // markers: true,
      // toggleActions: "restart pause reverse pause",
      // scrub: 1, // scrub is use set the amount of time to catch up, it kinda looks the scroll animation with ur scroller
    },
  });
  tl.addLabel("start")
    .from(".leftText", { opacity: 0, translateX: "-300px" })
    .addLabel("entering")
    .to(".leftText", { opacity: 1, translateX: "0px", duration: 1 })
    .addLabel("end");

  let imgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".profileImgContainer",
      start: "-75px center",
      end: "top center",
      // markers: true,
    },
  });
  imgTl
    .addLabel("start")
    .from(".profileImgContainer", { opacity: 0, scale: 0.5 })
    .addLabel("entering")
    .to(".profileImgContainer", { opacity: 1, scale: 1, duration: 1 })
    .addLabel("end");
});
</script>
