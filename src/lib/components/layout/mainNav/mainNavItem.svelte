<script>
  export let link = "/";
  export let linkText;
  export let active = false;
</script>

<a href={link} class={`${active && 'bg-darkpurple'} hover:bg-darkpurple md:justify-center text-white group flex items-center p-2 text-base font-normal rounded-md transition-all gap-1`}>
  <slot />
  <span class="md:hidden">{linkText}</span>
</a>