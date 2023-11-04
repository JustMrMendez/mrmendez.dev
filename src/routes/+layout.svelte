<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/tokyo-night-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import Navbar from './Navbar.svelte';
	import { layout } from '../lib/layoutStore';
	import { onMount } from 'svelte';

	storeHighlightJs.set(hljs);
	let scrollY: number;
	let maxScroll: number;
	let maxWidth: number;
	$: $layout.scrollY = scrollY;
	$: $layout.maxScroll = maxScroll;

	onMount(() => {
		// get max scroll height of the page
		maxScroll = document.body.scrollHeight - window.innerHeight;
		maxWidth = document.body.scrollWidth - window.innerWidth;
		console.log('maxScroll', maxScroll);
	});
	$: console.log('scrollY', scrollY);
</script>

<svelte:window bind:scrollY />
<Navbar {maxScroll} {scrollY} />
<main class="h-full w-full px-3">
	<slot />
</main>
