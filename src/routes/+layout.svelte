<script>
	import TopBar from '$lib/components/layout/topBar/topBar.svelte';
	import "../app.css";
	import Sidebar from '$lib/components/layout/sidebar/sidebar.svelte';
	import { isSidebarOpen } from '$lib/stores/sidebarstore.js';
</script>

<div class="flex w-full min-h-[100vh]" style="background: linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.06) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #181821">
  <Sidebar />
  <div class={`ml-64 flex flex-col flex-1 transition-all duration-500 
    ${$isSidebarOpen ? 'ml-64' : 'ml-16'} `}>
    <!-- Top/Search Bar -->
    <TopBar />
    <!-- Main Content -->
    <div class="flex-1 p-10 sm:!p-1 md:p-3 lg:p-5">
      <slot />
    </div>
  </div>
</div>