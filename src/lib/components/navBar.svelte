<script lang="ts">
	import ISettings from '$lib/icons/iSettings.svelte';
	import Layout from './ui/layout.svelte';
	import User from './ui/user.svelte';
</script>

<nav class="">
	<Layout row className="items-center justify-between">
		<User />
		<ISettings color="text-mainC-500" />
	</Layout>
</nav>
