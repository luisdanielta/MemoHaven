<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Layout from '$lib/components/ui/layout.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import Title from '$lib/components/ui/title.svelte';
	let username = $state<string>('');
	let password = $state<string>('');
</script>

<Layout className="p-4 justify-center h-screen">
	<span
		><Title text="Welcome!" />
		<Title text="Please sign in to continue." /></span
	>
	<form class="flex flex-col gap-4">
		<Input placeholder="Username" />
		<Input placeholder="Password" />
		<Link text="Forgot your password?" />
		<Button text="Sign up" />
	</form>
</Layout>
