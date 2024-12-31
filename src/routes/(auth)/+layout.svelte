<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Sign</title>
</svelte:head>

<main class="container mx-auto px-4">
	{@render children()}
</main>
