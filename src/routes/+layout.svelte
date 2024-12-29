<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>MemoHaven</title>
</svelte:head>

{@render children()}
