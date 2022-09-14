<template>
  <NuxtLayout name="default">
    <div>
      <Header />
      <div class="bg-white">
        <div
          id="about"
          class="md:w-10/12 lg:w-10/12 xl:w-9/12 pt-16 md:py-20 lg:pt-24 mx-auto"
        >
          <TextLeftImgRight />
        </div>
      </div>
      <Skills id="skills" :skill-set="skillSet" />
      <div id="projects"></div>
      <ProjectSection :projects="projects" />
      <HobbySection :hobbies="hobbies" />
      <div class="bg-white">
        <Contact id="contact" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  layout: false,
});
const skillSet = [
  "HTML",
  "CSS",
  "JavaScript",
  "Vue",
  "Nuxt",
  "React",
  "TypeScript",
  "Tailwind",
  "Shopify",
  "Liquid",
  "SASS",
  "Bootstrap",
  "Firebase",
  "Git",
];
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
    text: "Recent favourites: Bastille, HONNE, Milet and Yoasobi",
    classBg: "bg-music",
  },
];
const projects = [
  {
    isReverse: false,
    title: "Eazy Chat App",
    titleColor: "text-white",
    filterColor: "bg-slate-900 bg-opacity-60",
    imageUrl: "/project-ss/chatapp-ss.webp",
    // gifUrl: "/project-gif/chatapp.gif",
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
    titleColor: "text-white",
    filterColor: "bg-slate-500 mix-blend-hard-light",
    imageUrl: "/project-ss/spotify-ss.webp",
    // gifUrl: "/project-gif/spotify-clone-short.gif",
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
    githubLink: "https://github.com/eazypau/spotify-clone-web",
  },
  {
    isReverse: false,
    title: "Shopping Cart",
    titleColor: "text-white",
    filterColor: "bg-slate-700 bg-opacity-60",
    imageUrl: "/project-ss/shopping-cart-ss.webp",
    // gifUrl: "/project-gif/todo.gif",
    description:
      "A static E-Commerce website to demonstrate the flow of a user purchase",
    techStack: ["React", "SASS", "React-router"],
    isUrl: true,
    urlLink: "https://eazypau.github.io/shopping-cart-react/#/",
    githubLink: "https://github.com/eazypau/shopping-cart-react",
  },
  {
    isReverse: true,
    title: "Kanban Board",
    titleColor: "text-white",
    filterColor: "bg-slate-800 bg-opacity-60",
    imageUrl: "/project-ss/kanban-board.webp",
    // gifUrl: "/project-gif/kanban-board.gif",
    description: "A Kanban board to store the user's task list.",
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
  // {
  //   isReverse: false,
  //   title: "To-do List App",
  //   titleColor: "text-white",
  //   filterColor: "bg-slate-700 bg-opacity-60",
  //   imageUrl: "/project-ss/todo-ss.webp",
  //   // gifUrl: "/project-gif/todo.gif",
  //   description: "A simple to-do app with priority filtering features.",
  //   techStack: ["Vue", "Vite", "TailwindCSS", "Firebase"],
  //   isUrl: true,
  //   urlLink: "https://bloginvue-2c3c7.web.app/",
  //   githubLink: "https://github.com/eazypau/todolist",
  // },
  {
    isReverse: false,
    title: "Saloon Booking Web",
    titleColor: "text-white",
    filterColor: "bg-slate-900 bg-opacity-60",
    imageUrl: "/project-ss/saloonbooking-ss.webp",
    // gifUrl: "/project-gif/saloonbooking.gif",
    description:
      "A door-to-door saloon appointment booking website allows users to book their appointment at any time.",
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
    title: "Tic Tac Toe",
    titleColor: "text-white",
    filterColor: "bg-zinc-700 mix-blend-hard-light",
    imageUrl: "/project-ss/tictactoe-ss.webp",
    // gifUrl: "/project-gif/tictactoe.gif",
    description: "A game of tic tac toe in HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    isUrl: true,
    urlLink: "https://eazypau.github.io/tictactoe/",
    githubLink: "https://github.com/eazypau/tictactoe",
  },
];
</script>
