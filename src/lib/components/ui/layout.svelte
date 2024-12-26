<script lang="ts">
	interface layoutProps {
		children: any;
		className?: string;
		row?: boolean;
	}
	let { children, className, row }: layoutProps = $props();
</script>

<section class={`m-4 flex ${row ? 'flex-row' : 'flex-col'} gap-4 ${className}`}>
	{@render children()}
</section>
