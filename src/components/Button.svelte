<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<a
	use:storyblokEditable={blok}
	href="mailto:schaeferj@hotmail.de"
	class="border border-solid border-black rounded-full text-2xl uppercase py-1 px-5 hover:text-egg-shell hover:bg-dark justify-self-end"
>
	{blok.label}
</a>
