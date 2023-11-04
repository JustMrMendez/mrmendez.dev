<script lang="ts">
	import { CodeBlock, InputChip } from '@skeletonlabs/skeleton';
	// import MHeadshot from './MHeadshot.svelte';

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
	<div class="">
		<div class="flex flex-col text-left md:text-center lg:w-1/2 lg:text-left">
			<h1 class="unstyled text-4xl font-bold leading-[4rem] md:text-5xl">
				Innovative Full Stack Developer
			</h1>
			<p class="my-3 !text-2xl">
				Bridging concepts to reality with modern web technologies. Crafting responsive, scalable
				solutions with a focus on user experience and performance.
			</p>
			<div class="my-10 flex w-full md:justify-center lg:justify-start">
				<button class="btn variant-filled-primary mr-6">Contact me</button>
				<button class="btn variant-soft-primary">See Projects</button>
			</div>
		</div>
		{#key code}
			<div class="h-10 w-fit">
				<InputChip
					name="filters"
					bind:value={tags}
					padding="mt-10 p-3"
					placeholder="Search Projects by skills/tags"
				/>
			</div>
		{/key}
	</div>
	<div
		class="w-full rounded-lg bg-surface-800 shadow-md backdrop-blur-lg backdrop-filter dark:bg-surface-600/60"
	>
		<!-- <div class="overflow-hidden rounded-lg bg-white bg-opacity-10"> -->
		<div class="flex gap-2 items-center rounded-t-lg p-2 bg-primary-50-900-token">
			<div class="h-2 w-2 rounded-full bg-red-500" />
			<div class="h-2 w-2 rounded-full bg-yellow-400" />
			<div class="h-2 w-2 rounded-full bg-primary-500" />
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
</section>
