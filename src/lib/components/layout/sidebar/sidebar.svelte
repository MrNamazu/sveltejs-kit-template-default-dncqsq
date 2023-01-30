<script>
	import logo from '$lib/assets/images/logo_placeholder2.svg';
	import MainNav from '$lib/components/layout/mainNav/mainNav.svelte';
	import { isSidebarOpen } from '$lib/stores/sidebarstore.js';
	import { onMount } from 'svelte';
  let innerWidth;


  const collapseSidebar = () => {
    if ($isSidebarOpen === true) {
      isSidebarOpen.set(false)
    } else {
      isSidebarOpen.set(true)
    }
  }

  const testfunc = (width) => {
    if (width <= 850) {
      isSidebarOpen.set(false)
    }
  }
  $: testfunc(innerWidth)
</script>
<svelte:window bind:innerWidth />

  
<div class="bg-xivdata-gray-800 h-full fixed md:w-16 flex flex-col p-1 transition-all duration-500" style={`${$isSidebarOpen ? "width:256px" : 'width: 64px;'}`}>
  <!-- Logo -->
  <a href="/" class="h-20 flex place-content-center">
    <img class="w-5/6 md:w-9" src={logo} alt="logo">
  </a>
  <div class="flex flex-col flex-1 justify-between items-center">
    <!-- Main Navigation -->
    <div class={`flex flex-col w-full gap-3 ${$isSidebarOpen ? 'p-3' : 'p-2'}`}>
      <MainNav />
    </div>
    <button class={`mb-5 transition-all ${$isSidebarOpen ? 'rotate-180' : ''}`} on:click={() => collapseSidebar()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
  </div>
</div>
