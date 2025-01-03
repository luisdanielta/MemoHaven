<script lang="ts">
	import { isAuthenticated } from './pb.svelte';

	let { children } = $props();
</script>

{@render children()}
{#if isAuthenticated()}{/if}
