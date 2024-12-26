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
		<div class="mx-6 my-2 flex items-center">
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
				color="text-gray-50"
			>
				<ISearch />
			</IBox>
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
				color="text-gray-50"
			>
				<IBoard />
			</IBox>
			<div class="mx-2 h-6 w-0.5 rounded bg-gray-50"></div>
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
				color="text-gray-50"
			>
				<IDocText />
			</IBox>
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-mainC-400 p-2"
				color="text-gray-50"
			>
				<IEdit />
			</IBox>
		</div>
	</div>
</div>
