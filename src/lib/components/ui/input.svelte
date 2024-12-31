<script lang="ts">
	interface IInput {
		placeholder?: string;
	}

	let { placeholder }: IInput = $props();
</script>

<div
	class="group flex w-min cursor-pointer justify-center rounded-2xl bg-mainC-100 px-2 py-4 transition-shadow duration-150 ease-out hover:shadow hover:ease-in"
>
	<input
		type="text"
		class="border-none bg-mainC-100 text-lg font-medium text-gray-900 focus:ring-0"
		{placeholder}
	/>
</div>
