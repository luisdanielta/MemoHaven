<script lang="ts">
	let { color, children }: { color: string; children?: any } = $props();
</script>

<span class={`${color}`}>{@render children()}</span>
