<script lang="ts">
	import ISettings from '$lib/icons/iSettings.svelte';
	import Layout from './ui/layout.svelte';
	import User from './ui/user.svelte';
</script>

<nav class="fixed left-0 top-0 w-full bg-gray-50 shadow-sm">
	<div class="container mx-auto">
		<Layout row className="items-center justify-between">
			<User />
			<ISettings color="text-mainC-500" />
		</Layout>
	</div>
</nav>
