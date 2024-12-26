<script lang="ts">
	import IBoard from '$lib/icons/iBoard.svelte';
	import IDocText from '$lib/icons/iDocText.svelte';
	import IEdit from '$lib/icons/iEdit.svelte';
	import ISearch from '$lib/icons/iSearch.svelte';
	import IBox from './ui/iBox.svelte';
</script>

<div class="relative flex w-full justify-center">
	<div
		class="fixed bottom-0 mb-4 flex items-center justify-center rounded-full bg-mainC-500 shadow-lg"
	>
		<div class="mx-2 my-2 flex flex cursor-pointer items-center gap-2">
			<IBox
				className="flex items-center rounded-full group hover:bg-gray-50 transition-colors duration-500 ease-in-out"
				color="text-gray-50 hover:text-mainC-500 py-2 px-2 hover:px-4"
			>
				<ISearch />
				<p class="mx-2 hidden border-none text-sm group-hover:block">Search</p>
			</IBox>
			<IBox
				className="flex items-center rounded-full group hover:bg-gray-50 transition-colors duration-500 ease-in-out"
				color="text-gray-50 hover:text-mainC-500 py-2 px-2 hover:px-4"
			>
				<IBoard />
				<p class="mx-2 hidden border-none text-sm group-hover:block">Layout</p>
			</IBox>
			<div class="mx-2 h-6 w-0.5 rounded bg-gray-50"></div>
			<IBox
				className="flex items-center rounded-full group hover:bg-gray-50 transition-colors duration-500 ease-in-out"
				color="text-gray-50 hover:text-mainC-500 py-2 px-2 hover:px-4"
			>
				<IDocText />
				<p class="mx-2 hidden border-none text-sm group-hover:block">Template</p>
			</IBox>
			<IBox
				className="flex items-center rounded-full group hover:bg-gray-50 transition-colors duration-500 ease-in-out"
				color="text-gray-50 hover:text-mainC-500 py-2 px-2 hover:px-4"
			>
				<IEdit />
				<p class="mx-2 hidden border-none text-sm group-hover:block">Add note</p>
			</IBox>
		</div>
	</div>
</div>
