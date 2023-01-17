<script>
  import RegularCard from "$lib/components/modules/card_regular.svelte";
  import StatCard from "$lib/components/modules/statCardsIndex.svelte";
  import Maintenance from "$lib/components/modules/maintenanceCard.svelte";

  import UserGroupIcon from '$lib/assets/heroicons/userGroupIcon.svelte';
  import DatabaseIcon from '$lib/assets/heroicons/databaseIcon.svelte';
  import FcIcon from '$lib/assets/heroicons/fcIcon.svelte';
  import GlobeIcon from '$lib/assets/heroicons/globeIcon.svelte';
  import FlameIcon from '$lib/assets/heroicons/flameIcon.svelte';
  import MoneyIcon from '$lib/assets/heroicons/moneyIcon.svelte';
  import ItemIcon from '$lib/assets/heroicons/itemIcon.svelte';
</script>

<h1 class="text-3xl font-bold text-white flex mb-6">Willkommen bei XIVData</h1>
<div class="flex gap-3 md:flex-col">
  <div>
    <div class="flex gap-3 sm:flex-col">
      <StatCard title="Charaktere" stat="12931213">
        <UserGroupIcon size="6" stroke="2" />
      </StatCard>
      <StatCard title="Freie Gesellschaften" stat="12931213">
        <FcIcon size="6" stroke="2" />
      </StatCard>
      <StatCard title="Gegenstände" stat="12931213">
        <DatabaseIcon size="6" stroke="2" />
      </StatCard>
    </div>
  </div>
  <div>
    <div class="flex flex-col gap-1">
      <Maintenance title="Companion App" maintenance="No Maintenance planned"> 
        <UserGroupIcon size="6" stroke="2" />
      </Maintenance>
      <Maintenance title="Game Server" maintenance="No Maintenance planned"> 
        <GlobeIcon size="6" stroke="2" />
      </Maintenance>
      <Maintenance title="Lodestone" maintenance="No Maintenance planned"> 
        <FlameIcon size="6" stroke="2" />
      </Maintenance>
      <Maintenance title="Final Fantasy Online Store" maintenance="No Maintenance planned"> 
        <MoneyIcon size="6" stroke="2" />
      </Maintenance>
      <Maintenance title="Playstation Network" maintenance="No Maintenance planned"> 
        <ItemIcon size="6" stroke="2" />
      </Maintenance>
    </div>
  </div>
</div>