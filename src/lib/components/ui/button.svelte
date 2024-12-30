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

<button
	class={`${className} rounded-2xl bg-mainC-500 px-6 py-2 text-gray-50 shadow-md hover:bg-mainC-400 hover:shadow-lg`}
	{onclick}
	>{text}
</button>
