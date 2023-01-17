<script>
  export let name;
  export let description;
  export let icon;
  export let link = "/";
</script>

<li class="odd:bg-xivgray-transparent">
  <a href={link} class=" flex items-center px-3 py-4 hover:bg-[rgba(122,59,222,0.2)] transition">
    <img src={icon} alt="resultimage" class="w-11 h-11 rounded-full bg-white mr-3 border-[3px]" />
    <div class="flex flex-col">
      <span class="font-semibold">{name}</span>
      <span class="text-sm">{description}</span>
    </div>
  </a>
</li>