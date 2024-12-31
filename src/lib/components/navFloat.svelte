<script lang="ts" module>
	import IBoard from '$lib/icons/iBoard.svelte';
	import IDocText from '$lib/icons/iDocText.svelte';
	import IEdit from '$lib/icons/iEdit.svelte';
	import ISearch from '$lib/icons/iSearch.svelte';
	import IBox from './ui/iBox.svelte';
	import { goto } from '$app/navigation';
	import Layout from './ui/layout.svelte';
	import Button from './ui/button.svelte';
	import { NavFloat } from '$lib/context/navFloatContext.svelte';
	import { NavItems } from '$lib/context/navItemContext.svelte';
</script>

{#if NavFloat}
	<nav class="relative flex w-full justify-center">
		<Layout
			row
			className="fixed bottom-0 mb-4 items-center justify-center rounded-full bg-blue-500 shadow-lg"
		>
			{#each NavItems as item}
				<Button text={item.icon} />
			{/each}
		</Layout>
	</nav>
{/if}

<!--
<div class="mx-6 my-2 flex items-center">
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-400 p-2"
				color="text-gray-50"
			>
				<ISearch />
			</IBox>
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-400 p-2"
				color="text-gray-50"
				onclick={() => {
					goto('/');
				}}
			>
				<IBoard />
			</IBox>
			<div class="mx-2 h-6 w-0.5 rounded bg-gray-50"></div>
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-400 p-2"
				color="text-gray-50"
			>
				<IDocText />
			</IBox>
			<IBox
				className="rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-400 p-2"
				color="text-gray-50"
				onclick={() => {
					goto('/new');
				}}
			>
				<IEdit />
			</IBox>
		</div>
-->
