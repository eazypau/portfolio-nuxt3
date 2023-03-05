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
      <Skills :skill-set="skillSet" />
      <WorkSection :working-projects="workingProjects" />
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
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web developer portfolio | Front End Developer - Po Yi Zhi",
  author: {
    "@type": "Person",
    "@id": "#poyizhi",
  },
  url: "https://www.eazypau.com/",
  description:
    "Personal Portfolio Website. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Po Yi Zhi, Yi Zhi, Po YZ, YZ Po, eazypau, Malaysia",
  image: "https://www.eazypau.com/profile-pics/profile.webp",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#poyizhi",
  name: "Po Yi Zhi",
  email: "poyizhi@gmail.com",
  url: "https://www.eazypau.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
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
  // "Bootstrap",
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
    title: "Journaling",
    text: "To pen down my thoughts",
    classBg: "bg-journaling",
  },
  {
    title: "Learning new technologies/framework",
    text: "To explore and expand my skillsets",
    classBg: "bg-programming",
  },
  // {
  //   title: "Blog Writing",
  //   text: "To pen down my thoughts",
  //   classBg: "bg-blog",
  // },
  // {
  //   title: "Grocery Shopping",
  //   text: "Buy some of my favourite snacks",
  //   classBg: "bg-grocer",
  // },
  {
    title: "Listening to music",
    text: "Recent favourites: Bastille, HONNE, Milet and Yoasobi",
    classBg: "bg-music",
  },
];
const projects = [
  {
    isReverse: true,
    title: "Order Management App",
    titleColor: "text-white",
    filterColor: "bg-slate-900 bg-opacity-60",
    imageUrl: "/project-ss/order-management.webp",
    description: "An order creation and management web app.",
    techStack: [
      "NextJS",
      "TS",
      "TailwindCSS",
      "Prisma",
      "tRPC",
      "Zod",
      "HeadlessUI",
    ],
    isUrl: true,
    urlLink: "http://order-creation-web-app-vd9x.vercel.app/",
    githubLink: "https://github.com/eazypau/order-creation-web-app",
  },
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
  // {
  //   isReverse: true,
  //   title: "Tic Tac Toe",
  //   titleColor: "text-white",
  //   filterColor: "bg-zinc-700 mix-blend-hard-light",
  //   imageUrl: "/project-ss/tictactoe-ss.webp",
  //   description: "A game of tic tac toe in HTML, CSS, and JavaScript.",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   isUrl: true,
  //   urlLink: "https://eazypau.github.io/tictactoe/",
  //   githubLink: "https://github.com/eazypau/tictactoe",
  // },
];
const workingProjects = [
  {
    image: {
      src: "/work/LVLY_logo.jpg",
      alt: "LVLY",
      width: "410",
      height: "117",
    },
    imageShowcase: [
      {
        src: "/work/LVLY-productpage.png",
        alt: "LVLY product page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/LVLY-homepage.png",
        alt: "LVLY home page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/LVLY-cartpage.png",
        alt: "LVLY cart page",
        width: "726",
        height: "460",
      },
    ],
    heading: "LVLY",
    // description: `LVLY, Bloomeroo, and Flowerchimp are e-commerce websites for selling flower products.
    // This was created using Shopify Liquid, HTML, CSS, and Javascript. Customers can choose their desired
    // delivery date and timeslot for their order. It allows customers to select their desired flower products
    // , add-on products, and gifts for various occasions. The online stores are available mainly in Southeast
    // Asia and Australia.`,
    description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
    With its wide selection of blooms, LVLY is the perfect choice for those who are looking for a unique and special
    way to show their love and appreciation. From classic roses to exotic orchids, LVLY has something for everyone.
    Customers can choose from a variety of bouquets, vases and boxes to make sure that their gift is as special and
    unique as they are. With same-day delivery options,  LVLY ensures that its customers can get the perfect
    arrangement for any occasion.`,
    urls: [
      {
        name: "LVLY AU",
        link: "https://www.lvly.com.au/",
      },
      {
        name: "LVLY MY",
        link: "https://www.lvly.my/",
      },
    ],
  },
  {
    image: {
      src: "/work/FC-MY.jpg",
      alt: "Flowerchimp",
      width: "410",
      height: "205",
    },
    imageShowcase: [
      {
        src: "/work/FC-productpage.png",
        alt: "Flowerchimp product page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/FC-homepage.png",
        alt: "Flowerchimp home page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/FC-cartpage.png",
        alt: "Flowerchimp cart page",
        width: "726",
        height: "460",
      },
    ],
    heading: "Flowerchimp",
    // description: `LVLY, Bloomeroo, and Flowerchimp are e-commerce websites for selling flower products.
    // This was created using Shopify Liquid, HTML, CSS, and Javascript. Customers can choose their desired
    // delivery date and timeslot for their order. It allows customers to select their desired flower products
    // , add-on products, and gifts for various occasions. The online stores are available mainly in Southeast
    // Asia and Australia.`,
    description: `Flowerchimp is an online flower shop that offers a wide selection of beautiful bouquets and
    arrangements to suit any occasion. Customers can choose from a variety of flowers, vases and boxes to make
    sure their gift is special and unique. With same-day delivery options, Flowerchimp ensures their customers
    can get the perfect arrangement for any event. From classic roses to exotic orchids, Flowerchimp has something
    for everyone and is the perfect choice for those who want to show their love and appreciation.`,
    urls: [
      {
        name: "Flowerchimp MY",
        link: "https://www.flowerchimp.com/",
      },
    ],
  },
  {
    image: {
      src: "/work/BR_Logo.jpg",
      alt: "Bloomeroo",
      width: "410",
      height: "82",
    },
    imageShowcase: [
      {
        src: "/work/BL-productpage.png",
        alt: "Bloomeroo product page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/BL-homepage.png",
        alt: "Bloomeroo home page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/BL-cartpage.png",
        alt: "Bloomeroo cart page",
        width: "726",
        height: "460",
      },
    ],
    heading: "Bloomeroo",
    // description: `LVLY, Bloomeroo, and Flowerchimp are e-commerce websites for selling flower products.
    // This was created using Shopify Liquid, HTML, CSS, and Javascript. Customers can choose their desired
    // delivery date and timeslot for their order. It allows customers to select their desired flower products
    // , add-on products, and gifts for various occasions. The online stores are available mainly in Southeast
    // Asia and Australia.`,
    description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
    delivery in Australia. The company strives to provide customers with the best selection of flowers, from traditional
    roses to unique tropical and exotic blooms. Our same-day delivery service ensures that no matter where you are in
    the country, you can get the perfect bouquet delivered to your door. With our wide selection, fast delivery, and
    exceptional customer service, Bloomeroo is the perfect place to find the perfect floral gift for any occasion.`,
    urls: [
      {
        name: "Bloomeroo",
        link: "https://www.bloomeroo.com.au/",
      },
    ],
  },
  {
    image: {
      src: "/work/thc-logo.webp",
      alt: "The Hacker Collection Website",
      width: "62",
      height: "65",
    },
    imageShowcase: [
      {
        src: "/work/THC-startuppage.png",
        alt: "The Hacker Collective startup page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/THC-homepage.png",
        alt: "The Hacker Collective home page",
        width: "726",
        height: "460",
      },
      {
        src: "/work/THC-invest.png",
        alt: "The Hacker Collective invest page",
        width: "726",
        height: "460",
      },
    ],
    heading: "The Hacker Collection Website",
    // description: `A landing page website to display company information, businesses,
    // programs, etc. This was created using Vue, Nuxt3, TailwindCSS,
    // Javascript, and Headless UI.`,
    description: `The Hacker Collection (THC) is an innovative landing page website that offers a comprehensive
    overview of a company's mission, products, and services. With a modern and user-friendly design, THC offers
    an intuitive way to showcase a company's offerings and provides visually appealing and easy-to-understand
    information. THC also offers a number of tools, such as a contact form, a blog, and registration forms, to
    help customers interact with the company in a meaningful way.`,
    urls: [
      {
        name: "THC Website",
        link: "https://hackercollective.co/",
      },
    ],
  },
];
</script>
