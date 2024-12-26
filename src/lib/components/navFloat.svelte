<script lang="ts">
	import IBoard from '$lib/icons/iBoard.svelte';
	import IDocText from '$lib/icons/iDocText.svelte';
	import IEdit from '$lib/icons/iEdit.svelte';
	import ISearch from '$lib/icons/iSearch.svelte';
</script>

<div class="relative flex w-full justify-center">
	<div
		class="fixed bottom-0 mb-4 flex items-center justify-center rounded-full bg-mainC-500 py-4 shadow-lg"
	>
		<div class="mx-6 flex gap-4">
			<ISearch color="#fff" />
			<IBoard color="#fff" />
			<div class="w-0.5 rounded bg-gray-50"></div>
			<IDocText color="#fff" />
			<IEdit color="#fff" />
		</div>
	</div>
</div>
