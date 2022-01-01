<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="z-30 navPadding flex items-center justify-between fixed top-0 w-full bgLight shadow">
    <div>
      <a href="/#top" class="text-2xl font-bold">EZ.</a>
    </div>
    <div class="hidden md:flex font-medium">
      <a v-for="item in navigation" :key="item" :href="item.href" class="text-lg px-4 hover:opacity-60 hover:underline transition ease-linear duration-300">{{ item.name }}</a>
      <NuxtLink to="/blog" @click="scrollTop" class="text-lg px-4 hover:opacity-60 hover:underline">Blog</NuxtLink>
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
          class="
            absolute
            right-0
            w-56
            mt-2
            mr-8
            origin-top-right
            bg-white
            divide-y divide-gray-100
            rounded-md
            shadow-lg
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          "
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }" v-for="item in navigation" :key="item">
              <a
                :href="item.href"
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-3 py-2 font-medium',
                ]"
              >
                {{ item.name }}
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="/blog"
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-3 py-2 font-medium',
                ]"
              >
                Blog
              </a>
            </MenuItem>
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
  const navigation = [
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Skills",
      href: "/#skills",
    },
    {
      name: "Projects",
      href: "/#projects",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
</script>
