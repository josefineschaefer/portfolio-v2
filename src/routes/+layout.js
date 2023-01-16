import Headline from '../components/Headline.svelte';
import Sidebar from '../components/Sidebar.svelte';
import Page from '../components/Page.svelte';
import Text from '../components/Text.svelte';
import Header from '../components/Header.svelte';
import Subheadline from '../components/Subheadline.svelte';

import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'rrzemCf3ET4ogGL3QdtvLwtt',
		use: [apiPlugin],
		components: {
			sidebar: Sidebar,
			headline: Headline,
			header: Header,
			page: Page,
			text: Text,
			subheadline: Subheadline
		},
		apiOptions: {
			https: true
		}
	});
	let storyblokApi = await useStoryblokApi();
	const dataConfig = await storyblokApi.get('cdn/stories/config/', {
		version: 'draft',
		resolve_links: 'url'
	});

	return {
		storyblokApi: storyblokApi,
		header_menu: dataConfig.data.story.content.header_menu,
		header_logo: dataConfig.data.story.content.header_logo
	};
}
