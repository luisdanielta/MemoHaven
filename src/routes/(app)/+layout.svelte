<script lang="ts">
	import './main.css';
	import NavBar from '$lib/components/navBar.svelte';
	import NavFloat from '$lib/components/navFloat.svelte';
	import Layout from '$lib/components/ui/layout.svelte';

	import ProtectedRoute from '$lib/context/protectedRoute.svelte';
	let { children } = $props();
</script>

<ProtectedRoute>
	<div class="flex h-screen flex-col">
		<NavBar />
		<main class="scrolling-hidden container mx-auto mt-4 h-full flex-1 overflow-y-auto px-4">
			{@render children()}
		</main>
	</div>
	<NavFloat />
</ProtectedRoute>
