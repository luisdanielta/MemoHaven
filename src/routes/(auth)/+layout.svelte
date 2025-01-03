<script lang="ts">
	import NavBar from '$lib/components/navBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Sign</title>
</svelte:head>

<div class="flex h-screen flex-col">
	<NavBar />
	<main class="scrolling-hidden container mx-auto mt-4 h-full flex-1 overflow-y-auto px-4">
		{@render children()}
	</main>
</div>
