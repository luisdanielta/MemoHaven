<script lang="ts">
	interface InBox {
		color?: string;
		children?: any;
		className?: string;
	}
	let { color, children, className }: InBox = $props();
</script>

<span class={`${className} ${color}`}>{@render children()}</span>
