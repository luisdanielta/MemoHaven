<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Layout from '$lib/components/ui/layout.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import Title from '$lib/components/ui/title.svelte';
	import IKey from '$lib/icons/iKey.svelte';
	import IPerson from '$lib/icons/iPerson.svelte';
	let username = $state<string>('');
	let password = $state<string>('');
</script>

<Layout className="justify-center h-screen items-center">
	<form class="items-left flex flex-col gap-4">
		<span
			><Title text="Welcome!" />
			<Title text="Please sign in to continue." /></span
		>
		<Input placeholder="Username">
			<IPerson />
		</Input>
		<Input placeholder="Password">
			<IKey />
		</Input>
		<Link text="Forgot your password?" />
		<Button text="Sign up" />
	</form>
</Layout>
