export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    // {
    //   id: 6,
    //   name: "Timeline",
    //   href: "/timeline",
    // },
    {
      id: 3,
      name: "Works",
      href: "/works",
    },
    {
      id: 4,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      name: "Blog",
      href: "https://blog.eazypau.com/",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nextjs-original.svg",
      name: "NextJS",
      alt: "NextJs logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "NuxtJS",
      alt: "NuxtJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/materialui-original.svg",
      name: "Material UI",
      alt: "Material UI logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/redux-original.svg",
      name: "Redux",
      alt: "Redux logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/jest-plain.svg",
      name: "Jest",
      alt: "Jest logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/firebase-plain.svg",
      name: "Firebase",
      alt: "Firebase logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/shopify-liquid-logo.webp",
      name: "Liquid",
      alt: "Liquid logo",
      width: 321,
      height: 315,
    },
    {
      imgUrl: "/logos/shopify-b_w.webp",
      name: "Shopify",
      alt: "Shopify logo",
      width: 512,
      height: 512,
    },
    {
      imgUrl: "/logos/jquery-original.svg",
      name: "jQuery",
      alt: "jQuery logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/Chart.js_logo.svg.png",
      name: "Chart.js",
      alt: "ChartJs logo",
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
      text: "To pen down my thoughts, memories and interesting things that occur in life",
      classBg: "bg-journaling",
    },
    {
      title: "Learning new technologies/framework",
      text: "To explore and expand my skillsets. \n Recently exploring Kotlin and ThreeJs",
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
      text: "Recent favourites: MWAM, HONNE, Forester, Milet and Yoasobi",
      classBg: "bg-music",
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "Personal Blog",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/blog-page.png",
      description:
        "A personal blog using NextJS and Notion API. It has code syntax highlight, text to speech and image viewer.",
      techStack: [
        "NextJS",
        "TS",
        "TailwindCSS",
        "@notionhq/client",
        "highlight.js",
        "fslightbox-react",
      ],
      isUrl: true,
      urlLink: "https://blog.eazypau.com/",
      githubLink: "https://github.com/eazypau/my-blog",
    },
    {
      isReverse: true,
      title: "Order Management App",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/oms-order-page.png",
      description:
        "An order creation and management web app. It can be use to manage orders and prodcuts.",
      techStack: [
        "NextJS",
        "TS",
        "TailwindCSS",
        "daisyUI",
        "Firebase",
        "@tanstack/react-query",
        "@tanstack/react-table",
        "MomentJs",
        "formik",
        "lodash",
        "yup",
      ],
      isUrl: true,
      urlLink: "https://order-management-drab.vercel.app/",
      // urlLink: "https://order-creation-web-app.vercel.app/en",
      // githubLink: "https://github.com/eazypau/order-creation-web-app",
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
      image: {
        src: "/work/jagaapp/jagaapp-logo.png",
        alt: "JagaApp",
        width: "225",
        height: "225",
        maxWidth: "max-w-[35%] 3xl:max-w-[35%]",
      },
      imageShowcase: [
        {
          title: "Visitor Setting",
          src: "/work/jagaapp/visitor-setting.png",
          alt: "Visitor Setting",
          width: "1920",
          height: "959",
        },
        {
          title: "Visitor Setting - Note From Management",
          src: "/work/jagaapp/visitor-setting-note.png",
          alt: "Visitor Setting - Note From Management",
          width: "1920",
          height: "953",
        },
        {
          title: "Facility Log",
          src: "/work/jagaapp/facility-log.png",
          alt: "Facility Log",
          width: "1920",
          height: "953",
        },
        {
          title: "Revamped Visitor Log",
          src: "/work/jagaapp/visitor-log.png",
          alt: "Revamped Visitor Log",
          width: "1920",
          height: "953",
        },
      ],
      heading: "JagaApp",
      description: `JagaApp Admin Panel is a property management admin panel. It is mainly for internal and client (Management) 
      side use. It can be use for managing visitors, post notice, managing user feedbacks, etc. *Disclaimer: all data shown here 
      are testing/dummy data.`,
      teamMembers: [
        {
          name: "Max Leong",
          linkedIn: "",
        },
      ],
      techStack: ["ReactJs", "NextJs", "Material-UI", "Firebase"],
      highlights:
        "Visitor Setting Enhancement, Creating Logs for monitoring, Module Migration",
      urls: [
        {
          name: "JagaApp Admin Panel",
          link: "https://admin.jagaapp.com/login",
        },
      ],
    },
    {
      image: {
        src: "/work/LVLY_logo.webp",
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
        {
          title: "Product Page - Build A Bundle",
          src: "/work/lvly/lvly-bab.png",
          alt: "Product Page - Build A Bundle",
          width: "1920",
          height: "5503",
        },
        {
          title: "General Product Page",
          src: "/work/lvly/lvly-product-page.png",
          alt: "General Product Page",
          width: "1920",
          height: "1902",
        },
      ],
      heading: "LVLY",
      description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
      The aim was to work on the features for the cart page and product page. Creating a step by step user interface to guide customer 
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
      highlights:
        "Cart page layout & functionality, Product Page Addons UI & functionality",
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
        src: "/work/FC-MY.webp",
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
      highlights: "Product Page Revamp & Cart Page Revamp",
      urls: [
        {
          name: "Flowerchimp MY",
          link: "https://www.flowerchimp.com/",
        },
      ],
    },
    {
      image: {
        src: "/work/BR_Logo.webp",
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
      highlights:
        "Render selectable dates based on postcode input, website maintenance",
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
      highlights: "Home Page Revamp & Explosion Box Product Template Page",
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
      teamMembers: [
        {
          name: "Bryan Liaw",
          linkedIn: "",
        },
        {
          name: "Pierce Ong",
          linkedIn: "",
        },
        {
          name: "Adri Shahri",
          linkedIn: "",
        },
      ],
      highlights: "Manage and work with the team to create the entire website.",
      urls: [
        {
          name: "THC Website",
          link: "https://hackercollective.co/",
        },
      ],
    },
  ];

  // const timeline = [
  //   {
  //     date: "July 2023",
  //     title: "Started @ JagaApp",
  //     description: "Joined the JagaApp team",
  //     // icon: "",
  //     link: {
  //       text: "Visit JagaApp",
  //       url: "https://jagasolution.com/jagaapp/",
  //     },
  //   },
  //   {
  //     date: "May 2022",
  //     title: "Started @ Limitless Technologies",
  //     description: "Joined the Limitless Technologies (LTG) team",
  //     // icon: "",
  //     link: {
  //       text: "Visit LTG",
  //       url: "https://limitless.my/",
  //     },
  //   },
  //   {
  //     date: "October 2021",
  //     title: "First Developer Role",
  //     description:
  //       "Joined The Hacker Collective (THC) Team as Frontend Web Developer",
  //     // icon: "",
  //     link: {
  //       text: "Visit THC",
  //       url: "https://hackercollective.co/",
  //     },
  //   },
  //   {
  //     date: "April 2021",
  //     title: "Self Taught Journey Begins",
  //     description:
  //       "Started my journey in self learning programming (web development)",
  //     // icon: "",
  //   },
  //   {
  //     date: "August 2019",
  //     title: "First Mechanical Engineer Role",
  //     description:
  //       "Began my job as a Mechanical Engineer in M&E Consultancy at Durianê Professional",
  //     // icon: "",
  //     link: {
  //       text: "Visit Durianê Professional",
  //       url: "https://www.duriane.com/",
  //     },
  //   },
  //   {
  //     date: "May 2019",
  //     title: "Graduated University",
  //     description:
  //       "Completed my Bachelor's Degree in Mechanical Engineering at Multimedia University (MMU)",
  //     // icon: "",
  //   },
  //   {
  //     date: "March 2018",
  //     title: "Internship",
  //     description:
  //       "Began an internship as assistent engineer at Protech Builders",
  //     // icon: "",
  //   },
  //   {
  //     date: "June 2015",
  //     title: "Start University",
  //     description:
  //       "Began my study in Mechanical Engineering at Multimedia University (MMU)",
  //     // icon: "",
  //     link: {
  //       text: "Visit MMU",
  //       url: "https://www.mmu.edu.my/",
  //     },
  //   },
  // ];

  // new timeline
  const timeline = [
    {
      logo: "/work/renalworks/renalworks-logo.jpg",
      logoBorderColor: "#1C63A2",
      companyName: "Renalworks Malaysia Sdn. Bhd.",
      duration: "May 2024 - Current",
      jobScope: [
        "Developed front-end interface for managing anaemia treatments, enabling users to add, edit, and delete PRCA and Immunologist records for streamlined clinical workflows.",
        "Documented technical findings and coding standards to ensure consistency and maintainability.",
        "Actively share knowledge and best practices with team members through code reviews and collaborative sessions.",
        "Created interactive lab charts from patient data to visually display lab readings, improving data clarity and supporting faster clinical decision-making.",
        "Developed and implemented features in the inventory module of a medical software system to improve tracking, management, and reporting of medical supplies.",
        // "Working as a software engineer in the team to develop medical software.",
        "Writing unit test to ensure code quality is up to standard.",
      ],
    },
    {
      logo: "/work/jagaapp/jagaapp-logo.png",
      logoBorderColor: "#d90429",
      companyName: "Red Ideas Sdn. Bhd. (JagaApp)",
      duration: "July 2023 - April 2024",
      jobScope: [
        "Proactively addressed and resolved software issues by diligently troubleshooting and fixing bugs, as reported through raised bug tickets.",
        "Managed module migration, strategically refactoring code to improve readability and performance.",
        "Executed a comprehensive revamp of logs for existing modules, improving tracking and monitoring capabilities for enhanced system management.",
        "Engaged in discussions with various departments to gather and understand their specific requirements, aligning development efforts with organizational objectives.",
        "Acquired Kotlin to a proficient level to contribute in developing new features and modifications for existing Guard App.",
      ],
    },
    {
      logo: "/work/ltg/ltg-logo.jpeg",
      logoBorderColor: "#7303C0",
      companyName: "Limit Technology Group",
      duration: "May 2022 - July 2023",
      jobScope: [
        "Create, troubleshoot, enhance and enrich e-commerce site in Shopify using Shopify Liquid, HTML, CSS, JavaScript and jQuery",
        "Work in cross-functional team to build product features and improve user interface for the e-commerce website projects.",
        "Improve the performance of the website by code splitting, lazy loading, defer scripts, reduce cumulative layout shirt and asset optimization.",
        "Executed comprehensive refactoring for existing projects to improve readability, scalability and maintainability.",
      ],
    },
    {
      logo: "/work/thc-logo.webp",
      logoBorderColor: "transparent",
      companyName: "The Hacker Collective",
      duration: "October 2021 - April 2022",
      jobScope: [
        "Build reusable and maintainable components that helps to improve and speed up development processes.",
        "Collaborate with Backend and Design team to develop website that are accessible across all platforms.",
        "Leading a team to create a comprehensive company website.",
      ],
    },
    {
      logo: "/work/duriane/duriane-logo.png",
      logoBorderColor: "transparent",
      companyName: "Durianê Professional Sdn Bhd",
      duration: "August 2019 - October 2021",
      jobScope: [
        "Cold water and sanitary plumbing design",
        "Design fire protection system for buildings in accordance to Malaysia Standard (MS), NFPA and FM",
        "To prepare fully hydraulic calculation simulation for sprinkler system",
        "Design air conditioning and mechanical ventilation system for buildings",
        "Prepare tender documents for various mechanical service package",
        "Evaluate compliance of tenderer submission",
        "Work with other multidiscipline Engineers and other professional including Architect and Surveyor in projects",
      ],
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
  };
}
