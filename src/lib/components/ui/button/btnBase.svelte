<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface IBtnBase {
		text?: string;
		onclick?: any;
		className?: string;
		alt?: boolean;
		type?: HTMLButtonAttributes['type'];
		isDisabled?: boolean;
		children?: any;
	}
	let { text, onclick, className, type, isDisabled, alt, children }: IBtnBase = $props();

	let disabled = isDisabled ? 'cursor-not-allowed opacity-50 ' : 'cursor-pointer ';
</script>

<div
	class={`group flex max-w-36 gap-2 ${className} ${disabled} items-center justify-center rounded-2xl p-4 transition-colors duration-150 ease-out hover:ease-in`}
>
	{#if children}
		<div>{@render children?.()}</div>
	{/if}
	<button
		class={`truncate border-none text-lg font-normal ${disabled}`}
		{type}
		{onclick}
		disabled={isDisabled}
	>
		{text}
	</button>
</div>
