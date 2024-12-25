<script lang="ts">

	interface iButton {
		text?: string;
		icon?: any;
		alt?: boolean;
		onclick?: any;
		className?: string;
		children?: any;
	}

	let { text, icon, alt, onclick, className, children }: iButton = $props();
</script>

{#if icon}
	<button
		class={`${className} hover:border-maniC-600 flex gap-2 rounded-xl border-2 border-mainC-500 p-2`}
		{onclick}
	>
		{@render icon('#000')}
	</button>
{:else}
	<button
		class={`${className} rounded-xl bg-mainC-500 px-6 py-2 text-gray-50 shadow-lg hover:bg-mainC-400 hover:shadow-xl`}
		{onclick}>{text}</button
	>
{/if}
