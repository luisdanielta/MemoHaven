<script lang="ts">
	import IAlert from '$lib/icons/iAlert.svelte';
	import ISettings from '$lib/icons/iSettings.svelte';
	import IBox from './ui/iBox.svelte';
	import Layout from './ui/layout.svelte';
</script>

<!--fixed left-0 top-0-->
<nav class="w-full bg-gray-50 shadow shadow-blue-100">
	<div class="container mx-auto">
		<Layout row className="min-h-12 items-center justify-between m-4">
			<div></div>
		</Layout>
	</div>
</nav>

<!-- 
<div class="flex gap-2">
				<IBox
					className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-400 p-2"
					color="text-blue-500 hover:text-gray-50"
				>
					<IAlert />
				</IBox>
				<IBox
					className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-400 p-2"
					color="text-blue-500 hover:text-gray-50"
				>
					<ISettings />
				</IBox>
			</div>
-->
