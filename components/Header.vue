<template>
	<header class="relative w-full headerHeight overflow-hidden flex items-top">
		<div class="absolute w-full h-full">
			<img src="/wide-laptop-gradient-bg.jpg" alt="bg" class="w-full h-full object-cover object-top" />
		</div>
		<div class="relative w-full text-center px-1 md:px-16 lg:px-28 xl:px-40 pt-5 2xl:pt-10 headerFont text-4xl md:text-6xl 2xl:text-7xl font-bold">
			<div>
				<p class="text-white flex justify-center">
					Hi there
					<span>
					  <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" class="ml-3">
  						<path
  							d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1zm7.01-2.68l-4.6 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.07c.49-.49.49-1.28 0-1.77a1.25 1.25 0 0 0-1.77 0l-4.42 4.42l-.71-.71l6.54-6.54c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-5.83 5.83l-.71-.71l6.89-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89l-.69-.7l5.48-5.48c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4.003 4.003 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.07-4.07c.49-.49.49-1.28 0-1.77a1.27 1.27 0 0 0-1.78.01z"
  							fill="currentColor"
  						></path>
  					</svg> -->
					  <IconsHiIcon class="ml-3" />
					</span>
				</p>
				<p class="mt-1 tracking-wide text-white">
					My name is Po
				</p>
			</div>
			<div class="mt-2">
				<p class="tracking-wide text-white">
					A Frontend
				</p>
				<p class="py-2 tracking-wide text-white">Web Developer</p>
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
		height: calc(100vh - 30px);
	}
</style>
