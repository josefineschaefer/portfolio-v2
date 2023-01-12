<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';

	export interface AccordionCtxType {
		flush: boolean;
		activeClasses: string;
		inactiveClasses: string;
		selected?: Writable<object>;
	}
</script>

<script lang="ts">
	import Frame from '../utils/Frame.svelte';
	import classNames from 'classnames';
	import { setContext } from 'svelte';

	export let multiple: boolean = false;
	export let flush: boolean = false;
	export let activeClasses: string =
		'dark:bg-gray-800 text-dark dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
	export let inactiveClasses: string =
		'text-dark dark:text-gray-400 hover:italic hover:dark:bg-gray-800';
	export let defaultClass: string = 'text-dark dark:text-gray-400';

	const ctx: AccordionCtxType = {
		flush,
		activeClasses,
		inactiveClasses,
		selected: multiple ? undefined : writable()
	};

	setContext<AccordionCtxType>('ctx', ctx);

	let frameClass = classNames(
		defaultClass,
		'divide-y divide-gray-200 dark:divide-gray-700',
		'border-gray-200 dark:border-gray-700',
		'rounded-t-xl',
		$$props.class
	);
</script>

<Frame class={frameClass} color="none" border={!flush}>
	<p class="text-xl pb-4 indent-10">
		Looking for a speaker or MC for your event? <br /> Get in touch via email or Twitter.
	</p>
	<h1 class="uppercase text-right">Talks</h1>
	<slot />
</Frame>
