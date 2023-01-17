<script>
  export let title;
  export let maintenance;
</script>

<div class="cardBG w-full flex items-center overflow-hidden">
  <div class="w-[60px] h-[50px] bg-darkpurple flex justify-center items-center">
    <slot/>
  </div>
  <div class="rounded-r-lg border border-darkpurple h-[50px] w-full pl-3 flex flex-col justify-center">
    <p class="truncate text-xs font-bold">{title}</p>
    <p class="truncate text-xs text-gray-500">{maintenance}</p>
  </div>
</div>