<script lang="ts">
	import ProtectedRoute from '$lib/context/protectedRoute.svelte';
	let { children } = $props();
</script>

<ProtectedRoute>
	{@render children()}
</ProtectedRoute>
