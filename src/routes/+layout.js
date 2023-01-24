import Headline from '../components/Headline.svelte';
import Sidebar from '../components/Sidebar.svelte';
import Page from '../components/Page.svelte';
import Button from '../components/Button.svelte';
import Text from '../components/Text.svelte';
import Image from '../components/Image.svelte';
import Header from '../components/Header.svelte';
import Subheadline from '../components/Subheadline.svelte';
import { PUBLIC_ACCESSTOKEN } from '$env/static/public';
// rrzemCf3ET4ogGL3QdtvLwtt

import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: PUBLIC_ACCESSTOKEN,
		use: [apiPlugin],
		components: {
			sidebar: Sidebar,
			image: Image,
			button: Button,
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
