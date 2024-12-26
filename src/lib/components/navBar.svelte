<script lang="ts">
	import ISettings from '$lib/icons/iSettings.svelte';
	import IBox from './ui/iBox.svelte';
	import Layout from './ui/layout.svelte';
	import User from './ui/user.svelte';
</script>

<nav class="fixed left-0 top-0 w-full bg-gray-50 shadow-sm">
	<div class="container mx-auto">
		<Layout row className="items-center justify-between">
			<User />
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
				color="text-mainC-500 hover:text-gray-50"
			>
				<ISettings />
			</IBox>
		</Layout>
	</div>
</nav>
