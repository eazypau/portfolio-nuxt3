<template>
  <section class="contact-section">
    <div class="contact-section-width">
      <div>
        <div class="img-container">
          <!-- <div
            class="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-50"
          >
            <UserIcon class="w-9 h-9 lg:w-10 lg:h-10" />
          </div> -->
          <div>
            <img
              src="/undraw_personal_email.svg"
              alt="personal email svg"
              width="890"
              height="730"
            />
          </div>
        </div>
        <div class="details-cta-container">
          <div>
            <h2>Get in touch with me</h2>
            <!-- <p
              class="text-base text-justify text-gray-600 md:text-lg 2xl:text-xl"
              style="word-spacing: 5px"
            >
              I'm seeking opportunities to work with companies that can improve
              my skills not just in tech but also to be able to learn to lead
              and teach others. If I am the person you are looking for, feel
              free to reach me through email or my contact information in my
              resume.
            </p> -->
            <p>
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question, want to work
              together or just want to say hi, I’ll try my best to get back to
              you!
            </p>
          </div>
          <div>
            <!-- <a
              href="/resume/my-resume.pdf"
              download="resume_poyizhi"
              target="_blank"
            >
              <PaperClipIcon /> My Resume
            </a> -->
            <a href="mailto:poyizhi@gmail.com"> <EnvelopeIcon /> Say Hello! </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { EnvelopeIcon, PaperClipIcon } from "@heroicons/vue/24/outline";
</script>
