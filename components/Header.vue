<template>
	<!-- <header class="relative w-full h-screen md:h-auto px-2 sm:px-2 sm:py-5 flex items-center justify-center bg-black overflow-hidden">
    <div class="absolute w-full h-full">
      <img src="/negative-space-abstract-particle-snow.webp" alt="bg" class="w-full h-full object-cover mix-blend-hard-light" />
    </div>
    <div class="relative text-center pt-28 pb-16 sm:pt-32 xl:pt-40 sm:pb-24 xl:pb-32 flex flex-col items-center justify-center"> -->
	<!-- previous bg colors: bg-gradient-to-b from-primary-dark via-secondary-dark to-transparent -->
	<!-- <p
        class="firstLineHeight text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-white to-gray-400"
      >
        Hey there
      </p>
      <p
        class="firstLineHeight text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-white to-gray-400"
      >
        my name is <span class="text-6xl">Po</span>
      </p>
      <p
        class="hugeHeading text-6xl  font-extrabold text-center py-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        Mechanical Engineer
      </p>
      <p
        class="text-4xl 2xl:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        turned into
      </p>
      <p
        class="hugeHeading text-6xl font-extrabold text-center py-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        Web Developer
      </p>
      <p
        class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-white to-gray-400"
      >
        Previouly worked as
      </p>
      <p
        class="hugeHeading text-6xl font-extrabold text-center py-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-gray-400"
      >
        Mechanical Engineer
      </p>
    </div>
  </header> -->
	<header class="relative w-full headerHeight overflow-hidden flex items-top">
		<div class="absolute w-full h-full">
			<img src="/wide-laptop-gradient-bg.jpg" alt="bg" class="w-full h-full object-cover object-top" />
		</div>
		<div class="relative w-full text-center px-7 md:px-16 lg:px-28 xl:px-40 pt-5">
			<!-- previous bg colors: bg-gradient-to-b from-primary-dark via-secondary-dark to-transparent -->
			<!-- next version: bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-white to-gray-400 -->
			<div>
				<p class="text-4xl md:text-5xl font-extrabold text-white flex justify-center">
					Hi there
					<span>
					  <svg width="1em" height="1em" viewBox="0 0 24 24" class="ml-3">
  						<path
  							d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1zm7.01-2.68l-4.6 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.07c.49-.49.49-1.28 0-1.77a1.25 1.25 0 0 0-1.77 0l-4.42 4.42l-.71-.71l6.54-6.54c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-5.83 5.83l-.71-.71l6.89-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89l-.69-.7l5.48-5.48c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4.003 4.003 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.07-4.07c.49-.49.49-1.28 0-1.77a1.27 1.27 0 0 0-1.78.01z"
  							fill="currentColor"
  						></path>
  					</svg>
					</span>
				</p>
				<p class="mt-1 text-4xl md:text-6xl font-extrabold tracking-wide text-white">
					My name is Po
				</p>
			</div>
			<div class="mt-2">
				<p class="text-4xl md:text-6xl font-extrabold tracking-wide text-white">
					A Frontend
				</p>
				<p class="py-2 text-4xl md:text-6xl font-extrabold tracking-wide text-white">Web Developer</p>
			</div>
		</div>
	</header>
</template>
<script setup>
	import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
	//* maybe can try gradient text with very light bg color or with out any bg color
	//*ref https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
</script>
<style lang="scss" scoped>
	.headerHeight {
		height: calc(100vh - 80px);
	}
	.firstLineHeight {
		min-height: 35px;
		// text-shadow: 0 0 30px #fff;
	}
	.hugeHeading {
		min-height: 78px;
	}
	@media (min-width: 768px) {
		// .headerHeight {
		//   height: calc(100vh - 20px);
		// }
		.firstLineHeight {
			min-height: 43px;
		}
	}
	@media (min-width: 1024px) {
		.headerHeight {
			height: calc(100vh - 90px);
		}
	}
	@media (min-width: 1280px) {
		.firstLineHeight {
			min-height: 55px;
		}
		.hugeHeading {
			min-height: 93px;
		}
	}
	@media (min-width: 1440px) {
		.headerHeight {
			height: calc(100vh - 90px);
		}
	}
</style>
