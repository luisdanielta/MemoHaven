<script lang="ts">
	import { authService } from '$lib/core/ports/authPort';

	let { children } = $props();
</script>

{#if authService.isAuthenticated()}
	{@render children()}
{/if}
