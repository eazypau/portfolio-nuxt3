<template>
  <section
    id="about"
    class="overflow-x-hidden flex items-center bg-white py-8 2xl:pb-10 md:py-20 lg:py-0 dark:bg-[#121212]"
  >
    <div class="px-6 mx-auto md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <div class="items-center justify-between lg:flex lg:space-x-10">
        <div class="lg:w-7/12 leftText">
          <h2 class="profile-title">Who am I?</h2>
          <div class="profile-description-container">
            <!-- <p>
              Previously I worked as a full-time mechanical engineer in an M&E
              consultancy firm. At first, I thought I loved doing my job. As
              time goes by, I realize that I don't see myself wanting to
              continue working in this field in the future. I told myself is
              either I do something about it to change my life or do nothing
              about it.
            </p> -->
            <!-- <p>
              Previously I worked as a full-time mechanical engineer in an M&E
              consultancy firm. At first, I thought I loved doing my job. As
              time goes by, I realize that I don't see myself wanting to
              continue working in this field in the future. I told myself is
              either I do something about it to change my life or do nothing
              about it. Currently, I am working as a front-end web developer in
              <a
                class="font-bold text-indigo-600 hover:underline"
                href="https://limitless.my/"
                >Limitless Technology</a
              >.
            </p> -->
            <!-- <p
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
              When I saw an advertisement from The Hacker Collective (THC)
              promoting their self-learning program for web development, the
              next thing that came to mind is let's try this and see how it
              goes. My coding journey continues. I was coding every day,
              sometimes late at night, and on weekends while still having my
              full-time job.
            </p>
            <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              After six months, the co-founder from THC approached me. He asked
              whether I would be interested to take up an internship in their
              company. I accepted their offer and worked as a front-end web
              developer in
              <a
                class="font-bold text-indigo-600 hover:underline"
                href="https://hackercollective.co/teams"
                >The Hacker Collective</a
              >&nbsp;for a period of time.
            </p> -->
            <!-- <p
              class="mt-4 text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl"
              style="word-spacing: 5px"
            >
              Currently, I am working as a front-end web developer in
              <a class="font-bold hover:underline" href="https://limitless.my/"
                >Limitless Technology</a
              >.
            </p> -->
            <p>
              Hi there! I'm a self-taught developer with a background in
              mechanical engineering (graduated from Multimedia University).
              After discovering my passion for web development, I made a career
              change and became a frontend web developer. Currently working as a
              Software Developer in
              <a
                class="font-bold text-red-600 dark:text-red-300 hover:underline"
                href="https://jagasolution.com/jagaapp/"
                >JagaApp (RISB)</a
              >.
            </p>

            <p>
              I'm passionate in learning new technologies, building responsive
              websites, and documenting my working process when it comes to
              complicated features.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <div class="summary-skill-list-container">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Vue</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>jQuery</li>
              <li>Shopify Liquid</li>
              <li>TailwindCSS</li>
            </ul>
          </div>

          <div class="profile-social-icons">
            <a
              href="https://www.instagram.com/yzpo/"
              aria-label="Instagram"
              target="blank"
            >
              <IconsInstaIcon />
            </a>

            <a
              href="https://www.facebook.com/yizhipo"
              aria-label="Facebook"
              target="blank"
            >
              <IconsFacebookIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/yzpo/"
              aria-label="Linkden"
              target="blank"
            >
              <IconsLinkedInIcon />
            </a>

            <a
              href="https://github.com/eazypau"
              aria-label="Github"
              target="blank"
            >
              <IconsGithubIcon />
            </a>
          </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-4/12 xl:w-4/12 right-img-container">
          <div class="flex items-center justify-center lg:justify-end group">
            <div class="profile-img-container">
              <img
                src="/profile-pics/profile.webp"
                width="350"
                height="350"
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
    .from(".leftText", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".leftText", { opacity: 1, translateX: "0px", duration: 1 })
    .addLabel("end");

  let imgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".right-img-container",
      start: "top center",
      end: "top center",
      // markers: true,
    },
  });
  imgTl
    .addLabel("start")
    .from(".right-img-container", { opacity: 0, translateX: "100px" })
    .addLabel("entering")
    .to(".right-img-container", {
      opacity: 1,
      translateX: "0px",
      duration: 1,
    })
    .addLabel("end");
});
</script>
<style scoped>
@media screen and (min-width: 1024px) {
  section {
    height: calc(100vh - 227px);
  }
}
</style>
