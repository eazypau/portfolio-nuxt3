<template>
  <div class="bg-white pt-2 sm:pt-2">
    <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex flex-col items-center border-t pt-6 xl:pt-4 2xl:pt-6">
        <!-- nav - start -->
        <nav
          class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4 headerFont"
        >
          <a href="/#about" class="footerBtn">About</a>
          <a href="/#skills" class="footerBtn">Skills</a>
          <a href="/#projects" class="footerBtn">Projects</a>
          <!-- <a href="/#works" class="footerBtn">Works</a> -->
          <a href="/#contact" class="footerBtn">Contact</a>
        </nav>
        <!-- nav - end -->

        <!-- social - start -->
        <div class="flex gap-4">
          <a
            href="https://www.instagram.com/yzpo/"
            aria-label="Instagram"
            target="_blank"
            class="footerIcon"
          >
            <IconsInstaIcon class="w-6 h-6" />
          </a>

          <a
            href="https://www.facebook.com/yizhipo"
            aria-label="Facebook"
            target="_blank"
            class="footerIcon"
          >
            <IconsFacebookIcon class="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/yzpo/"
            aria-label="Linkden"
            target="_blank"
            class="footerIcon"
          >
            <IconsLinkedInIcon class="w-6 h-6" />
          </a>

          <a
            href="https://github.com/eazypau"
            aria-label="Github"
            target="_blank"
            class="footerIcon"
          >
            <IconsGithubIcon class="w-6 h-6" />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="text-gray-500 text-sm text-center py-8 xl:py-4 2xl:py-8 headerFont">
        © 2022 - Present Po YZ. All rights reserved.
      </div>
    </footer>
  </div>
</template>
