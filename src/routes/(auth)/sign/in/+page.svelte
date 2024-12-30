<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Layout from '$lib/components/ui/layout.svelte';
</script>

<Layout className="justify-center h-screen items-center">
	<form class="flex w-72 flex-col gap-4">
		<label class="flex flex-col gap-2">
			Username
			<input type="text" class="rounded-xl" />
		</label>
		<label class="flex flex-col gap-2">
			Password
			<input type="text" class="rounded-xl" />
		</label>
		<Button text="Sign in" />
	</form>
</Layout>
