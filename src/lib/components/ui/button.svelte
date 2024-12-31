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

<div
	class="flex w-min cursor-pointer justify-center rounded-2xl border-2 border-transparent bg-mainC-100 px-2 py-4 text-mainC-500 transition-colors duration-150 ease-out hover:border-mainC-200 hover:text-mainC-600 hover:ease-in"
>
	<button class="mx-4 truncate border-none text-lg font-normal">{text}</button>
</div>
