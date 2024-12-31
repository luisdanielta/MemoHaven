<script lang="ts">
	import NavFloat from '$lib/components/navFloat.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Sign</title>
</svelte:head>

<main class="container mx-auto px-4">
	{@render children()}
</main>

<NavFloat />
