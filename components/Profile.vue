<template>
  <section class="profile">
    <div class="w-64 mx-auto lg:ml-0">
      <img
        src="/profile-pics/square-profile.jpeg"
        width="819"
        height="819"
        alt="profile image"
        loading="lazy"
        class="rounded-lg profile-img"
      />
    </div>
    <article class="mt-3">
      <h1 class="profile-text">Po Yi Zhi</h1>
      <p class="text-center lg:text-left profile-text">Senior Software Engineer</p>

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
