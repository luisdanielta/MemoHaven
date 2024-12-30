<script lang="ts">
	interface InBox {
		color?: string;
		children?: any;
		className?: string;
		onclick?: any;
	}
	let { color, children, className, onclick }: InBox = $props();
</script>

<button class={`cursor-pointer ${className} ${color}`} {onclick}>{@render children()}</button>
