<template>
  <div>
    <Header />
    <div>
      <div class="md:w-8/12 lg:w-9/12 xl:w-8/12 3xl:w-7/12 pt-16 md:py-20 lg:pt-24 mx-auto" id="about">
        <TextLeftImgRight />
        <!-- <TextRightImgLeft /> -->
      </div>
    </div>
    <!-- work experience -->
    <!-- <div class="py-20 lg:pt-24 px-2 sm:px-0">
      <h2 class="text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-10">Working Experience</h2>
      <div class="w-full max-w-md md:max-w-lg lg:max-w-3xl p-2 bg-gray-50 shadow mx-auto rounded-2xl space-y-2">
        <Disclosure v-slot="{ open, close }" v-for="job in career" :key="job.id">
          <DisclosureButton
            class="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black bg-white shadow-md rounded-lg hover:bg-yellow-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            @click="accept(close)"
          >
            <span>{{ job.companyName }}</span>
            <ChevronUpIcon :class="open ? 'transform rotate-180' : ''" class="w-5 h-5 text-gray-700" />
          </DisclosureButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <DisclosurePanel class="px-4 pt-4 pb-2 text-gray-800">
              <ul class="font-medium">
                <li class="mb-2">Position: {{ job.position }}</li>
                <li class="mb-2">Duration: {{ job.duration }}</li>
                <li>
                  <div class="mb-2">Job Scope:</div>
                  <ul v-for="item in job.jobDescription" :key="item" class="list-disc p-0.5 ml-7 text-justify">
                    <li>{{ item }}</li>
                  </ul>
                </li>
              </ul>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div> -->
    <Skills id="skills" />
    <div id="projects"></div>
    <div class="pt-28 pb-20 px-4 iphone:px-6 md:px-4">
      <h2 class="text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-10 subFontFamily">Projects That I Have Worked On</h2>
      <div class="lg:w-10/12 xl:w-9/12 2xl:w-8/12 space-y-7 md:space-y-10 lg:space-y-14 2xl:space-y-20 mx-auto">
        <CardsProject v-for="project in projects" :key="project" :project-details="project" :is-reverse="project.isReverse" />
      </div>
    </div>
    <!-- Need project section -->
    <div class="flex flex-col items-center px-4 py-24">
      <h2 class="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-10 md:mb-16 subFontFamily">Some of My Favourite Activities</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10">
        <CardsHobby v-for="item in hobbies" :key="item" :title="item.title" :content="item.text" :classBg="item.classBg" class="relative" />
      </div>
    </div>
    <!-- use dark bg color above -->
    <Contact id="contact" />
  </div>
</template>
<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
  import { ChevronUpIcon } from "@heroicons/vue/solid";
  const reversed = true;
  const hobbies = [
    {
      title: "Drink Black tea",
      // text: "One of my favourite beverage",k
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
  const career = [
    {
      id: 1,
      companyName: "Protech Builders Sdn. Bhd.",
      position: "Assistant Engineer Intern",
      duration: "March 2018 ~ June 2018",
      jobDescription: [
        "Participate in site visit.",
        "Prepare and study technical drawings, specifications of electrical systems, and topographical maps to ensure that installation and operation compiled to standards and customer requirements.",
        "Prepare specifications of purchase of materials and equipment.",
        "To cooperate with engineering and other departments in the company and provide effective technical support to customer.",
      ],
    },
    {
      id: 2,
      companyName: "Durianê Professional Sdn. Bhd.",
      position: "Mechanical Engineer",
      duration: "August 2019 ~ September 2021",
      jobDescription: [
        "Cold water and sanitary plumbing design.",
        "Design fire protection system for buildings in accordance to Malaysia Standard (MS), NFPA and FM.",
        "Prepare fully hydraulic calculation simulation for sprinkler system.",
        "Design air conditioning and mechanical ventilation system for buildings.",
        "Prepare tender documents for various mechanical service package.",
        "Evaluate compliance of tenderer submission",
        "Prepare authority submission for repective authorities required for the project",
        "Work with other multidiscipline Engineers and other professional including Architect and Surveyor in projects.",
      ],
    },
  ];
  const projects = [
    {
      isReverse: false,
      title: "Spotify Clone Web App",
      imageUrl: "/project-ss/spotify-ss.webp",
      gifUrl: "/project-gif/spotify-clone-short.gif",
      description:
        "A Spotify clone web app. Built to view your saved and created playlist. It also can control your Spotify app playback state.",
      techStack: ["Vue", "Vite", "TailwindCSS", "Vuex", "Vue-router", "Spotify Web API"],
      isUrl: false,
      // urlLink: "https://eazypau.github.io/tictactoe/",
      githubLink: "https://github.com/eazypau/spotify-clone-web",
    },
    {
      isReverse: true,
      title: "Eazy Chat App",
      imageUrl: "/project-ss/chatapp-ss.webp",
      gifUrl: "/project-gif/chatapp.gif",
      description:
        "A scalable real-time chat app designed to send and receive messages from users.",
      techStack: ["Vue", "TS", "Vite", "TailwindCSS", "Firebase", "Pinia", "Vue-router"],
      isUrl: true,
      urlLink: "https://eazy-chat-app.netlify.app/login",
      githubLink: "https://github.com/eazypau/chatApp",
    },
    {
      isReverse: false,
      title: "Saloon Booking Web",
      imageUrl: "/project-ss/saloonbooking-ss.webp",
      gifUrl: "/project-gif/saloonbooking.gif",
      description:
        "A door to door saloon appointment booking website allowing users to book their appointment at anytime. Lesser exposure to the crowd, lower the risk of COVID infection.",
      techStack: ["Vue", "TS", "Vite", "TailwindCSS", "Firebase", "Vuex", "Vue-router"],
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
      techStack: ["React", "SASS", "TailwindCSS", "Local Storage", "React-beautiful-dnd"],
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
  onMounted(() => {
    window.scrollTo(0, 0);
  });
</script>
