<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;
</script>

{#key blok}
	<main use:storyblokEditable={blok} class="h-full p-28 mt-10">
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
	</main>
{/key}
