<script>
  import SearchResults from '$lib/components/layout/topBar/searchResults.svelte';
  import Alerts from "$lib/components/modules/alerts.svelte";
  import { searchBarOpen } from '$lib/stores/searchstore';
  import { fly } from 'svelte/transition';
  import SearchBar from "./searchBar.svelte";
  import SearchDropDown from "./searchDropDown.svelte";
  import UserControlPanel from "./userControlPanel.svelte";

  export let staging
</script>
<div class="sticky w-full top-0 z-50">
{#if staging}
<Alerts text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" />
{/if}
<div class="bg-secondary-transparent-200 backdrop-blur w-full z-50 flex items-center px-4 py-4 justify-between md:px-2">
  <div class="flex flex-1 w-full">
    <SearchDropDown />
    <SearchBar />
  </div>
  <UserControlPanel />
</div>
{#if $searchBarOpen}
  <div transition:fly={{ y: -50, duration: 200 }}>
    <SearchResults />
  </div>
{/if}
</div>
