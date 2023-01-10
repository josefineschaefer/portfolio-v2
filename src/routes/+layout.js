import Header from '../components/Header.svelte';
import Headline from '../components/Headline.svelte';
import Sidebar from '../components/Sidebar.svelte';
import Page from '../components/Page.svelte';
import Text from '../components/Text.svelte';
import Subheadline from '../components/Subheadline.svelte';

import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'rrzemCf3ET4ogGL3QdtvLwtt',
		use: [apiPlugin],
		components: {
			header: Header,
			sidebar: Sidebar,
			headline: Headline,
			page: Page,
			text: Text,
			subheadline: Subheadline
		},
		apiOptions: {
			https: true
		}
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
