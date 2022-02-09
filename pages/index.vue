<template>
  <div>
    <Header />
    <div>
      <div
        id="about"
        class="md:w-8/12 lg:w-9/12 xl:w-8/12 3xl:w-7/12 pt-16 md:py-20 lg:pt-24 mx-auto"
      >
        <TextLeftImgRight />
      </div>
    </div>
    <Skills id="skills" />
    <div id="projects"></div>
    <div class="pt-28 pb-20 px-4 lg:px-0">
      <h2 class="subTitle mb-10 subFontFamily">
        Projects That I Have Worked On
      </h2>
      <!-- <div class="lg:w-10/12 xl:w-9/12 2xl:w-8/12 space-y-7 md:space-y-10 lg:space-y-14 2xl:space-y-20 mx-auto">
				<CardsNewProject v-for="project in projects" :key="project" :project-details="project" :is-reverse="project.isReverse" />
			</div> -->
      <div
        class="px-4 md:px-0 md:w-8/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto"
      >
        <CardsNewProject
          v-for="project in projects"
          :key="project"
          :project-details="project"
          :is-reverse="project.isReverse"
        />
      </div>
    </div>
    <div class="flex flex-col items-center px-4 py-24">
      <h2 class="subTitle mb-10 md:mb-16 subFontFamily">
        Some of My Favourite Activities
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <CardsHobby
          v-for="item in hobbies"
          :key="item"
          :title="item.title"
          :content="item.text"
          :class-bg="item.classBg"
          class="relative"
        />
      </div>
    </div>
    <Contact id="contact" />
  </div>
</template>
<script setup>
// import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
// import { ChevronUpIcon } from "@heroicons/vue/solid";
// const reversed = true;
const hobbies = [
  {
    title: "Drink Black tea",
    text: "Best way to start the morning",
    classBg: "bg-tea",
  },
  {
    title: "Blog Writing",
    text: "To pen down my thoughts",
    classBg: "bg-blog",
  },
  {
    title: "Grocery Shopping",
    text: "Buy some of my favourite snacks",
    classBg: "bg-grocer",
  },
  {
    title: "Listening to music",
    text: "Recent favourites: Alec Benjamin, HONNE and Yoasobi",
    classBg: "bg-music",
  },
];
const projects = [
  {
    isReverse: false,
    title: "Eazy Chat App",
    imageUrl: "/project-ss/chatapp-ss.webp",
    gifUrl: "/project-gif/chatapp.gif",
    description:
      "A scalable real-time chat app designed to send and receive messages from users.",
    techStack: [
      "Vue",
      "TS",
      "Vite",
      "TailwindCSS",
      "Firebase",
      "Pinia",
      "Vue-router",
    ],
    isUrl: true,
    urlLink: "https://eazy-chat-app.netlify.app/login",
    githubLink: "https://github.com/eazypau/chatApp",
  },
  {
    isReverse: true,
    title: "Spotify Clone",
    imageUrl: "/project-ss/spotify-ss.webp",
    gifUrl: "/project-gif/spotify-clone-short.gif",
    description:
      "A Spotify clone web app. Built to view your saved and created playlist. It also can control your Spotify app playback state.",
    techStack: [
      "Vue",
      "Vite",
      "TailwindCSS",
      "Vuex",
      "Vue-router",
      "Spotify Web API",
    ],
    isUrl: false,
    // urlLink: "https://eazypau.github.io/tictactoe/",
    githubLink: "https://github.com/eazypau/spotify-clone-web",
  },
  {
    isReverse: false,
    title: "Saloon Booking Web",
    imageUrl: "/project-ss/saloonbooking-ss.webp",
    gifUrl: "/project-gif/saloonbooking.gif",
    description:
      "A door to door saloon appointment booking website allowing users to book their appointment at anytime.",
    techStack: [
      "Vue",
      "TS",
      "Vite",
      "TailwindCSS",
      "Firebase",
      "Vuex",
      "Vue-router",
    ],
    isUrl: true,
    urlLink: "https://saloonbooking-95d49.web.app/",
    githubLink: "https://github.com/eazypau/saloonbooking",
  },
  {
    isReverse: true,
    title: "Kanban Board",
    imageUrl: "/project-ss/kanban-board.webp",
    gifUrl: "/project-gif/kanban-board.gif",
    description:
      "A simple todo app with priority filtering features using Vuejs, TailwindCSS and Firebase.",
    techStack: [
      "React",
      "SASS",
      "TailwindCSS",
      "Local Storage",
      "React-beautiful-dnd",
    ],
    isUrl: true,
    urlLink: "https://eazypau.github.io/kanban-board-react/",
    githubLink: "https://github.com/eazypau/kanban-board-react",
  },
  {
    isReverse: false,
    title: "Todo Web App",
    imageUrl: "/project-ss/todo-ss.webp",
    gifUrl: "/project-gif/todo.gif",
    description:
      "A simple todo app with priority filtering features using Vuejs, TailwindCSS and Firebase.",
    techStack: ["Vue", "Vite", "TailwindCSS", "Firebase"],
    isUrl: true,
    urlLink: "https://bloginvue-2c3c7.web.app/",
    githubLink: "https://github.com/eazypau/todolist",
  },
  {
    isReverse: true,
    title: "Tic Tac Toe",
    imageUrl: "/project-ss/tictactoe-ss.webp",
    gifUrl: "/project-gif/tictactoe.gif",
    description: "A game of tic tac toe in HTML, CSS and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    isUrl: true,
    urlLink: "https://eazypau.github.io/tictactoe/",
    githubLink: "https://github.com/eazypau/tictactoe",
  },
];
</script>
