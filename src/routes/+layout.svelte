<script>
  import "../app.css";
  import Alerts from "$lib/components/modules/alerts.svelte"
	import logo from '$lib/assets/images/logo_placeholder2.svg';
	import { fly } from 'svelte/transition';
	import MainNav from '$lib/components/layout/mainNav/mainNav.svelte';
	import TopBar from '$lib/components/layout/topBar/topBar.svelte';

</script>
<div 
  class="flex w-full min-h-[100vh]" 
  style="background-attachment: fixed; background-color:hsla(289,34%,8%,1);background-image: radial-gradient(at 0% 100%, hsla(262,56%,47%,1) 0px, transparent 50%),radial-gradient(at 84% 23%, hsla(258,60%,21%,1) 0px, transparent 50%),radial-gradient(at 100% 0%, hsla(247,56%,4%,1) 0px, transparent 50%),radial-gradient(at 55% 1%, hsla(260,60%,43%,1) 0px, transparent 50%),radial-gradient(at 88% 91%, hsla(266,64%,13%,1) 0px, transparent 50%),radial-gradient(at 17% 25%, hsla(240,58%,17%,1) 0px, transparent 50%);">
  <div class="bg-xivgray-900 w-64 h-full fixed md:w-16">
    <!-- Logo -->
    <a href="/" class="h-20 flex place-content-center">
      <img class="w-5/6 md:w-9" src={logo} alt="logo">
    </a>
    <!-- Main Navigation/Left Sidebar -->
    <div class="flex flex-col w-full p-2 gap-1">
      <MainNav />
    </div>
  </div>
  <div class={`ml-64 md:ml-16 flex flex-col w-[calc(100%-250px)] md:w-[calc(100%-64px)]`}>
    <!-- Top/Search Bar -->
    <TopBar />
    
    <!-- Main Content -->
    <div class="flex-1 p-10 md:p-6">
      <slot />
    </div>
  </div>
</div>