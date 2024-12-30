<script lang="ts">
	interface IIn {
		placeholder?: string;
	}

	let { placeholder }: IIn = $props();
</script>

<input
	type="text"
	class="placeholder:font-sm rounded-2xl border-2 border-gray-500 bg-gray-50 px-4 py-2 shadow placeholder:font-light placeholder:text-gray-400"
	placeholder="Into {placeholder}"
/>
