<script>
  import { onMount } from 'svelte';
  import CommunityIcon from '$lib/assets/heroicons/communityIcon.svelte';
  import DatabaseIcon from '$lib/assets/heroicons/databaseIcon.svelte';
  import FcIcon from '$lib/assets/heroicons/fcIcon.svelte';
  import HouseIcon from '$lib/assets/heroicons/houseIcon.svelte';
  import LinkShellIcon from '$lib/assets/heroicons/linkShellIcon.svelte';
  import NewsIcon from '$lib/assets/heroicons/newsIcon.svelte';
  import UserGroupIcon from '$lib/assets/heroicons/userGroupIcon.svelte';
  import UserIcon from '$lib/assets/heroicons/userIcon.svelte';
  import MainNavItem from "./mainNavItem.svelte";

  let url = ``;

  onMount(() => {
    let curUrl = window.location.href;
    let res = curUrl.split("/");
    url = res[res.length-1]
  });
</script>

<MainNavItem link="/" linkText="Startseite" active={url === ""}>
  <HouseIcon size="6" stroke="2"/>
</MainNavItem>

<MainNavItem link="/" linkText="Neuigkeiten" active={url === "/"}>
  <NewsIcon size="6" stroke="1.5" />
</MainNavItem>

<MainNavItem link="/database" linkText="Datenbank" active={url === "database"}>
  <DatabaseIcon size="6" stroke="1.5"/>
</MainNavItem>

<MainNavItem link="/" linkText="Charaktere" active={url === "/"}>
  <UserIcon size="6" stroke="2"/>
</MainNavItem>

<MainNavItem link="/" linkText="Freie Gesellschaften" active={url === "/"}>
  <FcIcon size="6" stroke="1.8"/>
</MainNavItem>

<MainNavItem link="/" linkText="Kontaktkreise" active={url === "/"}>
  <LinkShellIcon size="6" stroke="2"/>
</MainNavItem>

<MainNavItem link="/" linkText="Community" active={url === "/"}>
  <CommunityIcon size="6" stroke="2"/>
</MainNavItem>

<MainNavItem link="/signin" linkText="Signin" active={url === "/signin"}>
  <CommunityIcon size="6" stroke="2"/>
</MainNavItem>

<MainNavItem link="/signup" linkText="Signup" active={url === "/signup"}>
  <CommunityIcon size="6" stroke="2"/>
</MainNavItem>

<hr />

<MainNavItem link="/" linkText="Team" active={url === "/"}>
  <UserGroupIcon size="6" stroke="1.9"/>
</MainNavItem>