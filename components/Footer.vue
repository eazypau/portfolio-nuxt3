<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- nav - start -->
        <nav v-if="showNav">
          <a
            v-for="(item, index) in navigation"
            :key="item.id"
            :href="item.href"
            class="footerBtn"
            >{{ item.name }}</a
          >
          <!-- <a href="/#about" class="footerBtn">About</a>
          <a href="/#skills" class="footerBtn">Skills</a>
          <a href="/#works" class="footerBtn">Works</a>
          <a href="/#projects" class="footerBtn">Projects</a>
          <a href="/#contact" class="footerBtn">Contact</a> -->
        </nav>
        <!-- nav - end -->

        <!-- social - start -->
        <div>
          <a
            href="https://www.instagram.com/yzpo/"
            aria-label="Instagram"
            target="_blank"
            class="footerIcon"
          >
            <IconsInstaIcon />
          </a>

          <a
            href="https://www.facebook.com/yizhipo"
            aria-label="Facebook"
            target="_blank"
            class="footerIcon"
          >
            <IconsFacebookIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/yzpo/"
            aria-label="Linkden"
            target="_blank"
            class="footerIcon"
          >
            <IconsLinkedInIcon />
          </a>

          <a
            href="https://github.com/eazypau"
            aria-label="Github"
            target="_blank"
            class="footerIcon"
          >
            <IconsGithubIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present Po YZ. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
//props
const props = defineProps({
  showNav: {
    type: Boolean,
    default: true,
  },
});

// utils and hooks
const { navigation } = useConstants();
const CURRENT_YEAR = new Date().getFullYear();
</script>
