<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<h1 class="text-left">
		{blok.headline}
	</h1>
</div>
