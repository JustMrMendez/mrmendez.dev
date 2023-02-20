<script lang="ts">
	import { CodeBlock, InputChip } from '@skeletonlabs/skeleton';
	import MHeadshot from './MHeadshot.svelte';

	let tags: string[] = ['React', 'Typescript', 'State Management'];

	let code = `
import { CodeBlock, InputChip } from '@skeletonlabs/skeleton';`;
	let formattedTags: string[] = [];

	$: formattedTags = tags.map((tag) => {
		const toCamelCase = (tag: string): string =>
			tag
				.split(' ')
				.map((word, index) => {
					if (index === 0) return word.toLowerCase();
					return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
				})
				.join('');

		return toCamelCase(tag);
	});
</script>

<section
	class="container mx-auto mb-32 flex min-h-[50vh] flex-col justify-around pb-2 md:mt-20 lg:flex-row"
>
	<div class="flex flex-col text-left md:text-center lg:w-1/2 lg:text-left">
		<h1 class="unstyled text-4xl font-bold leading-[4rem] md:text-5xl">Full Stack Develper</h1>
		<p class="my-3 !text-2xl">
			Cache every single thing your app could ever do ahead of time, so your code never even has to
			run at all.
		</p>
		<div class="my-10 flex w-full md:justify-center lg:justify-start">
			<button class="btn variant-filled-primary mr-6">Contact me</button>
			<button class="btn variant-soft-primary">See Projects</button>
		</div>
	</div>
	<div
		class="w-full rounded-lg bg-surface-800 shadow-md backdrop-blur-lg backdrop-filter dark:bg-surface-600/60"
	>
		<!-- <div class="overflow-hidden rounded-lg bg-white bg-opacity-10"> -->
		<div class="flex items-center rounded-t-lg p-2 bg-primary-50-900-token">
			<div class="mr-2 h-2 w-2 rounded-full bg-red-500" />
			<div class="mr-2 h-2 w-2 rounded-full bg-yellow-400" />
			<div class="mr-2 h-2 w-2 rounded-full bg-primary-500" />
		</div>
		<!-- make code block editable -->
		<CodeBlock
			contenteditable="true"
			language="javascript"
			code={`import { ${formattedTags} } from 'portfolio/projects';`}
			theme="tokyo-night-dark"
			themeOptions={{ lineNumbers: false }}
			classes="rounded-b-lg !bg-transparent"
			background="bg-transparent"
		/>
	</div>
	<!-- </div> -->
	{#key code}
		<div class="h-10">
			<InputChip
				name="filters"
				bind:value={tags}
				padding="mt-10 p-2"
				placeholder="Search Projects by skills/tags"
			/>
		</div>
	{/key}
	<!-- <div class="input-group input-group-divider mt-10 grid-cols-[auto_1fr_auto] lg:hidden">
		<div class="input-group-shim">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
		</div>
		<input type="search" class="px-5" placeholder="Search..." />
		<button class="variant-filled-secondary">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
			</svg></button
		>
	</div> -->
</section>
