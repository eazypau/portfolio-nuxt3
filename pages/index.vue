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
      <WorkSection id="works" :working-projects="workingProjects" />
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
  "jQuery",
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
  {
    isReverse: false,
    title: "Saloon Booking Web",
    titleColor: "text-white",
    filterColor: "bg-slate-900 bg-opacity-60",
    imageUrl: "/project-ss/saloonbooking-ss.webp",
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
    description: "A game of tic tac toe in HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    isUrl: true,
    urlLink: "https://eazypau.github.io/tictactoe/",
    githubLink: "https://github.com/eazypau/tictactoe",
  },
];
const workingProjects = [
  {
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0621/0473/1822/files/LVLY_logo_410x.png?v=1660897607",
    imgAlt: "LVLY",
    heading: "LVLY",
    description: `LVLY is an e-commerce website for selling flower products. 
    Customers can choose their desired delivery date and timeslot for their order. 
    This was created using Shopify Liquid, HTML, CSS, and Javascript. The online 
    stores are available mainly in Southeast Asia (MY and SG) and Australia. 
    It allows customers to select their desired flower products, add-on products, 
    jar message, and greeting cards (only available in AU) and add them to their 
    orders.`,
    // url: "https://www.lvly.my/",
    urls: [
      {
        name: "LVLY AU",
        link: "https://www.lvly.com.au/",
      },
      {
        name: "LVLY MY",
        link: "https://www.lvly.my/",
      },
      {
        name: "LVLY SG",
        link: "https://www.lvly.sg/",
      },
    ],
  },
  {
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0560/6385/2702/files/BR_Logo_Black_updated_larger_410x.png?v=1652067362",
    imgAlt: "Bloomeroo",
    heading: "Bloomeroo",
    description: `Bloomeroo is an e-commerce website for selling flower products. 
    This was created using Shopify Liquid, HTML, CSS, and Javascript. The online 
    store is available only in Australia. Customer can choose their desired 
    delivery date and timeslot based on their postcode area. It allows customers 
    to select their desired flower products & add-on products and add them to 
    their orders.`,
    // url: "https://www.bloomeroo.com.au/",
    urls: [
      {
        name: "Bloomeroo",
        link: "https://www.bloomeroo.com.au/",
      },
    ],
  },
  {
    imgSrc:
      "https://cdn.shopify.com/s/files/1/1252/1803/files/FC-MY-Rectangle_410x.png?v=1666837710",
    imgAlt: "Flowerchimp",
    heading: "Flowerchimp",
    description: `Flowerchimp is an e-commerce website for selling flower products. 
    Customers can choose their desired delivery date and timeslot for their order. 
    This was created using Shopify Liquid, HTML, CSS, and Javascript. The online 
    stores are available in Southeast Asia (MY, SG, PH, HK, and ID). It allows customers 
    to select their desired flower products & add-on products and add them to 
    their orders.`,
    // url: "https://www.flowerchimp.com/",
    urls: [
      {
        name: "Flowerchimp MY",
        link: "https://www.flowerchimp.com/",
      },
      {
        name: "Flowerchimp SG",
        link: "https://www.flowerchimp.sg/",
      },
      {
        name: "Flowerchimp PH",
        link: "https://www.flowerchimp.com.PH/",
      },
      {
        name: "Flowerchimp HK",
        link: "https://www.flowerchimp.com.hk/",
      },
      {
        name: "Flowerchimp ID",
        link: "https://www.flowerchimp.com.id/",
      },
    ],
  },
  {
    imgSrc:
      "data:image/webp;base64,UklGRkAFAABXRUJQVlA4IDQFAABwHwCdASo+AEEAPikQh0KhoQmeAz4MAUJQBqP+Z2q4fdoJsB9oHaA20HmA/Un9juwB5KvWV+gB+pvpk+xP+2XsCfrFmEv4AdvLnw+5Hrh+1Xqq7Qj6m/Wvxh/LLhAPwz9TX9U/H38vOO6lV8h35N/Y/yY/r3nnfrn5Hc47+Q/0v8ceZ94Aewv/Mv7D+Mf8r+IL+Y+2P2lfN/+U/u/7dfQJ/Hf5n/hP7d+439h///1Aes39kvZc/VJofMmysqyWYDaH47yPF43KHn2EIn/eyIqQvStCsg7vfmLKK5Ma5tsPXnW+tOHoj27H4IyRmL0WbaO/zz3WWEVNL0EyH2xezEoPgE6sAAD+/7OBbf+4f95iE6X5KAsQuhHIAr45+rqEBXIS6znkkRSbrRAie0TQFToI4GlsqUsVn0UO3/WWb2lEu/PXvJ/8ED7p859eSsXj+/H2g+sLxHzcu/2Ddm//wVAWUgwhaEYJe/q9YGGg3bgLJ9BGR/3buDDKYS3bZZDi+vuklL0Bhz5KhrnfCxsLhzI04IW1bMPXHKqwT5s0Y1JcNX9M1f13siPGEodkHsJ7TdTAQNRffkEzbPdJ0oxPti8IBQ3JsjzzonBN9jV4oH+/CFM10uXfieAACec6+aTXTfV3/y8OMSqSXXnvn0lTHb8UodAZgdAvCTkAYIRRXni2B3Qzf+YLo/uq06vVjRd6ijtq5Dty/E0Y2TrcsRMt/PzhBHA7vsj7jvgmWAqVZJU3/xVbnPzOWzsWgqfec0Oj50H2OaNKqxBv/cNFlzMfVvmOkk+RpSxz1Vw7+BvE7do76Bei3uC9dmw7w1Zbriejl3AmeFpT/CEw+r055y2+jwIFnCSnfQGeWEDqCcIJSK/unfnm3lbDfY6NpuyF6LLoEOOO2y+U92w435ZH1MdpMgmqp//WtP56Znf2dLwoJaqSqorwlnRp/1YpD+ANqks5HtjEjmteW+1YEYicRkAbvDJfso3sNIeihYzJ+r+yKV3SG9uwJWtu9uiFtWoIGQVe9GKenObjR+VgeKKhnCmXAular4/vXJPNw8jKK14tevytUPsJ28mUNtN//1Q97nhgvzsrrIp8T1+ev8HjIJ8fyx5HGL11sSyLG0/1Vt2qccX/Nm/Zan0+1uJPwsZ2L6n5H/4azCbpfTmuQce/5S14PH9U+706UuRWNI6r7enzBTEvfF789SlmSGQV7vT8EFzKndRZ+FXdK2yL6n7HX2+vlyjb6Zl9SfWvg34HBFA5ynNH0AWKVKxJijwFbJhS+ti4NALY6lVIW/jUp7XCSjfUaaz8/oWz9xogOK8dzaVZH/WKJf/Pl9nGeqtIiBd3imn03a0ROGUwTtGf/UgWUrlPsgKsYoX7x5ikccLdQtuRdEOJ6r+JqTP+ITvP6HSVRDSYUw97TQqmX9orX15ce/w1yKgK0zWJapWy5NMFs1XlLHWzXShaMvg6lUoX/jgVqoLuybAi7wzMS0QkWdVpkAMr8T+L//34s7VB/o3BcRoJdLv/9UzDRByVZlZlTbkmhGIn2FkIa9LhOrW7m2b30Vhz5KcZOjKh/V8A6LfYaWMwESijnVq2fdg82EwYU6GZffHTMowbyL9ziszieiffSspF7htAxssX7alYvT7S//8jMpxx95nUzf+ujTByLTgjHHWgP/wLP47GCTRriGB6EMTYDuQDHgvatGdGIS976WTGIfAWgYvuxeSwvfT4UhZv9hLH2iTToh3+rDLzaYTZa4ZAUizpDFQYPcr7alfzCOYARqmKFv1IAAA=",
    imgAlt: "The Hacker Collection Website",
    heading: "The Hacker Collection Website",
    description: `A landing page website to display company information, businesses, 
    learning programs, etc. This was created using Vue, Nuxt3, TailwindCSS, 
    Javascript, and Headless UI.`,
    // url: "https://hackercollective.co/",
    urls: [
      {
        name: "THC Website",
        link: "https://hackercollective.co/",
      },
    ],
  },
];
</script>
