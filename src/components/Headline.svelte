<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<h1 class="text-left lg:indent-96 md:indent-56">
		{blok.headline}
	</h1>
</div>
