<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import In from '$lib/components/ui/in.svelte';
	import Layout from '$lib/components/ui/layout.svelte';

	interface ISignIn {}
</script>

<Layout className="p-4 justify-center h-screen items-center">
	<div
		class="flex h-full w-full flex-col items-center justify-evenly gap-4 rounded-2xl bg-gray-50 px-4 py-6 shadow"
	>
		<form class="flex w-auto flex-col gap-4">
			<label class="flex flex-col gap-2 text-gray-500">
				Username
				<In placeholder="Username" />
			</label>
			<label class="flex flex-col gap-2 text-gray-500">
				Password
				<In placeholder="Password" />
			</label>
			<Button text="Sign in" />
		</form>
	</div>
</Layout>
