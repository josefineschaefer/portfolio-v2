<header class="top-0 left-0 fixed w-full h-24 z-11 bg-[#e8e6df]">
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

<style lang="postcss">
	li a {
		@apply border border-black border-solid rounded-full py-1 px-5 hover:text-egg-shell hover:bg-dark;
	}
</style>
