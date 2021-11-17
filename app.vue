<script>
  import "./assets/css/tailwind.scss";
  import Dialog from "./components/Dialog.vue";
  import Disclosure from "./components/Disclosure.vue";
  import Listbox from "./components/Listbox.vue";
</script>
<template>
  <div class="p-16">
    <!-- <NuxtWelcome /> -->
    <div class="bg-white text-sky-600">
      <p>testing</p>
      <p class="text-2xl">animation</p>
    </div>
    <!-- Dialog box of headlessui maybe has some issue, need to avoid using it -->
    <!-- <Dialog /> -->
    <Disclosure />
    <Listbox />
  </div>
</template>
