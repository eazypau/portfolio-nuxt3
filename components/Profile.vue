<template>
  <section class="profile">
    <div class="w-48 mx-auto lg:ml-0">
      <img
        src="/profile-pics/profile.webp"
        width="350"
        height="350"
        alt="profile image"
        loading="lazy"
        class="rounded-lg"
      />
    </div>
    <article class="mt-3">
      <h1>Po Yi Zhi</h1>
      <p class="text-center lg:text-left">Software Engineer</p>

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

        <a href="https://github.com/eazypau" aria-label="Github" target="blank">
          <IconsGithubIcon />
        </a>
      </div>
    </article>
  </section>
</template>
