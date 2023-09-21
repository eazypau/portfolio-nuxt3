<template>
  <section id="timeline">
    <h2>Timeline</h2>
    <ul>
      <li v-for="(item, index) in timeline">
        <div v-if="index !== 0" class="line"></div>
        <div class="timeline-card">
          <div>
            <h3>
              {{ item.title }}
            </h3>
            <span><CalendarIcon class="w-5 h-5" />{{ item.date }}</span>
          </div>
          <p>
            {{ item.description }}
          </p>
          <a v-if="item.link" :href="item.link.url" target="_blank">
            {{ item.link.text }} <LinkIcon class="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { CalendarIcon, LinkIcon } from "@heroicons/vue/24/outline";
const timeline = [
  {
    date: "July 2023",
    title: "Started @ JagaApp",
    description: "Joined the JagaApp team",
    // icon: "",
    link: {
      text: "Visit JagaApp",
      url: "https://jagaapp.com/",
    },
  },
  {
    date: "May 2022",
    title: "Started @ Limitless Technologies",
    description: "Joined the Limitless Technologies (LTG) team",
    // icon: "",
    link: {
      text: "Visit LTG",
      url: "https://limitless.my/",
    },
  },
  {
    date: "October 2021",
    title: "First Developer Role",
    description:
      "Joined The Hacker Collective (THC) Team as Frontend Web Developer",
    // icon: "",
    link: {
      text: "Visit THC",
      url: "https://hackercollective.co/",
    },
  },
  {
    date: "April 2021",
    title: "Self Taught Journey Begins",
    description:
      "Started my journey in self learning programming (web development)",
    // icon: "",
  },
  {
    date: "August 2019",
    title: "First Mechanical Engineer Role",
    description:
      "Began my job as a Mechanical Engineer in M&E Consultancy at Durianê Professional",
    // icon: "",
    link: {
      text: "Visit Durianê Professional",
      url: "https://www.duriane.com/",
    },
  },
  {
    date: "May 2019",
    title: "Graduated University",
    description:
      "Completed my Bachelor's Degree in Mechanical Engineering at Multimedia University (MMU)",
    // icon: "",
  },
  {
    date: "March 2018",
    title: "Internship",
    description:
      "Began an internship as assistent engineer at Protech Builders",
    // icon: "",
  },
  {
    date: "June 2015",
    title: "Start University",
    description:
      "Began my study in Mechanical Engineering at Multimedia University (MMU)",
    // icon: "",
    link: {
      text: "Visit MMU",
      url: "https://www.mmu.edu.my/",
    },
  },
];
</script>
