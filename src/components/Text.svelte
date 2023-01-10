<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="pb-10 text-xl lg:indent-96 md:indent-56">
	<p>
		{blok.text}
	</p>
</div>
