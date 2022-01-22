<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="z-30 navPadding flex items-center justify-between fixed top-0 w-full bgLight shadow">
    <div>
      <a href="/#top" class="flex text-2xl font-bold">
        <img src="/favicon.png" alt="favicon" class="w-10 h-10">
      </a>
    </div>
    <div v-if="!loading" class="hidden md:flex font-medium">
      <transition-group tag="span" appear @before-enter="before" @enter="entering" class="space-x-5 lg:space-x-8">
        <a
          v-for="item in navigation"
          :key="item.id"
          :href="item.href"
          class="text-lg underAnimation"
          >{{ item.name }}</a
        >
      </transition-group>

      <!-- <NuxtLink to="/blog" @click="scrollTop" class="text-lg px-4 hover:opacity-60 hover:underline">Blog</NuxtLink> -->
    </div>
    <Menu as="div" class="md:hidden">
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
          class="absolute right-0 w-64 mt-2 mr-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }" v-for="item in navigation" :key="item">
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
            <!-- <MenuItem v-slot="{ active }">
              <a
                href="/blog"
                :class="[
                  active ? 'bg-gray-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-4 py-3 font-medium text-lg',
                ]"
              >
                Blog
              </a>
            </MenuItem> -->
          </div>
          <!-- <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Archive
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                Move
              </button>
            </MenuItem>
          </div> -->
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
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
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
  onMounted(() => {
    loading.value = false;
  });
</script>
<style scoped>
  .underAnimation {
    position: relative;
  }
  .underAnimation::before {
    content: '';
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
