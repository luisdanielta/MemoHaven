<script lang="ts">
	import { isAuthenticated } from '$lib/context/user.svelte';
	let { children } = $props();
</script>

{#if !isAuthenticated()}
	{@render children()}
{/if}
