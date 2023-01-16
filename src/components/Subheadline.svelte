<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<h2 class="text-right">
		{blok.subheadline}
	</h2>
</div>
