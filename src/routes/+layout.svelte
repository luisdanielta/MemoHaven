<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>MemoHaven</title>
</svelte:head>

<div class="bg-mainC-50">
	{@render children()}
</div>
