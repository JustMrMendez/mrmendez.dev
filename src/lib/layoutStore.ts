import { writable } from 'svelte/store';

export const layout = writable({
	scrollY: 0,
	maxScroll: 0
});
