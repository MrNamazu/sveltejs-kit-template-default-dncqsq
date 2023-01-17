<script>
export let title;
export let stat;
</script>

<div class="cardBG w-1/3 sm:w-full flex items-center gap-3 overflow-hidden px-3 py-4">
  <div class="w-1/4 sm:w-8 flex justify-center">
    <slot/>
  </div>
  <div class="w-3/4">
    <p class="truncate text-xs font-bold">{title}</p>
    <p class="truncate text-xs">{stat}</p>
  </div>
</div>