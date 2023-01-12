<template>
  <nav
    id="navBar"
    class="z-30 navPadding flex items-center justify-between sticky top-0 w-full shadow transition-all duration-200 ease-in-out"
    :class="navBgTextColor"
    style="height: 70px"
  >
    <div>
      <Transition appear name="fadeIn">
        <button
          v-if="!loading"
          type="button"
          class="flex items-center text-2xl font-bold cursor-pointer"
          aria-label="Website Logo"
          @click="goToHome"
        >
          <img
            :src="logo"
            width="40"
            height="40"
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
      </Transition>
    </div>
    <div
      v-if="!loading"
      class="hidden lg:flex font-medium space-x-5 lg:space-x-8 xl:space-x-10"
    >
      <TransitionGroup appear @before-enter="before" @enter="entering">
        <a
          v-for="(item, index) in navigation"
          :key="item.id"
          :data-index="index"
          :href="item.href"
          class="text-lg lg:text-lg xl:text-xl headerFont underAnimation"
          >{{ item.name }}</a
        >
      </TransitionGroup>
    </div>
    <Menu as="div" class="lg:hidden">
      <div class="flex items-center">
        <MenuButton aria-label="Menu">
          <MenuIcon class="w-8 h-8" />
        </MenuButton>
      </div>
      <Transition
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
      </Transition>
    </Menu>
  </nav>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { MenuIcon } from "@heroicons/vue/outline";
import { gsap } from "gsap";
import blackWhiteFavicon from "/favicon-bw.png";
import whiteBlackFavicon from "/favicon-wb.png";

let loading = ref(true);
const route = useRoute();
const { scrollTop } = scrollToTop();
const { trackNavBarPosition, currentOffsetHeight } = trackNavBar();
const screenHeight = ref(0);
const heightOfNav = ref(0);
const currentScreenWidth = ref(0);
const navBgTextColor = ref("bg-black text-white");
const logo = ref(whiteBlackFavicon);
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
  // {
  //   id: 4,
  //   name: "Works",
  //   href: "/#works",
  // },
  {
    id: 5,
    name: "Contact",
    href: "/#contact",
  },
];
const trackScroll = () => {
  trackNavBarPosition("navBar");
};
const goToHome = () => {
  if (route.path !== "/") {
    window.location.href = "/";
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
    // duration: 1.0,
    duration: 0.8,
    delay: el.dataset.index * 0.2,
    onComplete: done,
  });
};

watchEffect(() => {
  if (route.path === "/") {
    if (currentScreenWidth.value <= 640) {
      if (
        currentOffsetHeight.value >
        screenHeight.value + heightOfNav.value / 2
      ) {
        // navbar style change on desktop view
        navBgTextColor.value = "bg-white text-black";
        logo.value = blackWhiteFavicon;
      } else {
        navBgTextColor.value = "bg-black text-white";
        logo.value = whiteBlackFavicon;
      }
    } else {
      if (
        currentOffsetHeight.value >
        screenHeight.value - heightOfNav.value / 2
      ) {
        // navbar style change on desktop view
        navBgTextColor.value = "bg-white text-black";
        logo.value = blackWhiteFavicon;
      } else {
        navBgTextColor.value = "bg-black text-white";
        logo.value = whiteBlackFavicon;
      }
    }
  } else {
    navBgTextColor.value = "bg-white text-black";
    logo.value = blackWhiteFavicon;
  }
});
onMounted(() => {
  // track nav bar position on initial render
  trackScroll();
  // use scroll event to update the current position of nav bar
  window.addEventListener("scroll", trackScroll);
  screenHeight.value = window.innerHeight;
  heightOfNav.value = document.getElementById("navBar").offsetHeight;
  currentScreenWidth.value = window.innerWidth;
  loading.value = false;
});
</script>
<style lang="scss" scoped>
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
.fadeIn-enter-active {
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
