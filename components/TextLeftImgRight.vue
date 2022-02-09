<template>
  <section>
    <div class="container px-6 py-8 mx-auto">
      <div class="items-center lg:flex lg:space-x-6">
        <div class="lg:w-7/12 xl:w-9/12 subFontFamily">
          <h2 class="text-3xl xl:text-4xl font-bold text-gray-800">
            Who am I?
          </h2>

          <p
            class="mt-4 text-gray-500 lg:max-w-md xl:max-w-lg 3xl:max-w-xl md:text-lg xl:text-xl"
            style="word-spacing: 5px"
          >
            Hi, I am Po Yi Zhi, frontend web developer in
            <a
              class="font-bold text-blue-600"
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
            <div
              class="relative sm:min-w-sm lg:min-w-min lg:max-w-lg xl:min-w-sm bg-green-300 rounded-xl"
            >
              <img
                class="object-cover object-top w-full h-64 rounded-xl shadow-md hover:shadow-lg hover:shadow-gray-300 hover:mix-blend-darken mix-blend-normal shadow-gray-300 transition ease-linear duration-300"
                src="/profile-pics/profile.webp"
                alt="profile image"
                loading="lazy"
              />
              <div
                class="w-full h-full border-2 border-gray-100 bg-gray-100 absolute bottom-0 right-0 -mb-5 -mr-5 rounded-xl"
                style="z-index: -1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
