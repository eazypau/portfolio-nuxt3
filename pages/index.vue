<template>
  <NuxtLayout name="default">
    <div>
      <Modal
        :is-open="isOpen"
        :close-modal="closeModal"
        :modal-content="currentModalContent"
      />
      <Header />
      <TextLeftImgRight />
      <Skills :skill-set="skillWithLogo" />
      <WorkSection
        :working-projects="workingProjects"
        :on-click-function="showModal"
      />
      <div id="projects"></div>
      <ProjectSection :projects="projects" />
      <HobbySection :hobbies="hobbies" />
      <div class="bg-white dark:bg-[#121212]">
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
const skillWithLogo = [
  {
    imgUrl: "/logos/html5-original.svg",
    name: "HTML",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/css3-plain-wordmark.svg",
    name: "CSS",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/javascript-original.svg",
    name: "JavaScript",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/vuejs-original.svg",
    name: "Vue",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/nuxtjs-original.svg",
    name: "Nuxt",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/react-original.svg",
    name: "React",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/tailwindcss-plain.svg",
    name: "TailwindCSS",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/firebase-plain.svg",
    name: "Firebase",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/typescript-original.svg",
    name: "TypeScript",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/nodejs-original.svg",
    name: "NodeJS",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/git-original.svg",
    name: "Git",
    width: 150,
    height: 150,
  },
  {
    imgUrl:
      "https://camo.githubusercontent.com/4da68843d90e7194500a8e2f9de72ecfc7e4554d4b8388b5d4db8e5c439c442f/68747470733a2f2f7777772e636c6f756477617264732e6e65742f77702d636f6e74656e742f75706c6f6164732f323031382f30392f53686f706966792d4c69717569642d50726f674c616e672e706e67",
    name: "Liquid",
    width: 321,
    height: 315,
  },
  {
    imgUrl: "/logos/shopify-b&w.png",
    name: "Shopify",
    width: 512,
    height: 512,
  },
  {
    imgUrl: "/logos/jquery-original.svg",
    name: "jQuery",
    width: 150,
    height: 150,
  },
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
      maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
    },
    imageShowcase: [
      {
        title: "Cart Page - Step 1",
        src: "/work/lvly-cart-s1.png",
        alt: "Cart Page - Step 1",
        width: "800",
        height: "446",
      },
      {
        title: "Cart Page - Step 2",
        src: "/work/lvly-cart-s2.png",
        alt: "Cart Page - Step 2",
        width: "800",
        height: "404",
      },
      {
        title: "Cart Page - Step 3",
        src: "/work/lvly-cart-s3.png",
        alt: "Cart Page - Step 3",
        width: "800",
        height: "637",
      },
      {
        title: "Cart Page - Step 4",
        src: "/work/lvly-cart-s4.png",
        alt: "Cart Page - Step 4",
        width: "800",
        height: "520",
      },
    ],
    heading: "LVLY",
    // description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
    // With its wide selection of blooms, LVLY is the perfect choice for those who are looking for a unique and special
    // way to show their love and appreciation. From classic roses to exotic orchids, LVLY has something for everyone.
    // Customers can choose from a variety of bouquets, vases and boxes to make sure that their gift is as special and
    // unique as they are. With same-day delivery options,  LVLY ensures that its customers can get the perfect
    // arrangement for any occasion.`,
    description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
    The aim was to work on the features for the cart page. Creating a step by step user interface to guide customer 
    to checkout page. It allows the customer to pick their desired delivery date based on the postcode and suburb 
    provided. Moreover, customer can also provide their card message, choose their desired jar message and greeting 
    cards.`,
    teamMembers: [
      {
        name: "Sylvia Chan",
        linkedIn: "https://www.linkedin.com/in/sylviaachann/",
      },
      {
        name: "Chan Sin Yee",
        linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
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
      maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
    },
    imageShowcase: [
      {
        title: "Product Page",
        src: "/work/fc-product-page.png",
        alt: "Product Page",
        width: "745",
        height: "432",
      },
      {
        title: "Product Page - Addon Product Modal",
        src: "/work/fc-product-addon-modal.png",
        alt: "Product Page - Addon Product Modal",
        width: "1000",
        height: "492",
      },
      {
        title: "Cart Page",
        src: "/work/fc-cart-page.png",
        alt: "Cart Page",
        width: "745",
        height: "476",
      },
      {
        title: "Cart Page - Empty Cart",
        src: "/work/fc-empty-cart.png",
        alt: "Cart Page - Empty Cart",
        width: "745",
        height: "351",
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
    sure their gift is special and unique. The aim was to work on revamping the product page and cart page. 
    Making the user interface better and user friendly. The process also includes rewrite the functionality 
    to the website slightly faster, improving user experience and making the codebase easier to maintain.`,
    teamMembers: [
      {
        name: "Sylvia Chan",
        linkedIn: "https://www.linkedin.com/in/sylviaachann/",
      },
      {
        name: "Chan Sin Yee",
        linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
      },
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Shopify Liquid",
      "Splide",
      "Modaal",
    ],
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
      maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
    },
    imageShowcase: [
      {
        title: "Cart Page",
        src: "/work/bl-cart.png",
        alt: "Cart Page",
        width: "800",
        height: "543",
      },
    ],
    heading: "Bloomeroo",
    // description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
    // delivery in Australia. The company strives to provide customers with the best selection of flowers, from traditional
    // roses to unique tropical and exotic blooms. Our same-day delivery service ensures that no matter where you are in
    // the country, you can get the perfect bouquet delivered to your door. `,
    description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
    delivery in Australia. The aim was to work on generating the date picker by postcode input for the cart page. This 
    requires user to provide postcode in order to choose their desired delivery date. Moreover, customer can also 
    provide their card message and choose addon products before going to checkout page.`,
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
    teamMembers: [
      {
        name: "Sylvia Chan",
        linkedIn: "https://www.linkedin.com/in/sylviaachann/",
      },
      {
        name: "Chan Sin Yee",
        linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
      },
    ],
    urls: [
      {
        name: "Bloomeroo",
        link: "https://www.bloomeroo.com.au/",
      },
    ],
  },
  {
    image: {
      src: "/work/cr-footer-logo.webp",
      alt: "Cakerush MY",
      width: "183",
      height: "42",
      maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
    },
    imageShowcase: [
      // {
      //   title: "Home Page Top Part",
      //   src: "/work/cakerush-main.png",
      //   alt: "Home Page Top Part",
      //   width: "1918",
      //   height: "2368",
      // },
      // {
      //   title: "Home Page MultiTab Section",
      //   src: "/work/cakerush-tabs.png",
      //   alt: "Home Page MultiTab Section",
      //   width: "1898",
      //   height: "942",
      // },
      {
        title: "Home Page",
        src: "/work/cakerush-homepage-revamp.png",
        alt: "Home Page",
        width: "1920",
        height: "6199",
      },
      {
        title: "Explosion Box Product Template",
        src: "/work/cakerush-explosion-box-page.png",
        alt: "Explosion Box Product Template",
        width: "1920",
        height: "4847",
      },
    ],
    heading: "Cakerush MY",
    description: `Cakerush MY is an innovative online platform offering a wide selection of exquisite cakes and pastries. 
    With a user-friendly interface, customers can easily browse and customize their orders for any occasion. From classic 
    flavors to personalized designs, each cake is meticulously crafted using the finest ingredients. Cakerush MY ensures 
    timely delivery, bringing fresh and visually stunning cakes to your doorstep. Elevate your celebrations with their 
    exceptional creations and exceptional service.`,
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
    teamMembers: [
      {
        name: "Sylvia Chan",
        linkedIn: "https://www.linkedin.com/in/sylviaachann/",
      },
    ],
    urls: [
      {
        name: "Cakerush MY",
        link: "https://www.cakerush.my/",
      },
    ],
  },
  {
    image: {
      src: "/work/thc-logo.webp",
      alt: "The Hacker Collection Website",
      width: "62",
      height: "65",
      maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
    },
    imageShowcase: [
      {
        title: "Home Page",
        src: "/work/thc-home-full.png",
        alt: "Home Page",
        width: "874",
        height: "4796",
      },
      {
        title: "Fundraising Page",
        src: "/work/thc-fundraising.png",
        alt: "Fundraising Page",
        width: "805",
        height: "5208",
      },
    ],
    heading: "The Hacker Collection Website",
    description: `The Hacker Collection (THC) is an innovative landing page website that offers a comprehensive
    overview of a company's mission, products, and services. With a modern and user-friendly design, THC offers
    an intuitive way to showcase a company's offerings and provides visually appealing and easy-to-understand
    information. THC also offers a number of tools, such as a contact form, a blog, and registration forms, to
    help customers interact with the company in a meaningful way.`,
    techStack: ["Vue", "Nuxt3", "TailwindCSS", "HeadlessUI", "Heroicons"],
    teamMembers: [],
    urls: [
      {
        name: "THC Website",
        link: "https://hackercollective.co/",
      },
    ],
  },
];

// modal functionality
const isOpen = ref(false);
const currentModalContent = ref({});
const showModal = (content) => {
  // lock page height?
  // fill up modals with details
  // open modal
  currentModalContent.value = content;
  isOpen.value = true;
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  isOpen.value = false;
  document.body.style.height = "auto";
  document.body.style.overflow = "visible";
};

onMounted(() => {
  document.addEventListener("keyup", function (event) {
    if (isOpen.value && event.key === "Escape") {
      closeModal();
    }
  });
});
</script>
