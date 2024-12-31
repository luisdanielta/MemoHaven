<script lang="ts">
	import { goto } from '$app/navigation';
	import Layout from '$lib/components/ui/layout.svelte';
	import { authService } from '$lib/core/ports/authPort';
	let username = $state<string>('');
	let password = $state<string>('');

	function handleSubmit(event: SubmitEvent): void {
		event.preventDefault();
		authService.signIn(username, password);
		goto('/');
	}
</script>

<Layout className="p-4 justify-center h-screen items-center">
	<div
		class="flex h-full w-full flex-col items-center justify-evenly gap-4 rounded-2xl bg-gray-50 px-4 py-6 shadow"
	>
		<form class="flex w-auto flex-col gap-4" onsubmit={handleSubmit}>
			<label class="flex flex-col gap-2 text-gray-500">
				Username
				<input
					type="text"
					placeholder="Into"
					name="email"
					bind:value={username}
					class="placeholder:font-sm rounded-2xl border-2 border-gray-500 bg-gray-50 px-4 py-2 shadow placeholder:font-light placeholder:text-gray-400"
				/>
			</label>
			<label class="flex flex-col gap-2 text-gray-500">
				Password
				<input
					bind:value={password}
					type="text"
					name="password"
					class="placeholder:font-sm rounded-2xl border-2 border-gray-500 bg-gray-50 px-4 py-2 shadow placeholder:font-light placeholder:text-gray-400"
					placeholder="Into"
				/>
			</label>
			<button
				type="submit"
				class={`rounded-2xl bg-mainC-500 px-6 py-2 text-gray-50 shadow-md hover:bg-mainC-400 hover:shadow-lg`}
				>Sign in
			</button>
		</form>
	</div>
</Layout>
