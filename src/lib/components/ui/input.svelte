<script lang="ts">
	interface IInput {
		placeholder?: string;
		children?: any;
	}

	let { placeholder, children }: IInput = $props();
</script>

<div
	class="group flex w-min cursor-pointer items-center justify-center rounded-2xl border-2 border-transparent bg-blue-100 px-4 py-6 transition-colors duration-150 ease-out hover:border-blue-200 hover:ease-in"
>
	{#if children}
		<div class="mx-2 text-blue-500 group-hover:text-blue-600">{@render children()}</div>
	{/if}
	<input
		type="text"
		class="border-none bg-blue-100 p-0 text-lg font-normal text-gray-900 focus:ring-0 group-hover:placeholder:text-gray-600"
		{placeholder}
	/>
</div>
