<script lang="ts">
	import BtnAlt from '$lib/components/ui/button/btnAlt.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Layout from '$lib/components/ui/layout.svelte';
	import Link from '$lib/components/ui/link.svelte';
	import Title from '$lib/components/ui/title.svelte';
	import IKey from '$lib/icons/iKey.svelte';
	import IPerson from '$lib/icons/iPerson.svelte';
	import IPersonAdd from '$lib/icons/iPersonAdd.svelte';
	let username = $state<string>('1@pb.com');
	let password = $state<string>('1@pb.com');
</script>

<Layout className="justify-center my-4 items-center">
	<form class="items-left flex flex-col gap-4 rounded-2xl">
		<span
			><Title text="Welcome!" />
			<Title text="Please sign in to continue." /></span
		>
		<Input placeholder="Username" name="email" type="text" bind:value={username}>
			<IPerson />
		</Input>
		<Input placeholder="Password" name="password" type="password" bind:value={password}>
			<IKey />
		</Input>
		<Link text="Forgot your password?" />
		<div class="flex gap-2">
			<BtnAlt text="Sign up">
				<IPersonAdd />
			</BtnAlt>
		</div>
	</form>
</Layout>
