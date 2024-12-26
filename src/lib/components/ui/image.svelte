<script lang="ts">
	interface ImageProps {
		src?: string;
		alt?: string;
		class?: string;
	}

	let { src, alt, class: className }: ImageProps = $props();
</script>

<div class={`group relative ${className} overflow-hidden`}>
	<img
		{src}
		{alt}
		class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
	/>
</div>
