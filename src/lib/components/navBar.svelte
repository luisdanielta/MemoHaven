<script lang="ts">
	import IAlert from '$lib/icons/iAlert.svelte';
	import ISettings from '$lib/icons/iSettings.svelte';
	import Notifications from './screens/notifications.svelte';
	import IBox from './ui/iBox.svelte';
	import Layout from './ui/layout.svelte';
	import User from './ui/user.svelte';
</script>

<!--fixed left-0 top-0-->
<nav class="w-full bg-gray-50 shadow">
	<div class="container mx-auto">
		<Layout row className="items-center justify-between m-4">
			<User />
			<div class="flex gap-2">
				<IBox
					className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
					color="text-mainC-500 hover:text-gray-50"
				>
					<IAlert />
				</IBox>
				<IBox
					className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
					color="text-mainC-500 hover:text-gray-50"
				>
					<ISettings />
				</IBox>
			</div>
		</Layout>
	</div>
</nav>
