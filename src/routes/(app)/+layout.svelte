<script lang="ts">
	import './main.css';
	import NavBar from '$lib/components/navBar.svelte';
	import NavFloat from '$lib/components/navFloat.svelte';
	import Layout from '$lib/components/ui/layout.svelte';

	import ProtectedRoute from '$lib/context/protectedRoute.svelte';
	let { children } = $props();
</script>

<ProtectedRoute>
	<div class="flex h-screen flex-col bg-mainC-50">
		<NavBar />
		<main class="scrolling-hidden container mx-auto h-full flex-1 overflow-y-auto">
			{@render children()}
		</main>
	</div>
	<NavFloat />
</ProtectedRoute>
