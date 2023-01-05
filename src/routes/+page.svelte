<body class="h-full p-8">
	<header class="top-0 left-0 fixed w-full h-24 bg-yellow-200">
		<nav class="flex items-center justify-between h-full px-8">
			<a href="/">
				<img src={'/Logo.png'} alt="Josefine Schaefer Logo" />
			</a>
			<ol class="flex list-decimal space-x-16 uppercase">
				<li>
					<a href="/about">About</a>
				</li>
				<li><a href="/talks">Talks</a></li>
				<li><a href="/blog">Blog</a></li>
			</ol>
		</nav>
	</header>
	<main class="mt-24">
		<h2 class="text-6xl md:text-8xl lg:text-9xl text-left uppercase pb-12 break-words">
			Community, Code & Coffee
		</h2>
		<p class="pb-10 text-xl indent-96">
			Initially from a communications background, Josefine got into frontend development in her late
			twenties by joining a coding boot camp. After working as a front-end developer for two years,
			she now combines her curiosity for tech with her experience in marketing and communications
			and works as a Developer Relations Engineer at Storyblok. She is a Girl Code ambassador,
			passionate about all things web accessibility and coding communities.
		</p>
		<section class="flex justify-between">
			<img
				alt="portrait of Josefine"
				src="/images/JosefinePortrait.png"
				class="max-w-xs h-auto rounded-lg mr-5"
			/>

			<h1 class="text-6xl md:text-8xl lg:text-9xl text-right uppercase self-end break-words">
				Josefine <br /> Schaefer
			</h1>
		</section>
	</main>
</body>

<style lang="postcss">
	li a {
		@apply border-solid border rounded-full py-1 px-5 hover:text-egg-shell hover:bg-gray-dark;
	}
</style>
