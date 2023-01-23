<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="p-28">
	<section class="grid md:grid-cols-2 gap-12">
		<img
			alt="portrait of Josefine"
			src="/images/JosefinePortrait.png"
			class="lg:h-[400px] rounded-lg mr-5 justify-items-end"
		/>
		<div>
			<p class="pb-10">
				<!-- {blok.text} -->
				Born in Germany’s East, raised in the North - lived all over the place, from Beijing to Tilburg,
				Kaoshiung to Tallinn and Cumbaya. At home, anywhere where, where there is good coffee and some
				friendly faces.
			</p>
			<a
				href="mailto:schaeferj@hotmail.de"
				class="border border-solid border-black rounded-full text-2xl uppercase py-1 px-5 hover:text-egg-shell hover:bg-dark justify-self-end"
				>Say Hello 👋
				<!-- {blok.button}</a -->
				>
			</a>
		</div>
	</section>
</div>
