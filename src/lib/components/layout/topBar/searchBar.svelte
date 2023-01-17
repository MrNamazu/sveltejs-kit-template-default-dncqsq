<script>
	import { searchBarOpen } from '$lib/stores/searchstore.js';
  import SearchIcon from '$lib/assets/heroicons/searchIcon.svelte'

  let search = '';
</script>

<div class="flex items-center">
<SearchIcon size="6" />
<input 
  bind:value={search} 
  on:focus={() => searchBarOpen.set(true)} 
  on:blur={() => searchBarOpen.set(false)} 
  type="text" 
  placeholder="Tippe hier zum suchen..."
  class="py-3 px-2 bg-transparent text-sm w-full outline-none"
/>
</div>