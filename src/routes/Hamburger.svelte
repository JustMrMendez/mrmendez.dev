<script lang="ts">
	export let open = false;
</script>

<button
    on:click={() => (open = !open)}
    class="fixed top-2 right-4 z-50 flex h-6 w-6 flex-col justify-around md:hidden"
>
    <div
        class="h-0.5 w-full rounded transition-all duration-300 bg-surface-900-50-token {open
            ? 'translate-y-2 -rotate-45'
            : ''}"
    />
    <div
        class="h-0.5 w-full rounded transition-all duration-300 bg-surface-900-50-token {open
            ? 'opacity-0'
            : ''}"
    />
    <div
        class="h-0.5 w-full rounded transition-all duration-300 bg-surface-900-50-token {open
            ? '-translate-y-3 rotate-45'
            : ''}"
    />
</button>