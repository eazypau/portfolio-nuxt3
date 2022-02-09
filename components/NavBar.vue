<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav
    id="navBar"
    class="z-30 navPadding flex items-center justify-between sticky top-0 w-full shadow"
    :class="navBgTextColor"
  >
    <div>
      <button
        type="button"
        class="flex items-center text-2xl font-bold cursor-pointer"
        @click="goToHome"
      >
        <img
          src="/favicon.png"
          alt="favicon"
          class="w-10 h-10"
          loading="lazy"
        />
        <p
          class="hidden lg:block text-3xl font-bold ml-2 logoFont tracking-widest"
        >
          YZ.
        </p>
      </button>
    </div>
    <div v-if="!loading" class="hidden lg:flex font-medium">
      <transition-group
        class="space-x-5 lg:space-x-8 xl:space-x-10"
        tag="span"
        appear
        @before-enter="before"
        @enter="entering"
      >
        <a
          v-for="item in navigation"
          :key="item.id"
          :href="item.href"
          class="text-lg lg:text-lg xl:text-xl headerFont underAnimation"
          >{{ item.name }}</a
        >
      </transition-group>

      <!-- <NuxtLink to="/blog" @click="scrollTop" class="text-lg px-4 hover:opacity-60 hover:underline">Blog</NuxtLink> -->
    </div>
    <Menu as="div" class="lg:hidden">
      <div class="flex items-center">
        <MenuButton>
          <MenuIcon class="w-8 h-8" />
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 w-64 mt-5 mr-8 md:mr-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem
              v-for="item in navigation"
              :key="item"
              v-slot="{ active }"
            >
              <a
                :href="item.href"
                :class="[
                  active ? 'bg-gray-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-4 py-3 font-medium text-lg',
                ]"
              >
                {{ item.name }}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </nav>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { MenuIcon } from "@heroicons/vue/outline";
import { gsap } from "gsap";

let loading = ref(true);
const route = useRoute();
const router = useRouter();
const { scrollTop } = scrollToTop();
const { trackNavBarPosition, currentOffsetHeight } = trackNavBar();
const screenHeight = ref(0);
const heightOfNav = ref(0);
const navBgTextColor = ref("bg-black text-white");
const navigation = [
  {
    id: 1,
    name: "About",
    href: "/#about",
  },
  {
    id: 2,
    name: "Skills",
    href: "/#skills",
  },
  {
    id: 3,
    name: "Projects",
    href: "/#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "/#contact",
  },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
  },
];
const trackScroll = () => {
  trackNavBarPosition("navBar");
};
const goToHome = () => {
  if (route.path !== "/") {
    router.push("/");
    scrollTop();
  } else {
    scrollTop();
  }
};

// animation
const before = (el) => {
  gsap.set(el, {
    opacity: 0,
  });
};
const entering = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    duration: 2,
    delay: el.dataset.index * 0.4,
    onComplete: done,
  });
  console.log("complete entering 1 by 1...");
};

watchEffect(() => {
  if (
    currentOffsetHeight.value > screenHeight.value - heightOfNav.value * 2.5 &&
    route.name === "index"
  ) {
    navBgTextColor.value = "bgLight text-black";
  } else if (route.path === "/blog") {
    navBgTextColor.value = "bgLight text-black";
  } else {
    navBgTextColor.value = "bg-black text-white";
  }
});
onMounted(() => {
  // track nav bar position on initial render
  trackScroll();
  // use scroll event to update the current position of nav bar
  window.addEventListener("scroll", trackScroll);
  screenHeight.value = screen.height;
  heightOfNav.value = document.getElementById("navBar").clientHeight;
  loading.value = false;
});
</script>
<style scoped>
.underAnimation {
  position: relative;
}
.underAnimation::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #22d3ee; /* #3cefff */
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.underAnimation:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>
