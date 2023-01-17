<script>
import CloseIcon from '$lib/assets/heroicons/closeIcon.svelte'
export let text;
export let error;
export let success;
export let warning;
</script>

<div class={`bg-red-600 flex items-center justify-between py-2 px-6`}>
  <div class="flex gap-2 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8 bg-red-800 rounded-lg p-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
    <p class="text-sm font-bold">{text}</p>
  </div>
  <div class="hover:bg-red-800 transition rounded-lg cursor-pointer">
    <CloseIcon size="1.5"/>
  </div>
</div>