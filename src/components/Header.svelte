<script>
	export let header_menu;
	export let header_logo;
</script>

<header class="top-0 left-0 fixed w-full h-24 z-11 bg-[#e8e6df]">
	<nav class="flex items-center justify-between h-full px-8">
		<a href="home">
			<img src={header_logo.filename} alt={header_logo.alt} />
		</a>
		{#if header_menu}
			<ul class="flex space-x-16 uppercase">
				{#each header_menu as blok}
					<li>
						<a href={blok.link.story.slug}> {blok.link.story.name}</a>
					</li>
				{/each}
			</ul>
		{/if}
	</nav>
</header>

<style lang="postcss">
	li a {
		@apply border border-black border-solid rounded-full py-1 px-5 hover:text-egg-shell hover:bg-dark;
	}
</style>
