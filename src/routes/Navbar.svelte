<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import { LightSwitch, ProgressBar } from '@skeletonlabs/skeleton';
	import Hamburger from './Hamburger.svelte';
	export let maxScroll: number;
	export let scrollY: number;
	let open = false;

	function addLabel(node: HTMLElement) {
		console.log(node);
		// node.style.position = 'relative';
		if (node) {
			node.classList.remove('sr-only');
		}
		// label.classList.remove('sr-only');
		let bar = document.querySelector('.progress-bar') as HTMLElement;
		let barMeter = document.querySelector('.progress-bar-meter') as HTMLElement;
		if (barMeter && bar) {
			bar.style.overflow = 'visible';
			barMeter.style.position = 'relative';
			barMeter.appendChild(node);
		}

		return {
			update(node: HTMLElement) {
				console.log(node.innerText);
			},
			// destroy() {
			// 	if (label) {
			// 		label.remove();
			// 	}
			// }
		};
	}
	$: scrollPercent = (scrollY / maxScroll) * 100 > 100 ? 100 : Math.round((scrollY / maxScroll) * 100)
	let label: HTMLElement;
</script>

<Hamburger bind:open />
<Sidebar bind:open />
<div
	class="sticky top-0 z-10 border-b bg-surface-200/40 py-1 shadow-sm backdrop-blur border-surface-50-900-token dark:bg-surface-900/40 md:px-6"
>
	<div class="container mx-auto flex w-full items-center justify-between">
		<h3 class="-mt-1 p-2 md:p-0">
			<span class="text-error-500-400-token">{'<Mr'}</span>Mendez<span class={open ? 'hidden' : ''}
				>.dev</span
			><span class="text-error-900-50-token">{'/>'}</span>
		</h3>
		<nav class="group list-nav hidden md:block">
			<ul class="flex items-end">
				<li>
					<a
						class="rounded px-2 transition-all duration-300 hover:!opacity-100 group-hover:opacity-50"
						href="/">Home</a
					>
				</li>
				<li>
					<a
						class="rounded px-2 transition-all duration-300 hover:!opacity-100 group-hover:opacity-50"
						href="/about">About</a
					>
				</li>
				<li>
					<a
						class="rounded px-2 transition-all duration-300 hover:!opacity-100 group-hover:opacity-50"
						href="/blog">Blog</a
					>
				</li>
			</ul>
		</nav>
		<div class="hidden gap-3 md:flex">
			<div class="hidden md:block">
				<LightSwitch />
			</div>
			<a href="https:twitter.com/justmrmendez/" target="_blank" rel="noreferrer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					class="h-7 w-7 transition-all hover:scale-110"
				>
					<path
						fill="currentColor"
						d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
					/></svg
				>
			</a>
			<a href="https://github.com/JustMrMendez/" target="_blank" rel="noreferrer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					class="h-7 w-7 transition-all hover:scale-110"
				>
					<path
						fill="currentColor"
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					/>
				</svg>
			</a>
		</div>
	</div>

	<!-- <div use:addLabel={label}> -->
	<div class="translate-y-2">
		<span
			use:addLabel
			class="z-10 sr-only shadow-sm bg-surface-200-700-token
			text-error-500-400-token rounded-b-[50%] p-1 absolute
			 top-0 text-xs left-full font-bold select-none transition-transform duration-1000"
			bind:this={label}
			style="transform: {scrollPercent > 97 ? 'translateX(-99%)' : 'translateX(0)'}"

		>
			{scrollPercent}%
		</span>
		<ProgressBar value={scrollY < maxScroll ? scrollY : maxScroll } max={maxScroll} height="h-1" />
	</div>
</div>
