<script lang="ts">
	interface layoutProps {
		children: any;
		className?: string;
		row?: boolean;
	}
	let { children, className, row }: layoutProps = $props();
</script>

<section class={`flex ${row ? 'flex-row' : 'flex-col'} gap-4 ${className}`}>
	{@render children()}
</section>
