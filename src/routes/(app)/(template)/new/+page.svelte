<script lang="ts">
	import IBox from '$lib/components/ui/iBox.svelte';
	import Layout from '$lib/components/ui/layout.svelte';
	import IEdit from '$lib/icons/iEdit.svelte';
</script>

<Layout className="m-4">
	<form class="flex rounded-2xl bg-gray-50 px-4 py-6 shadow md:w-1/2">
		<label class="flex gap-2 font-medium text-gray-500">
			<input
				type="text"
				class="placeholder:font-sm rounded-2xl border-2 border-gray-500 bg-gray-50 px-4 py-2 shadow placeholder:font-light placeholder:text-gray-400"
				placeholder="Into to title"
			/>
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
				color="text-mainC-500 hover:text-gray-50"
			>
				<IEdit />
			</IBox>
		</label>
	</form>
</Layout>
