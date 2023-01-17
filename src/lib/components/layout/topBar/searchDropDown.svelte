<script>
	import { clickOutside } from '$lib/scripts/clickoutside.js';
	import { fly } from 'svelte/transition';
	import GlobeIcon from '../../../assets/heroicons/globeIcon.svelte';
	import ItemIcon from '../../../assets/heroicons/itemIcon.svelte';
	import LocationIcon from '../../../assets/heroicons/locationIcon.svelte';
	import QuestIcon from '../../../assets/heroicons/questIcon.svelte';
	import SkillIcon from '../../../assets/heroicons/skillIcon.svelte';
	import UserGroupIcon from '../../../assets/heroicons/userGroupIcon.svelte';
	import FcIcon from './../../../assets/heroicons/fcIcon.svelte';
  
  let openDropDown = false;
  let activeItem = "Everything";

  const changeMenu = (active) => {
    activeItem = active;
    openDropDown = false;
  }
</script>

<button class="relative" use:clickOutside on:click_outside={() => openDropDown = false}>

  <button on:click={() => (openDropDown = !openDropDown)} class={`${openDropDown ? 'bg-darkpurple' : ''} bg-xivgray-transparent mr-2 hover:bg-darkpurple py-3 md:py-2 px-2 rounded-lg transition flex w-44 md:w-16 justify-between items-center`}>
    <div class="flex gap-2 items-center">
      {#if activeItem === "Everything"}
        <GlobeIcon size="5" />
        <span class="text-sm md:hidden">Everything</span>
      {:else if activeItem === "Item"}
        <ItemIcon size="5" />
        <span class="text-sm md:hidden">Item</span>
      {:else if activeItem === "Character"}
        <UserGroupIcon size="5" />
        <span class="text-sm md:hidden">Character</span>
      {:else if activeItem === "Free Company"}
        <FcIcon size="5" />
        <span class="text-sm md:hidden">Free Company</span>
      {:else if activeItem === "Skill"}
        <SkillIcon size="5" />
        <span class="text-sm md:hidden">Skill</span>
      {:else if activeItem === "Quest"}
        <QuestIcon size="5" />
        <span class="text-sm md:hidden">Quest</span>
      {:else if activeItem === "Location"}
        <LocationIcon size="5" />
        <span class="text-sm md:hidden">Location</span>
      {/if}
    </div>
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFF" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>

  {#if openDropDown}  
    <ul class="mt-1 absolute bg-darkpurple w-full md:min-w-[200px] list-none text-left rounded-lg max-h-56 overflow-auto" transition:fly={{ y: -50, duration: 200 }}>
      

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]" on:click={() => changeMenu("Everything")}>
          <GlobeIcon size="5" />
          <span class="font-normal text-sm ml-3 block truncate">Everything</span>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]" on:click={() => changeMenu("Item")}>
          <ItemIcon size="5"/>
          <span class="font-normal text-sm ml-3 block truncate">Item</span>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]" on:click={() => changeMenu("Character")}>
          <UserGroupIcon size="5" />
          <span class="font-normal text-sm ml-3 block truncate">Character</span>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]" on:click={() => changeMenu("Free Company")}>
          <FcIcon size="5" />
          <span class="font-normal text-sm ml-3 block truncate">Free Company</span>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]" on:click={() => changeMenu("Skill")}>
          <SkillIcon size="5" />
          <span class="font-normal text-sm ml-3 block truncate">Skill</span>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]" on:click={() => changeMenu("Quest")}>
          <QuestIcon size="5" />
          <span class="font-normal text-sm ml-3 block truncate">Quest</span>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]" on:click={() => changeMenu("Location")}>
          <LocationIcon size="5" />
          <span class="font-normal text-sm ml-3 block truncate">Location</span>
        </li>

      <!-- <li class="flex py-3 pl-3 pr-9 items-center hover:bg-[#5d2bac]">
        <UserGroupIcon size="5"/>
        <span class="font-normal text-sm ml-3 block truncate">Character</span>
      </li> -->

    </ul>
  {/if}
  
</button>

