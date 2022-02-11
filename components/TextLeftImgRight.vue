<template>
  <section>
    <div class="container px-6 py-8 mx-auto">
      <div class="items-center lg:flex lg:space-x-6">
        <div class="lg:w-8/12 xl:w-9/12 subFontFamily leftText">
          <h2 class="text-3xl xl:text-4xl font-bold text-gray-800">
            Who am I?
          </h2>
          <div>
            <!-- <p
              class="mt-4 text-gray-600 lg:max-w-md xl:max-w-lg 2xl:max-w-2xl"
              style="word-spacing: 5px"
            >
              I am an ex mechanical engineer who likes to build things with
              code.
            </p> -->
            <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              Previously I worked as a full-time mechanical engineer in an M&E
              consultancy firm. At first, I thought I loved doing my job. As
              time goes by, I realize that I don't see myself wanting to
              continue working in this field in the future. I told myself is
              either I do something about it to change my life or do nothing
              about it.
            </p>
            <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              After giving some thought to it, I decided to do something about
              it. At that moment, I came to remember that I was interested in
              coding when I was learning C programming during my first-year
              degree. From that onwards, My journey in coding begins.
            </p>
            <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              I started by self-learning Python following the guides from a
              book, titled "Learn Python 3 The Hard Way" by Zed A. Shaw. In the
              beginning, It started well. I learned Object-Oriented Programming
              and created a simple option choosing game. However, I notice that
              this will not take me far enough. I did some research afterward
              and found that web development suits my interest since I want to
              build personal projects.
            </p>
            <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              When I saw an advertisement from THC promoting their self-learning
              program for web development, the next thing that came to mind is
              let's try this and see how it goes. My coding journey continues. I
              was coding every day, sometimes late at night, and on weekends
              while still having my full-time job.
            </p>
            <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              After six months, the co-founder from THC approached me. He asked
              whether I would be interested to take up an internship in their
              company. I accepted their offer and, here I am working as a
              front-end web developer in
              <a
                class="font-bold text-indigo-600"
                href="https://hackercollective.co/teams"
                >The Hacker Collective</a
              >.
            </p>
            <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              Currently, I'm open to new opportunities where I can contribute my
              skills to help companies achieve their goals.
            </p>
            <!-- <p
              class="mt-4 text-gray-500 lg:max-w-md xl:max-w-lg 3xl:max-w-xl md:text-lg xl:text-xl"
              style="word-spacing: 5px"
            >
              Hi, I am Po Yi Zhi, frontend web developer in
              <a
                class="font-bold text-indigo-600"
                href="https://hackercollective.co/teams"
                >The Hacker Collective</a
              >
              . I was born in Melaka, Malaysia. Graduated with Bachelor of
              degree in Mechanical Engineering in year 2019 from Multimedia
              University (MMU). Previously I worked as a mechanical engineer for
              about 2 years in M&E consultancy industry.
            </p> -->
          </div>

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

        <div class="mt-8 lg:mt-0 lg:w-4/12 xl:w-4/12">
          <div class="flex items-center justify-center lg:justify-end">
            <div class="profileImgContainer">
              <img
                class="bg-white p-1.5 object-cover object-top rounded-full"
                src="/profile-pics/profile.webp"
                alt="profile image"
                loading="lazy"
              />
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
