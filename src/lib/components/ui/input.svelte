<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	interface IInput {
		placeholder?: string;
		children?: any;
		type?: HTMLInputTypeAttribute | null | undefined;
		name?: string;
		value?: any;
		onchange?: any;
	}

	let { placeholder, children, type, name, value = $bindable(), onchange }: IInput = $props();

	/* 
	onmouseover={(event) => toggleFocus(event, true)}
	onmouseout={(event) => toggleFocus(event, false)}

	function toggleFocus(event: MouseEvent, focus: boolean) {
		const input: HTMLElement | null = (event.currentTarget as HTMLElement).querySelector(
			`input[name="${name}"]`
		);
		if (input && focus) {
			input.focus();
		} else if (input) {
			input.blur();
		}
	}
	
	<!-- svelte-ignore a11y_mouse_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	*/
</script>

<div
	class="max-w-144 group flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-transparent bg-blue-100 px-4 py-6 transition-colors duration-100 ease-out hover:border-blue-200 hover:ease-in"
>
	{#if children}
		<div class="text-blue-500 group-hover:text-blue-600">{@render children?.()}</div>
	{/if}
	<input
		{name}
		{onchange}
		bind:value
		{type}
		class="border-none bg-blue-100 p-0 text-lg font-normal text-gray-900 transition-colors duration-100 ease-out placeholder:text-gray-400 hover:ease-in focus:ring-0 group-hover:placeholder:text-gray-500"
		{placeholder}
	/>
</div>
