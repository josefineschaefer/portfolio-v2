<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<img
	use:storyblokEditable={blok}
	src={blok.image.filename}
	alt={blok.image.alt}
	class="lg:h-[400px] rounded-lg mr-5 justify-items-end"
/>
