<template>
  <div class="md:pt-10">
    <Header id="top" />
    <div>
      <div class="md:w-8/12 md:py-20 lg:pt-24 mx-auto" id="about">
        <TextLeftImgRight />
        <TextRightImgLeft />
      </div>
    </div>
    <!-- work experience -->
    <div class="py-20 lg:pt-24 px-2 sm:px-0">
      <h2 class="text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-10">Working Experience</h2>
      <div class="w-full max-w-md md:max-w-lg lg:max-w-3xl p-2 bg-gray-50 shadow mx-auto rounded-2xl space-y-2">
        <Disclosure v-slot="{ open, close }" v-for="job in career" :key="job.id">
          <DisclosureButton
            class="
              flex
              justify-between
              w-full
              px-4
              py-2
              text-lg
              font-medium
              text-left text-black
              bg-white
              shadow-md
              rounded-lg
              hover:bg-yellow-50
              focus:outline-none
              focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75
            "
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
    </div>
    <Skills id="skills" />
    <div class="py-20 lg:pt-28" id="projects">
      <h2 class="text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-10">Projects That I Have Worked On</h2>
      <div class="px-5 lg:w-10/12 xl:w-9/12 2xl:w-8/12 space-y-7 2xl:space-y-14 mx-auto">
        <CardsProject />
        <CardsProject :is-reverse="reversed" />
        <CardsProject />
        <CardsProject :is-reverse="reversed" />
        <CardsProject />
      </div>
    </div>
    <!-- Need project section -->
    <div class="flex flex-col items-center px-4 py-24">
      <h2 class="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-10 md:mb-16">Some of My Favourite Activities</h2>
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
  const reversed = true
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
  onMounted(() => {
    window.scrollTo(0, 0);
  });
  // TODO create a draft design template
  // testing to see whether add todo action is working after the push
  // labels: testing
  // assignees: eazypau
  // milestone: 1
  // TODO pick the right font family
  // testing 2nd commit to add new todo
  // labels: testing
  // assignees: eazypau
  // milestone: 1
</script>
