<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Layout from '$lib/components/ui/layout.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import Title from '$lib/components/ui/title.svelte';
	import { setNavItem } from '$lib/context/navItemContext.svelte';
	import IKey from '$lib/icons/iKey.svelte';
	import IPerson from '$lib/icons/iPerson.svelte';
	let username = $state<string>('');
	let password = $state<string>('');

	let signItem = $state({ id: 2, icon: 'Sign in' });

	setNavItem(signItem);
</script>

<Layout className="justify-center h-screen items-center">
	<form class="items-left flex flex-col gap-4 rounded-2xl">
		<span
			><Title text="Welcome!" />
			<Title text="Please sign in to continue." /></span
		>
		<Input placeholder="Username" type="text">
			<IPerson />
		</Input>
		<Input placeholder="Password" type="password">
			<IKey />
		</Input>
		<Link text="Forgot your password?" />
		<Button text="Sign up" />
	</form>
</Layout>
