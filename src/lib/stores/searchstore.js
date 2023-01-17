import { writable } from 'svelte/store';

export const searchBarOpen = writable(false);

export const closeSearchBar = () => {
	searchBarOpen.set(false);
};
